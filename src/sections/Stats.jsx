import React, { useState, useEffect, useRef } from 'react';
import { statistics } from '../data/schoolData';

const CounterItem = ({ count, suffix, label }) => {
  const [currentVal, setCurrentVal] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(count);
          if (start === end) {
            setCurrentVal(end);
            return;
          }
          
          const duration = 2000; // 2 seconds animation
          const frameDuration = 1000 / 60; // 60 fps
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          // Easing function for smoother deceleration
          const easeOutQuad = (t) => t * (2 - t);

          const counter = setInterval(() => {
            frame++;
            const progress = easeOutQuad(frame / totalFrames);
            const value = Math.round(progress * end);

            if (frame >= totalFrames) {
              clearInterval(counter);
              setCurrentVal(end);
            } else {
              setCurrentVal(value);
            }
          }, frameDuration);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [count, hasAnimated]);

  return (
    <div 
      ref={elementRef} 
      className="text-center px-6 py-8 bg-white/70 backdrop-blur-md border border-white/50 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
    >
      <span className="text-4xl md:text-5xl font-black font-poppins text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-green leading-none block">
        {currentVal}{suffix}
      </span>
      <span className="text-xs md:text-sm font-bold text-slate-500 block uppercase tracking-wider mt-3 leading-relaxed">
        {label}
      </span>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="relative z-30 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
        {statistics.map((stat, index) => (
          <CounterItem
            key={index}
            count={stat.count}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
};

export default Stats;
