/** @satisfies {Record<string, import('./types.js').WidgetDefinition>} */
const definitions = {
  nutrition: Object.freeze({
    path: '/embed/nutrition-calculator',
    title: 'NutriFit nutrition calculator',
    height: 680,
  }),
};

/** Реестр содержит только реализованные и разрешённые для встраивания маршруты. */
export const widgets = Object.freeze(definitions);

/** @param {unknown} value @returns {value is import('./types.js').WidgetId} */
export function isWidgetId(value) {
  return typeof value === 'string' && Object.hasOwn(widgets, value);
}
