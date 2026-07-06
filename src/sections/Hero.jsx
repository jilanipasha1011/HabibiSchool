import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { heroSlides } from '../data/schoolData';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ onPlayVideo }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === heroSlides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? heroSlides.length - 1 : current - 1);
  };

  const handleCtaClick = (href) => {
    if (href === '#video-tour') {
      onPlayVideo();
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-slate-900">
      
      {/* Slides Background Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Overlay to ensure readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/50 to-slate-950/40 z-10" />
          
          <img
            src={heroSlides[current].image}
            alt="Habibi Inter College Campus"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 text-center text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* College Badge */}
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal text-white border border-teal-400/30 shadow-lg shadow-teal-500/20">
                Admissions Open 2026 - 2027
              </span>

              {/* Slide Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-poppins tracking-tight leading-tight max-w-4xl mx-auto">
                {heroSlides[current].title}
              </h1>

              {/* Slide Subtitle Description */}
              <p className="text-base md:text-xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed">
                {heroSlides[current].subtitle}
              </p>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
                <button
                  onClick={() => handleCtaClick(heroSlides[current].ctaPrimaryHref)}
                  className="bg-gradient-to-r from-brand-teal to-brand-green text-white font-bold rounded-full px-8 py-4 shadow-lg shadow-teal-500/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group text-sm md:text-base"
                >
                  {heroSlides[current].ctaPrimary}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => handleCtaClick(heroSlides[current].ctaSecondaryHref)}
                  className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold rounded-full px-8 py-4 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 text-sm md:text-base"
                >
                  {heroSlides[current].ctaSecondary === "Virtual Campus Tour" ? (
                    <>
                      <Play className="h-5 w-5 fill-current text-brand-green animate-pulse" />
                      {heroSlides[current].ctaSecondary}
                    </>
                  ) : (
                    heroSlides[current].ctaSecondary
                  )}
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Manual Slide Changers (Chevrons) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 backdrop-blur-sm text-white items-center justify-center hover:scale-110 active:scale-90 transition-all"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 backdrop-blur-sm text-white items-center justify-center hover:scale-110 active:scale-90 transition-all"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Bottom Slider Nav Indicators (Dots) */}
      <div className="absolute bottom-10 left-0 w-full z-30 flex justify-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              current === index ? 'w-8 bg-brand-teal' : 'w-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
