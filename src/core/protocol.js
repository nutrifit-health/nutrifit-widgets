/** @param {unknown} value @returns {value is Record<string, unknown>} */
function isRecord(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Origin и source проверяются до разбора сообщения; наружу не попадает payload калькулятора.
 * @param {unknown} value
 * @param {string} instanceId
 * @returns {import('./types.js').WidgetMessage | null}
 */
export function readWidgetMessage(value, instanceId) {
  if (!isRecord(value) || value.type !== 'nutrifit:widget' || value.version !== 1 ||
      value.instanceId !== instanceId) return null;
  if (value.event === 'resize') {
    return typeof value.height === 'number' && Number.isFinite(value.height) &&
      value.height >= 100 && value.height <= 10000
      ? { event: 'resize', height: value.height } : null;
  }
  return value.event === 'ready' || value.event === 'calculated' || value.event === 'error'
    ? { event: value.event } : null;
}
