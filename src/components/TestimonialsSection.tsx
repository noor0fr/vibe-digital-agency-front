
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Claire Leclerc",
      role: "CEO - TechInnovate",
      company: "Startup Tech",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "L'équipe de VibeAgency a transformé notre présence digitale. En 6 mois, notre trafic a augmenté de 300% et nos ventes de 180%. Leur approche data-driven fait toute la différence."
    },
    {
      name: "Pierre Moreau",
      role: "Directeur Marketing",
      company: "FashionTrend",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Collaboration exceptionnelle ! Ils ont créé une identité visuelle qui correspond parfaitement à notre marque. Le ROI de leurs campagnes publicitaires dépasse toutes nos attentes."
    },
    {
      name: "Sophie Bernard",
      role: "Fondatrice",
      company: "EcoLiving",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Professionnalisme, créativité et résultats au rendez-vous. Notre community Instagram est passée de 5K à 50K followers en moins d'un an. Une équipe réactive et à l'écoute."
    },
    {
      name: "David Chen",
      role: "Gérant",
      company: "Restaurant Le Gourmet",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Grâce à leur stratégie digitale, nous avons multiplié par 4 nos réservations en ligne. Leur expertise en marketing local nous a vraiment démarqués de la concurrence."
    },
    {
      name: "Amélie Durand",
      role: "Responsable Communication",
      company: "SportPlus",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Une équipe créative qui comprend rapidement nos enjeux. Leurs vidéos ont généré plus de 2M de vues sur nos réseaux sociaux. Résultats spectaculaires !"
    },
    {
      name: "Jean-Luc Martin",
      role: "Président",
      company: "ConseilPro",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Refonte complète de notre site web avec une approche UX remarquable. Le taux de conversion a doublé et nous recevons 3x plus de demandes de devis qualifiées."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ce que disent nos <span className="text-brand-600">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre plus belle récompense. Découvrez leurs témoignages.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-brand-600 opacity-50" />
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-brand-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-brand-600 text-white rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Prêt à rejoindre nos clients satisfaits ?
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Commençons par discuter de vos objectifs et voir comment nous pouvons vous aider à les atteindre.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-brand-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 hover:shadow-lg"
            >
              Démarrer votre projet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
