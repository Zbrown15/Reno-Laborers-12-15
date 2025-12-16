"use client";

import Image from "next/image";
import { ServiceData } from "@/lib/services-data";

interface ServiceCTAProps {
  service: ServiceData;
}

export function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden">
      <Image
        src="/lawnHouseIMG.jpg"
        alt="Ready to get started with lawn care services"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex min-h-[500px] w-full items-center justify-center">
        <div className="mx-auto max-w-container px-4">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl sm:leading-tight text-white drop-shadow-lg">
              Ready to Get {service.name}?
            </h2>
            <p className="text-xl md:text-2xl text-white font-semibold max-w-[700px] drop-shadow-md leading-relaxed">
              Contact me today for a free, no-obligation quote on professional {service.name.toLowerCase()} services in Reno and Sparks. I'll provide customized solutions tailored to your property's specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full text-lg hover:bg-[#2a4a6f] transition-colors shadow-lg"
              >
                Get a Free Quote
              </a>
              <a
                href="sms:+18582754671"
                className="px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full text-lg hover:bg-[#2a4a6f] transition-colors shadow-lg"
              >
                858-275-4671
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

