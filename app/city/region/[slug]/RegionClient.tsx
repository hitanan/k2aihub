'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { City } from '@/types';
import ShareButton from '@/src/components/ShareButton';

interface Region {
  slug: string;
  name: string;
  description: string;
  overview: string;
}

interface RegionClientProps {
  region: Region;
  cities: City[];
}

export default function RegionClient({ region, cities }: RegionClientProps) {
  const [sortBy, setSortBy] = useState<'name' | 'population' | 'area'>('name');
  
  const sortedCities = [...cities].sort((a, b) => {
    switch (sortBy) {
      case 'population':
        return parseInt(b.population.replace(/[^0-9]/g, '')) - parseInt(a.population.replace(/[^0-9]/g, ''));
      case 'area':
        return parseFloat(b.area.replace(/[^0-9.]/g, '')) - parseFloat(a.area.replace(/[^0-9.]/g, ''));
      default:
        return a.name.localeCompare(b.name, 'vi');
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <nav className="text-sm text-gray-500 mb-2">
                <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
                <span className="mx-2">›</span>
                <Link href="/city" className="hover:text-blue-600">Bản đồ Việt Nam</Link>
                <span className="mx-2">›</span>
                <Link href="/city/region" className="hover:text-blue-600">Các vùng miền</Link>
                <span className="mx-2">›</span>
                <span>Vùng {region.name}</span>
              </nav>
              <h1 className="text-3xl font-bold text-gray-900">
                Vùng {region.name}
              </h1>
              <p className="text-gray-600 mt-2">{cities.length} tỉnh thành</p>
            </div>
            <ShareButton />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Region Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Giới thiệu về vùng {region.name}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            {region.description}
          </p>
          <p className="text-gray-600 leading-relaxed">
            {region.overview}
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-6 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">
                {cities.length}
              </div>
              <div className="text-sm text-gray-500">Tỉnh thành</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {cities.reduce((sum, city) => 
                  sum + parseInt(city.population.replace(/[^0-9]/g, '')), 0
                ).toLocaleString()}
              </div>
              <div className="text-sm text-gray-500">Tổng dân số</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {cities.reduce((sum, city) => 
                  sum + parseFloat(city.area.replace(/[^0-9.]/g, '')), 0
                ).toLocaleString()} km²
              </div>
              <div className="text-sm text-gray-500">Tổng diện tích</div>
            </div>
          </div>
        </div>

        {/* Cities List */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Các tỉnh thành trong vùng
            </h2>
            <div className="flex items-center space-x-4">
              <label className="text-sm text-gray-600">Sắp xếp theo:</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'population' | 'area')}
                className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="name">Tên</option>
                <option value="population">Dân số</option>
                <option value="area">Diện tích</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCities.map((city) => (
              <Link
                key={city.id}
                href={`/city/${city.slug}`}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                    {city.name}
                  </h3>
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: city.color }}
                  />
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Dân số:</span>
                    <span className="font-medium">{city.population}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Diện tích:</span>
                    <span className="font-medium">{city.area}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 mt-4 line-clamp-3">
                  {city.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-blue-600 font-medium group-hover:text-blue-700">
                    Xem chi tiết →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Quay về bản đồ Việt Nam
          </Link>
        </div>
      </div>
    </div>
  );
}
