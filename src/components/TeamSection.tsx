
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TeamSection = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "Directrice Créative",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face",
      bio: "10 ans d'expérience en stratégie créative. Passionnée par l'innovation digitale et les tendances émergentes.",
      specialties: ["Stratégie créative", "Direction artistique", "Innovation"]
    },
    {
      name: "Marc Dubois",
      role: "Directeur Marketing Digital",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Expert en marketing digital avec un track record de campagnes à fort ROI pour des marques internationales.",
      specialties: ["Google Ads", "Analytics", "Growth Hacking"]
    },
    {
      name: "Emma Rodriguez",
      role: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Spécialiste des réseaux sociaux avec plus de 50M d'impressions générées pour nos clients cette année.",
      specialties: ["Instagram", "TikTok", "Community Management"]
    },
    {
      name: "Thomas Martin",
      role: "Développeur Full-Stack",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Développeur passionné par les technologies modernes et l'expérience utilisateur optimale.",
      specialties: ["React", "Node.js", "UX/UI"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-brand-600">Équipe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe de talents passionnés, unis par la même vision : faire rayonner votre marque dans l'univers digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="group text-center border-0 shadow-md hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-brand-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                
                <p className="text-brand-600 font-medium mb-3">
                  {member.role}
                </p>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="space-y-2 mb-6">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <span 
                      key={specialtyIndex}
                      className="inline-block bg-brand-50 text-brand-600 text-xs px-3 py-1 rounded-full mr-2 mb-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center space-x-3">
                  <button className="p-2 text-gray-400 hover:text-brand-600 transition-colors">
                    <Linkedin size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-brand-600 transition-colors">
                    <Twitter size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-brand-600 transition-colors">
                    <Mail size={18} />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company stats */}
        <div className="bg-brand-50 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-brand-600">150+</div>
              <div className="text-gray-600">Projets réalisés</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-brand-600">50+</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-brand-600">98%</div>
              <div className="text-gray-600">Taux de satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-brand-600">24/7</div>
              <div className="text-gray-600">Support client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
