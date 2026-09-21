export function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

export function qsa(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

export function addClass(elements, className) {
  const list = Array.isArray(elements) ? elements : [elements];
  list.forEach((element) => element && element.classList.add(className));
}

export function removeClass(elements, className) {
  const list = Array.isArray(elements) ? elements : [elements];
  list.forEach((element) => element && element.classList.remove(className));
}

export function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  const { textContent, className, attributes = {} } = options;

  if (textContent) element.textContent = textContent;
  if (className) element.className = className;

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}
