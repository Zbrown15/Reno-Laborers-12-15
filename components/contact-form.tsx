"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { servicesData } from "@/lib/services-data";
import { motion } from "motion/react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    email: "",
    address: "",
    zipcode: "",
    serviceType: "",
    images: [] as File[],
  });

  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...fileArray],
      }));

      // Create previews
      const newPreviews = fileArray.map((file) => URL.createObjectURL(file));
      setPreviewImages((prev) => [...prev, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
    URL.revokeObjectURL(previewImages[index]);
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("zipcode", formData.zipcode);
      formDataToSend.append("serviceType", formData.serviceType);

      formData.images.forEach((image, index) => {
        formDataToSend.append(`images`, image);
      });

      // Here you would typically send to your API endpoint
      // For now, we'll just simulate a submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form data:", {
        firstName: formData.firstName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        zipcode: formData.zipcode,
        serviceType: formData.serviceType,
        images: formData.images,
      });

      setSubmitStatus("success");
      
      // Reset form
      setFormData({
        firstName: "",
        phone: "",
        email: "",
        address: "",
        zipcode: "",
        serviceType: "",
        images: [],
      });
      previewImages.forEach((url) => URL.revokeObjectURL(url));
      setPreviewImages([]);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-container px-4">
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-[#1a2a1a] rounded-lg p-8 md:p-10 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-white font-medium mb-2"
          >
            First Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-[#182418] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#87A96B] focus:border-transparent transition-colors"
            placeholder="Enter your first name"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-white font-medium mb-2"
          >
            Phone <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-[#182418] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#87A96B] focus:border-transparent transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-white font-medium mb-2"
          >
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-[#182418] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#87A96B] focus:border-transparent transition-colors"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-white font-medium mb-2"
          >
            Address <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-[#182418] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#87A96B] focus:border-transparent transition-colors"
            placeholder="123 Main Street"
          />
        </div>

        {/* Zipcode */}
        <div>
          <label
            htmlFor="zipcode"
            className="block text-white font-medium mb-2"
          >
            Zipcode <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
            required
            pattern="[0-9]{5}"
            maxLength={5}
            className="w-full px-4 py-3 bg-[#182418] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#87A96B] focus:border-transparent transition-colors"
            placeholder="89501"
          />
        </div>

        {/* Service Type */}
        <div>
          <label
            htmlFor="serviceType"
            className="block text-white font-medium mb-2"
          >
            Service Type <span className="text-red-400">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-[#182418] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#87A96B] focus:border-transparent transition-colors"
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
            htmlFor="images"
            className="block text-white font-medium mb-2"
          >
            Images (Optional)
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="w-full px-4 py-3 bg-[#182418] border border-gray-600 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#1e3a5f] file:text-white hover:file:bg-[#2a4a6f] file:cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#87A96B] focus:border-transparent transition-colors"
          />
          <p className="mt-2 text-sm text-gray-400">
            You can upload multiple images in any format or size
          </p>

          {/* Image Previews */}
          {previewImages.length > 0 && (
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {previewImages.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg border border-gray-600"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    aria-label="Remove image"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full text-lg hover:bg-[#2a4a6f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isSubmitting ? "Submitting..." : "Submit Quote Request"}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
            Thank you! Your quote request has been submitted. We'll get back to you soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
            There was an error submitting your request. Please try again or contact us directly.
          </div>
        )}
      </motion.form>
    </div>
  );
}

