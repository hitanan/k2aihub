'use client';

import React from 'react';
import { City } from '@/types';
import { fetchAsset } from '@/utils/assets';

interface VietnamMapProps {
  cities: City[];
  selectedCity: City | null;
  onCityClick: (city: City) => void;
  onCityHover: (city: City | null) => void;
  filteredCities: City[];
}

const VietnamMap: React.FC<VietnamMapProps> = ({
  cities,
  selectedCity,
  onCityClick,
  onCityHover,
  filteredCities
}) => {
  const [svgContent, setSvgContent] = React.useState<string>('');
  const [processedSvgContent, setProcessedSvgContent] = React.useState<string>('');
  const [hoveredCity, setHoveredCity] = React.useState<string | null>(null);
  const svgRef = React.useRef<HTMLDivElement>(null);

  // Create city lookup map
  const cityLookup = React.useMemo(() => {
    const map = new Map<string, City>();
    cities.forEach(city => {
      map.set(city.slug, city);
    });
    return map;
  }, [cities]);

  // Check if city is highlighted based on filtered cities
  const isHighlighted = React.useCallback((city: City) => {
    if (filteredCities.length === 0) return true;
    return filteredCities.some(filtered => filtered.slug === city.slug);
  }, [filteredCities]);

  // Load SVG content
  React.useEffect(() => {
    const loadSvg = async () => {
      try {
        // Use the asset utility for deployment-safe path resolution
        const response = await fetchAsset('/vietnam.svg');
        const content = await response.text();
        setSvgContent(content);
      } catch (error) {
        console.error('Failed to load SVG:', error);
      }
    };

    loadSvg();
  }, []);

  // Simplified color mapping for better visual appeal
  const getPathColor = React.useCallback((citySlug: string): string => {
    const city = cityLookup.get(citySlug);
    if (!city) return '#9CA3AF';

    if (selectedCity?.slug === citySlug) {
      return '#D97706'; // Yellow-brown for selected (consistent with styling)
    }
    
    if (hoveredCity === citySlug) {
      return '#F59E0B'; // Bright amber for hover
    }
    
    if (filteredCities.length > 0 && !isHighlighted(city)) {
      return '#F3F4F6'; // Very light gray for non-highlighted when filtering
    }
    
    // Simple default color scheme
    return '#6B7280'; // Clean gray for all cities
  }, [selectedCity, hoveredCity, filteredCities, cityLookup, isHighlighted]);

  // Process SVG content with DOM parsing and reordering
  React.useEffect(() => {
    if (!svgContent) return;

    try {
      // Parse SVG using DOMParser for proper DOM manipulation
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;

      // Find all path elements with inkscape:label
      const pathElements = Array.from(svgElement.querySelectorAll('path'));
      const labeledPaths = pathElements.filter(path => {
        const inkscapeLabel = path.getAttribute('inkscape:label') || 
                             path.getAttributeNS('http://www.inkscape.org/namespaces/inkscape', 'label');
        return inkscapeLabel !== null;
      });

      // Process each path individually
      const processedPaths: Array<{element: Element, citySlug: string, city: City | null}> = [];
      
      labeledPaths.forEach((pathElement) => {
        const inkscapeLabel = pathElement.getAttribute('inkscape:label') || 
                             pathElement.getAttributeNS('http://www.inkscape.org/namespaces/inkscape', 'label');
        
        if (!inkscapeLabel) return;
        
        const citySlug = inkscapeLabel.trim();
        const city = cityLookup.get(citySlug);
        
        // Clear existing attributes that might cause issues
        pathElement.removeAttribute('style');
        pathElement.removeAttribute('fill');
        pathElement.removeAttribute('fill-opacity');
        pathElement.removeAttribute('stroke');
        pathElement.removeAttribute('stroke-width');
        pathElement.removeAttribute('opacity');
        
        // Set proper attributes with consistent styling
        const fillColor = getPathColor(citySlug);
        const opacity = (filteredCities.length > 0 && city && !isHighlighted(city)) ? '0.3' : '1';
        
        pathElement.setAttribute('fill', fillColor);
        pathElement.setAttribute('fill-opacity', opacity);
        pathElement.setAttribute('stroke', '#FFFFFF');
        pathElement.setAttribute('stroke-width', '1'); // Increased from 0.5 to match hover visibility
        pathElement.setAttribute('opacity', '1');
        pathElement.setAttribute('cursor', 'pointer');
        pathElement.setAttribute('data-city-slug', citySlug);
        if (city) {
          pathElement.setAttribute('data-city-name', city.name);
        }
        
        // Force visibility
        (pathElement as SVGElement).style.pointerEvents = 'all';
        (pathElement as SVGElement).style.visibility = 'visible';
        
        processedPaths.push({ element: pathElement, citySlug, city: city || null });
      });

      // Clear and re-add paths to ensure proper rendering order
      const container = svgElement.querySelector('g') || svgElement;
      
      // Remove all existing paths
      labeledPaths.forEach(path => {
        if (path.parentNode) {
          path.parentNode.removeChild(path);
        }
      });

      // Add paths back (larger provinces first to prevent overlap issues)
      processedPaths.forEach(({ element }) => {
        container.appendChild(element);
      });

      // Ensure SVG has proper dimensions
      svgElement.setAttribute('width', '100%');
      svgElement.setAttribute('height', '100%');
      svgElement.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      
      // Serialize back to string
      const serializer = new XMLSerializer();
      const finalSvg = serializer.serializeToString(svgElement);
      
      setProcessedSvgContent(finalSvg);

    } catch (error) {
      console.error('SVG processing error:', error);
      setProcessedSvgContent(svgContent); // Fallback
    }
  }, [svgContent, cityLookup, getPathColor, filteredCities, isHighlighted]);

  // Event handling
  React.useEffect(() => {
    if (!processedSvgContent || !svgRef.current) return;

    const svgContainer = svgRef.current;
    const svgElement = svgContainer.querySelector('svg');
    if (!svgElement) return;

    // Click handler with improved mobile support
    const handleClick = (event: MouseEvent | TouchEvent) => {
      event.preventDefault();
      const target = event.target as SVGElement;
      
      if (target.tagName === 'path' && target.hasAttribute('data-city-slug')) {
        const citySlug = target.getAttribute('data-city-slug')!;
        const city = cityLookup.get(citySlug);
        if (city) {
          // Clear any hover states on click (especially important for mobile)
          setHoveredCity(null);
          onCityHover(null);
          
          // Handle city selection
          onCityClick(city);
          
          // Force update selected styling immediately
          const allPaths = svgElement.querySelectorAll('path[data-city-slug]');
          allPaths.forEach(path => {
            const pathCitySlug = path.getAttribute('data-city-slug')!;
            if (pathCitySlug === citySlug) {
              // Apply selected styling immediately
              path.setAttribute('fill', '#D97706');
              path.setAttribute('stroke', '#FFFFFF');
              path.setAttribute('stroke-width', '1.2');
            } else {
              // Reset other paths
              path.setAttribute('fill', getPathColor(pathCitySlug));
              path.setAttribute('stroke', '#FFFFFF');
              path.setAttribute('stroke-width', '1');
            }
          });
        }
      }
    };

    // Touch handlers for mobile devices
    const handleTouchStart = (event: TouchEvent) => {
      const target = event.target as SVGElement;
      if (target.tagName === 'path' && target.hasAttribute('data-city-slug')) {
        // Prevent hover states on touch devices
        event.preventDefault();
      }
    };

    // Hover handlers for desktop
    const handleMouseOver = (event: MouseEvent) => {
      // Only apply hover effects on non-touch devices
      if ('ontouchstart' in window) return;
      
      const target = event.target as SVGElement;
      if (target.tagName === 'path' && target.hasAttribute('data-city-slug')) {
        const citySlug = target.getAttribute('data-city-slug')!;
        const city = cityLookup.get(citySlug);
        if (city && selectedCity?.slug !== citySlug) {
          setHoveredCity(citySlug);
          onCityHover(city);
          
          // Apply hover styling only if not selected
          target.setAttribute('fill', '#F59E0B');
          target.setAttribute('stroke', '#D97706');
          target.setAttribute('stroke-width', '1.5');
        }
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      // Only handle mouse out on non-touch devices
      if ('ontouchstart' in window) return;
      
      const target = event.target as SVGElement;
      if (target.tagName === 'path' && target.hasAttribute('data-city-slug')) {
        const citySlug = target.getAttribute('data-city-slug')!;
        
        setHoveredCity(null);
        onCityHover(null);
        
        // Reset styling with consistent boundary handling
        const isSelected = selectedCity?.slug === citySlug;
        if (isSelected) {
          target.setAttribute('fill', '#D97706'); // Yellow-brown for selected
          target.setAttribute('stroke', '#FFFFFF'); // Keep white stroke for visibility
          target.setAttribute('stroke-width', '1.2'); // Slightly thicker for selected
        } else {
          target.setAttribute('fill', getPathColor(citySlug));
          target.setAttribute('stroke', '#FFFFFF');
          target.setAttribute('stroke-width', '1'); // Thicker default stroke
        }
      }
    };

    // Enhanced global mouse leave handler
    const handleContainerMouseLeave = (event: MouseEvent) => {
      // Only handle on non-touch devices
      if ('ontouchstart' in window) return;
      
      // More reliable boundary detection
      const rect = svgContainer.getBoundingClientRect();
      const { clientX, clientY } = event;
      
      // Add buffer zone to prevent premature clearing
      const buffer = 10;
      const isOutside = clientX < rect.left - buffer || 
                       clientX > rect.right + buffer || 
                       clientY < rect.top - buffer || 
                       clientY > rect.bottom + buffer;
      
      if (isOutside) {
        setHoveredCity(null);
        onCityHover(null);
        
        // Reset all hover states
        const allPaths = svgElement.querySelectorAll('path[data-city-slug]');
        allPaths.forEach(path => {
          const citySlug = path.getAttribute('data-city-slug')!;
          const isSelected = selectedCity?.slug === citySlug;
          
          if (isSelected) {
            path.setAttribute('fill', '#D97706'); // Yellow-brown for selected
            path.setAttribute('stroke', '#FFFFFF');
            path.setAttribute('stroke-width', '1.2'); // Thicker for selected
          } else {
            path.setAttribute('fill', getPathColor(citySlug));
            path.setAttribute('stroke', '#FFFFFF');
            path.setAttribute('stroke-width', '1'); // Thicker default stroke
          }
        });
      }
    };

    // Document-level mouse leave handler for better coverage
    const handleDocumentMouseMove = (event: MouseEvent) => {
      if ('ontouchstart' in window) return;
      
      const rect = svgContainer.getBoundingClientRect();
      const { clientX, clientY } = event;
      
      // Large buffer zone to ensure hover clears when mouse is far from map
      const buffer = 50;
      const isVeryFarOutside = clientX < rect.left - buffer || 
                              clientX > rect.right + buffer || 
                              clientY < rect.top - buffer || 
                              clientY > rect.bottom + buffer;
      
      if (isVeryFarOutside && hoveredCity) {
        setHoveredCity(null);
        onCityHover(null);
        
        // Reset hover states
        const allPaths = svgElement.querySelectorAll('path[data-city-slug]');
        allPaths.forEach(path => {
          const citySlug = path.getAttribute('data-city-slug')!;
          const isSelected = selectedCity?.slug === citySlug;
          
          if (!isSelected) {
            path.setAttribute('fill', getPathColor(citySlug));
            path.setAttribute('stroke', '#FFFFFF');
            path.setAttribute('stroke-width', '1');
          }
        });
      }
    };

    // Add event listeners
    svgElement.addEventListener('click', handleClick, true);
    svgElement.addEventListener('touchstart', handleTouchStart, true);
    svgElement.addEventListener('touchend', handleClick, true);
    svgElement.addEventListener('mouseover', handleMouseOver, true);
    svgElement.addEventListener('mouseout', handleMouseOut, true);
    svgContainer.addEventListener('mouseleave', handleContainerMouseLeave, true);
    document.addEventListener('mousemove', handleDocumentMouseMove);

    return () => {
      svgElement.removeEventListener('click', handleClick, true);
      svgElement.removeEventListener('touchstart', handleTouchStart, true);
      svgElement.removeEventListener('touchend', handleClick, true);
      svgElement.removeEventListener('mouseover', handleMouseOver, true);
      svgElement.removeEventListener('mouseout', handleMouseOut, true);
      svgContainer.removeEventListener('mouseleave', handleContainerMouseLeave, true);
      document.removeEventListener('mousemove', handleDocumentMouseMove);
    };
  }, [processedSvgContent, cityLookup, onCityClick, onCityHover, selectedCity, getPathColor, hoveredCity]);

  // Update selected city styling when selectedCity changes
  React.useEffect(() => {
    if (!svgRef.current) return;
    
    const svgElement = svgRef.current.querySelector('svg');
    if (!svgElement) return;

    // Reset all path styles with consistent boundary preservation
    const allPaths = svgElement.querySelectorAll('path[data-city-slug]');
    allPaths.forEach(path => {
      const citySlug = path.getAttribute('data-city-slug')!;
      const isSelected = selectedCity?.slug === citySlug;
      
      if (isSelected) {
        path.setAttribute('fill', '#D97706'); // Yellow-brown for selected
        path.setAttribute('stroke', '#FFFFFF'); // White stroke for clear boundary
        path.setAttribute('stroke-width', '1.2'); // Thicker stroke for selected
      } else {
        path.setAttribute('fill', getPathColor(citySlug));
        path.setAttribute('stroke', '#FFFFFF');
        path.setAttribute('stroke-width', '1'); // Thicker default stroke
      }
    });
  }, [selectedCity, getPathColor]);

  if (!processedSvgContent) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-lg">
        <div className="text-gray-500">Loading map...</div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <div 
        ref={svgRef}
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))' }}
        dangerouslySetInnerHTML={{ __html: processedSvgContent }}
      />
    </div>
  );
};

export default VietnamMap;
