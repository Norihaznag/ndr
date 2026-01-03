interface PricingProps {
  onNavigate: (page: string) => void;
}

export default function Pricing({ onNavigate }: PricingProps) {
  const packages = [
    {
      name: '10K Followers',
      price: '1000 DH',
      description: 'Croissance garantie de votre audience'
    },
    {
      name: 'Monthly Management',
      price: '3000 DH',
      description: 'Gestion complète mensuelle'
    },
    {
      name: 'Video Content',
      price: '3000 DH',
      description: 'Production vidéo professionnelle'
    },
    {
      name: 'Analytics Tracking',
      price: '500 DH',
      description: 'Suivi et reporting mensuel'
    }
  ];

  return (
    <div className="bg-charcoal pt-32 pb-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-semibold text-soft-white tracking-tight mb-6 animate-slideDown">
            Tarifs
          </h1>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Des forfaits transparents adaptés à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Highlight border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-bronze opacity-0 group-hover:opacity-100 rounded-lg blur-lg transition-all duration-300"></div>
              
              <div className="relative border border-gold p-12 bg-graphite group-hover:bg-charcoal rounded-lg transition-all duration-300 transform group-hover:scale-105">
                <h3 className="text-2xl font-semibold text-soft-white mb-4 group-hover:text-gold transition-colors">
                  {pkg.name}
                </h3>
                <p className="text-sm text-warm-gray mb-8">
                  {pkg.description}
                </p>
                <div className="text-5xl font-bold text-gold mb-8 group-hover:scale-110 transition-transform">
                  {pkg.price}
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full bg-gold text-charcoal px-8 py-4 text-base font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Choisir
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-warm-gray mb-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            Besoin d'un forfait personnalisé ?
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="relative inline-block group animate-fadeIn"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-bronze rounded-lg blur-lg group-hover:blur-xl opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <button className="relative px-12 py-4 text-base font-semibold bg-gold text-charcoal rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Contactez-nous
            </button>
          </button>
        </div>
      </div>
    </div>
  );
}
