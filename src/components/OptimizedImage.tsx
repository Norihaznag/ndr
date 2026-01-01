import { ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  webpSrc?: string;
  avifSrc?: string;
  lazy?: boolean;
}

/**
 * Optimized Image component with WebP/AVIF support and lazy loading
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  webpSrc,
  avifSrc,
  lazy = true,
  ...props
}: OptimizedImageProps) {
  return (
    <picture>
      {/* AVIF format (best compression) */}
      {avifSrc && <source srcSet={avifSrc} type="image/avif" />}

      {/* WebP format (good compression) */}
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}

      {/* Fallback to original format */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        {...props}
      />
    </picture>
  );
}

/**
 * Helper to generate responsive image URLs
 * Example: getImageUrl('/images/hero', 800) => '/images/hero-800w.webp'
 */
export function getImageUrl(
  basePath: string,
  width: number,
  format: 'webp' | 'avif' = 'webp'
): string {
  return `${basePath}-${width}w.${format}`;
}

/**
 * Generate responsive srcset string
 */
export function generateSrcSet(
  basePath: string,
  widths: number[] = [320, 640, 960, 1280],
  format: 'webp' | 'avif' = 'webp'
): string {
  return widths.map((width) => `${getImageUrl(basePath, width, format)} ${width}w`).join(', ');
}
