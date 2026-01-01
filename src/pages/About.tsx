import { Target } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight mb-6">
            À Propos
          </h1>
        </div>

        <div className="flex flex-col items-center text-center space-y-16">
          <div className="w-32 h-32 bg-gray-50 flex items-center justify-center">
            <Target size={64} className="text-gray-900" strokeWidth={1.5} />
          </div>

          <div className="max-w-2xl">
            <p className="text-2xl text-gray-900 mb-8 leading-relaxed">
              NDR Management est une agence de marketing digital spécialisée dans la gestion et la croissance de votre présence sur les réseaux sociaux.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Nous aidons les marques et les créateurs à développer leur audience de manière authentique et professionnelle avec des stratégies sur mesure et un suivi personnalisé.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-10 py-4 text-base font-medium hover:bg-blue-700 transition-colors"
          >
            Travaillons Ensemble
          </button>
        </div>
      </div>
    </div>
  );
}
