import type { Metadata } from 'next';
import { ServiceAreasHero } from "@/components/service-areas-hero";
import { ServiceAreasList } from "@/components/service-areas-list";
import { StickyCTA } from "@/components/sticky-cta";
import { ResidentialServices } from "@/components/residential-services";
import { StatsSection } from "@/components/stats-section";

export const metadata: Metadata = {
  title: 'Lawn Care Service Areas in Reno & Sparks, NV | Reno Laborers',
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
    title: 'Lawn Care Service Areas in Reno & Sparks, NV | Reno Laborers',
    description: 'Professional lawn care services throughout Reno, Sparks, Spanish Springs, and Incline Village, Nevada. Serving residential and commercial properties with expert lawn maintenance.',
    url: 'https://renolaborers.com/service-areas',
    siteName: 'Reno Laborers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/RLLogo.png',
        width: 1200,
        height: 630,
        alt: 'Reno Laborers - Service Areas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lawn Care Service Areas in Reno & Sparks, NV',
    description: 'Professional lawn care services throughout Reno, Sparks, Spanish Springs, and Incline Village, Nevada.',
    images: ['/RLLogo.png'],
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
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Professional Lawn Care Services Throughout Northern Nevada</h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                Reno Laborers proudly serves homeowners and businesses throughout Reno, Sparks, Spanish Springs, and Incline Village, Nevada. I provide expert lawn care and yard maintenance services tailored to each community's unique characteristics and climate conditions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Whether you're located in the heart of Reno, the growing community of Sparks, the residential neighborhoods of Spanish Springs, or the mountain environment of Incline Village, I bring local expertise and personalized service to your property. I understand the specific lawn care needs of each area, from high-desert conditions to alpine environments, and I adapt my services accordingly.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My comprehensive lawn care services include weekly and bi-weekly lawn mowing, precision edging, weed control, seasonal leaf raking and cleanup, and winter snow removal. I use professional-grade equipment and proven techniques to ensure your lawn receives the best care possible, regardless of your location.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Click on any service area below to learn more about the specific services I offer in that community, or contact me today for a free quote. I'm committed to providing reliable, professional lawn care services that keep your property looking its best throughout the year.
              </p>
            </div>
          </div>
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



