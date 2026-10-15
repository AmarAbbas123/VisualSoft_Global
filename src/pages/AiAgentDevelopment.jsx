import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bot, ArrowRight, CheckCircle2, Zap, Shield, TrendingUp, Workflow, Sparkles } from 'lucide-react';

export default function AiAgentDevelopment({ onOpenModal }) {
  useEffect(() => {
    document.title = "AI Agent Development Services | VisualSoft Global";
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      title: 'Growth & Revenue Generation',
      desc: 'Sales Development Representative (SDR) Agents that engage prospects, qualify leads, and schedule demos automatically.'
    },
    {
      title: 'Enterprise Workflow Orchestration',
      desc: 'Multi-agent systems that coordinate complex decisions and tasks across departments without manual handoffs.'
    },
    {
      title: 'Customer Experience & Intelligent Support',
      desc: 'Agents that answer from your own knowledge bases, documents, and live APIs with rigorous guardrails and access controls.'
    },
    {
      title: 'Decision Intelligence & Compliance',
      desc: 'Automated auditing, compliance verification, and fraud detection that reduces human error and accelerates response times.'
    }
  ];

  return (
    <div className="service-subpage">
      <section className="page-hero">
        <div className="app-container">
          <span className="page-hero-label">ENTERPRISE AGENTIC SYSTEMS</span>
          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)' }}>
              AI Agent Development <span className="text-gradient-brand">Services for Your Business</span>
            </h1>
          </div>
          <p className="hero-description" style={{ maxWidth: '820px' }}>
            We build custom AI agents that automate decisions, streamline workflows and improve customer experiences. Every agent is designed for scale, transparency and security, so you can deploy with confidence.
          </p>
          <div className="hero-cta-group">
            <button onClick={onOpenModal} className="glass-button-primary">
              <Sparkles size={18} />
              <span>Book a Free Consultation</span>
            </button>
            <Link to="/contactus" className="glass-button-secondary">
              <span>Scope Your AI Agent</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '48px', position: 'relative' }}>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.2rem' }}>
              We Don’t Build Generic Chatbots. We Design <span className="text-gradient-brand">Agentic Systems</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '920px', marginBottom: '24px' }}>
              We design AI agents that don't just automate tasks but drive enterprise-wide transformation, delivering measurable ROI, strengthening compliance, and fitting seamlessly into even the most complex digital ecosystems.
            </p>
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Our agents handle complex decisions, coordinate workflows across departments, and connect directly to the tools you already use, so you see immediate business impact.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Bot size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="section-title">
              Comprehensive AI Agent <span className="text-gradient-brand">Solutions We Deliver</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {capabilities.map((c, i) => (
              <div key={i} className="glass-panel" style={{ padding: '32px' }}>
                <div className="icon-box-blur" style={{ marginBottom: '18px' }}>
                  <div className="icon-blur-halo halo-brand-blue" />
                  <Bot size={24} className="text-white" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  {c.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '50px 32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              Ready to Deploy Autonomous Agents?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto 30px auto' }}>
              Connect with our AI engineers to discuss feasibility, safety guardrails, and enterprise integrations.
            </p>
            <button onClick={onOpenModal} className="glass-button-primary">
              <Sparkles size={16} />
              <span>Schedule Strategic AI Session</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
