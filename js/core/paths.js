export function resolveAssetPaths(pathname) {
  const base = document.baseURI || window.location.href;
  const resolved = new URL(pathname, base);
  return resolved.pathname;
}

export function relativePathFromImport(importMetaUrl, targetPath) {
  const baseUrl = new URL(importMetaUrl);
  const targetUrl = new URL(targetPath, baseUrl);
  return targetUrl.pathname;
}

export function assetPath(pathname) {
  return pathname.replace(/^\//, '');
}

export function publicPath(pathname) {
  const normalized = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  return normalized;
}
