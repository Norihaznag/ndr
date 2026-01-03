import { TrendingUp, Users, BarChart3, Sparkles, MessageCircle, Heart, Share2 } from 'lucide-react';

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

  // Animated social interaction cards
  const interactions = [
    { icon: Heart, label: 'Engagement', color: 'from-pink-500 to-red-500' },
    { icon: MessageCircle, label: 'Commentaires', color: 'from-blue-500 to-cyan-500' },
    { icon: Share2, label: 'Partages', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="bg-charcoal">
      {/* Hero Section with Animations */}
      <section className="relative pt-40 pb-32 px-6 lg:px-12 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold opacity-5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gold opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Main heading with gradient animation */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-semibold text-soft-white tracking-tight leading-tight animate-slideDown">
                Boostez votre présence
              </h1>
              <h1 className="text-5xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold via-warm-gray to-gold tracking-tight leading-tight mt-2 animate-slideDown" style={{ animationDelay: '0.2s' }}>
                sur les réseaux sociaux
              </h1>
            </div>
          </div>

          {/* Animated subheading */}
          <p className="text-lg md:text-xl text-warm-gray mb-12 max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            Une agence de marketing digital qui transforme votre présence en ligne en succès measurable
          </p>

          {/* Floating interaction elements */}
          <div className="flex justify-center gap-8 mb-16 flex-wrap">
            {interactions.map((interaction, index) => (
              <div
                key={interaction.label}
                className={`animate-bounce flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${interaction.color} rounded-full text-charcoal font-semibold shadow-lg`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <interaction.icon size={20} />
                <span className="hidden sm:inline">{interaction.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button with hover animation */}
          <button
            onClick={() => onNavigate('contact')}
            className="relative inline-block group animate-fadeIn"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-bronze rounded-lg blur-lg group-hover:blur-xl opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <button className="relative px-12 py-4 text-base font-semibold bg-gold text-charcoal rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Commencer Maintenant
            </button>
          </button>

          {/* Animated scroll indicator */}
          <div className="mt-16 animate-bounce text-gold">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-graphite">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {services.map((service) => (
              <div key={service.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold mb-6">
                  <service.icon size={32} className="text-charcoal" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium text-soft-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-soft-white mb-8 tracking-tight">
            Prêt à transformer votre présence digitale ?
          </h2>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gold text-charcoal px-10 py-4 text-base font-semibold hover:bg-bronze transition-colors"
          >
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
}
