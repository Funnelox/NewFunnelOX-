import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';
import { Award, CheckCircle2, ArrowRight, X, PhoneCall, Sparkles } from 'lucide-react';

interface CaseStudiesPageProps {
  openBookCallModal: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ openBookCallModal }) => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  const filtered = filter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.serviceCategory === filter);

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" /> Strategy Blueprints
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Concepts</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Illustrative examples of how FunnelOX approaches websites, funnels, SEO and automation.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 glass-pill p-1.5 rounded-2xl max-w-2xl mx-auto border border-white/10 text-xs font-semibold">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl transition cursor-pointer ${filter === 'all' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-300 hover:text-white'}`}
        >
          All Concepts
        </button>
        <button
          onClick={() => setFilter('sales-funnels')}
          className={`px-4 py-2 rounded-xl transition cursor-pointer ${filter === 'sales-funnels' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-300 hover:text-white'}`}
        >
          Sales Funnels
        </button>
        <button
          onClick={() => setFilter('seo')}
          className={`px-4 py-2 rounded-xl transition cursor-pointer ${filter === 'seo' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-300 hover:text-white'}`}
        >
          SEO Systems
        </button>
        <button
          onClick={() => setFilter('lead-generation')}
          className={`px-4 py-2 rounded-xl transition cursor-pointer ${filter === 'lead-generation' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-300 hover:text-white'}`}
        >
          Lead Generation
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((cs) => (
          <div
            key={cs.id}
            onClick={() => setSelectedCase(cs)}
            className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/15 space-y-5 bg-[#090b14] cursor-pointer group"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold uppercase tracking-wider">
                CONCEPT PROJECT
              </span>
              <span className="text-gray-400 font-semibold">{cs.industry}</span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">{cs.title}</h3>
            <p className="text-xs text-gray-300 leading-relaxed">{cs.summary}</p>

            <div className="pt-2 flex items-center justify-between text-xs font-bold text-cyan-400 group-hover:text-cyan-300">
              <span>View Strategy Concept Breakdown</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Concept Deep Dive Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in overflow-y-auto">
          <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-white/20 p-6 sm:p-10 bg-[#08090f] text-white my-8 space-y-6">
            
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-6 right-6 p-2 rounded-full glass-panel text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                CONCEPT PROJECT • {selectedCase.industry}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">{selectedCase.title}</h2>
            </div>

            <div className="space-y-4 text-xs text-gray-300 leading-relaxed">
              <div>
                <strong className="text-white text-sm block mb-1">Growth Bottleneck & Opportunity:</strong>
                <p className="text-gray-300">{selectedCase.challenge}</p>
              </div>

              <div>
                <strong className="text-cyan-300 text-sm block mb-1">FunnelOX Strategy & Architecture:</strong>
                <p className="text-gray-300">{selectedCase.solution}</p>
              </div>

              <div>
                <strong className="text-emerald-400 text-sm block mb-2">Key Strategic Objectives:</strong>
                <ul className="space-y-2">
                  {selectedCase.results.map((r, i) => (
                    <li key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => { setSelectedCase(null); openBookCallModal(); }}
                className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" /> Discuss a Custom Growth System For My Business
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
