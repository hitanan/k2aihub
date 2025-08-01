import { MetadataRoute } from 'next';
import citiesData from '@/data/cities';
import { arduinoLessons } from '@/data/arduino';
import { roboticsLessons } from '@/data/robotics';
import { scratchLessons } from '@/data/scratch';
import { stemLessons } from '@/data/stem';
import { digitalMarketingLessons } from '@/data/digital-marketing';
import { greenTechLessons } from '@/data/green-technology';
import { financialLiteracyLessons } from '@/data/financial-literacy';
import { gameDevLessons } from '@/data/game-development';
import { aiArtLessons } from '@/data/ai-art-creative-tech';
import { cyberSecurityLessons } from '@/data/cybersecurity';
import { biotechnologyLessons } from '@/data/biotechnology';

// Utility to automatically generate sitemap entries for all pages
const baseUrl = 'https://k2aihub.com';
export function generateSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Core application pages
  const corePages = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'monthly' as const },
    {
      url: `${baseUrl}/city`,
      priority: 0.9,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/region`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    { url: `${baseUrl}/ai`, priority: 0.8, changeFrequency: 'weekly' as const },
    {
      url: `${baseUrl}/python`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/arduino`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/robotics`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/scratch`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/stem`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    // New Learning Modules
    {
      url: `${baseUrl}/digital-marketing`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/green-technology`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/learning/financial-literacy`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/learning/game-development`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/learning/ai-art-creative-tech`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/learning/cybersecurity`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/learning/biotechnology`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/education`,
      priority: 0.8,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/education/arduino`,
      priority: 0.7,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/education/scratch`,
      priority: 0.7,
      changeFrequency: 'weekly' as const
    },
    {
      url: `${baseUrl}/feedback`,
      priority: 0.5,
      changeFrequency: 'monthly' as const
    }
  ];

  // AI module pages
  const aiCategories = [
    'office-work',
    'creative-design',
    'education-learning',
    'business-marketing',
    'daily-life',
    'programming-dev',
    'ai-apps'
  ];

  const aiPages = aiCategories.map((category) => ({
    url: `${baseUrl}/ai/${category}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  // Python lesson pages - sử dụng lesson IDs thực tế từ data file
  const pythonLessonIds = [
    'python-introduction',
    'variables-data-types',
    'control-structures',
    'functions',
    'lists-tuples',
    'dictionaries',
    'file-handling',
    'oop-basics'
  ];

  const pythonPages = pythonLessonIds.map((lessonId) => ({
    url: `${baseUrl}/python/${lessonId}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // Arduino lesson pages - include all lessons from data and additional manual pages
  const additionalArduinoPages = [
    'arduino-basics' // Manually added page
  ];

  const arduinoPages = [
    ...arduinoLessons.map((lesson) => ({
      url: `${baseUrl}/arduino/${lesson.id}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    })),
    ...additionalArduinoPages.map((pageId) => ({
      url: `${baseUrl}/arduino/${pageId}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }))
  ];

  // Robotics lesson pages
  const roboticsPages = roboticsLessons.map((lesson) => ({
    url: `${baseUrl}/robotics/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // Scratch lesson pages
  const scratchPages = scratchLessons.map((lesson) => ({
    url: `${baseUrl}/scratch/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // STEM lesson pages
  const stemPages = stemLessons.map((lesson) => ({
    url: `${baseUrl}/stem/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // Digital Marketing lesson pages
  const digitalMarketingPages = digitalMarketingLessons.map((lesson) => ({
    url: `${baseUrl}/digital-marketing/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // Green Technology lesson pages
  const greenTechPages = greenTechLessons.map((lesson) => ({
    url: `${baseUrl}/green-technology/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // Financial Literacy lesson pages
  const finLitPages = financialLiteracyLessons.map((lesson) => ({
    url: `${baseUrl}/learning/financial-literacy/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // Game Development lesson pages
  const gameDevPages = gameDevLessons.map((lesson) => ({
    url: `${baseUrl}/learning/game-development/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // AI Art lesson pages
  const aiArtPages = aiArtLessons.map((lesson) => ({
    url: `${baseUrl}/learning/ai-art-creative-tech/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // Cybersecurity lesson pages
  const cyberSecurityPages = cyberSecurityLessons.map((lesson) => ({
    url: `${baseUrl}/learning/cybersecurity/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // Biotechnology lesson pages
  const biotechnologyPages = biotechnologyLessons.map((lesson) => ({
    url: `${baseUrl}/learning/biotechnology/${lesson.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // Region pages
  const regionSlugs = [
    'bac-bo',
    'tay-bac',
    'dong-bac',
    'dong-bang-bac-bo',
    'bac-trung-bo',
    'nam-trung-bo',
    'tay-nguyen',
    'dong-nam-bo',
    'dong-bang-song-cuu-long'
  ];

  const regionPages = regionSlugs.map((slug) => ({
    url: `${baseUrl}/region/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  // City pages - automatically generated from cities data with enhanced SEO
  const regularCityPages = citiesData
    .filter(
      (city) =>
        ![
          'ha-noi',
          'ho-chi-minh',
          'da-nang',
          'hai-phong',
          'can-tho',
          'hue'
        ].includes(city.slug)
    )
    .map((city) => ({
      url: `${baseUrl}/city/${city.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7
    }));

  // Add specific high-value city pages with higher priority
  const majorCityPages = citiesData
    .filter((city) =>
      [
        'ha-noi',
        'ho-chi-minh',
        'da-nang',
        'hai-phong',
        'can-tho',
        'hue'
      ].includes(city.slug)
    )
    .map((city) => ({
      url: `${baseUrl}/city/${city.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.9 // Higher priority for major cities
    }));

  // Combine all pages with proper prioritization
  const allPages = [
    ...corePages.map((page) => ({ ...page, lastModified })),
    ...aiPages,
    ...pythonPages,
    ...arduinoPages,
    ...roboticsPages,
    ...scratchPages,
    ...stemPages,
    ...digitalMarketingPages,
    ...greenTechPages,
    ...finLitPages,
    ...gameDevPages,
    ...aiArtPages,
    ...cyberSecurityPages,
    ...biotechnologyPages,
    ...regionPages,
    ...majorCityPages, // High priority cities first
    ...regularCityPages // Regular cities
  ];

  return allPages;
}

// Utility to generate robots.txt rules with enhanced SEO directives
export function generateRobotsRules() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '*.json',
          '/map-test/',
          '/temp/',
          '/private/'
        ],
        crawlDelay: 1 // Be nice to crawlers
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 0.5 // Google can crawl faster
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 1
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}

// Enhanced function to validate and optimize sitemap entries
export function validateSitemapEntry(url: string): boolean {
  try {
    new URL(url);
    return !url.includes('localhost') && !url.includes('127.0.0.1');
  } catch {
    return false;
  }
}

// Function to generate RSS feed metadata (for future implementation)
export function generateRSSMetadata() {
  return {
    title: 'K2AI - Nền tảng học tập thông minh',
    description:
      'Cập nhật mới nhất từ K2AI - 14 module giáo dục: Địa lý Việt Nam, AI, Digital Marketing, Financial Literacy, Green Technology, Game Development, AI Art, Cybersecurity, Biotechnology, STEM, Programming và nhiều hơn nữa',
    link: baseUrl,
    language: 'vi-VN',
    managingEditor: 'info@k2aihub.com',
    webMaster: 'admin@k2aihub.com',
    lastBuildDate: new Date().toUTCString(),
    generator: 'K2AiHub Next.js'
  };
}
