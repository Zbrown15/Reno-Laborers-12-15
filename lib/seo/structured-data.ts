import type { ServiceData } from "@/lib/services-data";
import type { ServiceAreaData } from "@/lib/service-areas-data";
import { servicesData } from "@/lib/services-data";
import { serviceAreasData } from "@/lib/service-areas-data";
import {
  SITE_URL,
  SITE_NAME,
  SITE_EMAIL,
  SITE_PHONE_E164,
  SITE_LOGO_PATH,
  SITE_DEFAULT_DESCRIPTION,
  SITE_GEO,
  SITE_OPENING_HOURS_JSON_LD,
  SITE_POSTAL_ADDRESS,
  SITE_SAME_AS,
  absoluteUrl,
} from "@/lib/site-config";
import { getServiceAreaGeo } from "@/lib/seo/service-area-geo";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const OPENING_HOURS_SPEC_ID = `${SITE_URL}/#openingHoursSpecification`;

/**
 * Minimal WebSite node so each page’s WebPage `isPartOf` resolves without repeating the full business @graph.
 * The complete WebSite entity (publisher, sameAs, etc.) is emitted on the homepage only.
 */
export function webSiteStubNode() {
  return {
    "@type": "WebSite" as const,
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: SITE_NAME,
    inLanguage: "en-US",
  };
}

/** Standalone OpeningHoursSpecification for JSON-LD @graph (referenced by Organization + LocalBusiness). */
export function businessOpeningHoursSpecificationNode() {
  return {
    "@type": "OpeningHoursSpecification",
    "@id": OPENING_HOURS_SPEC_ID,
    name: "Business hours",
    dayOfWeek: [...SITE_OPENING_HOURS_JSON_LD.dayOfWeek],
    opens: SITE_OPENING_HOURS_JSON_LD.opens,
    closes: SITE_OPENING_HOURS_JSON_LD.closes,
  };
}

/** Business map pin as Schema.org GeoCoordinates (WGS84). Numbers match schema.org examples. */
export function businessGeoCoordinates() {
  return {
    "@type": "GeoCoordinates" as const,
    latitude: Number.parseFloat(SITE_GEO.latitude),
    longitude: Number.parseFloat(SITE_GEO.longitude),
  };
}

/** Area centroid as GeoCoordinates (service area Place pages). */
export function areaGeoCoordinates(latitude: string, longitude: string) {
  return {
    "@type": "GeoCoordinates" as const,
    latitude: Number.parseFloat(latitude),
    longitude: Number.parseFloat(longitude),
  };
}
export const SERVICE_PAGE_CATALOG_OFFERINGS = [
  { name: "Lawn mowing & maintenance", path: "/services/lawn-mowing" },
  { name: "Weed control", path: "/services/weed-control" },
  { name: "Yard work", path: "/services" },
  { name: "Leaf Removal", path: "/services/leaf-raking" },
  { name: "Yard Cleanup", path: "/services" },
  { name: "Lawn Edging", path: "/services/lawn-edging" },
  { name: "Snow Removal", path: "/services/snow-shoveling" },
] as const;

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

export type WebPageSchemaOptions = {
  pageType?: "WebPage" | "AboutPage" | "ContactPage";
  /** e.g. primary entity on the page (Service, Place, FAQPage uses separate node) */
  mainEntity?: { "@id": string };
};

export function webPageSchema(path: string, name: string, description: string, options?: WebPageSchemaOptions) {
  const url = absoluteUrl(path);
  const pageType = options?.pageType ?? "WebPage";
  return {
    "@type": pageType,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    ...(options?.mainEntity ? { mainEntity: options.mainEntity } : {}),
  };
}

/** Home: WebPage + primary image for rich context */
export function homeWebPageSchema() {
  const pageUrl = absoluteUrl("/");
  return {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${SITE_NAME} | Reno & Sparks, Nevada`,
    description: SITE_DEFAULT_DESCRIPTION,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": BUSINESS_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE_LOGO_PATH),
    },
  };
}

/** /services — CollectionPage + ItemList so the HTML source lists every service URL for crawlers. */
export function servicesIndexCollectionPageSchema(name: string, description: string) {
  const pageUrl = absoluteUrl("/services");
  const itemListElement = servicesData.map((s, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    item: {
      "@type": "Service" as const,
      name: `${s.name} — Reno, Sparks & Washoe County`,
      description: s.quickDescription,
      url: absoluteUrl(`/services/${s.slug}`),
    },
  }));
  return {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: {
      "@type": "ItemList",
      name: `${SITE_NAME} — lawn and yard services (Northern Nevada)`,
      description: `Service detail pages: ${servicesData.map((s) => s.name).join(", ")}.`,
      numberOfItems: servicesData.length,
      itemListElement,
    },
  };
}

/** /service-areas — CollectionPage + ItemList of city/area landing pages. */
export function serviceAreasIndexCollectionPageSchema(name: string, description: string) {
  const pageUrl = absoluteUrl("/service-areas");
  const itemListElement = serviceAreasData.map((a, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    item: {
      "@type": "Place" as const,
      name: `Lawn care in ${a.name}`,
      description: a.description,
      url: absoluteUrl(`/service-areas/${a.slug}`),
    },
  }));
  return {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: {
      "@type": "ItemList",
      name: `${SITE_NAME} — Northern Nevada service areas`,
      description: `Area pages: ${serviceAreasData.map((a) => a.name).join(", ")}.`,
      numberOfItems: serviceAreasData.length,
      itemListElement,
    },
  };
}

export function serviceJsonLd(service: ServiceData) {
  const path = `/services/${service.slug}`;
  const url = absoluteUrl(path);
  const imageUrl = service.image.startsWith("http")
    ? service.image
    : absoluteUrl(service.image);

  const areaServed = businessAreaServedForSchema();

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
    geo: businessGeoCoordinates(),
  };
}

/**
 * Full service menu as OfferCatalog (ListItem → Offer → Service) for service detail pages.
 * Lists all offerings so each /services/[slug] page exposes the complete menu to Google.
 */
export function servicePageCatalogSchema(pagePath: string) {
  const pageUrl = absoluteUrl(pagePath);
  const areaServed = businessAreaServedForSchema();
  return {
    "@type": "OfferCatalog",
    "@id": `${pageUrl}#service-catalog`,
    name: "Lawn and yard services",
    description: `Services offered by ${SITE_NAME} in Reno, Sparks, Spanish Springs, Incline Village, and surrounding Northern Nevada.`,
    url: pageUrl,
    provider: { "@id": BUSINESS_ID },
    itemListElement: SERVICE_PAGE_CATALOG_OFFERINGS.map((entry, index) => {
      const serviceUrl = absoluteUrl(entry.path);
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Offer",
          url: serviceUrl,
          itemOffered: {
            "@type": "Service",
            name: entry.name,
            url: serviceUrl,
            provider: { "@id": BUSINESS_ID },
            geo: businessGeoCoordinates(),
            areaServed,
          },
        },
      };
    }),
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
    description: area.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: "NV",
      addressCountry: "US",
    },
    geo: areaGeoCoordinates(geo.latitude, geo.longitude),
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `Lawn Care Services in ${area.name} | ${SITE_NAME}`,
    description: area.seoParagraph,
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": `${url}#place` },
  };

  return [place, webPage];
}

