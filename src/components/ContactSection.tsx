
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: "+33 1 23 45 67 89",
      subDetails: "Lun-Ven 9h-18h"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@vibeagency.fr",
      subDetails: "Réponse sous 2h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: "123 Avenue des Champs-Élysées",
      subDetails: "75008 Paris, France"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: "Lun-Ven: 9h-18h",
      subDetails: "Sam: 10h-16h"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactez-<span className="text-brand-600">nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à propulser votre marque ? Parlons de votre projet et découvrons ensemble comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Restons en contact</h3>
              <p className="text-gray-600 mb-8">
                Notre équipe est à votre disposition pour discuter de vos besoins et vous proposer des solutions sur-mesure.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-brand-100 p-3 rounded-lg">
                        <info.icon className="h-5 w-5 text-brand-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-600 text-sm">{info.details}</p>
                        <p className="text-gray-500 text-xs mt-1">{info.subDetails}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Section */}
            <Card className="bg-brand-600 border-0 text-white">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Devis gratuit</h4>
                <p className="text-brand-100 text-sm mb-4">
                  Obtenez une estimation personnalisée pour votre projet en moins de 24h.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white text-brand-600 hover:bg-gray-100"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Demander un devis
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Parlez-nous de votre projet</h3>
                
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+33 1 23 45 67 89"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Entreprise
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nom de votre entreprise"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service souhaité *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      >
                        <option value="">Sélectionner un service</option>
                        <option value="social-media">Gestion des réseaux sociaux</option>
                        <option value="design">Design graphique</option>
                        <option value="advertising">Campagnes publicitaires</option>
                        <option value="marketing">Marketing digital</option>
                        <option value="content">Création de contenu</option>
                        <option value="web">Site web & E-commerce</option>
                        <option value="consulting">Conseil stratégique</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget approximatif
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                      >
                        <option value="">Sélectionner un budget</option>
                        <option value="1000-5000">1 000€ - 5 000€</option>
                        <option value="5000-15000">5 000€ - 15 000€</option>
                        <option value="15000-50000">15 000€ - 50 000€</option>
                        <option value="50000+">50 000€+</option>
                        <option value="discuss">À discuter</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Décrivez votre projet *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Parlez-nous de vos objectifs, de votre cible, de vos attentes..."
                      rows={6}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white py-3 text-lg font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
