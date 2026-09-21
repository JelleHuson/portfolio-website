import { renderPage } from './content-page.js';
const render = () => renderPage({ eyebrow: 'Offline', title: 'You are exploring without a connection.', intro: 'Once the progressive web app foundation is complete, cached pages and data will remain available here.', sections: [{ heading: 'Try again later', paragraphs: ['Reconnect and refresh when you are ready. Your local preferences are not sent anywhere.'], }] });
window.addEventListener('scentmatch:layout-ready', render); if (document.getElementById('main')) render();
