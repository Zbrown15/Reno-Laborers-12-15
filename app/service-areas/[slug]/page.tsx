import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import {
  breadcrumbListSchema,
  serviceAreaPlaceAndWebSchema,
} from "@/lib/seo/structured-data";
import { faqPageSchema, getServiceAreaFaqPairs } from "@/lib/seo/faq-schema";
import { INDEX_FOLLOW_PUBLIC } from "@/lib/seo/robots-metadata";
import { SITE_URL, SITE_NAME } from "@/lib/site-config";
import { getServiceAreaBySlug, getAllServiceAreaSlugs } from "@/lib/service-areas-data";
import { ServiceAreaHero } from "@/components/service-area-hero";
import { ServiceAreaSEO } from "@/components/service-area-seo";
import { ServiceAreaServices } from "@/components/service-area-services";
import { ServiceAreaContent } from "@/components/service-area-content";
import { ServiceAreaExperience } from "@/components/service-area-experience";
import { OtherServiceAreas } from "@/components/other-service-areas";
import { ServiceAreaCTA } from "@/components/service-area-cta";
import { SeoRichFaqSection } from "@/components/seo-rich-faq-section";

export async function generateStaticParams() {
  const slugs = getAllServiceAreaSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return {
      title: "Service Area Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `Lawn Care Services in ${area.name} | ${SITE_NAME}`,
    description: area.seoParagraph,
    keywords: [
      `lawn care ${area.slug}`,
      `lawn mowing ${area.slug}`,
      `professional lawn care ${area.slug} nevada`,
      `residential lawn care ${area.slug}`,
      `lawn maintenance ${area.slug}`,
      `yard maintenance ${area.slug}`,
    ],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
    openGraph: {
      title: `Lawn Care Services in ${area.name} | ${SITE_NAME}`,
      description: area.seoParagraph,
      url: `${SITE_URL}/service-areas/${area.slug}`,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/RLLogo.png",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - Lawn Care Services in ${area.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Lawn Care Services in ${area.name}`,
      description: area.seoParagraph,
      images: ["/RLLogo.png"],
    },
    robots: INDEX_FOLLOW_PUBLIC,
  };
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  const areaFaqs = getServiceAreaFaqPairs(area);

  return (
    <>
      <JsonLdScript
        schema={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "Service areas", path: "/service-areas" },
            { name: area.name, path: `/service-areas/${area.slug}` },
          ]),
          ...serviceAreaPlaceAndWebSchema(area),
          faqPageSchema(`/service-areas/${area.slug}`, areaFaqs),
        ]}
      />
      <ServiceAreaHero area={area} />
      <main className="bg-[#182418]">
        <ServiceAreaSEO area={area} />
        <ServiceAreaServices area={area} />
        <ServiceAreaContent area={area} />
        <ServiceAreaExperience area={area} />
        <OtherServiceAreas currentAreaSlug={area.slug} />
        <SeoRichFaqSection
          id={`service-area-faq-${area.slug}`}
          heading={`Lawn care in ${area.name}: FAQs`}
          subheading="Local scheduling, HOA concerns, and what to expect before we show up."
          faqs={areaFaqs}
        />
        <ServiceAreaCTA area={area} />
      </main>
    </>
  );
}
