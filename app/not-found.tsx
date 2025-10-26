'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    // Check if this is a moved route
    const redirectMap: Record<string, string> = {
      '/learning': 'https://edu.k2aihub.com/learning',
      '/games': 'https://edu.k2aihub.com/games',
      '/blog': 'https://edu.k2aihub.com/blog',
      '/ai': 'https://edu.k2aihub.com/ai',
      '/feedback': 'https://edu.k2aihub.com/feedback',
    };

    if (pathname) {
      // Check if pathname starts with any redirect path
      for (const [prefix, destination] of Object.entries(redirectMap)) {
        if (pathname.startsWith(prefix)) {
          // Redirect with the full path
          const fullDestination = pathname === prefix 
            ? destination 
            : `${destination}${pathname.slice(prefix.length)}`;
          
          window.location.replace(fullDestination);
          return;
        }
      }
    }
  }, [pathname]);

  // If this is a moved route, show redirect message
  const isMovedRoute = pathname && (
    pathname.startsWith('/learning') ||
    pathname.startsWith('/games') ||
    pathname.startsWith('/blog') ||
    pathname.startsWith('/ai') ||
    pathname.startsWith('/feedback')
  );

  if (isMovedRoute) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              301 - Moved Permanently
            </h1>
            <p className="text-gray-600 mb-4">
              This page has moved to K2AI Education.
            </p>
            <p className="text-sm text-gray-500">
              Redirecting you now...
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Regular 404 page
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
            <span className="text-3xl">🔍</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            404 - Page Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Go to Homepage
          </Link>
          <Link
            href="/city"
            className="block w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Explore Vietnam Map
          </Link>
          <a
            href="https://edu.k2aihub.com"
            className="block w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            Visit K2AI Education →
          </a>
        </div>
      </div>
    </div>
  );
}
