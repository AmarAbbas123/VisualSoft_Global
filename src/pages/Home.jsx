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

      {/* 1. STATS IMPACT BAND (LIGHT #ffffff) */}
      <section className="as-stats-band">
        <div className="app-container">
          <div className="as-stats-grid">
            <div className="as-stat-box">
              <span className="as-stat-number">
                30<span className="as-stat-plus">+</span>
              </span>
              <div className="as-stat-label-wrap">
                <span className="as-stat-title">Years In Business</span>
                <span className="as-stat-sub">Engineering Heritage</span>
              </div>
            </div>

            <div className="as-stat-box">
              <span className="as-stat-number">
                500<span className="as-stat-plus">+</span>
              </span>
              <div className="as-stat-label-wrap">
                <span className="as-stat-title">Solutions Delivered</span>
                <span className="as-stat-sub">Enterprise & AI Platforms</span>
              </div>
            </div>

            <div className="as-stat-box">
              <span className="as-stat-number">
                98<span className="as-stat-plus">%</span>
              </span>
              <div className="as-stat-label-wrap">
                <span className="as-stat-title">Client Satisfaction</span>
                <span className="as-stat-sub">Long-Term Retention</span>
              </div>
            </div>

            <div className="as-stat-box">
              <span className="as-stat-number">
                4<span className="as-stat-plus">Hubs</span>
              </span>
              <div className="as-stat-label-wrap">
                <span className="as-stat-title">Global Operating Hubs</span>
                <span className="as-stat-sub">US, UK, UAE & Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & STRATEGIC PILLARS (SOFT ICE LIGHT #f4f7fb) */}
      <section className="as-overview-section" id="about-us">
        <div className="app-container">
          <div className="as-overview-grid">
            {/* Left Column: Who We Are & Capabilities */}
            <div>
              <span className="as-badge">WHO WE ARE</span>
              <h2 className="as-section-title">
                Turning Bold Ideas into <span className="text-highlight-blue">Market-Leading Products</span>
              </h2>
              <p className="as-lead-text">
                VisualSoft Global (VS) offers top-notch ICT services to clients across the <strong>USA, UK, UAE, and Pakistan</strong>, focusing on turning visionary ideas into innovative, market-ready products with hands-on executive guidance.
              </p>

              <div className="as-capabilities-list">
                <div className="as-cap-item">
                  <CheckCircle2 size={20} className="as-check-icon" />
                  <div className="as-cap-text">
                    <strong>Enterprise-Grade Engineering</strong>
                    <span>Architecting custom software, autonomous multi-agent systems, and embedded IoT hardware built for global scale.</span>
                  </div>
                </div>

                <div className="as-cap-item">
                  <CheckCircle2 size={20} className="as-check-icon" />
                  <div className="as-cap-text">
                    <strong>100% Code & IP Ownership</strong>
                    <span>Complete architectural transparency, rigorous code reviews, zero vendor lock-in, and enterprise compliance.</span>
                  </div>
                </div>

                <div className="as-cap-item">
                  <CheckCircle2 size={20} className="as-check-icon" />
                  <div className="as-cap-text">
                    <strong>Predictable Agile Velocity</strong>
                    <span>Continuous integration, automated testing pipelines, and battle-tested delivery frameworks from day one.</span>
                  </div>
                </div>
              </div>

              <div className="as-actions-row">
                <button type="button" onClick={onOpenModal} className="as-btn-primary">
                  <span>Schedule Consultation</span>
                  <ArrowRight size={16} />
                </button>
                <Link to="/about-us" className="as-btn-secondary">
                  <span>Explore Our Heritage</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Strategic Pillar Cards */}
            <div className="as-pillar-stack">
              <div className="as-pillar-card">
                <span className="as-pillar-tag">HERITAGE & MASTERY</span>
                <h3 className="as-pillar-title">30+ Years of Proven Excellence</h3>
                <p className="as-pillar-desc">
                  Providing mission-critical technology solutions and hands-on executive mastery across four continents, ensuring every enterprise system is built for lasting scale.
                </p>
              </div>

              <div className="as-pillar-card" style={{ borderLeftColor: '#00f5a0' }}>
                <span className="as-pillar-tag" style={{ color: '#00b875' }}>OUR VISION</span>
                <h3 className="as-pillar-title">Transformative Technology Partner</h3>
                <p className="as-pillar-desc">
                  Acknowledged globally as an icon of dependable, forward-thinking technology leadership—architecting cutting-edge AI software and embedded systems.
                </p>
              </div>

              <div className="as-pillar-card" style={{ borderLeftColor: '#7c3aed' }}>
                <span className="as-pillar-tag" style={{ color: '#7c3aed' }}>OUR MISSION</span>
                <h3 className="as-pillar-title">Accelerating Digital Evolution</h3>
                <p className="as-pillar-desc">
                  Assist customers during each stage of digital transformation to achieve agility, operational efficiency, and rock-solid security with verifiable ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES (DARK ROYAL NAVY #05193b) */}
      <section className="as-services-section" id="services">
        <div className="app-container">
          <div className="as-services-header">
            <span className="as-badge-dark">FULL-LIFECYCLE ENGINEERING</span>
            <h2 className="as-title-white">
              Innovative Technology Solutions for <span className="text-highlight-cyan">Business Growth</span>
            </h2>
            <p className="as-subtitle-white">
              We create AI-enabled custom software solutions, embedded systems, autonomous agents, and managed IT services that streamline operations and boost productivity.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="as-tabs-wrap">
            <div className="as-tabs-nav">
              <button
                type="button"
                onClick={() => setServiceCategory('all')}
                className={`as-tab-btn ${serviceCategory === 'all' ? 'active' : ''}`}
              >
                <span>View All Services</span>
              </button>
              <button
                type="button"
                onClick={() => setServiceCategory('ai')}
                className={`as-tab-btn ${serviceCategory === 'ai' ? 'active' : ''}`}
              >
                <Terminal size={14} />
                <span>AI & Custom Software</span>
              </button>
              <button
                type="button"
                onClick={() => setServiceCategory('hardware')}
                className={`as-tab-btn ${serviceCategory === 'hardware' ? 'active' : ''}`}
              >
                <Cpu size={14} />
                <span>Embedded Systems & IoT</span>
              </button>
              <button
                type="button"
                onClick={() => setServiceCategory('cloud')}
                className={`as-tab-btn ${serviceCategory === 'cloud' ? 'active' : ''}`}
              >
                <Server size={14} />
                <span>Managed IT & Data</span>
              </button>
            </div>
          </div>

          {/* Service Cards 3x2 Grid */}
          <div className="as-services-grid">
            {filteredServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div key={srv.id} className="as-service-card">
                  <div className="as-card-top">
                    <span className="as-card-index">{srv.badge}</span>
                    <div className="as-card-icon-pill">
                      <IconComp size={22} />
                    </div>
                  </div>

                  <h3 className="as-card-title">{srv.title}</h3>
                  <p className="as-card-desc">{srv.desc}</p>

                  <div className="as-tags-row">
                    {srv.tags.map((tag, i) => (
                      <span key={i} className="as-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to={srv.link} className="as-card-link">
                    <span>Learn More</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES WE TRANSFORM (CRISP WHITE #ffffff) */}
      <section className="as-industries-section" id="industries">
        <div className="app-container">
          <div className="as-industries-header">
            <span className="as-badge">INDUSTRIES & SECTORS</span>
            <h2 className="as-section-title">
              Delivering Precision & Productivity Across <span className="text-highlight-blue">Specialized Sectors</span>
            </h2>
            <p className="as-lead-text" style={{ margin: 0 }}>
              Purpose-built digital architectures, embedded IoT engineering, and secure cloud platforms tailored to industry-specific operational demands.
            </p>
          </div>

          <div className="as-industries-grid">
            {industries.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <div
                  key={i}
                  className="as-industry-card"
                  style={{ borderTop: `4px solid ${ind.accentColor}` }}
                >
                  <div className="as-industry-icon" style={{ color: ind.accentColor }}>
                    <IndIcon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="as-industry-title">{ind.title}</h3>
                  <p className="as-industry-desc">{ind.desc}</p>
                  <div className="as-industry-link" style={{ color: ind.accentColor }}>
                    <span>Explore Sector</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. EXECUTIVE PHILOSOPHY QUOTE (DEEP NAVY #02182c) */}
      <section className="as-quote-section">
        <div className="app-container">
          <div className="as-quote-wrapper">
            <span className="as-quote-badge">EXECUTIVE PHILOSOPHY</span>
            <h2 className="as-quote-text">
              "Our performance is your success. Our passion is innovation. Our expertise is unmatched. We get you more..."
            </h2>
            <p className="as-quote-sub">
              Partner with technology leaders to design, build, and support enterprise systems that drive verifiable business growth.
            </p>
            <button onClick={onOpenModal} className="as-quote-btn">
              <Sparkles size={18} />
              <span>Contact Us Today</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. ENGINEERING FRAMEWORK & METHODOLOGY (SOFT ICE LIGHT #f2f7ff) */}
      <section className="as-framework-section" id="methodology">
        <div className="app-container">
          <div className="as-framework-header">
            <span className="as-badge">HOW WE DELIVER</span>
            <h2 className="as-section-title">
              Enhancing Creativity, <span className="text-highlight-blue">Step by Step</span>
            </h2>
            <p className="as-lead-text" style={{ margin: 0 }}>
              Our proven execution framework ensures high reliability, predictability, and continuous delivery from proof-of-concept to global deployment.
            </p>
          </div>

          <div className="as-framework-grid">
            {features.map((feat, i) => (
              <div key={i} className="as-framework-card">
                <span className="as-step-badge">0{i + 1} // STEP</span>
                <h3 className="as-framework-title">{feat.title}</h3>
                <p className="as-framework-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GLOBAL OPERATIONS (DARK NAVY #03132e) */}
      <section className="as-presence-section" id="presence">
        <div className="app-container">
          <div className="as-presence-header">
            <span className="as-badge-dark">GLOBAL OPERATIONS</span>
            <h2 className="as-title-white">
              Serving Clients <span className="text-highlight-cyan">Worldwide</span>
            </h2>
            <p className="as-subtitle-white">
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

      {/* 8. CAREERS CTA BANNER (VIBRANT BLUE #0a76db - ARBISOFT SIGNATURE) */}
      <section className="as-career-banner-section">
        <div className="app-container">
          <div className="as-career-banner-inner">
            <div>
              <span className="as-career-badge">JOIN THE TALENT NETWORK</span>
              <h2 className="as-career-title">
                Come join our team and find your potential.
              </h2>
              <p className="as-career-subtitle">
                Work alongside passionate engineers, AI researchers, and digital consultants delivering high-impact solutions globally. This is an exciting time to join VisualSoft Global!
              </p>
            </div>
            <Link to="/career" className="as-career-btn">
              <span>Find Out More</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
