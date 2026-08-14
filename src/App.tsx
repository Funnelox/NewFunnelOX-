import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { StickyFloatingBar } from './components/StickyFloatingBar';
import { BookCallModal } from './components/BookCallModal';
import { AIAuditModal } from './components/AIAuditModal';
import { ExitIntentModal } from './components/ExitIntentModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SEOPage } from './pages/SEOPage';
import { WebDevPage } from './pages/WebDevPage';
import { SalesFunnelsPage } from './pages/SalesFunnelsPage';
import { AIAutomationPage } from './pages/AIAutomationPage';
import { LeadGenPage } from './pages/LeadGenPage';
import { LandingPagesPage } from './pages/LandingPagesPage';
import { PaidAdsPage } from './pages/PaidAdsPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ProcessPage } from './pages/ProcessPage';
import { PricingPage } from './pages/PricingPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BlogPage } from './pages/BlogPage';
import { FreeAuditPage } from './pages/FreeAuditPage';
import { BookCallPage } from './pages/BookCallPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { LegalPages } from './pages/LegalPages';
import { NotFoundPage } from './pages/NotFoundPage';

// Helper URL Route Mappers
const viewToPath = (view: PageView): string => {
  switch (view) {
    case 'home': return '/';
    case 'about': return '/about';
    case 'services': return '/services';
    case 'web-development': return '/services/website-development';
    case 'landing-pages': return '/services/landing-pages';
    case 'sales-funnels': return '/services/sales-funnels';
    case 'seo': return '/services/seo';
    case 'lead-generation': return '/services/lead-generation';
    case 'ai-automation': return '/services/ai-automation';
    case 'paid-ads': return '/services/paid-ads';
    case 'case-studies': return '/case-studies';
    case 'industries': return '/industries';
    case 'process': return '/process';
    case 'pricing': return '/pricing';
    case 'testimonials': return '/testimonials';
    case 'blog': return '/blog';
    case 'free-audit': return '/free-audit';
    case 'book-call': return '/book-call';
    case 'contact': return '/contact';
    case 'careers': return '/careers';
    case 'privacy': return '/privacy';
    case 'terms': return '/terms';
    case 'refund': return '/refund';
    case 'cookies': return '/cookies';
    default: return '/';
  }
};

