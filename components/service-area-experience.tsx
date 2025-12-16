"use client";

import { ServiceAreaData } from "@/lib/service-areas-data";

interface ServiceAreaExperienceProps {
  area: ServiceAreaData;
}

export function ServiceAreaExperience({ area }: ServiceAreaExperienceProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#182418]">
      <div className="mx-auto max-w-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-white mb-6">
            {area.experienceDifference}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            As your trusted lawn care provider in {area.name}, I bring personalized attention, local expertise, and a commitment to excellence to every property. Whether you need regular maintenance or specialized services, I'm here to help your property thrive. Contact me today to experience the difference that professional, reliable lawn care can make.
          </p>
        </div>
      </div>
    </section>
  );
}

