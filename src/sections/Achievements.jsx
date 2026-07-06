import React from 'react';
import { Trophy, Medal, Star, Target } from 'lucide-react';
import { boardToppers, achievements } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="Milestones of Academic & Co-Curricular Glory" 
          subtitle="Achievements & Board Toppers" 
        />

        {/* Part A: Board Toppers Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-poppins text-slate-800 flex items-center justify-center gap-2">
              <Medal className="h-6 w-6 text-brand-green" /> Our Outstanding Board Toppers
            </h3>
            <p className="text-sm text-slate-500 mt-2">Celebrating our stellar scholars who brought laurels to the college.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardToppers.map((topper, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 p-5 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
              >
                {/* Score Floating Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-teal to-brand-green text-white font-black text-sm px-3.5 py-1.5 rounded-full shadow-md z-10">
                  {topper.score}
                </div>

                {/* Profile Photo */}
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-white shadow-lg mb-4 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Student Info */}
                <h4 className="font-poppins font-extrabold text-slate-800 text-base leading-tight">
                  {topper.name}
                </h4>
                <p className="text-[11px] text-slate-400 font-bold mt-1 uppercase tracking-wide">
                  {topper.class}
                </p>

                {/* Rank Pill */}
                <span className="inline-block mt-4 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-brand-teal text-xs font-bold uppercase tracking-wider">
                  {topper.rank}
                </span>

              </div>
            ))}
          </div>
        </div>

        {/* Part B: Institutional Achievements Grid */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold font-poppins text-slate-800 flex items-center justify-center gap-2">
              <Trophy className="h-6 w-6 text-brand-teal" /> School Accolades & Trophies
            </h3>
            <p className="text-sm text-slate-500 mt-2">Accolades won by Habibi Inter College teams in various state and national arenas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((ach, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex gap-5 items-start hover:bg-teal-50/10 hover:border-brand-teal/20 transition-all duration-300"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 text-brand-teal flex items-center justify-center shrink-0">
                  {ach.category === "Academic" ? <Target className="h-5 w-5" /> : <Star className="h-5 w-5" />}
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-200/50 px-2 py-0.5 rounded">
                      {ach.category}
                    </span>
                    <span className="text-xs font-bold text-brand-teal font-sans">
                      Year: {ach.year}
                    </span>
                  </div>
                  
                  <h4 className="font-poppins font-extrabold text-slate-800 text-base">
                    {ach.title}
                  </h4>
                  
                  <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
