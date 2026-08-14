import React from 'react';
import { Cpu, CheckCircle2, PhoneCall, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface AIAutomationPageProps {
  openBookCallModal: () => void;
  openAuditModal: () => void;
}

export const AIAutomationPage: React.FC<AIAutomationPageProps> = ({ openBookCallModal, openAuditModal }) => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Cpu className="w-3.5 h-3.5" /> Intelligent Business Workflows
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          AI Automation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Lead Qualification</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Automate lead qualification, follow-ups and repetitive customer workflows with AI. Reduce response times and guide prospective clients to your calendar seamlessly.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={openBookCallModal} className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg cursor-pointer">
            Book a Free Strategy Call
          </button>
          <button onClick={openAuditModal} className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-cyan-300 glass-panel border border-cyan-500/30 cursor-pointer">
            Request Growth Audit
          </button>
        </div>
      </div>

      {/* Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: 'Lead Qualification Automation',
            desc: 'Screen inbound inquiries automatically based on budget, timeline, and project requirements before routing to your sales team.'
          },
          {
            title: 'Customer Follow-Up Automation',
            desc: 'Eliminate manual delays with multi-channel automated messaging sequences across Web, WhatsApp, and SMS.'
          },
          {
            title: 'CRM & Workflow Integration',
            desc: 'Sync lead records, meeting scheduling, and prospect data directly into your existing CRM platforms.'
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
