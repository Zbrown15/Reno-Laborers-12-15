"use client";

import Image from "next/image";

export function About() {
  return (
    <section className="bg-[#182418] text-white py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto max-w-container">
        <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight text-center mb-12">
          Professional Lawn Care Services in Reno, NV
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              About Reno Laborers
            </h3>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                My name is Zach, and I founded Reno Laborers in late 2024 with a simple mission: to provide professional, reliable lawn care services that deliver the quality results you'd expect from a full crew, all while maintaining the personal attention and care that comes from a dedicated one-person operation. As a one-man show, I take pride in every job I complete. Whether it's weekly lawn mowing, weed control, lawn edging, leaf raking, or snow shoveling, I bring the same level of professionalism and attention to detail to every property. My commitment to excellence means you get consistent, high-quality lawn care services without the overhead costs of a large company.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/heroBG.jpg"
              alt="Reno Laborers lawn care professional"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

