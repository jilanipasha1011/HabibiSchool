import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { upcomingEvents } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const Events = () => {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="Mark Your Calendar for Upcoming Events" 
          subtitle="Upcoming College Events" 
        />

        {/* Events Layout List/Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {upcomingEvents.map((evt) => (
            <div 
              key={evt.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="space-y-4">
                
                {/* Top Calendar Block Row */}
                <div className="flex gap-4 items-center">
                  
                  {/* Calendar block */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-green text-white flex flex-col items-center justify-center shrink-0 shadow-lg shadow-teal-500/10 select-none">
                    <span className="text-2xl font-black font-poppins leading-none">{evt.date}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-90">{evt.month}</span>
                  </div>

                  {/* Timings */}
                  <div className="space-y-1">
                    <span className="inline-block bg-teal-50 border border-teal-100 text-brand-teal text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Calendar Event
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{evt.time}</span>
                    </div>
                  </div>

                </div>

                {/* Event Information */}
                <h4 className="font-poppins font-extrabold text-slate-800 text-base md:text-md leading-snug group-hover:text-brand-teal transition-colors duration-300">
                  {evt.title}
                </h4>
                
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {evt.desc}
                </p>

              </div>

              {/* Event Venue and CTA */}
              <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-500">
                  <MapPin className="h-4 w-4 text-brand-green shrink-0 mt-0.5" />
                  <span>{evt.venue}</span>
                </div>

                <a
                  href="#contact"
                  className="w-full bg-slate-100 hover:bg-brand-teal hover:text-white text-slate-600 font-bold py-3.5 rounded-2xl flex items-center justify-center gap-1 text-xs transition-all duration-300 group-hover:bg-teal-50 group-hover:text-brand-teal"
                >
                  Request Event Invite
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;
