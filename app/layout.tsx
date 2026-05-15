import type { Metadata } from 'next'
import { Unbounded, Acme } from 'next/font/google'
import './globals.css'
import { LocalBusinessSchema } from '@/components/seo-schema'
import { INDEX_FOLLOW_PUBLIC } from '@/lib/seo/robots-metadata'
import { SITE_URL, SITE_GEO, SITE_NAME } from '@/lib/site-config'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { GoogleAnalytics } from '@/components/google-analytics'

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
})

const acme = Acme({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-acme',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `Professional Lawn Care Services in Reno & Sparks, Nevada | ${SITE_NAME}`,
  description: 'Expert lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village. Residential and commercial lawn care you can trust.',
  icons: {
    icon: '/RLLogo.png',
    shortcut: '/RLLogo.png',
    apple: '/RLLogo.png',
  },
  keywords: [
    'lawn care reno',
    'lawn mowing reno',
    'lawn care sparks',
    'professional lawn care reno nevada',
    'residential lawn care reno',
    'commercial lawn care sparks',
    'lawn maintenance reno',
    'lawn edging reno',
    'weed control reno',
    'landscaping services reno',
    'yard maintenance reno',
    'lawn care spanish springs',
    'lawn care incline village',
    'affordable lawn care reno',
    'weekly lawn mowing reno',
    'seasonal lawn care reno',
    'lawn care company reno',
    'best lawn care reno',
    'lawn service reno sparks',
    'lawn care washoe county',
    'pine needle removal reno',
    'leaf raking reno',
    'leaf removal reno',
    'snow shoveling reno',
    'snow removal reno',
    'snow shoveling sparks',
    'snow removal sparks',
    'lawn cleanup reno',
    'professional landscaper reno'
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `Professional Lawn Care Services in Reno & Sparks, Nevada | ${SITE_NAME}`,
    description: 'Expert lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village. Residential and commercial lawn care you can trust.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Lawn Care Services in Reno & Sparks, Nevada',
    description: 'Expert lawn mowing, edging, fertilization, weed control, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village.',
  },
  robots: INDEX_FOLLOW_PUBLIC,
  /** Geographic hints for crawlers (complements JSON-LD for local / Maps) */
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Reno–Sparks, Nevada',
    ICBM: `${SITE_GEO.latitude}, ${SITE_GEO.longitude}`,
    'geo.position': `${SITE_GEO.latitude};${SITE_GEO.longitude}`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${acme.variable}`}>
      <body>
        <GoogleAnalytics />
        <LocalBusinessSchema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

