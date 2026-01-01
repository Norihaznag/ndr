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
    <div className="bg-white pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight mb-6">
            Tarifs
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Des forfaits transparents adaptés à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="border border-gray-200 p-12 bg-white hover:border-gray-300 transition-colors"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {pkg.name}
              </h3>
              <p className="text-sm text-gray-500 mb-8">
                {pkg.description}
              </p>
              <div className="text-4xl font-semibold text-gray-900 mb-8">
                {pkg.price}
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-blue-600 text-white px-8 py-4 text-base font-medium hover:bg-blue-700 transition-colors"
              >
                Choisir
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-gray-500 mb-8">
            Besoin d'un forfait personnalisé ?
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-gray-900 text-white px-10 py-4 text-base font-medium hover:bg-gray-800 transition-colors"
          >
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
}
