import React from 'react';
import { INDUSTRY_BLUEPRINTS } from '../data/mockData';
import { Building2, CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react';

interface IndustriesPageProps {
  openBookCallModal: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ openBookCallModal }) => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Building2 className="w-3.5 h-3.5" /> Tailored Growth Blueprints
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Scale To Millions</span>
        </h1>
        <p className="text-sm text-gray-300">
          We don't use generic templates. Every industry gets a custom-engineered funnel, commercial SEO keyword map, and AI qualifying workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INDUSTRY_BLUEPRINTS.map((ind) => (
          <div key={ind.id} className="glass-panel rounded-3xl p-8 border border-white/15 space-y-6 bg-[#090b14]">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-white">{ind.name}</h3>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold">
                {ind.avgConversionLift}
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300">
                <strong>Industry Pain Point:</strong> {ind.painPoint}
              </div>
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                <strong>FunnelOX Solution:</strong> {ind.solution}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-2">Tailored Modules Included:</span>
              <ul className="space-y-1.5 text-xs text-gray-400">
                {ind.keyFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={openBookCallModal}
              className="w-full py-3 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 transition border border-white/20 flex items-center justify-center gap-2"
            >
              Get {ind.name} Blueprint <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};