/** City in Nevada, United States (areaServed) */
function cityServedInNvUsa(cityName: string) {
  return {
    "@type": "City" as const,
    name: cityName,
    containedInPlace: {
      "@type": "State" as const,
      name: "Nevada",
      containedInPlace: {
        "@type": "Country" as const,
        name: "United States",
      },
    },
  };
}

/** Washoe County, NV for broader service area signals */
function washoeCountyServed() {
  return {
    "@type": "AdministrativeArea" as const,
    name: "Washoe County",
    containedInPlace: {
      "@type": "State" as const,
      name: "Nevada",
      containedInPlace: {
        "@type": "Country" as const,
        name: "United States",
      },
    },
  };
}

/**
 * Canonical areaServed list (AdministrativeArea + Cities) for Organization, LocalBusiness, and Service JSON-LD.
 */
export function businessAreaServedForSchema() {
  return [
    washoeCountyServed(),
    cityServedInNvUsa("Reno"),
    cityServedInNvUsa("Sparks"),
    cityServedInNvUsa("Spanish Springs"),
    cityServedInNvUsa("Incline Village"),
  ];
}

/** Global @graph: WebSite + Organization + LocalBusiness (home/yard services) for Google Search & Maps */
export function globalBusinessGraph() {
  const siteRootUrl = absoluteUrl("/");
  const logoUrl = absoluteUrl(SITE_LOGO_PATH);
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE_NAME} Reno NV`)}`;

  const postalAddress = {
    "@type": "PostalAddress" as const,
    streetAddress: SITE_POSTAL_ADDRESS.streetAddress,
    addressLocality: SITE_POSTAL_ADDRESS.addressLocality,
    addressRegion: SITE_POSTAL_ADDRESS.addressRegion,
    postalCode: SITE_POSTAL_ADDRESS.postalCode,
    addressCountry: SITE_POSTAL_ADDRESS.addressCountry,
  };

  const areaServed = businessAreaServedForSchema();

  /** Organization: geo & hours live on Place + LocalBusiness (strict schema.org validators flag them on Organization). */
  const organizationLocation = {
    "@type": "Place" as const,
    name: SITE_NAME,
    address: postalAddress,
    geo: businessGeoCoordinates(),
  };

  return [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: siteRootUrl,
      name: SITE_NAME,
      description: SITE_DEFAULT_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": ORGANIZATION_ID },
      copyrightHolder: { "@id": ORGANIZATION_ID },
      image: {
        "@type": "ImageObject",
        url: logoUrl,
      },
      sameAs: [...SITE_SAME_AS],
      about: { "@id": BUSINESS_ID },
    },
    businessOpeningHoursSpecificationNode(),
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      description: SITE_DEFAULT_DESCRIPTION,
      url: siteRootUrl,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
      image: [logoUrl],
      email: SITE_EMAIL,
      telephone: SITE_PHONE_E164,
      address: postalAddress,
      location: organizationLocation,
      areaServed,
      sameAs: [...SITE_SAME_AS],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: SITE_PHONE_E164,
          email: SITE_EMAIL,
          availableLanguage: "English",
        },
      ],
    },
    {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "@id": BUSINESS_ID,
      parentOrganization: { "@id": ORGANIZATION_ID },
      name: SITE_NAME,
      description: SITE_DEFAULT_DESCRIPTION,
      url: siteRootUrl,
      email: SITE_EMAIL,
      telephone: SITE_PHONE_E164,
      image: [logoUrl],
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
      priceRange: "$$",
      address: postalAddress,
      geo: businessGeoCoordinates(),
      hasMap: mapSearchUrl,
      areaServed,
      sameAs: [...SITE_SAME_AS],
      openingHoursSpecification: { "@id": OPENING_HOURS_SPEC_ID },
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
              areaServed,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Weed control",
              description: "Weed treatment and prevention for Reno–Sparks lawns",
              areaServed,
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Snow shoveling",
              description: "Driveway and walkway snow removal",
              areaServed,
            },
          },
        ],
      },
    },
  ];
}
