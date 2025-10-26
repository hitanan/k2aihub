import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://k2aihub.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/learning/', // Redirect page - don't index
          '/games/', // Redirect page - don't index
          '/blog/', // Redirect page - don't index
          '/ai/', // Redirect page - don't index
          '/feedback/', // Redirect page - don't index
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/learning/', '/games/', '/blog/', '/ai/', '/feedback/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
