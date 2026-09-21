const MEMORY_STORE = {};

function safeStorage() {
  try {
    const key = '__scentmatch_storage_test__';
    localStorage.setItem(key, 'ok');
    localStorage.removeItem(key);
    return window.localStorage;
  } catch (error) {
    return null;
  }
}

export const storage = safeStorage();

export function readJSON(key, fallback = null) {
  if (!storage) return fallback;

  try {
    const raw = storage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function writeJSON(key, value) {
  if (!storage) {
    MEMORY_STORE[key] = value;
    return true;
  }

  try {
    storage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    MEMORY_STORE[key] = value;
    return false;
  }
}

export function getItem(key, fallback = null) {
  if (!storage) return MEMORY_STORE[key] ?? fallback;
  return storage.getItem(key) ?? fallback;
}

export function setItem(key, value) {
  if (!storage) {
    MEMORY_STORE[key] = value;
    return true;
  }

  try {
    storage.setItem(key, value);
    return true;
  } catch {
    MEMORY_STORE[key] = value;
    return false;
  }
}

export function removeItem(key) {
  if (!storage) {
    delete MEMORY_STORE[key];
    return;
  }

  storage.removeItem(key);
}

export function clearAll() {
  if (!storage) {
    Object.keys(MEMORY_STORE).forEach((key) => delete MEMORY_STORE[key]);
    return;
  }

  storage.clear();
}
