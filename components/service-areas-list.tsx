"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Check } from "lucide-react";
import { serviceAreasData } from "@/lib/service-areas-data";

export function ServiceAreasList() {
  return (
    <div className="space-y-12">
      {serviceAreasData.map((area, index) => (
        <div
          key={area.id}
          className="bg-gradient-to-b from-[#1e3a5f]/40 to-[#182418]/80 rounded-lg border-t border-[#87A96B]/30 p-6 sm:p-8"
        >
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Image */}
            <div className="relative w-full md:w-1/3 h-[250px] md:h-[200px] rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={area.image}
                alt={area.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <MapPin className="w-10 h-10 text-[#87A96B] flex-shrink-0" />
                <h2 className="text-2xl md:text-3xl font-semibold text-white">
                  {area.name}
                </h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {area.description}
              </p>
              <div className="mt-2">
                <p className="text-gray-400 text-sm mb-3">{area.quickInfo}</p>
                <div className="space-y-2">
                  <span className="font-semibold text-white text-sm block">Services Available:</span>
                  <ul className="space-y-1">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-[#87A96B] flex-shrink-0 mt-0.5" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Link
                href={`/service-areas/${area.slug}`}
                className="px-6 py-3 bg-[#1e3a5f] text-white font-medium rounded-full hover:bg-[#2a4a6f] transition-colors w-fit mt-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

