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

export function ServicesList() {
  return (
    <div className="space-y-12">
      {services.map((service, index) => {
        const Icon = service.icon;
        
        return (
          <div
            key={index}
            className="bg-gradient-to-b from-[#1e3a5f]/40 to-[#182418]/80 rounded-lg border-t border-[#87A96B]/30 p-6 sm:p-8"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Image */}
              <div className="relative w-full md:w-1/3 h-[250px] md:h-[200px] rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Icon className="w-10 h-10 text-[#87A96B] flex-shrink-0" />
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    {service.name}
                  </h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="px-6 py-3 bg-[#1e3a5f] text-white font-medium rounded-full hover:bg-[#2a4a6f] transition-colors w-fit"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

