import { Target } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="bg-charcoal pt-32 pb-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-semibold text-soft-white tracking-tight mb-6 animate-slideDown">
            À Propos
          </h1>
        </div>

        <div className="flex flex-col items-center text-center space-y-16">
          <div className="w-32 h-32 bg-gradient-to-br from-gold to-bronze rounded-lg flex items-center justify-center transform transition-all duration-700 hover:rotate-12 hover:scale-125 shadow-lg animate-fadeIn">
            <Target size={64} className="text-charcoal" strokeWidth={1.5} />
          </div>

          <div className="max-w-2xl space-y-8">
            <p className="text-2xl text-soft-white leading-relaxed font-semibold animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              NDR Management est une agence de marketing digital spécialisée dans la gestion et la croissance de votre présence sur les réseaux sociaux.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              Nous aidons les marques et les créateurs à développer leur audience de manière authentique et professionnelle avec des stratégies sur mesure et un suivi personnalisé.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="relative inline-block group animate-fadeIn"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-bronze rounded-lg blur-lg group-hover:blur-xl opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <button className="relative px-12 py-4 text-base font-semibold bg-gold text-charcoal rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Travaillons Ensemble
            </button>
          </button>
        </div>
      </div>
    </div>
  );
}
