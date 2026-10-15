import React, { useState, useEffect } from 'react';
import './App.css';
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
  PhoneCall,
  Mail,
  Send,
  X,
  Menu,
  Sparkles,
  TrendingUp,
  Server,
  Eye,
  Radio,
  Lock,
  Boxes,
  Compass,
  Building2,
  Truck,
  HardHat,
  Share2,
  Check
} from 'lucide-react';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [activeSim, setActiveSim] = useState('telemetry');
  const [simRunning, setSimRunning] = useState(false);
  const [simLogs, setSimLogs] = useState([]);
  const [serviceCategory, setServiceCategory] = useState('all');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Estimator States
  const [projectType, setProjectType] = useState('ai-agent');
  const [projectTier, setProjectTier] = useState('enterprise');
  const [addons, setAddons] = useState(['vision', 'monitoring']);

  // Cursor tracking for ambient spotlight
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Simulator Data
  const simulators = {
    telemetry: {
      name: 'Edge AI Telemetry',
      badge: 'IoT & Embedded',
      status: 'Active Streaming',
      latency: '4.2ms',
      throughput: '128k msgs/sec',
      confidence: '99.8%',
      description: 'On-device neural inference processing sensory feeds from 10,000+ distributed edge nodes.',
      colorClass: 'halo-cyan',
      textColor: 'text-glow-cyan',
      icon: Cpu,
      initialLogs: [
        '[00:00:01] INITIATING: Edge sensory network handshake...',
        '[00:00:02] SYNCED: 10,240 microcontroller nodes online.',
        '[00:00:03] INFERENCE: Edge TPU model v4 loaded with INT8 quantization.',
        '[00:00:04] TELEMETRY: Thermal variance at 0.02°C | Power draw: 1.8W.',
        '[00:00:05] STATUS: Autonomous pipeline healthy. No packet loss.'
      ]
    },
    fintech: {
      name: 'FinTech Fraud Sentinel',
      badge: 'Autonomous AI Agent',
      status: 'Monitoring 24/7',
      latency: '1.8ms',
      throughput: '45,000 tx/sec',
      confidence: '99.96%',
      description: 'Zero-latency neural decisioning agent blocking fraudulent transactions across global banking rails.',
      colorClass: 'halo-violet',
      textColor: 'text-glow-violet',
      icon: Bot,
      initialLogs: [
        '[00:00:01] CONNECTED: Swift & ISO 20022 banking webhooks.',
        '[00:00:02] PARSING: Cross-border transaction batch #849204.',
        '[00:00:03] ANOMALY DETECTED: Geolocation spoofing risk score 0.94.',
        '[00:00:04] ACTION: Autonomous challenge dispatched to secondary 2FA.',
        '[00:00:05] RESOLUTION: $480,000 unauthorized transfer prevented.'
      ]
    },
    vision: {
      name: 'ANPR & Computer Vision',
      badge: 'Surveillance AI',
      status: '60 FPS Real-time',
      latency: '8.4ms',
      throughput: '120 streams',
      confidence: '99.4%',
      description: 'High-speed automated license plate recognition & biometric anomaly detection across smart city infrastructure.',
      colorClass: 'halo-emerald',
      textColor: 'text-glow-emerald',
      icon: Eye,
      initialLogs: [
        '[00:00:01] RTSP STREAM: 4K camera matrix linked via optical fiber.',
        '[00:00:02] OBJECT TRACKING: 42 vehicles detected in sector Alpha-9.',
        '[00:00:03] ANPR MATCH: Plate #DXB-8910 verified with transport authority.',
        '[00:00:04] VELOCITY AUDIT: 62 km/h (Normal zone threshold).',
        '[00:00:05] TELEMETRY DISPATCH: Metadata recorded to immutable ledger.'
      ]
    },
    supply: {
      name: 'Autonomous Supply Chain',
      badge: 'Predictive Logistics',
      status: 'Optimizing Routes',
      latency: '12ms',
      throughput: '8,400 orders/min',
      confidence: '98.9%',
      description: 'Reinforcement learning system scheduling multi-hub logistics, warehousing, and inventory replenishment.',
      colorClass: 'halo-amber',
      textColor: 'text-glow-amber',
      icon: Boxes,
      initialLogs: [
        '[00:00:01] INVENTORY AUDIT: Syncing 14 regional distribution centers.',
        '[00:00:02] WEATHER ALERT: North Atlantic freight bottleneck detected.',
        '[00:00:03] REROUTING: Dynamically reallocating 38 containers via rail.',
        '[00:00:04] ETA FORECAST: Delivery delay reduced from 4 days to 3.2 hours.',
        '[00:00:05] ERP INTEGRATION: Purchase orders triggered automatically.'
      ]
    }
  };

  useEffect(() => {
    setSimLogs(simulators[activeSim].initialLogs);
  }, [activeSim]);

  const runLiveSimulation = () => {
    setSimRunning(true);
    const newLog = `[${new Date().toLocaleTimeString()}] RE-CALIBRATING: Running live neural benchmark for ${simulators[activeSim].name}...`;
    setSimLogs((prev) => [...prev, newLog]);
    setTimeout(() => {
      setSimLogs((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] OPTIMIZED: Latency trimmed to ${simulators[activeSim].latency}. Zero dropped frames. 100% SLA compliance.`
      ]);
      setSimRunning(false);
    }, 1200);
  };

  // Estimator Calculations
  const calculateEstimates = () => {
    let baseWeeks = 6;
    let baseCost = 25000;

    if (projectType === 'ai-agent') {
      baseWeeks += 4;
      baseCost += 20000;
    } else if (projectType === 'embedded') {
      baseWeeks += 6;
      baseCost += 28000;
    } else if (projectType === 'cloud') {
      baseWeeks += 3;
      baseCost += 15000;
    }

    if (projectTier === 'prototype') {
      baseWeeks *= 0.6;
      baseCost *= 0.55;
    } else if (projectTier === 'distributed') {
      baseWeeks *= 1.5;
      baseCost *= 1.6;
    }

    baseCost += addons.length * 6000;
    baseWeeks += addons.length * 1.5;

    return {
      weeks: Math.round(baseWeeks),
      cost: Math.round(baseCost / 1000) * 1000
    };
  };

  const estimate = calculateEstimates();

  const toggleAddon = (id) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Services
  const services = [
    {
      id: 'ai-software',
      category: 'ai',
      title: 'AI-Enabled Custom Software',
      desc: 'Scalable enterprise software engineered with built-in neural intelligence, predictive engines, and high-concurrency microservices.',
      tags: ['Enterprise LLMs', 'Next.js & Python', 'Automated Workflows', 'REST/GraphQL APIs'],
      halo: 'halo-cyan',
      textColor: 'text-glow-cyan',
      icon: Terminal,
      stat: '4.8x Efficiency'
    },
    {
      id: 'ai-agents',
      category: 'ai',
      title: 'Enterprise AI Agent Systems',
      desc: 'Autonomous multi-agent architectures that orchestrate complex business decisions, eliminate manual operations, and interact flawlessly with customers.',
      tags: ['Autonomous Reasoning', 'Multi-Agent Swarms', 'LangGraph & AutoGen', 'Strict Guardrails'],
      halo: 'halo-violet',
      textColor: 'text-glow-violet',
      icon: Bot,
      stat: '99.9% Autonomous'
    },
    {
      id: 'embedded-iot',
      category: 'hardware',
      title: 'AI-Enabled Embedded Systems',
      desc: 'Custom firmware, IoT hardware architecture, and Edge AI deployment on ARM/RISC-V microcontrollers for instant on-device intelligence.',
      tags: ['Edge AI Inference', 'RTOS & Embedded C++', 'Micro-power Sensors', 'OTA Fleet Firmware'],
      halo: 'halo-emerald',
      textColor: 'text-glow-emerald',
      icon: Cpu,
      stat: '<5ms Latency'
    },
    {
      id: 'managed-it',
      category: 'cloud',
      title: '24/7 Managed IT & Cloud Ops',
      desc: 'Mission-critical infrastructure management, SOC/NOC monitoring, multi-cloud governance (AWS/Azure/GCP), and proactive zero-trust security.',
      tags: ['24/7/365 NOC', 'Kubernetes Clusters', 'Zero Trust Architecture', 'Disaster Recovery'],
      halo: 'halo-amber',
      textColor: 'text-glow-amber',
      icon: Server,
      stat: '99.99% Uptime'
    },
    {
      id: 'data-analytics',
      category: 'cloud',
      title: 'Big Data & Predictive Analytics',
      desc: 'Transform raw data into real-time business intelligence with streaming ETL pipelines, automated feature stores, and executive dashboards.',
      tags: ['Real-Time Streaming', 'Snowflake & Databricks', 'Predictive Modeling', 'Executive Analytics'],
      halo: 'halo-rose',
      textColor: 'text-glow-rose',
      icon: Database,
      stat: '10x Faster Insights'
    },
    {
      id: 'growth-digital',
      category: 'cloud',
      title: 'Growth Engineering & Marketing',
      desc: 'Data-driven digital marketing infrastructure, conversion rate optimization, automated client acquisition funnels, and brand scaling.',
      tags: ['AI Lead Scoring', 'Omnichannel Automation', 'High-Yield Funnels', 'Performance Marketing'],
      halo: 'halo-blue',
      textColor: 'text-glow-cyan',
      icon: TrendingUp,
      stat: '320% ROI Growth'
    }
  ];

  const filteredServices =
    serviceCategory === 'all'
      ? services
      : services.filter((s) => s.category === serviceCategory);

  // Industries
  const industries = [
    {
      title: 'FinTech & Digital Banking',
      desc: 'Next-gen payment gateways, algorithmic fraud prevention, and regulatory automated reporting.',
      icon: Shield,
      halo: 'halo-cyan'
    },
    {
      title: 'Smart Fleet & Transportation',
      desc: 'Autonomous telemetry tracking, dynamic route optimization, and predictive vehicle maintenance.',
      icon: Truck,
      halo: 'halo-violet'
    },
    {
      title: 'Security & Surveillance',
      desc: 'ANPR license recognition, perimeter security cameras, and real-time computer vision alert grids.',
      icon: Eye,
      halo: 'halo-emerald'
    },
    {
      title: 'Industrial Automation & Robotics',
      desc: 'PLC integrations, smart sensors on assembly lines, and predictive machine failure prevention.',
      icon: HardHat,
      halo: 'halo-amber'
    },
    {
      title: 'Manufacturing & Supply Chain',
      desc: 'Multi-hub inventory forecasting, automated dispatching, and cold-chain temperature telemetry.',
      icon: Boxes,
      halo: 'halo-rose'
    },
    {
      title: 'Telecommunications & 5G',
      desc: 'High-throughput edge computing, network anomaly detection, and telecom billing orchestration.',
      icon: Radio,
      halo: 'halo-blue'
    }
  ];

  // Global Footprint
  const regions = [
    { country: 'United Kingdom', city: 'London', flag: '🇬🇧', status: 'European Hub - 24/7 Ops' },
    { country: 'United States', city: 'Wilmington / Austin', flag: '🇺🇸', status: 'Americas AI Research' },
    { country: 'United Arab Emirates', city: 'Dubai', flag: '🇦🇪', status: 'MENA Enterprise Center' },
    { country: 'Saudi Arabia', city: 'Riyadh', flag: '🇸🇦', status: 'Vision 2030 Tech Partner' },
    { country: 'Malaysia', city: 'Kuala Lumpur', flag: '🇲🇾', status: 'APAC Software Operations' },
    { country: 'Australia', city: 'Sydney', flag: '🇦🇺', status: 'Oceania Client Advisory' },
    { country: 'Pakistan', city: 'Islamabad / Lahore', flag: '🇵🇰', status: 'Global Engineering Lab' }
  ];

  return (
    <div className="site-wrapper">
      {/* Cosmic background with noise & grid */}
      <div className="cosmic-background" />

      {/* Blurred Floating Colored Aurora Orbs */}
      <div className="orb orb-cyan" />
      <div className="orb orb-violet" />
      <div className="orb orb-emerald" />

      {/* Interactive cursor spotlight */}
      <div
        className="mouse-spotlight"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />

      {/* ====================================================
          FIXED GLASS NAVBAR
          ==================================================== */}
      <header className="navbar-fixed">
        <div className="navbar-inner">
          <a href="#" className="brand-logo">
            <div className="brand-badge">
              <span className="logo-glow-dot" />
              <Cpu size={22} className="text-white" />
            </div>
            <div>
              <div className="brand-name">
                VISUAL<span className="highlight">SOFT</span>
              </div>
              <span className="brand-sub">GLOBAL TECHNOLOGY</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="nav-links-desktop">
            <li><a href="#services" className="nav-link-item">Services</a></li>
            <li><a href="#omnia" className="nav-link-item">Omnia Suite</a></li>
            <li><a href="#industries" className="nav-link-item">Industries</a></li>
            <li><a href="#estimator" className="nav-link-item">Estimator</a></li>
            <li><a href="#global" className="nav-link-item">Global Presence</a></li>
          </ul>

          {/* Nav Actions */}
          <div className="nav-actions">
            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="glass-button-primary"
            >
              <Sparkles size={16} />
              <span>Get Started</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="glass-panel" style={{ marginTop: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="nav-link-item">Services</a>
            <a href="#omnia" onClick={() => setMobileMenuOpen(false)} className="nav-link-item">Omnia Suite</a>
            <a href="#industries" onClick={() => setMobileMenuOpen(false)} className="nav-link-item">Industries</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="nav-link-item">Project Estimator</a>
            <a href="#global" onClick={() => setMobileMenuOpen(false)} className="nav-link-item">Global Presence</a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsConsultModalOpen(true);
              }}
              className="glass-button-primary"
              style={{ width: '100%', marginTop: '8px' }}
            >
              Consult with AI Architect
            </button>
          </div>
        )}
      </header>

      {/* ====================================================
          HERO SECTION
          ==================================================== */}
      <section className="hero-section">
        <div className="app-container">
          <div className="hero-pill-badge">
            <div className="glass-pill">
              <span className="pulse-dot" />
              <span style={{ color: 'var(--neon-cyan)', fontWeight: 600 }}>NEXT-GEN AI & EMBEDDED ENGINEERING</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <span style={{ color: 'var(--text-muted)' }}>USA • UK • UAE • GLOBAL</span>
            </div>
          </div>

          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title">
              Architecting <span className="text-gradient-aurora">Autonomous AI Systems</span> & Intelligent Edge Hardware
            </h1>
          </div>

          <p className="hero-description">
            VisualSoft Global transforms bold ideas into enterprise-grade AI software, autonomous multi-agent swarms, IoT embedded firmware, and 24/7 mission-critical cloud infrastructure.
          </p>

          <div className="hero-cta-group">
            <button
              onClick={() => setIsConsultModalOpen(true)}
              className="glass-button-primary"
            >
              <span>Schedule Strategic Consultation</span>
              <ArrowRight size={18} />
            </button>
            <a href="#omnia" className="glass-button-secondary">
              <Terminal size={18} />
              <span>Launch Live AI Simulator</span>
            </a>
          </div>

          {/* Metrics Strip */}
          <div className="metrics-strip">
            <div className="glass-panel metric-card">
              <div className="icon-blur-halo halo-cyan" style={{ width: '60px', height: '60px', top: '10px', left: '50%', transform: 'translateX(-50%)' }} />
              <span className="metric-number text-glow-cyan">10+</span>
              <span className="metric-label">Years of Innovation</span>
            </div>
            <div className="glass-panel metric-card">
              <div className="icon-blur-halo halo-violet" style={{ width: '60px', height: '60px', top: '10px', left: '50%', transform: 'translateX(-50%)' }} />
              <span className="metric-number text-glow-violet">99.98%</span>
              <span className="metric-label">Operational Uptime</span>
            </div>
            <div className="glass-panel metric-card">
              <div className="icon-blur-halo halo-emerald" style={{ width: '60px', height: '60px', top: '10px', left: '50%', transform: 'translateX(-50%)' }} />
              <span className="metric-number text-glow-emerald">150+</span>
              <span className="metric-label">Enterprise Deployments</span>
            </div>
            <div className="glass-panel metric-card">
              <div className="icon-blur-halo halo-amber" style={{ width: '60px', height: '60px', top: '10px', left: '50%', transform: 'translateX(-50%)' }} />
              <span className="metric-number" style={{ color: 'var(--neon-amber)', textShadow: '0 0 20px rgba(255,170,0,0.5)' }}>7</span>
              <span className="metric-label">Global Regional Hubs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          OMNIA INTELLIGENT SUITE & LIVE SIMULATOR
          ==================================================== */}
      <section id="omnia" className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Cpu size={14} style={{ color: 'var(--neon-cyan)' }} />
              <span>FLAGSHIP PLATFORM SHOWCASE</span>
            </div>
            <h2 className="section-title">
              Experience the <span className="text-gradient-aurora">Omnia-Intelligent Suite</span>
            </h2>
            <p className="section-subtitle">
              VisualSoft’s unified cognitive operating matrix. Test real-time telemetry, autonomous agents, and computer vision models running with microsecond execution.
            </p>
          </div>

          <div className="glass-panel simulator-layout">
            {/* Simulator Left Navigation */}
            <div className="simulator-nav">
              <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)' }}>
                Select AI Agent Protocol
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <Shield size={16} style={{ color: 'var(--neon-emerald)' }} />
                  <span>Enterprise SOC-2 Certified</span>
                </div>
              </div>
            </div>

            {/* Simulator Right Interactive Telemetry Console */}
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

                {/* Telemetry Stats Grid */}
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
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Model Confidence</span>
                    <span className="metric-number text-glow-emerald" style={{ fontSize: '1.5rem', marginTop: '4px' }}>
                      {simulators[activeSim].confidence}
                    </span>
                  </div>
                </div>

                {/* Console Log Terminal */}
                <div className="console-output-box">
                  {simLogs.map((log, index) => (
                    <div key={index} style={{ marginBottom: '6px', color: index === simLogs.length - 1 ? '#00f2fe' : '#94a3b8' }}>
                      {log}
                    </div>
                  ))}
                  {simRunning && (
                    <div style={{ color: '#00f5a0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Activity size={14} className="animate-spin" />
                      <span>Processing neural telemetry packet...</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                  Connected via VisualSoft Secure Neural Mesh v4.2
                </span>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={runLiveSimulation}
                    disabled={simRunning}
                    className="glass-button-secondary"
                    style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                  >
                    <Activity size={16} />
                    <span>Trigger Live Benchmark</span>
                  </button>
                  <button
                    onClick={() => setIsConsultModalOpen(true)}
                    className="glass-button-primary"
                    style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                  >
                    <span>Deploy in Your Infra</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          CORE SERVICES SECTION
          ==================================================== */}
      <section id="services" className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Layers size={14} style={{ color: 'var(--neon-violet)' }} />
              <span>END-TO-END CAPABILITIES</span>
            </div>
            <h2 className="section-title">
              Full-Spectrum <span className="text-gradient-aurora">Technology Services</span>
            </h2>
            <p className="section-subtitle">
              From low-level microcontrollers to planetary-scale cloud systems, our specialized engineering units deliver unrivaled technical depth.
            </p>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '32px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setServiceCategory('all')}
                className={`glass-tab-btn ${serviceCategory === 'all' ? 'active' : ''}`}
              >
                All Capabilities
              </button>
              <button
                onClick={() => setServiceCategory('ai')}
                className={`glass-tab-btn ${serviceCategory === 'ai' ? 'active' : ''}`}
              >
                AI & Autonomous Agents
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
                Managed Cloud & Big Data
              </button>
            </div>
          </div>

          {/* Services Cards Grid */}
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
                    <div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Benchmark</span>
                      <div className={`metric-number ${srv.textColor}`} style={{ fontSize: '1.25rem' }}>
                        {srv.stat}
                      </div>
                    </div>
                    <button
                      onClick={() => setIsConsultModalOpen(true)}
                      className="learn-more-link"
                      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                      <span>Architect with us</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================
          INDUSTRIES WE EMPOWER
          ==================================================== */}
      <section id="industries" className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Building2 size={14} style={{ color: 'var(--neon-emerald)' }} />
              <span>MISSION-CRITICAL VERTICALS</span>
            </div>
            <h2 className="section-title">
              Engineered for <span className="text-gradient-aurora">Demanding Industries</span>
            </h2>
            <p className="section-subtitle">
              We eliminate technical debt and architect high-compliance, real-time software systems tailored to each sector’s exact regulatory standards.
            </p>
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

      {/* ====================================================
          INTERACTIVE AI ARCHITECTURE ESTIMATOR
          ==================================================== */}
      <section id="estimator" className="section-spacing">
        <div className="app-container">
          <div className="estimator-card">
            <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 40px auto' }}>
              <div className="glass-pill section-tag">
                <Compass size={14} style={{ color: 'var(--neon-cyan)' }} />
                <span>INTERACTIVE SCOPE CALCULATOR</span>
              </div>
              <h2 className="section-title" style={{ fontSize: '2.4rem' }}>
                Estimate Your <span className="text-gradient-aurora">AI Project Timeline</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
                Select your engineering requirements below for instant architecture sizing, delivery sprints, and estimated engagement investment.
              </p>
            </div>

            <div className="calculator-grid">
              {/* Controls */}
              <div>
                {/* 1. Core Solution Type */}
                <div className="calc-section-title">
                  <span className="pulse-dot" />
                  <span>1. Select Architecture Focus</span>
                </div>
                <div className="calc-options-grid">
                  <button
                    onClick={() => setProjectType('ai-agent')}
                    className={`calc-option-btn ${projectType === 'ai-agent' ? 'selected' : ''}`}
                  >
                    <span>Autonomous AI Agent Matrix</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Multi-agent workflows & LLM pipelines</span>
                  </button>
                  <button
                    onClick={() => setProjectType('embedded')}
                    className={`calc-option-btn ${projectType === 'embedded' ? 'selected' : ''}`}
                  >
                    <span>Embedded Edge IoT System</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Custom firmware, hardware, sensors</span>
                  </button>
                  <button
                    onClick={() => setProjectType('saas')}
                    className={`calc-option-btn ${projectType === 'saas' ? 'selected' : ''}`}
                  >
                    <span>Custom Enterprise SaaS</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Scalable web & cloud applications</span>
                  </button>
                  <button
                    onClick={() => setProjectType('cloud')}
                    className={`calc-option-btn ${projectType === 'cloud' ? 'selected' : ''}`}
                  >
                    <span>24/7 Managed Cloud & IT</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Infrastructure modernization & DevSecOps</span>
                  </button>
                </div>

                {/* 2. Scale & Tier */}
                <div className="calc-section-title">
                  <span className="pulse-dot" />
                  <span>2. Operational Scale Tier</span>
                </div>
                <div className="calc-options-grid">
                  <button
                    onClick={() => setProjectTier('prototype')}
                    className={`calc-option-btn ${projectTier === 'prototype' ? 'selected' : ''}`}
                  >
                    <span>Rapid MVP Prototype</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Validation & proof-of-concept in 3-5 sprints</span>
                  </button>
                  <button
                    onClick={() => setProjectTier('enterprise')}
                    className={`calc-option-btn ${projectTier === 'enterprise' ? 'selected' : ''}`}
                  >
                    <span>Production Enterprise</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Hardened security, high SLA, full QA</span>
                  </button>
                  <button
                    onClick={() => setProjectTier('distributed')}
                    className={`calc-option-btn ${projectTier === 'distributed' ? 'selected' : ''}`}
                    style={{ gridColumn: 'span 2' }}
                  >
                    <span>High-Concurrency Distributed Cloud/Hardware</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Global multi-region failover, millisecond edge routing</span>
                  </button>
                </div>

                {/* 3. Specialized Addons */}
                <div className="calc-section-title">
                  <span className="pulse-dot" />
                  <span>3. Specialized Modules</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    { id: 'vision', label: 'Computer Vision & ANPR Engine' },
                    { id: 'monitoring', label: '24/7 SOC/NOC Live Monitoring' },
                    { id: 'cad', label: 'Custom PCB & Hardware Prototyping' },
                    { id: 'data', label: 'Streaming ETL & Feature Warehouse' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => toggleAddon(item.id)}
                      className={`glass-tab-btn ${addons.includes(item.id) ? 'active' : ''}`}
                    >
                      {addons.includes(item.id) && <Check size={14} style={{ color: 'var(--neon-emerald)' }} />}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimate Summary Box */}
              <div className="calc-summary-panel">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
                      Architecture Proposal
                    </span>
                    <span className="glass-pill" style={{ color: 'var(--neon-emerald)', fontSize: '0.75rem' }}>
                      Verified Scope
                    </span>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Estimated Delivery Timeline</span>
                    <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#fff', marginTop: '4px' }}>
                      {estimate.weeks} <span style={{ fontSize: '1.2rem', color: 'var(--text-dim)', fontWeight: 400 }}>Sprints (~{Math.round(estimate.weeks / 4)} mos)</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Budget Estimate Range</span>
                    <div className="metric-number text-glow-cyan" style={{ fontSize: '2.2rem', marginTop: '4px' }}>
                      ${(estimate.cost * 0.9).toLocaleString()} - ${(estimate.cost * 1.25).toLocaleString()}
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                      Includes full source code IP ownership, CI/CD automated test harness, and SLA warranty.
                    </span>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--neon-cyan)' }} />
                      <span>Dedicated Senior Tech Lead & Solution Architect</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <CheckCircle2 size={16} style={{ color: 'var(--neon-cyan)' }} />
                      <span>Milestone-based delivery with weekly sprint demos</span>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '32px' }}>
                  <button
                    onClick={() => setIsConsultModalOpen(true)}
                    className="glass-button-primary"
                    style={{ width: '100%' }}
                  >
                    <span>Reserve Architecture Slot</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          GLOBAL PRESENCE & TRUST
          ==================================================== */}
      <section id="global" className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Globe2 size={14} style={{ color: 'var(--neon-cyan)' }} />
              <span>WORLDWIDE REACH</span>
            </div>
            <h2 className="section-title">
              Global Presence, <span className="text-gradient-aurora">Local Advisory</span>
            </h2>
            <p className="section-subtitle">
              With cross-border offices and 24/7 continuous operations, VisualSoft partners with fast-scaling enterprises across all primary financial & tech corridors.
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
                    <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)' }}>{reg.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================
          CONTACT & CONSULTATION SECTION
          ==================================================== */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="glass-panel contact-box">
            <div className="contact-layout">
              <div>
                <div className="glass-pill section-tag">
                  <Mail size={14} style={{ color: 'var(--neon-cyan)' }} />
                  <span>DIRECT ACCESS</span>
                </div>
                <h2 style={{ fontSize: '2.4rem', fontWeight: 800, fontFamily: 'var(--font-heading)', marginBottom: '16px', lineHeight: 1.2 }}>
                  Let's Engineer Your Next <span className="text-gradient-aurora">Breakthrough</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '32px' }}>
                  Speak directly with an AI solution architect or embedded system designer. We evaluate feasibility, formulate high-level topology, and deliver a comprehensive proposal within 48 hours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <a
                    href="mailto:contact.vs@visualsoft-inc.com"
                    style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', color: '#fff' }}
                  >
                    <div className="icon-box-blur" style={{ width: '48px', height: '48px' }}>
                      <div className="icon-blur-halo halo-cyan" />
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Direct Inquiries</span>
                      <span style={{ fontSize: '1rem', fontWeight: 600, display: 'block', color: 'var(--neon-cyan)' }}>
                        contact.vs@visualsoft-inc.com
                      </span>
                    </div>
                  </a>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div className="icon-box-blur" style={{ width: '48px', height: '48px' }}>
                      <div className="icon-blur-halo halo-emerald" />
                      <Activity size={20} className="text-white" />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Guaranteed Response</span>
                      <span style={{ fontSize: '1rem', fontWeight: 600, display: 'block', color: 'var(--text-white)' }}>
                        Under 2 Hours (24/7 Global Desk)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '32px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.08)' }}>
                {formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <div className="icon-box-blur" style={{ margin: '0 auto 20px auto', width: '64px', height: '64px' }}>
                      <div className="icon-blur-halo halo-emerald" />
                      <CheckCircle2 size={32} style={{ color: 'var(--neon-emerald)' }} />
                    </div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                      Message Received!
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                      A VisualSoft Solutions Lead will contact you shortly to review your technical requirements.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="glass-button-secondary"
                      style={{ marginTop: '24px' }}
                    >
                      Send Another Query
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
                  >
                    <div>
                      <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Your Name</label>
                      <input required type="text" placeholder="Johnathan Doe" className="glass-input" />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Work Email</label>
                      <input required type="email" placeholder="john@enterprise.com" className="glass-input" />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Project Interest</label>
                      <select className="glass-input" style={{ background: '#090d18' }}>
                        <option>Autonomous AI Agent System</option>
                        <option>Embedded Systems & Edge IoT</option>
                        <option>AI-Enabled Custom Software</option>
                        <option>24/7 Managed IT & Cloud Infrastructure</option>
                        <option>Data & Analytics Suite</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Project Details / Objectives</label>
                      <textarea rows="3" placeholder="Tell us about your technical goals, timeline, and current stack..." className="glass-input" />
                    </div>
                    <button type="submit" className="glass-button-primary" style={{ width: '100%', marginTop: '8px' }}>
                      <Send size={16} />
                      <span>Request Free Architecture Review</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          FOOTER
          ==================================================== */}
      <footer className="site-footer">
        <div className="app-container">
          <div className="footer-top">
            <div>
              <div className="brand-logo" style={{ marginBottom: '16px' }}>
                <div className="brand-badge">
                  <span className="logo-glow-dot" />
                  <Cpu size={22} className="text-white" />
                </div>
                <div>
                  <div className="brand-name">
                    VISUAL<span className="highlight">SOFT</span>
                  </div>
                  <span className="brand-sub">GLOBAL TECHNOLOGY</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', maxWidth: '340px', lineHeight: 1.6 }}>
                VisualSoft Global (VS) delivers custom AI systems, embedded IoT hardware, and managed IT services turning ideas into groundbreaking digital products worldwide.
              </p>
            </div>

            <div>
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-link-list">
                <li><a href="#services">AI Custom Software</a></li>
                <li><a href="#services">AI Agent Development</a></li>
                <li><a href="#services">Embedded IoT Hardware</a></li>
                <li><a href="#services">Managed Cloud Ops</a></li>
                <li><a href="#services">Data & Predictive Analytics</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Solutions</h4>
              <ul className="footer-link-list">
                <li><a href="#omnia">Omnia-Intelligent Suite</a></li>
                <li><a href="#industries">Fintech Solutions</a></li>
                <li><a href="#industries">ANPR Vision Camera Mesh</a></li>
                <li><a href="#industries">Smart Fleet Logistics</a></li>
                <li><a href="#estimator">Project Estimator</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Global Headquarters</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                Operational branches in United Kingdom, United States, Saudi Arabia, UAE, Malaysia, Australia & Pakistan.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a href="mailto:contact.vs@visualsoft-inc.com" className="glass-pill" style={{ textDecoration: 'none' }}>
                  <Mail size={14} style={{ color: 'var(--neon-cyan)' }} />
                  <span>contact.vs@visualsoft-inc.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              Copyright 2026 © VisualSoft Global LLP. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Security Compliance</a>
              <a href="#" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Terms of Engagement</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================
          INTERACTIVE CONSULTATION MODAL
          ==================================================== */}
      {isConsultModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsConsultModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsConsultModalOpen(false)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
            >
              <X size={22} />
            </button>

            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div className="icon-box-blur" style={{ margin: '0 auto 16px auto' }}>
                <div className="icon-blur-halo halo-cyan" />
                <Sparkles size={24} style={{ color: 'var(--neon-cyan)' }} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)' }}>
                Book an AI Strategy Session
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '6px' }}>
                Discuss architecture roadmap, timeline, and team allocation directly with our technical leadership.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsConsultModalOpen(false);
                alert('Thank you! A VisualSoft Solution Architect has reserved your slot and will reach out shortly.');
              }}
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Full Name</label>
                <input required type="text" placeholder="Sarah Jenkins" className="glass-input" />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Work Email</label>
                <input required type="email" placeholder="sarah@company.com" className="glass-input" />
              </div>
              <div>
                <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Estimated Project Timeline</label>
                <select className="glass-input" style={{ background: '#090d18' }}>
                  <option>Immediate (Within 2-4 weeks)</option>
                  <option>Next Quarter (1-3 months)</option>
                  <option>Exploratory / Architectural R&D</option>
                </select>
              </div>
              <button type="submit" className="glass-button-primary" style={{ width: '100%', marginTop: '8px' }}>
                <span>Confirm & Reserve Call</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
