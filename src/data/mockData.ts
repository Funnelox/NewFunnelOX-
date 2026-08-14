import { ServiceItem, CaseStudy, Testimonial, PricingPlan, IndustryBlueprint, BlogPost } from '../types';
import { SITE_IMAGES } from './images';

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    pageKey: 'web-development',
    title: 'Website Development',
    shortDesc: 'High-performance websites designed to build trust, communicate value and turn visitors into customers.',
    fullDesc: 'Your website is your primary digital asset. We craft ultra-premium, high-performance websites with responsive micro-interactions, clean typography, and fast loading speeds designed to build instant trust and drive conversion.',
    iconName: 'Layout',
    badge: 'Digital Flagship',
    metrics: 'High-Performance UI',
    features: [
      'Custom React & Modern Responsive Architecture',
      'Conversion-Optimized UX & Information Architecture',
      'Fast Page Load Performance & Core Web Vitals',
      'Mobile-First Layouts & Intuitive Navigation',
      'Clean Dynamic Content & Security Infrastructure'
    ],
    deliverables: [
      'Custom Design Prototypes & User Experience Architecture',
      'Full Responsive Web Application Build',
      'Interactive Lead Capture Forms & Calendar Integration',
      'Technical SEO & Performance Optimization Setup'
    ]
  },
  {
    id: 'landing-pages',
    pageKey: 'landing-pages',
    title: 'Landing Pages',
    shortDesc: 'Focused experiences built around one audience, one offer and one clear action.',
    fullDesc: 'Generic pages bleed ad spend. We engineer targeted, single-focused landing pages with compelling value propositions, micro-commitment intake forms, and clear CTA hierarchies designed to convert traffic into qualified inquiries.',
    iconName: 'Zap',
    badge: 'Conversion-Focused',
    metrics: 'Focused Action',
    features: [
      'Direct-Response Value-Driven Copywriting',
      'Micro-Commitment Intake & Qualification Forms',
      'A/B Testing Ready System Architecture',
      'Frictionless Mobile-First Form Interactions',
      'Instant Lead Alert Notification Workflows'
    ],
    deliverables: [
      'Turnkey Landing Page Build & Deployment',
      'Offer Positioning & Headline Messaging Hooks',
      'Integrated CRM & Calendar Scheduling',
      'Conversion Analytics & Event Tracking'
    ]
  },
  {
    id: 'sales-funnels',
    pageKey: 'sales-funnels',
    title: 'Sales Funnels',
    shortDesc: 'Strategic customer journeys designed to turn attention into qualified leads and sales conversations.',
    fullDesc: 'We build structured customer journeys that educate and qualify prospects before they schedule a conversation. Our sales funnels integrate strategic video sales letters, intake questionnaires, and automated follow-ups.',
    iconName: 'TrendingUp',
    badge: 'Customer Acquisition',
    metrics: 'Structured Journey',
    features: [
      'Video Sales Letter (VSL) Layouts & Page Design',
      'Multi-Step Intake Quizzes & Lead Qualification',
      'Automated Calendar Sync & Booking Flow',
      'Clear Messaging & Offer Framing Strategy',
      'Structured Retargeting & Nurture Journeys'
    ],
    deliverables: [
      'Complete Interactive Sales Funnel System',
      'Custom Messaging & Offer Strategy Alignment',
      'Automated Email & Notification Workflows',
      'Analytics & Funnel Drop-off Tracking'
    ]
  },
  {
    id: 'seo',
    pageKey: 'seo',
    title: 'SEO & Search Growth',
    shortDesc: 'Search strategies that help your business get discovered by people actively looking for what you offer.',
    fullDesc: 'Search traffic matters when it brings ready-to-buy prospective clients. Our SEO strategy focuses on commercial buyer intent keywords, technical performance optimization, and authority-building content pipelines that rank your business for high-value queries.',
    iconName: 'Search',
    badge: 'Search Intent',
    metrics: 'Organic Authority',
    features: [
      'Commercial-Intent Keyword Discovery & Mapping',
      'Technical SEO & Site Speed Optimization',
      'Structured Data & Schema Implementation',
      'High-Value Content & On-Page Strategy',
      'Local Business & Google Maps Visibility'
    ],
    deliverables: [
      'Comprehensive Technical SEO Diagnostic & Strategy',
      'Commercial Content & Keyword Blueprint',
      'On-Page Optimization & Internal Structure',
      'Ongoing Search Visibility & Inquiry Analytics'
    ]
  },
  {
    id: 'lead-generation',
    pageKey: 'lead-generation',
    title: 'Lead Generation',
    shortDesc: 'Acquisition systems designed to attract, capture and qualify potential customers.',
    fullDesc: 'Build a predictable customer acquisition engine. We combine multi-channel traffic strategy, high-intent lead magnets, database reactivation, and qualified inquiry booking workflows.',
    iconName: 'Target',
    badge: 'Qualified Pipeline',
    metrics: 'Consistent Growth',
    features: [
      'High-Intent Paid & Organic Traffic Channels',
      'Automated Lead Nurturing & Follow-Up',
      'Targeted Lead Magnet & Value Asset Creation',
      'Real-Time Lead Alert Notifications',
      'Conversion Tracking & Cost-Per-Lead Attribution'
    ],
    deliverables: [
      'Multi-Channel Acquisition System Architecture',
      'Lead Magnet Design & Capture Assets',
      'Instant CRM Lead Routing & Alerts',
      'Performance Optimization & Reporting'
    ]
  },
  {
    id: 'paid-ads',
    pageKey: 'paid-ads',
    title: 'Paid Advertising',
    shortDesc: 'Google and Meta campaigns built around your audience, offer and conversion goals.',
    fullDesc: 'Turn ad spend into measurable business growth. We build, write, test, and manage targeted campaigns on Google Search and Meta platforms to bring motivated prospects directly into your growth funnel.',
    iconName: 'Globe',
    badge: 'Performance Marketing',
    metrics: 'Targeted Reach',
    features: [
      'High-Intent Keyword Search Ads (Google Ads)',
      'Direct-Response Visual & Video Ad Strategy (Meta)',
      'Laser-Targeted B2B & B2C Audience Profiling',
      'Continuous Creative & Audience Optimization',
      'Conversion Tracking & Attribution Setup'
    ],
    deliverables: [
      'Campaign Architecture & Ad Asset Production',
      'Strategic Copywriting & Message Testing',
      'Ongoing Bid & Budget Management',
      'Transparent Acquisition Cost Reporting'
    ]
  },
  {
    id: 'ai-automation',
    pageKey: 'ai-automation',
    title: 'AI Automation',
    shortDesc: 'Automate lead qualification, follow-ups, customer communication and repetitive business workflows.',
    fullDesc: 'Reduce repetitive manual work and eliminate follow-up delays. We deploy AI-powered assistants that handle initial inquiries, pre-qualify prospects based on project criteria, and guide qualified leads directly to your calendar.',
    iconName: 'Cpu',
    badge: 'Smart Workflows',
    metrics: 'Instant Lead Response',
    features: [
      '24/7 AI Lead Qualification & Assistant Workflows',
      'Automated Intake & Qualification Screening',
      'CRM Integration (HubSpot, GoHighLevel, Salesforce)',
      'Automated Multi-Channel Nurture Sequences',
      'Custom API & Webhook Workflow Automation'
    ],
    deliverables: [
      'Trained AI Lead Assistant Setup',
      'Multi-Channel Automated Messaging Workflows',
      'Custom Zapier / Make Integration Bridges',
      'Workflow Performance Monitoring'
    ]
  },
  {
    id: 'email-marketing',
    pageKey: 'email-marketing',
    title: 'Email Marketing',
    shortDesc: 'Build relationships with leads and customers through strategic email campaigns and automation.',
    fullDesc: 'Nurture prospects into long-term clients with automated email flows, lifecycle campaigns, and segmentation strategies that keep your business top of mind.',
    iconName: 'Mail',
    badge: 'Audience Nurturing',
    metrics: 'Lifecycle Engagement',
    features: [
      'Automated Welcome & Onboarding Email Sequences',
      'Lead Nurturing & Educational Campaign Sequences',
      'Audience Segmentation & Behavioral Triggers',
      'Custom Branded Email Template Design',
      'Deliverability & Open-Rate Optimization'
    ],
    deliverables: [
      'Email Marketing Strategy & Lifecycle Mapping',
      'Custom Copywriting & Template Build',
      'CRM & Email Automation Platform Setup',
      'Engagement & Conversion Analytics'
    ]
  },
  {
    id: 'social-media-marketing',
    pageKey: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDesc: 'Build a stronger digital presence with strategic content and social media growth systems.',
    fullDesc: 'Establish brand authority across key platforms with strategic content distribution, targeted messaging, and community engagement built around your value proposition.',
    iconName: 'Share2',
    badge: 'Brand Authority',
    metrics: 'Digital Presence',
    features: [
      'Strategic Content Planning & Messaging Framework',
      'Brand Authority Building & Visual Assets',
      'Multi-Channel Distribution Strategy',
      'Audience Engagement & Community Management',
      'Brand Awareness & Traffic Generation'
    ],
    deliverables: [
      'Social Media Strategy & Editorial Roadmap',
      'Custom Branded Content Templates',
      'Channel Setup & Branding Alignment',
      'Monthly Reach & Growth Analytics'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nexus-saas',
    clientName: 'Nexus Cloud AI (Concept Project)',
    industry: 'Enterprise SaaS',
    serviceCategory: 'sales-funnels',
    title: 'B2B Enterprise SaaS Growth via High-Ticket VSL Funnel (Concept Project)',
    metricHighlight: 'CONCEPT PROJECT',
    metricLabel: 'Illustrative Architecture',
    secondaryMetric: 'Streamlined Booking Journey',
    summary: 'An illustrative overview showing how an interactive VSL funnel with qualification steps optimizes demo booking conversion flows.',
    challenge: 'High acquisition friction and multi-step booking drop-off.',
    solution: 'Designed a high-converting landing experience with an interactive VSL, 3-question qualification quiz, and instant calendar booking.',
    results: [
      'Demonstrates streamlined visitor-to-demo request completion flow',
      'Illustrates pre-qualification before sales consultations',
      'Shows automated email and SMS appointment confirmation integration'
    ],
    clientQuote: 'This conceptual model demonstrates our approach to reducing friction in B2B demo acquisition.',
    clientAuthor: 'Growth Design Team',
    clientRole: 'FunnelOX Strategy Blueprint',
    image: SITE_IMAGES.vslFunnel,
    tags: ['CONCEPT PROJECT', 'Sales Funnels', 'B2B SaaS', 'CRO']
  },
  {
    id: 'apex-consulting',
    clientName: 'Apex Advisory Group (Concept Project)',
    industry: 'Executive Consulting',
    serviceCategory: 'lead-generation',
    title: 'High-Ticket Consulting Lead Generation Framework (Concept Project)',
    metricHighlight: 'CONCEPT PROJECT',
    metricLabel: 'Pipeline Blueprint',
    secondaryMetric: 'Strategy Consultations',
    summary: 'An illustrative case study demonstrating multi-channel acquisition systems for high-value consulting services.',
    challenge: 'Unpredictable inquiry flow and manual outreach bottlenecks.',
    solution: 'Engineered a multi-channel acquisition funnel backed by an executive lead magnet, automated follow-ups, and retargeting ads.',
    results: [
      'Illustrates structured lead qualification for key decision-makers',
      'Shows predictable inquiry routing mechanisms',
      'Demonstrates automated pre-call nurture sequences'
    ],
    clientQuote: 'An example of how FunnelOX structures predictable lead acquisition for advisory firms.',
    clientAuthor: 'Acquisition Architecture',
    clientRole: 'FunnelOX Strategy Blueprint',
    image: SITE_IMAGES.consultingLeadGen,
    tags: ['CONCEPT PROJECT', 'Lead Generation', 'Consulting', 'B2B Strategy']
  },
  {
    id: 'solaris-health',
    clientName: 'Solaris Health (Concept Project)',
    industry: 'Healthcare & Local Business',
    serviceCategory: 'seo',
    title: 'Local Search & High-Speed Web Infrastructure (Concept Project)',
    metricHighlight: 'CONCEPT PROJECT',
    metricLabel: 'Search Visibility Blueprint',
    secondaryMetric: 'Fast Web Infrastructure',
    summary: 'An illustrative showcase demonstrating technical SEO, localized content architecture, and rapid page loading optimization.',
    challenge: 'Limited local search visibility and legacy mobile site friction.',
    solution: 'Designed modern web architecture on high-performance React stack with optimized localized service landing pages.',
    results: [
      'Illustrates local search engine indexing strategies',
      'Shows mobile-first performance and fast page load layout',
      'Demonstrates direct contact form and appointment booking flow'
    ],
    clientQuote: 'Demonstrating technical SEO structure and performance optimization for local business growth.',
    clientAuthor: 'SEO Engineering Team',
    clientRole: 'FunnelOX Strategy Blueprint',
    image: SITE_IMAGES.localSearchInfra,
    tags: ['CONCEPT PROJECT', 'SEO', 'Web Development', 'Local Business']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'A beautiful website is only the beginning. FunnelOX combines strategy, technology, marketing and automation to create digital experiences designed around measurable business outcomes.',
    author: 'FunnelOX Commitment',
    role: 'Digital Growth Standard',
    company: 'FunnelOX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    metric: 'Strategy-Led Execution',
    rating: 5
  },
  {
    id: '2',
    quote: 'We focus on building connected digital systems — where websites, sales funnels, SEO, advertising and AI automation work together seamlessly.',
    author: 'FunnelOX Methodology',
    role: 'Growth Systems Architecture',
    company: 'FunnelOX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    metric: 'Connected Growth',
    rating: 5
  },
  {
    id: '3',
    quote: 'Automating lead qualification and customer follow-up reduces manual friction and allows business owners to focus on closing deals and serving clients.',
    author: 'FunnelOX Automation',
    role: 'AI & Workflow Automation',
    company: 'FunnelOX',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    metric: 'Automated Efficiency',
    rating: 5
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'foundation',
    name: 'FOUNDATION',
    tagline: 'For businesses getting their digital foundation right.',
    priceMonthly: 'Custom',
    priceQuarterly: 'Custom',
    popular: false,
    guarantee: 'Tailored Scope & Strategy',
    features: [
      'Website Strategy',
      'Website Development',
      'Landing Page',
      'Analytics Setup',
      'Mobile Responsive Architecture',
      'Core Brand & Content Alignment'
    ],
    ctaText: 'Request a Proposal'
  },
  {
    id: 'growth',
    name: 'GROWTH',
    tagline: 'For businesses ready to generate and convert more demand.',
    priceMonthly: 'Custom',
    priceQuarterly: 'Custom',
    popular: true,
    guarantee: 'Full Growth Infrastructure',
    features: [
      'Everything in Foundation +',
      'Website / Sales Funnel Architecture',
      'Search Engine Optimization (SEO)',
      'Lead Generation System',
      'Paid Advertising Campaigns',
      'Conversion Optimization'
    ],
    ctaText: 'Request a Proposal'
  },
  {
    id: 'scale',
    name: 'SCALE',
    tagline: 'For businesses ready to connect marketing, automation and growth systems.',
    priceMonthly: 'Custom',
    priceQuarterly: 'Custom',
    popular: false,
    guarantee: 'Comprehensive Growth Partnership',
    features: [
      'Everything in Growth +',
      'Complete Growth Strategy Blueprint',
      'Performance Marketing & Ads',
      'AI Automation & Lead Qualification Workflows',
      'CRM / Workflow Integration',
      'Ongoing Conversion & System Optimization'
    ],
    ctaText: 'Request a Proposal'
  }
];

