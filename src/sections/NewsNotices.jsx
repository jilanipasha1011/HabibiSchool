import React from 'react';
import { Calendar, Bell, ArrowRight, ShieldAlert } from 'lucide-react';
import { newsNotices } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const NewsNotices = () => {
  return (
    <section id="news-events" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Horizontal Marquee Ticker */}
        <div className="mb-12 bg-slate-900 text-white rounded-2xl overflow-hidden py-3 px-4 shadow-md flex items-center gap-4 border border-slate-800">
          <span className="flex items-center gap-1.5 bg-gradient-to-r from-brand-teal to-brand-green text-white px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wider shrink-0 select-none">
            <Bell className="h-3.5 w-3.5 animate-bounce" /> Live Updates
          </span>
          <div className="relative overflow-hidden w-full h-6">
            <div className="absolute top-0 flex gap-12 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] cursor-pointer">
              {newsNotices.map((notice) => (
                <span key={notice.id} className="text-sm font-medium flex items-center gap-2 text-slate-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                  {notice.title} <span className="text-slate-400 font-sans text-xs">({notice.date})</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section Title */}
        <SectionHeader 
          title="Announcements & Notice Board" 
          subtitle="Stay Updated" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Side: Featured Announcement */}
          <div className="lg:col-span-1 bg-gradient-to-br from-brand-teal to-teal-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden h-full flex flex-col justify-between">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mb-20" />
            
            <div className="space-y-6 relative z-10">
              <span className="bg-white/20 border border-white/30 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                Featured Notice
              </span>
              <h3 className="text-2xl font-bold font-poppins leading-tight">
                Academic Session Admissions Open (2026 - 2027)
              </h3>
              <p className="text-teal-50/80 text-sm leading-relaxed">
                Registration forms for the Science, Commerce, and Arts streams are now available online and at the college admin counters. Please complete registrations early as seats are strictly limited.
              </p>
            </div>

            <div className="pt-8 relative z-10">
              <a
                href="#admissions"
                className="w-full bg-white hover:bg-slate-100 text-brand-teal font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg text-sm"
              >
                Start Registration Process
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Side: Notice Board Grid */}
          <div className="lg:col-span-2 space-y-4">
            {newsNotices.map((notice) => (
              <div 
                key={notice.id}
                className={`p-5 rounded-2xl bg-white border transition-all duration-300 hover:shadow-md flex items-start sm:items-center justify-between gap-4 ${
                  notice.isUrgent 
                    ? 'border-l-4 border-l-red-500 border-red-100 bg-red-50/10' 
                    : 'border-slate-100 hover:border-teal-200'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Calendar block date */}
                  <div className="hidden sm:flex flex-col items-center justify-center shrink-0 w-16 h-16 rounded-xl bg-slate-100 border border-slate-200/50 text-slate-700">
                    <Calendar className="h-4 w-4 text-brand-teal mb-1" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Notice</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      {notice.isUrgent && (
                        <span className="flex items-center gap-1 bg-red-100 border border-red-200 text-red-600 px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase">
                          <ShieldAlert className="h-3 w-3" /> Urgent
                        </span>
                      )}
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <Calendar className="h-3 w-3 sm:hidden" /> {notice.date}
                      </span>
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-slate-800 leading-snug">
                      {notice.title}
                    </h4>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="shrink-0 w-9 h-9 rounded-full bg-teal-50 border border-teal-100 hover:bg-brand-teal hover:text-white transition-all flex items-center justify-center text-brand-teal"
                  title="Read More / Inquire"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default NewsNotices;
