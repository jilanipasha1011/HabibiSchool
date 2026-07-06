import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';
import { contactConfig } from '../data/schoolData';

const FloatingWidgets = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Toggle back-to-top button visibility
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </div>

      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* Phone Call Button */}
        <a
          href={contactConfig.callUri}
          className="bg-brand-teal text-white p-4 rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce duration-1000"
          title="Call Admission Desk"
          aria-label="Call admissions office"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        {/* WhatsApp Chat Button */}
        <a
          href={contactConfig.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="h-6 w-6 fill-current" />
        </a>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="bg-brand-dark text-white p-3.5 rounded-full shadow-lg hover:bg-slate-800 transition-all duration-300 hover:scale-110 flex items-center justify-center border border-slate-700/50"
            title="Scroll to Top"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>
    </>
  );
};

export default FloatingWidgets;
