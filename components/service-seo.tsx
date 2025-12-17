"use client";

import { ServiceData } from "@/lib/services-data";

interface ServiceSEOProps {
  service: ServiceData;
}

export function ServiceSEO({ service }: ServiceSEOProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#182418]">
      <div className="mx-auto max-w-container">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            {service.seoHeader}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            {service.seoParagraph}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            As your trusted lawn care professional in Reno and Sparks, Nevada, I understand the importance of consistent, high-quality service. My {service.name.toLowerCase()} services are designed to meet the specific needs of residential and commercial properties throughout the area, including Spanish Springs and Incline Village. I use professional-grade equipment and proven techniques to ensure your property receives the best care possible.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Whether you need regular maintenance or one-time service, I provide personalized attention to every property. I take pride in delivering consistent results that enhance your property's curb appeal and value. My goal is to make lawn care easy and stress-free for you, so you can enjoy a beautiful, well-maintained property without the time and effort required to do it yourself.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Contact me today to learn more about my {service.name.toLowerCase()} services or to request a free quote. I'm committed to providing reliable, professional service that exceeds your expectations and helps you achieve the healthy, beautiful lawn you deserve.
          </p>
        </div>
      </div>
    </section>
  );
}



