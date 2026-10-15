import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Truck,
  Eye,
  Boxes,
  Cpu,
  ArrowRight,
  TrendingUp,
  Activity,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function CaseStudies({ onOpenModal }) {
  useEffect(() => {
    document.title = "Case Studies & Enterprise Deployments | VisualSoft Global";
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      title: 'Autonomous Edge Telemetry & Predictive Fleet Maintenance',
      client: 'Global Logistics Operator (UAE & UK)',
      sector: 'Transportation & Logistics',
      results: [
        '99.98% telemetry transmission reliability over cellular & satellite fallback',
        '84% reduction in unscheduled fleet breakdowns',
        'Real-time fuel consumption optimization saving $1.4M annually'
      ],
      desc: 'Engineered an end-to-end IoT tracking platform with custom microcontroller firmware, low-power telemetry collection, and predictive maintenance ML models running at the edge.',
      tech: ['STM32 ARM', 'FreeRTOS', 'CAN Bus', 'AWS IoT Core', 'Python ML'],
      halo: 'halo-brand-blue'
    },
    {
      title: 'Real-Time Financial Anomaly & Multi-Bank Fraud Shield',
      client: 'Tier-1 Digital Banking Platform (USA)',
      sector: 'FinTech',
      results: [
        '1.8ms average decisioning latency per transaction',
        '$4.2M fraudulent transfers intercepted within first 90 days',
        'Zero disruption to existing payment gateways and core banking ledger'
      ],
      desc: 'Architected high-throughput AI agent microservices analyzing streaming banking transactions against behavioral graphs to eliminate synthetic identity theft and unauthorized charges.',
      tech: ['Next.js', 'Python', 'Kafka', 'PostgreSQL', 'TensorFlow', 'Docker'],
      halo: 'halo-cyan'
    },
    {
      title: 'High-Speed Automated License Plate Recognition (ANPR)',
      client: 'Municipal Traffic Authority & Smart City Infrastructure',
      sector: 'Security & Surveillance',
      results: [
        '99.4% optical recognition accuracy at speeds up to 140 km/h',
        '60 FPS multi-camera inference on localized edge acceleration boards',
        'Seamless integration with national traffic databases'
      ],
      desc: 'Deployed real-time computer vision neural networks with custom camera drivers and secure encrypted transmission channels for highway tolling and urban security grids.',
      tech: ['OpenCV', 'YOLO v8', 'Embedded Linux', 'C++', 'NVIDIA Jetson', 'MQTT'],
      halo: 'halo-emerald'
    },
    {
      title: 'Smart Industrial Automation & Cold-Chain Telemetry',
      client: 'International Pharmaceutical Distributor',
      sector: 'Industrial & Healthcare',
      results: [
        'Zero temperature excursions across 15,000 monthly refrigerated shipments',
        'Automated regulatory compliance audit logs generated instantly',
        'Battery lifespan extended to 3+ years via custom low-power firmware'
      ],
      desc: 'Developed low-power wireless temperature & vibration sensor beacons with secure over-the-air (OTA) updates, encrypted telemetry, and executive cloud reporting dashboards.',
      tech: ['Nordic nRF52 BLE', 'Zephyr RTOS', 'Matter', 'Azure IoT Hub', 'React'],
      halo: 'halo-amber'
    }
  ];

  return (
    <div className="case-studies-page">
      <section className="page-hero">
        <div className="app-container">
          <span className="page-hero-label">PROVEN REAL-WORLD IMPACT</span>
          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)' }}>
              Enterprise <span className="text-gradient-brand">Case Studies</span>
            </h1>
          </div>
          <p className="hero-description" style={{ maxWidth: '800px' }}>
            Explore how VisualSoft Global delivers custom AI software, edge embedded devices, and resilient cloud systems for mission-critical operations.
          </p>
        </div>
      </section>

      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {cases.map((cs, i) => (
              <div key={i} className="glass-panel" style={{ padding: '40px', position: 'relative' }}>
                <div className={`icon-blur-halo ${cs.halo}`} style={{ width: '220px', height: '220px', top: '10px', right: '10px' }} />
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', flexWrap: 'wrap' }}>
                  <span className="glass-pill" style={{ color: 'var(--brand-blue)', fontWeight: 600 }}>
                    {cs.sector}
                  </span>
                  <span style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                    Client: {cs.client}
                  </span>
                </div>

                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-heading)', marginBottom: '14px' }}>
                  {cs.title}
                </h2>

                <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '24px', maxWidth: '960px' }}>
                  {cs.desc}
                </p>

                <div style={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.07)', marginBottom: '24px' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, color: 'var(--brand-blue)', display: 'block', marginBottom: '10px' }}>
                    Key Outcomes & Measured ROI
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {cs.results.map((r, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.95rem', color: '#fff' }}>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {cs.tech.map((t, idx) => (
                      <span key={idx} className="tag-badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenModal}
                    className="learn-more-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    <span>Request Architecture Brief</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '50px 32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              Have a Similar Engineering Challenge?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto 30px auto' }}>
              Our senior engineering leads will review your systems and provide a detailed feasibility analysis and sprint roadmap.
            </p>
            <button onClick={onOpenModal} className="glass-button-primary">
              <Sparkles size={16} />
              <span>Discuss Your Architecture</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
