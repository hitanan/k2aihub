/**
 * Utility functions for handling asset paths in both development and production environments
 * Handles GitHub Pages deployment, custom domains, and various deployment scenarios
 */

/**
 * Get the correct asset path for the current environment
 * @param assetPath - The asset path relative to the public directory (e.g., '/vietnam.svg')
 * @returns The full path to the asset that works in both dev and production
 */
export function getAssetPath(assetPath: string): string {
  // Ensure the asset path starts with a slash
  const normalizedPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;

  // In development, always use the asset path as-is
  if (process.env.NODE_ENV === 'development') {
    return normalizedPath;
  }

  // In production, detect the deployment scenario
  if (typeof window !== 'undefined') {
    // Client-side: Use the current origin and path to determine base path
    const { origin, pathname } = window.location;

    // Custom domain case (e.g., edu.k2aihub.com, example.com)
    if (!origin.includes('github.io')) {
      return normalizedPath;
    }

    // GitHub Pages case (e.g., username.github.io/repo-name)
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0 && !pathname.startsWith('/k2aihub')) {
      // If we're on github.io but not in the expected path, might be a different repo
      // Try to detect the base path from the URL
      const potentialBasePath = `/${pathSegments[0]}`;
      return `${potentialBasePath}${normalizedPath}`;
    }

    // Default GitHub Pages with k2aihub
    if (pathname.includes('/k2aihub') || origin.includes('/k2aihub')) {
      return `/k2aihub${normalizedPath}`;
    }

    // Fallback for GitHub Pages
    return normalizedPath;
  }

  // Server-side: Use environment variables or fallback logic
  const customBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
  if (customBasePath) {
    return `${customBasePath}${normalizedPath}`;
  }

  // Default production behavior for GitHub Pages
  const basePath = '/k2aihub';
  return `${basePath}${normalizedPath}`;
}

/**
 * Get the current base path dynamically (useful for client-side code)
 * @returns The base path for the current environment
 */
export function getBasePath(): string {
  // Development environment
  if (process.env.NODE_ENV === 'development') {
    return '';
  }

  // Check for custom base path from environment
  const customBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
  if (customBasePath) {
    return customBasePath;
  }

  if (typeof window !== 'undefined') {
    // Client-side: detect from current URL
    const { origin, pathname } = window.location;

    // Custom domain case
    if (!origin.includes('github.io')) {
      return '';
    }

    // GitHub Pages case - try to detect base path
    const pathSegments = pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      // If we're in a subdirectory, use the first segment as base path
      const potentialBasePath = `/${pathSegments[0]}`;

      // Validate that this looks like a repo name (not a page route)
      if (!['city', 'ai', 'region', 'feedback'].includes(pathSegments[0])) {
        return potentialBasePath;
      }
    }

    // Check if URL contains k2aihub
    if (pathname.includes('/k2aihub') || origin.includes('k2aihub')) {
      return '/k2aihub';
    }

    // Fallback for GitHub Pages
    return '';
  }

  // Server-side fallback
  return '/k2aihub';
}

/**
 * Fetch an asset with the correct path for the current environment
 * @param assetPath - The asset path relative to the public directory
 * @returns Promise that resolves to the Response object
 */
export async function fetchAsset(assetPath: string): Promise<Response> {
  const fullPath = getAssetPath(assetPath);
  return fetch(fullPath);
}

/**
 * Get absolute URL for an asset (useful for meta tags, sharing, etc.)
 * @param assetPath - The asset path relative to the public directory
 * @returns The absolute URL for the asset
 */
export function getAbsoluteAssetUrl(assetPath: string): string {
  if (typeof window !== 'undefined') {
    const assetFullPath = getAssetPath(assetPath);
    return new URL(assetFullPath, window.location.origin).href;
  }

  // Server-side: construct URL based on environment
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://edu.k2aihub.com';
  const basePath = getBasePath();
  const normalizedPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;

  return `${baseUrl}${basePath}${normalizedPath}`;
}
