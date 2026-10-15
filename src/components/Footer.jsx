import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Globe2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="app-container">
        <div className="footer-top">
          <div>
            <Link to="/" className="brand-logo" style={{ marginBottom: '16px' }}>
              <div className="brand-badge">
                <span className="logo-glow-dot" style={{ background: 'var(--brand-blue)' }} />
                <Cpu size={22} className="text-white" />
              </div>
              <div>
                <div className="brand-name">
                  VISUAL<span className="highlight" style={{ color: 'var(--brand-blue)' }}>SOFT</span>
                </div>
                <span className="brand-sub">GLOBAL TECHNOLOGY</span>
              </div>
            </Link>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', maxWidth: '340px', lineHeight: 1.6 }}>
              VisualSoft Global builds custom AI software, AI agents, embedded systems & managed IT solutions for businesses across the USA, UK, UAE, and Pakistan.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Service Pages</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/ai-enabled-custom-software-development">AI Custom Software</Link>
              </li>
              <li>
                <Link to="/ai-enabled-embedded-system-design">AI Embedded System Design</Link>
              </li>
              <li>
                <Link to="/case-studies">Enterprise Case Studies</Link>
              </li>
              <li>
                <Link to="/contactus">Scope Your Project</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Capabilities</h4>
            <ul className="footer-link-list">
              <li><span style={{ color: 'var(--text-muted)' }}>Edge AI & IoT Hardware</span></li>
              <li><span style={{ color: 'var(--text-muted)' }}>RTOS & Bare-Metal Firmware</span></li>
              <li><span style={{ color: 'var(--text-muted)' }}>Intelligent Automation</span></li>
              <li><span style={{ color: 'var(--text-muted)' }}>Predictive Analytics & ML</span></li>
              <li><span style={{ color: 'var(--text-muted)' }}>24/7 Managed IT & Cloud Ops</span></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Global Headquarters</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Serving enterprises in USA, UK, UAE & Pakistan with dedicated in-house engineering squads.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="mailto:contact.vs@visualsoft-inc.com" className="glass-pill" style={{ textDecoration: 'none' }}>
                <Mail size={14} style={{ color: 'var(--brand-blue)' }} />
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
            <Link to="/contactus" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/contactus" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Security & Compliance</Link>
            <Link to="/contactus" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Terms of Engagement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
