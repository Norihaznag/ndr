import { TrendingUp, Users, BarChart3, Sparkles } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Users,
      title: 'Gestion des Réseaux Sociaux',
      description: 'Une présence professionnelle et cohérente'
    },
    {
      icon: Sparkles,
      title: 'Création de Contenu',
      description: 'Contenu visuel et vidéo de qualité'
    },
    {
      icon: TrendingUp,
      title: 'Croissance & Engagement',
      description: 'Développez votre audience naturellement'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Suivez vos performances en temps réel'
    }
  ];

  return (
    <div className="bg-white">
      <section className="pt-40 pb-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight leading-tight mb-8">
            Boostez votre présence sur les réseaux sociaux
          </h1>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
            Une agence de marketing digital qui transforme votre présence en ligne
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-10 py-4 text-base font-medium hover:bg-blue-700 transition-colors"
          >
            Commencer
          </button>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {services.map((service) => (
              <div key={service.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white mb-6">
                  <service.icon size={32} className="text-gray-900" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8 tracking-tight">
            Prêt à transformer votre présence digitale ?
          </h2>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-10 py-4 text-base font-medium hover:bg-blue-700 transition-colors"
          >
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
}
