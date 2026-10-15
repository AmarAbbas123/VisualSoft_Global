import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, CheckCircle2, Clock, Globe2, Activity, ArrowRight, Sparkles } from 'lucide-react';

export default function ManagedItServices({ onOpenModal }) {
  useEffect(() => {
    document.title = "Managed IT Services Solutions | VisualSoft Global";
    window.scrollTo(0, 0);
  }, []);

  const reasons = [
    {
      title: 'Proactive Monitoring & Support',
      desc: 'We offer round-the-clock monitoring to proactively identify and resolve issues before they impact your business.'
    },
    {
      title: 'Scalable Offshore & On-Site Solutions',
      desc: 'Whether you need to expand your team with offshore developers or require on-site IT resources, we provide scalable solutions tailored to your growth.'
    },
    {
      title: 'Comprehensive IT Coverage',
      desc: 'From HelpDesk and application support to resource management and offshore development, we offer a full suite of managed IT services to ensure your business operates efficiently.'
    }
  ];

  return (
    <div className="service-subpage">
      <section className="page-hero">
        <div className="app-container">
          <span className="page-hero-label">ENTERPRISE IT INFRASTRUCTURE</span>
          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)' }}>
              Managed IT Services <span className="text-gradient-brand">Tailored to Your Business Needs</span>
            </h1>
          </div>
          <p className="hero-description" style={{ maxWidth: '820px' }}>
            We offer KPI-driven HelpDesk and Application Support services designed to keep your business running smoothly and efficiently. We understand the importance of minimizing downtime and maximizing productivity.
          </p>
          <div className="hero-cta-group">
            <button onClick={onOpenModal} className="glass-button-primary">
              <Sparkles size={18} />
              <span>Get 24/7 IT Support</span>
            </button>
            <Link to="/contactus" className="glass-button-secondary">
              <span>Contact Sales Team</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Server size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>WHY CHOOSE US</span>
            </div>
            <h2 className="section-title">
              Why Choose Us for <span className="text-gradient-brand">Managed IT Services?</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {reasons.map((r, i) => (
              <div key={i} className="glass-panel" style={{ padding: '32px' }}>
                <div className="icon-box-blur" style={{ marginBottom: '18px' }}>
                  <div className="icon-blur-halo halo-brand-blue" />
                  <Server size={24} className="text-white" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  {r.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
