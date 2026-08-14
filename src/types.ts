export type PageView = 
  | 'home'
  | 'about'
  | 'services'
  | 'seo'
  | 'web-development'
  | 'landing-pages'
  | 'sales-funnels'
  | 'ai-automation'
  | 'lead-generation'
  | 'paid-ads'
  | 'email-marketing'
  | 'social-media-marketing'
  | 'case-studies'
  | 'industries'
  | 'process'
  | 'pricing'
  | 'testimonials'
  | 'blog'
  | 'free-audit'
  | 'book-call'
  | 'contact'
  | 'careers'
  | 'privacy'
  | 'terms'
  | 'refund'
  | 'cookies'
  | '404';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  metrics: string;
  features: string[];
  deliverables: string[];
  pageKey: PageView;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  serviceCategory: 'seo' | 'web-development' | 'sales-funnels' | 'ai-automation' | 'lead-generation';
  title: string;
  metricHighlight: string;
  metricLabel: string;
  secondaryMetric: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  clientQuote: string;
  clientAuthor: string;
  clientRole: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
  videoThumbnail?: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: string;
  priceQuarterly: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  guarantee: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  content: string;
}

export interface IndustryBlueprint {
  id: string;
  name: string;
  iconName: string;
  painPoint: string;
  solution: string;
  avgConversionLift: string;
  keyFeatures: string[];
}

export interface AIAuditRequest {
  website: string;
  industry: string;
  currentRevenue?: string;
  targetRevenue?: string;
  mainChallenge?: string;
  email: string;
  phone?: string;
}

export interface AIAuditResult {
  headline: string;
  overallScore: number;
  potentialRevenueLift: string;
  summary: string;
  leaks: {
    title: string;
    severity: 'High' | 'Medium' | 'Critical';
    fix: string;
  }[];
  actionPlan: string[];
}
