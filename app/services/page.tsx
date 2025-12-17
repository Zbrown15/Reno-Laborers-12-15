import type { Metadata } from 'next';
import { ServicesHero } from "@/components/services-hero";
import { ServicesList } from "@/components/services-list";
import { StickyCTA } from "@/components/sticky-cta";
import { ResidentialServices } from "@/components/residential-services";
import { StatsSection } from "@/components/stats-section";

export const metadata: Metadata = {
  title: 'Lawn Care Services in Reno & Sparks, NV | Reno Laborers',
  description: 'Professional lawn care services including lawn mowing, weed control, lawn edging, leaf raking, and snow shoveling in Reno, Sparks, Spanish Springs, and Incline Village, Nevada.',
  keywords: [
    'lawn care services reno',
    'lawn mowing services reno',
    'weed control reno',
    'lawn edging services reno',
    'leaf raking reno',
    'snow shoveling reno',
    'residential lawn care reno',
    'commercial lawn care sparks',
    'lawn maintenance services reno',
    'yard maintenance reno'
  ],
  authors: [{ name: 'Reno Laborers' }],
  creator: 'Reno Laborers',
  publisher: 'Reno Laborers',
  metadataBase: new URL('https://renolaborers.com'),
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Lawn Care Services in Reno & Sparks, NV | Reno Laborers',
    description: 'Professional lawn care services including lawn mowing, weed control, lawn edging, leaf raking, and snow shoveling in Reno, Sparks, Spanish Springs, and Incline Village, Nevada.',
    url: 'https://renolaborers.com/services',
    siteName: 'Reno Laborers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/RLLogo.png',
        width: 1200,
        height: 630,
        alt: 'Reno Laborers - Lawn Care Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lawn Care Services in Reno & Sparks, NV',
    description: 'Professional lawn care services including lawn mowing, weed control, lawn edging, leaf raking, and snow shoveling in Reno, Sparks, Spanish Springs, and Incline Village, Nevada.',
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

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <main className="bg-[#182418]">
        <div className="mx-auto max-w-container px-4 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Comprehensive Lawn Care Services in Reno and Sparks</h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                At Reno Laborers, I provide professional lawn care services designed to keep your property looking its best year-round. Whether you own a residential home or manage a commercial property in Reno, Sparks, Spanish Springs, or Incline Village, Nevada, I offer comprehensive lawn maintenance solutions tailored to your specific needs.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My services include regular lawn mowing with proper grass cutting techniques, precision lawn edging for clean borders along driveways and walkways, comprehensive weed control to eliminate existing weeds and prevent future growth, thorough leaf raking and seasonal cleanup services, and reliable snow shoveling during winter months. Each service is performed with attention to detail and professional-grade equipment to ensure exceptional results.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                As a one-person operation, I provide personalized attention to every property, ensuring consistent, high-quality service that exceeds expectations. I understand the unique challenges of maintaining beautiful lawns in Northern Nevada's high-desert climate, from hot, dry summers to cold winters, and I tailor my services accordingly.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Explore the services below to learn more about what I offer, or contact me today for a free quote. I'm committed to helping you achieve a healthy, beautiful lawn that enhances your property's curb appeal and value.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left: Services List */}
            <div className="lg:col-span-2">
              <ServicesList />
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

