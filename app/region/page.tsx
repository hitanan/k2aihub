import type { Metadata } from "next";
import Link from 'next/link';
import { citiesData } from "@/data/cities";
import { createTitle, createDescription, createKeywords } from '@/utils/seo';

export const metadata: Metadata = {
  title: createTitle("Khám Phá Các Vùng Miền Việt Nam - 9 Vùng Địa Lý"),
  description: createDescription("Tìm hiểu về 9 vùng địa lý của Việt Nam: Bắc Bộ, Tây Bắc, Đông Bắc, Đồng bằng Bắc Bộ, Bắc Trung Bộ, Nam Trung Bộ, Tây Nguyên, Đông Nam Bộ và Đồng bằng sông Cửu Long"),
  keywords: createKeywords([
    "vùng miền Việt Nam",
    "địa lý Việt Nam", 
    "Bắc Bộ",
    "Trung Bộ", 
    "Nam Bộ",
    "Tây Nguyên",
    "Đồng bằng",
    "34 tỉnh thành"
  ]),
  authors: [{ name: "K2AiHub Team" }],
  openGraph: {    locale: 'vi_VN',
    siteName: 'K2AiHub - Nền tảng học tập thông minh',

    title: createTitle("Khám Phá 9 Vùng Miền Việt Nam"),
    description: createDescription("Cùng tìm hiểu về đặc điểm địa lý, văn hóa và kinh tế của 9 vùng miền Việt Nam"),
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: createTitle('K2AiHub Educational Content'),
    description: createDescription('Nền tảng học tập thông minh với công nghệ AI dẫn lối'),
    images: ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop'],
  },
};

// Get unique regions and their statistics
interface RegionStats {
  name: string;
  count: number;
  totalPopulation: number;
  totalArea: number;
  cities: string[];
}

const regionStats = citiesData.reduce((acc, city) => {
  if (!acc[city.region]) {
    acc[city.region] = {
      name: city.region,
      count: 0,
      totalPopulation: 0,
      totalArea: 0,
      cities: []
    };
  }
  acc[city.region].count += 1;
  acc[city.region].totalPopulation += parseInt(city.population.replace(/[^0-9]/g, ''));
  acc[city.region].totalArea += parseFloat(city.area.replace(/[^0-9.]/g, ''));
  acc[city.region].cities.push(city.name);
  return acc;
}, {} as Record<string, RegionStats>);

const regions = Object.values(regionStats);

// Regional mapping for better SEO URLs
const regionSlugs = {
  'Bắc Bộ': 'bac-bo',
  'Tây Bắc': 'tay-bac', 
  'Đông Bắc': 'dong-bac',
  'Đồng bằng Bắc Bộ': 'dong-bang-bac-bo',
  'Bắc Trung Bộ': 'bac-trung-bo',
  'Nam Trung Bộ': 'nam-trung-bo',
  'Tây Nguyên': 'tay-nguyen',
  'Đông Nam Bộ': 'dong-nam-bo',
  'Đồng bằng sông Cửu Long': 'dong-bang-song-cuu-long'
};

export default function RegionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              9 Vùng Miền Việt Nam
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Khám phá đặc điểm địa lý, văn hóa và kinh tế độc đáo của từng vùng miền. 
              Từ cao nguyên Tây Bắc hùng vĩ đến đồng bằng sông Cửu Long màu mỡ.
            </p>
            <div className="flex justify-center space-x-8 text-blue-100">
              <div className="text-center">
                <div className="text-3xl font-bold">9</div>
                <div className="text-sm">Vùng miền</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">34</div>
                <div className="text-sm">Tỉnh thành</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">102 Triệu+</div>
                <div className="text-sm">Dân số</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regions Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region) => (
            <Link
              key={region.name}
              href={`/region/${regionSlugs[region.name as keyof typeof regionSlugs]}`}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {region.name}
                </h2>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  {region.count}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tỉnh thành:</span>
                  <span className="font-semibold text-blue-600">{region.count}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Dân số:</span>
                  <span className="font-semibold">{region.totalPopulation.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Diện tích:</span>
                  <span className="font-semibold">{region.totalArea.toLocaleString()} km²</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Tỉnh thành tiêu biểu:</h3>
                <div className="flex flex-wrap gap-2">
                  {region.cities.slice(0, 3).map((city: string, cityIndex: number) => (
                    <span key={cityIndex} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                      {city}
                    </span>
                  ))}
                  {region.cities.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      +{region.cities.length - 3} khác
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  Khám phá vùng {region.name} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bắt Đầu Hành Trình Khám Phá
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tìm hiểu chi tiết về từng tỉnh thành hoặc khám phá toàn bộ bản đồ Việt Nam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/city"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              🗺️ Xem Bản Đồ Tương Tác
            </Link>
            <Link
              href="/city"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              📍 Danh Sách Tỉnh Thành
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const dynamic = 'force-static';
