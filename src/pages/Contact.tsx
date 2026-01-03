import { useState, FormEvent, ChangeEvent } from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || '+212777306486';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.service) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    
    // Create a prefilled WhatsApp message
    const serviceLabel = {
      management: 'Social Media Management',
      content: 'Content Creation',
      growth: 'Growth & Engagement',
      analytics: 'Analytics & Reporting',
      custom: 'Forfait Personnalisé'
    }[formData.service] || formData.service;
    
    const message = `Bonjour, je suis intéressé par vos services.\n\nNom: ${formData.name}\nEmail: ${formData.email}\nService: ${serviceLabel}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      service: ''
    });
  };

  return (
    <div className="bg-charcoal pt-32 pb-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="max-w-2xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-semibold text-soft-white tracking-tight mb-6 animate-slideDown">
            Contact
          </h1>
          <p className="text-xl text-warm-gray animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Démarrons votre projet ensemble
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 mb-16 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-soft-white mb-3">
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 border border-graphite bg-graphite text-soft-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-50 transition-all duration-300 rounded-lg group-hover:border-gold"
              required
            />
          </div>

          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-soft-white mb-3">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 border border-graphite bg-graphite text-soft-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-50 transition-all duration-300 rounded-lg group-hover:border-gold"
              required
            />
          </div>

          <div className="group">
            <label htmlFor="service" className="block text-sm font-medium text-soft-white mb-3">
              Service
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-6 py-4 border border-graphite bg-graphite text-soft-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-50 transition-all duration-300 rounded-lg group-hover:border-gold"
              required
            >
              <option value="" className="bg-charcoal">Sélectionnez un service</option>
              <option value="management" className="bg-charcoal">Social Media Management</option>
              <option value="content" className="bg-charcoal">Content Creation</option>
              <option value="growth" className="bg-charcoal">Growth & Engagement</option>
              <option value="analytics" className="bg-charcoal">Analytics & Reporting</option>
              <option value="custom" className="bg-charcoal">Forfait Personnalisé</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full relative inline-block group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-bronze rounded-lg blur-lg group-hover:blur-xl opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <button className="relative w-full bg-gold text-charcoal px-8 py-4 text-base font-semibold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Envoyer
            </button>
          </button>
        </form>

        <div className="border-t border-graphite pt-16 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
          <p className="text-center text-warm-gray mb-8">
            Ou contactez-nous directement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 border border-gold text-soft-white rounded-lg hover:bg-graphite transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle size={20} className="group-hover:text-gold transition-colors" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <a
              href="https://instagram.com/ndrmanagement1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-8 py-4 border border-gold text-soft-white rounded-lg hover:bg-graphite transition-all duration-300 transform hover:scale-105"
            >
              <Instagram size={20} className="group-hover:text-gold transition-colors" />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
