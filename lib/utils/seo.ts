/**
 * Centralized SEO utilities for K2AI Hub
 * Provides helper functions for metadata, structured data, and schema generation
 * Based on LLM SEO best practices for AI-powered search engines
 */

// Site configuration
export const SITE_NAME = 'K2AI Hub';
export const SITE_TAGLINE = 'Advanced AI Technology Platform';
export const SITE_URL = 'https://k2aihub.com';
export const SITE_DESCRIPTION =
  'K2AI Hub - Advanced AI Technology Platform offering smart education, content creation tools, finance management, and interactive learning. Explore AI-powered solutions including K2AI Education (90+ learning modules), K2AI Creator Studio (content repurposing), K2AI Finance (budget tracking), and interactive Vietnam geographical map.';

/**
 * Creates a properly formatted page title with site branding
 */
export function createTitle(title: string): string {
  return `${title} | ${SITE_NAME}`;
}

/**
 * Creates SEO-optimized description (max 160 characters)
 */
export function createDescription(description: string): string {
  if (description.length > 160) {
    return description.substring(0, 157) + '...';
  }
  return description;
}

/**
 * Creates keyword string from array
 */
export function createKeywords(keywords: string[]): string {
  return keywords.join(', ');
}

/**
 * Creates comprehensive metadata with OpenGraph and Twitter Card support
 */
export function createPageMetadata(
  title: string,
  description: string,
  path: string = '',
  keywords: string[] = [],
  imageUrl?: string,
) {
  const fullTitle = createTitle(title);
  const ogDescription = createDescription(description);
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = imageUrl || `${SITE_URL}/og-image.png`;

  return {
    title: fullTitle,
    description: ogDescription,
    keywords: keywords.length > 0 ? createKeywords(keywords) : undefined,
    authors: [{ name: 'K2AI Team' }],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: fullTitle,
      description: ogDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: ogDescription,
      images: [ogImage],
      creator: '@k2aihub',
      site: '@k2aihub',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Creates Organization structured data (Schema.org)
 * Critical for LLM SEO - helps AI understand who we are
 */
export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    description: SITE_TAGLINE,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'k2aihub@gmail.com',
      contactType: 'Customer Support',
    },
    sameAs: [
      'https://edu.k2aihub.com',
      'https://creator.k2aihub.com',
      'https://finance.k2aihub.com',
      'https://twitter.com/k2aihub',
    ],
    subOrganization: [
      {
        '@type': 'EducationalOrganization',
        name: 'K2AI Education',
        url: 'https://edu.k2aihub.com',
        description: 'Smart learning platform with 90+ modules covering AI, programming, STEM, and essential skills',
      },
      {
        '@type': 'Organization',
        name: 'K2AI Creator Studio',
        url: 'https://creator.k2aihub.com',
        description: 'AI-powered content repurposing tool for creators and marketers',
      },
      {
        '@type': 'Organization',
        name: 'K2AI Finance',
        url: 'https://finance.k2aihub.com',
        description: 'AI-powered personal budget tracker with smart savings suggestions',
      },
    ],
  };
}

/**
 * Creates WebSite structured data with search action
 */
export function createWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://edu.k2aihub.com/learning?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Creates FAQPage structured data for rich snippets
 * Highly effective for LLM SEO - appears in AI search results
 */
export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Creates BreadcrumbList structured data
 */
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Creates Product structured data for K2AI products
 */
export function createProductSchema(
  name: string,
  description: string,
  url: string,
  image: string,
  offers: Array<{ price: string; priceCurrency: string; availability: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    url,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    offers: offers.map((offer) => ({
      '@type': 'Offer',
      ...offer,
      seller: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '100',
    },
  };
}

/**
 * Creates Course structured data for educational content
 */
export function createCourseSchema(
  name: string,
  description: string,
  url: string,
  provider: string,
  courseMode?: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    courseMode: courseMode || 'online',
    educationalCredentialAwarded: 'Certificate of Completion',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      instructor: {
        '@type': 'Organization',
        name: 'K2AI Team',
      },
    },
  };
}

/**
 * Creates SoftwareApplication structured data
 */
