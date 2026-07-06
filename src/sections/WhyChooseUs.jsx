import React from 'react';
import { Monitor, FlaskConical, Trophy, Users, BookOpen, ShieldAlert } from 'lucide-react';
import { whyChooseUs } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const iconMap = {
  Monitor,
  FlaskConical,
  Trophy,
  Users,
  BookOpen,
  ShieldAlert
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="Why Choose Habibi Inter College?" 
          subtitle="Our Advantages" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {whyChooseUs.map((item, index) => {
            const IconComponent = iconMap[item.icon] || BookOpen;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand-teal/20 transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-brand-teal mb-6 group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:to-brand-green group-hover:text-white transition-all duration-500">
                  <IconComponent className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="font-poppins font-extrabold text-slate-800 text-lg mb-3">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
