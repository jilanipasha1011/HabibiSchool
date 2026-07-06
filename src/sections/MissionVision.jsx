import React from 'react';
import { Eye, Compass, Gem, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const MissionVision = () => {
  const values = [
    { title: "Academic Integrity", desc: "Honesty and truthfulness in all intellectual pursuits." },
    { title: "Inclusive Excellence", desc: "Equal access and support for every student to reach the top." },
    { title: "Respect & Empathy", desc: "Fostering mutual appreciation, civic peace, and team spirit." },
    { title: "Disciplined Curiosity", desc: "Channeling creative inquiry through hard work and structure." }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <SectionHeader 
          title="Our Foundation & Values" 
          subtitle="Mission, Vision & Core Values" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          
          {/* Card 1: Our Vision */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            {/* Hover Accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />

            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal/20 border border-brand-teal/40 flex items-center justify-center text-brand-teal">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold font-poppins">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To be recognized as a world-class model of high-school excellence. We envision a nurturing ecosystem that inspires students from all backgrounds to become ethical, competent global leaders and scholars equipped with standard scientific qualifications.
              </p>
            </div>
          </div>

          {/* Card 2: Our Mission */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            {/* Hover Accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-brand-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />

            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold font-poppins">Our Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To deliver comprehensive, student-centric academic rigor. We provide our pupils with modern smart technologies, high-tech science practical training, excellent athletic instruction, and mentorship to ensure success in both higher boards and professional admissions.
              </p>
            </div>
          </div>

          {/* Card 3: Core Values */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-10 -mt-10 -z-10" />

            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-brand-teal">
                <Gem className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold font-poppins text-slate-800">Our Core Values</h3>
              
              <ul className="space-y-4">
                {values.map((val, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-slate-800 uppercase tracking-wide">
                        {val.title}
                      </span>
                      <span className="block text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {val.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;
