export const HOST_URL = 'https://nutrifit.health';
export const FRAME_SANDBOX = 'allow-scripts allow-same-origin allow-forms allow-downloads allow-popups allow-popups-to-escape-sandbox';

/** @param {string} value */
export function normalizeOrigin(value) {
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password ||
      url.search || url.hash || url.pathname !== '/') {
    throw new Error('NutriFit: expected an HTTP(S) origin without a path or credentials');
  }
  return url.origin;
}

/** @param {unknown} value @returns {import('./types.js').WidgetLocale} */
export function normalizeLocale(value) {
  return value === 'ru' || value === 'es' ? value : 'en';
}

/** @param {unknown} value @returns {import('./types.js').WidgetTheme} */
export function normalizeTheme(value) {
  return value === 'dark' || value === 'auto' ? value : 'light';
}

/**
 * Путь берётся только из реестра, параметры не могут заменить origin или маршрут.
 * @param {import('./types.js').WidgetDefinition} definition
 * @param {import('./types.js').WidgetMountOptions} options
 * @param {string} instanceId
 * @param {string} parentOrigin
 */
export function createWidgetUrl(definition, options, instanceId, parentOrigin) {
  const url = new URL(definition.path, normalizeOrigin(options.hostUrl ?? HOST_URL));
  url.searchParams.set('instance', instanceId);
  url.searchParams.set('parentOrigin', normalizeOrigin(parentOrigin));
  url.searchParams.set('lang', normalizeLocale(options.locale));
  url.searchParams.set('theme', normalizeTheme(options.theme));
  if (options.campaign) url.searchParams.set('campaign', options.campaign.slice(0, 80));
  return url;
}
