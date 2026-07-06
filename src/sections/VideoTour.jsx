import React, { useState } from 'react';
import { Play, X, Compass } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const VideoTour = ({ isOpenExternally, onCloseExternal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/ysz5S6PUM-U"; // Educational Campus Tour placeholder

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onCloseExternal) onCloseExternal();
  };

  // Allow external triggers (like from Hero section CTA)
  React.useEffect(() => {
    if (isOpenExternally) {
      setIsOpen(true);
    }
  }, [isOpenExternally]);

  return (
    <section id="video-tour" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Graphic Ornaments */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="Take a Virtual Walkthrough" 
          subtitle="Campus Video Tour" 
        />

        {/* Video Card Frame */}
        <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden shadow-2xl video-tour-frame group border border-slate-100">
          
          {/* Cover Campus Image */}
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
            alt="Habibi Inter College Virtual Tour Cover"
            className="w-full h-[300px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />

          {/* Dark Overlay gradient */}
          <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/50 transition-colors duration-300 z-10 flex flex-col justify-between p-6 sm:p-12 text-white" />

          {/* Pulsing Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              onClick={handleOpen}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-brand-teal to-brand-green text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/btn focus:outline-none"
              aria-label="Play virtual campus tour"
            >
              {/* Ripple animation rings */}
              <span className="absolute inset-0 rounded-full bg-brand-teal opacity-30 animate-ping" />
              <span className="absolute inset-2 rounded-full bg-brand-green opacity-40 animate-pulse" />
              <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-current text-white relative z-10 translate-x-0.5" />
            </button>
          </div>

          {/* Bottom Card Title Overlay */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-20 text-white select-none">
            <span className="flex items-center gap-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-green">
              <Compass className="h-4 w-4" /> 4K Ultra HD Tour
            </span>
            <h4 className="font-poppins font-extrabold text-lg sm:text-2xl mt-1.5 leading-tight">
              Habibi Campus, Laboratories & Classrooms Tour
            </h4>
          </div>

        </div>

      </div>

      {/* Video Modal Player Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={handleClose}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50 focus:outline-none"
            aria-label="Close video player"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Iframe Frame container */}
          <div 
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video
          >
            <iframe
              src={`${videoUrl}?autoplay=1`}
              title="Habibi Inter College Virtual Tour"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default VideoTour;
