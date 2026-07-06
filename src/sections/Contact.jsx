import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { contactConfig } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    parentName: '',
    phone: '',
    email: '',
    stream: 'Science Stream (Class XI)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter the student\'s full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    // Success Simulation
    setSubmitted(true);
    // Reset form fields
    setFormData({
      fullName: '',
      parentName: '',
      phone: '',
      email: '',
      stream: 'Science Stream (Class XI)',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="Reach Out to Our Admission Office" 
          subtitle="Get in Touch" 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Left Column: Details & Google Map (col-5) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 space-y-6">
              <h3 className="font-poppins font-extrabold text-slate-800 text-lg border-b border-slate-100 pb-3">
                Admission Help Desk
              </h3>
              
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-brand-teal flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Campus Location</span>
                    <span className="block text-xs md:text-sm text-slate-700 font-semibold mt-0.5 leading-relaxed">
                      {contactConfig.address}
                    </span>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-brand-teal flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Call Inquiry</span>
                    <a href={contactConfig.callUri} className="block text-xs md:text-sm text-slate-700 font-bold mt-0.5 hover:text-brand-teal">
                      {contactConfig.phone}
                    </a>
                    <a href={`tel:${contactConfig.altPhone}`} className="block text-xs text-slate-400 font-semibold mt-0.5 hover:text-brand-teal">
                      {contactConfig.altPhone}
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 text-brand-teal flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Email Correspondence</span>
                    <a href={`mailto:${contactConfig.email}`} className="block text-xs md:text-sm text-slate-700 font-semibold mt-0.5 hover:text-brand-teal break-all">
                      {contactConfig.email}
                    </a>
                    <a href={`mailto:${contactConfig.infoEmail}`} className="block text-xs text-slate-400 font-medium mt-0.5 hover:text-brand-teal break-all">
                      {contactConfig.infoEmail}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Embedded Google Map Frame */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 h-64 bg-slate-200">
              <iframe
                src={contactConfig.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Habibi Inter College Lucknow Location Map"
              />
            </div>

          </div>

          {/* Right Column: Admission Inquiry Form (col-7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 relative">
            <h3 className="font-poppins font-extrabold text-slate-800 text-xl mb-2">
              Send Admission Inquiry Form
            </h3>
            <p className="text-xs text-slate-400 mb-6 font-semibold">
              Fill in the details below, and our official enrollment office counselor will call you within 24 hours.
            </p>

            {submitted ? (
              /* Success alert animation bubble */
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center text-brand-green mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="font-poppins font-extrabold text-slate-800 text-lg">
                  Inquiry Form Submitted Successfully!
                </h4>
                <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for your interest in Habibi Inter College. An admissions officer has been notified and will connect with you shortly on your provided contact details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-6 py-2.5 rounded-full transition-all text-xs"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              /* The HTML Input Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Form Alert Error (if any) */}
                {errorMsg && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-xs font-semibold animate-shake">
                    <ShieldAlert className="h-4 w-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                      Student's Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Aman Ahmad"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-sm focus:bg-white focus:border-brand-teal outline-none transition-all font-semibold"
                    />
                  </div>

                  {/* Parent Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="parentName" className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                      Parent / Guardian Name
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Sayeed Ahmad"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-sm focus:bg-white focus:border-brand-teal outline-none transition-all font-semibold"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-sm focus:bg-white focus:border-brand-teal outline-none transition-all font-semibold"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. example@mail.com"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-sm focus:bg-white focus:border-brand-teal outline-none transition-all font-semibold"
                    />
                  </div>

                </div>

                {/* Class / Course select list */}
                <div className="space-y-1.5">
                  <label htmlFor="stream" className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Class / Academic Program Stream
                  </label>
                  <select
                    id="stream"
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-sm focus:bg-white focus:border-brand-teal outline-none transition-all font-bold text-slate-700 cursor-pointer"
                  >
                    <option value="General Curriculum (Class IX)">General Curriculum (Class IX)</option>
                    <option value="General Curriculum (Class X)">General Curriculum (Class X)</option>
                    <option value="Science Stream (Class XI)">Science Stream (Class XI)</option>
                    <option value="Science Stream (Class XII)">Science Stream (Class XII)</option>
                    <option value="Commerce Stream (Class XI)">Commerce Stream (Class XI)</option>
                    <option value="Commerce Stream (Class XII)">Commerce Stream (Class XII)</option>
                    <option value="Arts Stream (Class XI)">Arts Stream (Class XI)</option>
                    <option value="Arts Stream (Class XII)">Arts Stream (Class XII)</option>
                  </select>
                </div>

                {/* Message text block */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                    Your Message / Specific Inquiry
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter any questions regarding fees, transport, or board criteria..."
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-4 py-3 text-sm focus:bg-white focus:border-brand-teal outline-none transition-all font-semibold"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-brand-teal to-brand-green hover:shadow-lg hover:shadow-teal-500/20 text-white font-bold rounded-2xl py-4 shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 mt-4 text-sm md:text-base cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  Submit Admission Inquiry
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
