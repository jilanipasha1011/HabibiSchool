import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import { navLinks, contactConfig } from '../data/schoolData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky style based on scroll height
      setIsScrolled(window.scrollY > 20);

      // Track active section for underline highlighting
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (href) => {
    setIsOpen(false);
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
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'glass-nav py-3.5 shadow-md border-b border-slate-200/50' 
        : 'bg-white/40 backdrop-blur-sm py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Brand */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('#home'); }}
            className="flex items-center gap-2 group"
          >
            <div className="bg-gradient-to-br from-brand-teal to-brand-green p-2 rounded-xl text-white shadow-md shadow-teal-500/10 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <span className="font-poppins font-extrabold text-xl tracking-tight text-slate-800 leading-none block">
                HABIBI
              </span>
              <span className="font-sans font-bold text-xs tracking-widest text-brand-teal uppercase block mt-0.5">
                Inter College
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className={`font-medium text-sm transition-colors duration-300 menu-link-underline ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-brand-teal active font-semibold'
                        : 'text-slate-600 hover:text-brand-teal'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#admissions"
              onClick={(e) => { e.preventDefault(); handleLinkClick('#admissions'); }}
              className="bg-gradient-to-r from-brand-teal to-brand-green text-white hover:shadow-lg hover:shadow-teal-500/20 active:scale-95 transition-all duration-300 rounded-full font-semibold text-xs tracking-wider uppercase px-5 py-2.5 shadow-md flex items-center gap-1.5"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl text-slate-600 hover:text-brand-teal hover:bg-teal-50/50 transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[73px] bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
              className={`block px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeSection === link.href.replace('#', '')
                  ? 'bg-teal-50 text-brand-teal'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-brand-teal'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 px-4">
            <a
              href="#admissions"
              onClick={(e) => { e.preventDefault(); handleLinkClick('#admissions'); }}
              className="w-full bg-gradient-to-r from-brand-teal to-brand-green text-white py-3 rounded-xl font-bold text-center block shadow-lg shadow-teal-500/10 active:scale-95 transition-all"
            >
              Apply Now (Session 2026-27)
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
