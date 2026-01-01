# NDR Management - Vite React Project

Optimized for Lighthouse 100 with Performance, SEO, Accessibility, Best Practices, and PWA support.

## Quick Start

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run typecheck` - Type checking
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # Page components
├── utils/            # Utility functions (SEO, routing)
├── App.tsx           # Main app component
├── main.tsx          # Entry point
└── index.css         # Global styles

public/
├── manifest.json     # PWA manifest
├── sw.js            # Service Worker
├── offline.html     # Offline fallback
└── .htaccess        # Apache server config
```

## Features

✅ Route-based code splitting  
✅ Image lazy loading  
✅ Dynamic meta tags  
✅ WCAG AA+ accessibility  
✅ Security headers  
✅ PWA support  
✅ Service Worker caching  

## Configuration

Update your domain in:
- `.env` - Environment variables
- `index.html` - Meta tags
- `src/utils/router.tsx` - Canonical URLs

## Deployment

Build for production:
```bash
npm run build
```

This generates:
- Optimized bundle in `dist/`
- Compressed assets (Brotli)
- Auto-generated sitemap.xml
- PWA files (manifest, service worker)
- Offline fallback page

Deploy the `dist/` folder to your hosting with HTTPS enabled.
