import React, { useState } from 'react';
import { PageView } from '../types';
import { CORE_SERVICES, CASE_STUDIES, TESTIMONIALS, FAQS, INDUSTRY_BLUEPRINTS } from '../data/mockData';
import { SITE_IMAGES } from '../data/images';
import { ROICalculator } from '../components/ROICalculator';
import { 
  Sparkles, 
  ArrowRight, 
  Maximize2, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  ChevronDown, 
  Award, 
  Users, 
  Building2, 
  Globe, 
  PhoneCall, 
  Target,
  Cpu,
  Layers,
  Compass,
  LineChart,
  BarChart3,
  Flame,
  HelpCircle,
  X
} from 'lucide-react';

interface HomePageProps {
  setCurrentView: (view: PageView) => void;
  openBookCallModal: () => void;
  openAuditModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentView,
  openBookCallModal,
  openAuditModal
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const pillars = [
    {
      title: 'ATTRACT',
      desc: 'Bring the right people to your business through SEO, paid advertising and strategic digital marketing.',
      icon: Target,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'CONVERT',
      desc: 'Turn visitors into leads and customers through high-converting websites, landing pages and sales funnels.',
      icon: Zap,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'AUTOMATE',
      desc: 'Reduce repetitive work with AI-powered workflows, lead management and customer automation.',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'SCALE',
      desc: 'Use data, optimization and connected systems to build a stronger digital growth engine.',
      icon: LineChart,
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const whyUsCards = [
    {
      title: 'STRATEGY FIRST',
      desc: 'We start with your business, audience, offer and goals — not a template.',
      icon: Compass
    },
    {
      title: 'CONVERSION FOCUSED',
      desc: 'Every page and funnel is designed around a clear customer action.',
      icon: Target
    },
    {
      title: 'AI-POWERED',
      desc: 'We use AI where it genuinely improves speed, efficiency and customer experience.',
      icon: Cpu
    },
    {
      title: 'PERFORMANCE MINDED',
      desc: 'We build with analytics, tracking and continuous optimization in mind.',
      icon: BarChart3
    },
    {
      title: 'ONE GROWTH PARTNER',
      desc: 'Strategy, design, technology, marketing and automation under one roof.',
      icon: Layers
    }
  ];

  const processSteps = [
    { step: '01', title: 'DISCOVER', desc: 'Understand your business, audience, offer and current growth challenges.' },
    { step: '02', title: 'STRATEGIZE', desc: 'Define your positioning, customer journey and growth roadmap.' },
    { step: '03', title: 'BUILD', desc: 'Create the website, funnel, marketing assets and automation systems your business needs.' },
    { step: '04', title: 'LAUNCH', desc: 'Connect analytics, tracking, campaigns and conversion systems.' },
    { step: '05', title: 'OPTIMIZE', desc: 'Use real data to identify opportunities and continuously improve performance.' }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-28 sm:pt-36 lg:pt-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Glow badge top */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-xs font-semibold text-cyan-300 shadow-lg shadow-cyan-950/40">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>AI-POWERED DIGITAL GROWTH</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
            Turn Your Digital Presence Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400">Growth Engine</span>.
          </h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            FunnelOX helps businesses attract qualified customers, convert more leads and scale through high-converting websites, sales funnels, SEO, performance marketing and AI-powered automation.
          </p>

          {/* CTA Group */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-book-call-cta"
              onClick={openBookCallModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:opacity-95 transition-all shadow-2xl shadow-cyan-950/60 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a Free Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-explore-services-cta"
              onClick={() => setCurrentView('services')}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm text-gray-200 glass-panel hover:bg-white/10 transition-all border border-white/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Explore Our Services</span>
            </button>

            <button
              id="hero-free-audit-cta"
              onClick={openAuditModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-sm text-cyan-300 glass-panel hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all border border-cyan-500/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Get Free Growth Audit</span>
            </button>
          </div>

          {/* Supporting Service Line */}
          <div className="pt-2 text-xs font-semibold tracking-wide text-cyan-400/90 uppercase">
            Websites • Funnels • SEO • Ads • Lead Generation • AI Automation
          </div>

          {/* Trust Guarantees */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> Transparent Strategy & Execution</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> 14 to 21 Day Milestone Turnaround</span>
            <span className="flex items-center gap-1.5"><Award className="w-4 h-4 text-purple-400" /> One Connected Growth Partner</span>
          </div>
        </div>

        {/* Interactive Platform Preview Showcase */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-purple-600/20 to-transparent shadow-2xl shadow-cyan-950/80">
            <div 
              onClick={() => setVideoModalOpen(true)}
              className="relative rounded-[22px] bg-[#101424] overflow-hidden border border-white/10 aspect-video flex items-center justify-center group cursor-pointer"
            >
              <img
                src={SITE_IMAGES.growthDashboard}
                alt="FunnelOX Growth System Concept"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0e111d]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
                className="absolute z-10 flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-panel border border-cyan-400/50 text-white font-bold text-sm hover:scale-105 transition-all shadow-2xl shadow-cyan-500/30 group/btn cursor-pointer bg-black/60 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-full bg-cyan-400 text-black flex items-center justify-center group-hover/btn:scale-110 transition">
                  <Maximize2 className="w-5 h-5 text-black" />
                </div>
                <span>Explore FunnelOX Growth System</span>
              </button>

              <div className="absolute bottom-6 left-6 glass-panel rounded-2xl p-4 border border-white/15 hidden sm:flex items-center gap-3 bg-black/75 backdrop-blur-xl">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Strategy + Technology + Growth</div>
                  <div className="text-[10px] text-gray-400">Integrated Customer Acquisition Systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Qualitative Strategic Highlights Bar */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { label: 'Strategy-Led Growth', desc: 'Custom roadmaps built around business goals' },
            { label: 'Conversion Focused', desc: 'Designed to capture and qualify demand' },
            { label: 'AI Automation', desc: 'Streamlined lead intake and workflows' },
            { label: 'Built to Scale', desc: 'Performance-minded digital infrastructure' }
          ].map((item, i) => (
            <div key={i} className="glass-panel p-4 rounded-2xl border border-white/10 text-center">
              <div className="text-sm font-bold text-white mb-1">{item.label}</div>
              <div className="text-[11px] text-gray-400">{item.desc}</div>
            </div>
          ))}
        </div>

      </section>

      {/* INTRODUCTION SECTION: ONE GROWTH PARTNER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden bg-gradient-to-br from-[#121626] via-[#0d101d] to-[#15192d]">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Connected Strategy</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              One Growth Partner. Multiple Growth Systems.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Your website, marketing, funnels and automation shouldn't operate in isolation. FunnelOX connects them into one streamlined digital growth system designed around your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${pillar.color} p-0.5 mb-4 shadow-lg`}>
                    <div className="w-full h-full bg-[#0a0c16] rounded-[10px] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-wide">{pillar.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* PROBLEM -> SOLUTION SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 bg-[#0e111e]">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">The Problem We Solve</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              You Don't Need More Disconnected Marketing.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              A website from one vendor. Ads from another. SEO from someone else. Leads sitting in a spreadsheet.
              <br />
              <strong className="text-white">That's not a growth system.</strong>
            </p>
          </div>

          {/* Connected Flow Diagram */}
          <div className="py-6">
            <div className="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
              The Connected Customer Journey
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs">
              {[
                'Traffic', 'Website', 'Landing Page', 'Funnel', 'Lead', 'Follow-Up', 'Conversion', 'Automation'
              ].map((step, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-white font-semibold text-center hover:bg-cyan-500/20 transition">
                    {step}
                  </div>
                  {idx < arr.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-purple-400 shrink-0 hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center space-y-3">
            <p className="text-sm font-medium text-gray-200">
              FunnelOX connects the pieces into one streamlined customer journey.
            </p>
            <div className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/40 text-xs font-bold text-cyan-300">
              One strategy. One connected system. One growth partner.
            </div>
          </div>

        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Full-Stack Capability</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to Grow Online.
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            From your first high-converting landing page to a complete customer acquisition system, FunnelOX builds the digital infrastructure behind sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setCurrentView(service.pageKey as PageView)}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                    {service.badge}
                  </span>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-cyan-400 transition">
                    Learn More →
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                  {service.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {service.shortDesc}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-white/10">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="text-[11px] text-gray-400 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-400">
                <span>View Service Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Target Audiences</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for Businesses Ready to Grow.
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            We work with ambitious businesses that want more than a website — they want a stronger digital acquisition system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRY_BLUEPRINTS.map((item) => (
            <div key={item.id} className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-purple-500/40 transition">
              <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">{item.painPoint}</p>
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200">
                <strong className="block text-white mb-1">Growth Approach:</strong>
                {item.solution}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY FUNNELOX */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 bg-gradient-to-br from-[#121528] via-[#090b14] to-[#121528]">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Our Core Principles</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built Around Business Outcomes.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUsCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/40 transition">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">Structured Execution</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A Clear Path From Strategy to Growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((stepItem, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/10 text-center relative space-y-3">
              <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {stepItem.step}
              </div>
              <h3 className="text-sm font-bold text-white">{stepItem.title}</h3>
              <p className="text-[11px] text-gray-400 leading-snug">{stepItem.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUILT WITH A FOCUS ON GROWTH (TESTIMONIAL REPLACEMENT) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 text-center max-w-4xl mx-auto space-y-6 bg-gradient-to-r from-cyan-950/20 via-[#0a0c16] to-purple-950/20">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Measurable Outcomes</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built With a Focus on Growth
          </h2>
          <p className="text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            A beautiful website is only the beginning. FunnelOX combines strategy, technology, marketing and automation to create digital experiences designed around measurable business outcomes.
          </p>

          <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                <span className="text-xs font-bold text-cyan-400 block uppercase tracking-wider">{t.metric}</span>
                <p className="text-xs text-gray-300 italic leading-relaxed">"{t.quote}"</p>
                <div className="text-[11px] text-gray-400 font-semibold border-t border-white/10 pt-2">
                  {t.author} — <span className="text-gray-500">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES / GROWTH CONCEPTS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Strategy Blueprints</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Growth Concepts
          </h2>
          <p className="text-sm text-gray-300">
            Illustrative examples of how FunnelOX approaches websites, funnels, SEO and automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="glass-panel rounded-2xl border border-white/10 overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-cyan-500/90 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                    CONCEPT PROJECT
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-xs text-gray-400 font-semibold">{study.clientName}</div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                    {study.title}
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {study.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setCurrentView('case-studies')}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-cyan-300 glass-panel border border-cyan-500/30 hover:bg-cyan-500/10 transition text-center"
                >
                  View Strategy Concept →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI & STRATEGY CALCULATOR */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ROICalculator openBookCallModal={openBookCallModal} />
      </section>

      {/* FAQS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Clear Answers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-white hover:text-cyan-300 transition cursor-pointer"
              >
                <span className="text-sm sm:text-base">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 sm:p-16 border border-white/10 text-center relative overflow-hidden bg-gradient-to-r from-cyan-950/40 via-[#0a0c18] to-purple-950/40 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Turn Your Digital Presence Into a Growth Engine?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your business, audience, offer and current growth challenges. Book a free strategy call with FunnelOX today.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBookCallModal}
              className="px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:opacity-95 transition shadow-2xl shadow-cyan-950/80 flex items-center gap-2 group cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a Free Strategy Call</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={openAuditModal}
              className="px-8 py-4 rounded-2xl text-sm font-bold text-cyan-300 glass-panel border border-cyan-500/40 hover:bg-cyan-500/10 transition cursor-pointer"
            >
              Request a Free Growth Audit
            </button>
          </div>
        </div>
      </section>

      {/* Video Modal Concept Preview */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/20 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="text-lg font-bold text-white">FunnelOX Growth System Architecture</h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-2 rounded-xl text-gray-400 hover:text-white glass-panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black flex items-center justify-center relative">
              <img
                src={SITE_IMAGES.growthDashboard}
                alt="System Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center space-y-3">
                <Sparkles className="w-8 h-8 text-cyan-400" />
                <h4 className="text-xl font-bold text-white">Strategy + Technology + Growth</h4>
                <p className="text-xs text-gray-300 max-w-md">
                  We build connected digital systems combining high-converting web architecture, targeted search growth, performance advertising, and AI workflow automation.
                </p>
                <button
                  onClick={() => {
                    setVideoModalOpen(false);
                    openBookCallModal();
                  }}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600"
                >
                  Book a Strategy Call
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
