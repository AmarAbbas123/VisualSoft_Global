import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bot,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  TrendingUp,
  Workflow,
  Sparkles,
  ChevronRight,
  Layers,
  Activity,
  Check,
  MessageSquare,
  Users,
  ShoppingBag,
  BarChart3,
  Database,
  AlertTriangle,
  Cpu,
  Repeat,
  Globe,
  Terminal,
  Lock,
  Scale,
  Search,
  FileText,
  Sliders,
  Gauge,
  Clock,
  Settings,
  Brain,
  Share2,
  Box,
  Eye,
  Server,
  Boxes,
  Target,
  BookOpen,
  ScanFace,
  RefreshCw,
  Video,
  Mic,
  Layout,
  Cloud,
  GitBranch,
  ChevronDown,
  ChevronUp,
  ArrowUpRight
} from 'lucide-react';
import {
  SiLangchain,
  SiAnthropic,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiRedis,
  SiFastapi,
  SiOllama,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiFlutter,
  SiGooglecloud,
  SiKubernetes,
  SiGithubactions,
  SiGitlab,
  SiJenkins,
  SiTerraform
} from 'react-icons/si';
import { TbBrandOpenai, TbBrandAzure, TbBrain } from 'react-icons/tb';
import { FaAws } from 'react-icons/fa6';
import Accordion from '../components/Accordion';

