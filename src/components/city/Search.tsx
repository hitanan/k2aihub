'use client';

import React, { useState, useEffect, useRef } from 'react';
import { City } from '@/types';
import { matchVietnameseText } from '@/utils/vietnamese';

interface SearchProps {
  cities: City[];
  onFilterChange: (filteredCities: City[]) => void;
  onCitySelect: (city: City) => void;
}

const Search: React.FC<SearchProps> = ({ cities, onFilterChange, onCitySelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      // When search is empty, show all cities if input is focused or clicked
      if (isFocused || showResults) {
        setFilteredCities(cities);
        onFilterChange([]);
        setShowResults(true);
      } else {
        setFilteredCities([]);
        onFilterChange([]);
        setShowResults(false);
      }
      return;
    }

    const filtered = cities.filter(city => {
      // Search in city name, old names, and region
      const basicMatches = (
        matchVietnameseText(city.name, searchTerm) ||
        city.oldNames.some(oldName => matchVietnameseText(oldName, searchTerm)) ||
        matchVietnameseText(city.region, searchTerm)
      );

      // Search in tourist attractions
      const attractionMatches = city.touristAttractions?.some(attraction => 
        matchVietnameseText(attraction.name, searchTerm) ||
        matchVietnameseText(attraction.description, searchTerm) ||
        (attraction.location && matchVietnameseText(attraction.location, searchTerm))
      ) || false;

      return basicMatches || attractionMatches;
    });

    setFilteredCities(filtered);
    onFilterChange(filtered);
    setShowResults(true);
  }, [searchTerm, cities, onFilterChange, isFocused, showResults]);

  // Handle clicks outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowResults(false);
        setIsFocused(false);
      }
    };

    // Also handle escape key
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowResults(false);
        setIsFocused(false);
      }
    };

    if (showResults) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showResults]);

  const handleCityClick = (city: City) => {
    onCitySelect(city);
    setShowResults(false);
    setIsFocused(false);
    setSearchTerm(''); // Clear search term when city is selected
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setShowResults(true);
  };

  const handleInputClick = () => {
    setIsFocused(true);
    setShowResults(true);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredCities([]);
    onFilterChange([]);
    setShowResults(false);
    setIsFocused(false);
  };

  const displayCities = searchTerm.trim() === '' ? cities : filteredCities;
  
  // Check if search results include attraction matches
  const hasAttractionMatches = searchTerm.trim() !== '' && filteredCities.some(city => 
    city.touristAttractions?.some(attraction => 
      matchVietnameseText(attraction.name, searchTerm) ||
      matchVietnameseText(attraction.description, searchTerm) ||
      (attraction.location && matchVietnameseText(attraction.location, searchTerm))
    )
  );

  const enhancedResultText = searchTerm.trim() === '' 
    ? `Tất cả ${cities.length} tỉnh thành` 
    : hasAttractionMatches 
      ? `Tìm thấy ${filteredCities.length} kết quả (bao gồm địa điểm du lịch)`
      : `Tìm thấy ${filteredCities.length} kết quả`;

  return (
    <div ref={containerRef} className="relative">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Tìm kiếm thành phố, địa điểm du lịch, vùng miền..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleInputFocus}
          onClick={handleInputClick}
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-black placeholder-gray-500"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {displayCities.length > 0 ? (
            <div className="py-2">
              <div className="px-4 py-2 text-sm text-gray-500 border-b border-gray-100 sticky top-0 bg-white">
                {enhancedResultText}
                {searchTerm.trim() === '' && (
                  <span className="ml-2 text-blue-600 font-medium">
                    (Nhấp để chọn thành phố)
                  </span>
                )}
              </div>
              <div className="max-h-80 overflow-y-auto">
                {displayCities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => handleCityClick(city)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full flex-shrink-0" 
                        style={{ backgroundColor: city.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{city.name}</span>
                          <span className="text-xs text-gray-500">#{city.code}</span>
                          <span className="text-xs text-gray-500">{ `- Vùng ${city.region}`}</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          
                          {city.oldNames.length > 1 && (
                            <span className="ml-2 text-gray-400">
                              • Bao gồm: {city.oldNames.slice(1).join(', ')}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          Dân số: {city.population} • Diện tích: {city.area}
                        </div>
                        {/* Tourist Attractions */}
                        {city.touristAttractions && city.touristAttractions.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-gray-100">
                            <div className="text-xs text-blue-600 font-medium mb-1">
                              🏛️ Địa điểm nổi tiếng ({city.touristAttractions.length}):
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {city.touristAttractions.slice(0, 3).map((attraction, index) => (
                                <span 
                                  key={index}
                                  className="inline-block text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-200"
                                >
                                  {attraction.name}
                                </span>
                              ))}
                              {city.touristAttractions.length > 3 && (
                                <span className="inline-block text-xs text-gray-500 px-2 py-1">
                                  +{city.touristAttractions.length - 3} khác
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-gray-500">
              <svg className="h-12 w-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.09m6.582 0A7.962 7.962 0 0118 15c2.034 0 3.9.785 5.291 2.09M15 11V9a6 6 0 00-12 0v2c0 .558.45 1.01 1 1.01h10c.55 0 1-.452 1-1.01z" />
              </svg>
              <p>Không tìm thấy thành phố nào với từ khóa &quot;{searchTerm}&quot;</p>
              <p className="text-sm mt-1">Thử tìm kiếm tên thành phố, địa điểm du lịch, vùng miền hoặc tên tỉnh cũ</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
