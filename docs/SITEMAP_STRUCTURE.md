# K2AIHub Sitemap Structure

## Overview

The sitemap is organized by **Apps** to support scalable growth of k2aihub.com with multiple small applications without creating new subdomains.

## Current Structure (46 URLs)

### Core Pages (1 URL)

- `/` - K2AIHub landing page showcasing all products (Priority: 1.0)

### App: Vietnamese Geographical Map (45 URLs)

**Main Pages (2 URLs)**

- `/city` - Interactive city explorer (Priority: 0.9)
- `/city/region` - Vietnam regions overview (Priority: 0.9)

**City Pages (34 URLs)** (Priority: 0.8-0.9)
All 34 provinces/cities of Vietnam after 2025 reorganization

- Major cities (Priority 0.9): ha-noi, ho-chi-minh, da-nang, hai-phong, can-tho, hue
- Other cities (Priority 0.8): All remaining 28 cities
- URL pattern: `/city/{city-slug}`

**Region Pages (9 URLs)** (Priority: 0.8)

1. `/city/region/bac-bo` - Bắc Bộ
2. `/city/region/tay-bac` - Tây Bắc
3. `/city/region/dong-bac` - Đông Bắc
4. `/city/region/dong-bang-bac-bo` - Đồng bằng Bắc Bộ
5. `/city/region/bac-trung-bo` - Bắc Trung Bộ
6. `/city/region/nam-trung-bo` - Nam Trung Bộ
7. `/city/region/tay-nguyen` - Tây Nguyên
8. `/city/region/dong-nam-bo` - Đông Nam Bộ
9. `/city/region/dong-bang-song-cuu-long` - Đồng bằng sông Cửu Long

## Data Architecture

### Exported Data

- `citiesData` - Array of 34 cities with full information
- `regionsData` - Array of 9 regions with metadata and city slugs

### Region Interface

```typescript
interface Region {
  name: string; // Vietnamese name
  slug: string; // URL-friendly slug
  description: string; // Brief description
  cities: string[]; // Array of city slugs in this region
}
```

## Future Growth Pattern

When adding new apps to k2aihub.com:

```typescript
// In sitemap.ts
const newAppPages: MetadataRoute.Sitemap = [
  {
    url: `${baseUrl}/new-app`,
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  // ... app-specific pages
];

return [
  ...corePages,
  ...vietnameseMapApp,
  ...newAppPages, // Add new apps here
];
```

## Benefits

✅ **Scalable**: Easy to add new apps without restructuring
✅ **SEO-Friendly**: Proper priority and change frequency settings
✅ **Maintainable**: Clear separation between apps
✅ **Future-Proof**: Template for adding new features

## Files Modified

1. `src/data/cities.ts` - Added `regionsData` export with Region interface
2. `app/sitemap.ts` - Reorganized by apps with clear sections
3. `docs/SEO_REDIRECT_STRATEGY.md` - Updated monitoring checklist

## Build Output

- Total static pages: 56
- Total sitemap URLs: 46
- TypeScript: ✅ Error-free
- Build: ✅ Success

Last Updated: October 26, 2025
