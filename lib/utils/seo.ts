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
  'K2AI Hub - Advanced AI Technology Platform offering smart education, content creation tools, and interactive learning. Explore AI-powered solutions including K2AI Education (90+ learning modules), K2AI Creator Studio (content repurposing), and interactive Vietnam geographical map.';

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
 * Homepage FAQs
 */
export const HOMEPAGE_FAQS = [
  {
    question: 'What is K2AI Hub?',
    answer:
      'K2AI Hub is an advanced AI technology platform offering three main products: K2AI Education (smart learning platform with 90+ modules in AI, programming, STEM, and essential skills), K2AI Creator Studio (AI-powered content repurposing tool), and Vietnam Geographical Map (interactive learning tool for Vietnamese geography and culture).',
  },
  {
    question: 'Is K2AI Education free?',
    answer:
      'Yes! K2AI Education is 100% free with over 90 learning modules, 500+ interactive lessons, and 1,500+ hours of quality educational content. You can learn programming (Python, JavaScript), AI applications, digital marketing, cybersecurity, biotechnology, STEM subjects, and essential soft skills without any cost.',
  },
  {
    question: 'What makes K2AI different from other learning platforms?',
    answer:
      "K2AI combines advanced AI technology with practical, real-world applications. Our platform offers interactive 3D games, hands-on projects, AI-powered personalized learning paths, and focuses on skills needed in 2025 and beyond. We emphasize practical knowledge over theory, with content designed for Vietnamese learners and global standards.",
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
];
