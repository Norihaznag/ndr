import { useState, useEffect, Suspense, lazy } from 'react';
import { updateMetaTags, preloadResources, initLazyLoading } from './utils/seo';
import { updatePageMeta, PageLoader } from './utils/router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load page components for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Preload critical resources
    preloadResources();

    // Initialize lazy loading for images
    initLazyLoading();

    // Get page from URL hash
    const hash = window.location.hash.slice(1) || 'home';
    setCurrentPage(hash);

    // Update meta tags for current page
    updatePageMeta(hash);
  }, []);

  // Update meta tags when page changes
  useEffect(() => {
    updatePageMeta(currentPage);
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <Services onNavigate={handleNavigate} />;
      case 'pricing':
        return <Pricing onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      {/* Semantic HTML structure for accessibility */}
      <div className="min-h-screen bg-white flex flex-col">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        <Suspense fallback={<PageLoader />}>
          <main id="main-content" className="flex-1 mt-20">
            {renderPage()}
          </main>
        </Suspense>
        <Footer />
      </div>

      {/* No-script fallback for accessibility */}
      <noscript>
        <div className="p-6 text-center bg-yellow-50 border border-yellow-200">
          <p className="text-yellow-800">
            Cette application nécessite JavaScript pour fonctionner correctement.
          </p>
        </div>
      </noscript>
    </>
  );
}

export default App;
