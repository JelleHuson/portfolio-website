import { SITE_NAME, DISCLOSURE_TEXT } from '../config.js';
import { createElement } from '../core/dom.js';
import { showSettingsDrawer } from './settings-drawer.js';

function link(href, label) {
  return createElement('a', { textContent: label, attributes: { href } });
}

function buildHeader() {
  const header = createElement('header', { className: 'site-header' });
  const inner = createElement('div', { className: 'site-header__inner' });
  const brand = link('index.html', SITE_NAME);
  brand.className = 'brand';
  inner.append(brand);
  const nav = createElement('nav', { className: 'site-nav', attributes: { 'aria-label': 'Primary navigation' } });
  const links = createElement('div', { className: 'site-nav__links' });
  [['quiz.html', 'Take the quiz'], ['explore.html', 'Explore'], ['notes.html', 'Notes'], ['learn.html', 'Learn']].forEach(([href, label]) => links.append(link(href, label)));
  const settings = createElement('button', { textContent: 'Settings', className: 'button button--secondary', attributes: { type: 'button', 'aria-label': 'Open settings' } });
  settings.addEventListener('click', showSettingsDrawer);
  const menu = createElement('button', { textContent: 'Menu', className: 'button button--icon site-nav__menu', attributes: { type: 'button', 'aria-expanded': 'false', 'aria-controls': 'mobile-menu' } });
  menu.addEventListener('click', () => {
    const panel = document.getElementById('mobile-menu');
    const open = panel.hasAttribute('hidden');
    panel.toggleAttribute('hidden', !open);
    menu.setAttribute('aria-expanded', String(open));
  });
  nav.append(links, settings, menu);
  inner.append(nav);
  header.append(inner);
  const panel = createElement('div', { className: 'site-menu', attributes: { id: 'mobile-menu', hidden: '' } });
  [['quiz.html', 'Take the quiz'], ['explore.html', 'Explore fragrances'], ['notes.html', 'Explore notes'], ['learn.html', 'Learn the basics']].forEach(([href, label]) => panel.append(link(href, label)));
  header.append(panel);
  return header;
}

function buildFooter() {
  const footer = createElement('footer', { className: 'site-footer' });
  const inner = createElement('div', { className: 'site-footer__inner' });
  const statement = createElement('p', { textContent: 'Brand names are trademarks of their respective owners. This site is independent and not affiliated with or endorsed by any brand.' });
  const links = createElement('div', { className: 'site-footer__links' });
  [['about.html', 'About'], ['privacy.html', 'Privacy'], ['terms.html', 'Terms'], ['mailto:hello@example.com', 'Contact']].forEach(([href, label]) => links.append(link(href, label)));
  const disclosure = createElement('small', { textContent: DISCLOSURE_TEXT });
  inner.append(statement, links, disclosure);
  footer.append(inner);
  return footer;
}

export function initializeLayout() {
  const shell = document.getElementById('app-shell');
  if (!shell) return null;
  const main = createElement('main', { className: 'page-container', attributes: { id: 'main', tabindex: '-1' } });
  const skip = link('#main', 'Skip to main content');
  skip.className = 'skip-link';
  shell.replaceChildren(skip, buildHeader(), main, buildFooter());
  window.dispatchEvent(new CustomEvent('scentmatch:layout-ready', { detail: { main } }));
  return main;
}

initializeLayout();