export default function AiAgentDevelopment({ onOpenModal }) {
  const [activeTechTab, setActiveTechTab] = useState('frameworks');
  const [activeIndustry, setActiveIndustry] = useState('2');
  const [activeRoadmapStep, setActiveRoadmapStep] = useState(0);

  useEffect(() => {
    document.title = "AI Agent Development Services | VisualSoft Global";
    window.scrollTo(0, 0);
  }, []);



  // 8 Comprehensive Services from Appinventiv
  const services = [
    {
      num: '01',
      title: 'AI Agent Strategy Consulting',
      metric: '90-day roadmap',
      desc: 'Identify high-impact opportunities where agents add immediate value. From workflow mapping to automation scans, we formulate architectures that act as co-pilots or fully autonomous agentic systems.'
    },
    {
      num: '02',
      title: 'AI Agent Design & Development',
      metric: '500+ workflows',
      desc: 'Build customized agents that fit your operational business rules. We leverage natural dialogue, smart triggers, and Model Context Protocol (MCP) to ground agents in real-time enterprise data.'
    },
    {
      num: '03',
      title: 'Conversational AI Development',
      metric: '95% resolution',
      desc: 'Develop high-accessibility conversational agents delivering fluid interactions across web chat, voice channels, WhatsApp, and enterprise collaboration hubs like Slack and Microsoft Teams.'
    },
    {
      num: '04',
      title: 'AI Agent Integration',
      metric: '250+ connectors',
      desc: 'Ensure seamless connectivity into your existing enterprise stack. We build secure integration layers between agents, legacy systems, relational databases, Salesforce, HubSpot, and ERP platforms.'
    },
    {
      num: '05',
      title: 'Agentic AI Testing Services',
      metric: '50K+ test runs',
      desc: 'Validate decision accuracy, safety guardrails, prompt vulnerability, and Agent-to-Agent (A2A) protocol coordination across thousands of real-world operational scenarios before going live.'
    },
    {
      num: '06',
      title: 'Advanced Model Optimization',
      metric: '30% cost savings',
      desc: 'Enhance agent performance through domain-specific fine-tuning, direct preference optimization (DPO), quantization, and adaptive model routing to balance inference speed with compute costs.'
    },
    {
      num: '07',
      title: 'AI Agent Lifecycle Management',
      metric: '24/7 telemetry',
      desc: 'Continuous real-time tracking, drift detection, prompt regression testing, and data retraining to ensure agents maintain precision as your business operations and documentation evolve.'
    },
    {
      num: '08',
      title: 'Agent-as-a-Service (AaaS)',
      metric: 'Rapid deployment',
      desc: 'Deploy on-demand, multi-agent autonomous teams hosted in secure, scalable cloud sandboxes, accelerating digital transformation without the burden of managing underlying GPU infrastructure.'
    }
  ];

  // 12 Key Types of AI Agents Built for Your Business (from Appinventiv)
  const agentTypes = [
    {
      title: 'Rule-Based Agents',
      icon: Bot,
      desc: 'Eliminate repetitive business processing tasks with predictable rules while saving people time and reducing the risk of process variation.'
    },
    {
      title: 'Goal-Oriented Agents',
      icon: Target,
      desc: 'Create AI-powered agents that consider several alternatives before making decisions, which optimizes planning, scheduling, resource allocation and operational decision-making for your teams.'
    },
    {
      title: 'Learning Agents',
      icon: BookOpen,
      desc: 'Create AI agents that learn continually from business data and user interactions, and make better recommendations and predictions as your business grows.'
    },
    {
      title: 'Utility-Based Agents',
      icon: Scale,
      desc: 'Implement intelligent agents to analyze multiple scenarios and to suggest the best action based on business priorities, cost and operations.'
    },
    {
      title: 'Autonomous Agents',
      icon: ScanFace,
      desc: 'Enable AI agents to execute complete business workflows independently, from retrieving information and updating systems to triggering approvals and completing routine processes.'
    },
    {
      title: 'Reactive Agents',
      icon: RefreshCw,
      desc: 'Detect events, trigger workflows, and enable quick business decision-making, as business conditions change.'
    },
    {
      title: 'Hybrid Agents',
      icon: Shield,
      desc: 'Integrate reasoning, business rules, memory and learning together in one AI agent that can perform complex business processes without using just one business rule model.'
    },
    {
      title: 'Multi-Agent Systems',
      icon: Users,
      desc: 'Manage multiple specialized AI agents, enabling them to work in parallel across departments to make large-scale business operations faster and more operationally visible.'
    },
    {
      title: 'Conversational Agents',
      icon: MessageSquare,
      desc: 'Provide customers and employees with the natural voice and chat experiences needed to complete tasks, get information and resolve requests in one conversational experience.'
    },
    {
      title: 'Robotic Agents',
      icon: Cpu,
      desc: 'Embed AI into robotic systems and automate repetitive physical tasks with greater accuracy, consistency and productivity in industrial settings.'
    },
    {
      title: 'AI Video Agents',
      icon: Video,
      desc: 'Leverage live and recorded video to generate actionable intelligence, identify anomalies and drive quicker operational and security decisions.'
    },
    {
      title: 'AI Voice Agents',
      icon: Mic,
      desc: 'Develop AI voice agents that make interaction experiences smoother, assisting users; all without losing conversational authenticity.'
    }
  ];

  // Tech Stack Tabs with Authentic Brand Icons (from Appinventiv page)
  const techCategories = [
    {
      id: 'frameworks',
      category: 'Agent Frameworks',
      icon: SiLangchain,
      tagline: 'Orchestration & Cognitive Architectures',
      description: 'Production-ready frameworks enabling stateful multi-agent graphs, memory persistence, and dynamic tool invocation.',
      items: [
        { name: 'LangGraph', subtitle: 'Cyclic Multi-Agent Graphs', icon: SiLangchain, color: '#1c3c3c' },
        { name: 'LangChain', subtitle: 'LLM Orchestration Tooling', icon: SiLangchain, color: '#1c3c3c' },
        { name: 'CrewAI', subtitle: 'Role-Playing Agent Teams', icon: Bot, color: '#f97316' },
        { name: 'AutoGen', subtitle: 'Multi-Agent Conversation', icon: Workflow, color: '#0078d4' },
        { name: 'Semantic Kernel', subtitle: 'Enterprise SDK', icon: Cpu, color: '#00a4ef' },
        { name: 'OpenAI Agents SDK', subtitle: 'Native Tool Calling', icon: TbBrandOpenai, color: '#10a37f' }
      ]
    },
    {
      id: 'retrieval',
      category: 'RAG & Vector DBs',
      icon: Database,
      tagline: 'Context Grounding & Memory Stores',
      description: 'High-dimensional embeddings and hybrid semantic search architectures connecting enterprise documents to agents.',
      items: [
        { name: 'LlamaIndex', subtitle: 'Data Framework for LLMs', icon: Layers, color: '#6366f1' },
        { name: 'Pinecone', subtitle: 'Managed Vector Database', icon: Database, color: '#000000' },
        { name: 'Weaviate', subtitle: 'Open-Source Vector Engine', icon: Database, color: '#00d4aa' },
        { name: 'Qdrant', subtitle: 'Vector Similarity Search', icon: Database, color: '#dc2626' },
        { name: 'ChromaDB', subtitle: 'Lightweight Vector Store', icon: Database, color: '#f59e0b' },
        { name: 'pgvector', subtitle: 'PostgreSQL Vector Extension', icon: SiPostgresql, color: '#336791' }
      ]
    },
    {
      id: 'models',
      category: 'Foundation Models',
      icon: TbBrandOpenai,
      tagline: 'Reasoning, Speech & Multimodal LLMs',
      description: 'Frontier foundation models fine-tuned with domain context for zero-shot reasoning and code execution.',
      items: [
        { name: 'OpenAI GPT-4o', subtitle: 'Multimodal Frontier Model', icon: TbBrandOpenai, color: '#10a37f' },
        { name: 'Claude 3.5 Sonnet', subtitle: 'Anthropic Reasoning Leader', icon: SiAnthropic, color: '#d97706' },
        { name: 'Llama 3.3', subtitle: 'Meta Open Weights Intelligence', icon: TbBrain, color: '#0668e1' },
        { name: 'Mistral Large', subtitle: 'Efficient Frontier Inference', icon: Zap, color: '#f97316' },
        { name: 'Gemini 1.5 Pro', subtitle: 'Million-Token Context Window', icon: Globe, color: '#4285f4' },
        { name: 'Ollama', subtitle: 'On-Prem Local Model Runner', icon: SiOllama, color: '#ffffff' }
      ]
    },
    {
      id: 'backend',
      category: 'Backend & Orchestration',
      icon: SiPython,
      tagline: 'Fault-Tolerant Enterprise Infrastructure',
      description: 'Event-driven microservices, asynchronous execution queues, and Model Context Protocol (MCP) servers.',
      items: [
        { name: 'Python', subtitle: 'Primary AI Engineering Stack', icon: SiPython, color: '#3776ab' },
        { name: 'FastAPI', subtitle: 'High-Concurrency Async APIs', icon: SiFastapi, color: '#05998b' },
        { name: 'Temporal', subtitle: 'Durable Workflow Execution', icon: Activity, color: '#111111' },
        { name: 'Docker', subtitle: 'Containerized Deployment', icon: SiDocker, color: '#2496ed' },
        { name: 'PostgreSQL', subtitle: 'Relational & Vector Data', icon: SiPostgresql, color: '#336791' },
        { name: 'Redis', subtitle: 'Low-Latency Cache & Memory', icon: SiRedis, color: '#dc2626' }
      ]
    },
    {
      id: 'monitoring',
      category: 'Monitoring & Evals',
      icon: Gauge,
      tagline: 'Telemetry, Guardrails & LLMOps',
      description: 'Continuous monitoring pipelines checking hallucinations, response latency, prompt regressions, and token costs.',
      items: [
        { name: 'LangSmith', subtitle: 'LLM Debugging & Tracing', icon: Search, color: '#1c3c3c' },
        { name: 'Langfuse', subtitle: 'Open Source Observability', icon: Activity, color: '#2563eb' },
        { name: 'Arize AI', subtitle: 'Evaluation & Drift Detection', icon: Sliders, color: '#8b5cf6' },
        { name: 'Promptfoo', subtitle: 'Automated Red Teaming & Evals', icon: Shield, color: '#10b981' },
        { name: 'MLflow', subtitle: 'Lifecycle & Experiment Tracker', icon: BarChart3, color: '#0194e2' }
      ]
    },
    {
      id: 'frontend',
      category: 'Frontend Development',
      icon: Layout,
      tagline: 'Interactive Agent Interfaces & Copilot UIs',
      description: 'Modern reactive frontend frameworks delivering responsive chat widgets, multimodal dashboards, and cross-platform Copilot embeds.',
      items: [
        { name: 'React', subtitle: 'Interactive Agent UI & State', icon: SiReact, color: '#61dafb' },
        { name: 'Next.js', subtitle: 'Full-Stack SSR & Edge Runtime', icon: SiNextdotjs, color: '#ffffff' },
        { name: 'Angular', subtitle: 'Enterprise Component Architecture', icon: SiAngular, color: '#dd0031' },
        { name: 'Vue.js', subtitle: 'Progressive Reactive Framework', icon: SiVuedotjs, color: '#42b883' },
        { name: 'Flutter', subtitle: 'Cross-Platform Mobile & Web Apps', icon: SiFlutter, color: '#02569b' }
      ]
    },
    {
      id: 'cloud',
      category: 'Cloud & Infrastructure',
      icon: Cloud,
      tagline: 'Hyperscale Compute, Clusters & Sandboxes',
      description: 'Enterprise cloud hosting, container isolation, and managed Kubernetes clusters optimized for low-latency agent inference.',
      items: [
        { name: 'AWS', subtitle: 'Bedrock, ECS & Lambda Compute', icon: FaAws, color: '#ff9900' },
        { name: 'Microsoft Azure', subtitle: 'Azure OpenAI & Container Apps', icon: TbBrandAzure, color: '#0078d4' },
        { name: 'Google Cloud Platform (GCP)', subtitle: 'Vertex AI & Cloud Run Ecosystem', icon: SiGooglecloud, color: '#4285f4' },
        { name: 'Docker', subtitle: 'Agent Sandboxing & Microservices', icon: SiDocker, color: '#2496ed' },
        { name: 'Kubernetes', subtitle: 'Automated Orchestration & Scaling', icon: SiKubernetes, color: '#326ce5' }
      ]
    },
    {
      id: 'devops',
      category: 'DevOps & CI/CD',
      icon: GitBranch,
      tagline: 'Automated Delivery, Testing & GitOps',
      description: 'Continuous integration, model evaluation gates, and Infrastructure as Code pipelines ensuring rock-solid release cycles.',
      items: [
        { name: 'GitHub Actions', subtitle: 'Event-Driven Workflow Automation', icon: SiGithubactions, color: '#2088ff' },
        { name: 'GitLab CI/CD', subtitle: 'End-to-End DevOps Pipeline', icon: SiGitlab, color: '#fc6d26' },
        { name: 'Jenkins', subtitle: 'Continuous Integration Automation', icon: SiJenkins, color: '#d24939' },
        { name: 'Terraform', subtitle: 'Declarative Multi-Cloud IaC', icon: SiTerraform, color: '#844fba' }
      ]
    }
  ];

  // Custom AI Agents for Every Industry (14 Industries from Appinventiv)
  const industryAgents = [
    {
      num: '1',
      title: 'Customer Service',
      items: [
        'Customer Query Resolution Agent',
        'Automated Ticket Routing Agent',
        'Customer Support Chatbot',
        'Sentiment Analysis Agent',
        'Complaint Management Assistant',
        'Follow-Up and Escalation Agent'
      ]
    },
    {
      num: '2',
      title: 'Retail',
      items: [
        'Product Recommendation Engine',
        'Customer Service Chatbot',
        'Inventory Refill Agent',
        'Shopping Behavior Analytics Platform',
        'Returns and Exchange Assistant',
        'Loyalty Optimization System'
      ]
    },
    {
      num: '3',
      title: 'Manufacturing',
      items: [
        'Inventory Management Platform',
        'Production Scheduling Agent',
        'Demand Forecasting Engine',
        'Supplier Risk Assessment Tool',
        'Quality Control AI System',
        'Logistics Route Optimization Platform'
      ]
    },
    {
      num: '4',
      title: 'Healthcare',
      items: [
        'Medical Coding and Billing Assistant',
        'Personalized Treatment Engine',
        'Health Support Chatbot',
        'Patient Monitoring System',
        'Clinical Decision Support Platform',
        'Healthcare Administration Assistant'
      ]
    },
    {
      num: '5',
      title: 'Cybersecurity',
      items: [
        'Threat Detection AI Agent',
        'Vulnerability Scanning Platform',
        'Incident Response Assistant',
        'AI-Powered Cybersecurity System',
        'Compliance Audit Tool',
        'Phishing Detection Engine'
      ]
    },
    {
      num: '6',
      title: 'Education and eLearning',
      items: [
        'Conversational AI Assistant',
        'Personalized Learning Platform',
        'Automated Grading System',
        'Student Engagement Tracker',
        'Course Recommendation Engine',
        'Academic Performance Analytics Tool'
      ]
    },
    {
      num: '7',
      title: 'Real Estate',
      items: [
        'Property Matching Platform',
        'Price Estimation Engine',
        'Client Communication Assistant',
        'Document Verification System',
        'Booking and Scheduling App',
        'Market Trend Analysis Tool'
      ]
    },
    {
      num: '8',
      title: 'Insurance',
      items: [
        'Claims Processing AI Agent',
        'Insurance Claim Fraud Detection System',
        'Customer Support Assistant',
        'Policy Recommendation Engine',
        'Risk Scoring Platform',
        'Renewal Management Tool'
      ]
    },
    {
      num: '9',
      title: 'Travel',
      items: [
        'Reservation Management Platform',
        'Travel Itinerary Planner App',
        'Guest Support Chatbot',
        'Feedback Analysis Engine',
        'Room Assignment System',
        'Loyalty Program Manager'
      ]
    },
    {
      num: '10',
      title: 'Media and Entertainment',
      items: [
        'Content Recommendation Engine',
        'Audience Sentiment Analysis Tool',
        'Ad Targeting Platform',
        'Content Moderation AI System',
        'Script Analysis Assistant',
        'Fan Engagement Platform'
      ]
    },
    {
      num: '11',
      title: 'Banking',
      items: [
        'Loan Processing Platform',
        'Credit Risk Assessment Engine',
        'Banking AI Assistant',
        'KYC Verification System',
        'Transaction Monitoring AI Agent',
        'Wealth Management Platform'
      ]
    },
    {
      num: '12',
      title: 'FinTech',
      items: [
        'Payment Processing Platform',
        'Fraud Prevention AI Agent',
        'Investment Advisory Assistant',
        'Digital Wallet App',
        'Compliance Monitoring System',
        'Transaction Reconciliation Tool'
      ]
    },
    {
      num: '13',
      title: 'Telecommunications',
      items: [
        'Network Monitoring Platform',
        'Customer Support Assistant',
        'Billing and Usage System',
        'Churn Prediction Engine',
        'Service Provisioning Tool',
        'Fault Detection AI Agent'
      ]
    },
    {
      num: '14',
      title: 'Logistics and Transportation',
      items: [
        'Fleet Management Platform',
        'Shipment Tracking System',
        'Delivery Scheduling Assistant',
        'Warehouse Coordination Tool',
        'Demand Planning Engine',
        'Route Optimization AI Agent'
      ]
    }
  ];

  // 5-Step Agile Roadmap from Appinventiv
  const processSteps = [
    {
      num: '01',
      title: 'Defining Agent Objectives and Business Workflows',
      desc: 'We start our artificial intelligence agent development process with consulting workshops to understand your business workflows and challenges. This helps us discover practical use cases and define where an AI agent can deliver the most value for your goals.'
    },
    {
      num: '02',
      title: 'Designing the Agent Architecture',
      desc: 'With the requirements in place, we design the technical foundation of your AI agent. This includes selecting the right LLM, RAG architecture, vector database, memory layer, orchestration framework, and integration strategy to support reliable task execution across enterprise environments.'
    },
    {
      num: '03',
      title: 'Building and Validating Agent Intelligence',
      desc: 'As a company providing digital AI agent development services, we build a working agent and validate its reasoning, tool calling, memory, and workflow execution. Evaluation datasets, business scenarios, and quality benchmarks help refine its behavior before production deployment.'
    },
    {
      num: '04',
      title: 'Connecting Agents to Enterprise Systems',
      desc: 'After testing, we move towards full integration of the agent into your systems, like CRMs, data platforms, or internal tools. We ensure the agent fits smoothly into your setup and is ready for live use with clear documentation.'
    },
    {
      num: '05',
      title: 'Monitoring, Feedback, and Iteration',
      desc: 'Once the agent is live, we track performance, collect feedback, and deliver two months of free post-launch maintenance, as outlined in our agreement, to continually improve it. We make sure the agent adapts to real-world use and stays effective as your business expands.'
    }
  ];

  // 6 Enterprise Pillars from Appinventiv
  const whyUsPillars = [
    {
      title: 'Faster Time to Production',
      desc: 'Our modular RAG pipelines, pre-tested orchestration patterns, and automated evaluation workflows accelerate engineering cycles by 45% compared to greenfield development.'
    },
    {
      title: 'Built Around Agentic Workflows',
      desc: 'Our agents do not stop at pre-scripted branches. They analyze high-level prompts, decompose them into sequential API calls, and resolve edge cases without human intervention.'
    },
    {
      title: 'Enterprise Knowledge That Stays Connected',
      desc: 'We combine vector retrieval, conversation history, and dynamic session memory so agents maintain context over extended workflows without hallucinating.'
    },
    {
      title: 'Measured Before Every Release',
      desc: 'Every agent passes automated benchmark evaluation covering task completion rates, reasoning consistency, safety guardrails, and latency SLAs before deployment.'
    },
    {
      title: 'Controlled Tool Access & Governance',
      desc: 'Every database query, API write, and financial transaction is governed by granular permission policies, execution quotas, and optional human-in-the-loop approval gates.'
    },
    {
      title: 'Complete Visibility Across Every Agent',
      desc: 'Full-spectrum execution traces, prompt versioning, token telemetry, and audit logs give engineering teams 100% transparency into how each decision is made.'
    }
  ];


  // FAQs directly from Appinventiv JSON-LD schema
  const faqs = [
    {
      question: "What's the difference between an AI agent and agentic AI?",
      answer: "An AI agent is an autonomous system designed to execute specific tasks, like answering inquiries, processing structured data, or automating a workflow. Agentic AI refers to the broader capability of AI systems to plan, reason, adapt, and act toward high-level objectives with minimal human oversight—frequently coordinating multiple sub-agents, tools, and memory stores."
    },
    {
      question: "How Are AI Agents Different from RPA (Robotic Process Automation)?",
      answer: "The difference lies in decision-making autonomy. RPA follows rigid, predefined if-then rules to automate deterministic tasks and breaks when an interface or format changes. AI agents understand natural context, reason through ambiguity, make autonomous decisions, learn from outcomes, and dynamically select tools to handle complex workflows."
    },
    {
      question: "How Are AI Agents Replacing Traditional Chatbots?",
      answer: "Traditional chatbots rely on pre-written decision trees and keyword matching, failing as soon as a user deviates from the script. AI agents reason over enterprise data, retain long-term memory, connect to external tools via APIs, execute multi-step business transactions, and take autonomous actions with human-like comprehension."
    },
    {
      question: "What are the essential components for building an intelligent agent?",
      answer: "Key architectural layers include: (1) Data Layer: Clean, structured enterprise data; (2) Model Layer: Foundation LLM for reasoning; (3) Memory & Context: Short-term session and long-term vector stores; (4) Decision-Making Logic: Prompt chains, planning, and self-reflection; (5) Tool & API Integration: MCP connectors to business apps; (6) Execution Layer: Workflow runner; (7) Orchestration Framework: Multi-agent state manager; (8) Security & Access Control: Guardrails, audit trails, and role-based permissions."
    },
    {
      question: "Do you integrate AI agents with our existing tools and legacy systems?",
      answer: "Yes. We build custom integrations so agents fit seamlessly into your existing infrastructure without disruption. This includes enterprise CRMs (Salesforce, HubSpot), ERPs (SAP, NetSuite), collaboration hubs (Slack, Microsoft Teams), cloud platforms (AWS, Azure, GCP), and legacy databases via secure REST APIs and Model Context Protocol (MCP)."
    },
    {
      question: "How do you engineer intelligent agents similar to AutoGPT?",
      answer: "We specify the target business objective and build an autonomous loop comprising reasoning, memory, vector retrieval (RAG), and dynamic tool calling. The agent breaks large goals into sequential subtasks, verifies its own outputs, self-corrects on errors, and is enclosed within enterprise safety guardrails and human-in-the-loop approvals."
    },
    {
      question: "How do you ensure the quality, accuracy and safety of AI agents?",
      answer: "We employ continuous evaluation pipelines. Before deployment, agents are stress-tested against thousands of synthetic test scenarios, red-teamed for adversarial prompts, and benchmarked for hallucination resistance. After launch, telemetry traces monitor drift, tool failure rates, and latency."
    },
    {
      question: "How long does it take to develop an enterprise AI agent?",
      answer: "A focused proof-of-concept or single-function agent typically takes 4 to 8 weeks. Comprehensive multi-agent enterprise deployments with legacy integrations, custom fine-tuning, and compliance validation usually span 3 to 6 months, structured into milestone sprints."
    }
  ];

  return (
    <div className="ai-agent-page">
      {/* Hero Section (Revamped Two-Column Split) */}
      <section className="service-hero-section">
        <div className="app-container">
          <div className="service-hero-split">
            {/* Left Content */}
            <div>
              <div className="hero-pill-badge">
                <div className="glass-pill">
                  <span className="pulse-dot" />
                  <span style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>ENTERPRISE AGENTIC SYSTEMS</span>
                </div>
              </div>

              <div className="title-aura-container">
                <div className="title-aura" />
                <h1 className="hero-title service-hero-title">
                  AI Agent Development <span className="text-gradient-brand">Services</span>
                </h1>
              </div>

              <p className="hero-description">
                We engineer robust AI agents that automate decisions, optimize workflows, and elevate customer experiences. Every agent is built for scale, transparency, and compliance, ensuring organizations can deploy safely and accelerate outcomes across industries.
              </p>

              <div className="hero-cta-group">
                <Link to="/contactus" className="glass-button-primary">
                  <span>Scope Your AI Agent</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#services" className="glass-button-secondary">
                  <span>Explore Capabilities</span>
                  <ChevronRight size={16} />
                </a>
              </div>

              <div className="hero-trust-badges">
                <div className="trust-badge-item">
                  <CheckCircle2 size={16} style={{ color: 'var(--brand-blue)' }} />
                  <span>Model Context Protocol (MCP) Ready</span>
                </div>
                <div className="trust-badge-item">
                  <CheckCircle2 size={16} style={{ color: 'var(--neon-emerald)' }} />
                  <span>Multi-Agent Swarm Orchestration</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Cognitive Agent Schematic */}
            <div>
              <div className="hardware-schematic-card agent-schematic-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00f5a0', boxShadow: '0 0 8px #00f5a0' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#93c5fd', fontWeight: 600 }}>
                      Autonomous Agent Topology v4.2
                    </span>
                  </div>
                  <span className="glass-pill" style={{ fontSize: '0.72rem', padding: '2px 8px', color: '#00f5a0' }}>
                    Agentic Loop Active
                  </span>
                </div>

                {/* Core Cognitive Hub */}
                <div className="mcu-chip-box">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Bot size={22} style={{ color: 'var(--brand-blue)' }} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>
                      Cognitive Reasoning Engine
                    </span>
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#93c5fd', fontFamily: 'var(--font-mono)' }}>
                    Goal Decomposition • Tool Selection • Self-Reflection • Vector Memory
                  </span>
                </div>

                {/* Live Performance Telemetry */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', margin: '14px 0' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 8px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Task Success</span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#00f5a0' }}>99.4%</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 8px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Step Latency</span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-blue)' }}>280ms</span>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 8px', borderRadius: '10px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', display: 'block' }}>Guardrails</span>
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#38bdf8' }}>Enforced</span>
                  </div>
                </div>

                {/* Sub-Agent Connectors */}
                <div className="sensor-pins-grid">
                  <div className="pin-item">
                    <Database size={14} style={{ color: 'var(--brand-blue)' }} />
                    <span>Vector RAG Grounding</span>
                  </div>
                  <div className="pin-item">
                    <Workflow size={14} style={{ color: '#38bdf8' }} />
                    <span>CRM & ERP MCP Calls</span>
                  </div>
                  <div className="pin-item">
                    <Shield size={14} style={{ color: '#00f5a0' }} />
                    <span>Human Approval Gate</span>
                  </div>
                  <div className="pin-item">
                    <Repeat size={14} style={{ color: '#c084fc' }} />
                    <span>Self-Correction Loop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Section 3: Philosophy / What Sets Us Apart */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '48px', position: 'relative' }}>
            <div className="icon-blur-halo halo-brand-blue" style={{ width: '220px', height: '220px', top: '10px', right: '10px' }} />
            <div className="glass-pill" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>BEYOND SIMPLE CHATBOTS</span>
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2.2rem' }}>
              We Don't Build Generic Bots. We Build <span className="text-gradient-brand">Autonomous Systems</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '940px', marginBottom: '20px' }}>
              An AI agent is more than a conversational window. We build agentic systems that analyze complex business context, decompose broad goals into discrete actions, invoke enterprise APIs via Model Context Protocol (MCP), and learn from human feedback to drive enterprise transformation.
            </p>
            <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', lineHeight: 1.8, fontWeight: 500 }}>
              Whether deployed as digital teammates for customer operations, sales development representatives (SDRs), or cross-departmental orchestrators, our agents deliver measurable ROI while upholding strict compliance standards.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Comprehensive Suite of Services (01 to 08) */}
      <section id="services" className="section-spacing section-alt-contrast">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Bot size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>END-TO-END CAPABILITIES</span>
            </div>
            <h2 className="section-title">
              Our Comprehensive Suite of <span className="text-gradient-brand">AI Agent Services</span>
            </h2>
            <p className="section-subtitle">
              We don't treat Al agents as generic chatbots or task bots. As a custom Al agent development company, we design agentic systems that automate complex decisions, manage workflows across departments, and deliver measurable ROl.
            </p>
          </div>

          <div className="grid-cols-auto">
            {services.map((srv) => (
              <div key={srv.num} className="capability-card-pro">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span className="capability-num-tag">{srv.num}</span>

                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>
                  {srv.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginTop: 'auto' }}>
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Key Types of AI Agents Built for Your Business */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Layers size={14} style={{ color: 'var(--neon-emerald)' }} />
              <span>TAILORED ARCHITECTURES</span>
            </div>
            <h2 className="section-title">
              Key Types of AI Agents <span className="text-gradient-brand">Built for Your Business</span>
            </h2>
            <p className="section-subtitle">
              Al agents come in many forms, each designed to solve a different kind of problem. we help you choose and build the type of agent that fits
              your goals, from simple rule-following bots to intelligent systems that adapt and improve
              with experience.</p>
          </div>

          <div className="agent-types-grid">
            {agentTypes.map((ag) => {
              const IconComp = ag.icon;
              return (
                <div key={ag.title} className="agent-type-card-pro">
                  <div className="agent-type-icon-wrapper">
                    <IconComp size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="agent-type-title">
                    {ag.title}
                  </h3>
                  <p className="agent-type-desc">
                    {ag.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section: Custom AI Agents for Every Industry (Interactive 14-Industry Accordion) */}
      <section className="section-spacing section-alt-contrast">
        <div className="app-container">
          <div className="industry-section-layout">
            <div className="industry-sticky-left">
              <div className="glass-pill section-tag" style={{ marginBottom: '16px' }}>
                <Boxes size={14} style={{ color: 'var(--brand-blue)' }} />
                <span>CROSS-INDUSTRY EXPERTISE</span>
              </div>
              <h2 className="industry-main-title">
                Custom AI Agents <br />
                <span className="text-gradient-brand">for Every Industry</span>
              </h2>
              <p className="industry-main-subtitle">
                Whether you are in retail, healthcare, finance, or logistics, we develop custom AI agents that can solve specific industry challenges with unmatched precision and intelligence.
              </p>
            </div>

            <div className="industry-accordion-wrap">
              {industryAgents.map((ind) => {
                const isOpen = activeIndustry === ind.num;
                return (
                  <div
                    key={ind.num}
                    className={`industry-accordion-item ${isOpen ? 'active' : ''}`}
                  >
                    <button
                      type="button"
                      className="industry-accordion-header"
                      onClick={() => setActiveIndustry(isOpen ? null : ind.num)}
                      aria-expanded={isOpen}
                    >
                      <div className="industry-header-left">
                        <span className="industry-num">[{ind.num}]</span>
                        <h3 className="industry-title">{ind.title}</h3>
                      </div>
                      <div style={{ color: isOpen ? 'var(--brand-blue)' : 'rgba(255, 255, 255, 0.45)', display: 'flex', alignItems: 'center', transition: 'all 0.25s ease' }}>
                        {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="industry-accordion-body">
                        <div className="industry-software-grid">
                          {ind.items.map((item, idx) => (
                            <div key={idx} className="industry-software-card">
                              <CheckCircle2 size={18} style={{ color: '#10b981', flexShrink: 0 }} />
                              <span className="industry-software-title">{item}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="industry-know-more-btn"
                          onClick={() => onOpenModal && onOpenModal(`AI Agent Development - ${ind.title}`)}
                        >
                          <span>Know More</span>
                          <ArrowUpRight size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Why Leading Businesses Partner with Us */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Shield size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>ENTERPRISE EXCELLENCE</span>
            </div>
            <h2 className="section-title">
              Why Leading Businesses Partner <span className="text-gradient-brand">with Us for AI Agents</span>
            </h2>
            <p className="section-subtitle">
              We engineer agents that retrieve the right information, call business tools, follow automation policies, and execute reliably in production.
            </p>
          </div>

          <div className="grid-cols-auto">
            {whyUsPillars.map((p, i) => (
              <div key={i} className="glass-panel" style={{ padding: '28px' }}>
                <div className="icon-box-blur" style={{ marginBottom: '14px' }}>
                  <div className="icon-blur-halo halo-brand-blue" />
                  <CheckCircle2 size={22} style={{ color: 'var(--brand-blue)' }} />
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Interactive Technology Stack (Tabs with Official Brand Icons) */}
      <section className="section-spacing section-alt-contrast">
        <div className="app-container">
          <div className="section-header">
            <div className="glass-pill section-tag">
              <Terminal size={14} style={{ color: 'var(--neon-cyan)' }} />
              <span>ENTERPRISE COGNITIVE STACK</span>
            </div>
            <h2 className="section-title">
              Technology Stack Behind <span className="text-gradient-brand">Enterprise-Ready Agents</span>
            </h2>
            <p className="section-subtitle">
              Every framework, foundation model, vector store, and evaluation tool is chosen for reliability, scale, and low latency.
            </p>
          </div>

          {/* Interactive Technology Tabs Navigation */}
          <div className="tech-tabs-nav">
            <button
              type="button"
              className={`tech-tab-btn ${activeTechTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTechTab('all')}
            >
              <Sparkles size={16} style={{ color: activeTechTab === 'all' ? '#00f5a0' : 'inherit' }} />
              <span>Full Stack</span>
              <span className="tech-tab-count">
                {techCategories.reduce((acc, t) => acc + t.items.length, 0)}
              </span>
            </button>

            {techCategories.map((tech) => {
              const TabIcon = tech.icon;
              const isActive = activeTechTab === tech.id;
              return (
                <button
                  key={tech.id}
                  type="button"
                  className={`tech-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTechTab(tech.id)}
                >
                  <TabIcon size={16} style={{ color: isActive ? 'var(--brand-blue)' : 'inherit' }} />
                  <span>{tech.category}</span>
                  <span className="tech-tab-count">{tech.items.length}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          {activeTechTab === 'all' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {techCategories.map((tech) => {
                const CatIcon = tech.icon;
                return (
                  <div key={tech.id} className="tech-tab-panel">
                    <div className="tech-tab-panel-header">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div className="tech-card-icon" style={{ width: '48px', height: '48px', background: 'rgba(35, 79, 246, 0.12)', borderColor: 'rgba(35, 79, 246, 0.3)', color: 'var(--brand-blue)' }}>
                          <CatIcon size={22} />
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                              {tech.category}
                            </h3>
                            <span className="glass-pill" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                              {tech.items.length} Standards
                            </span>
                          </div>
                          <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', marginTop: '4px', maxWidth: '650px', lineHeight: 1.5 }}>
                            {tech.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="tech-cards-grid">
                      {tech.items.map((it, idx) => {
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
              const currentTech = techCategories.find((t) => t.id === activeTechTab);
              if (!currentTech) return null;
              const CatIcon = currentTech.icon;
              return (
                <div className="tech-tab-panel" key={currentTech.id}>
                  <div className="tech-tab-panel-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div className="tech-card-icon" style={{ width: '52px', height: '52px', background: 'rgba(35, 79, 246, 0.15)', borderColor: 'rgba(35, 79, 246, 0.35)', color: 'var(--brand-blue)' }}>
                        <CatIcon size={26} />
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', margin: 0 }}>
                            {currentTech.category}
                          </h3>
                          <span className="glass-pill" style={{ fontSize: '0.75rem', padding: '3px 10px', color: 'var(--brand-blue)' }}>
                            {currentTech.tagline}
                          </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '6px', maxWidth: '720px', lineHeight: 1.6 }}>
                          {currentTech.description}
                        </p>
                      </div>
                    </div>
                    <div className="glass-pill" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#93c5fd' }}>
                      {currentTech.items.length} Production Integrations
                    </div>
                  </div>

                  <div className="tech-cards-grid">
                    {currentTech.items.map((it, idx) => {
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

      {/* Section 7: Our Agile Roadmap (Center Timeline matching user screenshot) */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="section-header" style={{ maxWidth: '860px', margin: '0 auto 60px' }}>
            <div className="glass-pill section-tag">
              <Settings size={14} style={{ color: 'var(--brand-blue)' }} />
              <span>THE ENGINEERING PROCESS</span>
            </div>
            <h2 className="section-title">
              Our Agile Roadmap for <span className="text-gradient-brand">Building AI Agents</span>
            </h2>
            <p className="section-subtitle">
              Building an AI agent is not just about coding. It is about creating a smart system that can plan, act, learn, and adapt to your business needs. As a dedicated AI agent development agency, here is how we work with you to bring your AI agent to life.
            </p>
          </div>

          <div className="roadmap-timeline-wrapper">
            {/* Background Track Line */}
            <div className="roadmap-timeline-track" />

            {/* Active Blue Progress Line */}
            <div
              className="roadmap-timeline-progress"
              style={{
                height: `${(activeRoadmapStep / (processSteps.length - 1)) * 100}%`
              }}
            />

            {processSteps.map((ps, idx) => {
              const isCurrent = idx === activeRoadmapStep;
              const isPassed = idx <= activeRoadmapStep;
              return (
                <div
                  key={idx}
                  className={`roadmap-timeline-step ${isCurrent ? 'active' : ''} ${isPassed ? 'passed' : ''}`}
                  onMouseEnter={() => setActiveRoadmapStep(idx)}
                  onClick={() => setActiveRoadmapStep(idx)}
                >
                  <div className="roadmap-step-left">
                    <h3 className="roadmap-step-title">{ps.title}</h3>
                  </div>

                  <div className="roadmap-step-dot" />

                  <div className="roadmap-step-right">
                    <p className="roadmap-step-desc">{ps.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Section 10: Frequently Asked Questions (Real Expandable Accordion) */}
      <section className="section-spacing section-alt-contrast">
        <div className="app-container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <h2 className="section-title">
              Frequently Asked <span className="text-gradient-brand">Questions</span>
            </h2>
            <p className="section-subtitle">
              Answers to technical, operational, and commercial questions about deploying custom AI agents.
            </p>
          </div>

          <Accordion items={faqs} />
        </div>
      </section>

      {/* Section 11: Closing Call to Action */}
      <section className="section-spacing">
        <div className="app-container">
          <div className="glass-panel" style={{ padding: '60px 40px', textAlign: 'center', position: 'relative' }}>
            <div className="icon-blur-halo halo-brand-blue" style={{ width: '300px', height: '300px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, fontFamily: 'var(--font-heading)', color: '#fff', marginBottom: '16px' }}>
              Ready to Put AI Agents to Work for Your Business?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto 36px auto', lineHeight: 1.7 }}>
              Schedule a strategic discovery session to map your business workflows and discover where agentic AI delivers immediate operational ROI.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contactus" className="glass-button-primary">
                <span>Book a Free Consultation</span>
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
