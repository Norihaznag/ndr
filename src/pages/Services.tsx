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
    <div className="bg-charcoal pt-32 pb-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-gold opacity-5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gold opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-semibold text-soft-white tracking-tight mb-6 animate-slideDown">
            Nos Services
          </h1>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Des solutions complètes pour votre présence digitale
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-16 items-center group animate-fadeIn`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-1 flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-gold to-bronze rounded-lg flex items-center justify-center transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 shadow-lg">
                  <service.icon size={64} className="text-charcoal group-hover:animate-spin" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-semibold text-soft-white mb-4 tracking-tight group-hover:text-gold transition-colors">
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
            className="relative inline-block group animate-fadeIn"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-bronze rounded-lg blur-lg group-hover:blur-xl opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <button className="relative px-12 py-4 text-base font-semibold bg-gold text-charcoal rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Voir les Tarifs
            </button>
          </button>
        </div>
      </div>
    </div>
  );
}
