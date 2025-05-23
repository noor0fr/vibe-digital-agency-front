
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Gestion des réseaux sociaux",
    "Design graphique",
    "Campagnes publicitaires",
    "Marketing digital",
    "Création de contenu",
    "Sites web & E-commerce"
  ];

  const company = [
    "À propos",
    "Notre équipe",
    "Nos valeurs",
    "Carrières",
    "Blog",
    "Actualités"
  ];

  const legal = [
    "Mentions légales",
    "Politique de confidentialité",
    "Conditions générales",
    "Cookies",
    "RGPD"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-brand-400 mb-4">VibeAgency</h3>
              <p className="text-gray-300 leading-relaxed">
                Votre agence créative pour une communication digitale qui marque. 
                Nous transformons vos idées en succès mesurables.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} />
                <span>contact@vibeagency.fr</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} />
                <span>123 Avenue des Champs-Élysées, 75008 Paris</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-gray-800 hover:bg-brand-600 p-3 rounded-lg transition-colors">
                <Facebook size={18} />
              </button>
              <button className="bg-gray-800 hover:bg-brand-600 p-3 rounded-lg transition-colors">
                <Instagram size={18} />
              </button>
              <button className="bg-gray-800 hover:bg-brand-600 p-3 rounded-lg transition-colors">
                <Linkedin size={18} />
              </button>
              <button className="bg-gray-800 hover:bg-brand-600 p-3 rounded-lg transition-colors">
                <Twitter size={18} />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-brand-400 transition-colors text-left">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Entreprise</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-brand-400 transition-colors text-left">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Restez informé de nos dernières actualités et conseils marketing.
            </p>
            
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-brand-500 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 px-4 py-3 rounded-lg font-semibold transition-colors"
              >
                S'abonner
              </button>
            </form>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Légal</h5>
              <ul className="space-y-2">
                {legal.map((item, index) => (
                  <li key={index}>
                    <button className="text-gray-400 hover:text-brand-400 transition-colors text-sm text-left">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} VibeAgency. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Fait avec ❤️ à Paris</span>
              <span>•</span>
              <span>Agence certifiée Google Partner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
