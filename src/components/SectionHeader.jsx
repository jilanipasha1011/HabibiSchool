import React from 'react';

const SectionHeader = ({ title, subtitle, light = true, align = 'center' }) => {
  return (
    <div className={`mb-12 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 ${
        light 
          ? 'bg-teal-50 text-brand-teal border border-teal-100' 
          : 'bg-teal-500/10 text-brand-teal border border-teal-500/20'
      }`}>
        {subtitle}
      </span>
      <h2 className={`text-3xl md:text-4xl font-extrabold font-poppins mb-4 ${
        light ? 'text-slate-900' : 'text-white'
      }`}>
        {title}
      </h2>
      <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r from-brand-teal to-brand-green ${
        align === 'center' ? 'mx-auto' : 'mr-auto'
      }`} />
    </div>
  );
};

export default SectionHeader;
