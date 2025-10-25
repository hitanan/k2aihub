import { MetadataRoute } from 'next';
import { regions } from '@/data/regions';
import { citiesData } from '@/data/cities';
import { City, Region } from '@/types';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://k2aihub.com';

export function generateSitemapEntries(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1.0, changeFrequency: 'daily' },
    { url: `${baseUrl}/city`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${baseUrl}/region`, priority: 0.8, changeFrequency: 'weekly' },
  ];

  const regionPages: MetadataRoute.Sitemap = regions.map((region: Region) => ({
    url: `${baseUrl}/region/${region.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const cityPages: MetadataRoute.Sitemap = citiesData.map((city: City) => ({
    url: `${baseUrl}/city/${city.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: ['ha-noi', 'ho-chi-minh', 'da-nang', 'hai-phong', 'can-tho', 'hue'].includes(city.slug) ? 0.9 : 0.8,
  }));

  return [...corePages, ...regionPages, ...cityPages];
}

// Utility to generate robots.txt rules with enhanced SEO directives
export function generateRobotsRules() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '*.json', '/map-test/', '/temp/', '/private/'],
        crawlDelay: 1, // Be nice to crawlers
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 0.5, // Google can crawl faster
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
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
      'Cập nhật mới nhất từ K2AI - 50+ module giáo dục toàn diện: Địa lý Việt Nam, AI, Digital Marketing, Financial Literacy, Green Technology, Game Development, AI Art, Cybersecurity, Biotechnology, AI & Machine Learning, Quantum Computing, Blockchain Technology, Climate Science, Data Science, Space Exploration, Programming & Robotics, STEM, Aerospace Engineering, Biomedical Engineering, Food Technology, Nanotechnology, Electric Vehicle Tech, Mental Health Tech, Digital Government, Environmental Data Science, Advanced AI, Content Creator, Vietnamese Culture, Cross-border E-commerce, và nhiều module chuyên sâu khác',
    link: baseUrl,
    language: 'vi-VN',
    managingEditor: 'k2aihub@gmail.com',
    webMaster: 'k2aihub@gmail.com',
    lastBuildDate: new Date().toUTCString(),
    generator: 'K2AiHub',
  };
}
