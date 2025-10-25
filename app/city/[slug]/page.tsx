import { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import CityPage from '@/src/components/city/CityPage';
import LoadingSpinner from '@/src/components/LoadingSpinner';
import { City } from '@/src/types';
import { findCityBySlug } from '@/utils/slug';
import {
  createTitle,
  createDescription,
  createKeywords,
  createEducationalContentStructuredData,
  createFAQStructuredData,
  createBreadcrumbStructuredData,
  createPlaceStructuredData,
} from '@/utils/seo';
import { SocialSeoPresets } from '@/utils/socialSeo';
import citiesData from '@/data/cities';

interface CityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    // Pre-generate all city pages at build time for better performance
    return citiesData.map((city: City) => ({
      slug: city.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Force static generation for all paths
export const dynamic = 'force-static';
export const revalidate = false; // Never revalidate since city data is static

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const city = findCityBySlug(citiesData, slug);

    if (!city) {
      return {
        title: createTitle('Không Tìm Thấy Thành Phố - Địa Lý Việt Nam'),
        description: createDescription('Không thể tìm thấy thành phố được yêu cầu'),
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    // Create comprehensive keywords with city-specific terms
    const cityKeywords = [
      city.name,
      ...city.oldNames,
      city.region,
      'du lịch',
      'văn hóa',
      'kinh tế',
      'dân số',
      'diện tích',
      'hành chính',
    ];

    // Add tourist attraction keywords if they exist
    if (city.touristAttractions && city.touristAttractions.length > 0) {
      cityKeywords.push(...city.touristAttractions.map((attraction: any) => attraction.name), 'điểm du lịch', 'danh thắng');
    }

    // Enhanced description with key statistics and tourist attractions
    let enhancedDescription = `${city.description} Diện tích: ${city.area}, Dân số: ${city.population}.`;

    if (city.touristAttractions && city.touristAttractions.length > 0) {
      const attractionNames = city.touristAttractions
        .slice(0, 3)
        .map((a: any) => a.name)
        .join(', ');
      enhancedDescription += ` Khám phá các điểm du lịch nổi tiếng: ${attractionNames}.`;
    }

    enhancedDescription += ` Tìm hiểu lịch sử, văn hóa và kinh tế của ${city.name}`;

    const socialMeta = SocialSeoPresets.city(
      `${city.name} - ${city.region} | Địa Lý Việt Nam`,
      enhancedDescription,
      cityKeywords,
    );

    return {
      title: createTitle(`${city.name} - ${city.region} | Địa Lý Việt Nam`),
      description: enhancedDescription,
      keywords: createKeywords(cityKeywords),
      openGraph: socialMeta.openGraph,
      twitter: socialMeta.twitter,
      alternates: {
        canonical: `/city/${city.slug}`,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Địa Lý Việt Nam',
      description: 'Tìm hiểu về 34 đơn vị hành chính cấp tỉnh của Việt Nam.',
    };
  }
}

export default async function Page({ params }: CityPageProps) {
  try {
    const { slug } = await params;
    const city = findCityBySlug(citiesData, slug);

    if (!city) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
          <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Không Tìm Thấy Thành Phố</h1>
            <p className="text-gray-600 mb-4">Không thể tìm thấy thành phố với mã &quot;{slug}&quot;.</p>
            <Link
              href="/city"
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Quay Về Bản Đồ
            </Link>
          </div>
        </div>
      );
    }

    const enhancedDescription = `${city.description} Diện tích: ${city.area}, Dân số: ${city.population}.`;
    const educationalData = createEducationalContentStructuredData(
      `${city.name} - ${city.region}`,
      enhancedDescription,
      `https://k2aihub.com/city/${city.slug}`,
    );
    const faqData = createFAQStructuredData(city);
    const breadcrumbData = createBreadcrumbStructuredData(city);
    const placeData = createPlaceStructuredData(city);
    const structuredData = [educationalData, faqData, breadcrumbData, placeData].filter(Boolean);

    return (
      <Suspense fallback={<LoadingSpinner message={`Đang tải thông tin ${city.name}...`} />}>
        <CityPage city={city} allCities={citiesData} structuredData={structuredData} />
      </Suspense>
    );
  } catch (error) {
    console.error('Error rendering city page:', error);
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
        <div className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Lỗi Tải Thành Phố</h1>
          <p className="text-gray-600 mb-4">Có lỗi xảy ra khi tải trang thành phố.</p>
          <Link
            href="/city"
            className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Quay Về Bản Đồ
          </Link>
        </div>
      </div>
    );
  }
}
