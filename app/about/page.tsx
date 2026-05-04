import type { Metadata } from "next";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { breadcrumbListSchema, webPageSchema } from "@/lib/seo/structured-data";
import { INDEX_FOLLOW_PUBLIC } from "@/lib/seo/robots-metadata";
import { SITE_URL } from "@/lib/site-config";
import { AboutHero } from "@/components/about-hero";
import { AboutSEO } from "@/components/about-seo";
import { BenefitsSection } from "@/components/benefits-section";
import { MissionStatement } from "@/components/mission-statement";
import { CTA } from "@/components/cta";

const ABOUT_DESCRIPTION =
  "Learn about Reno Laborers, your trusted one-person lawn care service in Reno and Sparks, Nevada. Discover our mission, benefits, and commitment to providing expert, affordable residential and commercial lawn maintenance.";

export const metadata: Metadata = {
  title: "About Reno Laborers - Professional Lawn Care Services in Reno & Sparks, NV",
  description: ABOUT_DESCRIPTION,
  keywords: [
    "about reno laborers",
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
  authors: [{ name: "Reno Laborers" }],
  creator: "Reno Laborers",
  publisher: "Reno Laborers",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Reno Laborers - Professional Lawn Care Services in Reno & Sparks, NV",
    description: ABOUT_DESCRIPTION,
    url: `${SITE_URL}/about`,
    siteName: "Reno Laborers",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/RLLogo.png",
        width: 1200,
        height: 630,
        alt: "Reno Laborers - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Reno Laborers - Professional Lawn Care Services",
    description:
      "Learn about Reno Laborers, your trusted one-person lawn care service in Reno and Sparks, Nevada.",
    images: ["/RLLogo.png"],
  },
  robots: INDEX_FOLLOW_PUBLIC,
};

export default function AboutPage() {
  return (
    <>
      <JsonLdScript
        schema={[
          breadcrumbListSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          webPageSchema("/about", "About Reno Laborers — Lawn Care Reno & Sparks, NV", ABOUT_DESCRIPTION),
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
