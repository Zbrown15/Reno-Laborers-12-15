"use client";

import { useState, FormEvent } from "react";
import { servicesData } from "@/lib/services-data";
import { motion } from "motion/react";

type ContactFormVariant = "default" | "hero";

/** Netlify Forms + OpenNext v5: fields registered via public/__forms.html; POST target must be that static path */
const NETLIFY_FORM_ACTION = "/__forms.html";

export function ContactForm({ variant = "default" }: { variant?: ContactFormVariant }) {
  const isHero = variant === "hero";
  const formName = "contact";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    const form = e.currentTarget;

    try {
      const fd = new FormData(form);
      const response = await fetch(NETLIFY_FORM_ACTION, {
        method: "POST",
        body: fd,
      });
      if (!response.ok) {
        throw new Error(`Form submit failed: ${response.status}`);
      }
      setSubmitStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={isHero ? "w-full" : "mx-auto max-w-container px-4"}>
      <motion.form
        name={formName}
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className={
          isHero
            ? "w-full bg-[#1a2a1a]/95 rounded-lg p-4 md:p-5 space-y-3"
            : "max-w-2xl mx-auto bg-[#1a2a1a] rounded-lg p-8 md:p-10 space-y-6"
        }
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input type="hidden" name="form-name" value={formName} />
        <p className="hidden" aria-hidden="true">
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
          </label>
        </p>

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

        <div className={isHero ? "pt-2" : "pt-4"}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg ${
              isHero ? "px-6 py-3 text-sm" : "px-8 py-4 text-lg"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Quote Request"}
          </button>
        </div>

        {submitStatus === "success" && (
          <div
            className={`bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center ${
              isHero ? "mt-2 p-3 text-sm" : "mt-4 p-4"
            }`}
          >
            Thank you! Your quote request has been submitted. We&apos;ll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div
            className={`bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center ${
              isHero ? "mt-2 p-3 text-sm" : "mt-4 p-4"
            }`}
          >
            Something went wrong. Please try again or call us directly.
          </div>
        )}
      </motion.form>
    </div>
  );
}
