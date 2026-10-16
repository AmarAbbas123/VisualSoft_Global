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

  const heroSlides = [
    {
      kicker: 'Engineering Software Solutions for 30+ Years',
      line1: 'We Accelerate',
      line2Prefix: 'With ',
      isDynamic: true,
      tag: 'ARCHITECTURE & SCALE'
    },
    {
      kicker: 'AI-Enabled Embedded Systems & IoT Edge Hardware',
      line1: 'We Engineer',
      line2Prefix: 'With ',
      fixedWord: 'Precision',
      isDynamic: false,
      tag: 'EDGE & EMBEDDED'
    },
    {
      kicker: 'Autonomous Multi-Agent Enterprise Swarms',
      line1: 'We Deliver',
      line2Prefix: 'With ',
      fixedWord: 'Velocity',
      isDynamic: false,
      tag: 'AUTONOMOUS AGENTS'
    }
  ];

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
      halo: 'halo-brand-blue'
    },
    {
      title: 'Managed IT Services',
      desc: '24/7 monitoring, helpdesk support, and infrastructure management so your team can focus on the business, not the servers.',
      icon: Server,
      halo: 'halo-cyan'
    },
    {
      title: 'Trade & eCommerce',
      desc: 'Custom storefronts, inventory systems, and integrations that keep online retail operations running smoothly at any scale.',
      icon: Briefcase,
      halo: 'halo-violet'
    },
    {
      title: 'Transportations System',
      desc: 'AI-powered tracking, routing, and monitoring solutions built for fleets, logistics, and smart mobility infrastructure.',
      icon: Truck,
      halo: 'halo-cyan'
    },
    {
      title: 'Security and Surveillance',
      desc: 'Live monitoring, ANPR, and access-control software that turns cameras and sensors into a connected intelligence platform.',
      icon: Eye,
      halo: 'halo-emerald'
    },
    {
      title: 'Manufacturing & Supply Chain',
      desc: 'Embedded systems and data tools that bring real-time visibility to production lines and supply chain operations.',
      icon: Boxes,
      halo: 'halo-amber'
    },
    {
      title: 'Industrial Automation',
      desc: 'Custom embedded and IoT solutions that automate repetitive processes and reduce manual error on the factory floor.',
      icon: HardHat,
      halo: 'halo-brand-blue'
    },
    {
      title: 'TeleCommunication',
      desc: 'Software and infrastructure support built for the scale and uptime telecom operators require.',
      icon: Radio,
      halo: 'halo-violet'
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
      {/* Exact Arbisoft Hero Section */}
      <section className="of6BXG_hero" id="hero">
        {/* Background Image & Overlays */}
        <div className="lAJSFG_bgImage" />
        <div className="of6BXG_heroOverlay" />
        <div className="of6BXG_heroGlow of6BXG_heroGlow1">
          <span className="of6BXG_heroGlowFill" />
        </div>
        <div className="of6BXG_heroGlow of6BXG_heroGlow2">
          <span className="of6BXG_heroGlowFill" />
        </div>

        {/* Main Center Content */}
        <div className="of6BXG_heroMain">
          <div className="of6BXG_heroCenter">
            <div className="of6BXG_heroContainer">
              <div className="of6BXG_heroContent">
                <div className="of6BXG_kicker">
                  {heroSlides[activeSlide].kicker}
                </div>

                <h1 className="of6BXG_heading">
                  <span className="of6BXG_heading_line">{heroSlides[activeSlide].line1}</span>
                  <span className="of6BXG_heading_line">
                    {heroSlides[activeSlide].line2Prefix || 'With '}
                    <span className="of6BXG_highlight_word">
                      {heroSlides[activeSlide].isDynamic ? displayText : heroSlides[activeSlide].fixedWord}
                    </span>
                    <span className="Htay_W_cursor" />
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

        <div className="of6BXG_bottomBorder" />
      </section>

      {/* About Us / Company Overview Section (Modern Bento Architecture) */}
      <section className="about-enterprise-section" id="about-us">
        <div className="app-container">
          <div className="about-header-wrap">
            <div className="glass-pill section-tag mb-3">
              <span className="pulse-dot" />
              <span>ABOUT VISUALSOFT GLOBAL</span>
            </div>
            <h2 className="about-modern-headline">
              Turning Bold Ideas into <span className="text-gradient-brand">Market-Leading Products</span>
            </h2>
            <div className="about-modern-sub-wrap">
              <p className="about-modern-sub">
                VisualSoft Global (VS) offers top-notch ICT services to clients in the <strong>USA, UK, UAE, and Pakistan</strong>, focusing on turning ideas into innovative products. With a strong team of professionals, we are committed to delivering high-quality services to our customers.
              </p>
              <p className="about-modern-sub" style={{ marginTop: '12px' }}>
                Our portfolio features enriched solutions across various industries, enabling our customers to achieve exceptional business growth. We are unique in that our executive management are technology leaders, providing technical mastery and hands-on guidance at every stage.
              </p>
            </div>
          </div>

          <div className="about-bento-grid">
            <div className="about-bento-card card-leadership">
              <div className="bento-badge">
                <Sparkles size={14} style={{ color: '#38bdf8' }} />
                <span>EXCELLENCE & MASTERY</span>
              </div>
              <div className="bento-metric-wrap">
                <span className="bento-big-stat">+30 Years</span>
                <span className="bento-stat-label">of Proven Engineering Excellence</span>
              </div>
              <p className="bento-card-body">
                Our portfolio enriched solutions across diverse industries, enabling customers to achieve exceptional business growth. Our executive management are hands-on technology innovators—providing technical mastery at every phase.
              </p>
              <div className="bento-features-list">
                <div className="bento-feature-chip">
                  <CheckCircle2 size={14} style={{ color: '#38bdf8' }} />
                  <span>Hands-on Tech Executives</span>
                </div>
                <div className="bento-feature-chip">
                  <CheckCircle2 size={14} style={{ color: '#00f5a0' }} />
                  <span>100% Code & IP Ownership</span>
                </div>
              </div>
            </div>

            <div className="about-bento-card card-vision">
              <div className="bento-card-top">
                <div className="bento-icon-box vision-icon">
                  <Compass size={26} />
                </div>
                <span className="bento-tag vision-tag">OUR VISION</span>
              </div>
              <h3 className="bento-card-title">Transformative Technology Partner</h3>
              <p className="bento-card-body">
                Our aim is to be globally acknowledged as an icon of reliable and effective information technology partner—architecting cutting-edge AI software and embedded solutions that redefine digital performance.
              </p>
              <div className="bento-card-footer vision-footer">
                <span>Enterprise Scale • AI Leadership • Trust</span>
              </div>
            </div>

            <div className="about-bento-card card-mission">
              <div className="bento-card-top">
                <div className="bento-icon-box mission-icon">
                  <TrendingUp size={26} />
                </div>
                <span className="bento-tag mission-tag">OUR MISSION</span>
              </div>
              <h3 className="bento-card-title">Accelerating Digital Evolution</h3>
              <p className="bento-card-body">
                Assist customers during each stage of digital transformation to achieve agility, operational efficiency, and rock-solid security—turning visionary concepts into resilient, market-defining products.
              </p>
              <div className="bento-card-footer mission-footer">
                <span>Agility • Velocity • Measurable ROI</span>
              </div>
            </div>
          </div>

          <div className="about-hubs-bar">
            <div className="about-hubs-left">
              <span className="hubs-label">Strategic Engineering Hubs:</span>
              <div className="hubs-pill-group">
                <span className="hub-pill">🇺🇸 United States</span>
                <span className="hub-pill">🇬🇧 United Kingdom</span>
                <span className="hub-pill">🇦🇪 UAE</span>
                <span className="hub-pill">🇵🇰 Pakistan</span>
              </div>
            </div>
            <button type="button" onClick={onOpenModal} className="about-modern-cta-btn">
              <span>Contact Leadership</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>


      {/* Services Section (High-Tech Enterprise Redesign) */}
      <section className="services-enterprise-section" id="services">
        <div className="app-container">
          <div className="section-header text-center">
            <div className="glass-pill section-tag">
              <Layers size={14} style={{ color: '#38bdf8' }} />
              <span>OUR SERVICES & CORE COMPETENCIES</span>
            </div>
            <h2 className="section-title">
              Innovative Technology Solutions for <span className="text-gradient-brand">Business Growth</span>
            </h2>
            <p className="section-subtitle">
              We create AI-enabled custom software solutions, embedded systems, AI agents, and managed IT services that streamline operations and boost productivity.
            </p>

            {/* Filter Tabs Navigation */}
            <div className="services-filter-nav">
              <button
                type="button"
                onClick={() => setServiceCategory('all')}
                className={`services-filter-btn ${serviceCategory === 'all' ? 'active' : ''}`}
              >
                <span>View ALL SERVICES</span>
                <span className="filter-count">6</span>
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

      {/* Industries We Serve from visualsoft-inc.com */}
      <section className="section-spacing" id="industries">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Building2 size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>INDUSTRIES WE SERVE</span>
            </div>
            <h2 className="section-title">
              Bringing Productivity & Efficiency with Accuracy by Our <span className="text-gradient-brand">Digital Transformation Skills and Products</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {industries.map((ind, i) => {
              const IndIcon = ind.icon;
              return (
                <div key={i} className="glass-panel industry-card">
                  <div className="industry-icon-wrapper">
                    <div className="icon-box-blur">
                      <div className={`icon-blur-halo ${ind.halo}`} />
                      <IndIcon size={24} className="text-white" />
                    </div>
                  </div>
                  <h3 className="industry-title">{ind.title}</h3>
                  <p className="industry-desc">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Banner from visualsoft-inc.com */}
      <section className="section-spacing" style={{ background: 'rgba(3, 7, 23, 0.7)' }}>
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '60px 40px', textAlign: 'center', position: 'relative' }}>
            <div className="icon-blur-halo halo-brand-blue" style={{ width: '320px', height: '320px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '16px', lineHeight: 1.3 }}>
              "Our performance is your success. Our passion is innovation. Our expertise is unmatched. We get you more..."
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto 32px auto' }}>
              Partner with technology leaders to design, build, and support enterprise systems that drive verifiable business growth.
            </p>
            <button onClick={onOpenModal} className="glass-button-primary">
              <Sparkles size={18} />
              <span>Contact Us Today</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features from visualsoft-inc.com */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Workflow size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>FEATURES</span>
            </div>
            <h2 className="section-title">
              Enhancing Creativity, <span className="text-gradient-brand">Step by Step</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {features.map((feat, i) => (
              <div key={i} className="glass-panel" style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  {feat.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Presence from visualsoft-inc.com */}
      <section className="section-spacing" id="presence">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Globe2 size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>OUR PRESENCE</span>
            </div>
            <h2 className="section-title">
              Serving Clients <span className="text-gradient-brand">Worldwide</span>
            </h2>
            <p className="section-subtitle">
              VisualSoft Global offers top-notch ICT services across our regional centers in the UK, USA, Middle East, Southeastern Asia, Australia, and Pakistan.
            </p>
          </div>

          <div className="regions-grid">
            {regions.map((reg, idx) => (
              <div key={idx} className="glass-panel region-card">
                <span className="region-flag">{reg.flag}</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>{reg.country}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', display: 'block' }}>{reg.city}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                    <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                    <span style={{ fontSize: '0.75rem', color: 'var(--brand-blue)' }}>{reg.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section from visualsoft-inc.com */}
      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span className="glass-pill" style={{ marginBottom: '12px' }}>
                <Briefcase size={14} style={{ color: 'var(--brand-blue)' }} />
                <span>OUR CAREER</span>
              </span>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginTop: '8px', marginBottom: '8px' }}>
                Come join our team and find your potential.
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                This is an exciting time to join VisualSoft Global!
              </p>
            </div>
            <Link to="/career" className="glass-button-primary">
              <span>Find Out More</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
