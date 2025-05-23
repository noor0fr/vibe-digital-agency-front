
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-brand-600">
            VibeAgency
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-brand-600 transition-colors font-medium"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-brand-600 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-brand-600 transition-colors font-medium"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-brand-600 transition-colors font-medium"
            >
              Équipe
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-brand-600 transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-brand-600 hover:bg-brand-700 text-white"
            >
              Devis gratuit
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-brand-600 transition-colors font-medium"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-brand-600 transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left text-gray-700 hover:text-brand-600 transition-colors font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left text-gray-700 hover:text-brand-600 transition-colors font-medium"
              >
                Équipe
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-brand-600 transition-colors font-medium"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-brand-600 hover:bg-brand-700 text-white w-full"
              >
                Devis gratuit
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
