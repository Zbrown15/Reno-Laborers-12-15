import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

/**
 * Allow all common crawlers to index public HTML; only block /api/ (non-page endpoints).
 * Does not disallow /_next/ so bots can fetch JS/CSS if needed.
 */
const CRAWLER_ALLOW: { allow: string; disallow: string[] } = {
  allow: "/",
  disallow: ["/api/"],
};

const USER_AGENTS = [
  "*",
  "Googlebot",
  "Googlebot-Image",
  "Google-Extended",
  "GoogleOther",
  "Bingbot",
  "Slurp",
  "DuckDuckBot",
  "Baiduspider",
  "YandexBot",
  "facebookexternalhit",
  "Twitterbot",
  "LinkedInBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: USER_AGENTS.map((userAgent) => ({
      userAgent,
      ...CRAWLER_ALLOW,
    })),
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
