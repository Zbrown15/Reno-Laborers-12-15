"use client";

import Link from "next/link";
import { SITE_NAME } from "@/lib/site-config";

const linkClass = "text-[#87A96B] hover:text-[#9abf7a] underline-offset-2 hover:underline font-medium";

const AREA_LINKS = [
  { href: "/service-areas/reno", label: "Reno" },
  { href: "/service-areas/sparks", label: "Sparks" },
  { href: "/service-areas/spanish-springs", label: "Spanish Springs" },
  { href: "/service-areas/incline-village", label: "Incline Village" },
] as const;

const SERVICE_LINKS = [
  { href: "/services/lawn-mowing", label: "Lawn mowing" },
  { href: "/services/weed-control", label: "Weed control" },
  { href: "/services/lawn-edging", label: "Lawn edging" },
  { href: "/services/leaf-raking", label: "Leaf raking" },
  { href: "/services/snow-shoveling", label: "Snow shoveling" },
] as const;

/** Cross-links to other cities (optionally hide current area page). */
export function LocalAreaQuickLinks({
  className = "",
  excludeSlug,
  showServices = true,
}: {
  className?: string;
  excludeSlug?: string;
  showServices?: boolean;
}) {
  const areas = excludeSlug
    ? AREA_LINKS.filter((l) => !l.href.endsWith(`/${excludeSlug}`))
    : [...AREA_LINKS];

  return (
    <nav aria-label="Lawn care service areas near Reno" className={`text-sm ${className}`}>
      <p className="text-gray-500 mb-2">Service areas</p>
      <ul className="flex flex-wrap gap-x-3 gap-y-1">
        {areas.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={linkClass}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      {showServices && (
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 border-t border-white/10 pt-3" aria-label="Popular services">
          {SERVICE_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

/** Inline sentence with high-value internal links (local SEO). */
export function LocalSeoParagraphLinks({ className = "" }: { className?: string }) {
  return (
    <p className={`text-base text-gray-400 leading-relaxed ${className}`}>
      See our{" "}
      <Link href="/services" className={linkClass}>
        full lawn care services in Reno &amp; Sparks
      </Link>
      , the{" "}
      <Link href="/service-areas" className={linkClass}>
        Northern Nevada cities we serve
      </Link>
      , or{" "}
      <Link href="/contact" className={linkClass}>
        request a free quote
      </Link>
      . Learn more{" "}
      <Link href="/about" className={linkClass}>
        about {SITE_NAME}
      </Link>
      .
    </p>
  );
}
