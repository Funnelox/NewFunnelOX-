import React from 'react';
import { Flame, CheckCircle2, PhoneCall, Sparkles, ArrowRight, ShieldCheck, Zap, Target } from 'lucide-react';

interface LandingPagesPageProps {
  openBookCallModal: () => void;
  openAuditModal: () => void;
}

export const LandingPagesPage: React.FC<LandingPagesPageProps> = ({ openBookCallModal, openAuditModal }) => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Flame className="w-3.5 h-3.5" /> High-Converting Landing Experiences
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          High-Converting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">Landing Pages</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Focused experiences built around one audience, one offer and one clear action. Designed to maximize clarity and capture qualified leads.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={openBookCallModal} className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 shadow-xl hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer">
            <PhoneCall className="w-4 h-4" /> Book a Free Strategy Call
          </button>
          <button onClick={openAuditModal} className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-xs text-cyan-300 glass-panel border border-cyan-500/30 hover:bg-cyan-500/10 transition flex items-center justify-center gap-2 cursor-pointer">
            <Sparkles className="w-4 h-4 text-cyan-400" /> Audit Existing Landing Page
          </button>
        </div>
      </div>

      {/* Feature Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-3 bg-[#0a0c18]">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Single-Focused Offer Architecture</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Eliminate navigation distractions and focus visitor attention strictly on your core offer and call to action.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-3 bg-[#0a0c18]">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Target className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Conversion Copywriting</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Direct-response headlines, clear offer framing, and structured value propositions aligned with target audience intent.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 border border-white/10 space-y-3 bg-[#0a0c18]">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">Micro-Commitment Intake</h3>
          <p className="text-xs text-gray-300 leading-relaxed">
            Interactive qualification questions that capture key prospect requirements and route leads to your calendar.
          </p>
        </div>
      </div>

      {/* Turnkey Deliverables */}
      <div className="glass-panel rounded-3xl p-8 border border-white/15 bg-gradient-to-r from-[#0a0c18] via-[#0f1225] to-[#0a0c18] space-y-6">
        <h2 className="text-2xl font-bold text-white text-center">What's Included in Every Landing Page Build</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-gray-300">
          {[
            'Custom Responsive UI Design & Layout',
            'Offer Messaging & Headline Copywriting',
            'Lead Intake & Qualification Form Setup',
            'CRM & Email Workflow Integration',
            'Analytics & Conversion Tracking Setup',
            'Structured Milestone Turnaround'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