export const INDUSTRY_BLUEPRINTS: IndustryBlueprint[] = [
  {
    id: 'coaches-consultants',
    name: 'Coaches & Consultants',
    iconName: 'UserCheck',
    painPoint: 'Turn your expertise into a stronger online presence and lead-generation system.',
    solution: 'High-Converting VSL Application Funnel + Lead Qualification Intake.',
    avgConversionLift: 'Strategy-Led Positioning',
    keyFeatures: ['Qualification Micro-Quiz', 'Video Sales Letter Layout', 'Automated Lead Nurture']
  },
  {
    id: 'service-businesses',
    name: 'Service Businesses',
    iconName: 'Briefcase',
    painPoint: 'Generate more qualified enquiries and create a digital experience that builds trust.',
    solution: 'High-Performance Web Architecture + Local Search Engine Visibility.',
    avgConversionLift: 'Conversion-Focused Design',
    keyFeatures: ['Service Landing Pages', 'Instant Inquiries Capture', 'Search Engine Optimization']
  },
  {
    id: 'agencies-professionals',
    name: 'Agencies & Professionals',
    iconName: 'Building2',
    painPoint: 'Strengthen positioning, improve acquisition and automate repetitive workflows.',
    solution: 'Lead Generation Engine + Automated Lead Qualification Workflows.',
    avgConversionLift: 'Predictable Pipeline Systems',
    keyFeatures: ['Targeted Lead Capture', 'Instant Lead Alert Routing', 'CRM Workflow Integration']
  },
  {
    id: 'startups-saas',
    name: 'Startups & SaaS',
    iconName: 'Server',
    painPoint: 'Build digital experiences designed for acquisition, activation and long-term growth.',
    solution: 'Modern High-Speed Digital Flagship + Interactive Product Showcase.',
    avgConversionLift: 'Scalable Infrastructure',
    keyFeatures: ['Fast Web Architecture', 'Interactive Lead Tools', 'Conversion Analytics Setup']
  },
  {
    id: 'growing-smes',
    name: 'Growing SMEs',
    iconName: 'MapPin',
    painPoint: 'Connect marketing, technology and automation into a scalable digital system.',
    solution: 'Comprehensive Digital Growth Infrastructure + AI Automation.',
    avgConversionLift: 'Connected Growth Partner',
    keyFeatures: ['SEO & Local Search', '24/7 AI Lead Assistant', 'Multi-Channel Traffic Systems']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Connecting Strategy, Design and Technology into One Growth System',
    excerpt: 'Why isolated marketing tactics fail and how connecting websites, sales funnels, SEO and automation creates sustainable business growth.',
    category: 'Digital Strategy',
    readTime: '5 min read',
    date: 'August 2026',
    author: 'FunnelOX Strategy Team',
    authorRole: 'Growth Strategists @ FunnelOX',
    image: SITE_IMAGES.vslFunnel,
    content: `
      Your website, advertising, sales funnels and customer follow-up shouldn't operate in silos.

      When businesses hire different vendors for web design, SEO, ads, and copywriting, the customer journey breaks.

      ### The Connected Growth System Approach
      At FunnelOX, we connect every piece of your digital infrastructure around clear business outcomes:
      1. **Attract**: High-intent search and targeted paid advertising bring qualified traffic.
      2. **Convert**: High-converting websites and landing pages turn visitors into leads.
      3. **Automate**: AI workflows and CRM integration qualify and route leads instantly.
      4. **Scale**: Ongoing optimization and data-backed decisions drive sustainable growth.
    `
  },
  {
    id: '2',
    title: 'How AI Automation Improves Lead Qualification and Follow-Up Speed',
    excerpt: 'Discover how modern AI workflows help businesses respond to inquiries instantly and reduce manual sales administrative overhead.',
    category: 'AI Automation',
    readTime: '4 min read',
    date: 'July 2026',
    author: 'FunnelOX Automation Team',
    authorRole: 'AI Workflow Specialists',
    image: SITE_IMAGES.aiAutomation,
    content: `
      Inquiry response speed plays a vital role in converting prospective buyers into clients.

      When a prospect submits a lead form or asks a question online, delayed follow-up often results in lost opportunities.

      ### Practical AI Automation Applications
      - **Instant Lead Screening**: Qualify prospects based on project scope, timeline, and requirements.
      - **Calendar Integration**: Guide pre-qualified leads directly to schedule a strategy consultation.
      - **Workflow Integration**: Sync inquiry details directly to your existing CRM without manual data entry.
    `
  },
  {
    id: '3',
    title: 'Commercial Intent SEO: Focusing Search Traffic on Business Outcomes',
    excerpt: 'Why ranking for high-intent search queries is more valuable than driving generic website traffic.',
    category: 'SEO Strategy',
    readTime: '6 min read',
    date: 'July 2026',
    author: 'FunnelOX Search Team',
    authorRole: 'SEO Specialists @ FunnelOX',
    image: SITE_IMAGES.seoGrowth,
    content: `
      Not all website traffic is created equal. Driving thousands of casual readers to informative blog posts rarely yields meaningful business inquiries.

      Commercial intent SEO focuses specifically on terms used by people who are actively researching products, services, and solutions they intend to buy.
    `
  }
];

