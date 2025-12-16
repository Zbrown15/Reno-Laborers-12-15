import { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/lib/services-data';
import { getAllServiceAreaSlugs } from '@/lib/service-areas-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://renolaborers.com';
  const serviceSlugs = getAllServiceSlugs();
  const serviceAreaSlugs = getAllServiceAreaSlugs();

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/service-areas`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...serviceAreaSlugs.map((slug) => ({
      url: `${baseUrl}/service-areas/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return routes;
}

