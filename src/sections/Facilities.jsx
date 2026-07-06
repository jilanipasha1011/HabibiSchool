import React from 'react';
import { facilities } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="State-of-the-Art Infrastructure" 
          subtitle="Campus Facilities" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {facilities.map((fac, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100/50 flex flex-col md:flex-row h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-0.5 group"
            >
              {/* Image zoom wrapper */}
              <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden shrink-0 relative">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent md:hidden" />
              </div>

              {/* Text detail block */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="font-poppins font-extrabold text-slate-800 text-lg md:text-xl mb-3">
                  {fac.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {fac.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Facilities;
