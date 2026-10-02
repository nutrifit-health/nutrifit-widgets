/** @type {ReadonlyArray<keyof Omit<import('./types.js').WidgetAppearance, 'radius'>>} */
const colors = ['background', 'surface', 'text', 'muted', 'accent', 'border'];

/** @param {unknown} value @returns {import('./types.js').WidgetAppearance} */
export function normalizeAppearance(value) {
  if (value === undefined) return {};
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('NutriFit: invalid appearance');
  const input = /** @type {Record<string, unknown>} */ (value);
  /** @type {import('./types.js').WidgetAppearance} */
  const result = {};
  for (const key of colors) {
    const color = input[key];
    if (color === undefined) continue;
    if (key === 'background' && color === 'transparent') { result[key] = color; continue; }
    if (typeof color !== 'string' || !/^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(color)) {
      throw new Error('NutriFit: appearance colors must be HEX');
    }
    result[key] = color.toLowerCase();
  }
  if (input.radius !== undefined) {
    if (typeof input.radius !== 'number' || !Number.isInteger(input.radius) || input.radius < 0 || input.radius > 32) {
      throw new Error('NutriFit: appearance radius must be an integer from 0 to 32');
    }
    result.radius = input.radius;
  }
  return result;
}

/** @param {import('./types.js').WidgetAppearance} [appearance] @returns {Record<string, string>} */
export function appearanceStyle(appearance) {
  const normalized = normalizeAppearance(appearance);
  /** @type {Record<string, string>} */
  const style = {};
  for (const key of colors) {
    const color = normalized[key];
    if (color !== undefined) style['--nutrifit-' + key] = color;
  }
  if (normalized.radius !== undefined) style['--nutrifit-radius'] = normalized.radius + 'px';
  if (normalized.accent) {
    const hex = normalized.accent.slice(1);
    const expanded = hex.length === 3 ? [...hex].map(char => char + char).join('') : hex;
    const channels = [0, 2, 4].map(offset => {
      const value = parseInt(expanded.slice(offset, offset + 2), 16) / 255;
      return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
    });
    const luminance = 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
    style['--nutrifit-accent-text'] = luminance > 0.179 ? '#111111' : '#ffffff';
  }
  return style;
}
