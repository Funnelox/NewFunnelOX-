import React, { useState, useEffect } from 'react';
import { X, Flame, Download, CheckCircle2, ArrowRight } from 'lucide-react';

interface ExitIntentModalProps {
  openBookCallModal: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ openBookCallModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !triggered) {
        const dismissed = localStorage.getItem('funnelox_exit_dismissed');
        if (!dismissed) {
          triggered = true;
          setIsOpen(true);
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('funnelox_exit_dismissed', 'true');
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    const GOOGLE_FORM_ENDPOINT = 'https://docs.google.com/forms/d/e/1FAIpQLSdPFRCPt87tIE4G7XDP11MuvwXyR6YUMIMW37KLldz-nPx9jQ/formResponse';

    try {
      const googleParams = new URLSearchParams();
      googleParams.append('entry.425738451', 'Playbook Download Request');
      googleParams.append('entry.279280419', email || '');
      googleParams.append('entry.1031528822', 'Agencies & B2B Service');
      googleParams.append('entry.167403420', 'Requested Digital Growth Playbook');

      fetch(GOOGLE_FORM_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: googleParams.toString()
      }).catch((err) => console.error('Google Form submission error:', err));
    } catch (err) {
      console.error('Failed to submit to Google Form:', err);
    }

    try {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'playbook-download',
          name: '',
          email: email || '',
          phone: '',
          website: '',
          industry: '',
          revenue: '',
          growthFocus: 'Digital Growth Playbook Download',
          selectedDate: '',
          selectedTime: '',
          message: 'Requested Digital Growth & Conversion Playbook via Exit Intent Modal'
        })
      }).catch((err) => console.error('Netlify Forms submission error:', err));
    } catch (err) {
      console.error('Failed to submit to Netlify Forms:', err);
    }

    setDownloaded(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg glass-panel rounded-3xl border border-cyan-500/30 p-6 sm:p-8 shadow-2xl bg-[#090b14] text-white overflow-hidden">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

        <button
          onClick={handleDismiss}
          className="absolute top-5 right-5 p-2 rounded-full glass-panel text-gray-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!downloaded ? (
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-cyan-400" /> Free Growth Resource
            </span>

            <h3 className="text-2xl font-bold tracking-tight text-white leading-snug">
              Download the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Digital Growth & Conversion Playbook</span>
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed">
              Discover key frameworks for structuring landing pages, refining value propositions, and automating lead qualification workflows.
            </p>

            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>High-converting landing page structure guide</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Micro-commitment lead qualification framework</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Automated lead follow-up sequence templates</span>
              </li>
            </ul>

            <form name="playbook-download" data-netlify="true" onSubmit={handleDownload} className="pt-2 space-y-3">
              <input type="hidden" name="form-name" value="playbook-download" />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your work email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-xl shadow-cyan-950/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-300" /> Download Guide Free
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Your Guide Has Been Dispatched!</h4>
            <p className="text-xs text-gray-300">
              Check your inbox (<span className="text-cyan-300 font-semibold">{email}</span>) for your download link.
            </p>
            <div className="pt-2">
              <button
                onClick={() => { handleDismiss(); openBookCallModal(); }}
                className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition shadow-lg flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Or Book Strategy Call Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
