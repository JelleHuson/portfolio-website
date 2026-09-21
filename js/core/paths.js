export function resolveAssetPaths(pathname) {
  return new URL(pathname.replace(/^\//, ''), document.baseURI || window.location.href).href;
}

export function relativePathFromImport(importMetaUrl, targetPath) {
  return new URL(targetPath.replace(/^\//, ''), importMetaUrl).href;
}

export function assetPath(pathname) {
  return pathname.replace(/^\//, '');
}

export function publicPath(pathname) {
  return pathname.replace(/^\//, '');
}
