import { createElement } from '../core/dom.js';
import { clearAll } from '../core/storage.js';

export function showSettingsDrawer() {
  const existing = document.getElementById('settings-drawer');
  if (existing) { existing.hidden = false; return; }
  const drawer = createElement('aside', { className: 'drawer', attributes: { id: 'settings-drawer', 'aria-labelledby': 'settings-title' } });
  const heading = createElement('h2', { textContent: 'Settings', attributes: { id: 'settings-title' } });
  const close = createElement('button', { textContent: 'Close', className: 'button button--secondary', attributes: { type: 'button' } });
  close.addEventListener('click', () => { drawer.hidden = true; });
  const theme = createElement('button', { textContent: 'Toggle theme', className: 'button button--primary', attributes: { type: 'button' } });
  theme.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('scentmatch-theme', next); } catch { /* restricted storage is okay */ }
  });
  const clear = createElement('button', { textContent: 'Clear local data', className: 'button button--ghost', attributes: { type: 'button' } });
  clear.addEventListener('click', () => { clearAll(); window.dispatchEvent(new CustomEvent('scentmatch:toast', { detail: 'Local data cleared.' })); });
  drawer.append(heading, createElement('p', { textContent: 'Your preferences and future quiz answers stay on this device.' }), theme, clear, close);
  document.body.append(drawer);
}
