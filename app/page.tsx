import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { About } from "@/components/about";
import { CTA } from "@/components/cta";
import { ResidentialServices } from "@/components/residential-services";
import { StatsSection } from "@/components/stats-section";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
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

