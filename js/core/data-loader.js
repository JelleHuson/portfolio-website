export async function loadDataResource(resourcePath) {
  const response = await fetch(resourcePath, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${resourcePath}: ${response.status}`);
  }
  return response.json();
}
