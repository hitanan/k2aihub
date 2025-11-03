import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'K2AI Hub - Advanced AI Technology Platform',
    short_name: 'K2AI Hub',
    description:
      'Explore AI-powered solutions: K2AI Education (90+ free learning modules), K2AI Creator Studio (10x faster content creation), K2AI Finance (smart budget tracking), and interactive Vietnam Map.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['education', 'productivity', 'finance', 'technology'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait-primary',
    scope: '/',
    prefer_related_applications: false,
  };
}
