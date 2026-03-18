"use client";

import { servicesData } from "@/lib/services-data";
import { motion } from "motion/react";

type ContactFormVariant = "default" | "hero";

export function ContactForm({ variant = "default" }: { variant?: ContactFormVariant }) {
  const isHero = variant === "hero";
  const formName = "contact"; // single Netlify form name used on all pages

  return (
    <div className={isHero ? "w-full" : "mx-auto max-w-container px-4"}>
      <motion.form
        name={formName}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        encType="multipart/form-data"
        className={
          isHero
            ? "w-full bg-[#1a2a1a]/95 rounded-lg p-4 md:p-5 space-y-3"
            : "max-w-2xl mx-auto bg-[#1a2a1a] rounded-lg p-8 md:p-10 space-y-6"
        }
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Netlify form wiring */}
        <input type="hidden" name="form-name" value={formName} />
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>

        {/* First Name */}
        <div>
          <label
            htmlFor={isHero ? "hero-firstName" : "firstName"}
            className={`block text-white font-medium ${isHero ? "mb-1 text-sm" : "mb-2"}`}
          >
            First Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id={isHero ? "hero-firstName" : "firstName"}
            name="firstName"
            required
            className={`w-full px-4 bg-[#182418] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#87A96B] focus:border-transparent transition-colors ${
              isHero ? "py-2 text-sm" : "py-3"
            }`}
            placeholder="Enter your first name"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor={isHero ? "hero-phone" : "phone"}
            className={`block text-white font-medium ${isHero ? "mb-1 text-sm" : "mb-2"}`}
          >
            Phone <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id={isHero ? "hero-phone" : "phone"}
            name="phone"
            required
            className={`w-full px-4 bg-[#182418] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#87A96B] focus:border-transparent transition-colors ${
              isHero ? "py-2 text-sm" : "py-3"
            }`}
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor={isHero ? "hero-address" : "address"}
            className={`block text-white font-medium ${isHero ? "mb-1 text-sm" : "mb-2"}`}
          >
            Address <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id={isHero ? "hero-address" : "address"}
            name="address"
            required
            className={`w-full px-4 bg-[#182418] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#87A96B] focus:border-transparent transition-colors ${
              isHero ? "py-2 text-sm" : "py-3"
            }`}
            placeholder="123 Main Street"
          />
        </div>

        {/* Service Type */}
        <div>
          <label
            htmlFor={isHero ? "hero-serviceType" : "serviceType"}
            className={`block text-white font-medium ${isHero ? "mb-1 text-sm" : "mb-2"}`}
          >
            Service Type <span className="text-red-400">*</span>
          </label>
          <select
            id={isHero ? "hero-serviceType" : "serviceType"}
            name="serviceType"
            required
            className={`w-full px-4 bg-[#182418] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#87A96B] focus:border-transparent transition-colors ${
              isHero ? "py-2 text-sm" : "py-3"
            }`}
          >
            <option value="">Select a service</option>
            {servicesData.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>

        {/* Images */}
        <div>
          <label
            htmlFor={isHero ? "hero-images" : "images"}
            className={`block text-white font-medium ${isHero ? "mb-1 text-sm" : "mb-2"}`}
          >
            Images (Optional)
          </label>
          <input
            type="file"
            id={isHero ? "hero-images" : "images"}
            name="images"
            accept="image/*"
            multiple
            className={`w-full px-4 bg-[#182418] border border-gray-600 rounded-lg text-white file:mr-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#1e3a5f] file:text-white hover:file:bg-[#2a4a6f] file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#87A96B] focus:border-transparent transition-colors ${
              isHero ? "py-1.5 file:py-1 file:px-3" : "py-3 file:py-2 file:px-4"
            }`}
          />
          {!isHero && (
            <p className="mt-2 text-sm text-gray-400">
              You can upload multiple images; Netlify will attach them to the submission.
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className={isHero ? "pt-2" : "pt-4"}>
          <button
            type="submit"
            className={`w-full bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-colors shadow-lg ${
              isHero ? "px-6 py-3 text-sm" : "px-8 py-4 text-lg"
            }`}
          >
            Submit Quote Request
          </button>
        </div>
      </motion.form>
    </div>
  );
}
