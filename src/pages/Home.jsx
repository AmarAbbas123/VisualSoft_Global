import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa6';
import {
  ArrowUpRight,
  Globe,
  Clock,
  Paintbrush,
  Code,
  Cloud,
  Shield,
  TrendingUp,
  Sparkles,
  Compass,
  BookOpen,
  Clock3,
  FileText,
  Monitor,
  ShoppingCart,
  UtensilsCrossed,
  Building,
  HeartPulse,
  GraduationCap,
  Hotel,
  Compass as TravelIcon,
  ExternalLink
} from 'lucide-react';
import {
  ProjectDeliverySVG,
  DedicatedTeamsSVG,
  DigitalDepartmentSVG
} from '../components/EngagementSVGs';
import industryData from '../data/industryHomeData.json';
import HomeHeroAnimation from '../components/HomeHeroAnimation';
import '../home-custom.css';

export default function Home({ onOpenModal }) {
  // 1. Hero dynamic rotating line
  const phrases = ['Scalable Solutions', 'Real Impact'];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [phrases.length]);

  // 2. Partner Logos for infinite marquee
  const partnerLogos = [
    { name: 'Google Cloud', src: '/images/logos/partner-navy/google_cloud.svg' },
    { name: 'Microsoft Azure', src: '/images/logos/partner-navy/microsoft_azure.svg' },
    { name: 'IBM', src: '/images/logos/partner-navy/ibm.svg' },
    { name: 'Shopify', src: '/images/logos/partner-navy/shopify.svg' },
    { name: 'Vercel', src: '/images/logos/partner-navy/vercel.svg' },
    { name: 'Microsoft', src: '/images/logos/partner-navy/microsoft.svg' },
    { name: 'Salesforce', src: '/images/logos/partner-navy/salesforce.svg' },
    { name: 'Slack', src: '/images/logos/partner-navy/slack.svg' },
    { name: 'Figma', src: '/images/logos/partner-navy/figma.svg' }
  ];

  // 4. Digital Capabilities Lateral Gallery
  const capabilities = [
    {
      id: 'software-development',
      fullLabel: 'Software Development',
      shortLabel: 'Software',
      image: '/images/capabilities/home-executive-responsive/software-development-640.webp',
      title: 'Software Development',
      description:
        'From scalable web applications to enterprise platforms, we build secure, high-performance software tailored to your business goals.',
      tags: ['Web Development', 'Mobile App Development', 'SaaS Development'],
      ctaLabel: 'Build With Us',
      ctaLink: '/ai-enabled-custom-software-development'
    },
    {
      id: 'cloud-engineering',
      fullLabel: 'Cloud Engineering',
      shortLabel: 'Cloud',
      image: '/images/capabilities/home-executive-responsive/cloud-engineering-640.webp',
      title: 'Cloud Engineering',
      description:
        'Design, deploy, and manage scalable cloud infrastructure that drives performance and reliability.',
      tags: ['Cloud Migration', 'DevOps', 'Managed Cloud Services'],
      ctaLabel: 'Scale in the Cloud',
      ctaLink: '/managed-it-services'
    },
    {
      id: 'cyber-security',
      fullLabel: 'Cyber Security',
      shortLabel: 'Security',
      image: '/images/capabilities/home-executive-responsive/cyber-security-640.webp',
      title: 'Cyber Security',
      description:
        'Protect your business with robust, proactive security strategies and advanced threat detection.',
      tags: ['Penetration Testing', 'Incident Response', 'Risk & Compliance'],
      ctaLabel: 'Secure Your Business',
      ctaLink: '/contactus'
    },
    {
      id: 'design',
      fullLabel: 'Design',
      shortLabel: 'Design',
      image: '/images/capabilities/home-executive-responsive/design-640.webp',
      title: 'Design',
      description:
        'Create intuitive, engaging, and user-centric digital experiences that delight your customers.',
      tags: ['UI/UX Design', 'Graphic Design', 'Motion Graphics'],
      ctaLabel: 'Design That Delivers',
      ctaLink: '/products'
    },
    {
      id: 'growth-marketing',
      fullLabel: 'Growth Marketing',
      shortLabel: 'Growth',
      image: '/images/capabilities/home-executive-responsive/growth-marketing-640.webp',
      title: 'Growth Marketing',
      description:
        'Drive measurable growth with data-driven marketing strategies that attract, engage, and convert.',
      tags: ['SEO', 'Paid Advertising', 'Content & Email Marketing'],
      ctaLabel: 'Grow Your Business',
      ctaLink: '/digital-marketing'
    },
    {
      id: 'ai-automation',
      fullLabel: 'AI Automation',
      shortLabel: 'AI',
      image: '/images/capabilities/home-executive-responsive/ai-automation-640.webp',
      title: 'AI Automation',
      description:
        'Leverage the power of AI to automate workflows, increase efficiency, and unlock new opportunities.',
      tags: ['Chatbot Development', 'Workflow Automation', 'CRM Automation'],
      ctaLabel: 'Automate Smarter',
      ctaLink: '/ai-agent-development'
    }
  ];
  const [activeCapIndex, setActiveCapIndex] = useState(0);

  // 5. Industry Intelligence Tabs
  const industryTabs = [
    { key: 'technology', label: 'Technology', icon: Monitor },
    { key: 'retail', label: 'Retail & E-commerce', icon: ShoppingCart },
    { key: 'restaurants', label: 'Restaurants', icon: UtensilsCrossed },
    { key: 'real-estate', label: 'Real Estate', icon: Building },
    { key: 'healthcare', label: 'Healthcare', icon: HeartPulse },
    { key: 'education', label: 'Education', icon: GraduationCap },
    { key: 'hospitality', label: 'Hospitality', icon: Hotel },
    { key: 'travel', label: 'Travel & Tourism', icon: TravelIcon }
  ];
  const [activeIndustryKey, setActiveIndustryKey] = useState('retail');
  const activeIndustry = industryData[activeIndustryKey] || industryData['retail'];

  return (
    <div className="mt-bytes-home-view">
      {/* ====================================================
          1. HERO SECTION
          ==================================================== */}
      <section id="hero" data-header-overlay="dark" className="HeroSection_hero__MOr2n">
        <div className="HeroSection_layout__YE_4w">
          {/* Left Column: Copy & Actions */}
          <div className="HeroSection_copy__yE_zV">
            <div className="HeroSection_eyebrowSlot__qfNrT">
              <p className="HeroSection_eyebrow__90g59" data-eyebrow-concept="quiet">
                BUILDING SMARTER SOLUTIONS
              </p>
            </div>

            <h1 className="HeroSection_title__La_gG" aria-label="Turning ideas into Scalable Solutions">
              Turning ideas into{' '}
              <span className="HeroSection_rotatingLine__HxECV" aria-hidden="true">
                <span className="HeroSection_phraseSizer__0nV5w">{phrases[phraseIndex]}</span>
                <span key={phraseIndex} className="HeroSection_phrase__jA2sT HeroSection_phrase__animate">
                  {phrases[phraseIndex]}
                </span>
              </span>
            </h1>

            <p className="HeroSection_description__bmIwD">
              MT BYTES helps businesses build better systems, improve operations and grow through
              technology while creating meaningful impact.
            </p>

            <div className="HeroSection_actions__nhuP2">
              <button
                type="button"
                onClick={onOpenModal}
                className="group inline-flex min-h-12 items-center gap-4 rounded-[6px] border border-[#233DFF] bg-[#233DFF] py-2 pl-5 pr-2 text-[14px] font-semibold text-white shadow-[0_9px_22px_rgba(35,61,255,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1D35DD] hover:shadow-[0_12px_26px_rgba(35,61,255,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#52B7FF] active:scale-[0.98] cursor-pointer"
              >
                <span>Talk To Us</span>
                <span
                  data-capability-cta-icon="true"
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[3px] bg-white text-[#233DFF] transition-colors duration-300 group-hover:bg-[#233DFF] group-hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </button>

              <a className="HeroSection_secondary__cfZuY" href="#capabilities-overview">
                <span>Explore Our Capabilities</span>
                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* Live Stats Row */}
            <div className="HeroSection_stats___NnlS">
              <div className="HeroSection_stat__dk3OZ">
                <Globe size={17} />
                <span>
                  <strong>15+</strong>
                  <span className="HeroSection_statLabel__pZzid">Countries Served</span>
                </span>
              </div>

              <div className="HeroSection_stat__dk3OZ">
                <Clock size={17} />
                <span>
                  <strong>24/7</strong>
                  <span className="HeroSection_statLabel__pZzid">Global Operations</span>
                </span>
              </div>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="HeroSection_stat__dk3OZ"
              >
                <FaLinkedinIn size={16} />
                <span>
                  <strong>65k+</strong>
                  <span className="HeroSection_statLabel__pZzid">Professional Reach</span>
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Interactive Architecture Blueprint */}
          <div className="HeroSection_artwork__yAs63" style={{ opacity: 1 }}>
            <HomeHeroAnimation />
          </div>
        </div>
      </section>

      {/* ====================================================
          2. TECHNOLOGY PARTNERS MARQUEE
          ==================================================== */}
      <section
        id="technology-partners"
        aria-labelledby="technology-partners-heading"
        className="TechnologyEcosystem_root__thN1L"
        data-home-section="partners"
        data-partner-design="plain-marquee"
      >
        <div className="TechnologyEcosystem_scene__dAdlw">
          <div className="TechnologyEcosystem_content__p5Dr8">
            <h2 id="technology-partners-heading" className="TechnologyEcosystem_heading__hDJS4">
              Partnerships that drive progress<span className="TechnologyEcosystem_accent__VS_Zz">.</span>
            </h2>

            <div className="TechnologyEcosystem_viewport__nCiw_" data-partner-lane="true">
              <div className="partner-marquee-track">
                {/* 1st Group */}
                <ul className="TechnologyEcosystem_group___KIyM">
                  {partnerLogos.map((p, idx) => (
                    <li key={`partner-1-${idx}`} className="TechnologyEcosystem_logoSlot__D6M5m">
                      <img
                        src={p.src}
                        alt={p.name}
                        width="144"
                        height="72"
                        className="TechnologyEcosystem_logo__TnlYJ"
                        draggable="false"
                      />
                    </li>
                  ))}
                </ul>

                {/* 2nd Loop Group */}
                <ul className="TechnologyEcosystem_group___KIyM" aria-hidden="true">
                  {partnerLogos.map((p, idx) => (
                    <li key={`partner-2-${idx}`} className="TechnologyEcosystem_logoSlot__D6M5m">
                      <img
                        src={p.src}
                        alt={p.name}
                        width="144"
                        height="72"
                        className="TechnologyEcosystem_logo__TnlYJ"
                        draggable="false"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          3. WHO WE ARE (EDITORIAL SECTION)
          ==================================================== */}
      <section
        id="who-we-are"
        aria-labelledby="home-who-heading"
        data-home-section="who-we-are"
        className="WhoWeAreSection_section__F24zt"
      >
        <div className="WhoWeAreSection_container__8quBt">
          {/* Angled Compass Watermark Artwork */}
          <div className="WhoWeAreSection_artwork__i_DDL" aria-hidden="true">
            <Compass strokeWidth={0.6} />
          </div>

          <p className="WhoWeAreSection_eyebrow__OeHch">About MT BYTES</p>

          <h2 id="home-who-heading" className="WhoWeAreSection_heading__P9G7f">
            The right expertise changes what a business can do
          </h2>

          <div className="WhoWeAreSection_footer__5CZp_">
            <p className="WhoWeAreSection_body__mtfBd">
              We connect engineering, design and growth around the decisions that matter to your business.
            </p>
            <Link className="WhoWeAreSection_cta__MTid9" to="/about-us">
              <span>Get to know us</span>
              <span className="WhoWeAreSection_ctaArrow__3IOCN">
                <ArrowUpRight size={22} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================
          4. DIGITAL CAPABILITIES (LATERAL GALLERY)
          ==================================================== */}
      <section
        id="capabilities-overview"
        data-home-section="what-we-do"
        data-capability-design="lateral-gallery"
        aria-labelledby="capabilities-heading"
        className="LateralGallery_root__C_KW8"
        style={{ padding: '80px 0 90px' }}
      >
        <div className="app-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
          <header className="LateralGallery_intro__da8eA" style={{ marginBottom: '36px' }}>
            <p className="LateralGallery_eyebrow__wMj9O">Our Digital Capabilities</p>
            <h2 id="capabilities-heading" className="LateralGallery_heading__b9abv">
              Solutions that power your growth
            </h2>
            <p className="LateralGallery_description__fFiuy">
              Explore our core capabilities designed to build, secure, scale and accelerate your digital journey.
            </p>
          </header>

          {/* Tab Selector Pills */}
          <div className="LateralGallery_index__interactive">
            {capabilities.map((c, i) => (
              <button
                key={c.id}
                type="button"
                className={`LateralGallery_tab_btn ${activeCapIndex === i ? 'active' : ''}`}
                onClick={() => setActiveCapIndex(i)}
              >
                {c.fullLabel}
              </button>
            ))}
          </div>

          {/* Active Capability Featured Card */}
          {(() => {
            const cap = capabilities[activeCapIndex];
            return (
              <article
                key={cap.id}
                className="LateralGallery_card__G7OWo lateral-card-animated"
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.04)',
                  padding: '36px',
                  backgroundColor: '#ffffff',
                  minHeight: '440px'
                }}
              >
                <figure className="LateralGallery_artwork__2s2ZL">
                  <img
                    src={cap.image}
                    alt={cap.title}
                    style={{ width: '100%', height: 'auto', maxHeight: '380px', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </figure>

                <div className="LateralGallery_copy__HwEkk">
                  <h3 style={{ fontSize: 'clamp(28px, 3vw, 42px)', marginBottom: '16px', color: '#111b28' }}>
                    {cap.title}
                  </h3>
                  <p style={{ fontSize: '16px', color: '#49617e', lineHeight: 1.6, marginBottom: '24px' }}>
                    {cap.description}
                  </p>

                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '10px',
                      marginBottom: '32px'
                    }}
                  >
                    {cap.tags.map((t, idx) => (
                      <li
                        key={idx}
                        style={{
                          background: '#edf3fb',
                          color: '#2a4365',
                          fontSize: '13px',
                          fontWeight: 500,
                          padding: '6px 14px',
                          borderRadius: '6px'
                        }}
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={cap.ctaLink}
                    className="ExecutiveIndex_action__9xiD4"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '12px',
                      background: '#233dff',
                      color: '#ffffff',
                      padding: '10px 22px',
                      borderRadius: '6px',
                      fontWeight: 600,
                      fontSize: '14px',
                      textDecoration: 'none',
                      boxShadow: '0 6px 18px rgba(35, 61, 255, 0.25)'
                    }}
                  >
                    <span>{cap.ctaLabel}</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })()}
        </div>
      </section>

      {/* ====================================================
          5. INDUSTRY INTELLIGENCE INTERACTIVE DASHBOARD
          ==================================================== */}
      <section
        id="industry-intelligence"
        className="mtb-industry-dashboard"
        data-mode="home"
        data-industry={activeIndustryKey}
        data-industry-dashboard-context="home"
        aria-label="Industry intelligence dashboard"
      >
        <div className="mtb-industry-dashboard__shell">
          <header className="mtb-industry-dashboard__header">
            <p>Industry insights</p>
            <h2>A clearer view of your industry</h2>
          </header>

          <div className="mtb" data-mode="home" data-industry={activeIndustryKey}>
            <div className="mtb__shell">
              <div key={activeIndustryKey} className="mtb__board industry-board-animated">
                {/* 8 Industry Tabs */}
                <nav className="mtb__nav" aria-label="Choose an industry">
                  {industryTabs.map((tab) => {
                    const TabIcon = tab.icon;
                    const isSelected = activeIndustryKey === tab.key;
                    return (
                      <button
                        key={tab.key}
                        className={`mtb__tab ${isSelected ? 'mtb__tab_active' : ''}`}
                        type="button"
                        onClick={() => setActiveIndustryKey(tab.key)}
                        aria-pressed={isSelected}
                      >
                        <TabIcon className="mtb__icon" size={18} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </nav>

                {/* Top Board: Industry Name & Source Citation */}
                <header className="mtb__board-top">
                  <div className="mtb__industry-line">
                    <span className="mtb__industry-symbol">
                      {React.createElement(
                        industryTabs.find((t) => t.key === activeIndustryKey)?.icon || Monitor,
                        { className: 'mtb__icon', size: 20 }
                      )}
                    </span>
                    <div className="mtb__industry-heading">
                      <h2 className="mtb__industry">{activeIndustry.name}</h2>
                      {activeIndustry.source?.url && (
                        <div className="mtb__header-source">
                          <a
                            className="mtb__source"
                            href={activeIndustry.source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={14} className="mtb__icon" />
                            <span>{activeIndustry.source.label}</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </header>

                {/* Lead Signal & Supporting Metrics */}
                <article className="mtb__lead" data-signal>
                  <div className="mtb__copy">
                    <span className="mtb__eyebrow">{activeIndustry.eyebrow}</span>
                    <h3 className="mtb__headline">{activeIndustry.headline}</h3>
                    <p className="mtb__summary">{activeIndustry.summary}</p>

                    <div className="mtb__supporting">
                      {activeIndustry.metrics?.map((m, idx) => (
                        <div key={idx} className="mtb__supporting-metric">
                          <strong>{m.display}</strong>
                          <div>
                            <span>{m.label}</span>
                            {m.context && <small>{m.context}</small>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual Chart: Dynamic Flow / Share-Band */}
                  <div className="mtb__visual">
                    <div className="mtb__chart-heading">
                      <span>{activeIndustry.chartHeading || 'Key Metrics'}</span>
                    </div>

                    <figure className="mtb__figure ed-chart" data-chart="checkout" role="img">
                      <div className="ed-chart__checkout">
                        <div className="ed-chart__checkout-overview">
                          {activeIndustry.chart?.metrics?.map((cm, idx) => (
                            <div key={idx} style={{ '--mark': idx === 0 ? 'var(--plot-1, #233DFF)' : 'var(--plot-2, #52B7FF)' }}>
                              <strong className="ed-chart__value">{cm.display}</strong>
                              <span className="ed-chart__label">
                                {cm.label}
                                {cm.context && <small className="ed-chart__context">{cm.context}</small>}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Interactive Share Band */}
                        <div className="ed-chart__share-band" data-grow="x" aria-hidden="true">
                          {activeIndustry.chart?.metrics?.map((cm, idx) => (
                            <span
                              key={idx}
                              style={{
                                width: typeof cm.value === 'number' && cm.unit === 'percent' ? `${cm.value}%` : `${Math.min(100, Math.max(20, cm.value * 2))}%`,
                                '--mark': idx === 0 ? 'var(--plot-1, #233DFF)' : 'var(--plot-2, #52B7FF)'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </figure>
                  </div>
                </article>

                {/* Action CTA Button */}
                <div className="mtb__action">
                  <button
                    type="button"
                    onClick={onOpenModal}
                    className="mtb__cta"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'inherit' }}
                  >
                    <span className="mtb__cta-label">{activeIndustry.ctaLabel}</span>
                    <span className="mtb__cta-icon" aria-hidden="true">
                      <ArrowUpRight size={18} className="mtb__icon" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          6. WAYS TO WORK (ENGAGEMENT MODELS)
          ==================================================== */}
      <section
        id="engagement-models"
        data-home-section="engagement-models"
        data-selected-design="engagement-reference"
        aria-labelledby="engagement-reference-heading"
        className="EngagementReference_section__CeuVZ"
      >
        <div className="EngagementReference_inner__zX6Tc">
          <header className="EngagementReference_heading__Ysu3_">
            <p className="EngagementReference_eyebrow__ckoNy">Ways to work</p>
            <h2 id="engagement-reference-heading">The right way to work together</h2>
            <p className="EngagementReference_introduction__f_YRj">
              Flexible ways to work with us, built around your goals.
            </p>
          </header>

          <div className="EngagementReference_models__OdxfL">
            {/* Model 1: Project-Based Delivery */}
            <article className="EngagementReference_model__1cifj">
              <div className="EngagementReference_visual__JFGzf">
                <div
                  className="EngagementReference_artwork__WpHwG"
                  role="img"
                  data-art-motion="running"
                  aria-label="A defined-scope checklist connected to a blue delivery checkmark."
                >
                  <ProjectDeliverySVG />
                </div>
              </div>
              <h3>Project-Based Delivery</h3>
              <p className="EngagementReference_description__9qWno">
                A defined scope, clear milestones and a focused team to deliver it.
              </p>
              <button
                type="button"
                onClick={onOpenModal}
                className="EngagementReference_link__40BjH"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                <span>Learn more</span>
                <span className="EngagementReference_linkArrow__MNyrG" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </button>
            </article>

            {/* Model 2: Dedicated Teams */}
            <article className="EngagementReference_model__1cifj">
              <div className="EngagementReference_visual__JFGzf">
                <div
                  className="EngagementReference_artwork__WpHwG"
                  role="img"
                  data-art-motion="running"
                  aria-label="Your team and specialists shown as overlapping blue circles with a shared team at their intersection."
                >
                  <DedicatedTeamsSVG />
                </div>
              </div>
              <h3>Dedicated Teams</h3>
              <p className="EngagementReference_description__9qWno">
                Specialists who work as an extension of your team, under your direction.
              </p>
              <button
                type="button"
                onClick={onOpenModal}
                className="EngagementReference_link__40BjH"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                <span>Learn more</span>
                <span className="EngagementReference_linkArrow__MNyrG" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </button>
            </article>

            {/* Model 3: Digital Department (DDaaS) */}
            <article className="EngagementReference_model__1cifj">
              <div className="EngagementReference_visual__JFGzf">
                <div
                  className="EngagementReference_artwork__WpHwG"
                  role="img"
                  data-art-motion="running"
                  aria-label="One partner at the centre of strategy, build, operate, optimize, secure and advise."
                >
                  <DigitalDepartmentSVG />
                </div>
              </div>
              <h3>Digital Department (DDaaS)</h3>
              <p className="EngagementReference_description__9qWno">
                One partner to coordinate your ongoing digital work, end to end.
              </p>
              <button
                type="button"
                onClick={onOpenModal}
                className="EngagementReference_link__40BjH"
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                <span>Learn more</span>
                <span className="EngagementReference_linkArrow__MNyrG" aria-hidden="true">
                  <ArrowUpRight size={18} />
                </span>
              </button>
            </article>
          </div>
        </div>
      </section>

      {/* ====================================================
          7. OUR ECOSYSTEM (3D PROGRAM CARDS)
          ==================================================== */}
      <section
        id="ecosystem"
        data-home-section="ecosystem"
        className="CompanyStory_chapter__ceu1C CompanyStory_dark__PUt5x CompanyStory_ecosystem__81WSY"
      >
        <div className="CompanyStory_boundary__49ig_">
          <header>
            <p className="CompanyStory_sectionName__jpfOS">Our ecosystem</p>
            <h2 id="ecosystem-heading">
              We create{' '}
              <span style={{ color: '#52B7FF', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
                more possibilities together
              </span>
            </h2>
            <p>
              Beyond the work we deliver, we create space for founders, businesses, mission-led
              organisations to move forward.
            </p>
          </header>

          <div className="CompanyStory_programField__XOxYd HomeEcosystem_threePrograms__gDsFP">
            {/* Startup Program */}
            <div
              className="CompanyStory_program__q96z6"
              style={{ cursor: 'pointer' }}
              onClick={onOpenModal}
            >
              <div className="CompanyStory_programImage__O0Tvc HomeEcosystem_programArtwork__J11Lp">
                <img
                  src="/images/ecosystem/startup-program-3d.webp"
                  alt="Startup Program"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }}
                  loading="lazy"
                />
              </div>
              <div className="CompanyStory_programCopy__cbEmb">
                <h3>Startup Program</h3>
                <p>
                  Product, design and engineering support for selected startups taking an idea into its
                  next stage.
                </p>
                <span>
                  Explore program <ArrowUpRight size={18} />
                </span>
              </div>
            </div>

            {/* NGO Program */}
            <div
              className="CompanyStory_program__q96z6"
              style={{ cursor: 'pointer' }}
              onClick={onOpenModal}
            >
              <div className="CompanyStory_programImage__O0Tvc HomeEcosystem_programArtwork__J11Lp">
                <img
                  src="/images/ecosystem/ngo-program-3d.webp"
                  alt="NGO Program"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }}
                  loading="lazy"
                />
              </div>
              <div className="CompanyStory_programCopy__cbEmb">
                <h3>NGO Program</h3>
                <p>
                  Scoped digital support for selected NGOs, built around the people they serve and the
                  way they work.
                </p>
                <span>
                  Explore program <ArrowUpRight size={18} />
                </span>
              </div>
            </div>

            {/* Growth Enablement */}
            <div
              className="CompanyStory_program__q96z6"
              style={{ cursor: 'pointer' }}
              onClick={onOpenModal}
            >
              <div className="CompanyStory_programImage__O0Tvc HomeEcosystem_programArtwork__J11Lp">
                <img
                  src="/images/ecosystem/growth-enablement-3d.webp"
                  alt="Growth Enablement"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '16px' }}
                  loading="lazy"
                />
              </div>
              <div className="CompanyStory_programCopy__cbEmb">
                <h3>Growth Enablement</h3>
                <p>
                  Flexible payment or equity pathways for eligible businesses pursuing strategic digital
                  projects.
                </p>
                <span>
                  Explore program <ArrowUpRight size={18} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          8. FEATURED INSIGHTS
          ==================================================== */}
      <section
        id="insights-original-content"
        data-home-section="featured-insights"
        data-insights-page="home"
        aria-labelledby="insights-original-content-heading"
        className="NewInsightsShowcase_section__h5WDQ NewInsightsShowcase_compact__8jCYc"
      >
        <div className="NewInsightsShowcase_inner__kt7Qq">
          <div className="NewInsightsShowcase_compactLayout___Tg0f">
            <header className="NewInsightsShowcase_header__7DpHp">
              <div className="NewInsightsShowcase_intro__Sx28x">
                <h2 id="insights-original-content-heading">
                  Featured{' '}
                  <span style={{ color: '#52B7FF', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
                    Insights
                  </span>
                </h2>
                <p>Selected perspectives, case studies and resources for better digital decisions.</p>
              </div>
            </header>

            <div id="insights-original-content-cards" className="NewInsightsShowcase_cards__4js6E">
              {/* Insight 1: Perspective */}
              <article className="NewInsightsShowcase_card__4hunP">
                <Link
                  className="NewInsightsShowcase_cardLink___s19j"
                  to="/case-studies"
                >
                  <div className="NewInsightsShowcase_media__hTlfO">
                    <img
                      src="/images/perspectives/featured/001-thumbnail.webp"
                      alt="Digital Transformation"
                      className="NewInsightsShowcase_image__XSJOK"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="NewInsightsShowcase_copy__jjYXB">
                    <p className="NewInsightsShowcase_category__JN4v5">Perspective</p>
                    <h3>Where to Start With Digital Transformation in a Small Business</h3>
                    <div className="NewInsightsShowcase_meta__35Pvj">
                      <div className="NewInsightsShowcase_metaDetails__OSlRJ">
                        <span className="NewInsightsShowcase_metaDetail__1tuF3">
                          <BookOpen size={14} />
                          <span>MT BYTES</span>
                        </span>
                        <span className="NewInsightsShowcase_metaBadge__Y_yHj">
                          <Clock3 size={13} />
                          <span>7 min read</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>

              {/* Insight 2: Case Study */}
              <article className="NewInsightsShowcase_card__4hunP">
                <Link
                  className="NewInsightsShowcase_cardLink___s19j"
                  to="/case-studies"
                >
                  <div className="NewInsightsShowcase_media__hTlfO">
                    <img
                      src="/images/solution-studies/selected/17-thumbnail.webp"
                      alt="Work Orders Solution Study"
                      className="NewInsightsShowcase_image__XSJOK"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="NewInsightsShowcase_copy__jjYXB">
                    <p className="NewInsightsShowcase_category__JN4v5">Case Study</p>
                    <h3>Work Orders from Approval to Invoice</h3>
                    <div className="NewInsightsShowcase_meta__35Pvj">
                      <div className="NewInsightsShowcase_metaDetails__OSlRJ">
                        <span className="NewInsightsShowcase_metaDetail__1tuF3">
                          <BookOpen size={14} />
                          <span>Solution study</span>
                        </span>
                        <span className="NewInsightsShowcase_metaBadge__Y_yHj">
                          <Clock3 size={13} />
                          <span>6 min read</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>

              {/* Insight 3: Resource */}
              <article className="NewInsightsShowcase_card__4hunP">
                <Link
                  className="NewInsightsShowcase_cardLink___s19j"
                  to="/case-studies"
                >
                  <div className="NewInsightsShowcase_media__hTlfO">
                    <img
                      src="/images/resources/featured/digital-readiness-assessment.webp"
                      alt="Digital Readiness Assessment"
                      className="NewInsightsShowcase_image__XSJOK"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="NewInsightsShowcase_copy__jjYXB">
                    <p className="NewInsightsShowcase_category__JN4v5">Resource</p>
                    <h3>Digital Readiness Assessment</h3>
                    <div className="NewInsightsShowcase_meta__35Pvj">
                      <div className="NewInsightsShowcase_metaDetails__OSlRJ">
                        <span className="NewInsightsShowcase_metaDetail__1tuF3">
                          <FileText size={14} />
                          <span>Digital Strategy</span>
                        </span>
                        <span className="NewInsightsShowcase_metaBadge__Y_yHj NewInsightsShowcase_fileBadge__cgy6_">
                          <span>XLSX</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            </div>

            <Link className="NewInsightsShowcase_viewAll__fvqXa" to="/case-studies">
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================
          9. FINAL CTA SECTION
          ==================================================== */}
      <section
        id="home-next-step"
        data-home-section="final-cta"
        aria-labelledby="home-next-step-heading"
        className="FinalCTASection_section___CSsX"
      >
        <div className="FinalCTASection_band__IOcPp">
          <div className="FinalCTASection_content__c_Zzh">
            <h2 id="home-next-step-heading">
              Bring us your next
              <br />
              <span>digital challenge</span>
            </h2>
            <p>
              Tell us what you're building or what needs to work better. We'll help you find the right
              way forward.
            </p>
            <button
              type="button"
              onClick={onOpenModal}
              className="FinalCTASection_button__wVYE9"
            >
              <span>Talk To Us</span>
              <span className="FinalCTASection_buttonIcon__F40vn" aria-hidden="true">
                <ArrowUpRight size={14} />
              </span>
            </button>
          </div>

          <div className="FinalCTASection_artwork__mJCEu" aria-hidden="true">
            <img
              src="/images/home/home-cta-portals-v1.webp"
              alt="Digital Challenge Portals"
              className="FinalCTASection_image__LHKc2"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
