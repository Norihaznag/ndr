import { useState, FormEvent, ChangeEvent } from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || '212000000000';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="max-w-2xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-500">
            Démarrons votre projet ensemble
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 mb-16">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-3">
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-400 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-3">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-400 transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-3">
              Service
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-6 py-4 border border-gray-200 text-gray-900 focus:outline-none focus:border-gray-400 transition-colors bg-white"
              required
            >
              <option value="">Sélectionnez un service</option>
              <option value="management">Social Media Management</option>
              <option value="content">Content Creation</option>
              <option value="growth">Growth & Engagement</option>
              <option value="analytics">Analytics & Reporting</option>
              <option value="custom">Forfait Personnalisé</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-8 py-4 text-base font-medium hover:bg-blue-700 transition-colors"
          >
            Envoyer
          </button>
        </form>

        <div className="border-t border-gray-100 pt-16">
          <p className="text-center text-gray-500 mb-8">
            Ou contactez-nous directement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-gray-200 text-gray-900 hover:border-gray-400 transition-colors"
            >
              <MessageCircle size={20} />
              <span className="font-medium">WhatsApp</span>
            </a>
            <a
              href="https://instagram.com/ndrmanagement"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-gray-200 text-gray-900 hover:border-gray-400 transition-colors"
            >
              <Instagram size={20} />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
