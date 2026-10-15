import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Compass, Activity, Globe2, Shield, ArrowRight, Sparkles } from 'lucide-react';

export default function AboutUs({ onOpenModal }) {
  useEffect(() => {
    document.title = "About Us | VisualSoft Global - A Technology Company";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="app-container">
          <span className="page-hero-label">ABOUT VISUALSOFT GLOBAL</span>
          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)' }}>
              Turning Visionary Ideas into <span className="text-gradient-brand">High-Performance Products</span>
            </h1>
          </div>
          <p className="hero-description" style={{ maxWidth: '820px' }}>
            VisualSoft Global is an AI software and technology company that designs and builds custom software, AI agents, embedded systems and managed IT solutions. From our teams serving the United Kingdom, Southeastern Asia (Malaysia), the Middle East (Saudi Arabia), and Australia, we help businesses turn ideas into working products, from first prototype to ongoing support.
          </p>
          <div className="hero-cta-group">
            <button onClick={onOpenModal} className="glass-button-primary">
              <Sparkles size={18} />
              <span>Get Started With Us</span>
            </button>
            <Link to="/contactus" className="glass-button-secondary">
              <span>Contact Our Leadership</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '48px', position: 'relative' }}>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.2rem' }}>
              Built on a Simple Goal: To Make Advanced Technology <span className="text-gradient-brand">Practical for Every Business</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.8, maxWidth: '960px', marginBottom: '20px' }}>
              VisualSoft Global (VS) is a leading provider of world-class ICT services, catering to both national and international clients. Our core strength lies in transforming visionary ideas into innovative, high-performance products. With a robust team of seasoned professionals and technical experts, we are committed to delivering premium-quality services that consistently exceed customer expectations.
            </p>
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Our comprehensive portfolio spans multiple industries, delivering tailor-made solutions that empower our clients to drive remarkable business growth. From startups to established enterprises, our expertise helps businesses harness the latest technologies to stay ahead of the competition. What sets us apart is the unique advantage of having a management team comprised of technology leaders, whose vast knowledge and forward-thinking approach give us unparalleled proficiency in all aspects of ICT.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="app-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            <div className="glass-panel" style={{ padding: '36px' }}>
              <div className="icon-box-blur" style={{ marginBottom: '18px' }}>
                <div className="icon-blur-halo halo-brand-blue" />
                <Compass size={24} style={{ color: '#fff' }} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                Our Vision
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1rem' }}>
                Our aim is to be acknowledged as an icon of reliable and effective information technology partner offering cutting edge solutions.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '36px' }}>
              <div className="icon-box-blur" style={{ marginBottom: '18px' }}>
                <div className="icon-blur-halo halo-cyan" />
                <Activity size={24} style={{ color: '#fff' }} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                Our Mission
              </h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1rem' }}>
                Assist customers during each stage of digital transformation to achieve agility and operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
