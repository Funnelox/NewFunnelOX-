import React, { useState } from 'react';
import { PageView } from '../types';
import { Flame, ArrowRight, Shield, Award, CheckCircle2, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: PageView) => void;
  openBookCallModal: () => void;
  openAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentView,
  openBookCallModal,
  openAuditModal
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    const encode = (data: Record<string, string>) => {
      return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    };

    const GOOGLE_FORM_ENDPOINT = 'https://docs.google.com/forms/d/e/1FAIpQLSdPFRCPt87tIE4G7XDP11MuvwXyR6YUMIMW37KLldz-nPx9jQ/formResponse';

    try {
      const googleParams = new URLSearchParams();
      googleParams.append('entry.425738451', 'Newsletter Subscriber');
      googleParams.append('entry.279280419', newsletterEmail || '');
      googleParams.append('entry.1031528822', 'Agencies & B2B Service');
      googleParams.append('entry.167403420', 'Subscribed to FunnelOX Digital Growth Dispatch');

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
          'form-name': 'newsletter-subscribe',
          name: '',
          email: newsletterEmail || '',
          phone: '',
          website: '',
          industry: '',
          revenue: '',
          growthFocus: 'Newsletter Subscription',
          selectedDate: '',
          selectedTime: '',
          message: 'Subscribed to FunnelOX Digital Growth Dispatch'
        })
      }).catch((err) => console.error('Netlify Forms submission error:', err));
    } catch (err) {
      console.error('Failed to submit to Netlify Forms:', err);
    }

    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const handleLink = (view: PageView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05060a] border-t border-white/10 pt-20 pb-12 overflow-hidden text-gray-400">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter & Strategy Dispatch Banner */}
        <div className="glass-panel rounded-3xl p-8 lg:p-12 border border-white/10 mb-16 relative overflow-hidden bg-gradient-to-r from-purple-950/20 via-[#0a0c16] to-cyan-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
                <Flame className="w-3.5 h-3.5" /> FunnelOX Digital Growth Dispatch
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                Stay Ahead With <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Actionable Growth Insights</span>
              </h3>
              <p className="text-sm text-gray-300">
                Receive practical breakdowns on conversion optimization, AI workflow automation, and search engine growth delivered straight to your inbox.
              </p>
            </div>
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you for subscribing! Check your inbox for our latest digital growth framework.</span>
                </div>
              ) : (
                <form name="newsletter-subscribe" data-netlify="true" onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input type="hidden" name="form-name" value="newsletter-subscribe" />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your business email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-black/50 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition shadow-lg shadow-cyan-950/50 shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Subscribe Free <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4 pr-6">
            <button 
              onClick={() => handleLink('home')}
              className="flex items-center gap-3 text-left focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#08090f] rounded-[11px] flex items-center justify-center">
                  <Flame className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Funnel<span className="text-cyan-400">OX</span>
                </span>
                <span className="text-[10px] font-semibold text-cyan-400 block tracking-widest uppercase">
                  LEARN • BUILD • SCALE
                </span>
              </div>
            </button>

            <p className="text-xs text-gray-300 leading-relaxed max-w-sm">
              <strong className="text-white">AI-Powered Digital Growth Company</strong>
              <br />
              We build digital systems that help businesses attract, convert and scale.
            </p>

            <div className="pt-2 text-xs text-gray-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:hellofunnelox@gmail.com" className="hover:text-cyan-300 transition">hellofunnelox@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleLink('web-development')} className="hover:text-cyan-300 transition">Website Development</button></li>
              <li><button onClick={() => handleLink('landing-pages')} className="hover:text-cyan-300 transition">Landing Pages</button></li>
              <li><button onClick={() => handleLink('sales-funnels')} className="hover:text-cyan-300 transition">Sales Funnels</button></li>
              <li><button onClick={() => handleLink('seo')} className="hover:text-cyan-300 transition">SEO & Search Growth</button></li>
              <li><button onClick={() => handleLink('lead-generation')} className="hover:text-cyan-300 transition">Lead Generation</button></li>
              <li><button onClick={() => handleLink('paid-ads')} className="hover:text-cyan-300 transition">Paid Advertising</button></li>
              <li><button onClick={() => handleLink('ai-automation')} className="hover:text-cyan-300 transition">AI Automation</button></li>
              <li><button onClick={() => handleLink('services')} className="hover:text-cyan-300 transition">Email Marketing</button></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleLink('about')} className="hover:text-cyan-300 transition">About Us</button></li>
              <li><button onClick={() => handleLink('process')} className="hover:text-cyan-300 transition">Our Process</button></li>
              <li><button onClick={() => handleLink('case-studies')} className="hover:text-cyan-300 transition">Growth Concepts</button></li>
              <li><button onClick={() => handleLink('pricing')} className="hover:text-cyan-300 transition">Growth Solutions</button></li>
              <li><button onClick={() => handleLink('blog')} className="hover:text-cyan-300 transition">Blog & Insights</button></li>
              <li><button onClick={() => handleLink('contact')} className="hover:text-cyan-300 transition">Contact Us</button></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal & Support</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => handleLink('privacy')} className="hover:text-cyan-300 transition">Privacy Policy</button></li>
              <li><button onClick={() => handleLink('terms')} className="hover:text-cyan-300 transition">Terms & Conditions</button></li>
              <li><button onClick={() => handleLink('refund')} className="hover:text-cyan-300 transition">Refund Policy</button></li>
              <li><button onClick={() => handleLink('cookies')} className="hover:text-cyan-300 transition">Cookie Settings</button></li>
              <li className="pt-2">
                <button
                  onClick={openBookCallModal}
                  className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition block text-center"
                >
                  Book Strategy Call
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} FunnelOX. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span className="font-bold text-cyan-400 tracking-wider">LEARN • BUILD • SCALE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
