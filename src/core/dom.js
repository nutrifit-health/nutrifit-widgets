/** @param {Node} node @returns {node is HTMLElement} */
export function isHtmlElement(node) {
  const view = node.ownerDocument?.defaultView;
  return !!view && node instanceof view.HTMLElement;
}
