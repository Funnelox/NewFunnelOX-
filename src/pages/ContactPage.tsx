import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, CheckCircle2, Send, Loader2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setLoading(true);

    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    const GOOGLE_FORM_ENDPOINT = 'https://docs.google.com/forms/d/e/1FAIpQLSdPFRCPt87tIE4G7XDP11MuvwXyR6YUMIMW37KLldz-nPx9jQ/formResponse';

    try {
      const googleParams = new URLSearchParams();
      const websiteName = formData.company ? `${formData.company} (${formData.name})` : formData.name;
      googleParams.append('entry.425738451', websiteName || '');
      googleParams.append('entry.279280419', formData.email || '');
      googleParams.append('entry.1031528822', 'Professional Service & Consulting');
      googleParams.append('entry.167403420', formData.message || '');

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
          'form-name': 'contact-growth-conversation',
          name: formData.name || '',
          email: formData.email || '',
          phone: '',
          website: formData.company || '',
          industry: '',
          revenue: '',
          growthFocus: 'Start a Growth Conversation',
          selectedDate: '',
          selectedTime: '',
          message: formData.message || ''
        })
      });
    } catch (err) {
      console.error('Netlify Forms submission error:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Top Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <MessageSquare className="w-3.5 h-3.5" /> CONNECT WITH FUNNELOX
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Let’s Build Your Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Growth Chapter.</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Have a growth challenge, new project, or partnership opportunity in mind? Connect with FunnelOX or reach out directly. For official FunnelOX company, contact, and business location information, use the details provided on this page. Let’s understand your goals, identify the right opportunities, and build what your business needs to grow.
        </p>
      </div>

      {/* Main Two-Column Contact & Proposal Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Panel: Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 space-y-6 bg-[#090b14]">
            
            {/* Left Panel Header */}
            <div className="space-y-2">
              <span className="text-[11px] font-semibold tracking-wider text-cyan-400 uppercase block">
                CONNECT WITH FUNNELOX
              </span>
              <h2 className="text-2xl font-black text-white tracking-tight">
                Let’s Build Your Next Growth Chapter.
              </h2>
              <p className="text-xs text-gray-300 leading-relaxed">
                Have a growth challenge, new project, or partnership opportunity in mind? Connect with FunnelOX or reach out directly.
              </p>
            </div>
            
            {/* Direct Contact Info */}
            <div className="space-y-3.5 pt-2 text-xs text-gray-300">
              <a 
                href="mailto:hellofunnelox@gmail.com" 
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.05] transition group"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400">Email Us</div>
                  <div className="font-bold text-white group-hover:text-cyan-300 transition-colors">hellofunnelox@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+917247527293" 
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.05] transition group"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400">Phone</div>
                  <div className="font-bold text-white group-hover:text-purple-300 transition-colors">+91 724 752 7293</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-gray-400">Location</div>
                  <div className="font-bold text-white leading-snug">Near Bus Stand, Barela, Jabalpur, M.P. 483001</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Panel: Lead / Proposal Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/15 bg-[#090b14] shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Proposal Request Received!</h3>
                <p className="text-xs text-gray-300">
                  Our strategy lead will review your business parameters and reply within 2 business hours.
                </p>
              </div>
            ) : (
              <form name="contact-growth-conversation" data-netlify="true" onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="form-name" value="contact-growth-conversation" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Let’s Build Your Growth System.</h3>
                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    Tell us where you want to go, what’s holding your business back, and what you want to achieve. We’ll identify the right growth opportunities and recommend a clear path forward.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-300 mb-1 block font-medium">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Jordan Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-300 mb-1 block font-medium">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jordan@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-300 mb-1 block font-medium">Company Website / Name</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="mycompany.com"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-300 mb-1 block font-medium">Project Scope & Primary Goal *</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your current funnel, revenue goals, and target timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-cyan-300" />
                      Sending details to FunnelOX...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Start a Growth Conversation →
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};

