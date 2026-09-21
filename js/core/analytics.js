export function trackEvent(eventName, props = {}) {
  if (!eventName || typeof eventName !== 'string') return;
  if (typeof window === 'undefined') return;

  const payload = {
    event: eventName,
    ...props,
  };

  window.dispatchEvent(new CustomEvent('scentmatch:analytics', { detail: payload }));
}
