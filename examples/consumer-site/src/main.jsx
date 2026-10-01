import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { WidgetFrame } from '@nutrifit/widgets';
import { mountWidget, widgets } from '@nutrifit/widgets/core';
import './styles.css';

function JavaScriptWidget({ widget, hostUrl, locale, theme, onEvent }) {
  const container = useRef(null);
  useEffect(() => {
    const handle = mountWidget(container.current, { widget, hostUrl, locale, theme, onEvent });
    return handle.destroy;
  }, [widget, hostUrl, locale, theme, onEvent]);
  return <div ref={container} />;
}
function App() {
  const [hostInput, setHostInput] = useState('http://localhost:5100');
  const [host, setHost] = useState('http://localhost:5100');
  const [error, setError] = useState('');
  const [locale, setLocale] = useState('en');
  const [theme, setTheme] = useState('light');
  const [mode, setMode] = useState('react');
  const [calculator, setCalculator] = useState('nutrition');
  const [events, setEvents] = useState([]);
  const onEvent = React.useCallback(event => setEvents(current => [...current.slice(-7), event]), []);
  const params = new URLSearchParams({ lang: locale, theme, parentOrigin: window.location.origin, instance: 'demo-iframe' });
  function configure(event) {
    event.preventDefault();
    try {
      const url = new URL(hostInput);
      if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error();
      setHost(url.origin); setError(''); setEvents([]);
    } catch { setError('Enter an HTTP(S) origin, without a path or credentials.'); }
  }
  return <main>
    <header><span className="eyebrow">INDEPENDENT CONSUMER · PUBLIC NPM PACKAGE</span><h1>Your website. NutriFit calculations.</h1><p>This page installs the public npm package. The calculator runs on the NutriFit host configured below.</p></header>
    <form className="controls" onSubmit={configure}>
      <label>Widget host<input type="url" value={hostInput} onChange={event => setHostInput(event.target.value)} required /></label><button type="submit">Connect</button>
      <label>Calculator<select value={calculator} onChange={event => { setCalculator(event.target.value); setEvents([]); }}>{Object.entries(widgets).map(([id, definition]) => <option key={id} value={id}>{definition.titles[locale]}</option>)}</select></label>
      <label>Language<select value={locale} onChange={event => setLocale(event.target.value)}><option value="en">English</option><option value="ru">Русский</option><option value="es">Español</option><option value="uk">Українська</option><option value="kk">Қазақша</option><option value="uz">O‘zbekcha</option></select></label>
      <label>Theme<select value={theme} onChange={event => setTheme(event.target.value)}><option value="light">Light</option><option value="dark">Dark</option><option value="auto">System</option></select></label>
    </form>
    {error && <p role="alert">{error}</p>}
    <nav aria-label="Integration method">{['react', 'javascript', 'iframe'].map(value => <button key={value} aria-pressed={mode === value} onClick={() => { setMode(value); setEvents([]); }}>{value === 'react' ? 'React component' : value === 'javascript' ? 'JavaScript' : 'Plain iframe'}</button>)}</nav>
    <section className="frame" aria-label="NutriFit calculator">
      {mode === 'react' && <WidgetFrame widget={calculator} hostUrl={host} locale={locale} theme={theme} onEvent={onEvent} />}
      {mode === 'javascript' && <JavaScriptWidget widget={calculator} hostUrl={host} locale={locale} theme={theme} onEvent={onEvent} />}
      {mode === 'iframe' && <iframe key={calculator + locale + theme + host} title={widgets[calculator].titles[locale]} src={host + widgets[calculator].path + '?' + params} height={widgets[calculator].height} referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox" />}
    </section>
    <aside><strong>Integration events</strong><p aria-live="polite">{events.join(' → ') || 'Waiting for the widget. Plain iframe does not register an event listener in this example.'}</p><p>Search, calculation and PDF require a deployed NutriFit backend. This page contains no simulated responses or credentials.</p></aside>
  </main>;
}
createRoot(document.getElementById('root')).render(<App />);
