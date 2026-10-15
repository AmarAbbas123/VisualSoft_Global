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
  const [activeSim, setActiveSim] = useState('telemetry');
  const [simRunning, setSimRunning] = useState(false);
  const [simLogs, setSimLogs] = useState([]);
  const [serviceCategory, setServiceCategory] = useState('all');

  useEffect(() => {
    document.title = "VisualSoft Global - A Technology Company | Turning Ideas into Products";
    window.scrollTo(0, 0);
  }, []);

  // Simulator Data for Flagship Product: Omnia-Intelligent Suite
  const simulators = {
    telemetry: {
      name: 'AI-Enabled Embedded Telemetry',
      badge: 'Edge AI & IoT',
      status: 'Active Streaming',
      latency: '4.2ms',
      throughput: '128k msgs/sec',
      confidence: '99.8%',
      description: 'On-device neural inference and sensor telemetry stream from 10,000+ edge nodes.',
      colorClass: 'halo-brand-blue',
      textColor: 'text-glow-blue',
      icon: Cpu,
      initialLogs: [
        '[00:00:01] INITIATING: Edge sensory network handshake...',
        '[00:00:02] SYNCED: 10,240 microcontroller nodes online.',
        '[00:00:03] INFERENCE: Edge TPU model v4 loaded with INT8 quantization.',
        '[00:00:04] TELEMETRY: Thermal variance at 0.02°C | Power draw: 1.8W.',
        '[00:00:05] STATUS: Autonomous pipeline healthy. No packet loss.'
      ]
    },
    agents: {
      name: 'AI Agent Swarm & Automation',
      badge: 'Autonomous AI Agents',
      status: 'Decision Engine 24/7',
      latency: '1.8ms',
      throughput: '45,000 tx/sec',
      confidence: '99.96%',
      description: 'Enterprise AI agents automating decisions, workflows, and SDR customer outreach.',
      colorClass: 'halo-violet',
      textColor: 'text-glow-violet',
      icon: Bot,
      initialLogs: [
        '[00:00:01] CONNECTED: Enterprise ERP, CRM and database webhooks.',
        '[00:00:02] ORCHESTRATION: Multi-agent coordination across departments.',
        '[00:00:03] DECISIONING: Autonomous verification of customer compliance.',
        '[00:00:04] ACTION: Workflow approved and scheduled without human delay.',
        '[00:00:05] OUTCOME: 4.8x acceleration in order processing velocity.'
      ]
    },
    surveillance: {
      name: 'Security & Surveillance (ANPR)',
      badge: 'Computer Vision',
      status: '60 FPS Real-time',
      latency: '8.4ms',
      throughput: '120 streams',
      confidence: '99.4%',
      description: 'Live monitoring, ANPR, and access-control turning cameras into an intelligence network.',
      colorClass: 'halo-emerald',
      textColor: 'text-glow-emerald',
      icon: Eye,
      initialLogs: [
        '[00:00:01] RTSP STREAM: 4K camera matrix linked via optical fiber.',
        '[00:00:02] OBJECT TRACKING: 42 vehicles detected in surveillance sector.',
        '[00:00:03] ANPR MATCH: License plate verified with transport authority.',
        '[00:00:04] VELOCITY AUDIT: 62 km/h (Normal zone threshold).',
        '[00:00:05] LOGGING: Metadata recorded to central intelligence hub.'
      ]
    },
    cloudOps: {
      name: 'Managed IT & Cloud Infrastructure',
      badge: '24/7 NOC / SOC',
      status: '99.99% Uptime',
      latency: '0.8ms',
      throughput: '1.2 GB/sec',
      confidence: '100% SLA',
      description: 'Round-the-clock monitoring and proactive issue resolution for zero downtime.',
      colorClass: 'halo-amber',
      textColor: 'text-glow-amber',
      icon: Server,
      initialLogs: [
        '[00:00:01] AUDIT: 24/7 infrastructure monitoring nodes active.',
        '[00:00:02] ZERO TRUST: Automated vulnerability scans passing 100%.',
        '[00:00:03] TRAFFIC: Elastic load balancers handling 180,000 req/sec.',
        '[00:00:04] HEALTH: Database read replicas in sync across 3 availability zones.',
        '[00:00:05] SUPPORT: HelpDesk queue empty. System uptime at 99.99%.'
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
          <div className="hero-pill-badge">
            <div className="glass-pill">
              <span className="pulse-dot" />
              <span style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>START YOUR DIGITAL BUSINESS WITH VISUALSOFT</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <span style={{ color: 'var(--text-muted)' }}>USA • UK • UAE • PAKISTAN</span>
            </div>
          </div>

          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)' }}>
              A custom <span className="text-gradient-brand">AI software development</span> company turning ideas into innovative products.
            </h1>
          </div>

          <p className="hero-description" style={{ maxWidth: '860px' }}>
            VisualSoft Global (VS) offers top-notch ICT services to clients in the USA, UK, UAE and Pakistan, focusing on turning ideas into innovative products. With a strong team of professionals, we are committed to delivering high-quality services to our customers.
          </p>

          <div className="hero-cta-group">
            <button onClick={onOpenModal} className="glass-button-primary">
              <Sparkles size={18} />
              <span>Get Started</span>
            </button>
            <Link to="/about-us" className="glass-button-secondary">
              <span>About VisualSoft</span>
              <ChevronRight size={18} />
            </Link>
            <Link to="/products" className="glass-button-secondary">
              <span>Omnia-Intelligent Suite</span>
              <ChevronRight size={18} />
            </Link>
          </div>

          {/* Stats Strip */}
          <div className="metrics-strip">
            <div className="glass-panel metric-card">
              <span className="metric-number text-glow-blue">10+</span>
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

      {/* About Us / Company Overview Section */}
      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '48px', position: 'relative' }}>
            <div className="icon-blur-halo halo-brand-blue" style={{ width: '220px', height: '220px', top: '10px', right: '10px' }} />
            <div className="glass-pill" style={{ marginBottom: '16px' }}>
              <Users size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>ABOUT US</span>
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.2rem' }}>
              Technology Leaders Turning Visionary Ideas into <span className="text-gradient-brand">Exceptional Growth</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.8, maxWidth: '960px', marginBottom: '24px' }}>
              Our portfolio enriched solutions across various industries and enabled our customers to achieve exceptional business growth. We are unique in a sense that our management are technology leaders and this gives us an exceptional level of expertise in our fields.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '28px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--brand-blue)', marginBottom: '8px' }}>
                  Our Vision
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Our aim is to be acknowledged as an icon of reliable and effective information technology partner offering cutting edge solutions.
                </p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.07)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--neon-cyan)', marginBottom: '8px' }}>
                  Our Mission
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Assist customers during each stage of digital transformation to achieve agility and operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Product Showcase: Omnia-Intelligent Suite */}
      <section className="section-spacing" id="products">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Cpu size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>PRODUCTS</span>
            </div>
            <h2 className="section-title">
              Omnia-Intelligent <span className="text-gradient-brand">Suite</span>
            </h2>
            <p className="section-subtitle">
              VisualSoft’s unified intelligent operating platform. Experience our AI models, edge telemetry, and autonomous decisioning running live.
            </p>
          </div>

          <div className="glass-panel simulator-layout">
            {/* Left Nav */}
            <div className="simulator-nav">
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>
                Omnia Live Protocol Matrix
              </span>

              {Object.keys(simulators).map((key) => {
                const sim = simulators[key];
                const IconComponent = sim.icon;
                const isActive = activeSim === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSim(key)}
                    className={`simulator-agent-item ${isActive ? 'active' : ''}`}
                  >
                    <div className="icon-box-blur" style={{ width: '42px', height: '42px' }}>
                      <div className={`icon-blur-halo ${sim.colorClass}`} />
                      <IconComponent size={20} className={isActive ? 'text-white' : 'text-slate-400'} />
                    </div>
                    <div>
                      <span className="agent-title-text">{sim.name}</span>
                      <span className="agent-desc-text">{sim.badge}</span>
                    </div>
                  </button>
                );
              })}

              <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <Link to="/products" className="learn-more-link" style={{ fontSize: '0.85rem' }}>
                  <span>View Product Overview</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Telemetry */}
            <div className="telemetry-display">
              <div>
                <div className="telemetry-header">
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff' }}>
                        {simulators[activeSim].name}
                      </h3>
                      <span className="glass-pill" style={{ fontSize: '0.75rem', padding: '2px 10px' }}>
                        <span className="pulse-dot" />
                        {simulators[activeSim].status}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
                      {simulators[activeSim].description}
                    </p>
                  </div>

                  <div className="terminal-dots">
                    <span className="terminal-dot" style={{ background: '#ff5f56' }} />
                    <span className="terminal-dot" style={{ background: '#ffbd2e' }} />
                    <span className="terminal-dot" style={{ background: '#27c93f' }} />
                  </div>
                </div>

                <div className="telemetry-stats-row">
                  <div className="telemetry-stat-card">
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Latency</span>
                    <span className={`metric-number ${simulators[activeSim].textColor}`} style={{ fontSize: '1.5rem', marginTop: '4px' }}>
                      {simulators[activeSim].latency}
                    </span>
                  </div>
                  <div className="telemetry-stat-card">
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Throughput</span>
                    <span className="metric-number text-white" style={{ fontSize: '1.5rem', marginTop: '4px' }}>
                      {simulators[activeSim].throughput}
                    </span>
                  </div>
                  <div className="telemetry-stat-card">
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Confidence / SLA</span>
                    <span className="metric-number text-glow-emerald" style={{ fontSize: '1.5rem', marginTop: '4px' }}>
                      {simulators[activeSim].confidence}
                    </span>
                  </div>
                </div>

                <div className="console-output-box">
                  {simLogs.map((log, index) => (
                    <div key={index} style={{ marginBottom: '6px', color: index === simLogs.length - 1 ? '#60a5fa' : '#94a3b8' }}>
                      {log}
                    </div>
                  ))}
                  {simRunning && (
                    <div style={{ color: '#00f5a0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Activity size={14} className="animate-spin" />
                      <span>Benchmarking Omnia neural pipeline...</span>
                    </div>
                  )}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                  Connected via VisualSoft Secure Mesh
                </span>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={runLiveSimulation}
                    disabled={simRunning}
                    className="glass-button-secondary"
                    style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                  >
                    <Activity size={16} />
                    <span>Run Benchmark</span>
                  </button>
                  <button
                    onClick={onOpenModal}
                    className="glass-button-primary"
                    style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                  >
                    <span>Request Live Demo</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
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
