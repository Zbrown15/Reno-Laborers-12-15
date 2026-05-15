/** Canonical site origin for sitemap, robots, metadata, and JSON-LD */
export const SITE_URL = "https://renoweedpulling.com" as const;

export const SITE_NAME = "Reno Laborers Lawn Care";

export const SITE_EMAIL = "contact@renoweedpulling.com";

/** E.164 for structured data & tel: links consistency */
export const SITE_PHONE_E164 = "+18582754671";

/** Physical business address (JSON-LD PostalAddress + GBP alignment) */
export const SITE_POSTAL_ADDRESS = {
  streetAddress: "695 W 3rd St",
  addressLocality: "Reno",
  addressRegion: "NV",
  postalCode: "89503",
  addressCountry: "US",
} as const;

/** Social profiles (JSON-LD sameAs) */
export const SITE_SAME_AS = [
  "https://www.facebook.com/profile.php?id=61574513469275",
  "https://www.instagram.com/reno.laborers",
] as const;

export const SITE_LOGO_PATH = "/RLLogo.png";

/** Google Maps embed URL (footer + local signals) */
export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67522.84454665991!2d-119.88136140228083!3d39.4955495304114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c449296fc32c7%3A0xf36436e0d14c4b18!2sReno%20Laborers%20Lawn%20Care!5e0!3m2!1sen!2sus!4v1778809207446!5m2!1sen!2sus" as const;

export const SITE_DEFAULT_DESCRIPTION =
  "Professional lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping in Reno, Sparks, Spanish Springs, and Incline Village, Nevada.";

/**
 * Opening hours — keep in sync with Google Business Profile.
 * JSON-LD: Google recommends 24/7 as opens "00:00", closes "24:00" (Schema.org / LocalBusiness).
 * @see https://developers.google.com/search/docs/appearance/structured-data/local-business
 */
export const SITE_OPENING_HOURS_JSON_LD = {
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "00:00",
  closes: "24:00",
} as const;

/** Human-readable line matching typical Google Maps / GBP wording */
export const SITE_HOURS_DISPLAY_LINE = "Monday–Sunday: Open 24 hours";

/** Business / map pin coordinates (695 W 3rd St, Reno) */
export const SITE_GEO = {
  latitude: "39.47466",
  longitude: "-119.7935435",
} as const;

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
