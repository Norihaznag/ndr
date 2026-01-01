import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              NDR Management
            </h2>
            <p className="text-sm text-gray-600">
              Agence de marketing digital spécialisée dans la gestion des réseaux sociaux
            </p>
          </section>

          {/* Links Section */}
          <section aria-labelledby="footer-links-heading">
            <h3 id="footer-links-heading" className="text-sm font-semibold text-gray-900 mb-4">
              Navigation
            </h3>
            <nav className="space-y-2" aria-label="Footer navigation">
              <a href="#home" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Accueil
              </a>
              <a href="#services" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="#pricing" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Tarifs
              </a>
              <a href="#about" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                À Propos
              </a>
            </nav>
          </section>

          {/* Social Section */}
          <section aria-labelledby="footer-social-heading">
            <h3 id="footer-social-heading" className="text-sm font-semibold text-gray-900 mb-4">
              Nos Réseaux
            </h3>
            <div className="flex gap-4">
              <a
                href="https://wa.me/212000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                aria-label="Contactez-nous sur WhatsApp (ouvre dans une nouvelle fenêtre)"
              >
                <MessageCircle size={20} aria-hidden="true" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/ndrmanagement"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                aria-label="Suivez-nous sur Instagram (ouvre dans une nouvelle fenêtre)"
              >
                <Instagram size={20} aria-hidden="true" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
            </div>
          </section>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            © {currentYear} NDR Management. Tous droits réservés. | 
            <a href="/privacy" className="ml-2 hover:text-gray-900 transition-colors">Politique de Confidentialité</a> |
            <a href="/terms" className="ml-2 hover:text-gray-900 transition-colors">Conditions d'Utilisation</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
