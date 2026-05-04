import type { ServiceData } from "@/lib/services-data";
import type { ServiceAreaData } from "@/lib/service-areas-data";
import {
  SITE_URL,
  SITE_NAME,
  SITE_EMAIL,
  SITE_PHONE_E164,
  SITE_LOGO_PATH,
  SITE_DEFAULT_DESCRIPTION,
  SITE_GEO,
  absoluteUrl,
} from "@/lib/site-config";
import { getServiceAreaGeo } from "@/lib/seo/service-area-geo";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbListSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageSchema(path: string, name: string, description: string) {
  const url = absoluteUrl(path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
  };
}

/** Home: WebPage + primary image for rich context */
export function homeWebPageSchema() {
  const url = SITE_URL;
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${SITE_NAME} — Lawn Care in Reno & Sparks, Nevada`,
    description: SITE_DEFAULT_DESCRIPTION,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE_LOGO_PATH),
    },
  };
}

export function serviceJsonLd(service: ServiceData) {
  const path = `/services/${service.slug}`;
  const url = absoluteUrl(path);
  const imageUrl = service.image.startsWith("http")
    ? service.image
    : absoluteUrl(service.image);

  const areaServed = [
    { "@type": "City", name: "Reno", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "Sparks", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "Spanish Springs", containedInPlace: { "@type": "State", name: "Nevada" } },
    { "@type": "City", name: "Incline Village", containedInPlace: { "@type": "State", name: "Nevada" } },
  ];

  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${service.name} in Reno & Sparks, NV | ${SITE_NAME}`,
    description: service.seoParagraph,
    url,
    image: imageUrl,
    provider: { "@id": BUSINESS_ID },
    areaServed,
    serviceType: service.serviceType,
  };
}

export function serviceAreaPlaceAndWebSchema(area: ServiceAreaData) {
  const path = `/service-areas/${area.slug}`;
  const url = absoluteUrl(path);
  const geo = getServiceAreaGeo(area.slug);

  const place = {
    "@type": "Place",
    "@id": `${url}#place`,
    name: `${SITE_NAME} — ${area.name}, NV`,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: "NV",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `Lawn Care Services in ${area.name} | ${SITE_NAME}`,
    description: area.seoParagraph,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": `${url}#place` },
    mainEntity: { "@id": `${url}#place` },
  };

  return [place, webPage];
}

/** Global @graph: WebSite + LandscapingBusiness (Google Maps / local pack) */
export function globalBusinessGraph() {
  const logoUrl = absoluteUrl(SITE_LOGO_PATH);
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE_NAME} Reno NV`)}`;

  return [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DEFAULT_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": BUSINESS_ID },
    },
    {
      "@type": "LandscapingBusiness",
      "@id": BUSINESS_ID,
      name: SITE_NAME,
      description: SITE_DEFAULT_DESCRIPTION,
      url: SITE_URL,
      email: SITE_EMAIL,
      telephone: SITE_PHONE_E164,
      image: [logoUrl],
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Reno",
        addressRegion: "NV",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE_GEO.latitude,
        longitude: SITE_GEO.longitude,
      },
      hasMap: mapSearchUrl,
      areaServed: [
        { "@type": "City", name: "Reno" },
        { "@type": "City", name: "Sparks" },
        { "@type": "City", name: "Spanish Springs" },
        { "@type": "City", name: "Incline Village" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Lawn care services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Lawn mowing",
              description: "Residential and commercial lawn mowing in Washoe County, NV",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Weed control",
              description: "Weed treatment and prevention for Reno–Sparks lawns",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Snow shoveling",
              description: "Driveway and walkway snow removal",
            },
          },
        ],
      },
    },
  ];
}
