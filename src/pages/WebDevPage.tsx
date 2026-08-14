import React from 'react';
import { Layout, CheckCircle2, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface WebDevPageProps {
  openBookCallModal: () => void;
  openAuditModal: () => void;
}

export const WebDevPage: React.FC<WebDevPageProps> = ({ openBookCallModal, openAuditModal }) => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Layout className="w-3.5 h-3.5" /> High-Performance Web Development
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Website Development Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Build Trust & Convert</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          High-performance websites designed to build trust, communicate value and turn visitors into customers. Clean typography, responsive layouts, and fast loading performance.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={openBookCallModal} className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg cursor-pointer">
            Book a Free Strategy Call
          </button>
          <button onClick={openAuditModal} className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-cyan-300 glass-panel border border-cyan-500/30 cursor-pointer">
            Request Website Audit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white">Common Website Bottlenecks</h3>
          <ul className="space-y-2.5 text-xs text-gray-300">
            <li className="flex items-center gap-2 text-rose-300">✕ Slow load times causing visitor bounce</li>
            <li className="flex items-center gap-2 text-rose-300">✕ Unclear messaging and lack of defined call-to-action</li>
            <li className="flex items-center gap-2 text-rose-300">✕ Generic templates that fail to build authority</li>
          </ul>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-cyan-500/30 space-y-4 bg-cyan-950/20">
          <h3 className="text-lg font-bold text-cyan-300">The FunnelOX Web Development Approach</h3>
          <ul className="space-y-2.5 text-xs text-emerald-300">
            <li className="flex items-center gap-2">✓ Fast, modern React & Tailwind responsive architecture</li>
            <li className="flex items-center gap-2">✓ Clear conversion hierarchy & value proposition framing</li>
            <li className="flex items-center gap-2">✓ Integrated lead capture forms & calendar booking</li>
          </ul>
        </div>
      </div>

    </div>
  );
};
