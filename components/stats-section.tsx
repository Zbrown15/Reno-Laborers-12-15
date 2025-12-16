"use client";

import Image from "next/image";
import { Users, Star, DollarSign } from "lucide-react";

export function StatsSection() {
  return (
    <section className="relative min-h-[500px] w-full overflow-hidden">
      <Image
        src="/waterFeatureLandscape.jpg"
        alt="Professional landscaping services"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex min-h-[500px] w-full items-center justify-center">
        <div className="mx-auto max-w-container px-4">
          <div className="flex flex-col items-center gap-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Expert, affordable, and friendly lawn care services you can trust.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-4xl">
              {/* Left Column: Happy Customers */}
              <div className="flex flex-col items-center gap-4">
                <Users className="w-12 h-12 text-white" strokeWidth={1.5} />
                <div className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                  100+
                </div>
                <p className="text-lg md:text-xl text-white/90 font-medium">
                  happy customers
                </p>
              </div>

              {/* Middle Column: Rating */}
              <div className="flex flex-col items-center gap-4">
                <Star className="w-12 h-12 text-white fill-white" strokeWidth={1.5} />
                <div className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg flex items-center gap-2">
                  5<span className="text-3xl">★</span>
                </div>
                <p className="text-lg md:text-xl text-white/90 font-medium">
                  happy customers
                </p>
              </div>

              {/* Right Column: Lower Prices */}
              <div className="flex flex-col items-center gap-4">
                <DollarSign className="w-12 h-12 text-white" strokeWidth={1.5} />
                <div className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                  Lower
                </div>
                <p className="text-lg md:text-xl text-white/90 font-medium">
                  prices than big crews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

