import React, { useState, useEffect, useRef } from 'react';
import {
  Code,
  Cloud,
  Shield,
  Sparkles,
  Check,
  ChevronDown,
  Inbox,
  User,
  CalendarCheck,
  ArrowRight
} from 'lucide-react';

export default function HomeHeroAnimation() {
  // Animation time in seconds (0 to 24s loop)
  const [time, setTime] = useState(0);
  const [manualPhase, setManualPhase] = useState(null);
  const animRef = useRef(null);
  const lastTimeRef = useRef(performance.now());

  const phases = [
    { id: 'design', label: '1. Design & Blueprint', start: 0, end: 5.5 },
    { id: 'code', label: '2. Code & Security', start: 5.5, end: 12 },
    { id: 'cloud', label: '3. Cloud Deploy', start: 12, end: 18 },
    { id: 'automate', label: '4. Workflow Automation', start: 18, end: 24 }
  ];

  useEffect(() => {
    let active = true;

    const loop = (now) => {
      if (!active) return;
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (manualPhase === null) {
        setTime((prev) => (prev + delta) % 24);
      }
      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => {
      active = false;
      cancelAnimationFrame(animRef.current);
    };
  }, [manualPhase]);

  const currentTime = manualPhase !== null ? manualPhase : time;

  // Progress helpers
  const clamp01 = (v) => Math.max(0, Math.min(1, v));
  const smoothstep = (min, max, val) => {
    const x = clamp01((val - min) / (max - min));
    return x * x * (3 - 2 * x);
  };
  const lerp = (a, b, t) => a + (b - a) * clamp01(t);

  // Phase opacities
  const designOpacity = currentTime < 5.5 ? 1 : Math.max(0, 1 - (currentTime - 5.5) * 1.5);
  const codeOpacity =
    currentTime >= 5.2 && currentTime < 12.2
      ? smoothstep(5.2, 5.8, currentTime) * (1 - smoothstep(11.6, 12.2, currentTime))
      : 0;
  const cloudOpacity =
    currentTime >= 11.8 && currentTime < 18.2
      ? smoothstep(11.8, 12.4, currentTime) * (1 - smoothstep(17.6, 18.2, currentTime))
      : 0;
  const autoOpacity =
    currentTime >= 17.8
      ? smoothstep(17.8, 18.4, currentTime) * (1 - smoothstep(23.4, 24, currentTime))
      : 0;

  // Drawing paths progress (0 to 5s)
  const stroke1 = smoothstep(0.2, 1.2, currentTime);
  const stroke2 = smoothstep(1.3, 2.0, currentTime);
  const stroke3 = smoothstep(2.1, 3.2, currentTime);
  const stroke4 = smoothstep(3.3, 4.2, currentTime);

  // Pen position based on current time
  let penX = 398;
  let penY = 320;
  let penLift = 0;
  let penOpacity = currentTime < 4.8 ? 1 : Math.max(0, 1 - (currentTime - 4.8) * 3);

  if (currentTime < 1.2) {
    penX = lerp(44, 281, stroke1) + 150;
    penY = 220;
  } else if (currentTime < 1.3) {
    penLift = 18;
    penX = 400;
    penY = 250;
  } else if (currentTime < 2.0) {
    penX = lerp(36, 271, stroke2) + 150;
    penY = 280;
  } else if (currentTime < 2.1) {
    penLift = 18;
    penX = 400;
    penY = 300;
  } else if (currentTime < 3.2) {
    penX = lerp(44, 288, stroke3) + 150;
    penY = 340;
  } else if (currentTime < 3.3) {
    penLift = 18;
    penX = 460;
    penY = 340;
  } else if (currentTime < 4.2) {
    penX = lerp(314, 464, stroke4) + 150;
    penY = 340;
  } else {
    penLift = 30;
    penX = 580;
    penY = 320;
  }

  // Active step badge
  const currentPhaseObj =
    phases.find((p) => currentTime >= p.start && currentTime < p.end) || phases[0];

  return (
    <div className="HomeHeroAnimation_container__jdCXx">
      <div
        className="HomeHeroAnimation_viewport__En_aK"
        style={{
          position: 'relative',
          aspectRatio: '800/620',
          background: 'radial-gradient(ellipse at 50% 50%, #0c182b 0%, #060d19 100%)',
          borderRadius: '16px',
          border: '1px solid rgba(82, 183, 255, 0.22)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          overflow: 'hidden'
        }}
      >
        {/* Background Grid Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(82, 183, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(82, 183, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none'
          }}
        />

        {/* Top Control & Timeline HUD */}
        <div
          style={{
            position: 'absolute',
            top: '16px',
            left: '20px',
            right: '20px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(10, 20, 36, 0.85)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '10px',
            padding: '8px 16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#34d399',
                boxShadow: '0 0 10px #34d399'
              }}
            />
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#f1f5f9', letterSpacing: '0.04em' }}>
              {currentPhaseObj.label}
            </span>
          </div>

          {/* Interactive Phase Buttons */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {phases.map((p) => {
              const isCurrent = currentPhaseObj.id === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setManualPhase(p.start + 1);
                    setTimeout(() => setManualPhase(null), 5000);
                  }}
                  style={{
                    background: isCurrent ? '#233DFF' : 'rgba(255, 255, 255, 0.05)',
                    border: isCurrent ? '1px solid #52B7FF' : '1px solid rgba(255, 255, 255, 0.06)',
                    color: isCurrent ? '#ffffff' : '#94a3b8',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {p.id.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main 800x620 Animated Vector Scene */}
        <svg
          viewBox="0 0 800 620"
          style={{ width: '100%', height: '100%', display: 'block' }}
          role="img"
          aria-label="MT BYTES interactive system architecture taking shape"
        >
          <defs>
            {/* Metal gradient for 3D Stylus */}
            <linearGradient id="stylus-metal" x1="0" x2="1">
              <stop stopColor="#677589" />
              <stop offset="0.28" stopColor="#dce2e9" />
              <stop offset="0.65" stopColor="#a1adbd" />
              <stop offset="1" stopColor="#4b586b" />
            </linearGradient>

            {/* Blue accent gradient */}
            <linearGradient id="blue-glow" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#233DFF" />
              <stop offset="1" stopColor="#52B7FF" />
            </linearGradient>

            {/* Blueprint grid pattern */}
            <pattern id="draft-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20" fill="none" stroke="#A1BEDF" strokeWidth="0.4" opacity="0.14" />
            </pattern>
          </defs>

          {/* ====================================================
              LAYER 1: DESIGN & PROPERTY BLUEPRINT (0 - 5.5s)
              ==================================================== */}
          <g
            style={{
              opacity: designOpacity,
              transition: 'opacity 0.4s ease'
            }}
            transform="translate(398 320) matrix(1 0.035 -0.11 0.94 0 0) translate(-250 -165)"
          >
            {/* Window Browser Surface */}
            <rect
              width="500"
              height="330"
              rx="11"
              fill="#181F28"
              stroke="#47515f"
              strokeWidth="1.2"
            />
            {/* Grid background */}
            <rect x="24" y="54" width="452" height="251" fill="url(#draft-grid)" />

            {/* Window Title Bar */}
            <path d="M26 44H474" stroke="#38414d" strokeWidth="1" />
            <circle cx="44" cy="24" r="4" fill="#ef4444" opacity="0.8" />
            <circle cx="58" cy="24" r="4" fill="#f59e0b" opacity="0.8" />
            <circle cx="72" cy="24" r="4" fill="#10b981" opacity="0.8" />
            <text x="96" y="28" fill="#A6AFBB" fontSize="12" fontWeight="500">
              Property website · Design
            </text>

            {/* Ink Stroke 1: Heading Area Box */}
            <path
              d="M44 76H273Q281 76 281 84V153Q281 161 273 161H44Q36 161 36 153V84Q36 76 44 76"
              fill={stroke1 > 0.8 ? 'rgba(35, 61, 255, 0.06)' : 'none'}
              stroke="#52B7FF"
              strokeWidth="1.5"
              strokeDasharray="700"
              strokeDashoffset={700 * (1 - stroke1)}
            />
            <path d="M52 100H193M52 124H231" stroke="#8FA8C8" strokeWidth="3" opacity={stroke1} />

            {/* Ink Stroke 2: Subtitle Line */}
            <path
              d="M36 188H271"
              stroke="#627690"
              strokeWidth="2.5"
              strokeDasharray="250"
              strokeDashoffset={250 * (1 - stroke2)}
            />

            {/* Ink Stroke 3: Search Input Field */}
            <rect
              x="36"
              y="231"
              width="252"
              height="44"
              rx="7"
              fill="#202732"
              stroke="#52B7FF"
              strokeWidth="1.2"
              strokeDasharray="600"
              strokeDashoffset={600 * (1 - stroke3)}
            />
            <text x="54" y="258" fill="#94A3B8" fontSize="13" opacity={stroke3}>
              City or neighbourhood...
            </text>

            {/* Ink Stroke 4: CTA Action Button */}
            <rect
              x="306"
              y="231"
              width="158"
              height="44"
              rx="7"
              fill="#233DFF"
              stroke="#52B7FF"
              strokeWidth="1.2"
              strokeDasharray="400"
              strokeDashoffset={400 * (1 - stroke4)}
            />
            <text
              x="345"
              y="258"
              fill="#ffffff"
              fontSize="13"
              fontWeight="600"
              opacity={stroke4}
            >
              View properties
            </text>

            {/* Isometric Property Artwork taking shape */}
            <g transform="translate(333, 76)">
              <rect width="131" height="111" rx="4" fill="#202732" stroke="#4B5868" strokeWidth="1" />
              {/* Roof & Chimney */}
              <path
                d="M16 94V40L47 22L76 40V94H16M76 94H116V54L96 41L76 54"
                fill="none"
                stroke="#68A5D8"
                strokeWidth="1.5"
                opacity={stroke1}
              />
              {/* Windows & Doors */}
              <rect x="28" y="55" width="15" height="18" fill="rgba(82, 183, 255, 0.2)" stroke="#52B7FF" opacity={stroke1} />
              <rect x="52" y="52" width="14" height="18" fill="rgba(82, 183, 255, 0.2)" stroke="#52B7FF" opacity={stroke1} />
              <rect x="28" y="77" width="24" height="17" fill="#334155" opacity={stroke1} />
            </g>
          </g>

          {/* ====================================================
              LAYER 2: CODE & SECURITY PHASE (5.5 - 12s)
              ==================================================== */}
          <g
            style={{
              opacity: codeOpacity,
              transition: 'opacity 0.4s ease'
            }}
            transform="translate(80, 110)"
          >
            {/* Code Editor Window */}
            <rect
              width="640"
              height="380"
              rx="12"
              fill="#111827"
              stroke="#374151"
              strokeWidth="1.5"
            />
            {/* Editor Tab Bar */}
            <path d="M0 48H640" stroke="#1f2937" strokeWidth="1" />
            <rect x="16" y="10" width="140" height="38" rx="6" fill="#1f2937" />
            <text x="36" y="34" fill="#60a5fa" fontSize="13" fontFamily="monospace" fontWeight="600">
              listings.ts
            </text>
            <rect x="164" y="10" width="140" height="38" rx="6" fill="transparent" />
            <text x="180" y="34" fill="#6b7280" fontSize="13" fontFamily="monospace">
              schema.prisma
            </text>

            {/* Run Button */}
            <rect x="530" y="12" width="94" height="28" rx="6" fill="#233DFF" />
            <polygon points="545,21 545,31 554,26" fill="#ffffff" />
            <text x="562" y="31" fill="#ffffff" fontSize="12" fontWeight="600">
              Run
            </text>

            {/* Code Lines with Syntax Colors */}
            <g fontFamily="Consolas, monospace" fontSize="14">
              <text x="24" y="80" fill="#4b5563">01</text>
              <text x="56" y="80" fill="#c084fc">export async function</text>
              <text x="235" y="80" fill="#60a5fa">GET</text>
              <text x="265" y="80" fill="#e5e7eb">(req: Request) &#123;</text>

              <text x="24" y="112" fill="#4b5563">02</text>
              <text x="76" y="112" fill="#c084fc">const</text>
              <text x="124" y="112" fill="#e5e7eb">session =</text>
              <text x="200" y="112" fill="#c084fc">await</text>
              <text x="248" y="112" fill="#38bdf8">auth()</text>

              <text x="24" y="144" fill="#4b5563">03</text>
              <text x="76" y="144" fill="#c084fc">if</text>
              <text x="96" y="144" fill="#e5e7eb">(!session?.user) &#123;</text>

              <text x="24" y="176" fill="#4b5563">04</text>
              <text x="96" y="176" fill="#c084fc">return</text>
              <text x="150" y="176" fill="#38bdf8">Response.json</text>
              <text x="256" y="176" fill="#f87171">&#123; error: "Unauthorized" &#125;</text>
              <text x="490" y="176" fill="#e5e7eb">, &#123; status: 401 &#125;)</text>

              <text x="24" y="208" fill="#4b5563">05</text>
              <text x="76" y="208" fill="#e5e7eb">&#125;</text>

              <text x="24" y="240" fill="#4b5563">06</text>
              <text x="76" y="240" fill="#c084fc">const</text>
              <text x="124" y="240" fill="#e5e7eb">listings =</text>
              <text x="208" y="240" fill="#c084fc">await</text>
              <text x="256" y="240" fill="#34d399">db.property.findMany(&#123;</text>

              <text x="24" y="272" fill="#4b5563">07</text>
              <text x="96" y="272" fill="#e5e7eb">where: &#123; status: "AVAILABLE" &#125;</text>

              <text x="24" y="304" fill="#4b5563">08</text>
              <text x="76" y="304" fill="#e5e7eb">&#125;)</text>

              <text x="24" y="336" fill="#4b5563">09</text>
              <text x="56" y="336" fill="#e5e7eb">&#125;</text>
            </g>

            {/* Security Inspection Badge */}
            <g transform="translate(420, 240)">
              <rect width="190" height="70" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1.2" />
              <circle cx="24" cy="35" r="8" fill="#10b981" />
              <path d="M20 35L23 38L29 32" stroke="#ffffff" strokeWidth="2" fill="none" />
              <text x="40" y="30" fill="#ffffff" fontSize="12" fontWeight="700">
                Security Passed
              </text>
              <text x="40" y="48" fill="#a7f3d0" fontSize="10">
                Zero-Trust Auth & RBAC Verified
              </text>
            </g>
          </g>

          {/* ====================================================
              LAYER 3: CLOUD DEPLOYMENT (12 - 18s)
              ==================================================== */}
          <g
            style={{
              opacity: cloudOpacity,
              transition: 'opacity 0.4s ease'
            }}
            transform="translate(60, 90)"
          >
            {/* Pipeline Header */}
            <text x="340" y="40" textAnchor="middle" fill="#52B7FF" fontSize="14" fontWeight="600" letterSpacing="0.1em">
              CLOUD INFRASTRUCTURE DEPLOYMENT
            </text>

            {/* Connecting Server Route Lines */}
            <path
              d="M 120 180 L 340 100 L 560 180 L 340 260 Z"
              fill="none"
              stroke="#233DFF"
              strokeWidth="2"
              opacity="0.4"
            />
            <path
              d="M 120 180 L 560 180"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />

            {/* Server Card 1: Edge CDN */}
            <g transform="translate(40, 140)">
              <rect width="160" height="90" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="1.2" />
              <circle cx="28" cy="28" r="10" fill="#233DFF" />
              <text x="48" y="32" fill="#f1f5f9" fontSize="13" fontWeight="600">Global Edge</text>
              <text x="20" y="60" fill="#94a3b8" fontSize="11">Cloudflare & Vercel</text>
              <text x="20" y="76" fill="#34d399" fontSize="11" fontWeight="600">● 18ms latency</text>
            </g>

            {/* Server Card 2: Core Microservices */}
            <g transform="translate(260, 60)">
              <rect width="160" height="90" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="28" cy="28" r="10" fill="#38bdf8" />
              <text x="48" y="32" fill="#f1f5f9" fontSize="13" fontWeight="600">Kubernetes</text>
              <text x="20" y="60" fill="#94a3b8" fontSize="11">Auto-scaling Node Pods</text>
              <text x="20" y="76" fill="#34d399" fontSize="11" fontWeight="600">● 99.99% Uptime</text>
            </g>

            {/* Server Card 3: Distributed Database */}
            <g transform="translate(480, 140)">
              <rect width="160" height="90" rx="10" fill="#1e293b" stroke="#475569" strokeWidth="1.2" />
              <circle cx="28" cy="28" r="10" fill="#a855f7" />
              <text x="48" y="32" fill="#f1f5f9" fontSize="13" fontWeight="600">Database</text>
              <text x="20" y="60" fill="#94a3b8" fontSize="11">Multi-Region Postgres</text>
              <text x="20" y="76" fill="#34d399" fontSize="11" fontWeight="600">● Active Replication</text>
            </g>

            {/* Live Deployment Progress Bar */}
            <g transform="translate(180, 290)">
              <rect width="320" height="48" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
              <text x="20" y="28" fill="#e2e8f0" fontSize="12" fontWeight="600">
                Deploying to Production...
              </text>
              <rect x="20" y="34" width="280" height="4" rx="2" fill="#1e293b" />
              <rect
                x="20"
                y="34"
                width={280 * smoothstep(12.5, 17.5, currentTime)}
                height="4"
                rx="2"
                fill="#233DFF"
              />
            </g>
          </g>

          {/* ====================================================
              LAYER 4: WORKFLOW AUTOMATION & CRM (18 - 24s)
              ==================================================== */}
          <g
            style={{
              opacity: autoOpacity,
              transition: 'opacity 0.4s ease'
            }}
            transform="translate(60, 80)"
          >
            <text x="340" y="40" textAnchor="middle" fill="#52B7FF" fontSize="15" fontWeight="600" letterSpacing="0.05em">
              From Enquiry to Automated Agent Fulfillment
            </text>

            {/* 4 Connected Automated Pipeline Steps */}
            {[
              { title: 'Enquiry Received', desc: 'Web form verified', color: '#38bdf8' },
              { title: 'AI Qualification', desc: 'Score: 98/100 · High', color: '#818cf8' },
              { title: 'CRM Sync', desc: 'HubSpot & Salesforce', color: '#c084fc' },
              { title: 'Agent Assigned', desc: 'SDR routed via SMS', color: '#34d399' }
            ].map((step, idx) => {
              const xPos = 40 + idx * 155;
              const yPos = 120 + (idx % 2 === 0 ? 0 : 70);
              return (
                <g key={idx} transform={`translate(${xPos}, ${yPos})`}>
                  <rect width="140" height="85" rx="8" fill="#1e293b" stroke={step.color} strokeWidth="1.5" />
                  <circle cx="20" cy="22" r="8" fill={step.color} />
                  <text x="36" y="26" fill="#f1f5f9" fontSize="11" fontWeight="600">
                    Step 0{idx + 1}
                  </text>
                  <text x="14" y="52" fill="#e2e8f0" fontSize="12" fontWeight="600">
                    {step.title}
                  </text>
                  <text x="14" y="68" fill="#94a3b8" fontSize="10">
                    {step.desc}
                  </text>
                </g>
              );
            })}

            {/* Live Success Notification Card */}
            <g transform="translate(180, 310)">
              <rect width="320" height="52" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
              <circle cx="28" cy="26" r="10" fill="#10b981" />
              <path d="M24 26L27 29L33 23" stroke="#ffffff" strokeWidth="2" fill="none" />
              <text x="48" y="24" fill="#ffffff" fontSize="13" fontWeight="700">
                Lead Converted in 1.4s
              </text>
              <text x="48" y="42" fill="#a7f3d0" fontSize="11">
                Calendar invite sent & agent notified
              </text>
            </g>
          </g>

          {/* ====================================================
              3D METALLIC DRAFTING STYLUS & CONTACT SHADOW
              ==================================================== */}
          <g
            style={{
              opacity: penOpacity,
              transform: `translate(${penX}px, ${penY - penLift}px)`,
              transition: 'transform 0.08s linear, opacity 0.3s ease'
            }}
          >
            {/* Dynamic Elliptical Shadow on Canvas */}
            <ellipse
              cx="4"
              cy={penLift + 4}
              rx={8 + penLift * 0.3}
              ry={3 + penLift * 0.15}
              fill="#03070d"
              opacity={0.5 / (1 + penLift / 10)}
            />

            {/* 3D Stylus Body Rotated 25deg */}
            <g transform="rotate(25)">
              {/* Main Metallic Barrel */}
              <path
                d="M-5.5 -25 L-6.3 -136 Q-6.3 -143 0 -143 Q6.3 -143 6.3 -136 L5.5 -25 Z"
                fill="url(#stylus-metal)"
                stroke="#b3bdcb"
                strokeWidth="0.5"
              />
              {/* Nib Collar */}
              <path d="M-5.5 -25 L-2 -10 H2 L5.5 -25 Z" fill="#8c9aae" />
              {/* Precision Tip */}
              <path d="M-2 -10 L0 0 L2 -10 Z" fill="#c1cad6" />
              {/* Accent Grooves */}
              <path d="M-6.3 -135 H6.3 M-5.6 -31 H5.6" stroke="#394657" strokeWidth="1" />
              {/* Clip */}
              <rect x="-0.9" y="-116" width="1.8" height="16" rx="0.9" fill="#374455" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
