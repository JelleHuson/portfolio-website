export function renderPage({ eyebrow, title, intro, sections = [] }) {
  const main = document.getElementById('main');
  if (!main) return;
  main.replaceChildren();
  const article = document.createElement('article');
  article.className = 'prose';
  const label = document.createElement('p'); label.className = 'eyebrow'; label.textContent = eyebrow;
  const heading = document.createElement('h1'); heading.className = 'display'; heading.textContent = title;
  const lead = document.createElement('p'); lead.textContent = intro;
  article.append(label, heading, lead);
  sections.forEach(({ heading: sectionHeading, paragraphs = [], list = [] }) => {
    const h2 = document.createElement('h2'); h2.textContent = sectionHeading; article.append(h2);
    paragraphs.forEach((text) => { const p = document.createElement('p'); p.textContent = text; article.append(p); });
    if (list.length) { const ul = document.createElement('ul'); list.forEach((text) => { const li = document.createElement('li'); li.textContent = text; ul.append(li); }); article.append(ul); }
  });
  main.append(article);
}
