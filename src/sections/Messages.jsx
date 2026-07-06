import React from 'react';
import { Quote } from 'lucide-react';
import { facultyList } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const Messages = () => {
  // We can filter the Chairman and Principal from the facultyList
  const chairman = facultyList.find(f => f.role.includes("Chairman"));
  const principal = facultyList.find(f => f.role.includes("Principal"));

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="Leadership Messages" 
          subtitle="Words from our Leadership" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          
          {/* Card 1: Chairman's Message */}
          {chairman && (
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-start relative hover:shadow-2xl transition-all duration-300">
              
              {/* Quote icon background decoration */}
              <Quote className="absolute right-6 top-6 h-16 w-16 text-slate-100 shrink-0 pointer-events-none" />

              {/* Photo & Identity info */}
              <div className="w-full md:w-44 text-center md:text-left shrink-0">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden mx-auto md:mx-0 shadow-lg border-2 border-brand-teal mb-4">
                  <img
                    src={chairman.image}
                    alt={chairman.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-800 text-base leading-tight">
                  {chairman.name}
                </h4>
                <p className="text-xs text-brand-teal font-bold uppercase tracking-wider mt-1.5">
                  {chairman.role}
                </p>
                <p className="text-[10px] text-slate-500 mt-1 leading-snug font-medium">
                  {chairman.qualification}
                </p>
              </div>

              {/* Message content */}
              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <span className="text-slate-400 font-bold block text-sm">"Dear Parents & Students,"</span>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    Education is the most powerful weapon which you can use to change the world. At Habibi Inter College, we lay deep foundations of values, ethics, and innovation. We want our children to be creators, builders, and compassionate humans who lead society with integrity.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    Our focus on advanced laboratories, sports, and coaching guarantees that every child finds their true path and rises to their highest capabilities.
                  </p>
                </div>
                
                {/* Signature Block */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between items-center">
                  <div>
                    <span className="font-poppins font-extrabold text-slate-800 text-xs tracking-wider uppercase block">
                      {chairman.name}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{chairman.role}</span>
                  </div>
                  {/* Mock handwritten signature styling */}
                  <span className="font-serif italic text-lg text-slate-400 font-bold select-none pr-4">
                    {chairman.name}
                  </span>
                </div>
              </div>

            </div>
          )}

          {/* Card 2: Principal's Message */}
          {principal && (
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-start relative hover:shadow-2xl transition-all duration-300">
              
              {/* Quote icon background decoration */}
              <Quote className="absolute right-6 top-6 h-16 w-16 text-slate-100 shrink-0 pointer-events-none" />

              {/* Photo & Identity info */}
              <div className="w-full md:w-44 text-center md:text-left shrink-0">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden mx-auto md:mx-0 shadow-lg border-2 border-brand-green mb-4">
                  <img
                    src={principal.image}
                    alt={principal.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-800 text-base leading-tight">
                  {principal.name}
                </h4>
                <p className="text-xs text-brand-green font-bold uppercase tracking-wider mt-1.5">
                  {principal.role}
                </p>
                <p className="text-[10px] text-slate-500 mt-1 leading-snug font-medium">
                  {principal.qualification}
                </p>
              </div>

              {/* Message content */}
              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <span className="text-slate-400 font-bold block text-sm">"Greetings from the Principal's Desk,"</span>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    Academic success is not just about scoring marks, but developing a habit of disciplined curiosity and problem-solving. We strive to provide our students with a rigorous, high-quality, and modern learning ecosystem. 
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed italic">
                    With our smart classrooms, hands-on lab experiments, and weekly diagnostic checkups, we bridge the gap between Board guidelines and competitive eligibility. I invite you to join our student community.
                  </p>
                </div>
                
                {/* Signature Block */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between items-center">
                  <div>
                    <span className="font-poppins font-extrabold text-slate-800 text-xs tracking-wider uppercase block">
                      {principal.name}
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{principal.role}</span>
                  </div>
                  {/* Mock handwritten signature styling */}
                  <span className="font-serif italic text-lg text-slate-400 font-bold select-none pr-4">
                    {principal.name}
                  </span>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Messages;
