"use client";

import Image from "next/image";
import { ServiceData } from "@/lib/services-data";
import { Check } from "lucide-react";

interface ServiceQuickInfoProps {
  service: ServiceData;
}

export function ServiceQuickInfo({ service }: ServiceQuickInfoProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#182418]">
      <div className="mx-auto max-w-container">
        <div className="mb-8">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl">
            {service.quickDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Service Details */}
          <div className="bg-gradient-to-b from-[#1e3a5f]/40 to-[#182418]/80 rounded-lg border-t border-[#87A96B]/30 p-6 sm:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Service Details
            </h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <span className="font-semibold text-white">Service Type:</span>
                <p className="mt-1">{service.serviceType}</p>
              </div>
              <div>
                <span className="font-semibold text-white">Property Type:</span>
                <p className="mt-1">{service.propertyType}</p>
              </div>
              <div>
                <span className="font-semibold text-white">Service Area:</span>
                <p className="mt-1">{service.serviceArea}</p>
              </div>
              <div>
                <span className="font-semibold text-white">Recommended Maintenance:</span>
                <p className="mt-1">{service.recommendedMaintenance}</p>
              </div>
              <div>
                <span className="font-semibold text-white">Pricing:</span>
                <p className="mt-1">{service.pricing}</p>
              </div>
              <div className="pt-4 border-t border-[#87A96B]/30">
                <span className="font-semibold text-white block mb-3">Service Benefits:</span>
                <ul className="space-y-2">
                  {service.serviceBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#87A96B] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

