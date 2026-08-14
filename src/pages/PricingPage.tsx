import React from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { CheckCircle2, ShieldCheck, PhoneCall, Sparkles, Flame, ArrowRight } from 'lucide-react';

interface PricingPageProps {
  openBookCallModal: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ openBookCallModal }) => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Flame className="w-3.5 h-3.5" /> Tailored Growth Infrastructure
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Growth Solutions Built Around <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Your Business</span>.
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Every business has different goals, offers, audiences and growth challenges. Instead of forcing every business into the same package, we build the right solution around your priorities.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`glass-panel rounded-3xl p-8 border space-y-6 flex flex-col justify-between relative bg-[#090b14] ${
              plan.popular ? 'border-cyan-400 shadow-2xl shadow-cyan-950/80 ring-1 ring-cyan-400/50' : 'border-white/10'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-[10px] font-black uppercase tracking-wider">
                Recommended Solution
              </span>
            )}

            <div className="space-y-4">
              <h3 className="text-xl font-black text-white tracking-wide">{plan.name}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{plan.tagline}</p>

              <div className="pt-2 pb-1 border-y border-white/10">
                <span className="text-3xl font-extrabold text-cyan-300 tracking-tight">
                  Custom Proposal
                </span>
                <span className="text-xs text-gray-400 block mt-0.5">Based on business scope & goals</span>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[11px] text-emerald-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{plan.guarantee}</span>
              </div>

              <div className="text-xs font-bold text-white uppercase tracking-wider pt-2">Included Systems:</div>
              <ul className="space-y-2.5 text-xs text-gray-300">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={openBookCallModal}
              className={`w-full py-3.5 rounded-xl font-bold text-xs transition shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                plan.popular
                  ? 'bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 text-white hover:opacity-90'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              <span>Request a Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Strategy Banner */}
      <div className="glass-panel rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4 border border-white/10 bg-gradient-to-r from-purple-950/20 via-[#0a0c16] to-cyan-950/20">
        <h3 className="text-xl font-bold text-white">Need a Custom Audit First?</h3>
        <p className="text-xs text-gray-300">
          Book a free strategy call to review your current website, funnels, SEO, and acquisition channels.
        </p>
        <button
          onClick={openBookCallModal}
          className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition cursor-pointer"
        >
          Book a Free Strategy Call
        </button>
      </div>

    </div>
  );
};
