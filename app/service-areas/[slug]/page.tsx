import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceAreaBySlug, getAllServiceAreaSlugs } from '@/lib/service-areas-data';
import { ServiceAreaHero } from '@/components/service-area-hero';
import { ServiceAreaSEO } from '@/components/service-area-seo';
import { ServiceAreaServices } from '@/components/service-area-services';
import { ServiceAreaContent } from '@/components/service-area-content';
import { ServiceAreaExperience } from '@/components/service-area-experience';
import { OtherServiceAreas } from '@/components/other-service-areas';
import { ServiceAreaCTA } from '@/components/service-area-cta';

export async function generateStaticParams() {
  const slugs = getAllServiceAreaSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);
  
  if (!area) {
    return {
      title: 'Service Area Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `Lawn Care Services in ${area.name} | Reno Laborers`,
    description: area.seoParagraph,
    keywords: [
      `lawn care ${area.slug}`,
      `lawn mowing ${area.slug}`,
      `professional lawn care ${area.slug} nevada`,
      `residential lawn care ${area.slug}`,
      `lawn maintenance ${area.slug}`,
      `yard maintenance ${area.slug}`,
    ],
    authors: [{ name: 'Reno Laborers' }],
    creator: 'Reno Laborers',
    publisher: 'Reno Laborers',
    metadataBase: new URL('https://renolaborers.com'),
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
    openGraph: {
      title: `Lawn Care Services in ${area.name} | Reno Laborers`,
      description: area.seoParagraph,
      url: `https://renolaborers.com/service-areas/${area.slug}`,
      siteName: 'Reno Laborers',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/RLLogo.png',
          width: 1200,
          height: 630,
          alt: `Reno Laborers - Lawn Care Services in ${area.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Lawn Care Services in ${area.name}`,
      description: area.seoParagraph,
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
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <ServiceAreaHero area={area} />
      <main className="bg-[#182418]">
        <ServiceAreaSEO area={area} />
        <ServiceAreaServices area={area} />
        <ServiceAreaContent area={area} />
        <ServiceAreaExperience area={area} />
        <OtherServiceAreas currentAreaSlug={area.slug} />
        <ServiceAreaCTA area={area} />
      </main>
    </>
  );
}



