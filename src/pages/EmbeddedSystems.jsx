import React, { useEffect, useState } from 'react';
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
  Box,
  ChevronRight,
  Sparkles,
  Bluetooth,
  Wifi,
  Share2,
  Cloud,
  Code,
  Code2,
  Binary,
  FileCode,
  Bug,
  Wrench,
  Database,
  Smartphone,
  Shield,
  Boxes
} from 'lucide-react';
import {
  SiLinux,
  SiAndroid,
  SiArm,
  SiStmicroelectronics,
  SiNxp,
  SiQualcomm,
  SiNordicsemiconductor,
  SiEspressif,
  SiRaspberrypi,
  SiC,
  SiCplusplus,
  SiAssemblyscript,
  SiPython,
  SiRust,
  SiBluetooth,
  SiZigbee,
  SiMqtt,
  SiMatterdotjs,
  SiEclipseide,
  SiGooglecloud
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { TbBrandAzure, TbBrandVscode } from 'react-icons/tb';
import Accordion from '../components/Accordion';

export default function EmbeddedSystems({ onOpenModal }) {
  const [activeTechTab, setActiveTechTab] = useState('os');

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
    { num: '01', title: 'Custom Firmware Development', text: 'Write bare-metal and RTOS-based firmware for MCUs, SoCs, and microprocessors tailored to your hardware architecture.' },
    { num: '02', title: 'Device Driver Development', text: 'Develop low-level drivers for audio, video, display, storage, connectivity, and custom peripherals.' },
    { num: '03', title: 'RTOS Integration & Porting', text: 'Integrate FreeRTOS, Zephyr, QNX, VxWorks, and ThreadX, and port existing software to new RTOS environments.' },
    { num: '04', title: 'IoT Firmware & Connectivity', text: 'Enable wireless protocols, BLE, Wi-Fi, Zigbee, Matter with secure OTA update capability.' },
    { num: '05', title: 'System Integration & Validation', text: 'Hardware, firmware and AI brought together and tested for reliable performance.' },
    { num: '06', title: 'Embedded Security Solutions', text: 'Implement secure boot, firmware signing, encrypted communication, and runtime anomaly detection.' },
    { num: '07', title: 'Embedded AI & Edge Computing', text: 'Deploy ML models on edge devices with TensorFlow Lite, optimized for power-constrained environments.' },
    { num: '08', title: 'Lifecycle Support', text: 'Maintenance, updates and optimization after launch, including over-the-air updates.' },
    { num: '09', title: 'Hardware-in-the-Loop (HIL) Testing', text: 'Validate embedded systems in simulated real-world environments before physical prototyping.' }
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
    {
      id: 'os',
      category: 'Operating Systems',
      icon: Cpu,
      tagline: 'Deterministic Real-Time Kernels & Embedded OS',
      description: 'Hard real-time scheduling, memory management, and deterministic execution for mission-critical embedded devices.',
      items: [
        { name: 'FreeRTOS', subtitle: 'Real-Time Kernel', icon: Cpu, color: '#38bdf8' },
        { name: 'Zephyr', subtitle: 'Open Source RTOS', icon: Activity, color: '#2dd4bf' },
        { name: 'Embedded Linux', subtitle: 'Custom Yocto & Buildroot', icon: SiLinux, color: '#facc15' },
        { name: 'Android AOSP', subtitle: 'Custom BSP & HAL', icon: SiAndroid, color: '#3ddc84' },
        { name: 'ThreadX', subtitle: 'Azure RTOS Kernel', icon: Layers, color: '#818cf8' }
      ]
    },
    {
      id: 'processors',
      category: 'Processors & MCUs',
      icon: SiArm,
      tagline: 'Silicon & Edge Architecture Selection',
      description: 'Optimized silicon matching clock speed, power budget, flash footprint, and peripheral interfaces.',
      items: [
        { name: 'ARM Cortex', subtitle: 'M0+ / M4 / M7 / A-Series', icon: SiArm, color: '#0091bd' },
        { name: 'STM32', subtitle: 'STMicroelectronics MCUs', icon: SiStmicroelectronics, color: '#03234b' },
        { name: 'NXP i.MX', subtitle: 'Application Processors', icon: SiNxp, color: '#f97316' },
        { name: 'Qualcomm', subtitle: 'Snapdragon Edge IoT', icon: SiQualcomm, color: '#3253dc' },
        { name: 'Texas Instruments', subtitle: 'MSP430 & Sitara Processors', icon: Cpu, color: '#ef4444' },
        { name: 'Nordic nRF', subtitle: 'Ultra Low-Power Multiprotocol', icon: SiNordicsemiconductor, color: '#00a9ce' },
        { name: 'ESP32', subtitle: 'Dual-Core Wi-Fi & BLE SoCs', icon: SiEspressif, color: '#e7352c' },
        { name: 'Raspberry Pi CM', subtitle: 'Industrial Compute Modules', icon: SiRaspberrypi, color: '#c51a4a' }
      ]
    },
    {
      id: 'languages',
      category: 'Languages',
      icon: SiCplusplus,
      tagline: 'Low-Level & Memory-Safe Languages',
      description: 'Bare-metal C and modern memory-safe languages engineered for zero-overhead performance.',
      items: [
        { name: 'C', subtitle: 'Bare-Metal & Device Drivers', icon: SiC, color: '#a8b9cc' },
        { name: 'C++', subtitle: 'Modern Embedded OOP', icon: SiCplusplus, color: '#00599c' },
        { name: 'Assembly', subtitle: 'Bootloaders & Fast ISRs', icon: SiAssemblyscript, color: '#007aac' },
        { name: 'Python', subtitle: 'Edge Scripting & MicroPython', icon: SiPython, color: '#3776ab' },
        { name: 'Rust', subtitle: 'Memory-Safe Embedded Firmware', icon: SiRust, color: '#dea584' }
      ]
    },
    {
      id: 'protocols',
      category: 'Connectivity Protocols',
      icon: Radio,
      tagline: 'Industrial & Wireless Fieldbuses',
      description: 'Fault-tolerant communication stacks spanning short-range mesh, cellular, and noisy industrial buses.',
      items: [
        { name: 'BLE', subtitle: 'Bluetooth 5.3 Low Energy', icon: SiBluetooth, color: '#0082fc' },
        { name: 'Wi-Fi', subtitle: '802.11 ax/b/g/n Connectivity', icon: Wifi, color: '#10b981' },
        { name: 'Zigbee', subtitle: 'Low-Power Mesh Networking', icon: SiZigbee, color: '#eb144c' },
        { name: 'Z-Wave', subtitle: 'Smart Home Sub-GHz RF', icon: Radio, color: '#14b8a6' },
        { name: 'Matter', subtitle: 'Unified Smart Device Standard', icon: SiMatterdotjs, color: '#149e9c' },
        { name: 'CAN Bus', subtitle: 'Automotive & Industrial CAN-FD', icon: Activity, color: '#ef4444' },
        { name: 'MODBUS', subtitle: 'RTU & TCP SCADA Protocols', icon: HardDrive, color: '#6366f1' },
        { name: 'MQTT', subtitle: 'Lightweight IoT Pub/Sub', icon: SiMqtt, color: '#660066' },
        { name: 'NB-IoT', subtitle: 'Narrowband Cellular Telemetry', icon: Radio, color: '#38bdf8' }
      ]
    },
    {
      id: 'tools',
      category: 'Build & Dev Tools',
      icon: TbBrandVscode,
      tagline: 'Benchtop Hardware Debugging & Toolchains',
      description: 'In-circuit emulation, register-level debugging, automated flashing, and CI/CD firmware pipelines.',
      items: [
        { name: 'JTAG', subtitle: 'Boundary Scan & In-System Debug', icon: Settings, color: '#06b6d4' },
        { name: 'GDB', subtitle: 'GNU Hardware Debugger', icon: Bug, color: '#f43f5e' },
        { name: 'Eclipse', subtitle: 'Embedded CDT IDE', icon: SiEclipseide, color: '#2c2255' },
        { name: 'VS Code', subtitle: 'PlatformIO & Cortex-Debug', icon: TbBrandVscode, color: '#007acc' },
        { name: 'Segger', subtitle: 'J-Link & Ozone Debug Tools', icon: Wrench, color: '#f59e0b' },
        { name: 'OpenOCD', subtitle: 'On-Chip Debugger Server', icon: Terminal, color: '#10b981' }
      ]
    },
    {
      id: 'cloud',
      category: 'Cloud Integration',
      icon: FaAws,
      tagline: 'Secure Over-The-Air & Telemetry Hubs',
      description: 'End-to-end device identity provisioning, cryptographic handshakes, dynamic digital twins, and remote OTA updates.',
      items: [
        { name: 'AWS IoT Core', subtitle: 'Device Shadow & Greengrass', icon: FaAws, color: '#ff9900' },
        { name: 'Azure IoT Hub', subtitle: 'DPS Provisioning & Edge', icon: TbBrandAzure, color: '#0078d4' },
        { name: 'Google Cloud IoT', subtitle: 'Dataflow & Cloud Pub/Sub', icon: SiGooglecloud, color: '#4285f4' }
      ]
    }
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
      {/* Hero Section (Revamped Two-Column Split) */}
      <section className="service-hero-section">
        <div className="app-container">
          <div className="service-hero-split">
            {/* Left Content */}
            <div>
              <div className="hero-pill-badge">
                <div className="glass-pill">
                  <span className="pulse-dot" />
                  <span style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>EMBEDDED SYSTEMS & IOT</span>
                </div>
              </div>

              <div className="title-aura-container">
                <div className="title-aura" />
                <h1 className="hero-title service-hero-title">
                  AI-Enabled Embedded System <span className="text-gradient-brand">Design for Smarter Devices</span>
                </h1>
              </div>

              <p className="hero-description">
                We design embedded systems with intelligence on the device itself. Hardware, firmware, connectivity and edge AI are engineered together, so your product senses, decides, and acts in real time with or without cloud connectivity.
              </p>

              <div className="hero-cta-group">
                <Link to="/contactus" className="glass-button-primary">
                  <span>Discuss Your Device</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#process" className="glass-button-secondary">
                  <span>See How We Work</span>
                  <ChevronRight size={16} />
                </a>
              </div>

              <div className="hero-trust-badges">
                <div className="trust-badge-item">
                  <CheckCircle2 size={16} style={{ color: 'var(--brand-blue)' }} />
                  <span>Hardware & Code Co-Designed</span>
                </div>
                <div className="trust-badge-item">
                  <CheckCircle2 size={16} style={{ color: 'var(--neon-emerald)' }} />
                  <span>Sub-Millisecond On-Device Inference</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Hardware Schematic Matrix */}
            <div>
              <div className="hardware-schematic-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f5a0', boxShadow: '0 0 8px #00f5a0' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#6ee7b7', fontWeight: 600 }}>
                      Edge Hardware Topology v3.8
                    </span>
                  </div>
                  <span className="glass-pill" style={{ fontSize: '0.72rem', padding: '2px 8px', color: '#00f5a0' }}>
                    Active Telemetry
                  </span>
                </div>

                {/* MCU Chip Representation */}
                <div className="mcu-chip-box">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Cpu size={22} style={{ color: 'var(--brand-blue)' }} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>
                      ARM Cortex / STM32 Edge MCU
                    </span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#93c5fd', fontFamily: 'var(--font-mono)' }}>
                    RTOS Kernel • TensorFlow Lite Micro • Quantized INT8
                  </span>
                </div>

                {/* Hardware Telemetry Specs */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', margin: '14px 0' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 8px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Power</span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-blue)' }}>&lt; 1.8W</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 8px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Latency</span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#38bdf8' }}>4.2ms</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 8px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Security</span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#00f5a0' }}>Encrypted</span>
                  </div>
                </div>

                {/* Sensor Pinout Grid */}
                <div className="sensor-pins-grid">
                  <div className="pin-item">
                    <Radio size={14} style={{ color: 'var(--brand-blue)' }} />
                    <span>BLE 5.3 & Matter</span>
                  </div>
                  <div className="pin-item">
                    <Activity size={14} style={{ color: '#38bdf8' }} />
                    <span>CAN / MODBUS Bus</span>
                  </div>
                  <div className="pin-item">
                    <Eye size={14} style={{ color: '#c084fc' }} />
                    <span>Camera Video Stream</span>
                  </div>
                  <div className="pin-item">
                    <Zap size={14} style={{ color: '#ffaa00' }} />
                    <span>Low-Power Sleep Wake</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Where embedded projects go wrong (High-Impact Danger Cards) */}
      <section className="section-spacing section-alt-contrast">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag" style={{ borderColor: 'rgba(255, 170, 0, 0.4)' }}>
              <AlertTriangle size={14} style={{ color: 'var(--neon-amber)' }} />
              <span>WHERE EMBEDDED PROJECTS GO WRONG</span>
            </div>
            <h2 className="section-title">
              Three Problems We <span className="text-gradient-brand">Design Around</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {pitfalls.map((p, i) => (
              <div key={i} className="problem-card-danger">
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
      <section className="section-spacing">
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

      {/* Section 4: Our embedded system services (01 to 09) (Alternating Luminous Contrast Section) */}
      <section className="section-spacing section-alt-contrast">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Cpu size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>OUR SERVICES</span>
            </div>
            <h2 className="section-title">
              Our Embedded <span className="text-gradient-brand">System Services</span>
            </h2>
          </div>

          <div className="grid-cols-auto">
            {services.map((srv) => (
              <div key={srv.num} className="capability-card-pro">
                <span className="capability-num-tag">{srv.num}</span>
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
      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Activity size={14} style={{ color: 'var(--neon-emerald)' }} />
              <span>EDGE AI CAPABILITIES</span>
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

      {/* Section 6: Use Cases (Alternating Luminous Contrast Section) */}
      <section className="section-spacing section-alt-contrast">
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
      <section className="section-spacing">
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

          {/* Interactive Category Tabs Navigation */}
          <div className="tech-tabs-nav">
            <button
              type="button"
              className={`tech-tab-btn ${activeTechTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTechTab('all')}
            >
              <Sparkles size={16} style={{ color: activeTechTab === 'all' ? '#00f5a0' : 'inherit' }} />
              <span>All Platforms</span>
              <span className="tech-tab-count">36</span>
            </button>

            {techCategories.map((cat) => {
              const TabIcon = cat.icon;
              const isActive = activeTechTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`tech-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTechTab(cat.id)}
                >
                  <TabIcon size={16} style={{ color: isActive ? 'var(--brand-blue)' : 'inherit' }} />
                  <span>{cat.category}</span>
                  <span className="tech-tab-count">{cat.items.length}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          {activeTechTab === 'all' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {techCategories.map((cat) => {
                const CatIcon = cat.icon;
                return (
                  <div key={cat.id} className="tech-tab-panel">
                    <div className="tech-tab-panel-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div className="tech-card-icon" style={{ width: '48px', height: '48px', background: 'rgba(35, 79, 246, 0.12)', borderColor: 'rgba(35, 79, 246, 0.3)', color: 'var(--brand-blue)' }}>
                          <CatIcon size={22} />
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                              {cat.category}
                            </h3>
                            <span className="glass-pill" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                              {cat.items.length} Supported
                            </span>
                          </div>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', marginTop: '4px', maxWidth: '650px', lineHeight: 1.5 }}>
                            {cat.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="tech-cards-grid">
                      {cat.items.map((it, idx) => {
                        const IconComp = it.icon;
                        return (
                          <div key={idx} className="tech-item-card">
                            <div className="tech-card-icon" style={{ color: it.color }}>
                              <IconComp size={20} />
                            </div>
                            <div className="tech-card-info">
                              <span className="tech-card-name">{it.name}</span>
                              <span className="tech-card-sub">{it.subtitle}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            (() => {
              const currentCat = techCategories.find((c) => c.id === activeTechTab);
              if (!currentCat) return null;
              const CatIcon = currentCat.icon;
              return (
                <div className="tech-tab-panel" key={currentCat.id}>
                  <div className="tech-tab-panel-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div className="tech-card-icon" style={{ width: '52px', height: '52px', background: 'rgba(35, 79, 246, 0.15)', borderColor: 'rgba(35, 79, 246, 0.35)', color: 'var(--brand-blue)' }}>
                        <CatIcon size={26} />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                            {currentCat.category}
                          </h3>
                          <span className="glass-pill" style={{ fontSize: '0.75rem', padding: '3px 10px', color: 'var(--brand-blue)' }}>
                            {currentCat.tagline}
                          </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '6px', maxWidth: '720px', lineHeight: 1.6 }}>
                          {currentCat.description}
                        </p>
                      </div>
                    </div>
                    <div className="glass-pill" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#93c5fd' }}>
                      {currentCat.items.length} Validated Environments
                    </div>
                  </div>

                  <div className="tech-cards-grid">
                    {currentCat.items.map((it, idx) => {
                      const IconComp = it.icon;
                      return (
                        <div key={idx} className="tech-item-card">
                          <div className="tech-card-icon" style={{ color: it.color }}>
                            <IconComp size={20} />
                          </div>
                          <div className="tech-card-info">
                            <span className="tech-card-name">{it.name}</span>
                            <span className="tech-card-sub">{it.subtitle}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()
          )}
        </div>
      </section>

      {/* Section 8: Process (Alternating Luminous Contrast Section) */}
      <section id="process" className="section-spacing section-alt-contrast">
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

      {/* Section 11: FAQs Accordion (Alternating Luminous Contrast Section) */}
      <section className="section-spacing section-alt-contrast">
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
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
