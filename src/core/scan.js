import { isWidgetId } from './registry.js';
import { normalizeLocale, normalizeTheme } from './options.js';
import { mountWidget } from './mount.js';
import { isHtmlElement } from './dom.js';

const selector = '[data-nutrifit-widget]';

/**
 * Включает сам root. Ошибка одного контейнера не мешает остальным виджетам.
 * @param {import('./types.js').WidgetScanRoot} [root]
 * @returns {import('./types.js').WidgetScanResult}
 */
export function scanWidgets(root = document) {
  const elements = Array.from(root.querySelectorAll(selector));
  if (isHtmlElement(root) && root.matches(selector)) elements.unshift(root);
  /** @type {import('./types.js').WidgetScanResult} */
  const result = { widgets: [], errors: [] };
  for (const element of elements) {
    if (!isHtmlElement(element)) continue;
    try {
      const widget = element.dataset.nutrifitWidget;
      if (!isWidgetId(widget)) throw new Error('NutriFit: unknown data-nutrifit-widget');
      result.widgets.push(mountWidget(element, {
        widget,
        integrationId: element.dataset.integrationId,
        locale: normalizeLocale(element.dataset.locale),
        theme: normalizeTheme(element.dataset.theme),
        appearance: {
          background: element.dataset.background,
          surface: element.dataset.surface,
          text: element.dataset.text,
          muted: element.dataset.muted,
          accent: element.dataset.accent,
          border: element.dataset.border,
          radius: element.dataset.radius === undefined ? undefined : Number(element.dataset.radius),
        },
        campaign: element.dataset.campaign,
        title: element.dataset.title,
      }));
    } catch (cause) {
      const error = cause instanceof Error ? cause : new Error('NutriFit: could not mount widget');
      result.errors.push({ element, error });
      element.dispatchEvent(new CustomEvent('nutrifit:error', { detail: { code: 'mount_failed' } }));
    }
  }
  return result;
}
