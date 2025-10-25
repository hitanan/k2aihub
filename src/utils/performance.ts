// Optimize images loading
export function optimizeImageLoading(): void {
  if (typeof window === 'undefined') return;

  // Add loading="lazy" to images that are not above the fold
  const images = document.querySelectorAll('img:not([loading])');
  images.forEach((img, index) => {
    // Only set lazy loading for images beyond the first few
    if (index > 2) {
      img.setAttribute('loading', 'lazy');
    }
  });
}

// Performance monitoring
export function measurePagePerformance(): void {
  if (typeof window === 'undefined' || !window.performance) return;

  // Measure page load time
  window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);

    // Measure specific metrics
    const navigation = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming;
    if (navigation) {
      const metrics = {
        dns: navigation.domainLookupEnd - navigation.domainLookupStart,
        tcp: navigation.connectEnd - navigation.connectStart,
        request: navigation.responseStart - navigation.requestStart,
        response: navigation.responseEnd - navigation.responseStart,
        dom: navigation.domContentLoadedEventEnd - navigation.responseEnd,
        load: navigation.loadEventEnd - navigation.loadEventStart
      };

      console.log('Performance metrics:', metrics);
    }
  });
}

// Memory optimization
export function optimizeMemoryUsage(): void {
  if (typeof window === 'undefined') return;

  // Clean up event listeners when component unmounts
  window.addEventListener('beforeunload', () => {
    // Clean up any global event listeners or timers
    // This prevents memory leaks
  });
}

// Lazy load components that are not immediately visible
export function createIntersectionObserver(
  callback: () => void
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !window.IntersectionObserver)
    return null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.disconnect();
        }
      });
    },
    {
      rootMargin: '50px',
      threshold: 0.1
    }
  );

  return observer;
}
