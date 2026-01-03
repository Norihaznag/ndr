import { useState, useEffect } from 'react';
import { updateMetaTags, preloadResources, initLazyLoading } from './utils/seo';
import { updatePageMeta } from './utils/router';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';

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
      <div className="min-h-screen bg-charcoal text-soft-white flex flex-col">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        <main id="main-content" className="flex-1 mt-20">
          {renderPage()}
        </main>
        <Footer />
      </div>

      {/* No-script fallback for accessibility */}
      <noscript>
        <div className="p-6 text-center bg-bronze text-soft-white border border-gold">
          <p>
            Cette application nécessite JavaScript pour fonctionner correctement.
          </p>
        </div>
      </noscript>
    </>
  );
}

export default App;
