import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu,
  ArrowRight,
  ShieldAlert,
  Zap,
  Activity,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Radio,
  HardDrive,
  Terminal,
  Server,
  Settings,
  Eye,
  Microchip,
  Truck,
  Box
} from 'lucide-react';
import Accordion from '../components/Accordion';

export default function EmbeddedSystems({ onOpenModal }) {
  useEffect(() => {
    document.title = "AI Embedded Systems & IoT Design Services | VisualSoft Global";
    window.scrollTo(0, 0);
  }, []);

  const pitfalls = [
    {
      title: 'Hardware and software built in isolation',
      desc: 'When circuit design and code are developed separately, integration problems surface late and push back launch dates.'
    },
    {
      title: 'Code that ignores the hardware',
      desc: "Memory leaks, timing delays and power drain usually trace back to firmware that wasn't designed around the chip it runs on."
    },
    {
      title: 'Rushed validation',
      desc: 'Skipping bench and field testing is how defects reach customers, where fixes cost far more.'
    }
  ];

  const services = [
    { num: '01', title: 'Custom Firmware Development', text: 'Write bare-metal and RTOS-based firmware for MCUs, SoCs, and microprocessors tailored to your hardware architecture' },
    { num: '02', title: 'Device Driver Development', text: 'Develop low-level drivers for audio, video, display, storage, connectivity, and custom peripherals' },
    { num: '03', title: 'RTOS Integration & Porting', text: 'Integrate FreeRTOS, Zephyr, QNX, VxWorks, and ThreadX, and port existing software to new RTOS environments' },
    { num: '04', title: 'IoT Firmware & Connectivity', text: 'Enable wireless protocols, BLE, Wi-Fi, Zigbee, Matter with secure OTA update capability' },
    { num: '05', title: 'System Integration & Validation', text: 'Hardware, firmware and AI brought together and tested for reliable performance.' },
    { num: '06', title: 'Embedded Security Solutions', text: 'Implement secure boot, firmware signing, encrypted communication, and runtime anomaly detection' },
    { num: '07', title: 'Embedded AI & Edge Computing', text: 'Deploy ML models on edge devices with TensorFlow Lite, optimized for power-constrained environments' },
    { num: '08', title: 'Lifecycle Support', text: 'Maintenance, updates and optimization after launch, including over-the-air updates.' },
    { num: '09', title: 'Hardware-in-the-Loop (HIL) Testing', text: 'Validate embedded systems in simulated real-world environments before physical prototyping' }
  ];

  const edgeAiPoints = [
    'Real-time monitoring and predictive maintenance on sensor data',
    'Smart machine control and autonomous decisions',
    'On-device diagnostics and patient monitoring',
    'Detection and recognition from camera feeds',
    'Local processing that keeps sensitive data on the device'
  ];

  const useCases = [
    { title: 'Industrial Automation & Manufacturing', desc: 'Real-time monitoring, predictive maintenance and smart machine control.' },
    { title: 'IoT Devices & Smart Products', desc: 'Intelligent sensors and connected devices that act on their own data.' },
    { title: 'Robotics & Drones', desc: 'On-board decision-making, navigation and autonomous control.' },
    { title: 'Healthcare & Medical Devices', desc: 'On-device diagnostics, biosensor telemetry, and patient monitoring.' },
    { title: 'Smart Infrastructure & Smart Cities', desc: 'Urban sensors, traffic optimization and real-time environmental analytics.' },
    { title: 'Security & Surveillance', desc: 'Camera-based detection such as ANPR license recognition and perimeter alerts.' }
  ];

  const techCategories = [
    { category: 'Operating Systems', items: ['FreeRTOS', 'Zephyr', 'Embedded Linux', 'Android AOSP', 'ThreadX'] },
    { category: 'Processors & Platforms', items: ['ARM Cortex', 'STM32', 'NXP i.MX', 'Qualcomm', 'Texas Instruments', 'Nordic nRF', 'ESP32', 'Raspberry Pi CM'] },
    { category: 'Programming Languages', items: ['C', 'C++', 'Assembly', 'Python', 'Rust'] },
    { category: 'Connectivity Protocols', items: ['BLE', 'Wi-Fi', 'Zigbee', 'Z-Wave', 'Matter', 'CAN Bus', 'MODBUS', 'MQTT', 'NB-IoT'] },
    { category: 'Build & Dev Tools', items: ['JTAG', 'GDB', 'Eclipse', 'VS Code', 'Segger', 'OpenOCD'] },
    { category: 'Cloud Integration', items: ['AWS IoT Core', 'Azure IoT Hub', 'Google Cloud IoT'] }
  ];

  const processSteps = [
    { step: '1. Requirements & Constraints', what: 'We capture goals, hardware limits, power and environment needs.', receive: 'Requirements specification' },
    { step: '2. Architecture & Component Selection', what: 'We choose the processor, OS, sensors and AI approach.', receive: 'System architecture and parts list' },
    { step: '3. Firmware & Model Development', what: 'We build and test the firmware and on-device AI.', receive: 'Source code and tested firmware' },
    { step: '4. Hardware Integration', what: 'Software is brought up on real hardware.', receive: 'Integrated working build' },
    { step: '5. Validation & Field Testing', what: 'Functional, stress and real-condition testing.', receive: 'Test reports' },
    { step: '6. Deployment & Support', what: 'Release, monitoring and updates.', receive: 'Release package and maintenance plan' }
  ];

  const reasons = [
    'Hardware, software and AI under one team: fewer handoffs and fewer late surprises.',
    'Built for real constraints: memory, power, timing and heat are designed in, not discovered later.',
    'Security from the start: not added after the hardware is final.',
    'Support after launch: monitoring, updates and optimization.',
    'Dedicated in-house engineering team.'
  ];

  const faqs = [
    {
      question: 'What is AI embedded system design?',
      answer: 'It is the process of integrating AI algorithms into embedded devices, enabling real-time decision-making, predictive analytics and autonomous operation without relying on cloud connectivity.'
    },
    {
      question: 'How do AI and IoT work together?',
      answer: 'IoT sensors collect data and AI models analyze it to automate actions, predict outcomes and improve system performance. In simple terms: IoT connects devices, and AI makes them smart.'
    },
    {
      question: 'What are the types of embedded systems?',
      answer: 'They range from simple microcontroller-based devices to advanced AI-powered systems: small-scale systems (appliances, meters), medium-scale systems (automotive sensors, smart devices), real-time systems using an RTOS, AI-embedded systems (drones, robotics, vision devices) and IoT-embedded systems connected to the cloud or edge.'
    },
    {
      question: 'What is the role of AI in the Internet of Things (IoT)?',
      answer: 'AI adds intelligence to connected devices by analyzing data in real time. With models running on microcontrollers, edge processors or the cloud, devices can detect patterns, make predictions and automate tasks, enabling applications such as predictive maintenance and Industry 4.0 automation.'
    },
    {
      question: 'How secure are embedded systems and IoT devices?',
      answer: 'Connected devices face risks such as unauthorized access, data breaches and firmware attacks. Security techniques include encrypted communication, secure boot, real-time monitoring and AI-powered threat detection, built into the architecture from the start.'
    },
    {
      question: 'Do you provide support after deployment?',
      answer: 'Yes. We offer ongoing maintenance, updates and optimization so your embedded AI systems keep performing at their best.'
    },
    {
      question: 'Can you work with hardware we already have?',
      answer: 'Yes. We can review your current hardware and design the firmware and AI to fit its limits.'
    },
    {
      question: 'Should AI run on the device or in the cloud?',
      answer: 'It depends on latency, connectivity, cost and privacy. Edge AI suits real-time, offline or sensitive-data use; the cloud suits heavy training and analytics. Many products use both.'
    },
    {
      question: 'Who owns the code and designs?',
      answer: 'You own 100% of the firmware, designs and documentation produced for your project.'
    },
    {
      question: 'How long does an embedded project take?',
      answer: 'It depends on complexity: a prototype can take weeks, while a production-ready device takes longer. After discovery we provide a milestone plan.'
    },
    {
      question: 'Can you take a product from prototype to production?',
      answer: 'Yes. We provide complete production handoff, manufacturing partner liaison, test fixture development, and field validation support.'
    }
  ];

  return (
    <div className="embedded-systems-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="app-container">
          <span className="page-hero-label">Embedded Systems & IoT</span>
          <div className="title-aura-container">
            <div className="title-aura" />
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 4rem)' }}>
              AI-Enabled Embedded System <span className="text-gradient-brand">Design for Smarter Devices</span>
            </h1>
          </div>

          <p className="hero-description" style={{ maxWidth: '840px' }}>
            We design embedded systems with intelligence on the device itself. Hardware, firmware, connectivity and edge AI are engineered together, so your product can sense, decide and act in real time, with or without a cloud connection.
          </p>

          <div className="hero-cta-group">
            <Link to="/contactus" className="glass-button-primary">
              <span>Discuss Your Device</span>
              <ArrowRight size={18} />
            </Link>
            <a href="#process" className="glass-button-secondary">
              <span>See How We Work</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2: Where embedded projects go wrong */}
      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <AlertTriangle size={14} style={{ color: 'var(--neon-amber)' }} />
              <span>WHERE EMBEDDED PROJECTS GO WRONG</span>
            </div>
            <h2 className="section-title">
              Three Problems We <span className="text-gradient-brand">Design Around</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {pitfalls.map((p, i) => (
              <div key={i} className="glass-panel" style={{ padding: '32px' }}>
                <div className="icon-box-blur" style={{ marginBottom: '18px' }}>
                  <div className="icon-blur-halo halo-amber" />
                  <AlertTriangle size={24} style={{ color: 'var(--neon-amber)' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why AI on the device changes the design */}
      <section className="section-spacing" style={{ background: 'rgba(3, 7, 23, 0.7)' }}>
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '48px', position: 'relative' }}>
            <div className="icon-blur-halo halo-brand-blue" style={{ width: '220px', height: '220px', top: '20px', right: '20px' }} />
            <div className="glass-pill" style={{ marginBottom: '16px' }}>
              <Zap size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>INTELLIGENCE WHERE DATA IS CREATED</span>
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.2rem' }}>
              Why AI on the Device <span className="text-gradient-brand">Changes the Design</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '920px' }}>
              Running AI models directly on the device, known as edge AI, cuts response time, keeps products working when the network drops, lowers cloud costs and keeps sensitive data local. It also means the model has to fit tight limits on memory, power and processing, which is why hardware, firmware and AI need to be designed together.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Our embedded system services (01 to 09) */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Cpu size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>CORE HARDWARE & FIRMWARE SERVICES</span>
            </div>
            <h2 className="section-title">
              Our Embedded <span className="text-gradient-brand">System Services</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {services.map((srv) => (
              <div key={srv.num} className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                <span className="capability-number">{srv.num}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  {srv.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginTop: 'auto' }}>
                  {srv.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Edge AI - What it can do */}
      <section className="section-spacing" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Activity size={14} style={{ color: 'var(--neon-emerald)' }} />
              <span>EDGE INFERENCE</span>
            </div>
            <h2 className="section-title">
              What AI on the Device <span className="text-gradient-brand">Can Do</span>
            </h2>
          </div>

          <div className="glass-panel" style={{ padding: '36px', maxWidth: '880px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {edgeAiPoints.map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div className="pulse-dot" style={{ background: 'var(--brand-blue)', boxShadow: '0 0 10px var(--brand-blue)' }} />
                  <span style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Use Cases */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Layers size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>WHERE WE APPLY IT</span>
            </div>
            <h2 className="section-title">
              Proven Embedded <span className="text-gradient-brand">Use Cases</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {useCases.map((uc, i) => (
              <div key={i} className="glass-panel" style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  {uc.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Technologies */}
      <section className="section-spacing" style={{ background: 'rgba(3, 7, 23, 0.6)' }}>
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Terminal size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>HARDWARE, PROTOCOLS & TOOLCHAINS</span>
            </div>
            <h2 className="section-title">
              Platforms and Tools <span className="text-gradient-brand">We Work With</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {techCategories.map((cat, i) => (
              <div key={i} className="glass-panel tech-cat-card">
                <div className="tech-cat-title">
                  <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                  <span>{cat.category}</span>
                </div>
                <div className="tech-pill-list">
                  {cat.items.map((it, idx) => (
                    <span key={idx} className="tech-pill">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Process (anchor ID: process) */}
      <section id="process" className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Settings size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>FROM CONCEPT TO A WORKING DEVICE</span>
            </div>
            <h2 className="section-title">
              The Engineering <span className="text-gradient-brand">Process</span>
            </h2>
          </div>

          <div className="process-steps-grid">
            {processSteps.map((ps, i) => (
              <div key={i} className="glass-panel step-card">
                <span className="step-pill">Phase 0{i + 1}</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  {ps.step}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {ps.what}
                </p>
                <div className="deliverable-tag">
                  <CheckCircle2 size={14} style={{ color: 'var(--brand-blue)' }} />
                  <span>Deliverable: {ps.receive}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Why VisualSoft */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <ShieldAlert size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>THE VISUALSOFT ADVANTAGE</span>
            </div>
            <h2 className="section-title">
              Why Teams Choose Us for <span className="text-gradient-brand">Embedded AI</span>
            </h2>
          </div>

          <div className="glass-panel" style={{ padding: '40px', maxWidth: '860px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {reasons.map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <CheckCircle2 size={22} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '1.05rem', color: '#fff', lineHeight: 1.6 }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: FAQs (Accordion) */}
      <section className="section-spacing">
        <div className="app-container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <h2 className="section-title">
              Frequently Asked <span className="text-gradient-brand">Questions</span>
            </h2>
          </div>

          <Accordion items={faqs} />
        </div>
      </section>

      {/* Section 12: Closing CTA */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '60px 40px', textAlign: 'center', position: 'relative' }}>
            <div className="icon-blur-halo halo-brand-blue" style={{ width: '300px', height: '300px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '16px' }}>
              Ready to Build a Smarter Device?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto 36px auto', lineHeight: 1.7 }}>
              Tell us about your device idea, constraints and target users, and we'll recommend an architecture and next steps.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contactus" className="glass-button-primary">
                <span>Discuss Your Device</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/case-studies" className="glass-button-secondary">
                <span>View Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
