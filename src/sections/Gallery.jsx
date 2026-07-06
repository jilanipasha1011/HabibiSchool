import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { galleryItems } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const categories = ['All', 'Campus', 'Labs', 'Sports', 'Events'];

  // Filter items
  const filteredItems = filter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // Lightbox handlers
  const openLightbox = (index) => {
    // Find the real index of the clicked item in the filtered list
    const realIndex = galleryItems.findIndex(item => item.id === filteredItems[index].id);
    setLightbox({ isOpen: true, index: realIndex });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, index: 0 });
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      index: prev.index === galleryItems.length - 1 ? 0 : prev.index + 1
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      index: prev.index === 0 ? galleryItems.length - 1 : prev.index - 1
    }));
  };

  return (
    <section id="gallery" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="Snapshots of College Life & Events" 
          subtitle="Our Photo Gallery" 
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-poppins font-bold text-xs md:text-sm px-5 py-2.5 rounded-full transition-all duration-300 ${
                filter === cat
                  ? 'bg-brand-teal text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-brand-teal border border-slate-100 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid with Framer Motion Layout animations */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="group relative h-64 rounded-3xl overflow-hidden shadow-md cursor-pointer border border-white"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />

                {/* Hover details overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-end z-10 text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-teal px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <h4 className="font-poppins font-extrabold text-sm mt-1">{item.title}</h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal Player */}
      <AnimatePresence>
        {lightbox.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Control */}
            <button
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-all z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image Frame */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
            >
              <img
                src={galleryItems[lightbox.index].image}
                alt={galleryItems[lightbox.index].title}
                className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl border border-white/10"
              />
              
              {/* Image title footer */}
              <div className="text-center text-white mt-4 space-y-1 select-none">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded">
                  {galleryItems[lightbox.index].category}
                </span>
                <p className="font-poppins font-extrabold text-sm md:text-base mt-1">
                  {galleryItems[lightbox.index].title}
                </p>
                <p className="text-[11px] text-slate-400">
                  {lightbox.index + 1} of {galleryItems.length}
                </p>
              </div>
            </motion.div>

            {/* Next Control */}
            <button
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-all z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;
