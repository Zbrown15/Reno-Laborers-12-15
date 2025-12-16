"use client";

import Image from "next/image";
import Link from "next/link";
import { Scissors, Sprout, Snowflake, Leaf } from "lucide-react";

const services = [
  {
    name: "Lawn Mowing",
    slug: "lawn-mowing",
    icon: Scissors,
    description: "Professional lawn mowing services with regular weekly or bi-weekly maintenance. I provide proper grass cutting techniques, even cuts, and clean removal of clippings for a healthy, pristine lawn that enhances your property's curb appeal.",
    image: "/lawnMowedDriveway.jpg"
  },
  {
    name: "Weed Control",
    slug: "weed-control",
    icon: Sprout,
    description: "Comprehensive weed control and removal services to maintain a beautiful, weed-free lawn. I use proven methods to eliminate existing weeds and prevent future growth, ensuring your lawn and garden beds remain healthy throughout the growing season.",
    image: "/weedFreeGardenBed.jpg"
  },
  {
    name: "Lawn Edging",
    slug: "lawn-edging",
    icon: Scissors,
    description: "Precise lawn edging services that create clean, defined borders along driveways, walkways, and garden beds. My professional edging techniques give your property a polished appearance with sharp, clean lines that prevent grass from encroaching into unwanted areas.",
    image: "/lawnWithEdgingDone.jpg"
  },
  {
    name: "Leaf Raking",
    slug: "leaf-raking",
    icon: Leaf,
    description: "Thorough leaf raking and yard cleanup services to keep your property clean and protect your lawn. I remove leaves, pine needles, and seasonal debris from lawns and garden beds, preventing lawn damage and maintaining healthy grass. All debris is bagged and removed for a tidy yard.",
    image: "/rakingJobDone.jpg"
  },
  {
    name: "Snow Shoveling",
    slug: "snow-shoveling",
    icon: Snowflake,
    description: "Reliable snow shoveling and snow removal services to keep your property safe and accessible during winter. I clear driveways, walkways, and sidewalks using efficient techniques, preventing ice buildup and ensuring safe access to your home.",
    image: "/snowyDriveway.jpg"
  }
];

export function Services() {
  return (
    <section className="bg-[#182418] text-white py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto max-w-container">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Our Lawn Care Services
          </h2>
          <p className="text-md max-w-[800px] font-medium text-gray-400 sm:text-xl leading-relaxed">
            Reno Laborers offers professional lawn care and yard maintenance services for your home and business. From regular lawn mowing and precision edging to comprehensive weed control and seasonal cleanup, I ensure your outdoor spaces are both beautiful and well-maintained.
          </p>
        </div>
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image - alternates left/right */}
                <div className={`relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden ${
                  !isEven ? "md:order-2" : ""
                }`}>
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content - alternates right/left */}
                <div className={`flex flex-col justify-center ${
                  !isEven ? "md:order-1" : ""
                }`}>
                  <Icon className="w-12 h-12 text-[#87A96B] mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="px-6 py-3 bg-[#1e3a5f] text-white font-medium rounded-full hover:bg-[#2a4a6f] transition-colors w-fit"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

