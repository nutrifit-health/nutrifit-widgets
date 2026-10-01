/*! Copyright (c) 2026 NUTRIFIT LLC. MIT License. */
/* Классический script сохраняет привычную вставку, общий runtime загружается как ESM. */
(function () {
  'use strict';
  const target = /** @type {import('./browser/types.js').WidgetWindow} */ (window);
  if (target.NutriFitWidgets) {
    void target.NutriFitWidgets.scan().catch(reportError);
    return;
  }
  const script = document.currentScript;
  if (!(script instanceof HTMLScriptElement) || !script.src) {
    throw new Error('NutriFit: embed.js must be loaded with a script src');
  }
  const runtimeUrl = new URL('./core/index.js', script.src).href;
  /** @type {Promise<import('./browser/types.js').WidgetBrowserModule>} */
  const runtime = import(runtimeUrl);
  /** @param {unknown} error */
  function reportError(error) {
    window.dispatchEvent(new CustomEvent('nutrifit:loader-error', { detail: { code: 'load_failed' } }));
    console.error('NutriFit widget loader:', error);
  }
  /** @type {import('./browser/types.js').WidgetBrowserApi} */
  const api = {
    ready: runtime.then(() => undefined),
    mount: (container, options) => runtime.then((module) => module.mountWidget(container, options)),
    scan: (root) => runtime.then((module) => module.scanWidgets(root)),
  };
  target.NutriFitWidgets = api;
  // ready получает обработчик сразу: сбой сети не создаёт необработанный rejection.
  void api.ready.catch(reportError);
  const scan = () => { void api.scan().catch(() => undefined); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan, { once: true });
  else scan();
})();