export function createSoftwareApplicationSchema(
  name: string,
  description: string,
  url: string,
  applicationCategory: string,
  operatingSystem: string = 'Web Browser',
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    applicationCategory,
    operatingSystem,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '100',
    },
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}

/**
 * Creates Service structured data
 */
export function createServiceSchema(
  name: string,
  description: string,
  url: string,
  serviceType: string,
  provider: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    serviceType,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'K2AI Services',
    },
  };
}

/**
 * Creates WebApplication structured data
 */
export function createWebApplicationSchema(
  name: string,
  description: string,
  url: string,
  applicationCategory: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory,
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'AI-Powered Learning',
      'Interactive Content',
      'Personalized Experience',
      'Mobile Responsive',
      'Multi-language Support',
    ],
  };
}

/**
 * Creates HowTo structured data for tutorials and guides
 */
export function createHowToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string; text: string; image?: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
    totalTime: 'PT10M',
    supply: [],
    tool: [],
  };
}

/**
 * Creates VideoObject structured data for educational videos
 */
export function createVideoObjectSchema(
  name: string,
  description: string,
  url: string,
  thumbnailUrl: string,
  duration: string,
  uploadDate: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    url,
    thumbnailUrl,
    duration,
    uploadDate,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    embedUrl: url,
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: 'https://schema.org/WatchAction',
      userInteractionCount: 1000,
    },
  };
}

/**
 * Creates Article structured data for blog posts and educational content
 */
export function createArticleSchema(
  headline: string,
  description: string,
  url: string,
  image: string,
  datePublished: string,
  dateModified: string,
  authorName: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * Creates Event structured data for webinars and educational events
 */
export function createEventSchema(
  name: string,
  description: string,
  startDate: string,
  endDate: string,
  url: string,
  location?: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    description,
    startDate,
    endDate,
    url,
    organizer: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    ...(location && {
      location: {
        '@type': 'Place',
        name: location,
      },
    }),
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
  };
}

/**
 * Creates Review structured data for testimonials and ratings
 */
export function createReviewSchema(
  itemReviewed: string,
  reviewRating: number,
  reviewBody: string,
  authorName: string,
  datePublished: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Product',
      name: itemReviewed,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewRating,
      bestRating: 5,
    },
    reviewBody,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    datePublished,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}

/**
 * Creates CollectionPage structured data for category pages
 */
export function createCollectionPageSchema(
  name: string,
  description: string,
  url: string,
  mainEntity: Array<{ name: string; url: string; description: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: mainEntity.length,
      itemListElement: mainEntity.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'WebPage',
          name: item.name,
          url: item.url,
          description: item.description,
        },
      })),
    },
  };
}

/**
 * Enhanced metadata creation with additional SEO features
 */
export function createEnhancedPageMetadata(
  title: string,
  description: string,
  path: string = '',
  keywords: string[] = [],
  imageUrl?: string,
  structuredData?: object[],
) {
  const baseMetadata = createPageMetadata(title, description, path, keywords, imageUrl);

  return {
    ...baseMetadata,
    other: {
      'article:author': 'K2AI Team',
      'article:publisher': 'https://www.facebook.com/k2aihub',
      'og:site_name': SITE_NAME,
      'og:locale': 'en_US',
      'twitter:site': '@k2aihub',
      'twitter:creator': '@k2aihub',
      ...(structuredData && {
        structuredData: JSON.stringify(structuredData),
      }),
    },
  };
}

/**
 * Creates comprehensive homepage structured data
 */
export function createHomepageStructuredData() {
  return [
    createOrganizationSchema(),
    createWebSiteSchema(),
    createFAQSchema(HOMEPAGE_FAQS),
    createWebApplicationSchema(SITE_NAME, SITE_DESCRIPTION, SITE_URL, 'EducationalApplication'),
  ];
}

/**
 * Creates product-specific structured data
 */
