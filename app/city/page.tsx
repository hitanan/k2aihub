import type { Metadata } from 'next';
import { createModuleMetadata } from '@/utils/seo';
import CityPageClient from './CityPageClient';
import StructuredData from '@/src/components/StructuredData';
import { citiesData } from '@/data/cities';
import { City } from '@/src/types';

export const metadata: Metadata = createModuleMetadata(
  '34 Tỉnh Thành Việt Nam - Khám phá Địa lý với Bản đồ Tương tác',
  'Khám phá 34 tỉnh thành Việt Nam qua bản đồ tương tác thông minh. Tìm hiểu địa lý, văn hóa, lịch sử các vùng miền với công nghệ AI.',
  [
    '34 tỉnh thành việt nam',
    'bản đồ việt nam',
    'địa lý việt nam',
    'tỉnh thành việt nam',
    'bản đồ tương tác',
    'địa lý tương tác',
    'học địa lý',
    'K2AI',
    'giáo dục địa lý',
  ],
  'city',
);

export default function CityPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '34 Tỉnh Thành Việt Nam - Khám phá Địa lý với Bản đồ Tương tác',
    description:
      'Khám phá 34 tỉnh thành Việt Nam qua bản đồ tương tác thông minh. Tìm hiểu địa lý, văn hóa, lịch sử các vùng miền với công nghệ AI.',
    url: 'https://k2aihub.com/city',
    inLanguage: 'vi-VN',
    publisher: {
      '@type': 'Organization',
      name: 'K2AiHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://k2aihub.com/logo.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: citiesData.map((city: City, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'City',
          name: city.name,
          url: `https://k2aihub.com/city/${city.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <CityPageClient />
    </>
  );
}
