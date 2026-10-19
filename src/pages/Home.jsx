import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Bot,
  Zap,
  Shield,
  Layers,
  Database,
  Globe2,
  Terminal,
  Activity,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Server,
  Eye,
  Radio,
  Boxes,
  Compass,
  Building2,
  Truck,
  HardHat,
  Sparkles,
  GitBranch,
  Lock,
  Workflow,
  HelpCircle,
  Users,
  Briefcase
} from 'lucide-react';

export default function Home({ onOpenModal }) {
  const [activeSim, setActiveSim] = useState('software');
  const [simRunning, setSimRunning] = useState(false);
  const [simLogs, setSimLogs] = useState([]);
  const [serviceCategory, setServiceCategory] = useState('all');

  // Arbisoft-Style Hero Typewriter & Slide Carousel
  const typewriterWords = [
    'AI',
    'Open Source',
    'Design',
    'Innovation',
    'Speed'
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);
  const [activeSlide, setActiveSlide] = useState(0);
  const [kickerIndex, setKickerIndex] = useState(0);

  const heroSlides = [
    {
      kickers: [
        'Engineering Software Solutions for 30+ Years',
        'Pioneering Autonomous AI Agents & Intelligent Pipelines',
        'Accelerating Enterprise Velocity with Frontier AI'
      ],
      line1: 'We Accelerate',
      line2Prefix: 'With ',
      isDynamic: true,
      highlightColor: '#38bdf8',
      bgImage: '/hero-slide-3.png',
      tag: 'ARCHITECTURE & SCALE'
    },
    {
      kickers: [
        'Zero Vendor Lock-In & Total Data Sovereignty',
        'Powering 100M+ Users with Open Source Platforms',
        'Enterprise Flexibility, Economy & Cloud Freedom'
      ],
      line1: 'We Leverage',
      line2Prefix: '',
      fixedWord: 'Open Source',
      highlightColor: '#4ade80',
      isDynamic: false,
      bgImage: '/hero-slide-2.jpg',
      tag: 'SOVEREIGNTY & SPEED'
    },
    {
      kickers: [
        'Human-Centric Digital Experiences That Delight',
        'Modern Product Strategy, UI/UX & Design Systems',
        'Crafting Intuitive Interfaces for Global Leaders'
      ],
      line1: 'We Lead',
      line2Prefix: 'With ',
      fixedWord: 'Design',
      highlightColor: '#60a5fa',
      isDynamic: false,
      bgImage: '/hero-slide-1.jpg',
      tag: 'USER EXPERIENCE'
    }
  ];

  // Dynamic kicker rotation within active slide
  useEffect(() => {
    setKickerIndex(0);
    const currentKickers = heroSlides[activeSlide]?.kickers || [];
    if (currentKickers.length <= 1) return;
    const kickerTimer = setInterval(() => {
      setKickerIndex((prev) => (prev + 1) % currentKickers.length);
    }, 2800);
    return () => clearInterval(kickerTimer);
  }, [activeSlide]);

  useEffect(() => {
    if (activeSlide !== 0) return;

    const currentWord = typewriterWords[wordIndex];
    let timer;

    if (!isDeleting && displayText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typewriterWords.length);
      setTypingSpeed(110);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
        setTypingSpeed(isDeleting ? 50 : 110);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, typingSpeed, activeSlide]);

  // Auto-advance slides every 6.5s
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);

  const scrollToAbout = () => {
    document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = "VisualSoft Global - A Technology Company | Turning Ideas into Products";
    window.scrollTo(0, 0);
  }, []);

  // Simulator Data matching VisualSoft Global's Core Offerings
  const simulators = {
    software: {
      name: 'AI-Enabled Custom Software',
      tabLabel: 'Custom Software',
      tabMetric: '99.9%',
      metricColor: '#38bdf8',
      badge: 'Enterprise Software',
      status: 'Production Live',
      latency: '0.8ms',
      throughput: '180k req/sec',
      confidence: '99.99%',
      description: 'Full-stack enterprise applications with integrated LLM reasoning, microservices, and high-concurrency cloud architecture.',
      colorClass: 'halo-brand-blue',
      textColor: 'text-glow-blue',
      icon: Terminal,
      initialLogs: [
        '[00:00:01] ARCHITECTURE: Microservices & API gateway initialized.',
        '[00:00:02] AI INTEGRATION: Custom LLM fine-tuned model connected via MCP.',
        '[00:00:03] DATA PIPELINE: PostgreSQL & Vector DB sync latency at 0.8ms.',
        '[00:00:04] SECURITY: Zero-trust token auth and role permissions verified.',
        '[00:00:05] STATUS: Enterprise software cluster running at 99.99% uptime.'
      ]
    },
    embedded: {
      name: 'AI-Enabled Embedded Systems',
      tabLabel: 'Embedded Systems',
      tabMetric: '4.2ms',
      metricColor: '#00f5a0',
      badge: 'IoT & Edge AI',
      status: 'Active Streaming',
      latency: '4.2ms',
      throughput: '128k msgs/sec',
      confidence: '99.8%',
      description: 'On-device neural inference and sensor telemetry stream from connected microcontrollers and edge hardware.',
      colorClass: 'halo-emerald',
      textColor: 'text-glow-emerald',
      icon: Cpu,
      initialLogs: [
        '[00:00:01] HARDWARE: ARM Cortex-M / ESP32 sensory bus connected.',
        '[00:00:02] INFERENCE: Edge TPU model v4 loaded with INT8 quantization.',
        '[00:00:03] TELEMETRY: Thermal variance at 0.02°C | Power draw: 1.8W.',
        '[00:00:04] CONNECTIVITY: Low-latency BLE & IoT cloud gateway synced.',
        '[00:00:05] STATUS: Autonomous firmware pipeline healthy. Zero packet loss.'
      ]
    },
    agents: {
      name: 'AI Agent Swarm & Automation',
      tabLabel: 'AI Agents',
      tabMetric: 'Autonomous',
      metricColor: '#c084fc',
      badge: 'Agentic Systems',
      status: 'Decision Engine 24/7',
      latency: '1.4ms',
      throughput: '45,000 tx/sec',
      confidence: '99.96%',
      description: 'Autonomous multi-agent swarms executing business workflows, tool calling, and cross-departmental coordination.',
      colorClass: 'halo-violet',
      textColor: 'text-glow-violet',
      icon: Bot,
      initialLogs: [
        '[00:00:01] COGNITIVE STACK: LangGraph multi-agent orchestration online.',
        '[00:00:02] TOOL CALLING: Model Context Protocol (MCP) handshake complete.',
        '[00:00:03] REASONING: Decomposing enterprise objective into sub-agent tasks.',
        '[00:00:04] GOVERNANCE: Policy guardrails and human approval gates cleared.',
        '[00:00:05] OUTCOME: 500+ automated business workflows executed in parallel.'
      ]
    }
  };

  useEffect(() => {
    setSimLogs(simulators[activeSim].initialLogs);
  }, [activeSim]);

  const runLiveSimulation = () => {
    setSimRunning(true);
    const newLog = `[${new Date().toLocaleTimeString()}] RE-BENCHMARKING: Running live telemetry benchmark for ${simulators[activeSim].name}...`;
    setSimLogs((prev) => [...prev, newLog]);
    setTimeout(() => {
      setSimLogs((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] OPTIMIZED: Latency stabilized at ${simulators[activeSim].latency}. Zero packet loss.`
      ]);
      setSimRunning(false);
    }, 1100);
  };

  // Exact Services from visualsoft-inc.com
  const services = [
    {
      id: 'custom-software',
      category: 'ai',
      badge: '01 // ENTERPRISE AI',
      title: 'AI-Enabled Custom Software Development',
      desc: 'We create AI-enabled custom software solutions that streamline operations and boost productivity. Our expertise in custom AI development, AI integration, and intelligent automation software ensures seamless, scalable systems.',
      tags: ['Custom AI Development', 'AI Integration', 'Intelligent Automation', 'Scalable Systems'],
      halo: 'halo-brand-blue',
      accentColor: '#38bdf8',
      textColor: 'text-glow-blue',
      icon: Terminal,
      link: '/ai-enabled-custom-software-development'
    },
    {
      id: 'embedded-systems',
      category: 'hardware',
      badge: '02 // EMBEDDED & EDGE',
      title: 'AI-Enabled Embedded Systems Design',
      desc: 'We design AI-enabled embedded systems with IoT and edge AI to deliver smart, real-time solutions. Our expertise in embedded software development, on-device AI, and system architecture ensures seamless, connected devices.',
      tags: ['IoT & Edge AI', 'Embedded Software', 'On-Device AI', 'System Architecture'],
      halo: 'halo-cyan',
      accentColor: '#00f5a0',
      textColor: 'text-glow-cyan',
      icon: Cpu,
      link: '/ai-enabled-embedded-system-design'
    },
    {
      id: 'ai-agents',
      category: 'ai',
      badge: '03 // AGENTIC SYSTEMS',
      title: 'AI Agent Development & Automation',
      desc: 'We engineer enterprise-grade AI agents that automate decisions, optimize workflows, and elevate customer experiences. Every agent is built for scale, transparency, and compliance.',
      tags: ['Decision Automation', 'Workflow Agents', 'SDR Sales Agents', 'Enterprise Scale'],
      halo: 'halo-violet',
      accentColor: '#c084fc',
      textColor: 'text-glow-violet',
      icon: Bot,
      link: '/ai-agent-development'
    },
    {
      id: 'managed-it',
      category: 'cloud',
      badge: '04 // CLOUD INFRASTRUCTURE',
      title: 'Managed IT & Infrastructure Services',
      desc: '24/7 monitoring, helpdesk support, and infrastructure management so your team can focus on the business, not the servers. We offer KPI-driven HelpDesk and application support designed to keep your business running smoothly.',
      tags: ['24/7 Monitoring', 'KPI-Driven HelpDesk', 'Offshore & On-Site Resources', 'Infrastructure'],
      halo: 'halo-amber',
      accentColor: '#f59e0b',
      textColor: 'text-glow-amber',
      icon: Server,
      link: '/managed-it-services'
    },
    {
      id: 'data-analytics',
      category: 'cloud',
      badge: '05 // INTELLIGENCE & DATA',
      title: 'Data Engineering & Advanced Analytics',
      desc: 'Develop advanced tools that collect and process vast datasets, analyze data to discover patterns and correlations and empower businesses to make informed and data-driven decisions.',
      tags: ['Data Visualization', 'Business Intelligence (BI)', 'Predictive Analytics & ML', 'Data Cleansing'],
      halo: 'halo-cyan',
      accentColor: '#38bdf8',
      textColor: 'text-glow-cyan',
      icon: Database,
      link: '/data-analytics'
    },
    {
      id: 'digital-marketing',
      category: 'cloud',
      badge: '06 // GROWTH TECHNOLOGY',
      title: 'Digital Marketing & Growth Solutions',
      desc: 'We empower businesses with cutting-edge marketing technologies to drive growth, enhance customer experiences, and unlock new opportunities across trade, digital marketing, and e-commerce.',
      tags: ['Social Media Marketing', 'Search Engine Optimization (SEO)', 'Content Marketing', 'Email Automation'],
      halo: 'halo-brand-blue',
      accentColor: '#60a5fa',
      textColor: 'text-glow-blue',
      icon: TrendingUp,
      link: '/digital-marketing'
    }
  ];

  const filteredServices =
    serviceCategory === 'all'
      ? services
      : services.filter((s) => s.category === serviceCategory);

  // Exact Industries from visualsoft-inc.com
  const industries = [
    {
      title: 'Fintech',
      desc: 'Secure, scalable software for payments, digital banking, and financial platforms that need to move fast without compromising compliance.',
      icon: Shield,
      accentColor: '#0a76db'
    },
    {
      title: 'Managed IT Services',
      desc: '24/7 monitoring, helpdesk support, and infrastructure management so your team can focus on the business, not the servers.',
      icon: Server,
      accentColor: '#0284c7'
    },
    {
      title: 'Trade & eCommerce',
      desc: 'Custom storefronts, inventory systems, and integrations that keep online retail operations running smoothly at any scale.',
      icon: Briefcase,
      accentColor: '#7c3aed'
    },
    {
      title: 'Transportations System',
      desc: 'AI-powered tracking, routing, and monitoring solutions built for fleets, logistics, and smart mobility infrastructure.',
      icon: Truck,
      accentColor: '#0284c7'
    },
    {
      title: 'Security and Surveillance',
      desc: 'Live monitoring, ANPR, and access-control software that turns cameras and sensors into a connected intelligence platform.',
      icon: Eye,
      accentColor: '#059669'
    },
    {
      title: 'Manufacturing & Supply Chain',
      desc: 'Embedded systems and data tools that bring real-time visibility to production lines and supply chain operations.',
      icon: Boxes,
      accentColor: '#d97706'
    },
    {
      title: 'Industrial Automation',
      desc: 'Custom embedded and IoT solutions that automate repetitive processes and reduce manual error on the factory floor.',
      icon: HardHat,
      accentColor: '#2563eb'
    },
    {
      title: 'TeleCommunication',
      desc: 'Software and infrastructure support built for the scale and uptime telecom operators require.',
      icon: Radio,
      accentColor: '#6366f1'
    }
  ];

  // Exact Features from visualsoft-inc.com
  const features = [
    { title: 'Agile Project Management', desc: 'Collaborative effort in Improving the efficiency, adaptability, and success rate of projects.' },
    { title: 'Version Control System', desc: 'Track changes, collaboration, backup and restore, branching and merging, code reviews.' },
    { title: '(CI/CD) Pipeline', desc: 'Automation of processes, Improved code quality, Faster development cycle, Immediate feedback and reduce risk of deployment failure.' },
    { title: 'Collaboration Tools', desc: 'Enhance teamwork, communication, project alignment effectively, fostering collaboration.' },
    { title: 'Analytics and Reporting', desc: 'Gain insights, improve decisions through performance data, enhance understanding.' },
    { title: 'Security & Access Control', desc: 'Protect data, manage access, ensure system security, maintain privacy.' },
    { title: 'Scalability & Performance', desc: 'Ensure solutions can grow and adapt to increasing demand without compromising performance.' },
    { title: 'Support & Feedback', desc: 'Responsive technical support and regular client feedback loops that resolve issues quickly and keep every release aligned with your goals.' }
  ];

  // Exact Presence from visualsoft-inc.com
  const regions = [
    { country: 'United Kingdom (UK)', city: 'London', flag: '🇬🇧', status: 'European Hub' },
    { country: 'United States (USA)', city: 'Wilmington / Austin', flag: '🇺🇸', status: 'Americas Hub' },
    { country: 'Middle East (Saudi Arabia)', city: 'Riyadh', flag: '🇸🇦', status: 'Strategic Partner' },
    { country: 'United Arab Emirates (UAE)', city: 'Dubai', flag: '🇦🇪', status: 'MENA Enterprise' },
    { country: 'Southeastern Asia (Malaysia)', city: 'Kuala Lumpur', flag: '🇲🇾', status: 'APAC Tech Office' },
    { country: 'Australia', city: 'Sydney', flag: '🇦🇺', status: 'Advisory Office' },
    { country: 'Pakistan', city: 'Islamabad / Lahore', flag: '🇵🇰', status: 'Global Engineering Lab' }
  ];

  return (
    <div className="home-page">
      {/* Exact Arbisoft Hero Section with Dynamic Background Image Carousel */}
      <section className="of6BXG_hero" id="hero">
        {/* Dynamic Background Image Carousel */}
        <div className="hero-bg-carousel-container">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-bg-carousel-slide ${activeSlide === idx ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />
          ))}
          <div className="of6BXG_heroOverlay" />
          <div className="of6BXG_heroGlow of6BXG_heroGlow1">
            <span className="of6BXG_heroGlowFill" />
          </div>
          <div className="of6BXG_heroGlow of6BXG_heroGlow2">
            <span className="of6BXG_heroGlowFill" />
          </div>
        </div>

        {/* Main Center Content */}
        <div className="of6BXG_heroMain">
          <div className="of6BXG_heroCenter">
            <div className="of6BXG_heroContainer">
              <div className="of6BXG_heroContent">
                <div
                  className="of6BXG_kicker"
                  style={{
                    borderLeftColor: heroSlides[activeSlide].highlightColor,
                    boxShadow: `0 4px 20px rgba(0, 0, 0, 0.4), -4px 0 16px ${heroSlides[activeSlide].highlightColor}33`
                  }}
                >
                  <span
                    key={`${activeSlide}-${kickerIndex}`}
                    className="of6BXG_kicker_text"
                  >
                    {heroSlides[activeSlide].kickers[kickerIndex % heroSlides[activeSlide].kickers.length]}
                  </span>
                </div>

                <h1 className="of6BXG_heading">
                  <span className="of6BXG_heading_line">{heroSlides[activeSlide].line1}</span>
                  <span className="of6BXG_heading_line">
                    {heroSlides[activeSlide].line2Prefix || ''}
                    <span
                      className="of6BXG_highlight_word"
                      style={{ color: heroSlides[activeSlide].highlightColor }}
                    >
                      {heroSlides[activeSlide].isDynamic ? displayText : heroSlides[activeSlide].fixedWord}
                    </span>
                    {heroSlides[activeSlide].isDynamic && <span className="Htay_W_cursor" />}
                  </span>
                </h1>
              </div>
            </div>
          </div>

          {/* Bottom Controls Row: Dots on Left, Scroll in Center */}
          <div className="of6BXG_bottomRow">
            {/* Slide Picker Dots (Bottom Left) */}
            <div className="AcNXfW_dots" role="group" aria-label="Slide picker">
              {heroSlides.map((slide, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className="AcNXfW_dot"
                  data-active={activeSlide === idx}
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  {activeSlide === idx && (
                    <svg className="AcNXfW_ring" width="26" height="26" viewBox="0 0 22 22">
                      <circle className="AcNXfW_ringTrack" cx="11" cy="11" r="9" />
                      <circle className="AcNXfW_ringProgress" cx="11" cy="11" r="9" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Centered Scroll Indicator */}
            <button
              type="button"
              onClick={scrollToAbout}
              className="of6BXG_scrollIndicator"
              aria-label="Scroll to next section"
            >
              <span className="of6BXG_scrollText">scroll</span>
              <div className="of6BXG_scrollLine">
                <span className="of6BXG_scrollLineBar" />
              </div>
            </button>
          </div>
        </div>


      </section>

      {/* About Us / Company Overview Section (Executive Corporate Design) */}
      <section className="about-enterprise-section" id="about-us">
        <div className="app-container">
          <div className="about-header-wrap">
            <span className="about-section-badge">WHO WE ARE</span>
            <h2 className="about-modern-headline">
              Turning Bold Ideas into <span className="text-highlight-blue">Market-Leading Products</span>
            </h2>
            <div className="about-intro-columns">
              <p className="about-intro-lead">
                VisualSoft Global (VS) offers top-notch ICT services to clients across the <strong>USA, UK, UAE, and Pakistan</strong>, focusing on turning visionary ideas into innovative, market-ready products with hands-on executive guidance.
              </p>
              <p className="about-intro-secondary">
                Our portfolio features enriched digital solutions across various industries, enabling customers to achieve exceptional business growth. Our executive management are veteran technology leaders, providing technical mastery at every phase.
              </p>
            </div>
          </div>

          <div className="company-pillars-grid">
            {/* Card 1: 30+ Years Proven Excellence */}
            <div className="pillar-corporate-card card-accent-blue">
              <div className="pillar-top-accent" />
              <div className="pillar-card-content">
                <div className="pillar-header-row">
                  <span className="pillar-kicker-tag">HERITAGE & MASTERY</span>
                </div>
                <div className="pillar-stat-hero">
                  <span className="stat-number-main">30<span className="stat-plus">+</span></span>
                  <span className="stat-label-main">Years of Proven Engineering Excellence</span>
                </div>
                <p className="pillar-desc">
                  Providing mission-critical technology solutions and hands-on executive mastery across four continents, ensuring every enterprise system is built for lasting scale and performance.
                </p>
                <div className="pillar-highlights-row">
                  <div className="highlight-stat-item">
                    <span className="highlight-val">100%</span>
                    <span className="highlight-lbl">Code & IP Ownership</span>
                  </div>
                  <div className="highlight-stat-sep" />
                  <div className="highlight-stat-item">
                    <span className="highlight-val">4</span>
                    <span className="highlight-lbl">Global Regions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Our Vision */}
            <div className="pillar-corporate-card card-accent-cyan">
              <div className="pillar-top-accent" />
              <div className="pillar-card-content">
                <div className="pillar-header-row">
                  <div className="pillar-icon-symbol icon-cyan">
                    <Compass size={22} />
                  </div>
                  <span className="pillar-kicker-tag">OUR VISION</span>
                </div>
                <h3 className="pillar-title">Transformative Technology Partner</h3>
                <p className="pillar-desc">
                  Our aim is to be globally acknowledged as an icon of reliable and effective information technology partner—architecting cutting-edge AI software and embedded solutions that redefine digital performance.
                </p>
                <div className="pillar-tags-row">
                  <span className="pillar-tag-chip">Enterprise Scale</span>
                  <span className="pillar-tag-chip">AI Leadership</span>
                  <span className="pillar-tag-chip">Uncompromising Trust</span>
                </div>
              </div>
            </div>

            {/* Card 3: Our Mission */}
            <div className="pillar-corporate-card card-accent-green">
              <div className="pillar-top-accent" />
              <div className="pillar-card-content">
                <div className="pillar-header-row">
                  <div className="pillar-icon-symbol icon-green">
                    <TrendingUp size={22} />
                  </div>
                  <span className="pillar-kicker-tag">OUR MISSION</span>
                </div>
                <h3 className="pillar-title">Accelerating Digital Evolution</h3>
                <p className="pillar-desc">
                  Assist customers during each stage of digital transformation to achieve agility, operational efficiency, and rock-solid security—turning visionary concepts into resilient, market-defining products.
                </p>
                <div className="pillar-tags-row">
                  <span className="pillar-tag-chip">Agile Velocity</span>
                  <span className="pillar-tag-chip">Security & Scale</span>
                  <span className="pillar-tag-chip">Measurable ROI</span>
                </div>
              </div>
            </div>
          </div>

          <div className="corporate-hubs-strip">
            <div className="hubs-strip-left">
              <span className="hubs-strip-title">Global Engineering Presence:</span>
              <div className="hubs-locations-list">
                <span className="hub-loc-item">🇺🇸 United States</span>
                <span className="hub-loc-item">🇬🇧 United Kingdom</span>
                <span className="hub-loc-item">🇦🇪 UAE</span>
                <span className="hub-loc-item">🇵🇰 Pakistan</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenModal}
              className="corporate-contact-btn"
            >
              <span>Contact Leadership</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>


      {/* Services Section (High-Tech Enterprise Redesign) */}
      <section className="services-enterprise-section" id="services">
        <div className="app-container">
          <div className="section-header">
            <h2 className="section-title">
              Innovative Technology Solutions for <span className="text-gradient-brand">Business Growth</span>
            </h2>
            <p className="section-subtitle">
              We create AI-enabled custom software solutions, embedded systems, AI agents, and managed IT services that streamline operations and boost productivity.
            </p>
          </div>

          {/* Filter Tabs Navigation (Always 1 Row) */}
          <div className="services-filter-wrapper">
            <div className="services-filter-nav">
              <button
                type="button"
                onClick={() => setServiceCategory('all')}
                className={`services-filter-btn ${serviceCategory === 'all' ? 'active' : ''}`}
              >
                <span>View ALL SERVICES</span>
              </button>
              <button
                type="button"
                onClick={() => setServiceCategory('ai')}
                className={`services-filter-btn ${serviceCategory === 'ai' ? 'active' : ''}`}
              >
                <Terminal size={14} />
                <span>AI & Software Development</span>
              </button>
              <button
                type="button"
                onClick={() => setServiceCategory('hardware')}
                className={`services-filter-btn ${serviceCategory === 'hardware' ? 'active' : ''}`}
              >
                <Cpu size={14} />
                <span>Embedded Systems & IoT</span>
              </button>
              <button
                type="button"
                onClick={() => setServiceCategory('cloud')}
                className={`services-filter-btn ${serviceCategory === 'cloud' ? 'active' : ''}`}
              >
                <Server size={14} />
                <span>Managed IT & Data</span>
              </button>
            </div>
          </div>

          <div className="services-modern-grid">
            {filteredServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div key={srv.id} className="service-card-modern">
                  <div className="service-card-header">
                    <div className="service-badge-pill">
                      <span>{srv.badge}</span>
                    </div>
                    <div className="service-icon-wrapper">
                      <div className={`service-icon-halo ${srv.halo}`} />
                      <IconComp size={24} style={{ color: srv.accentColor }} />
                    </div>
                  </div>

                  <div className="service-card-content">
                    <h3 className="service-card-title">{srv.title}</h3>
                    <p className="service-card-desc">{srv.desc}</p>

                    <div className="service-tags-wrap">
                      {srv.tags.map((tag, i) => (
                        <span key={i} className="service-tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="service-card-footer">
                    <Link to={srv.link} className="service-explore-link">
                      <span>Learn More</span>
                      <ChevronRight size={16} className="explore-arrow" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries & Solutions Section (Executive White Corporate Design) */}
      <section className="industries-corporate-section" id="industries">
        <div className="app-container">
          <div className="industries-header-wrap">
            <span className="industries-badge">INDUSTRIES & SECTORS</span>
            <h2 className="industries-title">
              Bringing Productivity & Efficiency with Accuracy by Our <span className="text-highlight-blue">Digital Transformation Skills and Products</span>
            </h2>
            <p className="industries-subtitle">
              Purpose-built digital architectures, embedded IoT engineering, and secure cloud platforms tailored to industry-specific operational demands.
            </p>
          </div>

          <div className="industries-grid-4x2">
            {industries.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <div key={i} className="industry-corporate-card">
                  <div className="industry-card-topbar" style={{ backgroundColor: ind.accentColor }} />
                  <div className="industry-card-inner">
                    <div
                      className="industry-icon-pill"
                      style={{
                        backgroundColor: `${ind.accentColor}12`,
                        borderColor: `${ind.accentColor}28`,
                        color: ind.accentColor
                      }}
                    >
                      <IndIcon size={22} strokeWidth={2.2} />
                    </div>
                    <h3 className="industry-card-title">{ind.title}</h3>
                    <p className="industry-card-desc">{ind.desc}</p>
                    <div className="industry-card-hover-link">
                      <span>Explore Sector</span>
                      <ArrowRight size={14} className="hover-arrow" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Performance Banner (DARK SECTION) */}
      <section className="performance-corporate-section">
        <div className="app-container">
          <div className="performance-quote-card">
            <span className="performance-badge">EXECUTIVE PHILOSOPHY</span>
            <h2 className="performance-quote-title">
              "Our performance is your success. Our passion is innovation. Our expertise is unmatched. We get you more..."
            </h2>
            <p className="performance-quote-subtitle">
              Partner with technology leaders to design, build, and support enterprise systems that drive verifiable business growth.
            </p>
            <button onClick={onOpenModal} className="performance-cta-btn">
              <Sparkles size={18} />
              <span>Contact Us Today</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. Features & Methodology (LIGHT SECTION) */}
      <section className="features-corporate-section" id="methodology">
        <div className="app-container">
          <div className="features-header-wrap">
            <span className="features-badge">ENGINEERING EXCELLENCE</span>
            <h2 className="features-title">
              Enhancing Creativity, <span className="text-highlight-blue">Step by Step</span>
            </h2>
            <p className="features-subtitle">
              Our proven execution framework ensures high reliability, predictability, and continuous delivery from proof-of-concept to global deployment.
            </p>
          </div>

          <div className="features-corporate-grid">
            {features.map((feat, i) => (
              <div key={i} className="feature-corporate-card">
                <div className="feature-step-indicator">
                  <span className="feature-step-number">0{i + 1}</span>
                  <div className="feature-step-line" />
                </div>
                <h3 className="feature-card-title">{feat.title}</h3>
                <p className="feature-card-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Presence Section (DARK SECTION) */}
      <section className="presence-corporate-section" id="presence">
        <div className="app-container">
          <div className="presence-header-wrap">
            <span className="presence-badge">GLOBAL NETWORK</span>
            <h2 className="presence-title">
              Serving Clients <span className="text-highlight-cyan">Worldwide</span>
            </h2>
            <p className="presence-subtitle">
              VisualSoft Global offers top-notch ICT services across our regional centers in the UK, USA, Middle East, Southeastern Asia, Australia, and Pakistan.
            </p>
          </div>
        </div>

        {/* Moving Left-to-Right Continuous Infinite Marquee */}
        <div className="regions-marquee-container">
          <div className="regions-marquee-track">
            {[...regions, ...regions, ...regions, ...regions].map((reg, idx) => (
              <div key={idx} className="region-card">
                <span className="region-flag">{reg.flag}</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>{reg.country}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.65)', display: 'block', marginTop: '2px' }}>{reg.city}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
                    <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                    <span style={{ fontSize: '0.75rem', color: '#00f5a0', fontWeight: 600 }}>{reg.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Career Section (LIGHT SECTION) */}
      <section className="career-corporate-section">
        <div className="app-container">
          <div className="career-corporate-card">
            <div className="career-card-left">
              <span className="career-badge">JOIN OUR GLOBAL TEAM</span>
              <h2 className="career-card-title">
                Come join our team and find your potential.
              </h2>
              <p className="career-card-desc">
                Work alongside passionate engineers, AI researchers, and digital consultants delivering high-impact solutions globally. This is an exciting time to join VisualSoft Global!
              </p>
            </div>
            <Link to="/career" className="career-action-btn">
              <span>Find Out More</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
