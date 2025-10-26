'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface RedirectProps {
  to: string;
  statusCode?: 301 | 302 | 307 | 308;
  delay?: number;
}

/**
 * Client-side redirect component for static sites (GitHub Pages)
 * Provides SEO-friendly redirects with proper meta tags and instant JavaScript redirect
 * 
 * For true 301 redirects, use server-side redirects or configure at hosting level (e.g., DreamHost)
 */
export default function Redirect({ to, statusCode = 301, delay = 0 }: RedirectProps) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Extract the base path from 'to' URL to avoid duplication
    const toUrl = new URL(to);
    const toPath = toUrl.pathname;
    
    // Only append pathname if it's different from the base redirect path
    // For example, /games/space-exploration-3d should append, but /games should not
    let fullDestination = to;
    if (pathname && pathname !== '/' && pathname !== toPath) {
      // If current pathname starts with the redirect base path, remove it to avoid duplication
      const cleanPath = pathname.startsWith(toPath) 
        ? pathname.slice(toPath.length)
        : pathname;
      fullDestination = cleanPath ? `${to}${cleanPath}` : to;
    }

    // Immediate redirect
    if (delay === 0) {
      window.location.replace(fullDestination);
    } else {
      const timer = setTimeout(() => {
        window.location.replace(fullDestination);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [to, pathname, delay]);

  const statusText = statusCode === 301 
    ? 'Moved Permanently' 
    : statusCode === 302 
    ? 'Found'
    : statusCode === 307
    ? 'Temporary Redirect'
    : 'Permanent Redirect';

  // Calculate the final destination URL (same logic as useEffect)
  const toUrl = new URL(to);
  const toPath = toUrl.pathname;
  let finalDestination = to;
  if (pathname && pathname !== '/' && pathname !== toPath) {
    const cleanPath = pathname.startsWith(toPath) 
      ? pathname.slice(toPath.length)
      : pathname;
    finalDestination = cleanPath ? `${to}${cleanPath}` : to;
  }

  return (
    <>
      {/* SEO meta tags for search engines that don't execute JavaScript */}
      <head>
        <meta httpEquiv="refresh" content={`${delay};url=${finalDestination}`} />
        <link rel="canonical" href={finalDestination} />
      </head>

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
              {statusCode} - {statusText}
            </h1>
            <p className="text-gray-600 mb-4">
              This page has moved to a new location.
            </p>
            <p className="text-sm text-gray-500">
              Redirecting you now...
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-600 mb-3">
              If you are not redirected automatically, click below:
            </p>
            <a
              href={finalDestination}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Go to new location
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
