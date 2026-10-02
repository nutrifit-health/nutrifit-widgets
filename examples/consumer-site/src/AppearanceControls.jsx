import React from 'react';

const light = { background: '#f5f7f4', surface: '#ffffff', text: '#183b2e', muted: '#5b6e64', accent: '#245b3e', border: '#dce5dc', radius: 20 };
const dark = { background: '#131a17', surface: '#1c2721', text: '#edf6ef', muted: '#acbeb1', accent: '#a7d48b', border: '#35483c', radius: 20 };

export function AppearanceControls({ appearance, onChange, theme, t }) {
  const darkTheme = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const defaults = darkTheme ? dark : light;
  return (
    <details className="appearance-section">
      <summary>{t.appearanceTitle}</summary>
      <p>{t.appearanceHint}</p>
      <label className="appearance-enabled">
        <input type="checkbox" checked={!!appearance} onChange={event => onChange(event.target.checked ? { ...defaults } : undefined)} />
        {t.appearanceEnable}
      </label>
      {appearance && <>
        <div className="appearance-grid">
          {Object.keys(light).filter(key => key !== 'radius').map(key => <label key={key}>
            {t['appearance' + key[0].toUpperCase() + key.slice(1)]}
            <input type="color" value={appearance[key] === 'transparent' ? defaults[key] : appearance[key]} onChange={event => onChange({ ...appearance, [key]: event.target.value })} disabled={key === 'background' && appearance.background === 'transparent'} />
          </label>)}
          <label>{t.appearanceRadius}<input type="range" min="0" max="32" value={appearance.radius} onChange={event => onChange({ ...appearance, radius: Number(event.target.value) })} /><output>{appearance.radius} px</output></label>
        </div>
        <label className="appearance-enabled">
          <input type="checkbox" checked={appearance.background === 'transparent'} onChange={event => onChange({ ...appearance, background: event.target.checked ? 'transparent' : defaults.background })} />
          {t.appearanceTransparent}
        </label>
      </>}
    </details>
  );
}
