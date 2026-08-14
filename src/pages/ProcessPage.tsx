import React from 'react';
import { Flame, CheckCircle2, ArrowRight, PhoneCall, Sparkles, Compass } from 'lucide-react';

interface ProcessPageProps {
  openBookCallModal: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ openBookCallModal }) => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      desc: 'Understand your business, audience, offer and current growth challenges.'
    },
    {
      num: '02',
      title: 'STRATEGIZE',
      desc: 'Define your positioning, customer journey and growth roadmap.'
    },
    {
      num: '03',
      title: 'BUILD',
      desc: 'Create the website, funnel, marketing assets and automation systems your business needs.'
    },
    {
      num: '04',
      title: 'LAUNCH',
      desc: 'Connect analytics, tracking, campaigns and conversion systems.'
    },
    {
      num: '05',
      title: 'OPTIMIZE',
      desc: 'Use real data to identify opportunities and continuously improve performance.'
    }
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Compass className="w-3.5 h-3.5" /> Systematic Execution
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          A Clear Path From <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Strategy to Growth</span>.
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          How FunnelOX takes your business from isolated digital efforts to an integrated, high-performing customer acquisition system.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-start gap-6 bg-[#090b14] relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 text-white font-black text-xl flex items-center justify-center shrink-0 shadow-lg shadow-cyan-950/50">
              {s.num}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-white tracking-wide">{s.title}</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-panel rounded-3xl p-8 text-center space-y-4 border border-cyan-500/30 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-white">Ready to begin Step 01 for your business?</h3>
        <button
          onClick={openBookCallModal}
          className="px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-xl cursor-pointer"
        >
          Book Your Strategy Call
        </button>
      </div>
    </div>
  );
};
