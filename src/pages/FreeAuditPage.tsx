import React from 'react';
import { Sparkles, SearchCheck } from 'lucide-react';

interface FreeAuditPageProps {
  openAuditModal: () => void;
}

export const FreeAuditPage: React.FC<FreeAuditPageProps> = ({ openAuditModal }) => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
        <SearchCheck className="w-3.5 h-3.5" /> Digital Performance Review
      </span>
      <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
        Request Your Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Digital Growth Audit</span>
      </h1>
      <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Submit your website URL for a detailed review of your conversion flow, user messaging, search visibility, and digital growth opportunities.
      </p>
      <div className="pt-4">
        <button
          onClick={openAuditModal}
          className="px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 shadow-2xl shadow-cyan-950/80 cursor-pointer hover:opacity-90 transition"
        >
          Request Your Free Growth Audit Now
        </button>
      </div>
    </div>
  );
};
