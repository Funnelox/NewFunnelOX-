import React from 'react';
import { PageView } from '../types';
import { SITE_IMAGES } from '../data/images';
import { Flame, ShieldCheck, Target, Users, Award, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';

interface AboutPageProps {
  setCurrentView: (view: PageView) => void;
  openBookCallModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentView, openBookCallModal }) => {
  const values = [
    {
      title: 'Clarity Over Complexity',
      desc: 'We eliminate unnecessary technical jargon and focus on transparent, actionable digital systems.'
    },
    {
      title: 'Strategy Before Execution',
      desc: 'We start with your business goals, target audience, and core offer before writing a single line of code.'
    },
    {
      title: 'Conversion Over Vanity Metrics',
      desc: 'We design websites and funnels around lead quality and business inquiries, not superficial clicks.'
    },
    {
      title: 'Automation With Purpose',
      desc: 'We deploy AI workflows where they genuinely save time, improve lead qualification, and speed up follow-up.'
    },
    {
      title: 'Long-Term Growth Over Quick Wins',
      desc: 'We build scalable digital infrastructure engineered to support sustainable business expansion.'
    }
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
          <Flame className="w-3.5 h-3.5" /> About FunnelOX
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          We're Building a Better <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Digital Growth Partner</span>.
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
          FunnelOX was created with a simple belief: businesses shouldn't have to piece together their growth across disconnected tools, freelancers and agencies.
        </p>
      </div>

      {/* Founder Section */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/15 bg-gradient-to-br from-[#0a0c18] via-[#0f1122] to-[#08090f] shadow-2xl relative overflow-hidden">
        {/* Glow Accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">
          
          {/* Founder Portrait Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 group">
              <img
                src={SITE_IMAGES.founder}
                alt="Shekh Meraj - Founder & CEO, FunnelOX"
                className="w-full h-auto max-h-[500px] object-cover object-top rounded-2xl group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                <p className="text-xs font-bold text-white">Shekh Meraj</p>
                <p className="text-[10px] text-cyan-400 font-semibold">Founder & CEO, FunnelOX</p>
              </div>
            </div>
          </div>

          {/* Founder Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 uppercase tracking-widest">
              MEET THE FOUNDER
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Building the Future of Digital Growth.
            </h2>
            
            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              <p>
                FunnelOX was founded by Shekh Meraj with a clear conviction: businesses shouldn't have to spend more, work harder, or manage countless disconnected tools just to grow.
              </p>
              <p>
                We bring strategy, digital experiences, conversion systems, lead generation, and AI-powered automation together into one connected growth ecosystem — designed to turn attention into opportunity, and opportunity into sustainable growth.
              </p>
              <p>
                Because the future of digital growth isn't about doing more. It's about building smarter.
              </p>
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">Shekh Meraj</h3>
                <p className="text-xs text-cyan-400 font-semibold">Founder & CEO, FunnelOX</p>
              </div>
              <button
                onClick={openBookCallModal}
                className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 transition shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" /> Book Strategy Call
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Vision & Approach Section */}
      <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 bg-[#080912] shadow-xl space-y-6">
        <div className="max-w-3xl space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-purple-300 bg-purple-500/10 border border-purple-500/20">
            Our Vision & Approach
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Strategy, Technology and Marketing Under One Roof.
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            We bring strategy, design, technology, marketing and AI automation together to build digital systems that help businesses attract, convert and grow.
          </p>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            By aligning websites, sales funnels, search engine optimization, paid marketing, and automated workflows, we eliminate the friction caused by disconnected agency vendors.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">Our Core Values</h2>
          <p className="text-xs text-gray-400 mt-1">The principles guiding every strategy, website, funnel, and automation we craft.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={i} className="glass-panel rounded-2xl p-6 border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-black">
                0{i + 1}
              </div>
              <h3 className="text-base font-bold text-white">{v.title}</h3>
              <p className="text-xs text-gray-300 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="glass-panel rounded-3xl p-8 text-center space-y-4 border border-cyan-500/30">
        <h3 className="text-2xl font-bold text-white">Ready to connect your digital presence into a growth system?</h3>
        <button
          onClick={openBookCallModal}
          className="px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg cursor-pointer"
        >
          Book Your Strategy Call
        </button>
      </div>

    </div>
  );
};
