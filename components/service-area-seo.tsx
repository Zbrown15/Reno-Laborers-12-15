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
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            {area.seoParagraph}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            {area.seoHeader}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            {area.seoContent}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I provide comprehensive lawn care services throughout {area.name}, including regular lawn mowing, precision edging, weed control, seasonal cleanup, and snow removal. My services are designed to keep your property looking its best year-round, regardless of the season or weather conditions. I understand the unique characteristics of {area.name} properties and tailor my approach accordingly.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            As a local lawn care professional, I'm committed to providing reliable, consistent service that enhances your property's appearance and value. Whether you own a residential home or manage a commercial property in {area.name}, I offer flexible scheduling and personalized service plans that fit your needs and budget.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Contact me today to learn more about my lawn care services in {area.name} or to request a free quote. I look forward to helping you achieve a beautiful, healthy lawn that you can be proud of.
          </p>
        </div>
      </div>
    </section>
  );
}



