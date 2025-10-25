'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { TouristAttraction } from '@/types';

interface TouristAttractionsSliderProps {
  attractions: TouristAttraction[];
}

const TouristAttractionsSlider: React.FC<TouristAttractionsSliderProps> = ({ attractions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [currentX, setCurrentX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Touch navigation constants
  const minSwipeDistance = 50;

  useEffect(() => {
    if (!isAutoPlaying || attractions.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % attractions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, attractions.length]);

  if (!attractions || attractions.length === 0) {
    return null;
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + attractions.length) % attractions.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % attractions.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch event handlers for mobile swipe navigation
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && attractions.length > 1) {
      goToNext();
    }
    if (isRightSwipe && attractions.length > 1) {
      goToPrevious();
    }
  };

  // Mouse/click drag handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (attractions.length <= 1) return;
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    setIsAutoPlaying(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !startX) return;
    
    e.preventDefault();
    setCurrentX(e.clientX);
    const diffX = e.clientX - startX;
    setDragOffset(diffX);
  };

  const handleMouseUp = () => {
    if (!isDragging || !startX || !currentX) return;
    
    setIsDragging(false);
    const diffX = currentX - startX;
    
    // Determine if the drag was significant enough to change slides
    if (Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
    
    // Reset drag state
    setStartX(null);
    setCurrentX(null);
    setDragOffset(0);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="mr-2">🏛️</span>
          Địa Điểm Nổi Tiếng
        </h3>
        
        <div className="relative">
          {/* Main slider */}
          <div 
            className="relative h-64 md:h-80 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
            ref={sliderRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ userSelect: 'none' }}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
                ...(isDragging && { 
                  transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
                  transition: 'none' 
                })
              }}
            >
              {attractions.map((attraction, index) => (
                <div key={index} className="min-w-full h-full relative">
                  {attraction.url ? (
                    <a
                      href={attraction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <Image
                        src={attraction.imageUrl}
                        alt={attraction.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder-attraction.svg';
                        }}
                      />
                    </a>
                  ) : (
                    <Image
                      src={attraction.imageUrl}
                      alt={attraction.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-attraction.svg';
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">{attraction.name}</h4>
                        <p className="text-sm opacity-90 line-clamp-3">{attraction.description}</p>
                        {attraction.location && (
                          <p className="text-xs mt-1 opacity-75">📍 {attraction.location}</p>
                        )}
                      </div>
                      {attraction.url && (
                        <a
                          href={attraction.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                          aria-label="Xem thêm thông tin"
                        >
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            {attractions.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                  aria-label="Hình ảnh trước"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
                  aria-label="Hình ảnh tiếp theo"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Dots indicator */}
          {attractions.length > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              {attractions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-blue-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Đi đến hình ảnh ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Attraction list */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {attractions.map((attraction, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                  index === currentIndex
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-800 mb-1">{attraction.name}</h5>
                    <p className="text-sm text-gray-600 line-clamp-2">{attraction.description}</p>
                    {attraction.location && (
                      <p className="text-xs text-gray-500 mt-1">📍 {attraction.location}</p>
                    )}
                  </div>
                  {attraction.url && (
                    <a
                      href={attraction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-600 hover:text-blue-800 p-1"
                      aria-label="Xem thêm thông tin"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristAttractionsSlider;
