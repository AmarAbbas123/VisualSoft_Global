import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Bot, Eye, Server, Shield, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Products({ onOpenModal }) {
  useEffect(() => {
    document.title = "Omnia-Intelligent Suite | Products | VisualSoft Global";
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: 'Unified Cognitive Core',
      desc: 'Integrates on-device edge sensors, autonomous reasoning agents, and central cloud infrastructure into a coherent command interface.'
    },
    {
      title: 'Sub-Millisecond Inference',
      desc: 'Optimized quantized models running on ARM and RISC-V edge devices for real-time anomaly detection and telemetry.'
    },
    {
      title: 'Multi-Agent Autonomous Orchestration',
      desc: 'Orchestrates swarms of AI agents that independently evaluate enterprise workflows, compliance parameters, and transaction integrity.'
    },
    {
      title: 'Zero Trust & SOC-2 Hardened',
      desc: 'Built with cryptographic hardware root-of-trust, encrypted telemetry queues, and enterprise role-based governance.'
    }
  ];

  return (
    <div className="products-page">
      <section className="page-hero">
        <div className="app-container">
          <span className="page-hero-label">ENTERPRISE AI PRODUCTS</span>
          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)' }}>
              Omnia-Intelligent <span className="text-gradient-brand">Suite</span>
            </h1>
          </div>
          <p className="hero-description" style={{ maxWidth: '820px' }}>
            VisualSoft Global’s flagship enterprise product. Omnia-Intelligent Suite empowers organizations with autonomous AI agent workflows, real-time edge telemetry, and computer vision surveillance.
          </p>
          <div className="hero-cta-group">
            <button onClick={onOpenModal} className="glass-button-primary">
              <Sparkles size={18} />
              <span>Request Product Demo</span>
            </button>
            <Link to="/contactus" className="glass-button-secondary">
              <span>Enterprise Licensing</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Cpu size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>PRODUCT ARCHITECTURE</span>
            </div>
            <h2 className="section-title">
              Engineered for Planet-Scale <span className="text-gradient-brand">Operations</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {features.map((f, i) => (
              <div key={i} className="glass-panel" style={{ padding: '32px' }}>
                <div className="icon-box-blur" style={{ marginBottom: '18px' }}>
                  <div className="icon-blur-halo halo-brand-blue" />
                  <Cpu size={24} className="text-white" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  {f.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
