import React, { useState } from 'react';
import { PageView } from '../types';
import { CORE_SERVICES } from '../data/mockData';
import { Flame, CheckCircle2, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  setCurrentView: (view: PageView) => void;
  openBookCallModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentView, openBookCallModal }) => {
  const [activeTab, setActiveTab] = useState<string>('web-development');

  const activeService = CORE_SERVICES.find(s => s.id === activeTab) || CORE_SERVICES[0];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Flame className="w-3.5 h-3.5" /> Everything You Need to Grow Online
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Digital Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services & Systems</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          From your first high-converting landing page to a complete customer acquisition system, FunnelOX builds the digital infrastructure behind sustainable growth.
        </p>
      </div>

      {/* Tabs selector */}
      <div className="flex flex-wrap items-center justify-center gap-2 glass-pill p-2 rounded-2xl max-w-4xl mx-auto border border-white/10">
        {CORE_SERVICES.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveTab(s.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === s.id
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Deep-Dive Active Tab Details */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 bg-[#090b14] space-y-8 shadow-2xl relative overflow-hidden">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{activeService.badge}</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1">{activeService.title}</h2>
          </div>
          <button
            onClick={() => setCurrentView(activeService.pageKey as PageView)}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-cyan-300 glass-panel border border-cyan-500/30 hover:bg-cyan-500/10 transition flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
          >
            View Dedicated Page <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-sm text-gray-300 leading-relaxed max-w-3xl">
          {activeService.fullDesc}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Key Capabilities */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Key Features & Strategy</h3>
            <ul className="space-y-3 text-xs text-gray-300">
              {activeService.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Turnkey Deliverables */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400">Turnkey Deliverables</h3>
            <ul className="space-y-3 text-xs text-gray-300">
              {activeService.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-400">
            System Outcome: <strong className="text-emerald-400">{activeService.metrics}</strong>
          </div>
          <button
            onClick={openBookCallModal}
            className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 transition shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" /> Book Strategy Session For This Service
          </button>
        </div>

      </div>

    </div>
  );
};
