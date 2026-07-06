import React from 'react';
import { Award, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const About = () => {
  const highlights = [
    "Recognized State Board Curriculum (UP Board Affiliated)",
    "Bilingual Medium of Instruction (English & Hindi Streams)",
    "Dedicated JEE & NEET Preparatory Coaching Classes",
    "Comprehensive Character Building & Leadership Education"
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <SectionHeader 
          title="Nurturing Minds, Creating Future Leaders" 
          subtitle="About Habibi Inter College" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Overlapping Visuals */}
          <div className="lg:col-span-6 relative">
            
            {/* Background frame border accent */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-teal/20 rounded-3xl -z-10 translate-x-1 translate-y-1" />

            {/* Main Campus Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                alt="Habibi Inter College Main Building"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Image Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>

            {/* Floating Glassmorphic Legacy Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-white/90 backdrop-blur-md border border-slate-100 p-6 rounded-3xl shadow-2xl max-w-[240px]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <span className="block text-2xl font-black font-poppins text-brand-teal leading-none">25+</span>
                  <span className="block text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">Years of Educational Legacy</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative details */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-poppins text-slate-800 leading-snug">
                An Institution Built on Trust, Quality & Discipline
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Established in 2001, <strong>Habibi Inter College</strong> has grown into Lucknow's premier educational sanctuary. Our curriculum blends core academic rigor with practical modern resources like Robotics, smart technology, and sports training.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We believe that education must transcend classrooms. Our mission is to recognize and cultivate the unique potentials of each student, instilling critical thinking, civic responsibility, and academic excellence.
              </p>
            </div>

            {/* Structured Bullet Lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-slate-700 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick CTAs to explore further */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#admissions"
                className="bg-brand-teal hover:bg-teal-600 text-white font-bold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500/10 text-sm"
              >
                Learn Admission Process
              </a>
              <a
                href="#facilities"
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-3.5 rounded-full transition-all duration-300 text-sm"
              >
                Our Facilities
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
