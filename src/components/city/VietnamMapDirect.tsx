'use client';

import React, { useState, useEffect, useRef } from 'react';
import { City } from '@/src/types';

interface VietnamMapDirectProps {
  cities: City[];
  selectedCity: City | null;
  onCityClick: (city: City) => void;
  onCityHover: (city: City | null) => void;
  filteredCities: City[];
}

const VietnamMapDirect: React.FC<VietnamMapDirectProps> = ({
  cities,
  selectedCity,
  onCityClick,
  onCityHover,
  filteredCities
}) => {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Create a lookup map for cities by slug
  const cityLookup = React.useMemo(() => {
    const lookup = new Map<string, City>();
    cities.forEach(city => {
      lookup.set(city.slug, city);
    });
    return lookup;
  }, [cities]);

  const isHighlighted = React.useCallback((city: City) => {
    return filteredCities.length > 0 ? filteredCities.some(c => c.id === city.id) : false;
  }, [filteredCities]);

  const getCityOpacity = React.useCallback((city: City) => {
    if (filteredCities.length === 0) return 1;
    return isHighlighted(city) ? 1 : 0.3;
  }, [filteredCities, isHighlighted]);

  const getPathFill = React.useCallback((citySlug: string) => {
    const city = cityLookup.get(citySlug);
    if (!city) return '#999999';
    
    if (selectedCity?.slug === citySlug) {
      return '#D97706'; // Yellow-brown for selected
    }
    
    if (hoveredCity === citySlug) {
      return '#FCD34D'; // Yellow for hover
    }
    
    if (filteredCities.length > 0 && !isHighlighted(city)) {
      return '#9CA3AF'; // Gray for non-highlighted when filtering
    }
    
    return '#666666'; // Default gray
  }, [cityLookup, selectedCity, hoveredCity, filteredCities, isHighlighted]);

  const getPathOpacity = React.useCallback((citySlug: string) => {
    const city = cityLookup.get(citySlug);
    if (!city) return 0.6;
    return getCityOpacity(city);
  }, [cityLookup, getCityOpacity]);

  // Update SVG path colors when dependencies change
  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll('path[data-city-slug]');
    paths.forEach((path) => {
      const citySlug = path.getAttribute('data-city-slug');
      if (citySlug) {
        path.setAttribute('fill', getPathFill(citySlug));
        path.setAttribute('fill-opacity', getPathOpacity(citySlug).toString());
      }
    });
  }, [selectedCity, hoveredCity, filteredCities, getPathFill, getPathOpacity]);

  // Load and process SVG content
  useEffect(() => {
    if (!svgRef.current) return;

    const loadSVG = async () => {
      try {
        const { fetchAsset } = await import('@/utils/assets');
        const response = await fetchAsset('/vietnam.svg');
        const svgText = await response.text();
        
        // Parse the SVG content
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        const pathElements = svgDoc.querySelectorAll('path[inkscape\\:label]');
        
        console.log(`Found ${pathElements.length} paths with inkscape:label`);
        
        // Clear existing content and copy attributes
        const sourceSvg = svgDoc.querySelector('svg');
        if (sourceSvg && svgRef.current) {
          // Copy viewBox and other important attributes
          svgRef.current.setAttribute('viewBox', sourceSvg.getAttribute('viewBox') || '0 0 812 873');
          
          // Process and add path elements
          pathElements.forEach((pathElement) => {
            const citySlug = pathElement.getAttribute('inkscape:label');
            if (citySlug) {
              const city = cityLookup.get(citySlug);
              
              // Clone the path element
              const newPath = pathElement.cloneNode(true) as SVGPathElement;
              
              // Set styling and interaction attributes
              if (city) {
                newPath.setAttribute('fill', getPathFill(citySlug));
                newPath.setAttribute('fill-opacity', getPathOpacity(citySlug).toString());
                newPath.setAttribute('data-city-slug', citySlug);
                newPath.setAttribute('data-city-name', city.name);
              } else {
                console.warn(`City not found: ${citySlug}`);
                newPath.setAttribute('fill', '#999999');
                newPath.setAttribute('fill-opacity', '0.5');
              }
              
              newPath.setAttribute('stroke', '#ffffff');
              newPath.setAttribute('stroke-width', '1');
              newPath.setAttribute('cursor', 'pointer');
              newPath.setAttribute('class', 'province-path transition-all duration-300 ease-out');
              
              // Add event listeners
              newPath.addEventListener('click', () => {
                if (city) {
                  onCityClick(city);
                }
              });
              
              newPath.addEventListener('mouseenter', () => {
                setHoveredCity(citySlug);
                if (city) {
                  onCityHover(city);
                }
              });
              
              newPath.addEventListener('mouseleave', () => {
                setHoveredCity(null);
                onCityHover(null);
              });
              
              svgRef.current?.appendChild(newPath);
            }
          });
        }
      } catch (error) {
        console.error('Error loading SVG:', error);
      }
    };

    loadSVG();
  }, [cityLookup, onCityClick, onCityHover, getPathFill, getPathOpacity]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg p-4 relative">
      <svg
        ref={svgRef}
        className="w-full h-full max-w-md max-h-full"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 812 873"
      >
        {/* Content will be loaded dynamically */}
      </svg>
      
      {/* Tooltip for hovered city */}
      {hoveredCity && (
        <div className="absolute top-4 left-4 bg-black text-white px-3 py-2 rounded-lg text-sm pointer-events-none z-20">
          {cityLookup.get(hoveredCity)?.name}
        </div>
      )}
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white bg-opacity-95 border border-gray-200 rounded-lg p-3 text-xs">
        <div className="flex items-center mb-2">
          <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
          <span className="text-gray-700">Province</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-4 h-4 bg-yellow-300 rounded mr-2"></div>
          <span className="text-gray-700">Hovered</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-yellow-700 rounded mr-2"></div>
          <span className="text-gray-700">Selected</span>
        </div>
      </div>
    </div>
  );
};

export default VietnamMapDirect;
