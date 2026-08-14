import React from 'react';
import { Search, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';

interface SEOPageProps {
  openBookCallModal: () => void;
  openAuditModal: () => void;
}

export const SEOPage: React.FC<SEOPageProps> = ({ openBookCallModal, openAuditModal }) => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Search className="w-3.5 h-3.5" /> Organic Search Growth
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Commercial Intent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">SEO & Search Strategy</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Search strategies that help your business get discovered by people actively looking for what you offer. FunnelOX focuses on commercial intent search queries and technical web authority.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={openBookCallModal} className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg cursor-pointer">
            Book a Free Strategy Call
          </button>
          <button onClick={openAuditModal} className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-cyan-300 glass-panel border border-cyan-500/30 cursor-pointer">
            Get Technical SEO Audit
          </button>
        </div>
      </div>

      {/* SEO Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="text-cyan-400 font-bold text-sm">01. Commercial Intent Keyword Strategy</div>
          <p className="text-xs text-gray-300 leading-relaxed">We target search queries used by prospective buyers actively looking for solutions, services, and growth partners.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="text-purple-400 font-bold text-sm">02. Technical Performance & Architecture</div>
          <p className="text-xs text-gray-300 leading-relaxed">Ensure fast load times, structured data schema, mobile optimization, and clean indexation across search engines.</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
          <div className="text-emerald-400 font-bold text-sm">03. High-Authority Content Strategy</div>
          <p className="text-xs text-gray-300 leading-relaxed">Publish value-driven content and build industry search authority that sustains long-term organic traffic growth.</p>
        </div>
      </div>

    </div>
  );
};
