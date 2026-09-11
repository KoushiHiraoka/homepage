import { SITE } from "@/config";

/** Resolve asset URLs under the site's base path without duplicating it. */
export function toSiteURL(pathOrURL: string): URL {
  const siteURL = new URL(SITE.website);
  const siteBasePath = siteURL.pathname.endsWith("/")
    ? siteURL.pathname
    : `${siteURL.pathname}/`;

  try {
    return new URL(pathOrURL);
  } catch {
    const cleanPath = pathOrURL.startsWith(siteBasePath)
      ? pathOrURL.slice(siteBasePath.length)
      : pathOrURL.replace(/^\/+/, "");

    return new URL(cleanPath, siteURL);
  }
}
