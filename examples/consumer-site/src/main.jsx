import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { WidgetFrame } from '../../../src/react/WidgetFrame.tsx';
import { mountWidget, widgets, normalizeAppearance } from '../../../src/core/index.js';
import { initialLocale, languages, translations } from './locales.js';
import { integrationCode } from './integration.js';
import { SelectControl } from './SelectControl.jsx';
import { AppearanceControls } from './AppearanceControls.jsx';
import './styles.css';

function JavaScriptWidget({ widget, hostUrl, locale, theme, appearance, onEvent }) {
  const container = useRef(null);
  useEffect(() => {
    const handle = mountWidget(container.current, { widget, hostUrl, locale, theme, appearance, onEvent });
    return handle.destroy;
  }, [widget, hostUrl, locale, theme, appearance, onEvent]);
  return <div ref={container} />;
}

class DemoErrorBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (!this.state.failed) return this.props.children;
    const t = translations[initialLocale()];
    return <main><h1>NutriFit</h1><p role="alert">{t.runtimeError}</p><button onClick={() => window.location.reload()}>{t.retry}</button></main>;
  }
}

function App() {
  const initialHost = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
    ? 'http://localhost:5100' : 'https://nutrifit.health';
  const [hostInput, setHostInput] = useState(initialHost);
  const [host, setHost] = useState(initialHost);
  const [invalidHost, setInvalidHost] = useState(false);
  const [locale, setLocale] = useState(initialLocale);
  const [theme, setTheme] = useState('light');
  const [appearance, setAppearance] = useState();
  const [mode, setMode] = useState('react');
  const [calculator, setCalculator] = useState('tdee');
  const [events, setEvents] = useState([]);
  const [copyState, setCopyState] = useState('idle');
  const t = translations[locale];
  const definition = widgets[calculator];
  const onEvent = useCallback(event => setEvents(current => [...current.slice(-7), event]), []);
  const params = new URLSearchParams({ lang: locale, theme, parentOrigin: window.location.origin, instance: 'demo-iframe' });
  for (const [key, value] of Object.entries(normalizeAppearance(appearance))) params.set('appearance' + key[0].toUpperCase() + key.slice(1), String(value));
  const code = integrationCode({ mode, calculator, definition, locale, theme, appearance, host });

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = translations[locale].pageTitle;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', locale);
    window.history.replaceState(null, '', url);
  }, [locale]);
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  useEffect(() => { setEvents([]); setCopyState('idle'); }, [calculator, locale, theme, appearance, mode, host]);

  function configure(event) {
    event.preventDefault();
    try {
      const url = new URL(hostInput);
      if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error();
      setHost(url.origin);
      setInvalidHost(false);
    } catch { setInvalidHost(true); }
  }
  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopyState('copied');
    } catch { setCopyState('error'); }
  }

  return <main>
    <header className="site-header">
      <a className="brand" href="https://nutrifit.health" target="_blank" rel="noopener noreferrer">
        <span className="brand-identity" role="img" aria-label="NutriFit" />
      </a>
      <nav className="header-actions" aria-label={t.documentation}>
        <a href={`https://github.com/nutrifit-health/nutrifit-widgets/blob/main/docs/${locale}/README.md`} target="_blank" rel="noopener noreferrer">{t.documentation}</a>
        <a href="https://github.com/nutrifit-health/nutrifit-widgets" target="_blank" rel="noopener noreferrer">GitHub</a>
        <label className="language-field">{t.language}<SelectControl value={locale} onChange={event => setLocale(event.target.value)}>{Object.entries(languages).map(([id, name]) => <option key={id} value={id} lang={id}>{name}</option>)}</SelectControl></label>
      </nav>
    </header>
    <section className="hero">
      <span className="eyebrow">{t.eyebrow}</span>
      <h1>{t.heading}</h1>
      <p>{t.intro}</p>
    </section>
    <section className="workspace" aria-label={t.preview}>
      <div className="controls">
        <label className="calculator-field">{t.calculator}<SelectControl value={calculator} onChange={event => setCalculator(event.target.value)}>{Object.entries(widgets).map(([id, entry]) => <option key={id} value={id}>{entry.titles[locale]}</option>)}</SelectControl></label>
        <label>{t.theme}<SelectControl value={theme} onChange={event => setTheme(event.target.value)}>{['light', 'dark', 'auto'].map(value => <option key={value} value={value}>{t[value]}</option>)}</SelectControl></label>
      </div>
      <AppearanceControls appearance={appearance} onChange={setAppearance} theme={theme} t={t} />
      <nav className="integration-tabs" aria-label={t.integration}>{['react', 'javascript', 'iframe'].map(value => <button key={value} aria-pressed={mode === value} onClick={() => setMode(value)}>{t[value]}</button>)}</nav>
      <div className="frame" aria-label={definition.titles[locale]}>
        {mode === 'react' && <WidgetFrame widget={calculator} hostUrl={host} locale={locale} theme={theme} appearance={appearance} onEvent={onEvent} />}
        {mode === 'javascript' && <JavaScriptWidget widget={calculator} hostUrl={host} locale={locale} theme={theme} appearance={appearance} onEvent={onEvent} />}
        {mode === 'iframe' && <iframe key={calculator + locale + theme + host + JSON.stringify(appearance)} title={definition.titles[locale]} src={host + definition.path + '?' + params} height={definition.height} style={{ borderRadius: appearance?.radius ?? 20, background: 'transparent' }} referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox" />}
      </div>
      <p className="connection-status" aria-live="polite">{mode === 'iframe' ? t.plainHint : `${t.connection}: ${events.length ? events.map(event => t[event]).join(' → ') : t.waiting}`}</p>
    </section>
    <section className="code-section" aria-labelledby="code-title">
      <div className="section-heading"><h2 id="code-title">{t.code}</h2><button onClick={copyCode}>{copyState === 'copied' ? t.copied : t.copy}</button></div>
      <p>{t.codeHint}</p>
      {mode === 'react' && <p>{t.install} <code>npm install @nutrifit/widgets</code></p>}
      <pre><code>{code}</code></pre>
      <p role="status">{copyState === 'error' ? t.copyError : copyState === 'copied' ? t.copied : ''}</p>
    </section>
    <details className="host-settings">
      <summary>{t.hostSettings}</summary>
      <form className="host-form" onSubmit={configure}>
        <label>{t.host}<input type="url" value={hostInput} onChange={event => setHostInput(event.target.value)} required aria-invalid={invalidHost} aria-describedby="host-hint" /></label>
        <button type="submit">{t.connect}</button>
      </form>
      <p id="host-hint">{t.hostHint}</p>
      {invalidHost && <p role="alert">{t.invalidHost}</p>}
    </details>
    <footer><p>{t.serviceHint}</p><small>{t.footer}</small></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<DemoErrorBoundary><App /></DemoErrorBoundary>);