export const FAQS = [
  {
    question: 'What is FunnelOX and what do you do?',
    answer: 'FunnelOX is an AI-powered digital growth company. We help businesses attract qualified customers, convert more leads, and scale through high-converting websites, sales funnels, SEO, performance marketing, lead generation, and AI-powered automation.'
  },
  {
    question: 'How quickly can FunnelOX launch my digital growth system?',
    answer: 'Depending on the project scope, custom websites, landing pages, or funnel systems are typically delivered in 14 to 21 business days through structured sprint milestones.'
  },
  {
    question: 'What makes FunnelOX different from traditional agencies?',
    answer: 'Rather than selling disconnected marketing services or generic templates, FunnelOX acts as a single growth partner. We connect strategy, design, technology, marketing, and AI automation into one streamlined customer acquisition system built around your business goals.'
  },
  {
    question: 'Do you handle copywriting, messaging and asset creation?',
    answer: 'Yes! We provide full turnkey execution. Our team handles value proposition positioning, copywriting, visual asset design, web development, tracking setup, and workflow integration.'
  },
  {
    question: 'How does AI Automation work in practice for my business?',
    answer: 'We implement practical AI workflows that automate lead qualification, answer prospective customer questions 24/7, route qualified leads to your calendar or sales team, and eliminate repetitive administrative tasks.'
  }
];
