import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Free Quote | Reno Laborers',
  description: 'Get a free quote for professional lawn care services in Reno, Sparks, Spanish Springs, and Incline Village. Contact us today for expert lawn mowing, edging, weed control, and more.',
  keywords: [
    'free quote lawn care reno',
    'lawn care quote reno',
    'get quote lawn service reno',
    'free estimate lawn care reno',
    'contact lawn care reno',
  ],
  authors: [{ name: 'Reno Laborers' }],
  creator: 'Reno Laborers',
  publisher: 'Reno Laborers',
  metadataBase: new URL('https://renolaborers.com'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Free Quote | Reno Laborers',
    description: 'Get a free quote for professional lawn care services in Reno, Sparks, Spanish Springs, and Incline Village.',
    url: 'https://renolaborers.com/contact',
    siteName: 'Reno Laborers',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Quote | Reno Laborers',
    description: 'Get a free quote for professional lawn care services in Reno, Sparks, Spanish Springs, and Incline Village.',
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
};

export default function ContactPage() {
  return (
    <>
      <div className="relative min-h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#182418]"></div>
        <div className="relative z-10 flex min-h-[60vh] w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-6 px-8 md:px-16 lg:px-24 text-center max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Free Quote
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium">
              Get a free quote for professional lawn care services. Fill out the form below and we'll get back to you soon.
            </p>
          </div>
        </div>
      </div>
      <main className="bg-[#182418] py-12 md:py-16 lg:py-20">
        <ContactForm />
      </main>
    </>
  );
}

