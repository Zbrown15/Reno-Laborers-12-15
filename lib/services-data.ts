export interface ServiceData {
  id: string;
  name: string;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  quickDescription: string;
  image: string;
  serviceType: string;
  propertyType: string;
  serviceArea: string;
  recommendedMaintenance: string;
  pricing: string;
  serviceBenefits: string[];
  seoHeader: string;
  seoParagraph: string;
  whyDoService: Array<{
    title: string;
    description: string;
  }>;
}

export const servicesData: ServiceData[] = [
  {
    id: 'lawn-mowing',
    name: 'Lawn Mowing',
    slug: 'lawn-mowing',
    heroTitle: 'Professional Lawn Mowing Services',
    heroSubtitle: 'Expert weekly and bi-weekly lawn mowing to keep your grass healthy and pristine in Reno & Sparks, NV',
    quickDescription: 'Regular lawn mowing is essential for maintaining a healthy, beautiful lawn. I provide professional lawn mowing services with proper grass cutting techniques, even cuts, and clean removal of clippings to enhance your property\'s curb appeal.',
    image: '/lawnMowedDriveway.jpg',
    serviceType: 'Regular Maintenance',
    propertyType: 'Residential & Commercial',
    serviceArea: 'Reno/Sparks NV',
    recommendedMaintenance: 'Weekly or Bi-weekly',
    pricing: 'Contact for Pricing',
    serviceBenefits: [
      'Promotes healthy grass growth',
      'Prevents weed infestation',
      'Enhances property curb appeal',
      'Maintains even lawn height',
      'Removes clippings for clean appearance'
    ],
    seoHeader: 'Professional Lawn Mowing Service in Reno NV',
    seoParagraph: 'Looking for reliable lawn mowing services in Reno, Nevada? I provide expert weekly and bi-weekly lawn mowing for residential and commercial properties throughout Reno, Sparks, Spanish Springs, and Incline Village. My professional lawn mowing services include proper grass cutting techniques, even cuts, and thorough cleanup to keep your lawn looking pristine year-round.',
    whyDoService: [
      {
        title: 'Maintains Healthy Grass Growth',
        description: 'Regular mowing at the proper height encourages strong root development and prevents grass from becoming too long, which can lead to disease and pest problems.'
      },
      {
        title: 'Prevents Weed Infestation',
        description: 'Consistent mowing helps prevent weeds from establishing themselves by removing seed heads and keeping your lawn dense and competitive.'
      },
      {
        title: 'Enhances Curb Appeal',
        description: 'A well-maintained, freshly mowed lawn significantly improves your property\'s appearance and increases its value.'
      },
      {
        title: 'Saves You Time and Effort',
        description: 'Let me handle the time-consuming task of lawn mowing so you can focus on what matters most to you.'
      },
      {
        title: 'Professional Equipment and Techniques',
        description: 'I use professional-grade equipment and proper mowing techniques to ensure your lawn receives the best care possible.'
      }
    ]
  },
  {
    id: 'weed-control',
    name: 'Weed Control',
    slug: 'weed-control',
    heroTitle: 'Professional Weed Control Services',
    heroSubtitle: 'Comprehensive weed removal and prevention to maintain a beautiful, weed-free lawn in Reno & Sparks, NV',
    quickDescription: 'Weeds can quickly take over your lawn and garden beds, competing with your grass for nutrients and water. I provide comprehensive weed control services using proven methods to eliminate existing weeds and prevent future growth.',
    image: '/weedFreeGardenBed.jpg',
    serviceType: 'Treatment & Maintenance',
    propertyType: 'Residential & Commercial',
    serviceArea: 'Reno/Sparks NV',
    recommendedMaintenance: 'Seasonal or As Needed',
    pricing: 'Contact for Pricing',
    serviceBenefits: [
      'Eliminates existing weeds',
      'Prevents future weed growth',
      'Protects lawn health',
      'Improves lawn appearance',
      'Reduces competition for nutrients'
    ],
    seoHeader: 'Professional Weed Control Service in Reno NV',
    seoParagraph: 'Struggling with weeds in your Reno lawn? I offer comprehensive weed control and removal services for residential and commercial properties throughout Reno, Sparks, Spanish Springs, and Incline Village. My proven weed control methods eliminate existing weeds and prevent future growth, ensuring your lawn and garden beds remain healthy and beautiful throughout the growing season.',
    whyDoService: [
      {
        title: 'Eliminates Unsightly Weeds',
        description: 'Remove weeds that detract from your lawn\'s appearance and create an uneven, unprofessional look.'
      },
      {
        title: 'Protects Your Lawn\'s Health',
        description: 'Weeds compete with your grass for water, nutrients, and sunlight, weakening your lawn over time.'
      },
      {
        title: 'Prevents Future Infestations',
        description: 'Professional weed control treatments prevent weeds from returning, saving you time and money in the long run.'
      },
      {
        title: 'Improves Property Value',
        description: 'A weed-free lawn significantly enhances your property\'s curb appeal and overall value.'
      },
      {
        title: 'Expert Identification and Treatment',
        description: 'I can identify different weed types and apply the most effective treatment methods for each specific problem.'
      }
    ]
  },
  {
    id: 'lawn-edging',
    name: 'Lawn Edging',
    slug: 'lawn-edging',
    heroTitle: 'Professional Lawn Edging Services',
    heroSubtitle: 'Precise edging to create clean, defined borders along driveways, walkways, and garden beds in Reno & Sparks, NV',
    quickDescription: 'Lawn edging creates sharp, clean lines that separate your lawn from driveways, walkways, patios, and garden beds. My professional edging techniques give your property a polished, well-maintained appearance that enhances your landscape\'s overall look.',
    image: '/lawnWithEdgingDone.jpg',
    serviceType: 'Maintenance & Enhancement',
    propertyType: 'Residential & Commercial',
    serviceArea: 'Reno/Sparks NV',
    recommendedMaintenance: 'Monthly or As Needed',
    pricing: 'Contact for Pricing',
    serviceBenefits: [
      'Creates clean, defined borders',
      'Prevents grass encroachment',
      'Enhances landscape appearance',
      'Reduces maintenance needs',
      'Adds professional polish'
    ],
    seoHeader: 'Professional Lawn Edging Service in Reno NV',
    seoParagraph: 'Need professional lawn edging services in Reno, Nevada? I provide precise edging services that create clean, defined borders along driveways, walkways, and garden beds for properties throughout Reno, Sparks, Spanish Springs, and Incline Village. My professional edging techniques prevent grass from encroaching into unwanted areas and give your property a polished, well-maintained appearance.',
    whyDoService: [
      {
        title: 'Creates Professional Appearance',
        description: 'Sharp, clean edges give your property a well-maintained, professional look that stands out in your neighborhood.'
      },
      {
        title: 'Prevents Grass Encroachment',
        description: 'Regular edging prevents grass from growing into driveways, walkways, and garden beds, reducing your maintenance needs.'
      },
      {
        title: 'Enhances Landscape Design',
        description: 'Defined borders help showcase your landscape design and create visual separation between different areas.'
      },
      {
        title: 'Increases Property Value',
        description: 'Professional edging significantly improves your property\'s curb appeal and perceived value.'
      },
      {
        title: 'Saves Time on Maintenance',
        description: 'Well-maintained edges reduce the time needed for cleanup and prevent grass from spreading where it shouldn\'t.'
      }
    ]
  },
  {
    id: 'leaf-raking',
    name: 'Leaf Raking',
    slug: 'leaf-raking',
    heroTitle: 'Professional Leaf Raking Services',
    heroSubtitle: 'Thorough leaf and debris removal to protect your lawn and keep your property clean in Reno & Sparks, NV',
    quickDescription: 'Fall leaves and seasonal debris can damage your lawn if left unattended. I provide comprehensive leaf raking and yard cleanup services, removing leaves, pine needles, and debris from lawns and garden beds to maintain healthy grass and a tidy appearance.',
    image: '/rakingJobDone.jpg',
    serviceType: 'Seasonal Cleanup',
    propertyType: 'Residential & Commercial',
    serviceArea: 'Reno/Sparks NV',
    recommendedMaintenance: 'Seasonal (Fall/Winter)',
    pricing: 'Contact for Pricing',
    serviceBenefits: [
      'Protects lawn from damage',
      'Prevents mold and disease',
      'Maintains healthy grass',
      'Improves property appearance',
      'Removes all debris completely'
    ],
    seoHeader: 'Professional Leaf Raking Service in Reno NV',
    seoParagraph: 'Need leaf raking and yard cleanup services in Reno, Nevada? I provide thorough leaf removal services for residential and commercial properties throughout Reno, Sparks, Spanish Springs, and Incline Village. My comprehensive cleanup includes removing leaves, pine needles, and seasonal debris from lawns and garden beds, preventing lawn damage and maintaining healthy grass throughout the year.',
    whyDoService: [
      {
        title: 'Protects Your Lawn from Damage',
        description: 'Leaves left on your lawn can block sunlight and trap moisture, leading to dead patches, mold, and disease.'
      },
      {
        title: 'Prevents Mold and Disease',
        description: 'Wet, decomposing leaves create the perfect environment for lawn diseases and fungal growth that can spread to healthy grass.'
      },
      {
        title: 'Maintains Healthy Grass Growth',
        description: 'Removing leaves allows your grass to receive essential sunlight and air circulation needed for healthy growth.'
      },
      {
        title: 'Improves Property Appearance',
        description: 'A clean, leaf-free lawn significantly enhances your property\'s appearance and curb appeal.'
      },
      {
        title: 'Complete Debris Removal',
        description: 'I bag and remove all debris, leaving your property clean and tidy without any mess left behind.'
      }
    ]
  },
  {
    id: 'snow-shoveling',
    name: 'Snow Shoveling',
    slug: 'snow-shoveling',
    heroTitle: 'Professional Snow Shoveling Services',
    heroSubtitle: 'Reliable snow removal to keep your property safe and accessible during winter in Reno & Sparks, NV',
    quickDescription: 'Winter snow can make your property unsafe and inaccessible. I provide reliable snow shoveling and snow removal services, clearing driveways, walkways, and sidewalks using efficient techniques to prevent ice buildup and ensure safe access to your home or business.',
    image: '/snowyDriveway.jpg',
    serviceType: 'Seasonal Service',
    propertyType: 'Residential & Commercial',
    serviceArea: 'Reno/Sparks NV',
    recommendedMaintenance: 'As Needed (Winter)',
    pricing: 'Contact for Pricing',
    serviceBenefits: [
      'Ensures safe access',
      'Prevents ice buildup',
      'Protects property',
      'Saves time and effort',
      'Reliable service when needed'
    ],
    seoHeader: 'Professional Snow Shoveling Service in Reno NV',
    seoParagraph: 'Need reliable snow shoveling services in Reno, Nevada? I provide professional snow removal services for residential and commercial properties throughout Reno, Sparks, Spanish Springs, and Incline Village. My efficient snow shoveling techniques clear driveways, walkways, and sidewalks, preventing ice buildup and ensuring safe access to your property during winter months.',
    whyDoService: [
      {
        title: 'Ensures Safe Access',
        description: 'Clear driveways and walkways prevent slips, falls, and accidents, keeping you, your family, and visitors safe.'
      },
      {
        title: 'Prevents Ice Buildup',
        description: 'Timely snow removal prevents ice from forming, reducing the risk of dangerous conditions and property damage.'
      },
      {
        title: 'Protects Your Property',
        description: 'Regular snow removal prevents damage to driveways, walkways, and landscaping from ice and snow accumulation.'
      },
      {
        title: 'Saves Time and Physical Effort',
        description: 'Avoid the physical strain and time commitment of shoveling snow yourself, especially during heavy snowfall.'
      },
      {
        title: 'Reliable When You Need It',
        description: 'I provide prompt, reliable service when snow falls, ensuring your property is cleared quickly and efficiently.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
}




