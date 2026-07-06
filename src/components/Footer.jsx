import React from 'react';
import { GraduationCap, Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { navLinks, contactConfig } from '../data/schoolData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 relative overflow-hidden border-t border-slate-900">
      
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: School Identity & Socials */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-gradient-to-br from-brand-teal to-brand-green p-2 rounded-xl text-white">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="font-poppins font-extrabold text-xl tracking-tight text-white leading-none block">
                  HABIBI
                </span>
                <span className="font-sans font-bold text-xs tracking-widest text-brand-teal uppercase block mt-0.5">
                  Inter College
                </span>
              </div>
            </div>
            
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Shaping futures and inspiring academic excellence for over 25 years. We provide an environment where curiosity meets state-of-the-art education resources.
            </p>

            <div className="flex items-center gap-3">
              <a 
                href={contactConfig.socials.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-brand-teal hover:text-brand-teal transition-all duration-300 flex items-center justify-center text-slate-400"
                aria-label="Facebook link"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a 
                href={contactConfig.socials.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-brand-teal hover:text-brand-teal transition-all duration-300 flex items-center justify-center text-slate-400"
                aria-label="Twitter link"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href={contactConfig.socials.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-brand-teal hover:text-brand-teal transition-all duration-300 flex items-center justify-center text-slate-400"
                aria-label="Instagram link"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href={contactConfig.socials.youtube} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-brand-teal hover:text-brand-teal transition-all duration-300 flex items-center justify-center text-slate-400"
                aria-label="Youtube link"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.524 3.545 12 3.545 12 3.545s-7.525 0-9.388.51a3.003 3.003 0 0 0-2.11 2.108C0 8.025 0 12 0 12s0 3.975.502 5.837a3.003 3.003 0 0 0 2.11 2.108c1.863.51 9.388.51 9.388.51s7.525 0 9.388-.51a3.003 3.003 0 0 0 2.11-2.108C24 15.975 24 12 24 12s0-3.975-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-white font-poppins font-bold text-md mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-brand-teal">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className="text-sm text-slate-400 hover:text-brand-teal hover:pl-1 transition-all duration-300 flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div>
            <h3 className="text-white font-poppins font-bold text-md mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-brand-teal">
              Contact Desk
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-slate-400">{contactConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-teal shrink-0" />
                <a href={contactConfig.callUri} className="text-sm hover:text-brand-teal transition-colors">
                  {contactConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-teal shrink-0" />
                <a href={`mailto:${contactConfig.email}`} className="text-sm hover:text-brand-teal transition-colors break-all">
                  {contactConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Academics & Timings */}
          <div>
            <h3 className="text-white font-poppins font-bold text-md mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-brand-teal">
              Office Timings
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm text-slate-200 font-semibold">Summer Timings:</span>
                  <span className="block text-xs mt-0.5">07:30 AM - 01:30 PM (Mon - Sat)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm text-slate-200 font-semibold">Winter Timings:</span>
                  <span className="block text-xs mt-0.5">08:30 AM - 02:30 PM (Mon - Sat)</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 mt-12 border-t border-slate-900 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Habibi Inter College, Lucknow. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#admissions" className="hover:text-brand-teal transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-brand-teal transition-colors">Terms of Service</a>
            <a href="#faqs" className="hover:text-brand-teal transition-colors">Admission Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
