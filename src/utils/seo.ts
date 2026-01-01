/**
 * SEO and Meta Tags Management Utility
 * Handles dynamic meta tags for improved SEO
 */

interface SEOConfig {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  canonical?: string;
  keywords?: string;
}

/**
 * Update document meta tags for SEO
 */
export function updateMetaTags(config: SEOConfig): void {
  // Update title
  document.title = config.title;

  // Update or create meta description
  let descMeta = document.querySelector('meta[name="description"]');
  if (!descMeta) {
    descMeta = document.createElement('meta');
    descMeta.setAttribute('name', 'description');
    document.head.appendChild(descMeta);
  }
  descMeta.setAttribute('content', config.description);

  // Update or create canonical link
  if (config.canonical) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', config.canonical);
  }

  // Open Graph tags
  const ogMetas = {
    'og:title': config.title,
    'og:description': config.description,
    'og:image': config.ogImage || 'https://bolt.new/static/og_default.png',
    'og:type': config.ogType || 'website',
    'og:url': config.ogUrl || window.location.href,
  };

  Object.entries(ogMetas).forEach(([property, content]) => {
    let meta = document.querySelector(`meta[property="${property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  });

  // Twitter tags
  const twitterMetas = {
    'twitter:card': config.twitterCard || 'summary_large_image',
    'twitter:title': config.title,
    'twitter:description': config.description,
    'twitter:image': config.ogImage || 'https://bolt.new/static/og_default.png',
  };

  Object.entries(twitterMetas).forEach(([name, content]) => {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  });

  // Keywords
  if (config.keywords) {
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', config.keywords);
  }
}

/**
 * Preload critical resources for performance
 */
export function preloadResources(): void {
  // Preload fonts
  const fonts = [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
      as: 'style',
    },
  ];

  fonts.forEach(({ href, as }) => {
    let link = document.querySelector(`link[href="${href}"]`);
    if (!link) {
      link = document.createElement('link');
      link.rel = 'preload';
      link.as = as;
      link.href = href;
      document.head.appendChild(link);
    }
  });
}

/**
 * Lazy load images with native loading attribute
 */
export function initLazyLoading(): void {
  const images = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            if (img.dataset.srcset) {
              img.srcset = img.dataset.srcset;
            }
          }
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

/**
 * Check and report accessibility issues
 */
export function checkA11y(): void {
  const issues: string[] = [];

  // Check for missing alt texts
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  if (imagesWithoutAlt.length > 0) {
    issues.push(`Found ${imagesWithoutAlt.length} images without alt text`);
  }

  // Check for missing labels
  const inputsWithoutLabel = document.querySelectorAll('input:not([aria-label]):not([id])');
  if (inputsWithoutLabel.length > 0) {
    issues.push(`Found ${inputsWithoutLabel.length} inputs without labels`);
  }

  if (issues.length > 0 && process.env.NODE_ENV !== 'production') {
    console.warn('Accessibility issues found:', issues);
  }
}
