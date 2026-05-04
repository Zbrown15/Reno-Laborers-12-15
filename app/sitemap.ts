import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { getAllServiceSlugs } from "@/lib/services-data";
import { getAllServiceAreaSlugs } from "@/lib/service-areas-data";

const now = () => new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services`, lastModified: now(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/service-areas`, lastModified: now(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = [...getAllServiceSlugs()]
    .sort()
    .map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified: now(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  const areaPages: MetadataRoute.Sitemap = [...getAllServiceAreaSlugs()]
    .sort()
    .map((slug) => ({
      url: `${base}/service-areas/${slug}`,
      lastModified: now(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...servicePages, ...areaPages];
}
