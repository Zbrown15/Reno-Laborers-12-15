"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const areaLinks = [
    { href: "/service-areas/reno", label: "Reno lawn care" },
    { href: "/service-areas/sparks", label: "Sparks lawn care" },
    { href: "/service-areas/spanish-springs", label: "Spanish Springs" },
    { href: "/service-areas/incline-village", label: "Incline Village" },
  ];

  return (
    <footer className="bg-[#182418] text-white border-t border-gray-700">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Reno Laborers</h3>
            <p className="text-gray-400 mb-4">
              Professional lawn care and yard maintenance services for homeowners and businesses throughout Reno, Sparks, Spanish Springs, and Incline Village.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#87A96B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Local service areas (internal linking) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Local service areas</h4>
            <ul className="space-y-2">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#87A96B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@renoweedpulling.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#87A96B] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@renoweedpulling.com</span>
              </a>
              <a
                href="tel:+18582754671"
                className="flex items-center gap-2 text-gray-400 hover:text-[#87A96B] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(858) 275-4671</span>
              </a>
              <a
                href="/contact"
                className="inline-block mt-4 px-6 py-2 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Reno Laborers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}




