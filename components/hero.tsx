"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export function Hero() {
  return (
    <div className="relative min-h-screen max-h-screen w-full overflow-hidden">
      <Image
        src="/heroBG.jpg"
        alt="Lawn care background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex min-h-screen max-h-screen w-full items-center">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-6 md:px-12 lg:px-16 xl:px-24 py-8 lg:py-10 items-center">
          {/* Left: headline, subheader, CTAs */}
          <div className="flex flex-col items-start justify-center gap-4 lg:gap-5 text-left max-w-xl order-2 lg:order-1">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white tracking-tight leading-tight font-unbounded"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
            >
              Lawn Care Services in Reno and Sparks NV
            </motion.h1>
            <motion.p
              className="text-base md:text-lg lg:text-xl text-white/90 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
            >
              Reno Laborers - Trusted lawn care and yard maintenance services for homeowners and businesses throughout Reno, Sparks, Spanish Springs, and Incline Village.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 items-start mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, delay: 1, ease: "easeOut" }}
            >
              <motion.a
                href="/contact"
                className="px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-full text-base hover:bg-[#2a4a6f] transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Free Quote
              </motion.a>
              <motion.a
                href="sms:+18582754671"
                className="px-6 py-3 bg-[#1e3a5f] text-white font-semibold rounded-full text-base hover:bg-[#2a4a6f] transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                858-275-4671
              </motion.a>
            </motion.div>
            <motion.p
              className="text-sm text-white/80 mt-3 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
            >
              <Link href="/services" className="text-[#b8d4a0] hover:underline font-medium">
                Lawn services
              </Link>
              {" · "}
              <Link href="/service-areas" className="text-[#b8d4a0] hover:underline font-medium">
                Areas we cover
              </Link>
              {" · "}
              <Link href="/service-areas/reno" className="text-[#b8d4a0] hover:underline font-medium">
                Reno
              </Link>
              {" · "}
              <Link href="/service-areas/sparks" className="text-[#b8d4a0] hover:underline font-medium">
                Sparks
              </Link>
            </motion.p>
          </div>
          {/* Right: contact form - scrollable so hero stays above the fold */}
          <motion.div
            className="w-full max-w-md lg:max-w-none mx-auto order-1 lg:order-2 max-h-[min(calc(100vh-4rem),600px)] lg:max-h-[calc(100vh-4rem)] overflow-y-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, delay: 0.3, ease: "easeOut" }}
          >
            <ContactForm variant="hero" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

