"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/lib/services-data";

interface OtherServicesProps {
  currentServiceSlug: string;
}

export function OtherServices({ currentServiceSlug }: OtherServicesProps) {
  const otherServices = servicesData.filter(service => service.slug !== currentServiceSlug);

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#182418]">
      <div className="mx-auto max-w-container">
        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-center mb-12 text-white">
          Our Other Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherServices.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group bg-gradient-to-b from-[#1e3a5f]/40 to-[#182418]/80 rounded-lg border-t border-[#87A96B]/30 overflow-hidden hover:from-[#1e3a5f]/50 hover:to-[#1e3a5f]/40 transition-all"
            >
              <div className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#87A96B] transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                  {service.quickDescription}
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

