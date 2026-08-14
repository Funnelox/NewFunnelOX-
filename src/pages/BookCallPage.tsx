import React from 'react';
import { PhoneCall, ExternalLink } from 'lucide-react';

interface BookCallPageProps {
  openBookCallModal: () => void;
}

const CALENDLY_URL = "https://calendly.com/funnelox/strategy-growth-consultation";

export const BookCallPage: React.FC<BookCallPageProps> = ({ openBookCallModal }) => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
        <PhoneCall className="w-3.5 h-3.5" /> 1-on-1 Growth Consultation
      </span>
      <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
        Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Strategy Session</span>
      </h1>
      <p className="text-sm text-gray-300 max-w-xl mx-auto">
        Reserve 45 minutes with our lead CRO specialists to audit your sales funnel and construct a custom revenue growth roadmap.
      </p>
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 shadow-2xl shadow-cyan-950/80 hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Open Calendly & Choose Time Slot</span>
          <ExternalLink className="w-4 h-4" />
        </a>
        <button
          onClick={openBookCallModal}
          className="px-6 py-4 rounded-2xl font-bold text-sm text-gray-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition cursor-pointer"
        >
          View Calendar Modal
        </button>
      </div>
    </div>
  );
};
