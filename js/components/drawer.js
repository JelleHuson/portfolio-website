export function createDrawer({ title, content, onClose } = {}) {
  const drawer = document.createElement('aside');
  drawer.className = 'drawer';
  drawer.setAttribute('aria-label', title || 'Panel');
  const heading = document.createElement('h2');
  heading.textContent = title || 'Panel';
  const body = document.createElement('div');
  body.textContent = content || '';
  const close = document.createElement('button');
  close.className = 'button button--secondary';
  close.type = 'button';
  close.textContent = 'Close';
  close.addEventListener('click', () => { drawer.remove(); onClose?.(); });
  drawer.append(heading, body, close);
  return drawer;
}