export function createProductStructuredData(productName: string) {
  const products = {
    'K2AI Education': {
      name: 'K2AI Education',
      description: 'Smart learning platform with 90+ modules covering AI, programming, STEM, and essential skills',
      url: 'https://edu.k2aihub.com',
      category: 'EducationalApplication',
    },
    'K2AI Creator Studio': {
      name: 'K2AI Creator Studio',
      description: 'AI-powered content repurposing tool for creators and marketers',
      url: 'https://creator.k2aihub.com',
      category: 'BusinessApplication',
    },
    'K2AI Finance': {
      name: 'K2AI Finance',
      description: 'AI-powered personal budget tracker with smart savings suggestions',
      url: 'https://finance.k2aihub.com',
      category: 'FinanceApplication',
    },
  };

  const product = products[productName as keyof typeof products];
  if (!product) return null;

  return createSoftwareApplicationSchema(product.name, product.description, product.url, product.category);
}

/**
 * Homepage FAQs
 */
export const HOMEPAGE_FAQS = [
  {
    question: 'What is K2AI Hub?',
    answer:
      'K2AI Hub is an advanced AI technology platform offering four main products: K2AI Education (smart learning platform with 90+ modules in AI, programming, STEM, and essential skills), K2AI Creator Studio (AI-powered content repurposing tool), K2AI Finance (AI-powered budget tracker), and Vietnam Geographical Map (interactive learning tool for Vietnamese geography and culture).',
  },
  {
    question: 'Is K2AI Education free?',
    answer:
      'Yes! K2AI Education is 100% free with over 90 learning modules, 500+ interactive lessons, and 1,500+ hours of quality educational content. You can learn programming (Python, JavaScript), AI applications, digital marketing, cybersecurity, biotechnology, STEM subjects, and essential soft skills without any cost.',
  },
  {
    question: 'What makes K2AI different from other learning platforms?',
    answer:
      'K2AI combines advanced AI technology with practical, real-world applications. Our platform offers interactive 3D games, hands-on projects, AI-powered personalized learning paths, and focuses on skills needed in 2025 and beyond. We emphasize practical knowledge over theory, with content designed for Vietnamese learners and global standards.',
  },
  {
    question: 'How does K2AI Creator Studio help content creators?',
    answer:
      'K2AI Creator Studio saves creators 10+ hours per week by automatically transforming YouTube videos into platform-specific content. Paste a YouTube link and get back Twitter threads, LinkedIn posts, video clips with subtitles, and newsletter summaries - all optimized by AI. Perfect for solopreneurs, marketers, and content creators who want to maximize their content reach.',
  },
  {
    question: 'What can I learn on the Vietnam Geographical Map?',
    answer:
      'The interactive Vietnam Geographical Map covers all 34 provinces and cities with detailed information about geography, culture, history, economy, famous landmarks, and local specialties. Perfect for students, travelers, and anyone wanting to explore Vietnam through an engaging, AI-enhanced experience.',
  },
  {
    question: 'How does K2AI Finance help with budget management?',
    answer:
      'K2AI Finance is an AI-powered personal budget tracker that helps you save 20% more every month. It provides smart expense tracking, subscription management, family budget sharing, spending pattern analysis, and personalized savings recommendations powered by advanced AI algorithms.',
  },
  {
    question: 'Can I use K2AI Finance with my family?',
    answer:
      'Yes! K2AI Finance supports family budget sharing and collaboration. You can create group budgets, track shared expenses, set family financial goals, and get AI insights on household spending patterns. Perfect for families wanting to manage finances together.',
  },
  {
    question: 'What programming languages can I learn on K2AI Education?',
    answer:
      'K2AI Education offers comprehensive programming courses in Python, JavaScript, Scratch (visual programming), Arduino (IoT), and more. Our curriculum includes AI programming, web development, game development, data science, and practical coding projects with real-world applications.',
  },
  {
    question: 'How does AI enhance the learning experience on K2AI?',
    answer:
      'AI enhances learning through personalized learning paths, intelligent recommendations, interactive assessments, automated feedback, and adaptive content delivery. Our AI analyzes your learning patterns to suggest the most effective study methods and content sequencing for your individual needs.',
  },
  {
    question: 'Is K2AI suitable for beginners?',
    answer:
      'Absolutely! K2AI is designed for all skill levels, from complete beginners to advanced learners. Our AI-powered system adapts to your current knowledge level, provides step-by-step guidance, and offers multiple learning paths. We start with fundamentals and gradually build up to advanced concepts.',
  },
];
