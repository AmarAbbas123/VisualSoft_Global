import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Code2,
  Cpu,
  Palette,
  GitBranch,
  ShieldCheck,
  Heart,
  Scale,
  Lightbulb,
  Users,
  Compass,
  Target,
  CheckCircle2,
  Lock
} from 'lucide-react';
import Accordion from '../components/Accordion';

export default function AboutUs({ onOpenModal }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSubItem, setActiveSubItem] = useState(0);

  useEffect(() => {
    document.title = "About Us | VisualSoft Global — A Global Technology Partner";
    window.scrollTo(0, 0);
  }, []);

  // 3 Core Pillars of "How We Do It"
  const howWeDoItSlides = [
    {
      id: 0,
      title: "We Lead with Design",
      icon: Palette,
      badge: "User Experience & Strategy",
      content:
        "Skilled in product design, UI/UX and accessibility, our product designers create human-centric digital designs that are timely, useful and delightful.",
      graphicType: "design",
      subItems: [
        {
          title: "Timely",
          content:
            "We design with time as a constraint, moving at the right pace for users. Rapid learning, agile prototyping, and continuous iteration are core to how we deliver."
        },
        {
          title: "Useful",
          content:
            "Functionality is our foundation. We measure success by whether users can seamlessly accomplish their goals, then push further by asking how it can work better."
        },
        {
          title: "Delightful",
          content:
            "Emotional experience is a design consideration, not an afterthought. We bring intention, elegance, and care to moments that make every digital interaction feel worthwhile."
        }
      ]
    },
    {
      id: 1,
      title: "We Leverage Open Source",
      icon: GitBranch,
      badge: "Sovereignty & Scalability",
      content:
        "Hundreds of millions of users benefit from the contributions made to dozens of open source software ecosystems, affording our enterprise customers sovereignty, flexibility and economy.",
      graphicType: "opensource",
      subItems: [
        {
          title: "Sovereignty",
          content:
            "Zero vendor lock-ins. Deploy on your own on-prem or private cloud infrastructure so your data and intellectual property never leave the boundaries of your organization."
        },
        {
          title: "Flexibility",
          content:
            "Because the source code is open, we help you adapt, extend, and customize it to meet your exact workflow requirements, selecting the base with the enterprise license that fits."
        },
        {
          title: "Economy",
          content:
            "Most open source software is free to inspect, deploy, and modify, meaning hosting and maintaining it yourself costs a fraction of the proprietary licensing equivalent."
        }
      ]
    },
    {
      id: 2,
      title: "We Accelerate Good Outcomes with AI",
      icon: Cpu,
      badge: "Agentic Engineering & Intelligence",
      content:
        "We have been using GenAI since the release of the Transformer architecture in 2017, building smarter software systems and building them faster with proven agentic workflows.",
      graphicType: "ai",
      subItems: [
        {
          title: "Build Smarter Software",
          content:
            "Agentic workflow integration is standard in our latest application architectures, customizing best-in-class evaluation harnesses and frontier LLM reasoning models for your specific operations."
        },
        {
          title: "Build It Faster Than Ever",
          content:
            "We integrate multi-agent autonomous engineering pipelines based on tools like Claude and OpenAI Codex, bridging the gap between rapid software prototyping and robust performance engineering."
        }
      ]
    }
  ];

  // 5 Principles (Our Values - matching screenshot)
  const ourValues = [
    {
      title: "Customer Centricity",
      text: "We take responsibility for how our work is experienced, not just that it is completed, by delivering value for both internal and external customers.",
      icon: Heart,
      color: "#00f5a0"
    },
    {
      title: "Ownership",
      text: "We take full responsibility for outcomes, not just tasks, and remain accountable until results are delivered.",
      icon: ShieldCheck,
      color: "#38bdf8"
    },
    {
      title: "Integrity",
      text: "We act with honesty, transparency, and integrity, especially when situations are complex, challenging, or under pressure.",
      icon: Scale,
      color: "#10b981"
    },
    {
      title: "Innovation",
      text: "We continuously seek better ways to solve problems, improve outcomes, and prepare for the future by thinking beyond execution.",
      icon: Lightbulb,
      color: "#f59e0b"
    },
    {
      title: "Inclusivity by Design",
      text: "We intentionally build inclusive teams and practices so everyone feels respected, supported, heard, and empowered to thrive.",
      icon: Users,
      color: "#a855f7"
    }
  ];

  // Common Questions FAQs
  const aboutFaqs = [
    {
      question: "How large is the engineering team?",
      answer:
        "Over a thousand engineers, designers, and delivery staff working across global delivery offices and remotely. Size matters less than structure — engagements are staffed as small, senior, cross-functional squads rather than large undifferentiated teams."
    },
    {
      question: "What industries do you work in?",
      answer:
        "Our deepest experience is in education technology, travel and hospitality, healthcare and clinical research, and financial services. We have also delivered robust platforms in logistics, retail, real estate, and digital media."
    },
    {
      question: "Where are your teams based?",
      answer:
        "Our engineering hubs are supported by distributed squads across multiple time zones. Engagements are scoped around your working hours, including guaranteed daily overlap windows for teams in North America, Europe, the Middle East, and Asia."
    },
    {
      question: "How do engagements usually start?",
      answer:
        "Most begin with a scoped discovery period — typically two to four weeks — where we map your system, workflows, and constraints before committing to a delivery plan. That work stands alone and provides immediate architectural value even if we do not continue together."
    },
    {
      question: "Do you contribute to open source?",
      answer:
        "Yes, substantially. We are long-standing contributors to global open source ecosystems and maintain multiple public repositories. Working in the open keeps our engineering standards externally accountable rather than self-assessed."
    }
  ];

  const currentSlideData = howWeDoItSlides[activeSlide];

  return (
    <div className="about-arbisoft-page">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-backdrop-glow" />
        <div className="app-container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="about-hero-title">
            Empowering Businesses <br />
            <span className="text-gradient-brand">For The Modern Age</span>
          </h1>

          <p className="about-hero-subtitle">
            Specializing in integrated software, data management, and development services that enable businesses to take the digital leap to growth and success.
          </p>

          <div className="about-hero-cta-group">
            <button
              type="button"
              onClick={() => onOpenModal && onOpenModal('About Us - Discovery Consultation')}
              className="glass-button-primary"
            >
              <span>Work with us</span>
              <ArrowRight size={18} />
            </button>
            <a href="#how-we-do-it" className="glass-button-secondary">
              <span>How We Do It</span>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Mission, Vision and Philosophy (Image 1 Style) */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="about-section-header">
            <span className="about-overline">WHO WE ARE</span>
            <h2 className="section-title">
              Mission<span className="text-gradient-brand">and Vision</span>
            </h2>
          </div>

          <div className="mission-vision-grid">
            {/* Mission Card */}
            <div className="devsinc-card mission-card">
              <div className="devsinc-card-topbar" />
              <div className="devsinc-card-inner">
                <span className="devsinc-label">OUR MISSION</span>
                <p className="devsinc-statement">
                  Assist customers during each stage of digital transformation to achieve agility and operational efficiency.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="devsinc-card vision-card">
              <div className="devsinc-card-topbar" />
              <div className="devsinc-card-inner">
                <span className="devsinc-label">OUR VISION</span>
                <p className="devsinc-statement">
                  Our aim is to be acknowledged as an icon of reliable and effective information technology partner offering cutting edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: How We Do It */}
      <section id="how-we-do-it" className="section-spacing section-alt-contrast">
        <div className="app-container">
          <div className="about-section-header">
            <h2 className="section-title">
              How We <span className="text-gradient-brand">Do It</span>
            </h2>
            <p className="section-subtitle">
              We lead with design, leverage open source, and accelerate with AI — the three pillars that define who we are and how we go about our work.
            </p>
          </div>

          {/* Slide Category Navigation Tabs */}
          <div className="how-tabs-nav">
            {howWeDoItSlides.map((slide, index) => {
              const TabIcon = slide.icon;
              const isActive = activeSlide === index;
              return (
                <button
                  key={slide.id}
                  type="button"
                  className={`how-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSlide(index);
                    setActiveSubItem(0);
                  }}
                >
                  <TabIcon size={18} style={{ color: isActive ? '#38bdf8' : 'var(--text-dim)' }} />
                  <span>{slide.title}</span>
                </button>
              );
            })}
          </div>

          {/* Stage Panel */}
          <div className="how-stage-panel">
            <div className="how-panel-left">
              <div className="how-badge-tag">{currentSlideData.badge}</div>
              <h3 className="how-slide-heading">{currentSlideData.title}</h3>
              <p className="how-slide-desc">{currentSlideData.content}</p>

              {/* Sub-accordion within slide */}
              <div className="how-sub-accordion">
                {currentSlideData.subItems.map((sub, idx) => {
                  const isSubOpen = activeSubItem === idx;
                  return (
                    <div
                      key={idx}
                      className={`how-sub-item ${isSubOpen ? 'open' : ''}`}
                    >
                      <button
                        type="button"
                        className="how-sub-trigger"
                        onClick={() => setActiveSubItem(isSubOpen ? -1 : idx)}
                        aria-expanded={isSubOpen}
                      >
                        <span className="how-sub-title">{sub.title}</span>
                        <span className="how-sub-glyph">{isSubOpen ? '−' : '+'}</span>
                      </button>
                      {isSubOpen && (
                        <div className="how-sub-content">
                          <p>{sub.content}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive Visual Graphic on Right */}
            <div className="how-panel-right">
              <div className="how-graphic-card">
                <div className="graphic-header">
                  <div className="traffic-lights">
                    <span className="light light-red" />
                    <span className="light light-yellow" />
                    <span className="light light-green" />
                  </div>
                  <span className="graphic-tag">
                    {currentSlideData.badge}
                  </span>
                </div>

                <div className="graphic-body">
                  {currentSlideData.graphicType === 'design' && (
                    <div className="graphic-inner-design">
                      <div className="design-token-circle" />
                      <div className="design-card-preview">
                        <div className="design-line l1" />
                        <div className="design-line l2" />
                        <div className="design-chips">
                          <span className="chip">Timely</span>
                          <span className="chip">Useful</span>
                          <span className="chip">Delightful</span>
                        </div>
                      </div>
                      <div className="graphic-stat-float">
                        <span className="stat-number">30+</span>
                        <span className="stat-label">Senior Product Designers</span>
                      </div>
                    </div>
                  )}

                  {currentSlideData.graphicType === 'opensource' && (
                    <div className="graphic-inner-code">
                      <div className="terminal-header">
                        <Code2 size={16} style={{ color: '#38bdf8' }} />
                        <span>open-source-sovereignty.sh</span>
                      </div>
                      <pre className="terminal-code">
                        {`$ git clone https://github.com/enterprise/stack
> Zero vendor lock-in confirmed
> On-Premise / Private Cloud: ACTIVE
> Data Sovereignty: 100% Retained
> Enterprise TCO Savings: ~65%`}
                      </pre>
                      <div className="graphic-stat-float">
                        <span className="stat-number">100M+</span>
                        <span className="stat-label">Global OSS Users Benefited</span>
                      </div>
                    </div>
                  )}

                  {currentSlideData.graphicType === 'ai' && (
                    <div className="graphic-inner-ai">
                      <div className="ai-node-circle">
                        <Cpu size={28} style={{ color: '#00f5a0' }} />
                      </div>
                      <div className="ai-chips-list">
                        <div className="ai-chip-line">
                          <CheckCircle2 size={14} style={{ color: '#00f5a0' }} />
                          <span>Multi-Agent Swarm Integration</span>
                        </div>
                        <div className="ai-chip-line">
                          <CheckCircle2 size={14} style={{ color: '#00f5a0' }} />
                          <span>Claude & OpenAI Codex Loops</span>
                        </div>
                        <div className="ai-chip-line">
                          <CheckCircle2 size={14} style={{ color: '#00f5a0' }} />
                          <span>Zero Hallucination Benchmarks</span>
                        </div>
                      </div>
                      <div className="graphic-stat-float">
                        <span className="stat-number">2017</span>
                        <span className="stat-label">Pioneering GenAI Since Inception</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Values (The standards behind every decision we make - Image 2 Style) */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="about-section-header">
            <span className="about-overline">OUR VALUES</span>
            <h2 className="section-title">
              The standards behind <span className="text-gradient-brand">every decision we make</span>
            </h2>
            <p className="section-subtitle">
              Five principles that guide every partnership, every decision, and every interaction across VisualSoft Global.
            </p>
          </div>

          <div className="devsinc-values-row">
            {ourValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div key={idx} className="devsinc-value-card">
                  <div className="devsinc-card-topbar" />
                  <div className="devsinc-value-card-inner">
                    <div
                      className="devsinc-icon-wrapper"
                      style={{
                        background: `${val.color}15`,
                        borderColor: `${val.color}35`,
                        color: val.color
                      }}
                    >
                      <IconComponent size={20} strokeWidth={2.2} />
                    </div>

                    <h3 className="devsinc-value-title">{val.title}</h3>
                    <p className="devsinc-value-text">{val.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Common Questions FAQs */}
      <section className="section-spacing section-alt-contrast">
        <div className="app-container" style={{ maxWidth: '860px' }}>
          <div className="about-section-header" style={{ marginBottom: '40px' }}>
            <h2 className="section-title">
              Common <span className="text-gradient-brand">Questions</span>
            </h2>
            <p className="section-subtitle">
              Answers to common questions about our teams, technical engagements, and methodology.
            </p>
          </div>

          <Accordion items={aboutFaqs} />
        </div>
      </section>

      {/* Section 5: From Introduction to Proposal in Days */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="about-cta-banner">
            <div className="cta-glow-aura" />
            <h2 className="cta-banner-title">
              From Introduction to Proposal <span className="text-gradient-brand">in Days</span>
            </h2>
            <p className="cta-banner-subtitle">
              Trusted by top platforms for our transformative solutions and exceptional results. If you can imagine it, we can build it.
            </p>
            <div className="cta-buttons-wrapper">
              <button
                type="button"
                onClick={() => onOpenModal && onOpenModal('Book Discovery Call')}
                className="glass-button-primary"
              >
                <span>Book a Free Discovery Call</span>
                <ArrowRight size={18} />
              </button>
              <button
                type="button"
                onClick={() => onOpenModal && onOpenModal('Request Mutual NDA')}
                className="glass-button-secondary"
              >
                <Lock size={16} />
                <span>Request NDA</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
