import type { Metadata } from "next";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { homeWebPageSchema, globalBusinessGraph } from "@/lib/seo/structured-data";
import { faqPageSchema, getHomeFaqPairs } from "@/lib/seo/faq-schema";
import { INDEX_FOLLOW_PUBLIC } from "@/lib/seo/robots-metadata";
import { SITE_URL, SITE_NAME, SITE_GEO, absoluteUrl } from "@/lib/site-config";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { ResidentialServices } from "@/components/residential-services";
import { StatsSection } from "@/components/stats-section";
import { SeoRichFaqSection } from "@/components/seo-rich-faq-section";

export const metadata: Metadata = {
  title: `Professional Lawn Care Services in Reno & Sparks, Nevada | ${SITE_NAME}`,
  description:
    "Expert lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village. Residential and commercial lawn care you can trust.",
  keywords: [
    "lawn care reno",
    "lawn mowing reno",
    "lawn care sparks",
    "professional lawn care reno nevada",
    "residential lawn care reno",
    "commercial lawn care sparks",
    "lawn maintenance reno",
    "lawn edging reno",
    "weed control reno",
    "landscaping services reno",
    "yard maintenance reno",
    "lawn care spanish springs",
    "lawn care incline village",
    "affordable lawn care reno",
    "weekly lawn mowing reno",
    "seasonal lawn care reno",
    "lawn care company reno",
    "best lawn care reno",
    "lawn service reno sparks",
    "lawn care washoe county",
    "pine needle removal reno",
    "leaf raking reno",
    "leaf removal reno",
    "snow shoveling reno",
    "snow removal reno",
    "snow shoveling sparks",
    "snow removal sparks",
    "lawn cleanup reno",
    "professional landscaper reno",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Professional Lawn Care Services in Reno & Sparks, Nevada | ${SITE_NAME}`,
    description:
      "Expert lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village. Residential and commercial lawn care you can trust.",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/heroBG.jpg",
        width: 1920,
        height: 1080,
        alt: `${SITE_NAME} — lawn care and yard work in Reno, Sparks, and Washoe County, Nevada`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Lawn Care Services in Reno & Sparks, Nevada",
    description:
      "Expert lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village.",
    images: ["/heroBG.jpg"],
  },
  robots: INDEX_FOLLOW_PUBLIC,
  other: {
    "geo.region": "US-NV",
    "geo.placename": "Reno–Sparks, Nevada",
    ICBM: `${SITE_GEO.latitude}, ${SITE_GEO.longitude}`,
    "geo.position": `${SITE_GEO.latitude};${SITE_GEO.longitude}`,
  },
};

export default function Home() {
  const homeFaqs = getHomeFaqPairs();

  return (
    <>
      <JsonLdScript
        schema={[...globalBusinessGraph(), homeWebPageSchema(), faqPageSchema("/", homeFaqs)]}
      />
      <Hero />
      <main>
        <section aria-label="Customer testimonials">
          <Testimonials />
        </section>
        <section aria-label="Our services">
          <Services />
        </section>
        <section aria-label="About us">
          <About />
        </section>
        <section aria-label="Call to action">
          <CTA />
        </section>
        <SeoRichFaqSection
          id="home-faq"
          heading="Questions homeowners ask us"
          subheading={`Honest answers about scheduling, pricing, and what to expect from ${SITE_NAME} across Reno, Sparks, and nearby Washoe County.`}
          faqs={homeFaqs}
        />
        <section aria-label="Residential lawn care services">
          <ResidentialServices />
        </section>
        <section aria-label="Statistics and value proposition">
          <StatsSection />
        </section>
      </main>
    </>
  );
}
