export function normalizeApiUrl(url: string): string {
  return url.endsWith('/') ? url : `${url}/`;
}
