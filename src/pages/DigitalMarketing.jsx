import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Share2, Search, Mail, Sparkles, ArrowRight } from 'lucide-react';

export default function DigitalMarketing({ onOpenModal }) {
  useEffect(() => {
    document.title = "Digital Marketing Solutions | VisualSoft Global";
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Social Media Marketing',
      desc: 'Build a strong social presence, engage your audience, and grow brand loyalty across major social platforms.'
    },
    {
      title: 'Search Engine Optimization (SEO)',
      desc: 'Improve your website’s visibility and ranking on search engines to attract organic traffic and boost brand authority.'
    },
    {
      title: 'Content Marketing',
      desc: 'Create compelling, high-quality content that educates, engages, and converts your target audience.'
    },
    {
      title: 'Email Marketing & Automation',
      desc: 'Reach customers directly with personalized campaigns and automated sequences that nurture leads and drive sales.'
    }
  ];

  return (
    <div className="service-subpage">
      <section className="page-hero">
        <div className="app-container">
          <span className="page-hero-label">GROWTH & SCALE</span>
          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)' }}>
              Digital Marketing Solutions <span className="text-gradient-brand">Tailored to Your Business Goals</span>
            </h1>
          </div>
          <p className="hero-description" style={{ maxWidth: '820px' }}>
            We empower businesses with cutting-edge marketing technologies to drive growth, enhance customer experiences, and unlock new opportunities. Whether you’re focused on trade, digital marketing, or e-commerce, our suite of solutions is designed to help you thrive in today’s competitive landscape.
          </p>
          <div className="hero-cta-group">
            <button onClick={onOpenModal} className="glass-button-primary">
              <Sparkles size={18} />
              <span>Launch Marketing Campaign</span>
            </button>
            <Link to="/contactus" className="glass-button-secondary">
              <span>Contact Marketing Team</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <TrendingUp size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="section-title">
              Our Digital Marketing <span className="text-gradient-brand">Services</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {services.map((s, i) => (
              <div key={i} className="glass-panel" style={{ padding: '32px' }}>
                <div className="icon-box-blur" style={{ marginBottom: '18px' }}>
                  <div className="icon-blur-halo halo-brand-blue" />
                  <TrendingUp size={24} className="text-white" />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
