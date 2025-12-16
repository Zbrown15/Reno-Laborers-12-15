import type { Metadata } from 'next';
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { ResidentialServices } from "@/components/residential-services";
import { StatsSection } from "@/components/stats-section";

export const metadata: Metadata = {
  title: 'Professional Lawn Care Services in Reno & Sparks, Nevada | Reno Laborers',
  description: 'Expert lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village. Residential and commercial lawn care you can trust.',
  keywords: [
    'lawn care reno',
    'lawn mowing reno',
    'lawn care sparks',
    'professional lawn care reno nevada',
    'residential lawn care reno',
    'commercial lawn care sparks',
    'lawn maintenance reno',
    'lawn edging reno',
    'weed control reno',
    'landscaping services reno',
    'yard maintenance reno',
    'lawn care spanish springs',
    'lawn care incline village',
    'affordable lawn care reno',
    'weekly lawn mowing reno',
    'seasonal lawn care reno',
    'lawn care company reno',
    'best lawn care reno',
    'lawn service reno sparks',
    'lawn care washoe county',
    'pine needle removal reno',
    'leaf raking reno',
    'leaf removal reno',
    'snow shoveling reno',
    'snow removal reno',
    'snow shoveling sparks',
    'snow removal sparks',
    'lawn cleanup reno',
    'professional landscaper reno'
  ],
  authors: [{ name: 'Reno Laborers' }],
  creator: 'Reno Laborers',
  publisher: 'Reno Laborers',
  metadataBase: new URL('https://renolaborers.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Professional Lawn Care Services in Reno & Sparks, Nevada | Reno Laborers',
    description: 'Expert lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village. Residential and commercial lawn care you can trust.',
    url: 'https://renolaborers.com',
    siteName: 'Reno Laborers',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Lawn Care Services in Reno & Sparks, Nevada',
    description: 'Expert lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village.',
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

export default function Home() {
  return (
    <>
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

