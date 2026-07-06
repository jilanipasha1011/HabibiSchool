import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { facultyList } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const Faculty = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Background graphic blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="Meet Our Board of Directors & Educators" 
          subtitle="Experienced Faculty" 
        />

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {facultyList.map((teacher, index) => (
            <div 
              key={index}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Image Frame */}
                <div className="w-full h-56 rounded-2xl overflow-hidden shadow-inner border border-slate-200/40 relative">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Identity & Qualification */}
                <div className="space-y-1">
                  <h4 className="font-poppins font-extrabold text-slate-800 text-base leading-tight group-hover:text-brand-teal transition-colors">
                    {teacher.name}
                  </h4>
                  <span className="block text-xs font-bold text-brand-teal uppercase tracking-wider">
                    {teacher.role}
                  </span>
                  <span className="block text-[10px] text-slate-400 font-semibold leading-relaxed">
                    {teacher.qualification}
                  </span>
                </div>

                {/* Short Biography */}
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {teacher.bio}
                </p>

              </div>

              {/* Card Footer Social/Inquire links */}
              <div className="mt-6 pt-4 border-t border-slate-200/50 flex justify-between items-center">
                <a
                  href="#contact"
                  className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-brand-teal hover:text-brand-green transition-colors"
                >
                  Contact Desk <ArrowUpRight className="h-3 w-3" />
                </a>

                {/* Quick mail icon link */}
                <a
                  href="mailto:info@habibicollege.edu.in"
                  className="w-8 h-8 rounded-full bg-white hover:bg-brand-teal hover:text-white border border-slate-200/50 shadow-sm flex items-center justify-center text-slate-400 transition-all duration-300"
                  title="Send E-mail"
                  aria-label={`Email ${teacher.name}`}
                >
                  <Mail className="h-3.5 w-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faculty;
