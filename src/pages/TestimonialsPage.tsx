import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, ShieldCheck, Award, PhoneCall, Sparkles } from 'lucide-react';

interface TestimonialsPageProps {
  openBookCallModal: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ openBookCallModal }) => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" /> Client Experience
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          What Businesses Say About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Working With Us</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          How FunnelOX collaborates with business owners, operators, and growth leaders to build dependable digital systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="glass-panel rounded-3xl p-8 border border-white/15 space-y-4 bg-[#090b14] relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-bold uppercase tracking-wider">
                CONCEPT EXAMPLE
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">"{t.quote}"</p>
            
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover border border-cyan-400/40" />
                <div>
                  <div className="text-xs font-bold text-white">{t.author}</div>
                  <div className="text-[10px] text-gray-400">{t.role}, {t.company}</div>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold">
                {t.metric}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel rounded-3xl p-8 text-center space-y-4 border border-cyan-500/30">
        <h3 className="text-2xl font-bold text-white">Ready to build a reliable digital growth system?</h3>
        <button
          onClick={openBookCallModal}
          className="px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-xl cursor-pointer"
        >
          Book Your Free Strategy Call
        </button>
      </div>
    </div>
  );
};
