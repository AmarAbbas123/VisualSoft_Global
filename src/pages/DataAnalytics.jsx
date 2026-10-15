import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database, BarChart3, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function DataAnalytics({ onOpenModal }) {
  useEffect(() => {
    document.title = "Data & Analytics Solutions | VisualSoft Global";
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: 'Data Visualization & Reporting',
      desc: 'We turn complex data into intuitive, easy-to-understand visualizations and dashboards. Gain real-time insights into your business performance with clear, interactive reports that empower decision-making.'
    },
    {
      title: 'Business Intelligence (BI)',
      desc: 'Unlock the power of your data with customized BI solutions. We integrate your data from multiple sources to deliver a centralized view of your business, enabling you to make informed, strategic decisions faster and with greater confidence.'
    },
    {
      title: 'Predictive Analytics & Machine Learning',
      desc: 'Anticipate future trends and behaviors with our predictive analytics services. Using advanced algorithms and machine learning, we help you forecast outcomes, reduce risks, and make data-driven decisions to stay ahead of the competition.'
    },
    {
      title: 'Data Cleansing & Management',
      desc: 'Ensure your data is accurate, consistent, and reliable. We clean, normalize, and organize complex datasets so your downstream reporting and AI models function with integrity.'
    }
  ];

  return (
    <div className="service-subpage">
      <section className="page-hero">
        <div className="app-container">
          <span className="page-hero-label">DATA-DRIVEN INTELLIGENCE</span>
          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)' }}>
              Data & Analytics Solutions <span className="text-gradient-brand">Tailored to Your Business Needs</span>
            </h1>
          </div>
          <p className="hero-description" style={{ maxWidth: '820px' }}>
            We specialize in delivering data and analytics solutions tailored to your unique business goals. Whether you’re a startup aiming to harness insights or an established enterprise looking to optimize decision-making, our expert team helps turn complex data into actionable intelligence that drives growth and efficiency.
          </p>
          <div className="hero-cta-group">
            <button onClick={onOpenModal} className="glass-button-primary">
              <Sparkles size={18} />
              <span>Request Analytics Consultation</span>
            </button>
            <Link to="/contactus" className="glass-button-secondary">
              <span>Discuss Your Dataset</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Database size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>SERVICES</span>
            </div>
            <h2 className="section-title">
              Our Data & Analytics <span className="text-gradient-brand">Capabilities</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {services.map((s, i) => (
              <div key={i} className="glass-panel" style={{ padding: '32px' }}>
                <div className="icon-box-blur" style={{ marginBottom: '18px' }}>
                  <div className="icon-blur-halo halo-cyan" />
                  <BarChart3 size={24} className="text-white" />
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
