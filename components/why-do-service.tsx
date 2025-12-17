"use client";

import { ServiceData } from "@/lib/services-data";

interface WhyDoServiceProps {
  service: ServiceData;
}

export function WhyDoService({ service }: WhyDoServiceProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#182418]">
      <div className="mx-auto max-w-container">
        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-center mb-12 text-white">
          Why Choose {service.name}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {service.whyDoService.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#1e3a5f]/40 to-[#182418]/80 rounded-lg border-t border-[#87A96B]/30 p-6"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




