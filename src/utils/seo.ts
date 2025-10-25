/**
 * Enhanced SEO Utility Functions with Social Media Integration
 * Centralizes SEO-related functionality for consistency across the application
 */

import { City, TouristAttraction } from '@/types';
import { SocialSeoPresets } from './socialSeo';

const SITE_NAME = 'K2AiHub';
const SITE_TAGLINE = 'Advanced AI Technology Platform, Explore our AI products, from education to content creation';

/**
 * Extract YouTube video ID from various YouTube URL formats
 * @param url - YouTube URL in various formats
 * @returns YouTube video ID or null if not found
 */
function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/,
    /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

/**
 * Creates comprehensive VideoObject structured data for YouTube videos
 * @param title - Video title
 * @param description - Video description
 * @param videoUrl - YouTube video URL or ID
 * @returns VideoObject structured data
 */
function createVideoObjectData(title: string, description: string, videoUrl: string): Record<string, unknown> {
  const videoId = extractYouTubeId(videoUrl);
  if (!videoId) {
    return {
      '@type': 'VideoObject',
      name: title,
      description,
      url: videoUrl,
    };
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return {
    '@type': 'VideoObject',
    name: title,
    description,
    thumbnailUrl: [
      `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`,
    ],
    uploadDate: new Date().toISOString().split('T')[0] + 'T08:00:00+08:00', // Default to Vietnam timezone
    duration: 'PT10M', // Default duration, could be enhanced to get actual duration from API
    contentUrl: watchUrl,
    embedUrl: embedUrl,
    url: watchUrl,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: 'https://k2aihub.com',
    },
    inLanguage: 'vi-VN',
    regionsAllowed: ['VN', 'US', 'SG', 'MY', 'TH', 'PH', 'ID', 'KH', 'LA'],
    interactionStatistic: {
      '@type': 'InteractionCounter',
      interactionType: { '@type': 'WatchAction' },
      userInteractionCount: 0, // Default, could be enhanced with actual data
    },
  };
}

/**
 * Creates a properly formatted title with K2AiHub branding
 * @param title - The main title content
 * @param includeTagline - Whether to include the site tagline (default: false)
 * @returns Formatted title string
 */
export function createTitle(title: string, includeTagline: boolean = false): string {
  if (includeTagline) {
    return `${title} | ${SITE_TAGLINE} | ${SITE_NAME}`;
  }
  return `${title} | ${SITE_NAME}`;
}

/**
 * Creates a consistent description with K2AiHub branding
 * @param description - The main description content
 * @returns Formatted description string
 */
export function createDescription(description: string): string {
  if (description.includes(SITE_NAME)) {
    return description;
  }
  return `${description} - ${SITE_NAME}`;
}

/**
 * Common SEO keywords for the Vietnam geography education platform
 */
export const commonKeywords = [
  'Việt Nam',
  'địa lý',
  'tỉnh thành',
  'thành phố',
  'giáo dục',
  'bản đồ tương tác',
  'ai',
  'trí tuệ nhân tạo',
  'học tập',
  'K2AI',
];

/**
 * Creates keyword string from array
 * @param additionalKeywords - Additional keywords specific to the page
 * @returns Comma-separated keyword string
 */
export function createKeywords(additionalKeywords: string[] = []): string {
  return [...commonKeywords, ...additionalKeywords].join(', ');
}

/**
 * Enhanced OpenGraph configuration with social sharing
 */
export const defaultOpenGraph = {
  type: 'website' as const,
  siteName: SITE_NAME,
  locale: 'vi_VN',
};

/**
 * Creates comprehensive metadata with social sharing for modules
 */
