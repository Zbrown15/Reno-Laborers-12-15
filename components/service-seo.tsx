"use client";

import { ServiceData } from "@/lib/services-data";

interface ServiceSEOProps {
  service: ServiceData;
}

export function ServiceSEO({ service }: ServiceSEOProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#182418]">
      <div className="mx-auto max-w-container">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            {service.seoHeader}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            {service.seoParagraph}
          </p>
        </div>
      </div>
    </section>
  );
}

