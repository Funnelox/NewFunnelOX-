import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, ExternalLink, MessageCircle, Clock, ShieldCheck, User, Mail, Phone, Globe, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CALENDLY_URL = "https://calendly.com/funnelox/strategy-growth-consultation";
const WHATSAPP_URL = "https://wa.me/917247527293?text=Yes%20main%20apne%20business%20ko%20AI%20powered%20system%20se%20Grow%20krna%20chahta%20hu%20mujhe%20iski%20jankari%20chahiye";

export const BookCallModal: React.FC<BookCallModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'calendly' | 'form'>('calendly');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    website: '',
    revenue: '$10k - $50k/mo',
    goal: 'Increase Qualified Lead Inquiries'
  });

  if (!isOpen) return null;

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.email.includes('@')) {
      alert('Please provide a valid full name and email address.');
      return;
    }
    setLoading(true);

    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    const GOOGLE_FORM_ENDPOINT = 'https://docs.google.com/forms/d/e/1FAIpQLSdPFRCPt87tIE4G7XDP11MuvwXyR6YUMIMW37KLldz-nPx9jQ/formResponse';

    try {
      const googleParams = new URLSearchParams();
      const websiteName = formData.website ? `${formData.website} (${formData.fullName})` : formData.fullName;
      googleParams.append('entry.425738451', websiteName || '');
      googleParams.append('entry.279280419', formData.email || '');
      googleParams.append('entry.1031528822', formData.goal || 'Agencies & B2B Service');
      googleParams.append('entry.167403420', formData.revenue || '');

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
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'strategy-call-booking',
          name: formData.fullName || '',
          email: formData.email || '',
          phone: formData.phone || '',
          website: formData.website || '',
          industry: '',
          revenue: formData.revenue || '',
          growthFocus: formData.goal || '1-on-1 Strategy Call Inquiry',
          selectedDate: '',
          selectedTime: '',
          message: '1-on-1 Strategy Call Request'
        })
      });
    } catch (err) {
      console.error('Netlify Forms submission error:', err);
    }

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: '1-on-1 Strategy Call Inquiry',
          ...formData
        })
      });
    } catch (err) {
      console.log('Lead submitted:', err);
    }

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-white/20 p-5 sm:p-7 shadow-2xl bg-[#0a0c16] text-white overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full glass-panel text-gray-400 hover:text-white transition border border-white/10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-4 pr-10 shrink-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
              <CalendarIcon className="w-3.5 h-3.5" /> Strategy Consultation
            </span>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition shadow-md"
            >
              <span>Open Calendly in New Tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Book Your Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Digital Strategy Call</span>
          </h2>
          <p className="text-xs text-gray-300 mt-1">
            Choose a date on our live calendar below or launch Calendly in a new window.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center gap-2 mb-4 shrink-0 border-b border-white/10 pb-3">
          <button
            onClick={() => setActiveTab('calendly')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'calendly'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <CalendarIcon className="w-3.5 h-3.5" /> Direct Calendly Booking
          </button>
          <button
            onClick={() => setActiveTab('form')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'form'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            <Clock className="w-3.5 h-3.5" /> Send Booking Details
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto px-3 py-2 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>

        {/* Tab Content 1: Live Calendly Embed */}
        {activeTab === 'calendly' && (
          <div className="flex-1 min-h-[460px] flex flex-col rounded-2xl overflow-hidden border border-white/15 bg-white">
            <iframe
              src={CALENDLY_URL}
              className="w-full h-full min-h-[460px] border-0"
              title="Calendly Strategy Consultation Booking"
            />
          </div>
        )}

        {/* Tab Content 2: Custom Request Form */}
        {activeTab === 'form' && (
          <div className="flex-1 overflow-y-auto pr-1">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Strategy Request Received</h3>
                <p className="text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you! We will reach out shortly to confirm your consultation. You can also pick a slot directly via Calendly.
                </p>
                <div className="pt-2 flex items-center justify-center gap-3">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 transition flex items-center gap-1.5"
                  >
                    <span>Open Calendly Now</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 transition border border-white/20 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form name="strategy-call-booking" data-netlify="true" onSubmit={handleBookingSubmit} className="space-y-4 py-2">
                <input type="hidden" name="form-name" value="strategy-call-booking" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-cyan-400" /> Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" /> Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-cyan-400" /> Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5 text-cyan-400" /> Website or Business Link *
                    </label>
                    <input
                      type="text"
                      name="website"
                      required
                      placeholder="mybusiness.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1">
                      <DollarSign className="w-3.5 h-3.5 text-cyan-400" /> Current Revenue Range (Optional)
                    </label>
                    <select
                      name="revenue"
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Under $10k/mo">Under $10,000 / mo</option>
                      <option value="$10k - $50k/mo">$10,000 - $50,000 / mo</option>
                      <option value="$50k - $150k/mo">$50,000 - $150,000 / mo</option>
                      <option value="$150k+/mo">$150,000+ / mo</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 mb-1">Primary Growth Focus</label>
                    <select
                      name="goal"
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Increase Qualified Lead Inquiries">Increase Qualified Lead Inquiries</option>
                      <option value="Redesign High-Converting Website">Redesign High-Converting Website</option>
                      <option value="Build High-Converting Sales Funnel">Build High-Converting Sales Funnel</option>
                      <option value="Commercial SEO & Search Strategy">Commercial SEO & Search Strategy</option>
                      <option value="AI Lead Qualification Workflows">AI Lead Qualification Workflows</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <span>Or schedule directly on Calendly</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-xl shadow-cyan-950/50 flex items-center gap-2 cursor-pointer"
                  >
                    {loading ? 'Submitting...' : 'Submit Call Request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

