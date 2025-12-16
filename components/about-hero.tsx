"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function AboutHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/heroBG.jpg"
        alt="About Reno Laborers - Professional lawn care services"
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
            About Reno Laborers
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
          >
            Your trusted one-person lawn care service providing expert, affordable, and reliable residential and commercial lawn maintenance throughout Reno, Sparks, Spanish Springs, and Incline Village, Nevada.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-start mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, delay: 1, ease: "easeOut" }}
          >
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full text-lg hover:bg-[#2a4a6f] transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Quote
            </motion.a>
            <motion.a
              href="sms:+18582754671"
              className="px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full text-lg hover:bg-[#2a4a6f] transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              858-275-4671
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

