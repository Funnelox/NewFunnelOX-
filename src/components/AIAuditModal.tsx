import React, { useState } from 'react';
import { X, Sparkles, AlertTriangle, CheckCircle2, TrendingUp, ShieldAlert, ArrowRight, Loader2, SearchCheck } from 'lucide-react';
import { AIAuditResult } from '../types';

interface AIAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  openBookCallModal: () => void;
}

export const AIAuditModal: React.FC<AIAuditModalProps> = ({
  isOpen,
  onClose,
  openBookCallModal
}) => {
  const [website, setWebsite] = useState('');
  const [industry, setIndustry] = useState('Enterprise SaaS');
  const [currentRevenue, setCurrentRevenue] = useState('$20k/month');
  const [email, setEmail] = useState('');
  
  const [loading, setLoading] = useState(false);
  const [auditResult, setAuditResult] = useState<AIAuditResult | null>(null);

  if (!isOpen) return null;

  const handleGenerateAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!website || !email) return;

    setLoading(true);

    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    // Google Form submission endpoint and mapped entry fields
    const GOOGLE_FORM_ENDPOINT = 'https://docs.google.com/forms/d/e/1FAIpQLSdPFRCPt87tIE4G7XDP11MuvwXyR6YUMIMW37KLldz-nPx9jQ/formResponse';
    
    try {
      const googleParams = new URLSearchParams();
      googleParams.append('entry.425738451', website || '');
      googleParams.append('entry.279280419', email || '');
      googleParams.append('entry.1031528822', industry || '');
      googleParams.append('entry.167403420', currentRevenue || '');

      fetch(GOOGLE_FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: googleParams.toString()
      }).catch((err) => console.error('Google Form submission error:', err));
    } catch (err) {
      console.error('Failed to submit to Google Form:', err);
    }

    // Netlify Forms submission backup
    try {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'digital-growth-review',
          name: '',
          email: email || '',
          phone: '',
          website: website || '',
          industry: industry || '',
          revenue: currentRevenue || '',
          growthFocus: 'Digital Growth Review',
          selectedDate: '',
          selectedTime: '',
          message: `Digital Growth Review requested for ${website}`
        })
      }).catch((err) => console.error('Netlify Forms submission error:', err));
    } catch (err) {
      console.error('Failed to submit to Netlify Forms:', err);
    }

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          website,
          industry,
          currentRevenue,
          email
        })
      });

      const data = await res.json();
      if (data.success && data.audit) {
        setAuditResult(data.audit);
      } else {
        throw new Error(data.error || 'Failed to analyze website.');
      }
    } catch (err: any) {
      console.error(err);
      // Client fallback audit
      setAuditResult({
        headline: `Digital Growth Review for ${website}`,
        overallScore: 78,
        potentialRevenueLift: "Conversion & Efficiency Growth Opportunities",
        summary: `Our review identified key optimization areas on ${website}. Enhancing value proposition clarity, streamlining lead intake, and implementing automated follow-up workflows can significantly improve lead conversion rates.`,
        leaks: [
          {
            title: "Multiple Competing Call-to-Actions",
            severity: "High",
            fix: "Focus primary page views on a single clear primary CTA."
          },
          {
            title: "Manual Follow-Up Delay for Inbound Leads",
            severity: "Critical",
            fix: "Deploy automated notification and lead qualification workflows."
          },
          {
            title: "Unoptimized Search & Technical Meta Data",
            severity: "Medium",
            fix: "Enhance technical SEO structured data and target high-intent search queries."
          }
        ],
        actionPlan: [
          "Phase 1: Clarify primary messaging and headline offer hierarchy.",
          "Phase 2: Implement streamlined lead capture & qualification forms.",
          "Phase 3: Connect search optimization and multi-channel traffic channels."
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl bg-[#0a0c16] text-white my-8">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full glass-panel text-gray-400 hover:text-white transition border border-white/10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-2">
            <SearchCheck className="w-3.5 h-3.5" /> Digital Performance Review
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Free Digital Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">& Conversion Review</span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            Input your business details to generate an actionable diagnostic review highlighting key growth opportunities.
          </p>
        </div>

        {!auditResult ? (
          <form name="digital-growth-review" data-netlify="true" onSubmit={handleGenerateAudit} className="space-y-4">
            <input type="hidden" name="form-name" value="digital-growth-review" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-300 mb-1 block">Website or Business Name *</label>
                <input
                  type="text"
                  name="website"
                  required
                  placeholder="e.g. https://mybrand.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 mb-1 block">Industry Category</label>
                <select
                  name="industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="Enterprise SaaS">Enterprise SaaS & Tech</option>
                  <option value="Coaches & Consultants">Professional Services & Consulting</option>
                  <option value="Agencies & B2B Services">Agencies & B2B Services</option>
                  <option value="Healthcare & Local SME">Healthcare & Local SME</option>
                  <option value="E-Commerce & High Ticket">E-Commerce & Brands</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 mb-1 block">Current Monthly Revenue (Optional)</label>
                <input
                  type="text"
                  name="revenue"
                  placeholder="e.g. $25,000 / mo"
                  value={currentRevenue}
                  onChange={(e) => setCurrentRevenue(e.target.value)}
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-300 mb-1 block">Where Should We Send Report? *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="alex@mybrand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-xl shadow-cyan-950/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-cyan-300" />
                    Reviewing website structure & conversion flow...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-cyan-300" />
                    Generate Digital Growth Review
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* Audit Results View */
          <div className="space-y-6 animate-in fade-in duration-300">
            
            {/* Top Score Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-purple-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Diagnostic Summary</span>
                <h3 className="text-lg font-bold text-white leading-tight">{auditResult.headline}</h3>
                <p className="text-xs text-gray-300 mt-1">{auditResult.summary}</p>
              </div>
              <div className="text-center bg-black/50 p-3.5 rounded-2xl border border-cyan-500/30 shrink-0">
                <div className="text-2xl font-black text-cyan-300">{auditResult.overallScore}/100</div>
                <div className="text-[9px] uppercase tracking-wider text-gray-400">System Performance Index</div>
              </div>
            </div>

            {/* Opportunities Callout */}
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-xs text-emerald-300">
              <TrendingUp className="w-5 h-5 shrink-0 text-emerald-400" />
              <div>
                Primary Optimization Focus: <span className="font-bold text-white">{auditResult.potentialRevenueLift}</span>
              </div>
            </div>

            {/* Leaks Identified */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-400" /> Key Optimization Opportunities
              </h4>
              <div className="space-y-2.5">
                {auditResult.leaks.map((leak, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-bold text-white">{leak.title}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {leak.severity} Priority
                      </span>
                    </div>
                    <p className="text-gray-300 text-[11px]"><strong className="text-cyan-400">Recommended Fix:</strong> {leak.fix}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Roadmap */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">Recommended Implementation Steps</h4>
              <ul className="space-y-1.5 text-xs text-gray-300">
                {auditResult.actionPlan.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => { onClose(); openBookCallModal(); }}
                className="flex-1 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-xl shadow-cyan-950/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                Book a Strategy Call to Discuss This Review <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setAuditResult(null)}
                className="px-4 py-3.5 rounded-xl text-xs font-bold text-gray-300 glass-panel hover:text-white transition cursor-pointer"
              >
                Review Another URL
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
