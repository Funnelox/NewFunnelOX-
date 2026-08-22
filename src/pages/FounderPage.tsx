import React from 'react';
import { SITE_IMAGES } from '../data/images';
import { Award, BriefcaseBusiness, Building2, CheckCircle2, Sparkles } from 'lucide-react';

interface FounderPageProps {
  openBookCallModal: () => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ openBookCallModal }) => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': 'https://funnelox.in/founder',
    url: 'https://funnelox.in/founder',
    mainEntity: {
      '@type': 'Person',
      '@id': 'https://funnelox.in/founder#person',
      name: 'Shekh Meraj',
      jobTitle: 'Founder & CEO',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://funnelox.in/#organization',
        name: 'FunnelOX',
        url: 'https://funnelox.in/'
      },
      url: 'https://funnelox.in/founder',
      image: 'https://funnelox.in/founder-final.png',
      description: 'Shekh Meraj is the Founder & CEO of FunnelOX, an AI-powered digital growth company focused on websites, sales funnels, SEO, lead generation and automation solutions.'
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>

      <section className="glass-panel rounded-3xl p-7 sm:p-12 lg:p-16 border border-cyan-500/20 bg-gradient-to-br from-[#0a0c18] via-[#0f1122] to-[#08090f] relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div className="relative max-w-md mx-auto lg:max-w-none">
            <div className="rounded-3xl overflow-hidden border border-cyan-400/25 shadow-2xl shadow-cyan-950/30">
              <img
                src={SITE_IMAGES.founder}
                alt="Shekh Meraj - Founder & CEO of FunnelOX"
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>

          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" /> Founder of FunnelOX
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Shekh Meraj
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-cyan-400">Founder & CEO, FunnelOX</p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Shekh Meraj is the Founder & CEO of FunnelOX, an AI-powered digital growth company focused on helping businesses build high-converting websites, sales funnels, SEO systems, lead generation strategies and automation solutions.
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Through FunnelOX, the focus is on bringing strategy, digital experiences, conversion systems and AI-powered automation together into connected growth systems designed to help businesses attract, convert and grow.
            </p>
            <button
              onClick={openBookCallModal}
              className="px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 transition shadow-lg cursor-pointer"
            >
              Book a Strategy Call
            </button>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
          <Building2 className="w-6 h-6 text-cyan-400" />
          <h2 className="text-lg font-bold text-white">Organization</h2>
          <p className="text-sm text-gray-300">FunnelOX</p>
        </div>
        <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
          <BriefcaseBusiness className="w-6 h-6 text-purple-400" />
          <h2 className="text-lg font-bold text-white">Role</h2>
          <p className="text-sm text-gray-300">Founder & CEO</p>
        </div>
        <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
          <Award className="w-6 h-6 text-cyan-400" />
          <h2 className="text-lg font-bold text-white">Official Website</h2>
          <a href="https://funnelox.in/" className="text-sm text-cyan-400 hover:text-cyan-300">FunnelOX</a>
        </div>
      </section>

      <section className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 space-y-5">
        <div className="flex items-center gap-2 text-cyan-400"><CheckCircle2 className="w-5 h-5" /><span className="text-xs font-bold uppercase tracking-widest">About the Founder</span></div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">Building smarter digital growth systems.</h2>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-4xl">
          The work at FunnelOX centers on connecting the core parts of digital growth instead of treating them as isolated services. Websites, landing pages, sales funnels, search visibility, lead generation and automation can work together as one connected system when they are built around clear business goals.
        </p>
      </section>
    </div>
  );
};
