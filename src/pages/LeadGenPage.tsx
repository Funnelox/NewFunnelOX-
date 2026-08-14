import React from 'react';
import { Target, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';

interface LeadGenPageProps {
  openBookCallModal: () => void;
  openAuditModal: () => void;
}

export const LeadGenPage: React.FC<LeadGenPageProps> = ({ openBookCallModal, openAuditModal }) => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Target className="w-3.5 h-3.5" /> Customer Acquisition Infrastructure
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          B2B Lead Generation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pipeline Systems</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Integrated multi-channel outreach, landing page capture, and lead qualification workflows built to deliver consistent sales inquiries for your business.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={openBookCallModal} className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg cursor-pointer">
            Book a Free Strategy Call
          </button>
          <button onClick={openAuditModal} className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-cyan-300 glass-panel border border-cyan-500/30 cursor-pointer">
            Audit Acquisition Process
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Target Market Research & ICP Mapping',
            desc: 'Identify decision-makers, ideal customer profiles, and message-to-market fit.'
          },
          {
            title: 'Multi-Channel Outreach Workflows',
            desc: 'Coordinate email, social, and search touchpoints to attract interested buyers.'
          },
          {
            title: 'Inbound Lead Qualification',
            desc: 'Screen inquiries for budget, authority, and timeline before scheduling calls.'
          }
        ].map((item, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-bold text-white">{item.title}</h3>
            <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
