/**
 * Utility to check for potentially broken pages in the K2AiHub application
 * This helps identify 404 pages by systematically checking sitemap entries
 */

import { generateSitemapEntries } from './sitemapGenerator';
import fs from 'fs';
import path from 'path';

interface PageCheckResult {
  url: string;
  status: 'exists' | 'missing' | 'error';
  details: string;
  filePath?: string;
}

/**
 * Check if a Next.js page exists by checking for corresponding file
 */
function checkPageExists(urlPath: string): PageCheckResult {
  // Remove base URL and clean up path
  const cleanPath = urlPath.replace('https://edu.k2aihub.com', '').replace(/\/$/, '') || '/';

  // Define possible file locations for this path
  const possiblePaths = [
    // Static page
    `src/app${cleanPath}/page.tsx`,
    `src/app${cleanPath}/page.ts`,
    `src/app${cleanPath}.tsx`,
    `src/app${cleanPath}.ts`,
    // Dynamic page with [slug] or [lessonId]
    `src/app${cleanPath.replace(/\/[^\/]+$/, '/[slug]/page.tsx')}`,
    `src/app${cleanPath.replace(/\/[^\/]+$/, '/[lessonId]/page.tsx')}`,
    `src/app${cleanPath.replace(/\/[^\/]+$/, '/[id]/page.tsx')}`,
  ];

  const projectRoot = process.cwd();

  for (const filePath of possiblePaths) {
    const fullPath = path.join(projectRoot, filePath);
    if (fs.existsSync(fullPath)) {
      return {
        url: urlPath,
        status: 'exists',
        details: `Found at ${filePath}`,
        filePath: fullPath,
      };
    }
  }

  // Special handling for dynamic routes
  const pathSegments = cleanPath.split('/').filter(Boolean);

  // Check for dynamic lesson pages
  if (pathSegments.length >= 3 && pathSegments[0] === 'learning') {
    const module1 = pathSegments[1];
    const lessonId = pathSegments[2];
    const dynamicPagePath = `src/app/learning/${module1}/[lessonId]/page.tsx`;
    const fullPath = path.join(projectRoot, dynamicPagePath);

    if (fs.existsSync(fullPath)) {
      // Check if the lesson ID exists in the data file
      const dataFilePath = `src/data/${module1}.ts`;
      const dataFullPath = path.join(projectRoot, dataFilePath);

      if (fs.existsSync(dataFullPath)) {
        try {
          const dataContent = fs.readFileSync(dataFullPath, 'utf-8');
          if (dataContent.includes(`id: '${lessonId}'`) || dataContent.includes(`"${lessonId}"`)) {
            return {
              url: urlPath,
              status: 'exists',
              details: `Dynamic lesson page found, lesson ID exists in ${dataFilePath}`,
              filePath: fullPath,
            };
          } else {
            return {
              url: urlPath,
              status: 'missing',
              details: `Dynamic page exists but lesson ID '${lessonId}' not found in ${dataFilePath}`,
              filePath: fullPath,
            };
          }
        } catch (error) {
          return {
            url: urlPath,
            status: 'error',
            details: `Error reading data file ${dataFilePath}: ${error}`,
            filePath: fullPath,
          };
        }
      }
    }
  }

  // Check for city pages
  if (pathSegments.length === 2 && pathSegments[0] === 'city') {
    const citySlug = pathSegments[1];
    const dynamicPagePath = 'src/app/city/[slug]/page.tsx';
    const fullPath = path.join(projectRoot, dynamicPagePath);

    if (fs.existsSync(fullPath)) {
      // Check if city exists in data
      const citiesDataPath = path.join(projectRoot, 'src/data/cities.ts');
      if (fs.existsSync(citiesDataPath)) {
        try {
          const citiesContent = fs.readFileSync(citiesDataPath, 'utf-8');
          if (citiesContent.includes(`slug: '${citySlug}'`) || citiesContent.includes(`"${citySlug}"`)) {
            return {
              url: urlPath,
              status: 'exists',
              details: `City page found, slug exists in cities data`,
              filePath: fullPath,
            };
          } else {
            return {
              url: urlPath,
              status: 'missing',
              details: `City page exists but slug '${citySlug}' not found in cities data`,
              filePath: fullPath,
            };
          }
        } catch (error) {
          return {
            url: urlPath,
            status: 'error',
            details: `Error reading cities data: ${error}`,
            filePath: fullPath,
          };
        }
      }
    }
  }

  return {
    url: urlPath,
    status: 'missing',
    details: `No page file found. Checked: ${possiblePaths.join(', ')}`,
  };
}

/**
 * Check all pages from sitemap
 */
export function checkAllPages(): PageCheckResult[] {
  const sitemapEntries = generateSitemapEntries();
  const results: PageCheckResult[] = [];

  console.log(`Checking ${sitemapEntries.length} pages from sitemap...`);

  for (const entry of sitemapEntries) {
    const result = checkPageExists(entry.url);
    results.push(result);

    if (result.status !== 'exists') {
      console.log(`⚠️  ${result.status.toUpperCase()}: ${result.url}`);
      console.log(`   ${result.details}`);
    }
  }

  return results;
}

/**
 * Generate a report of all page check results
 */
export function generatePageCheckReport(): void {
  const results = checkAllPages();

  const existingPages = results.filter((r) => r.status === 'exists');
  const missingPages = results.filter((r) => r.status === 'missing');
  const errorPages = results.filter((r) => r.status === 'error');

  const report = `
# K2AiHub Page Check Report
Generated: ${new Date().toISOString()}

## Summary
- Total pages checked: ${results.length}
- ✅ Existing pages: ${existingPages.length}
- ❌ Missing pages: ${missingPages.length}
- ⚠️  Error pages: ${errorPages.length}

## Missing Pages (${missingPages.length})
${missingPages.map((p) => `- ${p.url}\n  ${p.details}`).join('\n')}

## Error Pages (${errorPages.length})
${errorPages.map((p) => `- ${p.url}\n  ${p.details}`).join('\n')}

## All Existing Pages (${existingPages.length})
${existingPages.map((p) => `- ${p.url} → ${p.details}`).join('\n')}
`;

  // Write report to file
  const reportPath = path.join(process.cwd(), 'page-check-report.md');
  fs.writeFileSync(reportPath, report);

  console.log(`\n📊 Report generated: ${reportPath}`);
  console.log(`\n📋 SUMMARY:`);
  console.log(`   ✅ Existing: ${existingPages.length}`);
  console.log(`   ❌ Missing: ${missingPages.length}`);
  console.log(`   ⚠️  Errors: ${errorPages.length}`);
}

// Command line interface
if (require.main === module) {
  generatePageCheckReport();
}
