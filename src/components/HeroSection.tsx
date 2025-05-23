
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-brand-50 via-white to-brand-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Votre <span className="text-brand-600">agence créative</span> pour une communication qui marque
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Nous transformons vos idées en campagnes percutantes. Design, réseaux sociaux, publicité - nous créons l'expérience qui connecte votre marque à votre audience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg" 
                className="bg-brand-600 hover:bg-brand-700 text-white group"
              >
                Découvrir nos services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                variant="outline" 
                size="lg" 
                className="border-brand-600 text-brand-600 hover:bg-brand-50 group"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Voir nos réalisations
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600">150+</div>
                <div className="text-sm text-gray-600">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600">98%</div>
                <div className="text-sm text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-600">5+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&crop=top"
                alt="Équipe créative travaillant sur des projets" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">En ligne maintenant</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">Prêts à transformer votre vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