const pathToView = (path: string): PageView => {
  const cleanPath = path.toLowerCase().replace(/\/$/, '') || '/';
  switch (cleanPath) {
    case '/': return 'home';
    case '/about': return 'about';
    case '/services': return 'services';
    case '/services/website-development': return 'web-development';
    case '/services/landing-pages': return 'landing-pages';
    case '/services/sales-funnels': return 'sales-funnels';
    case '/services/seo': return 'seo';
    case '/services/lead-generation': return 'lead-generation';
    case '/services/ai-automation': return 'ai-automation';
    case '/services/paid-ads': return 'paid-ads';
    case '/case-studies': return 'case-studies';
    case '/industries': return 'industries';
    case '/process': return 'process';
    case '/pricing': return 'pricing';
    case '/testimonials': return 'testimonials';
    case '/blog': return 'blog';
    case '/free-audit': return 'free-audit';
    case '/book-call': return 'book-call';
    case '/contact': return 'contact';
    case '/careers': return 'careers';
    case '/privacy': return 'privacy';
    case '/terms': return 'terms';
    case '/refund': return 'refund';
    case '/cookies': return 'cookies';
    default: return 'home';
  }
};

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>(() => pathToView(window.location.pathname));
  const [bookCallModalOpen, setBookCallModalOpen] = useState(false);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  // Sync state to URL and back button
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(pathToView(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const targetPath = viewToPath(currentView);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Dynamic Title & Meta Tags for SEO
    const pageTitles: Record<string, string> = {
      'home': 'FunnelOX — AI-Powered Digital Growth & Conversion Systems',
      'about': 'About FunnelOX — High-Performance Growth & Conversion Architects',
      'services': 'Core Growth Services — Websites, Funnels, SEO & AI Automation | FunnelOX',
      'web-development': 'Custom High-Speed Web Development | FunnelOX',
      'landing-pages': 'High-Converting Landing Page Design | FunnelOX',
      'sales-funnels': '7-Figure Sales Funnel Architecture | FunnelOX',
      'seo': 'Commercial Intent SEO & Search Growth | FunnelOX',
      'lead-generation': 'Predictable Lead Generation Engines | FunnelOX',
      'ai-automation': '24/7 AI Qualification Agents & CRM Workflows | FunnelOX',
      'paid-ads': 'Meta & Google Paid Ad Campaigns | FunnelOX',
      'case-studies': 'Client Growth Case Studies & Verified Results | FunnelOX',
      'process': 'The 7-Step FunnelOX Growth Blueprint | FunnelOX',
      'pricing': 'Transparent Growth Packages & Pricing | FunnelOX',
      'contact': 'Contact FunnelOX — Get In Touch',
    };

    document.title = pageTitles[currentView] || 'FunnelOX — AI-Powered Digital Growth Company';
  }, [currentView]);

  const handleOpenBookCall = () => {
    window.open('https://calendly.com/funnelox/strategy-growth-consultation', '_blank');
    setBookCallModalOpen(true);
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <HomePage
            setCurrentView={setCurrentView}
            openBookCallModal={handleOpenBookCall}
            openAuditModal={() => setAuditModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            setCurrentView={setCurrentView}
            openBookCallModal={handleOpenBookCall}
          />
        );
      case 'services':
        return (
          <ServicesPage
            setCurrentView={setCurrentView}
            openBookCallModal={handleOpenBookCall}
          />
        );
      case 'seo':
        return (
          <SEOPage
            openBookCallModal={handleOpenBookCall}
            openAuditModal={() => setAuditModalOpen(true)}
          />
        );
      case 'web-development':
        return (
          <WebDevPage
            openBookCallModal={handleOpenBookCall}
            openAuditModal={() => setAuditModalOpen(true)}
          />
        );
      case 'landing-pages':
        return (
          <LandingPagesPage
            openBookCallModal={handleOpenBookCall}
            openAuditModal={() => setAuditModalOpen(true)}
          />
        );
      case 'sales-funnels':
        return (
          <SalesFunnelsPage
            openBookCallModal={handleOpenBookCall}
            openAuditModal={() => setAuditModalOpen(true)}
          />
        );
      case 'ai-automation':
        return (
          <AIAutomationPage
            openBookCallModal={handleOpenBookCall}
            openAuditModal={() => setAuditModalOpen(true)}
          />
        );
      case 'lead-generation':
        return (
          <LeadGenPage
            openBookCallModal={handleOpenBookCall}
            openAuditModal={() => setAuditModalOpen(true)}
          />
        );
      case 'paid-ads':
        return (
          <PaidAdsPage
            openBookCallModal={handleOpenBookCall}
            openAuditModal={() => setAuditModalOpen(true)}
          />
        );
      case 'case-studies':
        return (
          <CaseStudiesPage
            openBookCallModal={handleOpenBookCall}
          />
        );
      case 'industries':
        return (
          <IndustriesPage
            openBookCallModal={handleOpenBookCall}
          />
        );
      case 'process':
        return (
          <ProcessPage
            openBookCallModal={handleOpenBookCall}
          />
        );
      case 'pricing':
        return (
          <PricingPage
            openBookCallModal={handleOpenBookCall}
          />
        );
      case 'testimonials':
        return (
          <TestimonialsPage
            openBookCallModal={handleOpenBookCall}
          />
        );
      case 'blog':
        return <BlogPage />;
      case 'free-audit':
        return <FreeAuditPage openAuditModal={() => setAuditModalOpen(true)} />;
      case 'book-call':
        return <BookCallPage openBookCallModal={handleOpenBookCall} />;
      case 'contact':
        return <ContactPage />;
      case 'careers':
        return <CareersPage />;
      case 'privacy':
        return <LegalPages type="privacy" setCurrentView={setCurrentView} />;
      case 'terms':
        return <LegalPages type="terms" setCurrentView={setCurrentView} />;
      case 'refund':
        return <LegalPages type="refund" setCurrentView={setCurrentView} />;
      case 'cookies':
        return <LegalPages type="cookies" setCurrentView={setCurrentView} />;
      case '404':
      default:
        return <NotFoundPage setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#08090f] text-gray-100 relative font-sans selection:bg-purple-600 selection:text-white">
      
      {/* Background Interactive Particle Mesh & Aurora Halo */}
      <BackgroundParticles />

      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        openBookCallModal={handleOpenBookCall}
        openAuditModal={() => setAuditModalOpen(true)}
      />

      {/* Main View Container */}
      <main className="relative z-10 min-h-[calc(100vh-300px)]">
        {renderView()}
      </main>

      {/* Global Footer */}
      <Footer
        setCurrentView={setCurrentView}
        openBookCallModal={handleOpenBookCall}
        openAuditModal={() => setAuditModalOpen(true)}
      />

      {/* Floating Sticky Conversion Bar & WhatsApp Trigger */}
      <StickyFloatingBar
        openBookCallModal={handleOpenBookCall}
        openAuditModal={() => setAuditModalOpen(true)}
      />

      {/* Exit Intent Playbook Popup */}
      <ExitIntentModal
        openBookCallModal={handleOpenBookCall}
      />

      {/* Strategy Call Booking Calendar Modal */}
      <BookCallModal
        isOpen={bookCallModalOpen}
        onClose={() => setBookCallModalOpen(false)}
      />

      {/* Real-time AI Business Audit Diagnostic Modal */}
      <AIAuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        openBookCallModal={handleOpenBookCall}
      />

    </div>
  );
}
