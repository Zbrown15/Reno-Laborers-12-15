export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Reno Laborers",
    "description": "Professional lawn care services including mowing, edging, weed control, leaf raking, snow shoveling, and landscaping in Reno, Sparks, Spanish Springs, and Incline Village, Nevada",
    "url": "https://renolaborers.com",
    "telephone": "",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Reno",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.5296",
      "longitude": "-119.8138"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Reno"
      },
      {
        "@type": "City",
        "name": "Sparks"
      },
      {
        "@type": "City",
        "name": "Spanish Springs"
      },
      {
        "@type": "City",
        "name": "Incline Village"
      }
    ],
    "serviceType": [
      "Lawn Mowing",
      "Lawn Edging",
      "Weed Control",
      "Landscaping",
      "Yard Maintenance",
      "Leaf Raking",
      "Leaf Removal",
      "Snow Shoveling",
      "Snow Removal",
      "Pine Needle Removal",
      "Lawn Cleanup",
      "Seasonal Lawn Care"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lawn Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Lawn Mowing",
            "description": "Professional weekly lawn mowing services for residential properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Lawn Care",
            "description": "Commercial lawn maintenance and landscaping services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Leaf Raking",
            "description": "Professional leaf raking and removal services for residential and commercial properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Snow Shoveling",
            "description": "Reliable snow shoveling and snow removal services for driveways, walkways, and sidewalks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Yard Cleanup",
            "description": "One-time and seasonal yard cleanup services including leaf and pine needle removal"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

