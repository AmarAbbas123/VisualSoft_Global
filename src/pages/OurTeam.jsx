import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Shield, Award, Terminal, ArrowRight, Sparkles } from 'lucide-react';

export default function OurTeam({ onOpenModal }) {
  useEffect(() => {
    document.title = "Our Team | Technology Leaders | VisualSoft Global";
    window.scrollTo(0, 0);
  }, []);

  const leadership = [
    {
      role: 'Technology Leadership & Architecture',
      desc: 'Hands-on technologists guiding cross-border software engineering, AI research, and scalable infrastructure.',
      halo: 'halo-brand-blue'
    },
    {
      role: 'Embedded Firmware & Edge Hardware Squad',
      desc: 'Specialists in bare-metal C/C++, RTOS porting, custom PCB prototyping, and low-power IoT microcontrollers.',
      halo: 'halo-cyan'
    },
    {
      role: 'Autonomous AI & Multi-Agent Engineers',
      desc: 'Experts in enterprise LLM reasoning, reinforcement learning, predictive ETL data pipelines, and computer vision.',
      halo: 'halo-violet'
    },
    {
      role: '24/7 Managed IT & DevOps Specialists',
      desc: 'Round-the-clock infrastructure engineers guaranteeing 99.99% uptime, zero-trust security, and rapid incident response.',
      halo: 'halo-emerald'
    }
  ];

  return (
    <div className="team-page">
      <section className="page-hero">
        <div className="app-container">
          <span className="page-hero-label">TECHNOLOGY LEADERSHIP</span>
          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)' }}>
              Meet Our <span className="text-gradient-brand">Team</span>
            </h1>
          </div>
          <p className="hero-description" style={{ maxWidth: '820px' }}>
            We are unique in a sense that our management are technology leaders, and this gives us an exceptional level of expertise in our fields. Our team brings deep practical experience across AI, embedded systems, and enterprise ICT.
          </p>
        </div>
      </section>

      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="grid-cols-auto">
            {leadership.map((m, i) => (
              <div key={i} className="glass-panel" style={{ padding: '36px' }}>
                <div className="icon-box-blur" style={{ marginBottom: '18px' }}>
                  <div className={`icon-blur-halo ${m.halo}`} />
                  <Users size={24} className="text-white" />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                  {m.role}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
