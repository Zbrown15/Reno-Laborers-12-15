/** Canonical site origin for sitemap, robots, metadata, and JSON-LD */
export const SITE_URL = "https://renoweedpulling.com" as const;

export const SITE_NAME = "Reno Laborers";

export const SITE_EMAIL = "contact@renoweedpulling.com";

/** E.164 for structured data & tel: links consistency */
export const SITE_PHONE_E164 = "+18582754671";

export const SITE_LOGO_PATH = "/RLLogo.png";

export const SITE_DEFAULT_DESCRIPTION =
  "Professional lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping in Reno, Sparks, Spanish Springs, and Incline Village, Nevada.";

/** Primary service area centroid (Reno, NV) — Google Maps / local signals */
export const SITE_GEO = {
  latitude: "39.5296",
  longitude: "-119.8138",
} as const;

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
