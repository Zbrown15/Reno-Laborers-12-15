"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ServiceData } from "@/lib/services-data";

interface ServiceHeroProps {
  service: ServiceData;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/heroBG.jpg"
        alt={service.heroTitle}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex min-h-screen w-full items-center justify-start">
        <div className="flex flex-col items-start justify-center gap-6 px-8 md:px-16 lg:px-24 text-left max-w-4xl">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            {service.heroTitle}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
          >
            {service.heroSubtitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
}

