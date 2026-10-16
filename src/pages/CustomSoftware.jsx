import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  ArrowRight,
  CheckCircle2,
  Layers,
  Database,
  Server,
  Cpu,
  Shield,
  Workflow,
  Sparkles,
  Users,
  Repeat,
  Terminal,
  Activity,
  Bot,
  Globe2,
  Box,
  Check,
  ChevronRight,
  Code2,
  FileCode,
  Share2,
  Cloud,
  Boxes,
  GitBranch,
  Brain,
  Eye,
  Globe,
  Zap
} from 'lucide-react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiGraphql,
  SiDotnet,
  SiNodedotjs,
  SiPython,
  SiWordpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiFirebase,
  SiTensorflow,
  SiOpencv
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { TbBrandAzure } from 'react-icons/tb';
import { GrOracle } from 'react-icons/gr';
import { DiMsqlServer } from 'react-icons/di';
import Accordion from '../components/Accordion';

export default function CustomSoftware({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState('fullstack');
  const [activeTechTab, setActiveTechTab] = useState('frontend');

  useEffect(() => {
    document.title = "AI-Enabled Custom Software Development | VisualSoft Global";
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      num: '01',
      title: 'Custom Business Applications',
      text: "Web and mobile software built around the workflows off-the-shelf tools can't handle."
    },
    {
      num: '02',
      title: 'AI Integration',
      text: 'Add prediction, automation or assistants to your current ERP, CRM or cloud systems without disrupting operations.'
    },
    {
      num: '03',
      title: 'Intelligent Automation',
      text: 'Take repetitive, rules-heavy work such as document handling, approvals and data entry off your team.'
    },
    {
      num: '04',
      title: 'AI Chatbots & Assistants',
      text: 'Assistants that answer from your own files and systems, with access controls.'
    },
    {
      num: '05',
      title: 'Predictive Analytics & ML',
      text: 'Forecasting, anomaly detection and decision support built on your own data.'
    },
    {
      num: '06',
      title: 'Computer Vision',
      text: 'Detection, classification and pattern recognition from images, video and camera feeds.'
    },
    {
      num: '07',
      title: 'Enterprise AI Platforms',
      text: 'Modular platforms with data pipelines, model orchestration and governance controls.'
    },
    {
      num: '08',
      title: 'Maintenance & Retraining',
      text: 'Monitoring, updates and model retraining after launch, so accuracy holds as your data changes.'
    }
  ];

  const technologies = [
    {
      id: 'frontend',
      category: 'Frontend',
      icon: SiReact,
      tagline: 'Modern Single Page Applications & UI',
      description: 'High-performance interfaces, reactive client-side logic, responsive layouts, and micro-frontend architectures.',
      items: [
        { name: 'JavaScript', subtitle: 'ES6+ Dynamic Scripting', icon: SiJavascript, color: '#f7df1e' },
        { name: 'TypeScript', subtitle: 'Strongly Typed Safety', icon: SiTypescript, color: '#3178c6' },
        { name: 'React', subtitle: 'Component Architecture', icon: SiReact, color: '#61dafb' },
        { name: 'Next.js', subtitle: 'SSR & Server Components', icon: SiNextdotjs, color: '#ffffff' },
        { name: 'Angular', subtitle: 'Enterprise Framework', icon: SiAngular, color: '#dd0031' },
        { name: 'Vue', subtitle: 'Progressive Framework', icon: SiVuedotjs, color: '#42b883' },
        { name: 'GraphQL', subtitle: 'Declarative Data Queries', icon: SiGraphql, color: '#e535ab' },
        { name: 'REST API', subtitle: 'Contract-First Endpoints', icon: Terminal, color: '#38bdf8' }
      ]
    },
    {
      id: 'backend',
      category: 'Backend',
      icon: SiNodedotjs,
      tagline: 'Scalable Microservices & Business Logic',
      description: 'Robust, fault-tolerant server systems, event-driven pipelines, asynchronous workers, and high-concurrency APIs.',
      items: [
        { name: '.NET', subtitle: 'High-Performance C# Core', icon: SiDotnet, color: '#512bd4' },
        { name: 'Node.js', subtitle: 'Event-Driven Async Runtime', icon: SiNodedotjs, color: '#5fa04e' },
        { name: 'Python', subtitle: 'FastAPI & Django Ecosystem', icon: SiPython, color: '#3776ab' }
      ]
    },
    {
      id: 'cms',
      category: 'CMS',
      icon: SiWordpress,
      tagline: 'Enterprise Content Systems',
      description: 'Decoupled content hubs, role-based workflows, custom plugins, and secured administrative portals.',
      items: [
        { name: 'WordPress', subtitle: 'Custom Themes & Headless API', icon: SiWordpress, color: '#21759b' }
      ]
    },
    {
      id: 'database',
      category: 'Database',
      icon: SiPostgresql,
      tagline: 'Relational & Document Data Persistence',
      description: 'ACID-compliant storage, real-time distributed queries, data warehousing, and optimized schema indexing.',
      items: [
        { name: 'MongoDB', subtitle: 'Flexible Document Store', icon: SiMongodb, color: '#47a248' },
        { name: 'PostgreSQL', subtitle: 'Advanced Relational Engine', icon: SiPostgresql, color: '#4169e1' },
        { name: 'MySQL', subtitle: 'Proven Relational Database', icon: SiMysql, color: '#00758f' },
        { name: 'MsSQL', subtitle: 'Microsoft Enterprise DB', icon: DiMsqlServer, color: '#cc292b' }
      ]
    },
    {
      id: 'devops',
      category: 'Cloud & DevOps',
      icon: SiDocker,
      tagline: 'Containerized Infrastructure & Automation',
      description: 'Continuous integration pipelines, automated zero-downtime releases, multi-cloud reliability, and observability.',
      items: [
        { name: 'Docker', subtitle: 'Containerized Isolation', icon: SiDocker, color: '#2496ed' },
        { name: 'CI/CD', subtitle: 'Automated Deploy Pipelines', icon: GitBranch, color: '#10b981' },
        { name: 'Git', subtitle: 'Distributed Version Control', icon: SiGit, color: '#f05032' },
        { name: 'AWS', subtitle: 'Cloud Infrastructure & Lambdas', icon: FaAws, color: '#ff9900' },
        { name: 'Azure', subtitle: 'Microsoft Cloud Ecosystem', icon: TbBrandAzure, color: '#0078d4' },
        { name: 'Firebase', subtitle: 'Real-Time Edge Services', icon: SiFirebase, color: '#ffca28' },
        { name: 'Oracle Cloud', subtitle: 'Enterprise High-Compute', icon: GrOracle, color: '#f80000' }
      ]
    },
    {
      id: 'aiml',
      category: 'AI / ML',
      icon: SiTensorflow,
      tagline: 'Machine Learning, LLMs & Computer Vision',
      description: 'Production neural network inference, custom transformer models, real-time object detection, and vector embeddings.',
      items: [
        { name: 'Tensorflow', subtitle: 'Deep Learning Ecosystem', icon: SiTensorflow, color: '#ff6f00' },
        { name: 'OpenCV', subtitle: 'Real-Time Vision & Image Filters', icon: SiOpencv, color: '#5c3ee8' },
        { name: 'Deep Learning', subtitle: 'Multi-Layer Neural Networks', icon: Brain, color: '#00f5a0' },
        { name: 'YOLO', subtitle: 'Ultra-Fast Object Detection', icon: Eye, color: '#00d4ff' }
      ]
    }
  ];

  const industries = [
    { name: 'Fintech', desc: 'Secure platforms for payments, e-invoicing and compliance workflows.' },
    { name: 'Logistics & Transportation', desc: 'Tracking, routing and parcel-handling software that cuts manual checks.' },
    { name: 'Security & Surveillance', desc: 'Detection, ANPR and access-control software that turns cameras into intelligence.' },
    { name: 'Manufacturing', desc: 'Real-time visibility and automation for production lines.' },
    { name: 'E-commerce & Retail', desc: 'Custom storefronts, pricing logic and automated customer communication.' },
    { name: 'Telecom', desc: 'Scalable software and infrastructure support for operators.' }
  ];

  const steps = [
    { num: 'Step 01', title: 'Discover', desc: 'We map your workflows, data and goals.' },
    { num: 'Step 02', title: 'Design & Prototype', desc: 'You see a working prototype before full development.' },
    { num: 'Step 03', title: 'Build & Integrate', desc: 'We develop the software and connect it to your systems.' },
    { num: 'Step 04', title: 'Test & Deploy', desc: 'Quality checks, security review and a planned launch.' },
    { num: 'Step 05', title: 'Support & Improve', desc: 'Monitoring, updates and model retraining after go-live.' }
  ];

  const faqs = [
    {
      question: 'What is AI-enabled custom software?',
      answer: "Software built around your workflows with AI features such as prediction, automation or assistants designed in from the start, instead of an off-the-shelf tool you adapt to."
    },
    {
      question: 'Can you add AI to software we already use?',
      answer: "Yes. We integrate AI into existing ERP, CRM, mobile and cloud systems in phases, so operations aren't disrupted."
    },
    {
      question: 'How long does a project take?',
      answer: "It depends on scope. We usually start with a short discovery phase and a prototype, then give a milestone plan."
    },
    {
      question: 'What does it cost?',
      answer: "Cost depends on scope, data readiness and integrations. After a discovery call we give a clear estimate."
    },
    {
      question: 'Who owns the code?',
      answer: "You own 100% of the code, IP, and documentation produced for your project."
    },
    {
      question: 'How do you keep our data secure?',
      answer: "We design with access controls and data protection from the start, and can align with regulations such as GDPR where your project requires it."
    },
    {
      question: 'Can you take over an existing codebase?',
      answer: "Yes. We start with a code and architecture review, then continue development from where it stands."
    },
    {
      question: 'Do you support the system after launch?',
      answer: "Yes: monitoring, updates, optimization and model retraining."
    }
  ];

  return (
    <div className="custom-software-page">
      {/* Hero Section (Revamped Two-Column Split) */}
      <section className="service-hero-section">
        <div className="app-container">
          <div className="service-hero-split">
            {/* Left Content */}
            <div>
              <div className="hero-pill-badge">
                <div className="glass-pill">
                  <span className="pulse-dot" />
                  <span style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>AI & SOFTWARE DEVELOPMENT</span>
                </div>
              </div>

              <div className="title-aura-container">
                <div className="title-aura" />
                <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.4vw, 3.8rem)' }}>
                  AI-Enabled Custom <span className="text-gradient-brand">Software Development</span>
                </h1>
              </div>

              <p className="hero-description" style={{ maxWidth: '640px' }}>
                We design, build and support custom software with AI built into the business logic, from internal platforms and customer apps to automation, analytics and intelligent assistants. One engineering team takes you from the first workshop to post-launch support.
              </p>

              <div className="hero-cta-group">
                <Link to="/contactus" className="glass-button-primary">
                  <span>Scope Your AI Software Project</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/case-studies" className="glass-button-secondary">
                  <span>See Our Work</span>
                  <ChevronRight size={16} />
                </Link>
              </div>

              <div className="hero-trust-badges">
                <div className="trust-badge-item">
                  <CheckCircle2 size={16} style={{ color: 'var(--brand-blue)' }} />
                  <span>One Team From Discovery to Support</span>
                </div>
                <div className="trust-badge-item">
                  <CheckCircle2 size={16} style={{ color: 'var(--brand-blue)' }} />
                  <span>You Own 100% Code & IP</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Architecture Visualizer */}
            <div>
              <div className="software-arch-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f5a0', boxShadow: '0 0 8px #00f5a0' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#93c5fd', fontWeight: 600 }}>
                      Custom AI Architecture Stack
                    </span>
                  </div>
                  <span className="glass-pill" style={{ fontSize: '0.72rem', padding: '2px 8px', color: 'var(--brand-blue)' }}>
                    Production Ready
                  </span>
                </div>

                <div className="arch-flow-diagram">
                  <div className="arch-flow-node">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Globe2 size={16} style={{ color: 'var(--brand-blue)' }} />
                      <div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', display: 'block' }}>Client Frontend & Apps</span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Next.js • React • TypeScript • Web/Mobile</span>
                      </div>
                    </div>
                    <span style={{ color: 'var(--brand-blue)', fontSize: '0.72rem', fontWeight: 700 }}>HIGH UX</span>
                  </div>

                  <div className="arch-connector-line" />

                  <div className="arch-flow-node" style={{ borderColor: 'rgba(35, 79, 246, 0.4)', background: 'rgba(35, 79, 246, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Workflow size={16} style={{ color: 'var(--brand-blue)' }} />
                      <div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', display: 'block' }}>Enterprise Business Logic & APIs</span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>.NET • Node.js • Python • GraphQL • Microservices</span>
                      </div>
                    </div>
                    <span style={{ color: '#60a5fa', fontSize: '0.72rem', fontWeight: 700 }}>SECURE</span>
                  </div>

                  <div className="arch-connector-line" />

                  <div className="arch-flow-node" style={{ borderColor: 'rgba(0, 212, 255, 0.4)', background: 'rgba(0, 212, 255, 0.08)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Bot size={16} style={{ color: 'var(--neon-cyan)' }} />
                      <div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', display: 'block' }}>Embedded AI Engine & LLM Layer</span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>Tensorflow • Deep Learning • YOLO • Custom Models</span>
                      </div>
                    </div>
                    <span style={{ color: 'var(--neon-cyan)', fontSize: '0.72rem', fontWeight: 700 }}>NEURAL</span>
                  </div>

                  <div className="arch-connector-line" />

                  <div className="arch-flow-node">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Server size={16} style={{ color: 'var(--neon-emerald)' }} />
                      <div>
                        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', display: 'block' }}>Cloud Database & DevOps Infrastructure</span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>PostgreSQL • Docker • CI/CD • AWS / Azure</span>
                      </div>
                    </div>
                    <span style={{ color: 'var(--neon-emerald)', fontSize: '0.72rem', fontWeight: 700 }}>99.99%</span>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                  <span>Single integrated engineering team</span>
                  <span style={{ color: 'var(--brand-blue)', fontWeight: 600 }}>Zero Vendor Sprawl</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Strip from PDF */}
          <div className="metrics-strip" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '20px' }}>
            <div className="glass-panel metric-card">
              <span className="metric-number text-glow-blue">4</span>
              <span className="metric-label">Countries we serve: USA, UK, UAE, Pakistan</span>
            </div>
            <div className="glass-panel metric-card">
              <span className="metric-number text-glow-blue">6</span>
              <span className="metric-label">Connected services under one team</span>
            </div>
            <div className="glass-panel metric-card">
              <span className="metric-number text-glow-cyan" style={{ fontSize: '1.9rem' }}>End to End</span>
              <span className="metric-label">Discovery, build, launch and support</span>
            </div>
          </div>
          <p style={{ marginTop: '16px', color: 'var(--text-dim)', fontSize: '0.92rem', fontStyle: 'italic', textAlign: 'center' }}>
            "Good software shows up in your results, not in a feature list."
          </p>
        </div>
      </section>

      {/* Section 3: How we build (Alternating Luminous Contrast Section) */}
      <section className="section-spacing section-alt-contrast">
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '48px', position: 'relative' }}>
            <div className="icon-blur-halo halo-brand-blue" style={{ width: '220px', height: '220px', top: '10px', right: '10px' }} />
            <div className="glass-pill" style={{ marginBottom: '16px' }}>
              <Workflow size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>HOW WE BUILD</span>
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.2rem' }}>
              One Team from First Workshop to <span className="text-gradient-brand">Post-Launch Support</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '920px', marginBottom: '20px' }}>
              Our AI-enabled custom software covers new applications, AI features added to systems you already run, automation, analytics and intelligent assistants. Instead of splitting the work across several vendors, one team handles architecture, development, integration and support.
            </p>
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 500 }}>
              Custom means the software is built around your workflows and rules, not a template you have to adapt to. <span style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>You own the code and documentation produced for your project.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Capabilities (Numbered 4x2 Grid from PDF Build Notes) */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Layers size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>WHAT OUR TEAM DELIVERS</span>
            </div>
            <h2 className="section-title">
              Core Capabilities in a <span className="text-gradient-brand">Numbered 4x2 Matrix</span>
            </h2>
            <p className="section-subtitle">
              Every card built around your workflows with one clear sentence.
            </p>
          </div>

          <div className="numbered-grid-4x2">
            {capabilities.map((cap) => (
              <div key={cap.num} className="capability-card-pro">
                <span className="capability-num-tag">{cap.num}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  {cap.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginTop: 'auto' }}>
                  {cap.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Technologies (Alternating Luminous Contrast Section) */}
      <section className="section-spacing section-alt-contrast">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Terminal size={14} style={{ color: 'var(--neon-cyan)' }} />
              <span>THE MODERN STACK, END TO END</span>
            </div>
            <h2 className="section-title">
              Technologies That Scale <span className="text-gradient-brand">With You</span>
            </h2>
            <p className="section-subtitle">
              We rebuild every layer of your stack—backend, frontend, data, and infrastructure—onto technology that scales with you, not against you.
            </p>
          </div>

          {/* Interactive Technology Tabs Navigation */}
          <div className="tech-tabs-nav">
            <button
              type="button"
              className={`tech-tab-btn ${activeTechTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTechTab('all')}
            >
              <Sparkles size={16} style={{ color: activeTechTab === 'all' ? '#00f5a0' : 'inherit' }} />
              <span>Full Stack</span>
              <span className="tech-tab-count">27</span>
            </button>

            {technologies.map((tech) => {
              const TabIcon = tech.icon;
              const isActive = activeTechTab === tech.id;
              return (
                <button
                  key={tech.id}
                  type="button"
                  className={`tech-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTechTab(tech.id)}
                >
                  <TabIcon size={16} style={{ color: isActive ? 'var(--brand-blue)' : 'inherit' }} />
                  <span>{tech.category}</span>
                  <span className="tech-tab-count">{tech.items.length}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          {activeTechTab === 'all' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {technologies.map((tech) => {
                const CatIcon = tech.icon;
                return (
                  <div key={tech.id} className="tech-tab-panel">
                    <div className="tech-tab-panel-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div className="tech-card-icon" style={{ width: '48px', height: '48px', background: 'rgba(35, 79, 246, 0.12)', borderColor: 'rgba(35, 79, 246, 0.3)', color: 'var(--brand-blue)' }}>
                          <CatIcon size={22} />
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                              {tech.category}
                            </h3>
                            <span className="glass-pill" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                              {tech.items.length} Core Technologies
                            </span>
                          </div>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', marginTop: '4px', maxWidth: '650px', lineHeight: 1.5 }}>
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="tech-cards-grid">
                      {tech.items.map((it, idx) => {
                        const IconComp = it.icon;
                        return (
                          <div key={idx} className="tech-item-card">
                            <div className="tech-card-icon" style={{ color: it.color }}>
                              <IconComp size={20} />
                            </div>
                            <div className="tech-card-info">
                              <span className="tech-card-name">{it.name}</span>
                              <span className="tech-card-sub">{it.subtitle}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            (() => {
              const currentTech = technologies.find((t) => t.id === activeTechTab);
              if (!currentTech) return null;
              const CatIcon = currentTech.icon;
              return (
                <div className="tech-tab-panel" key={currentTech.id}>
                  <div className="tech-tab-panel-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div className="tech-card-icon" style={{ width: '52px', height: '52px', background: 'rgba(35, 79, 246, 0.15)', borderColor: 'rgba(35, 79, 246, 0.35)', color: 'var(--brand-blue)' }}>
                        <CatIcon size={26} />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                            {currentTech.category}
                          </h3>
                          <span className="glass-pill" style={{ fontSize: '0.75rem', padding: '3px 10px', color: 'var(--brand-blue)' }}>
                            {currentTech.tagline}
                          </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '6px', maxWidth: '720px', lineHeight: 1.6 }}>
                          {currentTech.description}
                        </p>
                      </div>
                    </div>
                    <div className="glass-pill" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#93c5fd' }}>
                      {currentTech.items.length} Production Standards
                    </div>
                  </div>

                  <div className="tech-cards-grid">
                    {currentTech.items.map((it, idx) => {
                      const IconComp = it.icon;
                      return (
                        <div key={idx} className="tech-item-card">
                          <div className="tech-card-icon" style={{ color: it.color }}>
                            <IconComp size={20} />
                          </div>
                          <div className="tech-card-info">
                            <span className="tech-card-name">{it.name}</span>
                            <span className="tech-card-sub">{it.subtitle}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()
          )}
        </div>
      </section>

      {/* Section 6: Industries */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Shield size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>WHERE THIS WORK LANDS</span>
            </div>
            <h2 className="section-title">
              Tailored for High-Demand <span className="text-gradient-brand">Industries</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {industries.map((ind, i) => (
              <div key={i} className="glass-panel" style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  {ind.name}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: How we work (5 steps) (Alternating Luminous Contrast Section) */}
      <section className="section-spacing section-alt-contrast">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Repeat size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>FROM IDEA TO LIVE SYSTEM</span>
            </div>
            <h2 className="section-title">
              How We <span className="text-gradient-brand">Work</span>
            </h2>
          </div>

          <div className="process-steps-grid">
            {steps.map((st, i) => (
              <div key={i} className="glass-panel step-card">
                <span className="step-pill">{st.num}</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  {st.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Engagement Models */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Users size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>TWO WAYS TO WORK WITH US</span>
            </div>
            <h2 className="section-title">
              Engagement <span className="text-gradient-brand">Models</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div className="glass-panel" style={{ padding: '36px' }}>
              <div className="icon-box-blur" style={{ marginBottom: '20px' }}>
                <div className="icon-blur-halo halo-brand-blue" />
                <Layers size={24} className="text-white" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                Full Build
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                Our team handles requirements, architecture, development, deployment and support.
              </p>
              <Link to="/contactus" className="glass-button-primary" style={{ width: '100%' }}>
                <span>Let's Talk Full Build</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="glass-panel" style={{ padding: '36px' }}>
              <div className="icon-box-blur" style={{ marginBottom: '20px' }}>
                <div className="icon-blur-halo halo-cyan" />
                <Users size={24} className="text-white" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                Embedded Team
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px' }}>
                Our engineers join your team and sprints when you need extra engineering capacity.
              </p>
              <Link to="/contactus" className="glass-button-secondary" style={{ width: '100%' }}>
                <span>Augment Your Team</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ Accordion */}
      <section className="section-spacing section-alt-contrast">
        <div className="app-container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <h2 className="section-title">
              Frequently Asked <span className="text-gradient-brand">Questions</span>
            </h2>
            <p className="section-subtitle">
              Clear answers regarding code ownership, delivery speed, and AI integration.
            </p>
          </div>

          <Accordion items={faqs} />
        </div>
      </section>

      {/* Section 10: Closing Section */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '60px 40px', textAlign: 'center', position: 'relative' }}>
            <div className="icon-blur-halo halo-brand-blue" style={{ width: '300px', height: '300px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '16px' }}>
              Ready to Build Software That Fits How You Work?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto 36px auto', lineHeight: 1.7 }}>
              Bring your current systems and your goals. We'll show where AI-enabled software moves the needle fastest.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contactus" className="glass-button-primary">
                <span>Scope Your AI Software Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/ai-enabled-embedded-system-design" className="glass-button-secondary">
                <span>Building a Smart Device?</span>
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
