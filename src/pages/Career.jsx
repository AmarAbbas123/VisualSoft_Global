import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Career({ onOpenModal }) {
  useEffect(() => {
    document.title = "Career | Join VisualSoft Global";
    window.scrollTo(0, 0);
  }, []);

  const openings = [
    {
      title: 'Senior Embedded Firmware Engineer',
      type: 'Full-Time / Hybrid',
      locations: 'UK • UAE • Pakistan',
      desc: 'Expertise in C/C++, FreeRTOS, Zephyr, and on-device machine learning for IoT and edge microcontrollers.'
    },
    {
      title: 'Senior AI / Agentic Systems Engineer',
      type: 'Full-Time / Remote',
      locations: 'USA • UK • Global',
      desc: 'Hands-on experience with LangGraph, AutoGen, fine-tuning enterprise LLMs, and Python microservices.'
    },
    {
      title: 'Full Stack Cloud Architect (React & .NET / Node)',
      type: 'Full-Time',
      locations: 'Global Engineering Lab',
      desc: 'Architecting high-concurrency cloud applications, scalable microservices, and modern web applications.'
    },
    {
      title: 'DevSecOps & 24/7 Infrastructure Engineer',
      type: 'Full-Time / Shift Rotation',
      locations: '24/7 Global Operations Center',
      desc: 'Kubernetes, multi-cloud governance (AWS/Azure), proactive telemetry monitoring, and incident mitigation.'
    }
  ];

  return (
    <div className="career-page">
      <section className="page-hero">
        <div className="app-container">
          <span className="page-hero-label">CAREER OPPORTUNITIES</span>
          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)' }}>
              Come Join Our Team and <span className="text-gradient-brand">Find Your Potential</span>
            </h1>
          </div>
          <p className="hero-description" style={{ maxWidth: '800px' }}>
            This is an exciting time to join VisualSoft Global! Work alongside seasoned technology leaders on groundbreaking AI software, embedded hardware, and planetary-scale cloud systems.
          </p>
        </div>
      </section>

      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="section-header">
            <h2 className="section-title">
              Open <span className="text-gradient-brand">Positions</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {openings.map((op, i) => (
              <div key={i} className="glass-panel" style={{ padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span className="glass-pill" style={{ color: 'var(--brand-blue)', fontSize: '0.8rem' }}>
                      {op.type}
                    </span>
                    <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                      {op.locations}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                    {op.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '700px' }}>
                    {op.desc}
                  </p>
                </div>

                <a
                  href="mailto:contact.vs@visualsoft-inc.com?subject=Job Application: "
                  className="glass-button-primary"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Apply Now</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
