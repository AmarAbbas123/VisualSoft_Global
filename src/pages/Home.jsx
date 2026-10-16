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
      title: 'AI-Enabled Custom Software Development',
      desc: 'We create AI-enabled custom software solutions that streamline operations and boost productivity. Our expertise in custom AI development, AI integration, and intelligent automation software ensures seamless, scalable systems.',
      tags: ['Custom AI Development', 'AI Integration', 'Intelligent Automation', 'Scalable Systems'],
      halo: 'halo-brand-blue',
      textColor: 'text-glow-blue',
      icon: Terminal,
      link: '/ai-enabled-custom-software-development'
    },
    {
      id: 'embedded-systems',
      category: 'hardware',
      title: 'AI-Enabled Embedded Systems Design',
      desc: 'We design AI-enabled embedded systems with IoT and edge AI to deliver smart, real-time solutions. Our expertise in embedded software development, on-device AI, and system architecture ensures seamless, connected devices.',
      tags: ['IoT & Edge AI', 'Embedded Software', 'On-Device AI', 'System Architecture'],
      halo: 'halo-cyan',
      textColor: 'text-glow-cyan',
      icon: Cpu,
      link: '/ai-enabled-embedded-system-design'
    },
    {
      id: 'ai-agents',
      category: 'ai',
      title: 'AI Agent Development',
      desc: 'We engineer enterprise-grade AI agents that automate decisions, optimize workflows, and elevate customer experiences. Every agent is built for scale, transparency, and compliance.',
      tags: ['Decision Automation', 'Workflow Agents', 'SDR Sales Agents', 'Enterprise Scale'],
      halo: 'halo-violet',
      textColor: 'text-glow-violet',
      icon: Bot,
      link: '/ai-agent-development'
    },
    {
      id: 'managed-it',
      category: 'cloud',
      title: 'Managed IT Services',
      desc: '24/7 monitoring, helpdesk support, and infrastructure management so your team can focus on the business, not the servers. We offer KPI-driven HelpDesk and application support designed to keep your business running smoothly.',
      tags: ['24/7 Monitoring', 'KPI-Driven HelpDesk', 'Offshore & On-Site Resources', 'Infrastructure'],
      halo: 'halo-amber',
      textColor: 'text-glow-amber',
      icon: Server,
      link: '/managed-it-services'
    },
    {
      id: 'data-analytics',
      category: 'cloud',
      title: 'Data & Analytics',
      desc: 'Develop advanced tools that collect and process vast datasets, analyze data to discover patterns and correlations and empower businesses to make informed and data-driven decisions.',
      tags: ['Data Visualization', 'Business Intelligence (BI)', 'Predictive Analytics & ML', 'Data Cleansing'],
      halo: 'halo-cyan',
      textColor: 'text-glow-cyan',
      icon: Database,
      link: '/data-analytics'
    },
    {
      id: 'digital-marketing',
      category: 'cloud',
      title: 'Digital Marketing Services',
      desc: 'We empower businesses with cutting-edge marketing technologies to drive growth, enhance customer experiences, and unlock new opportunities across trade, digital marketing, and e-commerce.',
      tags: ['Social Media Marketing', 'Search Engine Optimization (SEO)', 'Content Marketing', 'Email Automation'],
      halo: 'halo-brand-blue',
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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="app-container">
          <div className="hero-split-grid">
            {/* Left Column: Heading, Value Prop & CTAs */}
            <div className="hero-content-left">
              <div className="hero-kicker-badge-wrap">
                <div className="glass-pill hero-kicker-pill">
                  <span className="pulse-dot" />
                  <span className="hero-kicker-text">START YOUR DIGITAL BUSINESS WITH</span>
                  <span className="kicker-pill-dot">•</span>
                  <span className="kicker-pill-accent">NEXT-GEN AI</span>
                </div>
              </div>

              <div className="hero-brand-aura-container">
                <div className="hero-brand-aura" />
                <div className="hero-brand-headline">
                  <span className="hero-brand-name">VisualSoft</span>
                  <span className="hero-brand-dot">.</span>
                </div>
              </div>

              <h1 className="hero-statement">
                A custom{' '}
                <span className="hero-highlight-curved">
                  AI software development
                  <svg
                    className="hero-underline-svg"
                    viewBox="0 0 280 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M3 10C70 2.5 210 2.5 277 8.5"
                      stroke="url(#hero-blue-grad)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="hero-blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="50%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#38bdf8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>{' '}
                <br className="hero-br-desktop" />
                company turning ideas into <br className="hero-br-desktop" />
                <span className="text-gradient-brand">innovative products</span>.
              </h1>

              <p className="hero-description-compact">
                Engineering enterprise-grade custom AI software, autonomous multi-agent systems, and embedded edge architectures built for scale and security.
              </p>

              <div className="hero-metric-chips-row">
                <div className="hero-metric-chip">
                  <Zap size={14} style={{ color: 'var(--brand-blue)' }} />
                  <span>Sub-5ms Latency</span>
                </div>
                <div className="hero-metric-chip">
                  <Shield size={14} style={{ color: 'var(--neon-emerald)' }} />
                  <span>Zero-Trust Security</span>
                </div>
                <div className="hero-metric-chip">
                  <Cpu size={14} style={{ color: '#c084fc' }} />
                  <span>Edge & Cloud Native</span>
                </div>
              </div>

              <div className="hero-cta-group">
                <button onClick={onOpenModal} className="glass-button-primary">
                  <Sparkles size={18} />
                  <span>Get Started / Scope Project</span>
                  <ArrowRight size={16} />
                </button>
                <a href="#services" className="glass-button-secondary">
                  <Terminal size={18} />
                  <span>Explore Services</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="hero-trust-badges">
                <div className="trust-badge-item">
                  <CheckCircle2 size={16} style={{ color: 'var(--brand-blue)' }} />
                  <span>Technology Leaders</span>
                </div>
                <div className="trust-badge-item">
                  <CheckCircle2 size={16} style={{ color: 'var(--brand-blue)' }} />
                  <span>100% Code & IP Ownership</span>
                </div>
                <div className="trust-badge-item">
                  <CheckCircle2 size={16} style={{ color: 'var(--neon-emerald)' }} />
                  <span>24/7 Global Response</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Frosted Glass Command Matrix */}
            <div className="hero-visual-right">
              <div className="hero-ambient-glow" />

              {/* Floating Top Pill */}
              <div className="glass-pill hero-floating-pill-top">
                <Activity size={14} style={{ color: 'var(--brand-blue)' }} />
                <span style={{ color: '#fff', fontSize: '0.78rem', fontWeight: 600 }}>180k req/sec throughput</span>
              </div>

              {/* Terminal Card */}
              <div className="hero-terminal-card">
                <div className="terminal-top-bar">
                  <div className="terminal-dots">
                    <span className="terminal-dot" style={{ background: '#ff5f56' }} />
                    <span className="terminal-dot" style={{ background: '#ffbd2e' }} />
                    <span className="terminal-dot" style={{ background: '#27c93f' }} />
                  </div>
                  <div className="terminal-title-chip">
                    <Cpu size={14} style={{ color: 'var(--brand-blue)' }} />
                    <span>VisualSoft Core Platform • Active</span>
                  </div>
                </div>

                {/* Sub Tab Switcher */}
                <div className="hero-sim-tabs">
                  <button
                    type="button"
                    onClick={() => setActiveSim('software')}
                    className={`hero-sim-tab-btn ${activeSim === 'software' ? 'active' : ''}`}
                  >
                    Custom Software (<span style={{ color: '#38bdf8' }}>99.9%</span>)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSim('embedded')}
                    className={`hero-sim-tab-btn ${activeSim === 'embedded' ? 'active' : ''}`}
                  >
                    Embedded AI (<span style={{ color: '#00f5a0' }}>4.2ms</span>)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveSim('agents')}
                    className={`hero-sim-tab-btn ${activeSim === 'agents' ? 'active' : ''}`}
                  >
                    AI Agents (<span style={{ color: '#c084fc' }}>Autonomous</span>)
                  </button>
                </div>

                {/* Active Waveform Graphic */}
                <div className="hero-waveform-bar">
                  <div className="wave-col" style={{ height: '55%' }} />
                  <div className="wave-col" style={{ height: '80%' }} />
                  <div className="wave-col" style={{ height: '40%' }} />
                  <div className="wave-col" style={{ height: '95%' }} />
                  <div className="wave-col" style={{ height: '65%' }} />
                  <div className="wave-col" style={{ height: '85%' }} />
                  <div className="wave-col" style={{ height: '35%' }} />
                  <div className="wave-col" style={{ height: '70%' }} />
                  <div className="wave-col" style={{ height: '90%' }} />
                  <div className="wave-col" style={{ height: '50%' }} />
                  <div className="wave-col" style={{ height: '75%' }} />
                  <div className="wave-col" style={{ height: '60%' }} />
                </div>

                {/* Live Console Output */}
                <div className="hero-telemetry-screen">
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', color: 'var(--text-dim)', fontSize: '0.72rem' }}>
                    <span>PROTOCOL: {simulators[activeSim].name.toUpperCase()}</span>
                    <span style={{ color: 'var(--neon-emerald)' }}>● ONLINE</span>
                  </div>
                  {simLogs.slice(-3).map((log, idx) => (
                    <div key={idx} style={{ marginBottom: '4px', color: idx === 2 ? '#60a5fa' : '#94a3b8' }}>
                      {log}
                    </div>
                  ))}
                  {simRunning && (
                    <div style={{ color: '#00f5a0', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px' }}>
                      <Activity size={12} className="animate-spin" />
                      <span>Optimizing inference stream...</span>
                    </div>
                  )}
                </div>

                {/* Terminal Action Footer */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    Latency: <strong style={{ color: '#fff' }}>{simulators[activeSim].latency}</strong>
                  </span>
                  <button
                    onClick={runLiveSimulation}
                    disabled={simRunning}
                    className="glass-button-secondary"
                    style={{ padding: '6px 14px', fontSize: '0.75rem' }}
                  >
                    <span>Benchmark Pipeline</span>
                  </button>
                </div>
              </div>

              {/* Floating Bottom Pill */}
              <div className="glass-pill hero-floating-pill-bottom">
                <Shield size={14} style={{ color: 'var(--neon-emerald)' }} />
                <span style={{ color: '#fff', fontSize: '0.78rem', fontWeight: 600 }}>100% Code & IP Ownership</span>
              </div>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="metrics-strip">
            <div className="glass-panel metric-card">
              <span className="metric-number text-glow-blue">30+</span>
              <span className="metric-label">Years of Experience</span>
            </div>
            <div className="glass-panel metric-card">
              <span className="metric-number text-glow-cyan">4</span>
              <span className="metric-label">Key Hubs: USA, UK, UAE, Pakistan</span>
            </div>
            <div className="glass-panel metric-card">
              <span className="metric-number text-glow-emerald">6</span>
              <span className="metric-label">Connected Services Under One Team</span>
            </div>
            <div className="glass-panel metric-card">
              <span className="metric-number text-glow-violet">24/7</span>
              <span className="metric-label">Support and Sales Team Available</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us / Company Overview Section (Elevated Executive Design) */}
      <section className="about-enterprise-section" id="about-us">
        <div className="app-container">
          <div className="about-layout-split">
            {/* Left Column: Visual Vision & Mission Feature Cards */}
            <div className="about-cards-column">
              {/* Vision Card */}
              <div className="about-card-featured">
                <div 
                  className="about-card-bg" 
                  style={{ backgroundImage: "url('/about-vision.jpg')" }} 
                />
                <div className="about-card-gradient" />
                <div className="about-card-inner">
                  <div className="about-icon-emblem emblem-vision">
                    <Compass size={28} />
                  </div>
                  <div className="about-card-text">
                    <h3 className="about-card-title">Our Vision</h3>
                    <p className="about-card-description">
                      Our aim is to be acknowledged as an icon of reliable and effective information technology partner offering cutting edge solutions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="about-card-featured">
                <div 
                  className="about-card-bg" 
                  style={{ backgroundImage: "url('/about-mission.jpg')" }} 
                />
                <div className="about-card-gradient" />
                <div className="about-card-inner">
                  <div className="about-icon-emblem emblem-mission">
                    <TrendingUp size={28} />
                  </div>
                  <div className="about-card-text">
                    <h3 className="about-card-title">Our Mission</h3>
                    <p className="about-card-description">
                      Assist customers during each stage of digital transformation to achieve agility and operational efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Company Story, Global Presence, Experience & CTA */}
            <div className="about-story-column">
              <h2 className="about-main-title">About Us</h2>

              <p className="about-story-paragraph">
                <strong>VisualSoft Global (VS)</strong> offers top-notch ICT services to clients in the <strong>USA</strong>, <strong>UK</strong>, <strong>UAE</strong>, and <strong>Pakistan</strong>, focusing on turning ideas into innovative products. With a strong team of professionals, we are committed to deliver high quality services to our customers.
              </p>

              <p className="about-story-paragraph">
                Our portfolio enriched solutions across various industries and enabled our customers to achieve exceptional business growth. We are unique in a sense that our management are technology leaders and this gives us an exceptional level of expertise in our fields.
              </p>

              <p className="about-story-paragraph">
                VS Vision is to be acknowledged as an icon of reliable and effective information technology partner offering cutting edge solutions. Our Mission is to assist customers during each stage of digital transformation to achieve agility and operational efficiency.
              </p>

              {/* Strategic Global Hubs */}
              <div className="about-regions-row">
                <span className="region-chip">🇺🇸 USA</span>
                <span className="region-chip">🇬🇧 UK</span>
                <span className="region-chip">🇦🇪 UAE</span>
                <span className="region-chip">🇵🇰 Pakistan</span>
              </div>

              {/* Experience Milestone + Contact Action */}
              <div className="about-footer-row">
                <div className="about-exp-block">
                  <div className="about-exp-number">+30 years</div>
                  <div className="about-exp-label">of Experience</div>
                </div>

                <button
                  type="button"
                  onClick={onOpenModal}
                  className="about-cta-btn"
                >
                  <span>CONTACT US</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section from visualsoft-inc.com */}
      <section className="section-spacing" id="services">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Layers size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="section-title">
              Innovative Technology Solutions for <span className="text-gradient-brand">Business Growth</span>
            </h2>
            <p className="section-subtitle">
              We create AI-enabled custom software solutions, embedded systems, AI agents, and managed IT services that streamline operations and boost productivity.
            </p>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '32px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setServiceCategory('all')}
                className={`glass-tab-btn ${serviceCategory === 'all' ? 'active' : ''}`}
              >
                View ALL SERVICES
              </button>
              <button
                onClick={() => setServiceCategory('ai')}
                className={`glass-tab-btn ${serviceCategory === 'ai' ? 'active' : ''}`}
              >
                AI & Software Development
              </button>
              <button
                onClick={() => setServiceCategory('hardware')}
                className={`glass-tab-btn ${serviceCategory === 'hardware' ? 'active' : ''}`}
              >
                Embedded Systems & IoT
              </button>
              <button
                onClick={() => setServiceCategory('cloud')}
                className={`glass-tab-btn ${serviceCategory === 'cloud' ? 'active' : ''}`}
              >
                Managed IT & Data
              </button>
            </div>
          </div>

          <div className="grid-cols-auto">
            {filteredServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div key={srv.id} className="glass-panel service-card">
                  <div>
                    <div className="service-header">
                      <div className="icon-box-blur">
                        <div className={`icon-blur-halo ${srv.halo}`} />
                        <IconComp size={26} className="text-white" />
                      </div>
                      <h3 className="service-title">{srv.title}</h3>
                      <p className="service-desc">{srv.desc}</p>
                    </div>

                    <div className="service-tags">
                      {srv.tags.map((tag, i) => (
                        <span key={i} className="tag-badge">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="service-footer">
                    <Link to={srv.link} className="learn-more-link">
                      <span>Learn More</span>
                      <ChevronRight size={16} />
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
