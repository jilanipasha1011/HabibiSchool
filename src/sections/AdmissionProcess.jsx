import React from 'react';
import { Download, FileText, ArrowRight } from 'lucide-react';
import { admissionSteps } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const AdmissionProcess = () => {
  return (
    <section id="admissions" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="Simple, Transparent Registration Guide" 
          subtitle="Admission Process" 
        />

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto relative mt-12">
          
          {/* Vertical line through the timeline center (for desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-teal via-brand-green to-slate-200 -translate-x-1/2" />

          <div className="space-y-12">
            {admissionSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Content Box (covers half screen) */}
                  <div className="w-full md:w-1/2 md:px-12">
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
                      
                      {/* Hover border glow */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-teal/20 rounded-3xl transition-colors duration-300" />
                      
                      <span className="block text-2xl font-black font-poppins text-brand-teal mb-2">
                        {step.step}
                      </span>
                      <h4 className="text-lg font-bold text-slate-800 font-poppins mb-3">
                        {step.title}
                      </h4>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bullet center timeline node (only for desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-green border-4 border-white shadow-md items-center justify-center text-white text-xs font-black" />

                  {/* Empty filler block to take remaining space */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

        {/* Prospectus download banner below steps */}
        <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 border border-slate-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20" />
          
          <div className="space-y-4 relative z-10 text-center md:text-left">
            <span className="bg-white/10 border border-white/20 text-brand-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              Important Download
            </span>
            <h3 className="text-2xl font-bold font-poppins leading-tight">
              Habibi College Official Prospectus (2026-27)
            </h3>
            <p className="text-slate-400 text-xs md:text-sm max-w-lg leading-relaxed">
              Read our extensive handbook containing detail course syllabus criteria, fee regulations, athletic programs, rules of conduct, and application form sheets.
            </p>
          </div>

          <div className="shrink-0 relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="#contact"
              className="bg-gradient-to-r from-brand-teal to-brand-green text-white font-bold py-3.5 px-8 rounded-full flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all text-sm shadow-lg shadow-teal-500/20"
            >
              Fill Admission Inquiry
              <ArrowRight className="h-4 w-4" />
            </a>
            
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Official Prospectus PDF download started successfully."); }}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3.5 px-8 rounded-full flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all text-sm"
            >
              <Download className="h-4 w-4 text-brand-green" />
              Download PDF Prospectus
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdmissionProcess;
