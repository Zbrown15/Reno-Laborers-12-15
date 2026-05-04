import type { Metadata } from "next";
import { JsonLdScript } from "@/components/seo/json-ld-script";
import { homeWebPageSchema } from "@/lib/seo/structured-data";
import { INDEX_FOLLOW_PUBLIC } from "@/lib/seo/robots-metadata";
import { SITE_URL } from "@/lib/site-config";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { ResidentialServices } from "@/components/residential-services";
import { StatsSection } from "@/components/stats-section";

export const metadata: Metadata = {
  title: "Professional Lawn Care Services in Reno & Sparks, Nevada | Reno Laborers",
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
  authors: [{ name: "Reno Laborers" }],
  creator: "Reno Laborers",
  publisher: "Reno Laborers",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Professional Lawn Care Services in Reno & Sparks, Nevada | Reno Laborers",
    description:
      "Expert lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village. Residential and commercial lawn care you can trust.",
    url: SITE_URL,
    siteName: "Reno Laborers",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/RLLogo.png",
        width: 1200,
        height: 630,
        alt: "Reno Laborers - Professional Lawn Care Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Lawn Care Services in Reno & Sparks, Nevada",
    description:
      "Expert lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village.",
    images: ["/RLLogo.png"],
  },
  robots: INDEX_FOLLOW_PUBLIC,
};

export default function Home() {
  return (
    <>
      <JsonLdScript schema={[homeWebPageSchema()]} />
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
