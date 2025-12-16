import { ServicesHero } from "@/components/services-hero";
import { ServicesList } from "@/components/services-list";
import { StickyCTA } from "@/components/sticky-cta";
import { ResidentialServices } from "@/components/residential-services";
import { StatsSection } from "@/components/stats-section";

export const metadata = {
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
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <main className="bg-[#182418]">
        <div className="mx-auto max-w-container px-4 py-12 sm:py-16 md:py-20">
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

