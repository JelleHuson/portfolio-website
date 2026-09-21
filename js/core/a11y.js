export function announce(message) {
  const region = document.getElementById('scentmatch-live-region');
  if (!region) {
    const created = document.createElement('div');
    created.id = 'scentmatch-live-region';
    created.setAttribute('aria-live', 'polite');
    created.setAttribute('aria-atomic', 'true');
    created.style.position = 'absolute';
    created.style.width = '1px';
    created.style.height = '1px';
    created.style.overflow = 'hidden';
    created.style.clip = 'rect(0, 0, 0, 0)';
    created.style.whiteSpace = 'nowrap';
    document.body.appendChild(created);
    region = created;
  }
  region.textContent = message;
}