export function createModuleMetadata(title: string, description: string, keywords: string[] = [], moduleSlug?: string) {
  const socialMeta = SocialSeoPresets.module(title, description, keywords);
  const canonicalUrl = moduleSlug ? `https://k2aihub.com/${moduleSlug}/` : `https://k2aihub.com/`;

  return {
    ...socialMeta,
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
 * Creates comprehensive metadata with social sharing for articles/blog posts
 */
export function createArticleMetadata(
  title: string,
  description: string,
  author: string,
  publishedTime: string,
  tags: string[] = [],
) {
  const socialMeta = SocialSeoPresets.article(title, description, author, publishedTime, tags);

  return {
    ...socialMeta,
    authors: [{ name: author }],
    alternates: {
      canonical: `https://k2aihub.com/blog/`,
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
 * Creates structured data for organization
 */
export function createOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    description: 'Học tập thông minh - Công nghệ AI dẫn lối về địa lý Việt Nam và hướng dẫn AI thực tế',
    url: 'https://k2aihub.com',
    logo: 'https://k2aihub.com/logo.png',
    sameAs: ['https://k2aihub.com'],
    areaServed: 'VN',
    inLanguage: 'vi',
  };
}

/**
 * Creates structured data for educational content
 */
export function createEducationalContentStructuredData(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: title,
    description: description,
    url: url,
    inLanguage: 'vi',
    educationalLevel: 'Beginner to Advanced',
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student',
    },
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}

/**
 * Creates structured data for a specific lesson (LearningResource)
 */
export function createLessonStructuredData(options: {
  title: string;
  description: string;
  url: string;
  duration?: string; // e.g., "90 phút"
  difficulty?: string; // e.g., "Cơ bản"
  videoUrl?: string | null;
  moduleTitle?: string;
}): Record<string, unknown> {
  const { title, description, url, duration, difficulty, videoUrl, moduleTitle } = options;
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: title,
    description,
    url,
    inLanguage: 'vi',
    educationalLevel: difficulty || 'Mixed',
    isPartOf: moduleTitle
      ? {
          '@type': 'EducationalOccupationalProgram',
          name: moduleTitle,
        }
      : undefined,
  };

  if (duration) {
    // Best-effort convert minutes to ISO 8601 duration when the string contains a number
    const minutesMatch = duration.match(/(\d+)/);
    if (minutesMatch) {
      const minutes = parseInt(minutesMatch[1], 10);
      if (!Number.isNaN(minutes) && minutes > 0) {
        (data as Record<string, unknown>)['timeRequired'] = `PT${minutes}M`;
      }
    }
  }

  if (videoUrl) {
    const videoData = createVideoObjectData(title, description, videoUrl);
    (data as Record<string, unknown>)['video'] = videoData;
  }

  return data;
}

/**
 * Creates generic FAQPage structured data from Q&A array
 */
export function createFAQStructuredDataFromQA(
  faqs: Array<{ question: string; answer: string }>,
  url?: string,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
    ...(url ? { url } : {}),
  };
}

/**
 * Creates structured data for FAQ sections
 */
export function createFAQStructuredData(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Dân số của ${city.name} là bao nhiêu?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Dân số của ${city.name} là ${city.population} người, xếp hạng trong top các tỉnh thành Việt Nam.`,
        },
      },
      {
        '@type': 'Question',
        name: `Diện tích của ${city.name} là bao nhiêu?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Diện tích của ${city.name} là ${city.area}, thuộc vùng ${city.region}.`,
        },
      },
      {
        '@type': 'Question',
        name: `${city.name} có những địa điểm du lịch nào nổi tiếng?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            city.touristAttractions && city.touristAttractions.length > 0
              ? `${city.name} có các địa điểm du lịch nổi tiếng như: ${city.touristAttractions
                  .slice(0, 3)
                  .map((a: TouristAttraction) => a.name)
                  .join(', ')}.`
              : `${city.name} có nhiều danh lam thắng cảnh đẹp và các di tích lịch sử văn hóa quan trọng.`,
        },
      },
    ],
  };
}

/**
 * Creates breadcrumb structured data
 */
export function createBreadcrumbStructuredData(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://k2aihub.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Địa lý Việt Nam',
        item: 'https://k2aihub.com/#geography',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.region,
        item: `https://k2aihub.com/#${city.region.toLowerCase().replace(/\s+/g, '-')}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: city.name,
        item: `https://k2aihub.com/city/${city.slug}`,
      },
    ],
  };
}

/**
 * Creates place structured data with enhanced geographic information
 */
export function createPlaceStructuredData(city: City) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: city.name,
    description: city.description,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.coordinates.y,
      longitude: city.coordinates.x,
    },
    containedInPlace: {
      '@type': 'Country',
      name: 'Việt Nam',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Dân số',
        value: city.population,
      },
      {
        '@type': 'PropertyValue',
        name: 'Diện tích',
        value: city.area,
      },
      {
        '@type': 'PropertyValue',
        name: 'Vùng miền',
        value: city.region,
      },
      {
        '@type': 'PropertyValue',
        name: 'Mã tỉnh',
        value: city.code,
      },
    ],
    touristAttraction:
      city.touristAttractions?.map((attraction: TouristAttraction) => ({
        '@type': 'TouristAttraction',
        name: attraction.name,
        description: attraction.description,
        image: attraction.imageUrl,
        containedInPlace: {
          '@type': 'Place',
          name: city.name,
        },
      })) || [],
  };
}

export { SITE_NAME, SITE_TAGLINE };
