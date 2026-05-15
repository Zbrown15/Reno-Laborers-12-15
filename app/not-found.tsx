import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/site-config";

const NOT_FOUND_DESCRIPTION = `This URL is not part of ${SITE_NAME}. Use the home page to browse lawn care in Reno, Sparks, Spanish Springs, and Incline Village, Nevada.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Page not found | ${SITE_NAME}`,
  description: NOT_FOUND_DESCRIPTION,
  openGraph: {
    title: `Page not found | ${SITE_NAME}`,
    description: NOT_FOUND_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Page not found | ${SITE_NAME}`,
    description: NOT_FOUND_DESCRIPTION,
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[60vh] bg-[#182418] text-white flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Page not found</h1>
      <p className="text-gray-300 text-center max-w-md mb-8">
        The page you are looking for does not exist or has moved. Return to the home page to explore lawn mowing, weed
        control, edging, leaf cleanup, and snow shoveling in Washoe County.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
