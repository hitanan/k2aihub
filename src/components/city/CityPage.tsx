'use client';

import React, { memo, useMemo, lazy, Suspense, useEffect } from 'react';
import Link from 'next/link';
import { City } from '@/src/types';
import { createSlug, createRegionSlug } from '@/utils/slug';
import { useRouter } from 'next/navigation';
import {  optimizeImageLoading } from '@/utils/performance';
import StructuredData from '@/src/components/StructuredData';
import TouristAttractionsSlider from '@/src/components/city/TouristAttractionsSlider';
import ShareButton from '@/src/components/ShareButton';

// Lazy load the VietnamMap component for better performance
const VietnamMap = lazy(() => import('@/src/components/city/VietnamMap'));

interface CityPageProps {
  city: City;
  allCities: City[];
  structuredData: object[];
}

const CityPage: React.FC<CityPageProps> = memo(({ city, allCities, structuredData }) => {
  const [selectedCity, setSelectedCity] = React.useState<City>(city);
  const router = useRouter();

  // Performance optimizations on component mount
  useEffect(() => {
    optimizeImageLoading();
  }, []);

  // Memoize related cities calculation for performance
  const relatedCities = useMemo(() => {
    return allCities.filter((c) => c.region === city.region && c.id !== city.id).slice(0, 6);
  }, [allCities, city.region, city.id]);
  const handleCityClick = (newCity: City) => {
    setSelectedCity(newCity);
    // Navigate to the new city page using slug
    router.push(`/city/${createSlug(newCity.name)}`);
  };

  const handleCityHover = (newCity: City | null) => {
    // Handle hover for visual feedback
    console.log('Hovering over:', newCity?.name || 'none');
  };

  const handleBackToMap = () => {
    // Save the current city to localStorage before navigating back
    localStorage.setItem('selectedCityId', city.id.toString());
    // Navigate back to the map view
    router.push('/city');
  };

  const paragraphs = city.description.split('. ');
  const para1 = paragraphs.slice(0, Math.ceil(paragraphs.length / 3)).join('. ');
  const para2 = paragraphs.slice(Math.ceil(paragraphs.length / 3), Math.ceil((2 * paragraphs.length) / 3)).join('. ');
  const para3 = paragraphs.slice(Math.ceil((2 * paragraphs.length) / 3)).join('. ');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data for SEO */}
      {structuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li>
              <button onClick={handleBackToMap} className="hover:text-gray-700">
                Địa Lý Việt Nam
              </button>
            </li>
            <li>/</li>
            <li>
              <Link href={`/city/region/${createRegionSlug(city.region)}`} className="hover:text-gray-700">
                {city.region}
              </Link>
            </li>
            <li>/</li>
            <li>
              <span className="text-gray-900 font-medium">{city.name}</span>
            </li>
          </ol>
        </nav>

        {/* City Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: city.color }} />
                <span className="text-sm text-gray-500">Mã đơn vị hành chính: {city.code}</span>
                <span className="text-sm text-gray-500">•</span>
                <Link
                  href={`/city/region/${createRegionSlug(city.region)}`}
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {city.region}
                </Link>
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{city.name}</h1>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-blue-800">Dân số</span>
                  </div>
                  <p className="text-lg font-bold text-blue-900">{city.population}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    <span className="text-sm font-medium text-green-800">Diện tích</span>
                  </div>
                  <p className="text-lg font-bold text-green-900">{city.area}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Former names */}
          {city.oldNames.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Bao gồm các tỉnh / thành phố cũ:</h3>
              <div className="flex flex-wrap gap-2">
                {city.oldNames.map((name, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Vị trí trên Bản đồ</h2>
            <div className="aspect-[3/4] w-full">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                      <p className="text-sm text-gray-600">Đang tải bản đồ...</p>
                    </div>
                  </div>
                }
              >
                <VietnamMap
                  cities={allCities}
                  selectedCity={selectedCity}
                  onCityClick={handleCityClick}
                  onCityHover={handleCityHover}
                  filteredCities={[city]}
                />
              </Suspense>
            </div>
            <p className="text-sm text-gray-600 mt-4">Nhấp vào các thành phố khác để khám phá chúng</p>
          </div>

          {/* Information Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Về {city.name}</h2>

            {city.fullPageContent ? (
              <div
                className="text-gray-700 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: city.fullPageContent }}
                style={{
                  lineHeight: '1.6',
                }}
              />
            ) : (
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  {para1}
                  {para1.endsWith('.') ? '' : '.'}
                </p>
                {para2 && (
                  <p>
                    {para2}
                    {para2.endsWith('.') ? '' : '.'}
                  </p>
                )}
                {para3 && (
                  <p>
                    {para3}
                    {para3.endsWith('.') ? '' : '.'}
                  </p>
                )}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex gap-3">
                <div className="flex-1">
                  <ShareButton
                    title={`${city.name} - Địa Lý Việt Nam | K2AiHub`}
                    description={`Tìm hiểu về ${city.name} - ${city.description.substring(0, 100)}...`}
                    url={typeof window !== 'undefined' ? window.location.href : ''}
                  />
                </div>
                <button
                  onClick={handleBackToMap}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-center"
                >
                  Khám Phá Thêm
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tourist Attractions */}
        {city.touristAttractions && city.touristAttractions.length > 0 && (
          <div className="mt-8">
            <TouristAttractionsSlider attractions={city.touristAttractions} />
          </div>
        )}

        {/* Related Cities */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Các Thành Phố Khác trong{' '}
            <Link
              href={`/city/region/${createRegionSlug(city.region)}`}
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              {city.region}
            </Link>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedCities.map((relatedCity) => (
              <Link
                key={relatedCity.id}
                href={`/city/${createSlug(relatedCity.name)}`}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ backgroundColor: relatedCity.color }} />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{relatedCity.name}</h3>
                    <p className="text-sm text-gray-600">Mã đơn vị hành chính: {relatedCity.code}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
});

CityPage.displayName = 'CityPage';

export default CityPage;
