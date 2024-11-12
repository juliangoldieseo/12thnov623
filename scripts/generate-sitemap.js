import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://bestseocalculators.com';

// List all calculator routes
const routes = [
  '/',
  '/seo-calculator',
  '/seo-roi-calculator',
  '/international-seo-roi-calculator',
  '/seo-cost-calculator',
  '/seo-budget-calculator',
  '/seo-score-calculator',
  '/seo-rank-calculator',
  '/website-seo-calculator',
  '/seo-cost-calculator-tool',
  '/seo-value-calculator',
  '/spanish-seo-budget-calculator',
  '/seo-goal-setting-calculator',
  '/share-of-voice-seo-calculator',
  '/google-seo-calculator',
  '/seo-conversion-rate-calculator',
  '/seo-keyword-profit-calculator',
  '/calculator-seo',
  '/lsi-seo-calculator',
  '/saas-seo-roi-calculator',
  '/seo-traffic-calculator'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${BASE_URL}${route}</loc>
      <changefreq>weekly</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    </url>
  `).join('')}
</urlset>`;

// Ensure the public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);