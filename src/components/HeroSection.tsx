
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
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-vibrant-purple/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-vibrant-lavender/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-vibrant-lime/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Votre <span className="bg-gradient-to-r from-vibrant-lime to-vibrant-purple bg-clip-text text-transparent">agence créative</span> pour une communication qui marque
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
                Nous transformons vos idées en campagnes percutantes. Design, réseaux sociaux, publicité - nous créons l'expérience qui connecte votre marque à votre audience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg" 
                className="bg-gradient-to-r from-vibrant-purple to-vibrant-lavender hover:from-vibrant-purple/80 hover:to-vibrant-lavender/80 text-white group border-0"
              >
                Découvrir nos services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                variant="outline" 
                size="lg" 
                className="border-2 border-vibrant-lime text-vibrant-lime hover:bg-vibrant-lime hover:text-black group"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Voir nos réalisations
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-vibrant-lime">150+</div>
                <div className="text-sm text-white/70">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vibrant-purple">98%</div>
                <div className="text-sm text-white/70">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vibrant-lavender">5+</div>
                <div className="text-sm text-white/70">Années d'expérience</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative w-full h-[400px] rounded-2xl shadow-2xl overflow-hidden border-2 border-vibrant-purple/30 bg-gradient-to-br from-vibrant-purple/20 to-vibrant-lavender/20">
              <div className="absolute inset-0 bg-gradient-to-r from-vibrant-lime/10 to-vibrant-purple/10 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-vibrant-lime to-vibrant-purple rounded-full mx-auto mb-4 animate-bounce opacity-80"></div>
                <h3 className="text-2xl font-bold text-white mb-2">Créativité</h3>
                <p className="text-vibrant-lime">en mouvement</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-vibrant-purple/20 z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-vibrant-lime rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-vibrant-purple">En ligne maintenant</span>
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
