import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, ArrowRight, Sparkles } from 'lucide-react';

interface ROICalculatorProps {
  openBookCallModal: () => void;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ openBookCallModal }) => {
  const [monthlyVisitors, setMonthlyVisitors] = useState(5000);
  const [currentConvRate, setCurrentConvRate] = useState(1.5); // %
  const [dealValue, setDealValue] = useState(2500); // $

  // Conservative optimization target (+1.8x - 2.2x lift estimation)
  const targetConvRate = Math.min(currentConvRate * 2.0, 7.5);

  const currentLeads = Math.round((monthlyVisitors * currentConvRate) / 100);
  const currentRevenue = currentLeads * dealValue;

  const targetLeads = Math.round((monthlyVisitors * targetConvRate) / 100);
  const targetRevenue = targetLeads * dealValue;

  const additionalRevenue = targetRevenue - currentRevenue;
  const annualGain = additionalRevenue * 12;

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/15 bg-gradient-to-br from-[#0c0e1a] via-[#090b14] to-[#120f24] shadow-2xl relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Sliders Column */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-3">
              <Calculator className="w-3.5 h-3.5" /> Interactive Conversion Estimator
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Estimate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Growth Opportunity</span>
            </h3>
            <p className="text-xs text-gray-300 mt-1 leading-relaxed">
              Adjust your monthly traffic, current conversion baseline and average customer value to see potential growth impact from funnel optimization.
            </p>
          </div>

          {/* Slider 1: Monthly Visitors */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-gray-300">Monthly Website Visitors</label>
              <span className="font-bold text-cyan-400 text-sm">{monthlyVisitors.toLocaleString()} Visitors</span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={monthlyVisitors}
              onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
              className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>

          {/* Slider 2: Current Conversion Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-gray-300">Current Conversion Baseline</label>
              <span className="font-bold text-cyan-400 text-sm">{currentConvRate.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5.0"
              step="0.1"
              value={currentConvRate}
              onChange={(e) => setCurrentConvRate(Number(e.target.value))}
              className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-purple-400"
            />
          </div>

          {/* Slider 3: Average Deal Value */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-gray-300">Average Customer Value (LTV)</label>
              <span className="font-bold text-cyan-400 text-sm">${dealValue.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="500"
              max="15000"
              step="500"
              value={dealValue}
              onChange={(e) => setDealValue(Number(e.target.value))}
              className="w-full h-2 bg-black/60 rounded-lg appearance-none cursor-pointer accent-emerald-400"
            />
          </div>
        </div>

        {/* Right Output Column */}
        <div className="lg:col-span-5">
          <div className="p-6 rounded-2xl bg-black/50 border border-white/15 space-y-5 relative shadow-xl">
            <div className="text-center pb-4 border-b border-white/10">
              <div className="text-[10px] uppercase font-bold tracking-widest text-cyan-400">Estimated Additional Monthly Pipeline</div>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-purple-400 mt-1">
                +${additionalRevenue.toLocaleString()} <span className="text-xs font-normal text-gray-400">/mo</span>
              </div>
              <div className="text-[11px] text-emerald-400 mt-1 flex items-center justify-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> +${annualGain.toLocaleString()} / year potential capacity
              </div>
            </div>

            {/* Comparison Metrics */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-gray-400 text-[10px]">Current Baseline</div>
                <div className="text-base font-bold text-white mt-0.5">${currentRevenue.toLocaleString()}/mo</div>
                <div className="text-[10px] text-gray-400">{currentLeads} estimated leads</div>
              </div>

              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                <div className="text-cyan-400 font-semibold text-[10px]">Optimized Target</div>
                <div className="text-base font-bold text-cyan-300 mt-0.5">${targetRevenue.toLocaleString()}/mo</div>
                <div className="text-[10px] text-cyan-400">{targetLeads} estimated leads</div>
              </div>
            </div>

            <button
              onClick={openBookCallModal}
              className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-xl shadow-cyan-950/50 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              Discuss Growth Strategy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
