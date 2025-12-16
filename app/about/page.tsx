import type { Metadata } from 'next';
import { AboutHero } from "@/components/about-hero";
import { AboutSEO } from "@/components/about-seo";
import { BenefitsSection } from "@/components/benefits-section";
import { MissionStatement } from "@/components/mission-statement";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: 'About Reno Laborers - Professional Lawn Care Services in Reno & Sparks, NV',
  description: 'Learn about Reno Laborers, your trusted one-person lawn care service in Reno and Sparks, Nevada. Discover our mission, benefits, and commitment to providing expert, affordable residential and commercial lawn maintenance.',
  keywords: [
    'about reno laborers',
    'lawn care company reno',
    'professional lawn care reno nevada',
    'residential lawn care reno',
    'commercial lawn care sparks',
    'lawn maintenance reno',
    'trusted lawn care provider reno',
    'one-person lawn care service reno',
    'affordable lawn care reno',
    'lawn care services reno sparks'
  ],
  authors: [{ name: 'Reno Laborers' }],
  creator: 'Reno Laborers',
  publisher: 'Reno Laborers',
  metadataBase: new URL('https://renolaborers.com'),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Reno Laborers - Professional Lawn Care Services in Reno & Sparks, NV',
    description: 'Learn about Reno Laborers, your trusted one-person lawn care service in Reno and Sparks, Nevada. Discover our mission, benefits, and commitment to providing expert, affordable residential and commercial lawn maintenance.',
    url: 'https://renolaborers.com/about',
    siteName: 'Reno Laborers',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Reno Laborers - Professional Lawn Care Services',
    description: 'Learn about Reno Laborers, your trusted one-person lawn care service in Reno and Sparks, Nevada.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function AboutPage() {
  return (
    <>
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

