import { renderPage } from './content-page.js';
const render = () => renderPage({ eyebrow: '404', title: 'That page has drifted away.', intro: 'The link may be outdated or the page may not have been built yet.', sections: [{ heading: 'Try a fresh start', paragraphs: ['Return home and explore the ScentMatch foundation.'], }] });
window.addEventListener('scentmatch:layout-ready', render); if (document.getElementById('main')) render();
