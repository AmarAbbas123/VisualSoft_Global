import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Cpu, Sparkles, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const serviceLinks = [
    { name: 'AI-Enabled Custom Software Development', path: '/ai-enabled-custom-software-development', desc: 'Internal platforms, automation, custom APIs' },
    { name: 'AI-Enabled Embedded System Design', path: '/ai-enabled-embedded-system-design', desc: 'Hardware, firmware, edge AI & IoT' },
    { name: 'AI Agent Development', path: '/ai-agent-development', desc: 'Decision automation, workflows & SDR agents' },
    { name: 'Managed IT Services', path: '/managed-it-services', desc: 'KPI-driven HelpDesk & 24/7 proactive monitoring' },
    { name: 'Data & Analytics', path: '/data-analytics', desc: 'BI, visualization & predictive analytics' },
    { name: 'Digital Marketing', path: '/digital-marketing', desc: 'SEO, social media & growth automation' }
  ];

  return (
    <header className="navbar-fixed">
      <div className="navbar-inner">
        <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
          <div className="brand-badge">
            <span className="logo-glow-dot" style={{ background: 'var(--brand-blue)' }} />
            <Cpu size={22} className="text-white" />
          </div>
          <div>
            <div className="brand-name">
              VISUAL<span className="highlight" style={{ color: 'var(--brand-blue)', textShadow: '0 0 14px rgba(35, 79, 246, 0.7)' }}>SOFT</span>
            </div>
            <span className="brand-sub">GLOBAL TECHNOLOGY</span>
          </div>
        </Link>

        {/* Desktop Nav with Exact Menu from visualsoft-inc.com */}
        <ul className="nav-links-desktop">
          <li>
            <Link to="/" className={`nav-link-item ${isActive('/') ? 'active-link' : ''}`}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about-us" className={`nav-link-item ${isActive('/about-us') ? 'active-link' : ''}`}>
              About Us
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button
              className={`nav-link-item ${location.pathname.includes('service') || location.pathname.includes('ai-') || location.pathname.includes('data-') || location.pathname.includes('digital-') ? 'active-link' : ''}`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>Services</span>
              <ChevronDown size={14} />
            </button>
            {servicesDropdown && (
              <div
                className="glass-panel"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-60px',
                  width: '380px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  zIndex: 200,
                  marginTop: '8px',
                  background: 'rgba(5, 11, 32, 0.95)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(35, 79, 246, 0.25)'
                }}
              >
                {serviceLinks.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="simulator-agent-item"
                    style={{ textDecoration: 'none', padding: '10px 14px' }}
                    onClick={() => setServicesDropdown(false)}
                  >
                    <div>
                      <span className="agent-title-text" style={{ color: '#fff', fontSize: '0.9rem' }}>{s.name}</span>
                      <span className="agent-desc-text" style={{ fontSize: '0.75rem' }}>{s.desc}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link to="/products" className={`nav-link-item ${isActive('/products') ? 'active-link' : ''}`}>
              Products
            </Link>
          </li>

          <li>
            <Link to="/case-studies" className={`nav-link-item ${isActive('/case-studies') ? 'active-link' : ''}`}>
              Case Studies
            </Link>
          </li>

          <li>
            <Link to="/our-team" className={`nav-link-item ${isActive('/our-team') ? 'active-link' : ''}`}>
              Our Team
            </Link>
          </li>

          <li>
            <Link to="/career" className={`nav-link-item ${isActive('/career') ? 'active-link' : ''}`}>
              Career
            </Link>
          </li>

          <li>
            <Link to="/contactus" className={`nav-link-item ${isActive('/contactus') ? 'active-link' : ''}`}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="nav-actions">
          <button
            onClick={onOpenModal}
            className="glass-button-primary"
            style={{ padding: '10px 22px', fontSize: '0.9rem' }}
          >
            <Sparkles size={16} />
            <span>Get Started</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="glass-panel" style={{ marginTop: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', background: 'rgba(5, 11, 32, 0.95)' }}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="nav-link-item">Home</Link>
          <Link to="/about-us" onClick={() => setMobileMenuOpen(false)} className="nav-link-item">About Us</Link>
          
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '10px 0' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--brand-blue)', fontWeight: 700, letterSpacing: '0.1em' }}>
              Services
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', paddingLeft: '8px' }}>
              {serviceLinks.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.88rem' }}
                >
                  • {s.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="nav-link-item">Products</Link>
          <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)} className="nav-link-item">Case Studies</Link>
          <Link to="/our-team" onClick={() => setMobileMenuOpen(false)} className="nav-link-item">Our Team</Link>
          <Link to="/career" onClick={() => setMobileMenuOpen(false)} className="nav-link-item">Career</Link>
          <Link to="/contactus" onClick={() => setMobileMenuOpen(false)} className="nav-link-item">Contact Us</Link>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal();
            }}
            className="glass-button-primary"
            style={{ width: '100%', marginTop: '6px' }}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
