import React, { useState, useEffect } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  PhoneCall,
  Clock,
  Shield,
  FileCheck,
  Globe2,
  Sparkles
} from 'lucide-react';

export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [service, setService] = useState('AI-Enabled Custom Software Development');

  useEffect(() => {
    document.title = "Contact Us & Scope Project | VisualSoft Global";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="app-container">
          <span className="page-hero-label">START YOUR PROJECT</span>
          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)' }}>
              Let's Architect Your <span className="text-gradient-brand">Solution</span>
            </h1>
          </div>
          <p className="hero-description" style={{ maxWidth: '780px' }}>
            Speak directly with a senior AI engineer or embedded systems architect. We review your requirements, outline technical topology, and provide an execution plan within 48 hours.
          </p>
        </div>
      </section>

      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="contact-layout">
            {/* Left: Direct Contact Information */}
            <div>
              <div className="glass-panel" style={{ padding: '36px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
                    VisualSoft Global Desk
                  </h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '28px' }}>
                    Our sales and engineering teams operate 24/7 across multiple time zones to support clients in North America, Europe, the Middle East, and Asia-Pacific.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <a
                      href="mailto:contact.vs@visualsoft-inc.com"
                      style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', color: '#fff' }}
                    >
                      <div className="icon-box-blur" style={{ width: '48px', height: '48px' }}>
                        <div className="icon-blur-halo halo-brand-blue" />
                        <Mail size={20} className="text-white" />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Direct Email</span>
                        <span style={{ fontSize: '1.05rem', fontWeight: 600, display: 'block', color: 'var(--brand-blue)' }}>
                          contact.vs@visualsoft-inc.com
                        </span>
                      </div>
                    </a>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div className="icon-box-blur" style={{ width: '48px', height: '48px' }}>
                        <div className="icon-blur-halo halo-cyan" />
                        <Clock size={20} className="text-white" />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Response Time</span>
                        <span style={{ fontSize: '1rem', fontWeight: 600, display: 'block', color: '#fff' }}>
                          Under 2 Hours (24/7 Global Shift)
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div className="icon-box-blur" style={{ width: '48px', height: '48px' }}>
                        <div className="icon-blur-halo halo-emerald" />
                        <Shield size={20} className="text-white" />
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Data Protection</span>
                        <span style={{ fontSize: '1rem', fontWeight: 600, display: 'block', color: '#fff' }}>
                          Standard Mutual NDA Provided
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '36px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-blue)', fontSize: '0.9rem', fontWeight: 600 }}>
                    <FileCheck size={18} />
                    <span>You own 100% of the code & IP produced for your project.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Project Scope Form */}
            <div className="glass-panel" style={{ padding: '40px' }}>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div className="icon-box-blur" style={{ margin: '0 auto 20px auto', width: '70px', height: '70px' }}>
                    <div className="icon-blur-halo halo-emerald" />
                    <CheckCircle2 size={36} style={{ color: 'var(--neon-emerald)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
                    Proposal Request Received!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '440px', margin: '0 auto' }}>
                    A VisualSoft Senior Solutions Lead will contact you within 2 hours to coordinate an architecture workshop.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="glass-button-secondary"
                    style={{ marginTop: '28px' }}
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
                >
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                    Scope Your Project
                  </h3>

                  <div>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Your Full Name *</label>
                    <input required type="text" placeholder="Johnathan Doe" className="glass-input" />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Work Email *</label>
                      <input required type="email" placeholder="john@enterprise.com" className="glass-input" />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Phone / WhatsApp</label>
                      <input type="text" placeholder="+1 (555) 000-0000" className="glass-input" />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Target Service Page / Requirement *</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="glass-input"
                      style={{ background: '#0a122e' }}
                    >
                      <option>AI-Enabled Custom Software Development</option>
                      <option>AI-Enabled Embedded System Design</option>
                      <option>Enterprise AI Agent Development</option>
                      <option>24/7 Managed IT & Cloud Infrastructure</option>
                      <option>Data & Analytics Suite</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Estimated Timeline</label>
                    <select className="glass-input" style={{ background: '#0a122e' }}>
                      <option>Immediate (Within 2-4 weeks)</option>
                      <option>Next Quarter (1-3 months)</option>
                      <option>Exploratory Architecture Review</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Project Summary & Technical Constraints</label>
                    <textarea rows="4" placeholder="Describe your workflows, hardware constraints, current systems, or goals..." className="glass-input" />
                  </div>

                  <button type="submit" className="glass-button-primary" style={{ width: '100%', marginTop: '6px' }}>
                    <Send size={16} />
                    <span>Request Free Architecture Proposal</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
