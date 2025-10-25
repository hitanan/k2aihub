/**
 * Related Cities Component for internal linking and better SEO
 */

import Link from 'next/link';
import { City } from '@/src/types';
import { createRegionSlug } from '@/utils/slug';

interface RelatedCitiesProps {
  currentCity: City;
  allCities: City[];
  className?: string;
}

export default function RelatedCities({ currentCity, allCities, className = '' }: RelatedCitiesProps) {
  // Find related cities in the same region
  const sameRegionCities = allCities
    .filter(city => 
      city.region === currentCity.region && 
      city.id !== currentCity.id
    )
    .slice(0, 3);

  // If not enough same-region cities, add nearby cities by coordinates
  const nearbyCities = allCities
    .filter(city => city.id !== currentCity.id)
    .map(city => ({
      ...city,
      distance: Math.sqrt(
        Math.pow(city.coordinates.x - currentCity.coordinates.x, 2) +
        Math.pow(city.coordinates.y - currentCity.coordinates.y, 2)
      )
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 6);

  // Combine and ensure we have up to 6 unique related cities
  const relatedCitiesSet = new Set<number>();
  const relatedCities: City[] = [];

  // Add same region cities first
  sameRegionCities.forEach(city => {
    if (!relatedCitiesSet.has(city.id) && relatedCities.length < 6) {
      relatedCitiesSet.add(city.id);
      relatedCities.push(city);
    }
  });

  // Fill with nearby cities
  nearbyCities.forEach(city => {
    if (!relatedCitiesSet.has(city.id) && relatedCities.length < 6) {
      relatedCitiesSet.add(city.id);
      relatedCities.push(city);
    }
  });

  if (relatedCities.length === 0) {
    return null;
  }

  return (
    <section className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Các tỉnh thành liên quan
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedCities.map((city) => (
          <Link
            key={city.id}
            href={`/city/${city.slug}`}
            className="block bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200 group"
          >
            <div className="flex items-start gap-3">
              <div 
                className="w-4 h-4 rounded-full flex-shrink-0 mt-1" 
                style={{ backgroundColor: city.color }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <Link 
                    href={`/region/${createRegionSlug(city.region)}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {city.region}
                  </Link>
                </p>
                <div className="text-xs text-gray-500">
                  <div>Dân số: {city.population}</div>
                  <div>Diện tích: {city.area}</div>
                </div>
                
                {/* Show tourist attractions if available */}
                {city.touristAttractions && city.touristAttractions.length > 0 && (
                  <div className="mt-2">
                    <div className="text-xs text-blue-600 font-medium">
                      🏛️ Điểm nổi tiếng:
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      {city.touristAttractions.slice(0, 2).map(attraction => attraction.name).join(', ')}
                      {city.touristAttractions.length > 2 && ` +${city.touristAttractions.length - 2} khác`}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Regional exploration */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Khám phá thêm vùng {currentCity.region}
        </h3>
        <p className="text-sm text-gray-600">
          {currentCity.region} có {allCities.filter(c => c.region === currentCity.region).length} tỉnh thành 
          với nhiều danh lam thắng cảnh và nét văn hóa đặc sắc.
        </p>
        <Link
          href={`/region/${createRegionSlug(currentCity.region)}`}
          className="inline-block mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Xem tất cả tỉnh thành {currentCity.region} →
        </Link>
      </div>
    </section>
  );
}
