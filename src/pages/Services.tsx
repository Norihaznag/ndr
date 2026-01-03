import { Users, Sparkles, TrendingUp, BarChart3 } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Gestion complète de vos réseaux sociaux avec stratégie et cohérence'
    },
    {
      icon: Sparkles,
      title: 'Content Creation',
      description: 'Production de contenu visuel et vidéo professionnel et engageant'
    },
    {
      icon: TrendingUp,
      title: 'Growth & Engagement',
      description: 'Stratégies de croissance organique et développement de communauté'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Suivi des performances et rapports détaillés de vos campagnes'
    }
  ];

  return (
    <div className="bg-charcoal pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-semibold text-soft-white tracking-tight mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Des solutions complètes pour votre présence digitale
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-16 items-center`}
            >
              <div className="flex-1 flex justify-center">
                <div className="w-32 h-32 bg-graphite flex items-center justify-center">
                  <service.icon size={64} className="text-gold" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-semibold text-soft-white mb-4 tracking-tight">
                  {service.title}
                </h2>
                <p className="text-lg text-warm-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <button
            onClick={() => onNavigate('pricing')}
            className="bg-gold text-charcoal px-10 py-4 text-base font-semibold hover:bg-bronze transition-colors"
          >
            Voir les Tarifs
          </button>
        </div>
      </div>
    </div>
  );
}
