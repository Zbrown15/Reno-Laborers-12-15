"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { serviceAreasData } from "@/lib/service-areas-data";

interface OtherServiceAreasProps {
  currentAreaSlug: string;
}

export function OtherServiceAreas({ currentAreaSlug }: OtherServiceAreasProps) {
  const otherAreas = serviceAreasData.filter(area => area.slug !== currentAreaSlug);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#182418]">
      <div className="mx-auto max-w-container">
        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-center mb-12 text-white">
          Other Areas We Serve
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherAreas.map((area) => (
            <Link
              key={area.id}
              href={`/service-areas/${area.slug}`}
              className="group bg-gradient-to-b from-[#1e3a5f]/40 to-[#182418]/80 rounded-lg border-t border-[#87A96B]/30 overflow-hidden hover:from-[#1e3a5f]/50 hover:to-[#1e3a5f]/40 transition-all"
            >
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[#87A96B]" />
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#87A96B] transition-colors">
                    {area.name}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {area.description}
                </p>
                <span className="text-[#87A96B] text-sm font-medium mt-2 inline-block group-hover:underline">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

