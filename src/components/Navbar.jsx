import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Code2,
  Cloud,
  ShieldCheck,
  Palette,
  TrendingUp,
  Bot,
  Cpu,
  ShoppingBag,
  UtensilsCrossed,
  Building2,
  HeartPulse,
  GraduationCap,
  Hotel,
  Plane,
  Target,
  Users,
  Layers
} from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar({ onOpenModal }) {
  const [surface, setSurface] = useState('dark');
  const [isHero, setIsHero] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null); // 'what-we-do' | 'who-we-are' | 'what-we-think' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState('what-we-do');
  const [mobileSubsection, setMobileSubsection] = useState('capabilities');

  const location = useLocation();
  const navRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Dynamic overlay & scroll detection matching mt-bytes.io
  useEffect(() => {
    const handleScrollOrOverlay = () => {
      const overlayEl = document.querySelector('[data-header-overlay]');
      if (!overlayEl) {
        setSurface(null);
        setIsHero(false);
        return;
      }
      const surf = overlayEl.getAttribute('data-header-overlay') === 'dark' ? 'dark' : 'light';
      setSurface(surf);
      const headerEl = document.getElementById('global-header');
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 76;
      const rect = overlayEl.getBoundingClientRect();
      setIsHero(rect.bottom > headerHeight);
    };

    handleScrollOrOverlay();
    window.addEventListener('scroll', handleScrollOrOverlay, { passive: true });
    window.addEventListener('resize', handleScrollOrOverlay, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScrollOrOverlay);
      window.removeEventListener('resize', handleScrollOrOverlay);
    };
  }, [location.pathname]);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  // Click outside and ESC key handlers
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Determine appearance state
  // On hero section with dark overlay: transparent header with white text
  // Once scrolled past hero, or on subpages: frosted white header with dark text
  const isTransparent = isHero && surface === 'dark';

  const navTextClass = isTransparent
    ? 'text-white hover:text-[#52B7FF]'
    : 'text-neutral-700 hover:text-[#233DFF]';

  const chevronClass = isTransparent
    ? 'text-slate-400 group-hover/navbtn:text-[#52B7FF]'
    : 'text-neutral-400 group-hover/navbtn:text-[#233DFF]';

  const logoColorClass = isTransparent ? 'text-white' : 'text-[#071120]';

  // Smooth hover helpers with debounce
  const handleMenuEnter = (menuName) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  // Data definitions exactly matching mt-bytes.io
  const capabilities = [
    { title: "Software Development", icon: Code2, desc: "Software built for your needs", path: "/ai-enabled-custom-software-development" },
    { title: "Cloud Engineering", icon: Cloud, desc: "Reliable cloud tools for your business", path: "/managed-it-services" },
    { title: "Cybersecurity", icon: ShieldCheck, desc: "Protect your business and your data", path: "/managed-it-services" },
    { title: "Design", icon: Palette, desc: "Simple designs that are easy to use", path: "/ai-enabled-custom-software-development" },
    { title: "Growth Marketing", icon: TrendingUp, desc: "Reach more people and grow sales", path: "/digital-marketing" },
    { title: "AI Automation", icon: Bot, desc: "Save time on everyday tasks with AI", path: "/ai-agent-development" }
  ];

  const industries = [
    { title: "Technology", icon: Cpu, path: "/#industry-dashboard" },
    { title: "Retail & E-commerce", icon: ShoppingBag, path: "/#industry-dashboard" },
    { title: "Restaurants", icon: UtensilsCrossed, path: "/#industry-dashboard" },
    { title: "Real Estate", icon: Building2, path: "/#industry-dashboard" },
    { title: "Healthcare", icon: HeartPulse, path: "/#industry-dashboard" },
    { title: "Education", icon: GraduationCap, path: "/#industry-dashboard" },
    { title: "Hospitality", icon: Hotel, path: "/#industry-dashboard" },
    { title: "Travel & Tourism", icon: Plane, path: "/#industry-dashboard" }
  ];

  const company = [
    { title: "About Us", desc: "Meet MT BYTES and the capabilities we bring together.", path: "/about-us" },
    { title: "Our Journey", desc: "How MT BYTES has grown and evolved.", path: "/about-us#our-journey" },
    { title: "Leadership Team", desc: "Meet the leadership behind MT BYTES.", path: "/our-team" },
    { title: "Careers", desc: "Explore opportunities to work with MT BYTES.", path: "/career" }
  ];

  const principles = [
    { title: "Mission & Vision", desc: "The purpose behind our work and the future we want to build.", path: "/about-us#mission" },
    { title: "Our Values", desc: "The principles that guide our decisions and relationships.", path: "/about-us#values" },
    { title: "Our Approach", desc: "How we bring our capabilities together around your business.", path: "/about-us#approach" }
  ];

  const ecosystem = [
    { title: "Startup Program", desc: "Digital support for startups, from validation to growth.", path: "/products" },
    { title: "NGO Program", desc: "Digital support for organizations working towards their mission.", path: "/about-us" },
    { title: "Growth Enablement Program", desc: "Practical digital support for businesses ready for their next stage.", path: "/case-studies" },
    { title: "Founders Club", desc: "Annual support and a founder community for agencies in Pakistan.", path: "/contactus" }
  ];

  const perspectives = [
    { title: "Experience & Product", desc: "Build useful products and clearer customer journeys.", path: "/case-studies" },
    { title: "Digital Operations", desc: "Connect platforms, software and everyday operations.", path: "/managed-it-services" },
    { title: "AI & Automation", desc: "Explore where AI and automation can create practical value.", path: "/ai-agent-development" },
    { title: "Cybersecurity & Trust", desc: "Make informed decisions about security, risk and responsible technology.", path: "/managed-it-services" },
    { title: "Strategy & Transformation", desc: "Plan technology changes around your business priorities.", path: "/about-us" }
  ];

  const solutionStudies = [
    {
      badge: "CASE STUDY",
      title: "Tenant-Aware Scaling for a Growing SaaS Product",
      desc: "Separate background workloads to keep everyday SaaS use responsive.",
      path: "/case-studies"
    },
    {
      badge: "TRANSFORMATION",
      title: "Product Feedback, Roadmap Decisions and Release Readiness",
      desc: "Connect customer feedback, roadmap decisions and release readiness.",
      path: "/case-studies"
    }
  ];

  const engagementModels = [
    { title: "Project-Based Delivery", icon: Target, path: "/contactus" },
    { title: "Dedicated Teams", icon: Users, path: "/contactus" },
    { title: "DDaaS Model", icon: Layers, path: "/#engagement-models" }
  ];

  return (
    <>
      {/* ================= GLOBAL FIXED HEADER ================= */}
      <header
        id="global-header"
        data-header-state={isTransparent ? "hero" : "sticky"}
        data-header-surface={isTransparent ? "dark" : "light"}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, width: '100%', zIndex: 9999 }}
        className={`site-header fixed top-0 left-0 right-0 z-40 border-b transition-all duration-300 ${
          isTransparent
            ? "border-transparent bg-transparent py-5 shadow-none"
            : "border-neutral-100/70 bg-white/95 py-4 shadow-[0_1px_3px_rgba(0,0,0,0.03)] backdrop-blur-md"
        }`}
        ref={navRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 pl-3 sm:pl-5">
              <Link to="/" className="flex items-center group" aria-label="MT BYTES Home" onClick={closeAll}>
                <BrandLogo className={`h-9 w-auto hover:scale-[1.015] active:scale-[0.985] transition-all ${logoColorClass}`} />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div data-desktop-navigation="true" className="hidden items-center gap-4 lg:flex xl:gap-6 2xl:gap-10">
              <nav className="flex items-center gap-4 xl:gap-5 2xl:gap-8">
                {/* 1. What We Do */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMenuEnter('what-we-do')}
                  onMouseLeave={handleMenuLeave}
                >
                  <button
                    type="button"
                    onClick={() => toggleMenu('what-we-do')}
                    aria-expanded={activeMenu === 'what-we-do'}
                    aria-controls="mega-menu-what-we-do"
                    className={`flex items-center gap-1.5 rounded-md py-2 text-[14px] font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#233DFF] group/navbtn cursor-pointer ${navTextClass}`}
                  >
                    <span>What We Do</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${chevronClass} ${
                        activeMenu === 'what-we-do' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Mega Menu: What We Do */}
                  {activeMenu === 'what-we-do' && (
                    <div
                      id="mega-menu-what-we-do"
                      role="navigation"
                      aria-label="Explore What We Do"
                      onMouseEnter={() => handleMenuEnter('what-we-do')}
                      onMouseLeave={handleMenuLeave}
                      className="fixed left-1/2 top-[78px] z-50 grid max-h-[calc(100dvh-94px)] w-[calc(100vw-2rem)] max-w-[920px] -translate-x-1/2 grid-cols-12 gap-5 overflow-x-hidden overflow-y-auto rounded-2xl border border-neutral-100 bg-white p-7 text-left shadow-2xl xl:w-auto xl:max-w-none xl:-translate-x-[40%] xl:grid-cols-[275px_300px_250px] xl:gap-0 xl:py-7 xl:pl-7 xl:pr-3"
                    >
                      {/* Col 1: Featured Platform */}
                      <div className="col-span-12 md:col-span-4 flex flex-col h-full rounded-xl bg-[#B7E4FF]/15 backdrop-blur-md border border-[#B7E4FF]/45 text-neutral-900 p-5 relative overflow-hidden group xl:col-span-1 xl:mr-5">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#233DFF]/5 to-transparent pointer-events-none" />
                        <div className="relative">
                          <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-widest font-mono bg-[#233DFF]/10 text-[#233DFF] uppercase">
                            FEATURED PLATFORM
                          </span>
                          <h4 className="mt-3 text-lg font-bold leading-snug text-neutral-900">
                            Digital Department as a Service (DDaaS)
                          </h4>
                          <p className="mt-2 text-xs text-neutral-600 leading-relaxed font-light font-sans">
                            Rather than managing disconnected agencies, integrate a fully structured, cross-discipline technical department directly into your systems with guaranteed strategic velocity.
                          </p>
                        </div>
                        <div className="relative mt-auto pt-4 border-t border-neutral-100 z-10">
                          <Link
                            to="/#engagement-models"
                            onClick={closeAll}
                            className="w-full flex items-center justify-between text-xs font-bold text-[#233DFF] bg-white hover:bg-[#233DFF] hover:text-white border border-[#233DFF]/20 hover:border-[#233DFF] px-3.5 py-2.5 rounded-lg transition-all group/btn cursor-pointer shadow-xs"
                          >
                            <span>Explore DDaaS</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-[#B7E4FF]/25 to-transparent rounded-full blur-xl pointer-events-none" />
                      </div>

                      {/* Col 2: Capabilities */}
                      <div className="col-span-12 md:col-span-4 xl:col-span-1 xl:pl-5">
                        <Link
                          to="/ai-enabled-custom-software-development"
                          onClick={closeAll}
                          className="block text-[11px] font-bold text-neutral-600 uppercase tracking-widest border-b border-neutral-100 pb-2 mb-2 transition-colors hover:text-[#233DFF]"
                        >
                          CAPABILITIES
                        </Link>
                        <div className="space-y-1">
                          {capabilities.map((c) => {
                            const IconComponent = c.icon;
                            return (
                              <Link
                                key={c.title}
                                to={c.path}
                                onClick={closeAll}
                                className="flex items-start gap-2 p-1 pl-2 hover:bg-neutral-50 hover:border-l-2 hover:border-[#233DFF] border-l-2 border-transparent rounded-lg transition-all group"
                              >
                                <div className="mt-0.5 group-hover:scale-110 transition-transform">
                                  <IconComponent className="h-4 w-4 text-[#233DFF]" />
                                </div>
                                <div>
                                  <h5 className="text-[13px] font-bold text-neutral-900 group-hover:text-[#233DFF] transition-colors">
                                    {c.title}
                                  </h5>
                                  <p className="text-[10px] text-neutral-500 mt-0.5">{c.desc}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Col 3: Industry Focus */}
                      <div className="col-span-12 md:col-span-4 pl-0 md:pl-4 xl:col-span-1 xl:pr-2">
                        <Link
                          to="/#industry-dashboard"
                          onClick={closeAll}
                          className="block text-[11px] font-bold text-neutral-600 uppercase tracking-widest border-b border-neutral-100 pb-2 mb-2 transition-colors hover:text-[#233DFF]"
                        >
                          INDUSTRY FOCUS
                        </Link>
                        <div className="space-y-1">
                          {industries.map((ind) => {
                            const IconComp = ind.icon;
                            return (
                              <Link
                                key={ind.title}
                                to={ind.path}
                                onClick={closeAll}
                                className="flex items-center gap-2 p-1 pl-2 hover:bg-neutral-50 hover:border-l-2 hover:border-[#233DFF] border-l-2 border-transparent rounded-lg transition-all group"
                              >
                                <div className="group-hover:scale-110 transition-transform">
                                  <IconComp className="h-3.5 w-3.5 text-neutral-400 group-hover:text-[#233DFF]" />
                                </div>
                                <span className="text-[12px] font-semibold text-neutral-700 group-hover:text-[#233DFF] transition-colors">
                                  {ind.title}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Who We Are */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMenuEnter('who-we-are')}
                  onMouseLeave={handleMenuLeave}
                >
                  <button
                    type="button"
                    onClick={() => toggleMenu('who-we-are')}
                    aria-expanded={activeMenu === 'who-we-are'}
                    aria-controls="mega-menu-who-we-are"
                    className={`flex items-center gap-1.5 rounded-md py-2 text-[14px] font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#233DFF] group/navbtn cursor-pointer ${navTextClass}`}
                  >
                    <span>Who We Are</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${chevronClass} ${
                        activeMenu === 'who-we-are' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Mega Menu: Who We Are */}
                  {activeMenu === 'who-we-are' && (
                    <div
                      id="mega-menu-who-we-are"
                      role="navigation"
                      aria-label="Explore Who We Are"
                      onMouseEnter={() => handleMenuEnter('who-we-are')}
                      onMouseLeave={handleMenuLeave}
                      className="fixed left-1/2 top-[78px] z-55 grid max-h-[calc(100dvh-94px)] w-[calc(100vw-2rem)] max-w-[850px] -translate-x-1/2 md:-translate-x-[38%] grid-cols-12 gap-6 overflow-x-hidden overflow-y-auto rounded-2xl border border-neutral-100 bg-white p-7 text-left shadow-2xl"
                    >
                      {/* Col 1: Company */}
                      <div className="col-span-12 md:col-span-4">
                        <Link
                          to="/about-us"
                          onClick={closeAll}
                          className="block text-[11px] font-bold text-neutral-600 uppercase tracking-widest border-b border-neutral-100 pb-2 mb-2 transition-colors hover:text-[#233DFF]"
                        >
                          COMPANY
                        </Link>
                        <div className="space-y-1">
                          {company.map((item) => (
                            <Link
                              key={item.title}
                              to={item.path}
                              onClick={closeAll}
                              className="block p-1 pl-2 hover:bg-neutral-50 hover:border-l-2 hover:border-[#233DFF] border-l-2 border-transparent rounded-lg group transition-all"
                            >
                              <div className="flex items-center gap-1.5">
                                <h5 className="text-[13px] font-bold text-neutral-900 group-hover:text-[#233DFF]">
                                  {item.title}
                                </h5>
                              </div>
                              <p className="text-[10px] text-neutral-500 mt-0.5 leading-relaxed">{item.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Col 2: Principles & Approach */}
                      <div className="col-span-12 md:col-span-4">
                        <div className="text-[11px] font-bold text-neutral-600 uppercase tracking-widest border-b border-neutral-100 pb-2 mb-2">
                          PRINCIPLES & APPROACH
                        </div>
                        <div className="space-y-1">
                          {principles.map((item) => (
                            <Link
                              key={item.title}
                              to={item.path}
                              onClick={closeAll}
                              className="block p-1 pl-2 hover:bg-neutral-50 hover:border-l-2 hover:border-[#233DFF] border-l-2 border-transparent rounded-lg group transition-all"
                            >
                              <h5 className="text-[13px] font-bold text-neutral-900 group-hover:text-[#233DFF]">
                                {item.title}
                              </h5>
                              <p className="text-[10px] text-neutral-500 mt-0.5 leading-relaxed">{item.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Col 3: Ecosystem Programs */}
                      <div className="col-span-12 md:col-span-4">
                        <Link
                          to="/#ecosystem"
                          onClick={closeAll}
                          className="block text-[11px] font-bold text-neutral-600 uppercase tracking-widest border-b border-neutral-100 pb-2 mb-2 transition-colors hover:text-[#233DFF]"
                        >
                          ECOSYSTEM
                        </Link>
                        <div className="space-y-1">
                          {ecosystem.map((item) => (
                            <Link
                              key={item.title}
                              to={item.path}
                              onClick={closeAll}
                              className="block p-1 pl-2 hover:bg-neutral-50 hover:border-l-2 hover:border-[#233DFF] border-l-2 border-transparent rounded-lg group transition-all"
                            >
                              <span className="text-[12px] font-bold text-neutral-900 group-hover:text-[#233DFF] transition-colors">
                                {item.title}
                              </span>
                              <p className="text-[10px] text-neutral-500 mt-0.5 leading-relaxed">{item.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. What We Think */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMenuEnter('what-we-think')}
                  onMouseLeave={handleMenuLeave}
                >
                  <button
                    type="button"
                    onClick={() => toggleMenu('what-we-think')}
                    aria-expanded={activeMenu === 'what-we-think'}
                    aria-controls="mega-menu-what-we-think"
                    className={`flex items-center gap-1.5 rounded-md py-2 text-[14px] font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#233DFF] group/navbtn cursor-pointer ${navTextClass}`}
                  >
                    <span>What We Think</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${chevronClass} ${
                        activeMenu === 'what-we-think' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Mega Menu: What We Think */}
                  {activeMenu === 'what-we-think' && (
                    <div
                      id="mega-menu-what-we-think"
                      role="navigation"
                      aria-label="Explore What We Think"
                      onMouseEnter={() => handleMenuEnter('what-we-think')}
                      onMouseLeave={handleMenuLeave}
                      className="fixed left-1/2 top-[78px] z-55 grid max-h-[calc(100dvh-94px)] w-[calc(100vw-2rem)] max-w-[850px] -translate-x-1/2 md:-translate-x-[38%] grid-cols-12 gap-6 overflow-x-hidden overflow-y-auto rounded-2xl border border-neutral-100 bg-white p-7 text-left shadow-2xl"
                    >
                      {/* Col 1: Perspectives */}
                      <div className="col-span-12 md:col-span-4">
                        <Link
                          to="/case-studies"
                          onClick={closeAll}
                          className="block text-[11px] font-bold text-neutral-600 uppercase tracking-widest border-b border-neutral-100 pb-2 mb-2 transition-colors hover:text-[#233DFF]"
                        >
                          PERSPECTIVES
                        </Link>
                        <div className="space-y-1">
                          {perspectives.map((item) => (
                            <Link
                              key={item.title}
                              to={item.path}
                              onClick={closeAll}
                              className="block p-1 pl-2 hover:bg-neutral-50 hover:border-l-2 hover:border-[#233DFF] border-l-2 border-transparent rounded-lg group transition-all"
                            >
                              <h5 className="text-[13px] font-bold text-neutral-900 group-hover:text-[#233DFF] transition-colors">
                                {item.title}
                              </h5>
                              <p className="text-[10px] text-neutral-500 mt-0.5 leading-relaxed">{item.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Col 2: Solution Studies */}
                      <div className="col-span-12 md:col-span-4">
                        <Link
                          to="/case-studies"
                          onClick={closeAll}
                          className="block text-[11px] font-bold text-neutral-600 uppercase tracking-widest border-b border-neutral-100 pb-2 mb-2 transition-colors hover:text-[#233DFF]"
                        >
                          SOLUTION STUDIES
                        </Link>
                        <div className="space-y-1.5">
                          {solutionStudies.map((item) => (
                            <Link
                              key={item.title}
                              to={item.path}
                              onClick={closeAll}
                              className="block p-1.5 px-2 bg-slate-50 border border-slate-100/50 hover:bg-neutral-50 rounded-lg group transition-all"
                            >
                              <span
                                className={`inline-block px-1.5 py-0.5 rounded text-[8px] font-bold text-white tracking-wider ${
                                  item.badge === 'TRANSFORMATION' ? 'bg-[#233DFF]' : 'bg-slate-800'
                                }`}
                              >
                                {item.badge}
                              </span>
                              <h5 className="text-[13px] font-bold text-neutral-900 mt-1 group-hover:text-[#233DFF] transition-colors leading-snug">
                                {item.title}
                              </h5>
                              <p className="text-[10px] text-neutral-500 mt-0.5 leading-relaxed">{item.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Col 3: Resources Card */}
                      <div className="col-span-12 md:col-span-4 flex flex-col mb-2 rounded-xl bg-[#B7E4FF]/10 border border-[#B7E4FF]/30 text-neutral-900 p-5 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#233DFF]/5 to-transparent pointer-events-none" />
                        <div className="relative">
                          <div className="text-[11px] font-bold text-neutral-600 uppercase tracking-widest border-b border-neutral-100 pb-2 mb-3">
                            RESOURCES
                          </div>
                          <Link
                            to="/case-studies"
                            onClick={closeAll}
                            className="relative block aspect-video w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200 group/img"
                          >
                            <img
                              src="/images/resources/featured/cloud-cost-review.webp"
                              alt="Cloud Cost Review"
                              className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                            <span className="absolute bottom-1.5 left-1.5 px-2 py-0.5 bg-[#233DFF] text-[9px] font-bold text-white rounded font-mono">
                              XLSX RESOURCE
                            </span>
                          </Link>
                          <div className="mt-3.5">
                            <h5 className="text-[13px] font-bold text-neutral-900 hover:text-[#233DFF] transition-colors leading-snug">
                              <Link to="/case-studies" onClick={closeAll}>
                                Cloud Cost Review Workbook
                              </Link>
                            </h5>
                            <p className="text-[10px] text-neutral-500 mt-1.5 leading-relaxed font-sans">
                              Review cloud spending, compare potential savings and verify the results.
                            </p>
                          </div>
                        </div>

                        <div className="relative mt-6 pt-4 border-t border-neutral-100 z-10">
                          <Link
                            to="/case-studies"
                            onClick={closeAll}
                            className="w-full flex items-center justify-between text-xs font-bold text-[#233DFF] hover:underline"
                          >
                            <span>Browse Resources</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </nav>

              {/* Talk To Us CTA Button */}
              <button
                type="button"
                onClick={onOpenModal}
                className="shrink-0 cursor-pointer rounded-lg bg-[#233DFF] px-5 py-2.5 text-sm font-bold text-white transition-all xl:px-6 shadow-none hover:bg-blue-700 active:scale-95"
              >
                Talk To Us
              </button>
            </div>

            {/* Mobile Navigation Hamburger Trigger */}
            <div data-mobile-navigation-trigger="true" className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label="Toggle Mobile Menu"
                className={`min-h-11 min-w-11 rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233DFF] transition-colors ${
                  isTransparent
                    ? 'text-white hover:bg-white/10 hover:text-white'
                    : 'text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE NAVIGATION DRAWER ================= */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 flex h-dvh w-full flex-col overflow-hidden bg-white lg:hidden"
        >
          {/* Mobile Drawer Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-neutral-100 px-4 py-4 sm:px-6 sm:py-5">
            <Link to="/" className="flex items-center" aria-label="MT BYTES Home" onClick={closeAll}>
              <BrandLogo className="h-8 w-auto text-[#071120]" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
              aria-label="Close mobile menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Drawer Scrollable Body */}
          <nav className="flex-1 overflow-y-auto px-4 py-3 sm:px-6 sm:py-4" aria-label="Mobile primary navigation">
            {/* Section 1: What We Do */}
            <section className="border-b border-neutral-100 pb-2">
              <button
                type="button"
                onClick={() => setMobileSection(mobileSection === 'what-we-do' ? null : 'what-we-do')}
                aria-expanded={mobileSection === 'what-we-do'}
                className={`flex w-full items-center justify-between py-4 text-left text-lg font-bold transition-colors ${
                  mobileSection === 'what-we-do' ? 'text-[#233DFF]' : 'text-neutral-900 hover:text-[#233DFF]'
                }`}
              >
                <span>What We Do</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    mobileSection === 'what-we-do' ? 'rotate-180 text-[#233DFF]' : 'text-neutral-400'
                  }`}
                />
              </button>

              {mobileSection === 'what-we-do' && (
                <div className="pb-4">
                  {/* Featured DDaaS Card */}
                  <div className="mb-5 rounded-2xl border border-[#B7E4FF]/70 bg-[#EFF9FF] p-4 shadow-[0_18px_40px_rgba(35,61,255,0.08)] sm:p-5">
                    <span className="inline-block rounded-md bg-[#233DFF]/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#233DFF]">
                      Featured Platform
                    </span>
                    <h2 className="mt-3 text-xl font-bold leading-snug text-neutral-900">
                      Digital Department as a Service (DDaaS)
                    </h2>
                    <p className="mt-3 text-sm font-light leading-relaxed text-neutral-600">
                      Connected digital capabilities for modern systems.
                    </p>
                    <div className="mt-5 border-t border-white pt-4">
                      <Link
                        to="/#engagement-models"
                        onClick={closeAll}
                        className="group flex w-full items-center justify-between rounded-xl border border-[#233DFF]/20 bg-white px-4 py-3 text-sm font-bold text-[#233DFF] transition-all hover:border-[#233DFF] hover:bg-[#233DFF] hover:text-white"
                      >
                        <span>Explore DDaaS</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Accordion Subsections */}
                  <div className="divide-y divide-neutral-100">
                    {/* Capabilities Sub */}
                    <div>
                      <button
                        type="button"
                        onClick={() => setMobileSubsection(mobileSubsection === 'capabilities' ? null : 'capabilities')}
                        className="flex w-full items-center justify-between py-3 text-sm font-bold text-neutral-800"
                      >
                        <span>Capabilities</span>
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${mobileSubsection === 'capabilities' ? 'rotate-90 text-[#233DFF]' : 'text-neutral-400'}`}
                        />
                      </button>
                      {mobileSubsection === 'capabilities' && (
                        <div className="space-y-1 pb-3 pl-2">
                          {capabilities.map((c) => {
                            const IconC = c.icon;
                            return (
                              <Link
                                key={c.title}
                                to={c.path}
                                onClick={closeAll}
                                className="group flex items-start gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-neutral-50"
                              >
                                <IconC className="mt-0.5 h-4 w-4 shrink-0 text-[#233DFF]" />
                                <span>
                                  <span className="block text-sm font-semibold text-neutral-700 group-hover:text-[#233DFF]">
                                    {c.title}
                                  </span>
                                  <span className="block text-[11px] text-neutral-400 leading-snug">{c.desc}</span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Industry Focus Sub */}
                    <div>
                      <button
                        type="button"
                        onClick={() => setMobileSubsection(mobileSubsection === 'industries' ? null : 'industries')}
                        className="flex w-full items-center justify-between py-3 text-sm font-bold text-neutral-800"
                      >
                        <span>Industry Focus</span>
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${mobileSubsection === 'industries' ? 'rotate-90 text-[#233DFF]' : 'text-neutral-400'}`}
                        />
                      </button>
                      {mobileSubsection === 'industries' && (
                        <div className="space-y-1 pb-3 pl-2">
                          {industries.map((ind) => {
                            const IconC = ind.icon;
                            return (
                              <Link
                                key={ind.title}
                                to={ind.path}
                                onClick={closeAll}
                                className="group flex items-center gap-3 rounded-xl px-2 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-[#233DFF]"
                              >
                                <IconC className="h-4 w-4 text-[#233DFF]" />
                                <span>{ind.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Engagement Models Sub */}
                    <div>
                      <button
                        type="button"
                        onClick={() => setMobileSubsection(mobileSubsection === 'engagement' ? null : 'engagement')}
                        className="flex w-full items-center justify-between py-3 text-sm font-bold text-neutral-800"
                      >
                        <span>Engagement Models</span>
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${mobileSubsection === 'engagement' ? 'rotate-90 text-[#233DFF]' : 'text-neutral-400'}`}
                        />
                      </button>
                      {mobileSubsection === 'engagement' && (
                        <div className="space-y-1 pb-3 pl-2">
                          {engagementModels.map((em) => {
                            const IconC = em.icon;
                            return (
                              <Link
                                key={em.title}
                                to={em.path}
                                onClick={closeAll}
                                className="flex items-center gap-3 rounded-xl px-2 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-[#233DFF]"
                              >
                                <IconC className="h-4 w-4 text-[#233DFF]" />
                                <span>{em.title}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Section 2: Who We Are */}
            <section className="border-b border-neutral-100 pb-2">
              <button
                type="button"
                onClick={() => setMobileSection(mobileSection === 'who-we-are' ? null : 'who-we-are')}
                aria-expanded={mobileSection === 'who-we-are'}
                className={`flex w-full items-center justify-between py-4 text-left text-lg font-bold transition-colors ${
                  mobileSection === 'who-we-are' ? 'text-[#233DFF]' : 'text-neutral-900 hover:text-[#233DFF]'
                }`}
              >
                <span>Who We Are</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    mobileSection === 'who-we-are' ? 'rotate-180 text-[#233DFF]' : 'text-neutral-400'
                  }`}
                />
              </button>

              {mobileSection === 'who-we-are' && (
                <div className="pb-4 divide-y divide-neutral-100">
                  {/* Company Sub */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileSubsection(mobileSubsection === 'company' ? null : 'company')}
                      className="flex w-full items-center justify-between py-3 text-sm font-bold text-neutral-800"
                    >
                      <span>Company</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${mobileSubsection === 'company' ? 'rotate-90 text-[#233DFF]' : 'text-neutral-400'}`}
                      />
                    </button>
                    {mobileSubsection === 'company' && (
                      <div className="space-y-1 pb-3 pl-2">
                        {company.map((item) => (
                          <Link
                            key={item.title}
                            to={item.path}
                            onClick={closeAll}
                            className="group block rounded-xl px-2 py-2 hover:bg-neutral-50"
                          >
                            <span className="text-sm font-semibold text-neutral-700 group-hover:text-[#233DFF]">
                              {item.title}
                            </span>
                            <span className="block text-[11px] text-neutral-400 leading-snug">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Principles Sub */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileSubsection(mobileSubsection === 'principles' ? null : 'principles')}
                      className="flex w-full items-center justify-between py-3 text-sm font-bold text-neutral-800"
                    >
                      <span>Principles & Approach</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${mobileSubsection === 'principles' ? 'rotate-90 text-[#233DFF]' : 'text-neutral-400'}`}
                      />
                    </button>
                    {mobileSubsection === 'principles' && (
                      <div className="space-y-1 pb-3 pl-2">
                        {principles.map((item) => (
                          <Link
                            key={item.title}
                            to={item.path}
                            onClick={closeAll}
                            className="group block rounded-xl px-2 py-2 hover:bg-neutral-50"
                          >
                            <span className="text-sm font-semibold text-neutral-700 group-hover:text-[#233DFF]">
                              {item.title}
                            </span>
                            <span className="block text-[11px] text-neutral-400 leading-snug">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Ecosystem Sub */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileSubsection(mobileSubsection === 'ecosystem' ? null : 'ecosystem')}
                      className="flex w-full items-center justify-between py-3 text-sm font-bold text-neutral-800"
                    >
                      <span>Ecosystem</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${mobileSubsection === 'ecosystem' ? 'rotate-90 text-[#233DFF]' : 'text-neutral-400'}`}
                      />
                    </button>
                    {mobileSubsection === 'ecosystem' && (
                      <div className="space-y-1 pb-3 pl-2">
                        {ecosystem.map((item) => (
                          <Link
                            key={item.title}
                            to={item.path}
                            onClick={closeAll}
                            className="group block rounded-xl px-2 py-2 hover:bg-neutral-50"
                          >
                            <span className="text-sm font-semibold text-neutral-700 group-hover:text-[#233DFF]">
                              {item.title}
                            </span>
                            <span className="block text-[11px] text-neutral-400 leading-snug">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </section>

            {/* Section 3: What We Think */}
            <section className="border-b border-neutral-100 pb-2">
              <button
                type="button"
                onClick={() => setMobileSection(mobileSection === 'what-we-think' ? null : 'what-we-think')}
                aria-expanded={mobileSection === 'what-we-think'}
                className={`flex w-full items-center justify-between py-4 text-left text-lg font-bold transition-colors ${
                  mobileSection === 'what-we-think' ? 'text-[#233DFF]' : 'text-neutral-900 hover:text-[#233DFF]'
                }`}
              >
                <span>What We Think</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    mobileSection === 'what-we-think' ? 'rotate-180 text-[#233DFF]' : 'text-neutral-400'
                  }`}
                />
              </button>

              {mobileSection === 'what-we-think' && (
                <div className="pb-4 divide-y divide-neutral-100">
                  {/* Perspectives Sub */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileSubsection(mobileSubsection === 'perspectives' ? null : 'perspectives')}
                      className="flex w-full items-center justify-between py-3 text-sm font-bold text-neutral-800"
                    >
                      <span>Perspectives</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${mobileSubsection === 'perspectives' ? 'rotate-90 text-[#233DFF]' : 'text-neutral-400'}`}
                      />
                    </button>
                    {mobileSubsection === 'perspectives' && (
                      <div className="space-y-1 pb-3 pl-2">
                        {perspectives.map((item) => (
                          <Link
                            key={item.title}
                            to={item.path}
                            onClick={closeAll}
                            className="group block rounded-xl px-2 py-2 hover:bg-neutral-50"
                          >
                            <span className="text-sm font-semibold text-neutral-700 group-hover:text-[#233DFF]">
                              {item.title}
                            </span>
                            <span className="block text-[11px] text-neutral-400 leading-snug">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Case Studies Sub */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileSubsection(mobileSubsection === 'case-studies' ? null : 'case-studies')}
                      className="flex w-full items-center justify-between py-3 text-sm font-bold text-neutral-800"
                    >
                      <span>Case Studies</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${mobileSubsection === 'case-studies' ? 'rotate-90 text-[#233DFF]' : 'text-neutral-400'}`}
                      />
                    </button>
                    {mobileSubsection === 'case-studies' && (
                      <div className="space-y-1 pb-3 pl-2">
                        <Link
                          to="/case-studies"
                          onClick={closeAll}
                          className="group flex items-center justify-between rounded-xl px-2 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-[#233DFF]"
                        >
                          <span>Explore our work</span>
                          <ArrowRight className="h-4 w-4 text-[#233DFF] transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Resources Sub */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileSubsection(mobileSubsection === 'resources' ? null : 'resources')}
                      className="flex w-full items-center justify-between py-3 text-sm font-bold text-neutral-800"
                    >
                      <span>Resources</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform ${mobileSubsection === 'resources' ? 'rotate-90 text-[#233DFF]' : 'text-neutral-400'}`}
                      />
                    </button>
                    {mobileSubsection === 'resources' && (
                      <div className="space-y-1 pb-3 pl-2">
                        <Link
                          to="/case-studies"
                          onClick={closeAll}
                          className="block rounded-xl px-2 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-[#233DFF]"
                        >
                          Cloud Cost Review Workbook
                        </Link>
                        <Link
                          to="/case-studies"
                          onClick={closeAll}
                          className="flex items-center justify-between rounded-xl px-2 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 hover:text-[#233DFF]"
                        >
                          <span>Browse Resources</span>
                          <ArrowRight className="h-4 w-4 text-[#233DFF]" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </section>

            {/* Mobile Footer CTA */}
            <div className="mt-4 border-t border-neutral-100 pb-6 pt-5">
              <button
                type="button"
                onClick={() => {
                  closeAll();
                  onOpenModal();
                }}
                className="flex w-full items-center justify-center rounded-xl bg-[#233DFF] py-3 text-center text-sm font-bold text-white shadow-lg shadow-blue-500/10 transition-all hover:bg-blue-700"
              >
                Talk To Us
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
