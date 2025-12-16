export interface ServiceAreaData {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  services: string[];
  quickInfo: string;
  heroTitle: string;
  heroSubtitle: string;
  seoParagraph: string;
  seoHeader: string;
  seoContent: string;
  localExpertise: {
    title: string;
    description: string;
  };
  nurturingLawn: {
    title: string;
    description: string;
  };
  seasonalCleanups: {
    title: string;
    description: string;
  };
  landscapingSolutions: {
    title: string;
    description: string;
  };
  sustainablePractices: {
    title: string;
    description: string;
  };
  customerSatisfaction: {
    title: string;
    description: string;
  };
  experienceDifference: string;
}

export const serviceAreasData: ServiceAreaData[] = [
  {
    id: 'reno',
    name: 'Reno, NV',
    slug: 'reno',
    description: 'Professional lawn care services throughout Reno, Nevada. I provide comprehensive lawn maintenance, mowing, edging, weed control, and seasonal services for residential and commercial properties across all neighborhoods in Reno.',
    image: '/frontLandscaping.jpg',
    services: [
      'Weekly & Bi-weekly Lawn Mowing',
      'Lawn Edging & Trimming',
      'Weed Control & Removal',
      'Leaf Raking & Cleanup',
      'Snow Shoveling & Removal'
    ],
    quickInfo: 'Serving all areas of Reno including Downtown, Midtown, Northwest Reno, Southwest Reno, and surrounding neighborhoods.',
    heroTitle: 'Professional Lawn Care Services in Reno, NV',
    heroSubtitle: 'Expert lawn care and yard maintenance services throughout Reno, Nevada for residential and commercial properties',
    seoParagraph: 'Looking for reliable lawn care services in Reno, Nevada? I provide comprehensive lawn maintenance, mowing, edging, weed control, and seasonal services for residential and commercial properties throughout all neighborhoods in Reno. My professional lawn care services ensure your property looks its best year-round.',
    seoHeader: 'Professional Lawn Care Services in Reno NV',
    seoContent: 'As your trusted lawn care provider in Reno, Nevada, I understand the unique challenges of maintaining beautiful lawns in our high-desert climate. From the hot, dry summers to the cold winters, I provide year-round lawn care solutions tailored to Reno\'s specific conditions. Whether you need weekly mowing, seasonal cleanup, or specialized services, I\'m here to help your property thrive.',
    localExpertise: {
      title: 'Local Expertise in Reno',
      description: 'With deep knowledge of Reno\'s climate, soil conditions, and local grass types, I provide lawn care services specifically tailored to our high-desert environment. I understand the challenges of maintaining healthy lawns in Reno\'s hot summers and cold winters, ensuring your property receives the right care at the right time.'
    },
    nurturingLawn: {
      title: 'Nurturing Your Lawn',
      description: 'I take a comprehensive approach to lawn care, focusing on the long-term health and beauty of your property. From proper mowing techniques that promote healthy root growth to strategic weed control that prevents future problems, every service is designed to nurture your lawn and enhance its natural beauty.'
    },
    seasonalCleanups: {
      title: 'Seasonal Yard Cleanups',
      description: 'Reno experiences distinct seasons, each requiring different lawn care approaches. I provide seasonal cleanup services including spring preparation, summer maintenance, fall leaf removal, and winter snow shoveling. My seasonal services ensure your property is well-maintained and protected throughout the year.'
    },
    landscapingSolutions: {
      title: 'Comprehensive Landscaping Solutions',
      description: 'Beyond basic lawn mowing, I offer comprehensive landscaping solutions including precision edging, weed control, and yard maintenance. Whether you need regular maintenance or one-time cleanup services, I provide solutions that enhance your property\'s curb appeal and value.'
    },
    sustainablePractices: {
      title: 'Sustainable Practices',
      description: 'I believe in sustainable lawn care practices that benefit both your property and the environment. My approach focuses on promoting healthy grass growth, preventing problems before they start, and using efficient techniques that minimize waste while maximizing results.'
    },
    customerSatisfaction: {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is my top priority. I take pride in delivering consistent, high-quality service that exceeds expectations. As a one-person operation, I provide personalized attention to every property, ensuring you receive the reliable, professional service your lawn deserves.'
    },
    experienceDifference: 'Experience the Difference with Reno Laborers Care in Reno'
  },
  {
    id: 'sparks',
    name: 'Sparks, NV',
    slug: 'sparks',
    description: 'Expert lawn care and yard maintenance services in Sparks, Nevada. I offer reliable, affordable lawn care solutions for homeowners and businesses throughout Sparks, ensuring your property looks its best year-round.',
    image: '/lawnMowedDriveway.jpg',
    services: [
      'Regular Lawn Mowing',
      'Precision Lawn Edging',
      'Comprehensive Weed Control',
      'Seasonal Leaf Removal',
      'Winter Snow Removal'
    ],
    quickInfo: 'Covering all of Sparks including Victorian Square, Spanish Springs, and surrounding residential and commercial areas.',
    heroTitle: 'Professional Lawn Care Services in Sparks, NV',
    heroSubtitle: 'Expert lawn care and yard maintenance services throughout Sparks, Nevada for residential and commercial properties',
    seoParagraph: 'Need professional lawn care services in Sparks, Nevada? I provide reliable, affordable lawn care solutions for homeowners and businesses throughout Sparks. My comprehensive services include regular mowing, edging, weed control, seasonal cleanup, and snow removal to keep your property looking its best year-round.',
    seoHeader: 'Professional Lawn Care Services in Sparks NV',
    seoContent: 'Serving Sparks, Nevada with expert lawn care services tailored to our local climate and conditions. I understand the unique needs of Sparks properties and provide year-round maintenance solutions that keep your lawn healthy and beautiful. From Victorian Square to Spanish Springs, I\'m your trusted lawn care provider.',
    localExpertise: {
      title: 'Local Expertise in Sparks',
      description: 'With extensive experience serving Sparks properties, I understand the specific lawn care needs of our community. I know the local soil conditions, grass types, and climate challenges, allowing me to provide services that are perfectly suited to Sparks\' unique environment.'
    },
    nurturingLawn: {
      title: 'Nurturing Your Lawn',
      description: 'I focus on building healthy, resilient lawns that can thrive in Sparks\' climate. Through proper mowing, strategic maintenance, and preventive care, I help your lawn develop strong roots and natural resistance to common problems, resulting in a beautiful, low-maintenance landscape.'
    },
    seasonalCleanups: {
      title: 'Seasonal Yard Cleanups',
      description: 'Sparks experiences all four seasons, each requiring specific lawn care attention. I provide comprehensive seasonal services including spring preparation, summer maintenance, fall cleanup, and winter snow removal to ensure your property is well-cared for throughout the year.'
    },
    landscapingSolutions: {
      title: 'Comprehensive Landscaping Solutions',
      description: 'I offer complete landscaping solutions for Sparks properties, from basic lawn maintenance to specialized services. Whether you need regular mowing, precision edging, weed control, or seasonal cleanup, I provide comprehensive solutions that enhance your property\'s appearance and value.'
    },
    sustainablePractices: {
      title: 'Sustainable Practices',
      description: 'My lawn care approach emphasizes sustainability and environmental responsibility. I use practices that promote long-term lawn health, reduce waste, and minimize environmental impact while delivering exceptional results for your Sparks property.'
    },
    customerSatisfaction: {
      title: 'Customer Satisfaction',
      description: 'I\'m committed to providing exceptional service that keeps Sparks homeowners and businesses satisfied. As a local, one-person operation, I offer personalized attention, reliable scheduling, and consistent quality that you can count on week after week, season after season.'
    },
    experienceDifference: 'Experience the Difference with Reno Laborers Care in Sparks'
  },
  {
    id: 'spanish-springs',
    name: 'Spanish Springs, NV',
    slug: 'spanish-springs',
    description: 'Professional lawn care services in Spanish Springs, Nevada. I provide personalized lawn maintenance and yard care solutions tailored to the unique needs of Spanish Springs properties.',
    image: '/lawnWithEdgingDone.jpg',
    services: [
      'Residential Lawn Mowing',
      'Lawn Edging Services',
      'Weed Management',
      'Yard Cleanup Services',
      'Snow Shoveling'
    ],
    quickInfo: 'Serving Spanish Springs and surrounding areas with reliable, professional lawn care services.',
    heroTitle: 'Professional Lawn Care Services in Spanish Springs, NV',
    heroSubtitle: 'Personalized lawn care and yard maintenance services tailored to Spanish Springs properties',
    seoParagraph: 'Looking for lawn care services in Spanish Springs, Nevada? I provide personalized lawn maintenance and yard care solutions tailored to the unique needs of Spanish Springs properties. My professional services ensure your residential property receives the attention and care it deserves.',
    seoHeader: 'Professional Lawn Care Services in Spanish Springs NV',
    seoContent: 'Serving Spanish Springs with personalized lawn care services designed for our community\'s specific needs. I understand the characteristics of Spanish Springs properties and provide tailored maintenance solutions that keep your lawn healthy and beautiful throughout the year.',
    localExpertise: {
      title: 'Local Expertise in Spanish Springs',
      description: 'I have specialized knowledge of Spanish Springs\' unique property characteristics and lawn care requirements. My local expertise allows me to provide services that are perfectly suited to Spanish Springs homes, ensuring optimal results for your property.'
    },
    nurturingLawn: {
      title: 'Nurturing Your Lawn',
      description: 'I take a personalized approach to lawn care, treating each Spanish Springs property as unique. By understanding your specific lawn\'s needs and characteristics, I provide customized care that promotes healthy growth and maintains your property\'s natural beauty.'
    },
    seasonalCleanups: {
      title: 'Seasonal Yard Cleanups',
      description: 'Spanish Springs properties benefit from seasonal maintenance that addresses the changing needs throughout the year. I provide comprehensive seasonal services including spring preparation, summer care, fall cleanup, and winter maintenance to keep your property in excellent condition.'
    },
    landscapingSolutions: {
      title: 'Comprehensive Landscaping Solutions',
      description: 'I offer complete landscaping solutions for Spanish Springs properties, from regular lawn maintenance to specialized services. My comprehensive approach ensures your property receives all the care it needs to look its best and maintain its value.'
    },
    sustainablePractices: {
      title: 'Sustainable Practices',
      description: 'My lawn care methods prioritize sustainability and environmental health. I use practices that build long-term lawn resilience, reduce resource consumption, and create beautiful, sustainable landscapes for Spanish Springs properties.'
    },
    customerSatisfaction: {
      title: 'Customer Satisfaction',
      description: 'I\'m dedicated to providing exceptional service that exceeds expectations for Spanish Springs homeowners. My personalized approach, attention to detail, and commitment to quality ensure you receive the reliable, professional lawn care service your property deserves.'
    },
    experienceDifference: 'Experience the Difference with Reno Laborers Care in Spanish Springs'
  },
  {
    id: 'incline-village',
    name: 'Incline Village, NV',
    slug: 'incline-village',
    description: 'Premium lawn care services in Incline Village, Nevada. I offer expert lawn maintenance and property care services for the unique high-altitude environment of Lake Tahoe\'s North Shore.',
    image: '/waterFeatureLandscape.jpg',
    services: [
      'Alpine Lawn Care',
      'Precision Edging',
      'Weed Control',
      'Seasonal Cleanup',
      'Snow Removal Services'
    ],
    quickInfo: 'Specialized lawn care services for Incline Village properties, adapted to the mountain climate and elevation.',
    heroTitle: 'Professional Lawn Care Services in Incline Village, NV',
    heroSubtitle: 'Specialized alpine lawn care services adapted to Lake Tahoe\'s high-altitude environment',
    seoParagraph: 'Need specialized lawn care services in Incline Village, Nevada? I provide expert lawn maintenance and property care services specifically adapted to the unique high-altitude environment of Lake Tahoe\'s North Shore. My alpine lawn care expertise ensures your Incline Village property receives the specialized care it needs.',
    seoHeader: 'Professional Lawn Care Services in Incline Village NV',
    seoContent: 'Serving Incline Village with specialized lawn care services designed for our unique mountain environment. I understand the challenges of maintaining lawns at high altitude, including shorter growing seasons, different grass types, and specific climate considerations. My alpine expertise ensures your Incline Village property thrives.',
    localExpertise: {
      title: 'Local Expertise in Incline Village',
      description: 'Incline Village\'s high-altitude environment requires specialized lawn care knowledge. I understand the unique challenges of alpine lawn maintenance, including shorter growing seasons, different grass varieties, and mountain climate conditions. My expertise ensures your property receives care that\'s perfectly suited to Lake Tahoe\'s environment.'
    },
    nurturingLawn: {
      title: 'Nurturing Your Lawn',
      description: 'Alpine lawns require specialized care to thrive at high elevation. I provide nurturing services that account for Incline Village\'s unique conditions, promoting healthy growth despite shorter seasons and helping your lawn develop the resilience needed to thrive in our mountain environment.'
    },
    seasonalCleanups: {
      title: 'Seasonal Yard Cleanups',
      description: 'Incline Village experiences distinct mountain seasons, each with specific lawn care needs. I provide seasonal services adapted to alpine conditions, including spring preparation after snowmelt, summer maintenance during the short growing season, fall cleanup, and comprehensive winter snow removal.'
    },
    landscapingSolutions: {
      title: 'Comprehensive Landscaping Solutions',
      description: 'I offer complete landscaping solutions for Incline Village properties, adapted to alpine conditions. From specialized lawn care to precision maintenance, I provide comprehensive services that enhance your property while respecting the unique characteristics of our mountain environment.'
    },
    sustainablePractices: {
      title: 'Sustainable Practices',
      description: 'In Incline Village\'s sensitive alpine environment, sustainable practices are essential. I use methods that protect Lake Tahoe\'s ecosystem while maintaining beautiful properties. My approach prioritizes environmental responsibility and long-term sustainability for our mountain community.'
    },
    customerSatisfaction: {
      title: 'Customer Satisfaction',
      description: 'I\'m committed to providing exceptional service for Incline Village properties. My specialized alpine expertise, attention to detail, and personalized approach ensure you receive the premium lawn care service your property deserves in our unique mountain environment.'
    },
    experienceDifference: 'Experience the Difference with Reno Laborers Care in Incline Village'
  }
];

export function getServiceAreaBySlug(slug: string): ServiceAreaData | undefined {
  return serviceAreasData.find(area => area.slug === slug);
}

export function getAllServiceAreaSlugs(): string[] {
  return serviceAreasData.map(area => area.slug);
}
