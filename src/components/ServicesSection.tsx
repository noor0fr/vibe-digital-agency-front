
import React from 'react';
import { Share2, Palette, Megaphone, TrendingUp, Camera, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Share2,
      title: "Gestion des Réseaux Sociaux",
      description: "Stratégie complète pour Facebook, Instagram, LinkedIn, TikTok. Création de contenu, community management et analyse des performances.",
      features: ["Stratégie de contenu", "Community management", "Publicité sociale", "Analytics et reporting"]
    },
    {
      icon: Palette,
      title: "Design Graphique",
      description: "Identité visuelle, logos, supports print et digital. Nous créons des designs qui reflètent parfaitement votre marque.",
      features: ["Logo et identité visuelle", "Supports print", "Design web", "Packaging"]
    },
    {
      icon: Megaphone,
      title: "Campagnes Publicitaires",
      description: "Publicité Google Ads, Facebook Ads, display. Maximisez votre ROI avec des campagnes ciblées et optimisées.",
      features: ["Google Ads", "Facebook & Instagram Ads", "Display advertising", "Retargeting"]
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "SEO, email marketing, marketing automation. Une approche data-driven pour booster votre croissance.",
      features: ["SEO & référencement", "Email marketing", "Marketing automation", "Analytics"]
    },
    {
      icon: Camera,
      title: "Création de Contenu",
      description: "Photo, vidéo, motion design. Du shooting produit aux vidéos corporates, nous capturons l'essence de votre marque.",
      features: ["Photographie", "Vidéo corporate", "Motion design", "Contenu web"]
    },
    {
      icon: Monitor,
      title: "Sites Web & E-commerce",
      description: "Sites vitrine, e-commerce, applications web. Solutions sur-mesure avec design responsive et performance optimale.",
      features: ["Sites vitrine", "E-commerce", "Applications web", "Maintenance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-brand-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la stratégie à l'exécution, nous couvrons tous vos besoins en communication digitale pour propulser votre marque vers le succès.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center group-hover:bg-brand-600 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-brand-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-brand-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Besoin d'un service personnalisé ? Parlons de votre projet !
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 hover:shadow-lg"
          >
            Demander un devis gratuit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
