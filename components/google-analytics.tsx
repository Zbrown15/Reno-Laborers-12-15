"use client";

import Script from 'next/script';
import { useEffect, useState } from 'react';

export function GoogleAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(true);

  useEffect(() => {
    // Check if GA should be excluded based on the header set by middleware
    const checkExclusion = async () => {
      try {
        const response = await fetch('/api/check-ga-exclude', {
          method: 'HEAD',
        });
        const excludeHeader = response.headers.get('x-ga-exclude');
        if (excludeHeader === 'true') {
          setShouldLoad(false);
        }
      } catch (error) {
        // If check fails, load GA anyway (fail open)
        console.error('Error checking GA exclusion:', error);
      }
    };

    checkExclusion();
  }, []);

  if (!shouldLoad) {
    return null;
  }

  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-1YD1RHYNP5';

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}

