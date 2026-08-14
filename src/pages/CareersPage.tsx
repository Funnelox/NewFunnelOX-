import React from 'react';
import { Users, Briefcase, CheckCircle2 } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const roles = [
    { title: 'Senior CRO & Funnel Architect', type: 'Full-Time • Remote', dept: 'Growth Strategy' },
    { title: 'Lead AI Automation & Agent Engineer', type: 'Full-Time • Remote', dept: 'Engineering' },
    { title: 'Full-Stack React/Framer Motion Developer', type: 'Full-Time • Remote', dept: 'Engineering' },
    { title: 'Head of Search & Commercial SEO', type: 'Full-Time • Remote', dept: 'Marketing' },
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Users className="w-3.5 h-3.5" /> Join Our Team
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Careers at <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">FunnelOX</span>
        </h1>
        <p className="text-sm text-gray-300">
          We are looking for world-class conversion engineers, motion designers, and AI specialists.
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {roles.map((r, i) => (
          <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-cyan-400">{r.dept}</div>
              <div className="text-lg font-bold text-white">{r.title}</div>
              <div className="text-xs text-gray-400">{r.type}</div>
            </div>
            <button className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
