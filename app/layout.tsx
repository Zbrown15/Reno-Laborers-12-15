import type { Metadata } from 'next'
import { Unbounded, Acme } from 'next/font/google'
import './globals.css'
import { LocalBusinessSchema } from '@/components/seo-schema'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

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
  title: 'Professional Lawn Care Services in Reno & Sparks, Nevada | Reno Laborers',
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
  authors: [{ name: 'Reno Laborers' }],
  creator: 'Reno Laborers',
  publisher: 'Reno Laborers',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://renolaborers.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Professional Lawn Care Services in Reno & Sparks, Nevada | Reno Laborers',
    description: 'Expert lawn mowing, edging, weed control, leaf raking, snow shoveling, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village. Residential and commercial lawn care you can trust.',
    url: 'https://renolaborers.com',
    siteName: 'Reno Laborers',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Lawn Care Services in Reno & Sparks, Nevada',
    description: 'Expert lawn mowing, edging, fertilization, weed control, and landscaping services in Reno, Sparks, Spanish Springs, and Incline Village.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        <LocalBusinessSchema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

