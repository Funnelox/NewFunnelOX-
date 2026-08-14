import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { 
  Flame, 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  Sparkles, 
  Search, 
  Layout, 
  TrendingUp, 
  Cpu, 
  Target, 
  Globe,
  Mail,
  Share2
} from 'lucide-react';

interface NavbarProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  openBookCallModal: () => void;
  openAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  openBookCallModal,
  openAuditModal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: PageView) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceLinks: { name: string; view: PageView; icon: any; desc: string }[] = [
    { name: 'Website Development', view: 'web-development', icon: Layout, desc: 'High-performance websites designed to convert' },
    { name: 'Landing Pages', view: 'landing-pages', icon: Flame, desc: 'Focused experiences built around single offer' },
    { name: 'Sales Funnels', view: 'sales-funnels', icon: TrendingUp, desc: 'Strategic customer acquisition journeys' },
    { name: 'SEO & Organic Growth', view: 'seo', icon: Search, desc: 'Capture high-intent commercial search' },
    { name: 'Lead Generation', view: 'lead-generation', icon: Target, desc: 'Predictable qualified customer pipelines' },
    { name: 'Paid Advertising', view: 'paid-ads', icon: Globe, desc: 'Google and Meta acquisition campaigns' },
    { name: 'AI Automation', view: 'ai-automation', icon: Cpu, desc: 'Automate qualification, follow-ups & CRM' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3 bg-[#08090f]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <button 
            id="nav-logo-button"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#08090f] rounded-[11px] flex items-center justify-center">
                <Flame className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                Funnel<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">OX</span>
              </span>
              <span className="text-[10px] font-medium tracking-wider text-cyan-400/80 uppercase block -mt-1">
                Digital Growth Company
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 glass-pill px-4 py-1.5 rounded-full border border-white/10">
            <button
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                currentView === 'home' ? 'text-white bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative" onMouseLeave={() => setServicesDropdownOpen(false)}>
              <button
                id="nav-services-dropdown-btn"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full flex items-center gap-1 transition-all ${
                  ['services', 'seo', 'web-development', 'landing-pages', 'sales-funnels', 'ai-automation', 'lead-generation', 'paid-ads'].includes(currentView)
                    ? 'text-cyan-300 bg-cyan-500/20 border border-cyan-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {/* Mega Dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 glass-panel rounded-2xl p-2 border border-white/15 shadow-2xl shadow-cyan-950/50 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-white/10 mb-1">
                    <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">Growth Solutions</span>
                  </div>
                  {serviceLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.view}
                        id={`nav-service-${item.view}`}
                        onClick={() => handleNavClick(item.view)}
                        className="w-full text-left flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 hover:border hover:border-cyan-500/30 transition-all group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:border-cyan-400">
                          <Icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-cyan-300">{item.name}</div>
                          <div className="text-[10px] text-gray-400 leading-snug">{item.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                  <div className="pt-2 border-t border-white/10 mt-1 px-2">
                    <button
                      id="nav-view-all-services"
                      onClick={() => handleNavClick('services')}
                      className="w-full text-center text-[11px] font-semibold text-purple-400 hover:text-purple-300 py-1"
                    >
                      View All Growth Services →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              id="nav-link-process"
              onClick={() => handleNavClick('process')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                currentView === 'process' ? 'text-white bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Process
            </button>

            <button
              id="nav-link-case-studies"
              onClick={() => handleNavClick('case-studies')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                currentView === 'case-studies' ? 'text-white bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Growth Concepts
            </button>

            <button
              id="nav-link-pricing"
              onClick={() => handleNavClick('pricing')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                currentView === 'pricing' ? 'text-white bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Solutions
            </button>

            <button
              id="nav-link-about"
              onClick={() => handleNavClick('about')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                currentView === 'about' ? 'text-white bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              About
            </button>

            <button
              id="nav-link-contact"
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                currentView === 'contact' ? 'text-white bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-audit-modal-btn"
              onClick={openAuditModal}
              className="px-4 py-2 rounded-xl text-xs font-bold text-gray-300 hover:text-white glass-panel hover:bg-white/10 transition border border-white/15 flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Free Growth Audit</span>
            </button>

            <button
              id="nav-book-call-btn"
              onClick={openBookCallModal}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:opacity-95 transition shadow-lg shadow-cyan-950/50 flex items-center gap-2 group cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book a Strategy Call</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-panel text-white border border-white/15 hover:bg-white/10 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-white/10 px-4 pt-4 pb-6 space-y-3 bg-[#08090f]/95 backdrop-blur-2xl animate-in slide-in-from-top duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/5"
          >
            Home
          </button>

          <div className="space-y-1 pl-3 border-l-2 border-cyan-500/30">
            <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block px-3 py-1">Services</span>
            {serviceLinks.map((service) => (
              <button
                key={service.view}
                onClick={() => handleNavClick(service.view)}
                className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 flex items-center gap-2"
              >
                <span>{service.name}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('process')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/5"
          >
            Our Process
          </button>
          <button
            onClick={() => handleNavClick('case-studies')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/5"
          >
            Growth Concepts
          </button>
          <button
            onClick={() => handleNavClick('pricing')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/5"
          >
            Growth Solutions
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/5"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-white hover:bg-white/5"
          >
            Contact
          </button>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookCallModal();
              }}
              className="w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book a Strategy Call</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAuditModal();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-cyan-300 glass-panel border border-cyan-500/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Growth Audit</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
