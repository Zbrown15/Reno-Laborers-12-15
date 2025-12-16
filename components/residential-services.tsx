"use client";

import Image from "next/image";

export function ResidentialServices() {
  return (
    <section className="bg-[#182418] text-white py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto max-w-container">
        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-center mb-12">
          RESIDENTIAL LAWN CARE SERVICE IN RENO, NV
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/frontLandscaping.jpg"
              alt="Residential lawn care service in Reno, NV"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Many homeowners simply don't have the time or interest to handle their landscaping tasks themselves, which makes Reno Laborers your ideal partner in keeping your lawn looking pristine. My professional residential lawn care services in Reno, Nevada are especially beneficial if you have a large property that would otherwise be far too much for you to manage, even if you had the interest in doing so. As your trusted residential lawn care provider, I offer comprehensive residential lawn maintenance solutions designed to keep your property looking its best year-round.
            </p>
            <a
              href="#contact"
              className="px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full text-lg hover:bg-[#2a4a6f] transition-colors shadow-lg w-fit"
            >
              Get A Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

