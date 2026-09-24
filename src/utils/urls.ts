const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function siteUrl(path = "/"): string {
  if (/^(?:[a-z]+:|#)/i.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}` || "/";
}

export function pathWithoutBase(path: string): string {
  const strippedPath =
    basePath && path.startsWith(basePath) ? path.slice(basePath.length) : path;
  return strippedPath || "/";
}
