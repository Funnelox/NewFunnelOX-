import React, { useState, useEffect } from 'react';
import { PhoneCall, Sparkles, MessageCircle, X } from 'lucide-react';

interface StickyFloatingBarProps {
  openBookCallModal: () => void;
  openAuditModal: () => void;
}

export const StickyFloatingBar: React.FC<StickyFloatingBarProps> = ({
  openBookCallModal,
  openAuditModal
}) => {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/917247527293?text=Yes%20main%20apne%20business%20ko%20AI%20powered%20system%20se%20Grow%20krna%20chahta%20hu%20mujhe%20iski%20jankari%20chahiye", '_blank');
  };

  if (closed || !visible) return (
    /* Floating WhatsApp Button alone if sticky bar closed */
    <div className="fixed bottom-6 right-6 z-40">
      <button
        id="floating-whatsapp-standalone"
        onClick={openWhatsApp}
        className="relative group p-4 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/40 hover:bg-emerald-400 hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
        title="Contact on WhatsApp"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-400 rounded-full border-2 border-[#08090f] animate-ping" />
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
      </button>
    </div>
  );

  return (
    <div className="fixed bottom-6 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-40 max-w-2xl w-full animate-in slide-in-from-bottom duration-300">
      <div className="glass-panel rounded-2xl p-3 border border-white/20 shadow-2xl shadow-cyan-950/60 backdrop-blur-2xl flex items-center justify-between gap-3 bg-[#08090f]/90">
        
        {/* Left Status & Offer */}
        <div className="hidden sm:flex items-center gap-3 pl-2">
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute inset-0" />
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1">
              FunnelOX Strategy Team <span className="text-[10px] text-cyan-400 font-normal">Available</span>
            </div>
            <div className="text-[10px] text-gray-300">
              AI-Powered Digital Growth Company
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            id="sticky-whatsapp-btn"
            onClick={openWhatsApp}
            className="px-3 py-2 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition flex items-center gap-1.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">WhatsApp</span>
          </button>

          <button
            id="sticky-free-audit-btn"
            onClick={openAuditModal}
            className="px-3 py-2 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Free Audit</span>
          </button>

          <button
            id="sticky-book-call-btn"
            onClick={openBookCallModal}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition shadow-lg shadow-purple-600/30 flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Book Strategy Call</span>
          </button>

          <button
            id="sticky-bar-close"
            onClick={() => setClosed(true)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition ml-1 cursor-pointer"
            title="Dismiss sticky bar"
            aria-label="Dismiss sticky bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
