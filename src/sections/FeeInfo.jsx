import React from 'react';
import { HelpCircle, Check, Info } from 'lucide-react';
import { feeStructure } from '../data/schoolData';
import SectionHeader from '../components/SectionHeader';

const FeeInfo = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          title="Transparent Fee Structure (2026 - 2027)" 
          subtitle="Tuition & Term Fees" 
        />

        {/* Desktop View Table (hidden on mobile) */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-100 shadow-xl mt-12 bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-brand-teal to-brand-green text-white font-poppins text-sm uppercase tracking-wider">
                <th className="p-6">Class Course / Stream</th>
                <th className="p-6">One-Time Registration</th>
                <th className="p-6">Monthly Tuition Fee</th>
                <th className="p-6">Annual Science/Lab Fee</th>
                <th className="p-6 font-bold">Total Term Fees</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {feeStructure.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors text-slate-700 text-sm font-semibold">
                  <td className="p-6 text-slate-800 font-bold">{row.class}</td>
                  <td className="p-6">{row.registrationFee}</td>
                  <td className="p-6">{row.tuitionMonthly}</td>
                  <td className="p-6">{row.labFeeAnnual}</td>
                  <td className="p-6 text-brand-teal font-extrabold text-base">{row.totalTerm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View Cards (hidden on desktop) */}
        <div className="md:hidden space-y-4 mt-8">
          {feeStructure.map((row, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-100 shadow-md space-y-3"
            >
              <h4 className="font-poppins font-extrabold text-slate-800 text-sm pb-2 border-b border-slate-200/50">
                {row.class}
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <span className="text-slate-400">One-Time Reg:</span>
                <span className="text-slate-700 text-right">{row.registrationFee}</span>
                
                <span className="text-slate-400">Tuition (Monthly):</span>
                <span className="text-slate-700 text-right">{row.tuitionMonthly}</span>
                
                <span className="text-slate-400">Annual Science/Lab:</span>
                <span className="text-slate-700 text-right">{row.labFeeAnnual}</span>
                
                <span className="text-brand-teal font-extrabold text-sm uppercase pt-1 border-t border-slate-200/30">Total Term:</span>
                <span className="text-brand-teal font-black text-sm text-right pt-1 border-t border-slate-200/30">{row.totalTerm}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Important notes callout */}
        <div className="max-w-4xl mx-auto mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-100/50 flex items-start gap-4">
          <Info className="h-6 w-6 text-brand-teal shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="font-poppins font-extrabold text-slate-800 text-sm">
              Fee Guidelines & Exemptions
            </h4>
            <ul className="space-y-1.5 text-xs md:text-sm text-slate-500 leading-relaxed font-semibold">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-green shrink-0" />
                Sibling concession: 10% discount on tuition fees for younger siblings.
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-green shrink-0" />
                Merit-based waivers available for students scoring above 95% in Board Exams.
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-brand-green shrink-0" />
                Term fee includes library access, physical athletic coaching, and examination charges.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeeInfo;
