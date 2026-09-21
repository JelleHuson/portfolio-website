(function setupTheme() {
  let saved = null;
  try { saved = localStorage.getItem('scentmatch-theme'); } catch { /* storage may be blocked */ }
  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', saved || (prefersDark ? 'dark' : 'light'));
})();
