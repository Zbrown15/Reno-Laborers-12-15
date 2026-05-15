import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Page not found | ${SITE_NAME}`,
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
        The page you are looking for does not exist or has moved.
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
