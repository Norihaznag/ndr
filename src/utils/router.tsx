import { lazy, Suspense, ReactNode } from 'react';
import { updateMetaTags } from '../utils/seo';

// Lazy load page components
const HomePage = lazy(() => import('../pages/Home'));
const ServicesPage = lazy(() => import('../pages/Services'));
const PricingPage = lazy(() => import('../pages/Pricing'));
const AboutPage = lazy(() => import('../pages/About'));
const ContactPage = lazy(() => import('../pages/Contact'));

export interface PageConfig {
  component: ReactNode;
  title: string;
  description: string;
  keywords: string;
}

export const routes: Record<string, PageConfig> = {
  home: {
    component: <HomePage onNavigate={function (): void {}} />,
    title: 'NDR Management - Agence de Marketing Digital',
    description: 'Boostez votre présence sur les réseaux sociaux avec NDR Management. Services complets de gestion de réseaux sociaux.',
    keywords: 'marketing digital, réseaux sociaux, gestion réseaux, contenu créatif, engagement',
  },
  services: {
    component: <ServicesPage onNavigate={function (): void {}} />,
    title: 'Nos Services - NDR Management',
    description: 'Découvrez nos services de gestion de réseaux sociaux, création de contenu, analytics et plus.',
    keywords: 'services, gestion réseaux, création contenu, analytics, marketing',
  },
  pricing: {
    component: <PricingPage onNavigate={function (): void {}} />,
    title: 'Tarifs - NDR Management',
    description: 'Consultez nos tarifs transparents pour la gestion de vos réseaux sociaux.',
    keywords: 'tarifs, prix, plans, packages',
  },
  about: {
    component: <AboutPage onNavigate={function (): void {}} />,
    title: 'À Propos - NDR Management',
    description: 'Découvrez NDR Management, une agence spécialisée en marketing digital.',
    keywords: 'à propos, équipe, expérience, agence',
  },
  contact: {
    component: <ContactPage />,
    title: 'Contact - NDR Management',
    description: 'Contactez-nous pour discuter de votre projet de marketing digital.',
    keywords: 'contact, formulaire, email, assistance',
  },
};

/**
 * Update page meta tags based on route
 */
export function updatePageMeta(pageName: string): void {
  const page = routes[pageName];
  if (page) {
    updateMetaTags({
      title: page.title,
      description: page.description,
      keywords: page.keywords,
      canonical: `https://your-domain.com/#${pageName}`,
      ogType: 'website',
    });
  }
}

/**
 * Loading fallback component
 */
export const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-charcoal">
    <div className="animate-pulse">
      <div className="h-12 bg-gold rounded w-48 mb-4"></div>
      <div className="h-4 bg-gold rounded w-96"></div>
    </div>
  </div>
);

/**
 * Lazy load wrapper with Suspense
 */
export const LazyPageWrapper = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<PageLoader />}>
    {children}
  </Suspense>
);
