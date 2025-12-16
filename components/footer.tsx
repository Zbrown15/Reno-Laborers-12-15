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

  return (
    <footer className="bg-[#182418] text-white border-t border-gray-700">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
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

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="mailto:Contact@Renolaborers.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#87A96B] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Contact@Renolaborers.com</span>
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

