import type { Metadata } from "next";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { breadcrumbListSchema, webPageSchema, webSiteStubNode } from "@/lib/seo/structured-data";
import { INDEX_FOLLOW_PUBLIC } from "@/lib/seo/robots-metadata";
import { SITE_URL, SITE_NAME } from "@/lib/site-config";
import { AboutHero } from "@/components/about-hero";
import { AboutSEO } from "@/components/about-seo";
import { BenefitsSection } from "@/components/benefits-section";
import { MissionStatement } from "@/components/mission-statement";
import { CTA } from "@/components/cta";

const ABOUT_DESCRIPTION =
  `Learn about ${SITE_NAME}, your trusted one-person lawn care service in Reno and Sparks, Nevada. Discover our mission, benefits, and commitment to providing expert, affordable residential and commercial lawn maintenance.`;

export const metadata: Metadata = {
  title: `About ${SITE_NAME} - Professional Lawn Care Services in Reno & Sparks, NV`,
  description: ABOUT_DESCRIPTION,
  keywords: [
    "about reno laborers lawn care",
    "lawn care company reno",
    "professional lawn care reno nevada",
    "residential lawn care reno",
    "commercial lawn care sparks",
    "lawn maintenance reno",
    "trusted lawn care provider reno",
    "one-person lawn care service reno",
    "affordable lawn care reno",
    "lawn care services reno sparks",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About ${SITE_NAME} - Professional Lawn Care Services in Reno & Sparks, NV`,
    description: ABOUT_DESCRIPTION,
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/heroBG.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — lawn care in Reno and Sparks, Nevada`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${SITE_NAME} - Professional Lawn Care Services`,
    description:
      `Learn about ${SITE_NAME}, your trusted one-person lawn care service in Reno and Sparks, Nevada.`,
    images: ["/heroBG.jpg"],
  },
  robots: INDEX_FOLLOW_PUBLIC,
};

export default function AboutPage() {
  return (
    <>
      <JsonLdScript
        schema={[
          webSiteStubNode(),
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          webPageSchema(`/about`, `About ${SITE_NAME} — Lawn Care Reno & Sparks, NV`, ABOUT_DESCRIPTION, {
            pageType: "AboutPage",
          }),
        ]}
      />
      <AboutHero />
      <main>
        <section aria-label="About SEO content">
          <AboutSEO />
        </section>
        <section aria-label="Benefits of choosing us">
          <BenefitsSection />
        </section>
        <section aria-label="Mission statement">
          <MissionStatement />
        </section>
        <section aria-label="Call to action">
          <CTA />
        </section>
      </main>
    </>
  );
}
