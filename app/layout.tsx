import type { Metadata } from "next";
import { Unbounded, Acme } from "next/font/google";
import "./globals.css";
import { INDEX_FOLLOW_PUBLIC } from "@/lib/seo/robots-metadata";
import { SITE_URL, SITE_NAME } from "@/lib/site-config";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/google-analytics";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

const acme = Acme({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-acme",
  display: "swap",
});

/** Site-wide defaults only. Each route defines its own title, description, canonical, and social metadata. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/RLLogo.png",
    shortcut: "/RLLogo.png",
    apple: "/RLLogo.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: INDEX_FOLLOW_PUBLIC,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${acme.variable}`}>
      <body>
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
