"use client";

import { ServiceAreaData } from "@/lib/service-areas-data";

interface ServiceAreaSEOProps {
  area: ServiceAreaData;
}

export function ServiceAreaSEO({ area }: ServiceAreaSEOProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#182418]">
      <div className="mx-auto max-w-container">
        <div className="max-w-4xl">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            {area.seoParagraph}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            {area.seoHeader}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {area.seoContent}
          </p>
        </div>
      </div>
    </section>
  );
}

