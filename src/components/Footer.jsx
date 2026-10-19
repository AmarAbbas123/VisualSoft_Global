import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Lock } from 'lucide-react';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="app-container">
        <div className="footer-top">
          {/* Column 1: Brand Logo & Mission */}
          <div>
            <Link to="/" className="brand-logo" style={{ marginBottom: '16px' }}>
              <img src="/logo.webp" alt="VisualSoft" className="brand-logo-img footer-logo-img" />
            </Link>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', maxWidth: '340px', lineHeight: 1.6, marginBottom: '20px' }}>
              VisualSoft Global architects high-performance AI custom software, autonomous multi-agent systems, intelligent IoT embedded hardware, and enterprise digital solutions built for global scale.
            </p>

            {/* Social Icons for LinkedIn and WhatsApp */}
            <div className="footer-social-links">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn linkedin-btn"
                aria-label="Follow VisualSoft on LinkedIn"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn whatsapp-btn"
                aria-label="Chat with VisualSoft on WhatsApp"
              >
                <FaWhatsapp size={17} />
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="footer-heading">Core Services</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/ai-enabled-custom-software-development">AI Custom Software</Link>
              </li>
              <li>
                <Link to="/ai-enabled-embedded-system-design">AI Embedded Systems & IoT</Link>
              </li>
              <li>
                <Link to="/ai-agent-development">Autonomous AI Agents</Link>
              </li>
              <li>
                <Link to="/managed-it-services">Managed IT & Cloud</Link>
              </li>
              <li>
                <Link to="/data-analytics">Data & Analytics</Link>
              </li>
              <li>
                <Link to="/digital-marketing">Digital Marketing</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Platform */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-link-list">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/products">Enterprise Products</Link>
              </li>
              <li>
                <Link to="/case-studies">Client Case Studies</Link>
              </li>
              <li>
                <Link to="/our-team">Our Team</Link>
              </li>
              <li>
                <Link to="/career">Careers</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Start Your Project CTA Section */}
          <div>
            <h4 className="footer-heading">Start Your Project</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Partner with dedicated in-house engineering squads to take your software, AI, or IoT hardware from concept to production.
            </p>
            <Link
              to="/contactus"
              className="glass-button-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                fontSize: '0.88rem',
                textDecoration: 'none',
                marginBottom: '14px',
                width: 'fit-content'
              }}
            >
              <span>Scope Your Project</span>
              <ArrowRight size={15} />
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                <Zap size={13} style={{ color: 'var(--neon-cyan)', flexShrink: 0 }} />
                <span>Response within 24 hours guaranteed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                <Lock size={13} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
                <span>100% IP & source code ownership</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
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
