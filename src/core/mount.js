import { widgets, isWidgetId } from './registry.js';
import { createWidgetUrl, FRAME_SANDBOX, normalizeLocale } from './options.js';
import { readWidgetMessage } from './protocol.js';
import { normalizeAppearance } from './appearance.js';

/** @type {WeakMap<HTMLElement, import('./types.js').WidgetHandle>} */
const mounted = new WeakMap();
let sequence = 0;

/**
 * Один контейнер — один экземпляр. destroy освобождает только созданный этим mount iframe.
 * @param {HTMLElement} container
 * @param {import('./types.js').WidgetMountOptions} options
 * @returns {import('./types.js').WidgetHandle}
 */
export function mountWidget(container, options) {
  const view = container?.ownerDocument?.defaultView;
  if (!view || !(container instanceof view.HTMLElement)) {
    throw new Error('NutriFit: expected a container in a browser document');
  }
  const existing = mounted.get(container);
  if (existing) return existing;
  if (!isWidgetId(options.widget)) throw new Error('NutriFit: unknown widget');

  const definition = widgets[options.widget];
  const instanceId = 'nf-' + (view.crypto.randomUUID?.() ?? Date.now().toString(36)) + '-' + (++sequence);
  const url = createWidgetUrl(definition, options, instanceId, view.location.origin);
  const iframe = container.ownerDocument.createElement('iframe');
  iframe.title = options.title || definition.titles[normalizeLocale(options.locale)];
  iframe.loading = 'lazy';
  iframe.referrerPolicy = 'no-referrer';
  iframe.setAttribute('sandbox', FRAME_SANDBOX);
  const radius = normalizeAppearance(options.appearance).radius ?? 20;
  iframe.style.cssText = `display:block;width:100%;height:${definition.height}px;border:0;border-radius:${radius}px;background:transparent;`;
  let destroyed = false;

  /** @param {MessageEvent<unknown>} event */
  const receive = (event) => {
    if (destroyed || event.origin !== url.origin || event.source !== iframe.contentWindow) return;
    const message = readWidgetMessage(event.data, instanceId);
    if (!message) return;
    if (message.event === 'resize') {
      iframe.style.height = Math.ceil(message.height) + 'px';
      return;
    }
    container.dispatchEvent(new view.CustomEvent('nutrifit:' + message.event, {
      detail: { instanceId, widget: options.widget },
    }));
    options.onEvent?.(message.event);
  };

  /** @type {import('./types.js').WidgetHandle} */
  const handle = {
    iframe,
    destroy() {
      if (destroyed) return;
      destroyed = true;
      view.removeEventListener('message', receive);
      iframe.remove();
      if (mounted.get(container) === handle) mounted.delete(container);
    },
  };
  view.addEventListener('message', receive);
  iframe.src = url.href;
  try {
    container.appendChild(iframe);
    mounted.set(container, handle);
  } catch (error) {
    handle.destroy();
    throw error;
  }
  return handle;
}
