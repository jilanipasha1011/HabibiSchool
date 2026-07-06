import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="Frequently Answered Queries" 
          subtitle="Common Questions" 
        />

        {/* Accordions List */}
        <div className="space-y-4 mt-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300"
              >
                
                {/* Header Button Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors ${
                      isOpen ? 'text-brand-teal' : 'text-slate-400'
                    }`} />
                    <span className="font-poppins font-extrabold text-sm md:text-base text-slate-800 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Chevron rotator */}
                  <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-brand-teal' : ''
                  }`} />
                </button>

                {/* Collapsible Answer Panel */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-60 border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 bg-slate-50/50 text-slate-500 text-xs md:text-sm leading-relaxed font-semibold">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
