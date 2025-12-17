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
    images: [
      {
        url: '/RLLogo.png',
        width: 1200,
        height: 630,
        alt: 'Reno Laborers - Free Quote',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Quote | Reno Laborers',
    description: 'Get a free quote for professional lawn care services in Reno, Sparks, Spanish Springs, and Incline Village.',
    images: ['/RLLogo.png'],
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
        <div className="mx-auto max-w-container px-4">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Get Your Free Lawn Care Quote Today</h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                Ready to transform your lawn with professional lawn care services? Contact Reno Laborers today for a free, no-obligation quote. I provide expert lawn care services throughout Reno, Sparks, Spanish Springs, and Incline Village, Nevada, including lawn mowing, edging, weed control, leaf raking, and snow shoveling.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Whether you need weekly lawn maintenance, seasonal cleanup services, or specialized lawn care solutions, I'm here to help. As a one-person operation, I provide personalized attention to every property, ensuring you receive reliable, professional service that exceeds expectations.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Simply fill out the form below with your contact information, property details, and the services you're interested in. I'll review your request and get back to you promptly with a customized quote tailored to your specific lawn care needs. You can also call or text me directly at (858) 275-4671 for immediate assistance.
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 mt-8">Why Choose Reno Laborers?</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                When you choose Reno Laborers for your lawn care needs, you're choosing a trusted local professional who understands the unique challenges of maintaining beautiful lawns in Northern Nevada. I specialize in residential and commercial lawn care services, providing consistent, high-quality results that enhance your property's curb appeal and value.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                My services include professional lawn mowing with proper grass cutting techniques, precision lawn edging for clean borders, comprehensive weed control to eliminate and prevent weeds, thorough leaf raking and seasonal cleanup, and reliable snow shoveling during winter months. I use professional-grade equipment and proven techniques to ensure your lawn receives the best care possible.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Don't wait to give your lawn the professional care it deserves. Request your free quote today and discover how Reno Laborers can help you achieve a beautiful, healthy lawn year-round.
              </p>
            </div>
          </div>
          <ContactForm />
          <div className="max-w-4xl mx-auto mt-12">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">What Happens After You Submit Your Request?</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Once you submit your quote request, I'll review all the details you've provided about your property and lawn care needs. I typically respond within 24 hours to discuss your requirements and provide a customized estimate. During our conversation, I can answer any questions you have about my services, scheduling options, and pricing.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                If you have photos of your property, feel free to include them with your request. This helps me provide a more accurate quote and better understand your specific lawn care needs. I'll work with you to create a service plan that fits your budget and schedule, whether you need weekly maintenance, bi-weekly service, or seasonal cleanups.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Ready to get started? Fill out the form above or contact me directly. I look forward to helping you achieve the beautiful, healthy lawn you deserve.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}



