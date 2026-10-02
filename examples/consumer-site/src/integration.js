import { normalizeAppearance } from '../../../src/core/appearance.js';

function htmlAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

export function integrationCode({ mode, calculator, definition, locale, theme, appearance, host }) {
  const title = definition.titles[locale];
  const normalized = normalizeAppearance(appearance);
  const reactAppearance = appearance ? '\n      appearance={' + JSON.stringify(normalized) + '}' : '';
  const javascriptAppearance = appearance ? '\n    appearance: ' + JSON.stringify(normalized) + ',' : '';
  if (mode === 'react') {
    return `import { WidgetFrame } from '@nutrifit/widgets';\n\nexport function Calculator() {\n  return (\n    <WidgetFrame\n      widget="${calculator}"\n      locale="${locale}"\n      theme="${theme}"${reactAppearance}\n      hostUrl="${host}"\n      title={${JSON.stringify(title)}}\n    />\n  );\n}`;
  }
  if (mode === 'javascript') {
    return `<div id="nutrifit-calculator"></div>\n<script type="module">\n  import { mountWidget } from '${host}/widgets/v1/core/index.js';\n\n  mountWidget(document.getElementById('nutrifit-calculator'), {\n    widget: '${calculator}',\n    locale: '${locale}',\n    theme: '${theme}',${javascriptAppearance}\n    hostUrl: '${host}',\n  });\n</script>`;
  }
  const params = new URLSearchParams({ lang: locale, theme });
  for (const [key, value] of Object.entries(normalized)) params.set('appearance' + key[0].toUpperCase() + key.slice(1), String(value));
  return `<iframe\n  src="${htmlAttribute(host + definition.path + '?' + params)}"\n  title="${htmlAttribute(title)}"\n  loading="lazy"\n  referrerpolicy="no-referrer"\n  sandbox="allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox"\n  style="width:100%;height:${definition.height}px;border:0;border-radius:${normalized.radius ?? 20}px;background:transparent"\n></iframe>`;
}
