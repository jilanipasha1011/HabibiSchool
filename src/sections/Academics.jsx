import React, { useState } from 'react';
import { BookOpen, Check, ArrowRight } from 'lucide-react';
import { streams } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const Academics = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="academics" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="Curriculum & Academic Streams" 
          subtitle="Our Academic Programs" 
        />

        {/* Tab Selection Row */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1.5 rounded-full flex gap-1 max-w-md w-full shadow-inner border border-slate-200/50">
            {streams.map((stream, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 font-poppins font-bold text-xs md:text-sm py-3 px-4 rounded-full transition-all duration-300 ${
                  activeTab === idx
                    ? 'bg-gradient-to-r from-brand-teal to-brand-green text-white shadow-md'
                    : 'text-slate-600 hover:text-brand-teal'
                }`}
              >
                {stream.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panel Content Box */}
        <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Stream Summary info (col-7) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block bg-teal-50 border border-teal-100 text-brand-teal text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {streams[activeTab].tag}
              </span>
              
              <h3 className="text-3xl font-extrabold font-poppins text-slate-800">
                {streams[activeTab].name}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {streams[activeTab].description}
              </p>

              {/* Special stream highlights badge */}
              <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-bold text-brand-teal uppercase tracking-wide">Stream Highlight</span>
                  <span className="block text-xs text-slate-600 mt-0.5">{streams[activeTab].highlight}</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 text-brand-teal hover:text-brand-green font-bold transition-all text-sm group"
                >
                  Learn about board registration requirements
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Stream Subjects Column (col-5) */}
            <div className="lg:col-span-5 bg-white border border-slate-100 rounded-2xl p-6 shadow-md">
              <h4 className="font-poppins font-extrabold text-slate-800 text-md mb-4 pb-2 border-b border-slate-100">
                Core Course Subjects
              </h4>
              
              <ul className="space-y-3">
                {streams[activeTab].subjects.map((sub, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-brand-green shrink-0">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{sub}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  UP Board Affiliated Code: SEC-84729
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Academics;
