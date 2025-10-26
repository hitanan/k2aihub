import { MetadataRoute } from 'next';
import { citiesData, regionsData } from '@/src/data/cities';
import { City } from '@/src/types';
import type { Region } from '@/src/data/cities';

export const dynamic = 'force-static';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://k2aihub.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // ============================================
  // CORE PAGES - K2AIHub Landing
  // ============================================
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // ============================================
  // APP: Vietnamese Geographical Map
  // ============================================

  // Main app pages
  const vietnameseMapPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/city`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/city/region`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // City pages (34 provinces/cities of Vietnam)
  const cityPages: MetadataRoute.Sitemap = citiesData.map((city: City) => ({
    url: `${baseUrl}/city/${city.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    // Higher priority for major cities
    priority: ['ha-noi', 'ho-chi-minh', 'da-nang', 'hai-phong', 'can-tho', 'hue'].includes(city.slug) ? 0.9 : 0.8,
  }));

  // Region pages (9 regions of Vietnam) - nested under /city/region
  const regionPages: MetadataRoute.Sitemap = regionsData.map((region: Region) => ({
    url: `${baseUrl}/city/region/${region.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Combine all Vietnamese Map related pages
  const vietnameseMapApp = [...vietnameseMapPages, ...cityPages, ...regionPages];

  // ============================================
  // FUTURE APPS
  // ============================================
  // Add new apps here following the same pattern
  // Example:
  // const newAppPages: MetadataRoute.Sitemap = [...]

  return [
    ...corePages,
    ...vietnameseMapApp,
    // ...newAppPages, (add future apps here)
  ];
}
