"use client";

import { ServiceAreaData } from "@/lib/service-areas-data";

interface ServiceAreaContentProps {
  area: ServiceAreaData;
}

export function ServiceAreaContent({ area }: ServiceAreaContentProps) {
  const sections = [
    area.localExpertise,
    area.nurturingLawn,
    area.seasonalCleanups,
    area.landscapingSolutions,
    area.sustainablePractices,
    area.customerSatisfaction
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#182418]">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#1e3a5f]/40 to-[#182418]/80 rounded-lg border-t border-[#87A96B]/30 p-6"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                {section.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

