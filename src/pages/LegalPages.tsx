import React, { useState } from 'react';
import { PageView } from '../types';
import { Shield } from 'lucide-react';

interface LegalPagesProps {
  type: 'privacy' | 'terms' | 'refund' | 'cookies';
  setCurrentView: (view: PageView) => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ type, setCurrentView }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'refund' | 'cookies'>(type);

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-gray-300 text-xs leading-relaxed">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Shield className="w-3.5 h-3.5" /> Legal Framework & Governance
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white capitalize">
          {activeTab.replace('-', ' ')} Policy
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 glass-pill p-1.5 rounded-2xl border border-white/10">
        <button
          onClick={() => { setActiveTab('privacy'); setCurrentView('privacy'); }}
          className={`px-4 py-2 rounded-xl transition ${activeTab === 'privacy' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-400'}`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => { setActiveTab('terms'); setCurrentView('terms'); }}
          className={`px-4 py-2 rounded-xl transition ${activeTab === 'terms' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-400'}`}
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => { setActiveTab('refund'); setCurrentView('refund'); }}
          className={`px-4 py-2 rounded-xl transition ${activeTab === 'refund' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-400'}`}
        >
          Refund Guarantee
        </button>
        <button
          onClick={() => { setActiveTab('cookies'); setCurrentView('cookies'); }}
          className={`px-4 py-2 rounded-xl transition ${activeTab === 'cookies' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-400'}`}
        >
          Cookie Policy
        </button>
      </div>

      {/* Content Body */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 space-y-6 bg-[#090b14]">
        {activeTab === 'privacy' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">1. Information Collection</h2>
            <p>At FunnelOX, we collect business email, phone numbers, website URLs, and analytics data provided when requesting an AI Business Audit or strategy session. We never sell your personal or corporate data.</p>

            <h2 className="text-lg font-bold text-white">2. Use of AI Diagnostic Data</h2>
            <p>Data submitted to our AI Audit endpoints is processed securely via Google Gemini API servers to calculate diagnostic conversion scores and revenue lift projections.</p>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">1. Service Agreements</h2>
            <p>All FunnelOX client engagements operate under high-intensity 14-day or 30-day development sprints. Sprints include copywriting, custom web development, SEO setup, and AI workflow deployment.</p>

            <h2 className="text-lg font-bold text-white">2. Performance Warranties</h2>
            <p>Guarantees apply strictly when the client adheres to approved funnel copywriting, traffic deployment, and prompt follow-up protocols.</p>
          </div>
        )}

        {activeTab === 'refund' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">1. Performance Guarantee & Work For Free Clause</h2>
            <p>Our Scale & Automate Engine package includes an explicit 3.5x ROI or lead benchmark guarantee. If the agreed KPI benchmark is not reached within 60 days of launch, FunnelOX provides ongoing optimization sprints completely free until the goal is achieved.</p>
          </div>
        )}

        {activeTab === 'cookies' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">1. Cookies & Analytics</h2>
            <p>We use essential cookies to maintain user session state, store exit-intent preferences, and collect anonymous aggregate analytics via Google Analytics 4.</p>
          </div>
        )}
      </div>

    </div>
  );
};
