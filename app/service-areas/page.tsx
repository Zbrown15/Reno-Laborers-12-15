import type { Metadata } from 'next';
import { ServiceAreasHero } from "@/components/service-areas-hero";
import { ServiceAreasList } from "@/components/service-areas-list";
import { StickyCTA } from "@/components/sticky-cta";
import { ResidentialServices } from "@/components/residential-services";
import { StatsSection } from "@/components/stats-section";

export const metadata: Metadata = {
  title: 'Service Areas - Lawn Care in Reno, Sparks, Spanish Springs & Incline Village, NV | Reno Laborers',
  description: 'Professional lawn care services throughout Reno, Sparks, Spanish Springs, and Incline Village, Nevada. Serving residential and commercial properties with expert lawn maintenance, mowing, edging, and seasonal services.',
  keywords: [
    'lawn care reno',
    'lawn care sparks',
    'lawn care spanish springs',
    'lawn care incline village',
    'lawn mowing reno nevada',
    'lawn care washoe county',
    'residential lawn care reno',
    'commercial lawn care sparks',
    'lawn maintenance reno sparks',
    'yard maintenance reno nevada'
  ],
  authors: [{ name: 'Reno Laborers' }],
  creator: 'Reno Laborers',
  publisher: 'Reno Laborers',
  metadataBase: new URL('https://renolaborers.com'),
  alternates: {
    canonical: '/service-areas',
  },
  openGraph: {
    title: 'Service Areas - Lawn Care in Reno, Sparks, Spanish Springs & Incline Village, NV | Reno Laborers',
    description: 'Professional lawn care services throughout Reno, Sparks, Spanish Springs, and Incline Village, Nevada. Serving residential and commercial properties with expert lawn maintenance.',
    url: 'https://renolaborers.com/service-areas',
    siteName: 'Reno Laborers',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Areas - Lawn Care in Reno, Sparks, Spanish Springs & Incline Village, NV',
    description: 'Professional lawn care services throughout Reno, Sparks, Spanish Springs, and Incline Village, Nevada.',
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

export default function ServiceAreasPage() {
  return (
    <>
      <ServiceAreasHero />
      <main className="bg-[#182418]">
        <div className="mx-auto max-w-container px-4 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Service Areas List */}
            <div className="lg:col-span-2">
              <ServiceAreasList />
            </div>
            
            {/* Right: Sticky CTA */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <StickyCTA />
              </div>
            </div>
          </div>
        </div>
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

