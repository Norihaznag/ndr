#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const domain = 'https://your-domain.com';
const routes = ['', 'services', 'pricing', 'about', 'contact'];

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes
  .map((route) => {
    const url = route ? `${domain}/#${route}` : domain;
    const priority = route === '' ? '1.0' : '0.8';
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, '../dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Write sitemap.xml
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log('✓ sitemap.xml generated');

// Generate robots.txt
const robots = `# Robots.txt for NDR Management
User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/

# Sitemap location
Sitemap: ${domain}/sitemap.xml

# Crawl delay
Crawl-delay: 1

# Specific crawler rules
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Block AI crawlers
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: CCBot
User-agent: anthropic-ai
User-agent: Claude-Web
Disallow: /
`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robots);
console.log('✓ robots.txt generated');

console.log(`✓ SEO files generated in ${distDir}`);
