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
    <div className="bg-charcoal pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-semibold text-soft-white tracking-tight mb-6">
            Tarifs
          </h1>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Des forfaits transparents adaptés à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="border border-gold p-12 bg-graphite hover:border-soft-white transition-colors"
            >
              <h3 className="text-2xl font-semibold text-soft-white mb-4">
                {pkg.name}
              </h3>
              <p className="text-sm text-warm-gray mb-8">
                {pkg.description}
              </p>
              <div className="text-4xl font-semibold text-gold mb-8">
                {pkg.price}
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-gold text-charcoal px-8 py-4 text-base font-semibold hover:bg-bronze transition-colors"
              >
                Choisir
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-warm-gray mb-8">
            Besoin d'un forfait personnalisé ?
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gold text-charcoal px-10 py-4 text-base font-semibold hover:bg-bronze transition-colors"
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
}
