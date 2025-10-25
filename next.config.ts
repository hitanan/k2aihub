import type { NextConfig } from 'next';

// Determine base path and asset prefix based on environment variables or deployment context
const getBasePath = () => {
  // Custom base path from environment variable (highest priority)
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }

  // Custom domain case (no base path needed)
  if (process.env.NEXT_PUBLIC_CUSTOM_DOMAIN === 'true') {
    return '';
  }

  // Default GitHub Pages case with no custom domain
  // Development
  return '';
};

const basePath = getBasePath();
const assetPrefix = basePath ? `${basePath}/` : '';

const nextConfig: NextConfig = {
  // GitHub Pages deployment
  output: 'export',
  trailingSlash: true,

  // Dynamic base path and asset prefix configuration
  basePath,
  assetPrefix: process.env.NODE_ENV === 'production' ? assetPrefix : '',

  // Basic configuration for static export
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // SEO and performance optimizations
  experimental: {
    optimizePackageImports: ['@/components', '@/utils'],
  },

  // Build optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Compression and performance
  compress: true,
  poweredByHeader: false,

  // Environment variables to expose to the client
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_ASSET_PREFIX: assetPrefix,
  },

  // Generate sitemap and other files
  generateBuildId: async () => {
    // Generate consistent build ID for better caching
    return 'k2aihub-build-' + Date.now().toString();
  },

  // Bundle analyzer (optional - can be enabled when needed)
  // bundleAnalyzer: {
  //   enabled: process.env.ANALYZE === 'true',
  // }
};

export default nextConfig;
