export function showToast(message) {
  const toast = document.getElementById('scentmatch-toast') || document.createElement('div');
  toast.id = 'scentmatch-toast';
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  toast.hidden = false;
  if (!toast.isConnected) document.body.append(toast);
  window.setTimeout(() => { toast.hidden = true; }, 3500);
}
window.addEventListener('scentmatch:toast', (event) => showToast(event.detail));
