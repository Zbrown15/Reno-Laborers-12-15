import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data';
import { ServiceHero } from '@/components/service-hero';
import { ServiceQuickInfo } from '@/components/service-quick-info';
import { ServiceSEO } from '@/components/service-seo';
import { WhyDoService } from '@/components/why-do-service';
import { OtherServices } from '@/components/other-services';
import { ServiceCTA } from '@/components/service-cta';

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${service.name} Services in Reno & Sparks, NV | Reno Laborers`,
    description: service.seoParagraph,
    keywords: [
      `${service.name.toLowerCase()} reno`,
      `${service.name.toLowerCase()} services reno`,
      `professional ${service.name.toLowerCase()} reno nevada`,
      `${service.name.toLowerCase()} reno sparks`,
      `${service.name.toLowerCase()} services reno nevada`,
      `affordable ${service.name.toLowerCase()} reno`,
      `residential ${service.name.toLowerCase()} reno`,
      `commercial ${service.name.toLowerCase()} sparks`,
    ],
    authors: [{ name: 'Reno Laborers' }],
    creator: 'Reno Laborers',
    publisher: 'Reno Laborers',
    metadataBase: new URL('https://renolaborers.com'),
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} Services in Reno & Sparks, NV | Reno Laborers`,
      description: service.seoParagraph,
      url: `https://renolaborers.com/services/${service.slug}`,
      siteName: 'Reno Laborers',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} Services in Reno & Sparks, NV`,
      description: service.seoParagraph,
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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />
      <main className="bg-[#182418]">
        <ServiceQuickInfo service={service} />
        <ServiceSEO service={service} />
        <WhyDoService service={service} />
        <OtherServices currentServiceSlug={service.slug} />
        <ServiceCTA service={service} />
      </main>
    </>
  );
}

