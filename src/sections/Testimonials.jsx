import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000); // changes testimonial every 8 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActive(active === testimonials.length - 1 ? 0 : active + 1);
  };

  const handlePrev = () => {
    setActive(active === 0 ? testimonials.length - 1 : active - 1);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="What Parents & Alumni Say About Us" 
          subtitle="Success Stories & Testimonials" 
        />

        <div className="max-w-4xl mx-auto mt-12 relative">
          
          {/* Main Slide Card Container */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl relative min-h-[300px] flex flex-col justify-between">
            
            {/* Top quote symbol ornament */}
            <Quote className="absolute right-8 top-8 h-20 w-20 text-teal-500/5 select-none" />

            <div className="space-y-6">
              
              {/* Star Rating Render */}
              <div className="flex items-center gap-1">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
              </div>

              {/* Feedback Content Text */}
              <p className="text-slate-600 text-base md:text-lg leading-relaxed italic font-medium">
                "{testimonials[active].feedback}"
              </p>

            </div>

            {/* Author Profile Footer Row */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200/50">
              
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-teal shadow-md">
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Name / Relation */}
                <div>
                  <h4 className="font-poppins font-extrabold text-slate-800 text-sm md:text-base leading-none">
                    {testimonials[active].name}
                  </h4>
                  <span className="text-xs text-slate-400 font-bold block mt-1">
                    {testimonials[active].relation}
                  </span>
                </div>
              </div>

              {/* Slide Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white hover:bg-brand-teal hover:text-white border border-slate-200/60 shadow-sm flex items-center justify-center transition-all duration-300 active:scale-90"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white hover:bg-brand-teal hover:text-white border border-slate-200/60 shadow-sm flex items-center justify-center transition-all duration-300 active:scale-90"
                  aria-label="Next Review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

            </div>

          </div>

          {/* Slider Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  active === index ? 'w-6 bg-brand-teal' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
