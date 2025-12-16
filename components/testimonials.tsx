"use client";

import Image from "next/image";
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    author: {
      name: "Mike Johnson",
      handle: "",
      location: "Reno, NV"
    },
    text: "Had Zach come out today to pull some weeds, he did a great job! Got all the weeds pulled in a timely manner and bagged everything. Thank you!"
  },
  {
    author: {
      name: "Sarah Martinez",
      handle: "",
      location: "Sparks, NV"
    },
    text: "Had Reno Laborers mow my front lawn today, it looks amazing! Highly recommend."
  },
  {
    author: {
      name: "Robert Chen",
      handle: "",
      location: "Spanish Springs, NV"
    },
    text: "He did a great job raking all my leaves and pine needles, I highly recommend."
  },
  {
    author: {
      name: "Jennifer Williams",
      handle: "",
      location: "Reno, NV"
    },
    text: "Called them for a one-time cleanup after the wind storm. They showed up on time and did excellent work cleaning up all the debris. Very professional!"
  },
  {
    author: {
      name: "David Thompson",
      handle: "",
      location: "Sparks, NV"
    },
    text: "Been using them for weekly mowing all summer. My lawn has never looked better. They're reliable and do great work every time."
  },
  {
    author: {
      name: "Lisa Anderson",
      handle: "",
      location: "Incline Village, NV"
    },
    text: "They came out and edged my driveway and walkways. Looks so much cleaner now! Will definitely call them again."
  },
  {
    author: {
      name: "James Rodriguez",
      handle: "",
      location: "Reno, NV"
    },
    text: "Had them fertilize my lawn last month and the grass is so much greener now. Great service and fair pricing."
  },
  {
    author: {
      name: "Amanda Davis",
      handle: "",
      location: "Spanish Springs, NV"
    },
    text: "Quick response time and they got my backyard cleaned up in no time. Very happy with the results!"
  },
  {
    author: {
      name: "Mark Wilson",
      handle: "",
      location: "Sparks, NV"
    },
    text: "They mowed, edged, and cleaned up my front yard. Everything looks perfect. Highly recommend their services."
  },
  {
    author: {
      name: "Patricia Brown",
      handle: "",
      location: "Reno, NV"
    },
    text: "Had them do weed control treatment and it made such a difference. My lawn looks so much better now!"
  },
  {
    author: {
      name: "Christopher Lee",
      handle: "",
      location: "Incline Village, NV"
    },
    text: "They did a fall cleanup for me - raked leaves, trimmed bushes, and cleaned everything up. Great job!"
  },
  {
    author: {
      name: "Michelle Garcia",
      handle: "",
      location: "Spanish Springs, NV"
    },
    text: "Professional service and they always show up when they say they will. My lawn maintenance has never been easier."
  }
];

export function Testimonials() {
  return (
    <section className="w-full bg-[#182418] text-white py-12 sm:py-16 md:py-20 px-4">
      <div className="mx-auto max-w-container">
        {/* Header Section - Centered */}
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Trusted Lawn Care Company in<br />Reno & Sparks
          </h2>
          <p className="text-md max-w-[800px] font-medium text-gray-400 sm:text-xl">
            Trusted by homeowners and businesses throughout Reno, Sparks, Spanish Springs, and Incline Village
          </p>
        </div>

        {/* Image and Reviews Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <div className="relative w-full h-[300px] md:h-[350px] rounded-lg overflow-hidden">
            <Image
              src="/reviewsIMG.jpg"
              alt="Lawn care reviews"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Reviews Marquee */}
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-[400px]">
            <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:500s] w-full">
              <div className="flex shrink-0 [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
                {testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`first-${i}`}
                    {...testimonial}
                  />
                ))}
                {testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`second-${i}`}
                    {...testimonial}
                  />
                ))}
              </div>
              <div className="flex shrink-0 [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]" aria-hidden="true">
                {testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`duplicate-first-${i}`}
                    {...testimonial}
                  />
                ))}
                {testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`duplicate-second-${i}`}
                    {...testimonial}
                  />
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-[#182418] sm:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-[#182418] sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

