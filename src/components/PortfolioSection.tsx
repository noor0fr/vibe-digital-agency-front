
import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const projects = [
    {
      title: "Campagne Social Media - TechStart",
      category: "Réseaux Sociaux",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      description: "Stratégie complète sur Instagram et LinkedIn pour une startup tech, +200% d'engagement",
      tags: ["Instagram", "LinkedIn", "Content Strategy"],
      results: "+200% engagement, 50K followers"
    },
    {
      title: "Identité Visuelle - Restaurant Moderne",
      category: "Design",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop",
      description: "Création complète d'identité visuelle pour une chaîne de restaurants",
      tags: ["Logo", "Branding", "Print"],
      results: "15 restaurants équipés"
    },
    {
      title: "Campagne Google Ads - E-commerce",
      category: "Publicité",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      description: "Campagne de lancement produit avec ROI de 400%",
      tags: ["Google Ads", "E-commerce", "ROI"],
      results: "ROI 400%, 1M€ de CA généré"
    },
    {
      title: "Site E-commerce - Mode & Lifestyle",
      category: "Web",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      description: "Développement d'une boutique en ligne responsive avec paiement sécurisé",
      tags: ["E-commerce", "Responsive", "UX/UI"],
      results: "Conversion +150%"
    },
    {
      title: "Content Creation - Marque de Sport",
      category: "Contenu",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      description: "Production de contenu photo/vidéo pour campagne multi-canal",
      tags: ["Photo", "Vidéo", "Sport"],
      results: "20M vues sur TikTok"
    },
    {
      title: "Refonte Site Corporate - Cabinet d'Avocats",
      category: "Web",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      description: "Refonte complète avec focus sur l'expérience utilisateur et le SEO",
      tags: ["Corporate", "SEO", "UX"],
      results: "Trafic +300%, Leads +180%"
    }
  ];

  const categories = ['Tous', 'Réseaux Sociaux', 'Design', 'Publicité', 'Web', 'Contenu'];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-brand-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Découvrez quelques-unes de nos réalisations qui ont propulsé nos clients vers le succès.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-brand-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-brand-50 hover:text-brand-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                      <Eye className="h-5 w-5 text-white" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-brand-600">
                    Résultats: {project.results}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-8">
            Vous voulez voir plus de nos réalisations ?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 hover:shadow-lg"
          >
            Parlons de votre projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
