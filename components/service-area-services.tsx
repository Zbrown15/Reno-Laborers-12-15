"use client";

import Image from "next/image";
import { ServiceAreaData } from "@/lib/service-areas-data";
import { Check } from "lucide-react";

interface ServiceAreaServicesProps {
  area: ServiceAreaData;
}

export function ServiceAreaServices({ area }: ServiceAreaServicesProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#182418]">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Services Available */}
          <div className="bg-gradient-to-b from-[#1e3a5f]/40 to-[#182418]/80 rounded-lg border-t border-[#87A96B]/30 p-6 sm:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Services Available in {area.name}
            </h2>
            <ul className="space-y-3">
              {area.services.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-[#87A96B] flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
            <a
              href="/services"
              className="mt-6 px-6 py-3 bg-[#1e3a5f] text-white font-medium rounded-full hover:bg-[#2a4a6f] transition-colors inline-block"
            >
              View All Services
            </a>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={area.image}
              alt={`Lawn care services in ${area.name}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}




