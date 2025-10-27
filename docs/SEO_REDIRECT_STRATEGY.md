# SEO Redirect Strategy for K2AIHub

## Overview

This document explains the redirect strategy implemented for migrating content from `k2aihub.com` to `edu.k2aihub.com`.

## Current URL Structure

### k2aihub.com (Main Landing Page)

- **Hosted Content:**
  - `/` - Main landing page showcasing all K2AI products
  - `/city` - Interactive Vietnam geographical map (34 provinces)
  - `/city/[slug]` - Individual city pages
  - `/region` - Interactive Vietnam geographical regions (9)
  - `/region/[slug]` - Individual city regions

### edu.k2aihub.com (Education Platform)

- **Hosted Content:**
  - `/learning` - Learning modules
  - `/games` - Educational games
  - `/blog` - Blog posts
  - `/ai` - AI tools and categories
  - `/feedback` - Feedback form

## Redirect Implementation

### Client-Side Redirects (GitHub Pages)

Since k2aihub.com is deployed on GitHub Pages (static hosting), we cannot use server-side 301 redirects. Instead, we implement:

1. **JavaScript Redirect** - Instant redirect via `window.location.replace()`
2. **Meta Refresh** - HTML meta tag for browsers with JavaScript disabled
3. **Canonical Link** - SEO signal pointing to the new URL
4. **Robots.txt** - Prevents indexing of redirect pages

### Redirect Pages Created

The following redirect pages are created in `/app` with catch-all routes:

- `/learning/page.tsx` + `/learning/[...slug]/page.tsx` → redirects to `https://edu.k2aihub.com/learning`
- `/practice/page.tsx` + `/practice/[...slug]/page.tsx` → redirects to `https://edu.k2aihub.com/games`
- `/blog/page.tsx` + `/blog/[...slug]/page.tsx` → redirects to `https://edu.k2aihub.com/blog`
- `/ai/page.tsx` + `/ai/[...slug]/page.tsx` → redirects to `https://edu.k2aihub.com/ai`
- `/feedback/page.tsx` → redirects to `https://edu.k2aihub.com/feedback`

Each redirect page:

- Uses the reusable `<Redirect />` component
- Sets `robots: { index: false, follow: false }` in metadata
- Preserves URL path segments (e.g., `/learning/module-1` → `https://edu.k2aihub.com/learning/module-1`)

## SEO Considerations

### Link Equity Transfer

**Client-side redirects (JavaScript + Meta Refresh):**

- Google can follow JavaScript redirects and may pass link equity
- Not as strong as server-side 301 redirects (~70-85% link equity vs 90-99%)
- Meta refresh provides fallback for search engines that don't execute JavaScript

### Timeline for Redirect Retention

**Recommended: Keep redirects for 12-18 months**

Reasons:

1. Allow Google to fully recrawl and reindex all URLs
2. Give time for external backlinks to be updated
3. Ensure users with bookmarks find the new location
4. Monitor traffic patterns before removing

### Monitoring Checklist

- [ ] Submit both sitemaps to Google Search Console
  - `https://k2aihub.com/sitemap.xml` (landing + Vietnamese Map app: city & region pages)
  - `https://edu.k2aihub.com/sitemap.xml` (all education content)
- [ ] Set up Google Search Console for both domains

  - Verify ownership
  - Monitor crawl errors
  - Check index coverage

- [ ] Request re-indexing in Google Search Console

  - Submit old URLs for crawling
  - Monitor redirect detection

- [ ] Track in Google Analytics
  - Monitor referral traffic from k2aihub.com → edu.k2aihub.com
  - Track 404 errors
  - Monitor bounce rates on redirect pages

### Performance Impact

- **Page Load**: Redirect happens instantly (<50ms)
- **User Experience**: Loading indicator with manual link fallback
- **SEO**: Canonical links and meta tags signal the correct URL

## Domain Hosting Alternative

If you decide to host on Domain instead of GitHub Pages, you can implement true server-side 301 redirects:

### Option 1: .htaccess (Apache)

Create `.htaccess` file in the root directory:

```apache
# 301 Permanent Redirects to edu.k2aihub.com
<IfModule mod_rewrite.c>
    RewriteEngine On

    # Redirect learning routes
    RewriteRule ^learning(.*)$ https://edu.k2aihub.com/learning$1 [R=301,L]

    # Redirect games routes
    RewriteRule ^games(.*)$ https://edu.k2aihub.com/games$1 [R=301,L]

    # Redirect blog routes
    RewriteRule ^blog(.*)$ https://edu.k2aihub.com/blog$1 [R=301,L]

    # Redirect AI routes
    RewriteRule ^ai(.*)$ https://edu.k2aihub.com/ai$1 [R=301,L]

    # Redirect region routes
    RewriteRule ^region(.*)$ https://edu.k2aihub.com/region$1 [R=301,L]

    # Redirect feedback
    RewriteRule ^feedback$ https://edu.k2aihub.com/feedback [R=301,L]
</IfModule>
```

### Option 2: Domain Control Panel

1. Log in to Domain Panel
2. Navigate to **Domains** → **Manage Domains**
3. Click **Edit** next to k2aihub.com
4. Use "Redirect" option to set up 301 redirects
5. Add wildcard redirects for each path

### Option 3: Next.js Server Deployment

Deploy k2aihub.com on Domain with Node.js support:

1. Remove `output: 'export'` from `next.config.ts`
2. Uncomment the `redirects()` function
3. Deploy with `npm run build && npm run start`
4. Configure Node.js app in Domain panel

**Advantages of Server-Side 301 Redirects:**

- ✅ Passes 90-99% of link equity (PageRank)
- ✅ Faster redirect (no JavaScript execution needed)
- ✅ Works for all bots and crawlers
- ✅ Better user experience

**Comparison:**

| Feature     | Client-Side (GitHub Pages) | Server-Side (Domain)  |
| ----------- | -------------------------- | --------------------- |
| Link Equity | ~70-85%                    | ~90-99%               |
| Speed       | 50-200ms                   | <10ms                 |
| Bot Support | Most modern bots           | All bots              |
| Cost        | Free (GitHub Pages)        | ~$10-20/month         |
| Maintenance | Update HTML files          | Update .htaccess once |

## Current Implementation

✅ Implemented client-side redirects for GitHub Pages deployment
✅ Created sitemap.xml with only k2aihub.com content
✅ Added robots.txt to prevent indexing redirect pages
✅ Set canonical links pointing to edu.k2aihub.com
✅ Added meta refresh for JavaScript-disabled browsers

## Next Steps

1. **Deploy to GitHub Pages** - Push changes and verify redirects work
2. **Submit Sitemaps** - Add both sitemaps to Google Search Console
3. **Monitor** - Check Google Search Console for crawl errors weekly
4. **Update External Links** - Contact high-value backlink sources to update URLs
5. **Evaluate After 3 Months** - Consider moving to Domain for true 301 redirects if needed

## Additional Resources

- [Google's Guide to Site Moves](https://developers.google.com/search/docs/advanced/crawling/site-move-with-url-changes)
- [Meta Refresh vs 301 Redirects](https://moz.com/blog/301-redirection-rules-for-seo)
- [Next.js Redirects Documentation](https://nextjs.org/docs/app/api-reference/next-config-js/redirects)

---

Last Updated: October 26, 2025
