import React, { useEffect } from 'react';
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
  Bot
} from 'lucide-react';
import Accordion from '../components/Accordion';

export default function CustomSoftware({ onOpenModal }) {
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
    { category: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'Vue', 'GraphQL', 'Rest API'] },
    { category: 'Backend', items: ['.NET', 'Node.js', 'Python'] },
    { category: 'CMS', items: ['WordPress'] },
    { category: 'Database', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'MsSQL'] },
    { category: 'Cloud & DevOps', items: ['Docker', 'CI/CD', 'Git', 'AWS', 'Azure', 'Firebase', 'Oracle Cloud'] },
    { category: 'AI / ML', items: ['Tensorflow', 'OpenCV', 'Deep Learning', 'YOLO'] }
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
    { num: 'Step 1', title: 'Discover', desc: 'We map your workflows, data and goals.' },
    { num: 'Step 2', title: 'Design & Prototype', desc: 'You see a working prototype before full development.' },
    { num: 'Step 3', title: 'Build & Integrate', desc: 'We develop the software and connect it to your systems.' },
    { num: 'Step 4', title: 'Test & Deploy', desc: 'Quality checks, security review and a planned launch.' },
    { num: 'Step 5', title: 'Support & Improve', desc: 'Monitoring, updates and model retraining after go-live.' }
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
      {/* Hero Section */}
      <section className="page-hero">
        <div className="app-container">
          <span className="page-hero-label">AI & Software Development</span>
          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)' }}>
              AI-Enabled Custom <span className="text-gradient-brand">Software Development</span>
            </h1>
          </div>

          <p className="hero-description" style={{ maxWidth: '820px' }}>
            We design, build and support custom software with AI built into the business logic, from internal platforms and customer apps to automation, analytics and intelligent assistants. One engineering team takes you from the first workshop to post-launch support.
          </p>

          <div className="hero-cta-group">
            <Link to="/contactus" className="glass-button-primary">
              <span>Scope Your AI Software Project</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/case-studies" className="glass-button-secondary">
              <span>See Our Work</span>
            </Link>
          </div>

          {/* Stats Strip from PDF */}
          <div className="metrics-strip" style={{ marginTop: '50px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="glass-panel metric-card">
              <span className="metric-number text-glow-blue">4</span>
              <span className="metric-label">Countries we serve: USA, UK, UAE, Pakistan</span>
            </div>
            <div className="glass-panel metric-card">
              <span className="metric-number text-glow-blue">6</span>
              <span className="metric-label">Connected services under one team</span>
            </div>
            <div className="glass-panel metric-card">
              <span className="metric-number text-glow-cyan" style={{ fontSize: '1.8rem' }}>End to End</span>
              <span className="metric-label">Discovery, build, launch and support</span>
            </div>
          </div>
          <p style={{ marginTop: '16px', color: 'var(--text-dim)', fontSize: '0.9rem', fontStyle: 'italic' }}>
            Good software shows up in your results, not in a feature list.
          </p>
        </div>
      </section>

      {/* Section 3: How we build */}
      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '48px', position: 'relative' }}>
            <div className="icon-blur-halo halo-brand-blue" style={{ width: '200px', height: '200px', top: '10px', right: '10px' }} />
            <div className="glass-pill" style={{ marginBottom: '16px' }}>
              <Workflow size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>Unified Delivery</span>
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.2rem' }}>
              One Team from First Workshop to <span className="text-gradient-brand">Post-Launch Support</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '900px', marginBottom: '20px' }}>
              Our AI-enabled custom software covers new applications, AI features added to systems you already run, automation, analytics and intelligent assistants. Instead of splitting the work across several vendors, one team handles architecture, development, integration and support.
            </p>
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 500 }}>
              Custom means the software is built around your workflows and rules, not a template you have to adapt to. <span style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>You own 100% of the code and documentation produced for your project.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Capabilities (Numbered 4x2 Grid from PDF) */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Layers size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>DELIVERY SCOPE</span>
            </div>
            <h2 className="section-title">
              What Our <span className="text-gradient-brand">Team Delivers</span>
            </h2>
            <p className="section-subtitle">
              High-value capabilities built specifically around your operations.
            </p>
          </div>

          <div className="numbered-grid-4x2">
            {capabilities.map((cap) => (
              <div key={cap.num} className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                <span className="capability-number">{cap.num}</span>
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

      {/* Section 5: Technologies */}
      <section className="section-spacing" style={{ background: 'rgba(3, 7, 23, 0.6)' }}>
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

          <div className="grid-cols-auto">
            {technologies.map((tech, i) => (
              <div key={i} className="glass-panel tech-cat-card">
                <div className="tech-cat-title">
                  <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                  <span>{tech.category}</span>
                </div>
                <div className="tech-pill-list">
                  {tech.items.map((item, idx) => (
                    <span key={idx} className="tech-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
              Tailored for Critical <span className="text-gradient-brand">Industries</span>
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

      {/* Section 7: How we work (5 steps) */}
      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
              <span>COLLABORATION FRAMEWORK</span>
            </div>
            <h2 className="section-title">
              Two Ways to <span className="text-gradient-brand">Work With Us</span>
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
                Our team handles complete requirements, architecture, software development, cloud deployment, and long-term support.
              </p>
              <Link to="/contactus" className="glass-button-primary" style={{ width: '100%' }}>
                <span>Initiate Full Build</span>
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
                Our senior software and AI engineers join your in-house team and sprints when you need extra engineering velocity and specialized capabilities.
              </p>
              <Link to="/contactus" className="glass-button-secondary" style={{ width: '100%' }}>
                <span>Augment Your Team</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ (Accordion) */}
      <section className="section-spacing">
        <div className="app-container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <h2 className="section-title">
              Frequently Asked <span className="text-gradient-brand">Questions</span>
            </h2>
            <p className="section-subtitle">
              Clear answers regarding ownership, scope, security, and maintenance.
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
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
