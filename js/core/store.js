export const store = {
  state: Object.create(null),
  listeners: new Map(),
  set(key, value) {
    this.state[key] = value;
    const listeners = this.listeners.get(key) ?? [];
    listeners.forEach((callback) => callback(value));
  },
  get(key, fallback = undefined) {
    return Object.prototype.hasOwnProperty.call(this.state, key) ? this.state[key] : fallback;
  },
  subscribe(key, callback) {
    const listeners = this.listeners.get(key) ?? [];
    listeners.push(callback);
    this.listeners.set(key, listeners);
    return () => {
      const next = (this.listeners.get(key) ?? []).filter((listener) => listener !== callback);
      this.listeners.set(key, next);
    };
  },
};
