import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "../assets/logo1.png";
import bg1 from "../assets/bg1.mp4";
import { Typewriter } from "react-simple-typewriter";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaUndo,
  FaTerminal,
  FaCode,
  FaCompass,
  FaRocket,
  FaChartLine,
  FaRobot,
  FaShoppingCart,
  FaCogs,
  FaBrain,
  FaHistory,
  FaProjectDiagram,
  FaHandshake,
  FaUser
} from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {  
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

// ========================
// NEURAL AI ASSISTANT DATA & COMPONENTS
// ========================

const SKILL_DATA = {
  react: {
    name: "React.js & Next.js",
    color: "text-orange-400 border-orange-500/30 bg-orange-500/5",
    glow: "rgba(249, 115, 22, 0.4)",
    prof: "95%",
    desc: "Used in front-end development, building highly responsive UI components, SPAs, and server-side rendered applications. Focuses on clean state management, modular structure, and micro-animations.",
    projects: "Gym Management System, The Spiritual Trends, CuraLink Collaboration Platform"
  },
  node: {
    name: "Node.js & Express",
    color: "text-green-400 border-green-500/30 bg-green-500/5",
    glow: "rgba(34, 197, 94, 0.4)",
    prof: "90%",
    desc: "Backend API engineering with Express.js. Designed secure JWT authentication, RESTful services, database integrations, and middleware logic for high-performance servers.",
    projects: "E-Commerce Gateway, Gym backend, CuraLink researcher portal"
  },
  langgraph: {
    name: "LangGraph / LangChain",
    color: "text-purple-400 border-purple-500/30 bg-purple-500/5",
    glow: "rgba(168, 85, 247, 0.4)",
    prof: "85%",
    desc: "Designed and engineered multi-agent LLM systems, self-correcting RAG loops, and stateful agentic workflows. Focuses on tool execution, feedback paths, and orchestration.",
    projects: "Agentic RAG Research System, Automated Job-Application Agent"
  },
  python: {
    name: "Python (AI / ML)",
    color: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    glow: "rgba(59, 130, 246, 0.4)",
    prof: "88%",
    desc: "Developed NLP modules, document processing pipelines, vector searches (FAISS), and prompt-engineering solutions. Automated complex data parsing workloads.",
    projects: "AI NLP analysis pipelines, HPC job scheduler interfaces"
  },
  postgres: {
    name: "Databases (MongoDB/Postgres)",
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
    glow: "rgba(16, 185, 129, 0.4)",
    prof: "90%",
    desc: "Database modeling, schema optimization, index creation, and transaction management. Experienced in MongoDB Mongoose and PostgreSQL queries.",
    projects: "Unified database structures for e-commerce and member portals"
  },
  docker: {
    name: "Docker & CI/CD",
    color: "text-sky-400 border-sky-500/30 bg-sky-500/5",
    glow: "rgba(56, 189, 248, 0.4)",
    prof: "80%",
    desc: "Containerized Node.js and React services for predictable deployments. Engineered GitHub Actions CI/CD workflows and automated releases.",
    projects: "Deployment pipelines, Docker-compose local stack testing"
  }
};

const SKILL_SPHERES = [
  { id: "react", label: "React", x: "10%", y: "20%", color: "border-orange-500/50 bg-orange-950/20 text-orange-400" },
  { id: "node", label: "Node.js", x: "65%", y: "15%", color: "border-green-500/50 bg-green-950/20 text-green-400" },
  { id: "langgraph", label: "LangGraph", x: "40%", y: "45%", color: "border-purple-500/50 bg-purple-950/20 text-purple-400" },
  { id: "python", label: "Python", x: "12%", y: "65%", color: "border-blue-500/50 bg-blue-950/20 text-blue-400" },
  { id: "postgres", label: "MongoDB/SQL", x: "70%", y: "65%", color: "border-emerald-500/50 bg-emerald-950/20 text-emerald-400" },
  { id: "docker", label: "Docker", x: "45%", y: "10%", color: "border-sky-500/50 bg-sky-950/20 text-sky-400" },
];

const CanvasBackground = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = 550;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particles
    const particles = [];
    const particleCount = 25;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedY: -(Math.random() * 0.4 + 0.1),
        text: Math.random() > 0.5 ? "1" : "0",
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let gridOffset = 0;
    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create neon gradient background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGrad.addColorStop(0, "rgba(5, 5, 5, 0.98)");
      bgGrad.addColorStop(1, "rgba(10, 10, 10, 0.99)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw perspective grid lines
      ctx.strokeStyle = "rgba(249, 115, 22, 0.04)";
      ctx.lineWidth = 1;

      // Vertical perspective lines
      const horizonY = canvas.height * 0.15;
      const vanishX = canvas.width / 2;
      const lineCount = 20;
      for (let i = 0; i <= lineCount; i++) {
        const xOffset = ((i - lineCount / 2) / (lineCount / 2)) * canvas.width * 1.5;
        ctx.beginPath();
        ctx.moveTo(vanishX, horizonY);
        ctx.lineTo(vanishX + xOffset, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines (moving down)
      gridOffset += 0.3;
      if (gridOffset > 40) gridOffset = 0;
      for (let y = horizonY; y < canvas.height; y += 30) {
        const adjustedY = y + gridOffset;
        if (adjustedY > canvas.height) continue;
        const opacity = Math.min((adjustedY - horizonY) / (canvas.height - horizonY), 1) * 0.08;
        ctx.strokeStyle = `rgba(249, 115, 22, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, adjustedY);
        ctx.lineTo(canvas.width, adjustedY);
        ctx.stroke();
      }

      // Draw digital fog / horizon glow
      const horizonGlow = ctx.createLinearGradient(0, horizonY - 40, 0, horizonY + 60);
      horizonGlow.addColorStop(0, "rgba(5, 5, 5, 1)");
      horizonGlow.addColorStop(0.5, "rgba(249, 115, 22, 0.04)");
      horizonGlow.addColorStop(1, "rgba(5, 5, 5, 0)");
      ctx.fillStyle = horizonGlow;
      ctx.fillRect(0, horizonY - 40, canvas.width, 100);

      // Draw floating binary numbers
      ctx.font = "9px monospace";
      particles.forEach((p) => {
        ctx.fillStyle = `rgba(249, 115, 22, ${p.opacity})`;
        ctx.fillText(p.text, p.x, p.y);
        p.y += p.speedY;
        if (p.y < horizonY) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
      });

      // Occasional shooting light
      if (Math.random() > 0.99) {
        ctx.strokeStyle = "rgba(249, 115, 22, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        const startX = Math.random() * canvas.width;
        ctx.moveTo(startX, horizonY);
        ctx.lineTo(startX + (Math.random() - 0.5) * 150, canvas.height);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const CyberneticAssistant = ({ mousePos }) => {
  const rotX = mousePos.x * 12;
  const rotY = mousePos.y * 10;

  return (
    <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
      {/* Large ambient glow */}
      <div className="absolute w-56 h-56 rounded-full bg-orange-500/8 blur-[80px]" />
      <div className="absolute w-40 h-40 rounded-full bg-orange-400/5 blur-3xl animate-pulse" />

      {/* Breathing container */}
      <motion.div
        className="relative w-64 h-64 flex items-center justify-center cursor-pointer"
        style={{ transformStyle: "preserve-3d", perspective: 1200 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full transition-transform duration-100 ease-out"
          style={{ transform: `rotateY(${rotX}deg) rotateX(${-rotY}deg)` }}
        >
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
                <stop offset="40%" stopColor="#f97316" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="shellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#27272a" />
                <stop offset="50%" stopColor="#18181b" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>
              <filter id="coreFilter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="outerGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Outer hex shell */}
            <polygon points="100,12 172,46 172,114 100,148 28,114 28,46" fill="none" stroke="#3f3f46" strokeWidth="1.2" />
            <polygon points="100,22 162,52 162,108 100,138 38,108 38,52" fill="url(#shellGrad)" stroke="#52525b" strokeWidth="0.8" />

            {/* Inner geometric layers */}
            <polygon points="100,35 148,58 148,102 100,125 52,102 52,58" fill="none" stroke="rgba(249,115,22,0.15)" strokeWidth="0.8" />
            <polygon points="100,48 135,65 135,95 100,112 65,95 65,65" fill="none" stroke="rgba(249,115,22,0.25)" strokeWidth="0.8" />

            {/* Central core glow */}
            <circle cx="100" cy="80" r="28" fill="url(#coreGlow)" />
            <circle cx="100" cy="80" r="16" fill="#09090b" stroke="#f97316" strokeWidth="1.5" filter="url(#coreFilter)" className="animate-pulse" />
            <circle cx="100" cy="80" r="6" fill="#f97316" filter="url(#coreFilter)" />
            <circle cx="100" cy="80" r="2.5" fill="#fff" />

            {/* Orbital ring 1 */}
            <ellipse cx="100" cy="80" rx="36" ry="12" fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth="0.8" strokeDasharray="4,3" className="animate-spin" style={{ transformOrigin: '100px 80px', animationDuration: '8s' }} />

            {/* Orbital ring 2 - tilted */}
            <ellipse cx="100" cy="80" rx="28" ry="36" fill="none" stroke="rgba(249,115,22,0.2)" strokeWidth="0.6" strokeDasharray="3,4" className="animate-spin" style={{ transformOrigin: '100px 80px', animationDuration: '12s', animationDirection: 'reverse' }} />

            {/* Circuit paths from core */}
            <path d="M100,64 L100,35 L130,22" fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth="0.8" />
            <path d="M100,64 L100,35 L70,22" fill="none" stroke="rgba(249,115,22,0.3)" strokeWidth="0.8" />
            <path d="M116,80 L148,80 L162,70" fill="none" stroke="rgba(249,115,22,0.2)" strokeWidth="0.8" />
            <path d="M84,80 L52,80 L38,70" fill="none" stroke="rgba(249,115,22,0.2)" strokeWidth="0.8" />
            <path d="M100,96 L100,125 L130,138" fill="none" stroke="rgba(249,115,22,0.2)" strokeWidth="0.8" />
            <path d="M100,96 L100,125 L70,138" fill="none" stroke="rgba(249,115,22,0.2)" strokeWidth="0.8" />

            {/* Node dots at circuit ends */}
            <circle cx="130" cy="22" r="2.5" fill="#f97316" filter="url(#outerGlow)" />
            <circle cx="70" cy="22" r="2.5" fill="#f97316" filter="url(#outerGlow)" />
            <circle cx="162" cy="70" r="2" fill="#f97316" opacity="0.6" />
            <circle cx="38" cy="70" r="2" fill="#f97316" opacity="0.6" />
            <circle cx="130" cy="138" r="2" fill="#f97316" opacity="0.4" />
            <circle cx="70" cy="138" r="2" fill="#f97316" opacity="0.4" />

            {/* Data stream indicators */}
            <rect x="155" y="45" width="18" height="2" rx="1" fill="#f97316" opacity="0.3" />
            <rect x="155" y="50" width="12" height="2" rx="1" fill="#f97316" opacity="0.2" />
            <rect x="27" y="95" width="18" height="2" rx="1" fill="#f97316" opacity="0.3" />
            <rect x="27" y="100" width="12" height="2" rx="1" fill="#f97316" opacity="0.2" />

            {/* Bottom platform */}
            <path d="M60,155 L140,155" stroke="#3f3f46" strokeWidth="1" />
            <path d="M75,160 L125,160" stroke="#3f3f46" strokeWidth="0.8" />
            <path d="M100,148 L100,155" stroke="rgba(249,115,22,0.3)" strokeWidth="0.8" />
            <circle cx="100" cy="155" r="2" fill="#f97316" opacity="0.5" className="animate-pulse" />

            {/* Top antenna */}
            <path d="M100,22 L100,8" stroke="rgba(249,115,22,0.4)" strokeWidth="1" />
            <circle cx="100" cy="6" r="2.5" fill="none" stroke="#f97316" strokeWidth="0.8" />
            <circle cx="100" cy="6" r="1" fill="#f97316" className="animate-pulse" />
          </svg>
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-orange-400"
          style={{
            width: i % 2 === 0 ? 3 : 2,
            height: i % 2 === 0 ? 3 : 2,
            filter: "drop-shadow(0 0 4px #f97316)",
          }}
          animate={{
            x: [Math.sin(i * 0.8) * 100, Math.sin(i * 0.8 + 2) * 120, Math.sin(i * 0.8) * 100],
            y: [Math.cos(i * 0.8) * 100 - 20, Math.cos(i * 0.8 + 2) * 100 - 40, Math.cos(i * 0.8) * 100 - 20],
            opacity: [0.1, 0.7, 0.1],
          }}
          transition={{ repeat: Infinity, duration: 3 + i * 0.5, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const ProjectsRadar = () => {
  return (
    <div className="relative w-64 h-64 rounded-full border border-orange-500/20 flex items-center justify-center overflow-hidden bg-black/40">
      {/* Sweeper beam */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-orange-500/0 via-orange-500/0 to-orange-500/10 origin-center animate-spin" 
        style={{ animationDuration: "6s" }} 
      />
      {/* Grid rings */}
      <div className="absolute w-48 h-48 rounded-full border border-orange-500/10" />
      <div className="absolute w-32 h-32 rounded-full border border-orange-500/10" />
      <div className="absolute w-16 h-16 rounded-full border border-orange-500/10" />
      {/* Radar axes */}
      <div className="absolute w-full h-[1px] bg-orange-500/10" />
      <div className="absolute h-full w-[1px] bg-orange-500/10" />

      {/* Target points */}
      <div className="absolute top-1/4 left-1/3 flex flex-col items-center">
        <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping absolute" />
        <span className="w-2 h-2 rounded-full bg-orange-400" />
        <span className="text-[8px] text-orange-300 font-mono mt-1 bg-black/80 px-1 border border-orange-500/30 rounded">RAG_SYS</span>
      </div>

      <div className="absolute bottom-1/4 right-1/4 flex flex-col items-center">
        <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping absolute" />
        <span className="w-2 h-2 rounded-full bg-orange-400" />
        <span className="text-[8px] text-orange-300 font-mono mt-1 bg-black/80 px-1 border border-orange-500/30 rounded">eCOMM_MKT</span>
      </div>

      <div className="absolute top-1/3 right-1/3 flex flex-col items-center">
        <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping absolute" />
        <span className="w-2 h-2 rounded-full bg-orange-400" />
        <span className="text-[8px] text-orange-300 font-mono mt-1 bg-black/80 px-1 border border-orange-500/30 rounded">GYM_MGMT</span>
      </div>
    </div>
  );
};

const HolographicTimeline = () => {
  return (
    <div className="w-full max-w-md space-y-6 text-left relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-orange-500/20">
      <div className="relative pl-8">
        <span className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-orange-400 border border-black filter drop-shadow-[0_0_4px_rgba(249,115,22,0.8)]" />
        <h4 className="text-sm font-bold text-orange-400 font-mono">2026 - PRESENT // ACTIVE</h4>
        <h3 className="text-base font-extrabold text-white">Full Stack Intern @ Aganitha Cognitive Solutions</h3>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
          Running SLURM workloads on HPC clusters, automating AI workflows, and leveraging data-centric clinical analysis models.
        </p>
      </div>

      <div className="relative pl-8">
        <span className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-orange-400/50 border border-black" />
        <h4 className="text-sm font-bold text-gray-500 font-mono">2025 // COMPLETED</h4>
        <h3 className="text-base font-extrabold text-white">Full Stack Intern @ Unified Mentor</h3>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
          Engineered scalable React & Express architectures, integrated secure REST APIs, and managed Git deployments.
        </p>
      </div>

      <div className="relative pl-8">
        <span className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-gray-600 border border-black" />
        <h4 className="text-sm font-bold text-gray-500 font-mono">2021 - 2025 // CS ACADEMY</h4>
        <h3 className="text-base font-extrabold text-white">B.E. in Computer Science @ Sai Vidya Institute of Technology</h3>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
          Graduated in Bengaluru. Focused on algorithms, web frameworks, AI integration, and systems deployment.
        </p>
      </div>
    </div>
  );
};

const HolographicHandshake = () => {
  const [success, setSuccess] = useState(false);
  const triggerHandshake = () => {
    setSuccess(true);
    setTimeout(() => {
      window.location.href = "mailto:mishraatharva756@gmail.com";
      setSuccess(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute w-24 h-24 rounded-full bg-purple-500/10 border border-purple-500/20 animate-pulse" />
        <svg className="w-16 h-16 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.519 1-3.179 1-4.907a10.02 10.02 0 011.758-5.64" />
        </svg>
      </div>
      <p className="text-xs text-gray-300 max-w-xs">
        Initiate digital handshake protocol to open connection window directly to Atharva's inbox.
      </p>
      <button
        onClick={triggerHandshake}
        className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
          success 
            ? "bg-green-500 text-white shadow-[0_0_15px_#22c55e]" 
            : "bg-orange-500/20 text-orange-400 border border-orange-500/40 hover:bg-orange-500 hover:text-black hover:shadow-[0_0_15px_rgba(249, 215, 22, 0.6)]"
        }`}
      >
        {success ? "LINK ESTABLISHED 📶" : "INITIATE PROTOCOL"}
      </button>
    </div>
  );
};

const AIAssistantSection = () => {
  const [activeProtocol, setActiveProtocol] = useState("welcome"); // welcome, profile, skills, projects, experience, contact
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative z-10 w-full py-20 bg-[#050505] text-white border-t border-b border-zinc-900/80 overflow-hidden flex flex-col items-center"
    >
      <CanvasBackground />

      <div className="max-w-6xl w-full px-6 relative z-10 flex flex-col gap-8">
        
        {/* Section Header */}
        <div className="text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping" />
              Neural Assistant Connected
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Holographic <span className="text-orange-400 font-mono">AI Console</span>
            </h2>
            <p className="text-zinc-400 mt-1.5 text-xs md:text-sm max-w-lg leading-relaxed">
              Interact with Atharva's telemetry console to project skill spheres, project radar coordinates, and career timeline logs.
            </p>
          </div>
          <div className="text-zinc-500 font-mono text-[10px] hidden md:block">
            LATENCY: 12ms // STABLE // 60 FPS
          </div>
        </div>

        {/* Dashboard Frame */}
        <div className="grid md:grid-cols-12 gap-6 items-stretch min-h-[460px]">
          
          {/* LEFT: Sidebar Console Controllers */}
          <div className="md:col-span-4 bg-zinc-950/70 border border-zinc-800/80 rounded-2xl p-4 backdrop-blur-xl flex flex-col justify-between gap-6 relative overflow-hidden">
            {/* Corner cybernetic decorations */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-orange-500" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-orange-500" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-orange-500" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-orange-500" />

            <div className="space-y-4">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900/50 pb-2">
                Select Protocol
              </div>
              
              <div className="flex flex-col gap-2">
                {[
                  { id: "welcome", label: "01 // WELCOME_COM", icon: FaRobot },
                  { id: "profile", label: "02 // DEV_PROFILE", icon: FaUser },
                  { id: "skills", label: "03 // SKILL_SPHERES", icon: FaBrain },
                  { id: "projects", label: "04 // PROJECT_RADAR", icon: FaProjectDiagram },
                  { id: "experience", label: "05 // TIMELINE_LOG", icon: FaHistory },
                  { id: "contact", label: "06 // HANDSHAKE_CON", icon: FaHandshake },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = activeProtocol === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveProtocol(item.id);
                        setSelectedSkill(null);
                      }}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-mono text-[11px] font-bold text-left transition-all cursor-pointer border ${
                        isActive
                          ? "bg-orange-500/10 border-orange-500/30 text-orange-400 shadow-[0_0_12px_rgba(249,115,22,0.15)]"
                          : "bg-transparent border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50"
                      }`}
                    >
                      <Icon className={`text-xs ${isActive ? "text-orange-400" : "text-zinc-500"}`} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Simulated mini diagnostic logs */}
            <div className="bg-black/60 rounded-lg p-2.5 border border-zinc-900 font-mono text-[9px] text-zinc-500 space-y-1 select-none">
              <div>HOST // ATHARVA_MISHRA</div>
              <div className="flex items-center gap-1.5 text-orange-400 font-bold">
                <span className="w-1 h-1 rounded-full bg-orange-400 animate-ping" />
                PROTOCOL ACTIVE: {activeProtocol.toUpperCase()}
              </div>
            </div>
          </div>

          {/* RIGHT: Hologram Display Screen */}
          <div className="md:col-span-8 bg-zinc-950/30 border border-zinc-800/40 rounded-2xl relative overflow-hidden backdrop-blur-md flex flex-col items-center justify-center p-6 min-h-[400px]">
            {/* Tech grid scan lines overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] pointer-events-none opacity-[0.4]" />

            <AnimatePresence mode="wait">
              {activeProtocol === "welcome" && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center gap-4 text-center max-w-md"
                >
                  <CyberneticAssistant mousePos={mousePos} protocol="welcome" />
                  <div className="bg-orange-500/5 border border-orange-500/20 p-4 rounded-xl backdrop-blur-md shadow-lg mt-2">
                    <p className="font-mono text-xs text-orange-400 leading-relaxed">
                      "SYSTEM ONLINE. Greetings, explorer! I am Atharva's cybernetic console assistant. Use the panel on the left to request floating data streams, timelines, or establish link protocols."
                    </p>
                  </div>
                </motion.div>
              )}

              {activeProtocol === "profile" && (
                <motion.div
                  key="profile"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full flex flex-col md:flex-row items-center gap-6"
                >
                  <div className="w-1/3 hidden md:block">
                    <CyberneticAssistant mousePos={mousePos} protocol="profile" />
                  </div>
                  <div className="flex-grow bg-zinc-950/80 border border-zinc-800/80 p-5 rounded-2xl font-mono text-xs text-zinc-300 relative shadow-2xl">
                    <div className="absolute top-2 right-3 text-[9px] text-orange-500/60">FILE_REF // AM_BIO</div>
                    <h3 className="text-sm font-bold text-orange-400 border-b border-zinc-900 pb-2 mb-3">
                      ATHARVA_MISHRA // CORE_IDENTITY
                    </h3>
                    <div className="space-y-2 leading-relaxed">
                      <div className="grid grid-cols-12 gap-1 border-b border-zinc-900/40 pb-1.5">
                        <span className="col-span-4 text-zinc-500 font-bold">COORDINATES:</span>
                        <span className="col-span-8 text-white">Bengaluru, Karnataka</span>
                      </div>
                      <div className="grid grid-cols-12 gap-1 border-b border-zinc-900/40 pb-1.5">
                        <span className="col-span-4 text-zinc-500 font-bold">ACADEMIC:</span>
                        <span className="col-span-8 text-white">B.E. in Computer Science (SVIT)</span>
                      </div>
                      <div className="grid grid-cols-12 gap-1 border-b border-zinc-900/40 pb-1.5">
                        <span className="col-span-4 text-zinc-500 font-bold">FOCUS_AREAS:</span>
                        <span className="col-span-8 text-orange-300 font-bold">Full Stack & Agentic AI</span>
                      </div>
                      <div className="grid grid-cols-12 gap-1 pt-1">
                        <span className="col-span-4 text-zinc-500 font-bold">CORE_DRIVE:</span>
                        <span className="col-span-8 text-zinc-300">
                          Engineering high-performance interfaces, self-correcting multi-agent AI loops, and reliable web databases.
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeProtocol === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full min-h-[350px] flex items-center justify-center"
                >
                  <AnimatePresence>
                    {!selectedSkill ? (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0"
                      >
                        <div className="absolute inset-0 bg-radial-mesh opacity-[0.02] pointer-events-none" />
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-zinc-500 animate-pulse">
                          CLICK NODE TO PROJECT DETAILED TELEMETRY
                        </div>
                        {SKILL_SPHERES.map((sphere) => (
                          <motion.div
                            key={sphere.id}
                            className={`absolute w-20 h-20 rounded-full border flex flex-col items-center justify-center cursor-pointer font-bold text-[10px] backdrop-blur-md shadow-lg ${sphere.color}`}
                            style={{ left: sphere.x, top: sphere.y }}
                            animate={{
                              y: [0, -8, 0],
                              x: [0, 4, 0],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 3 + Math.random() * 2,
                              ease: "easeInOut",
                            }}
                            whileHover={{
                              scale: 1.12,
                              boxShadow: "0 0 15px currentColor",
                            }}
                            onClick={() => setSelectedSkill(sphere.id)}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-current animate-ping mb-1" />
                            {sphere.label}
                          </motion.div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`w-full max-w-md border rounded-2xl p-5 font-mono text-xs shadow-2xl relative backdrop-blur-xl ${SKILL_DATA[selectedSkill].color}`}
                        style={{ boxShadow: `0 0 25px ${SKILL_DATA[selectedSkill].glow}` }}
                      >
                        <button
                          onClick={() => setSelectedSkill(null)}
                          className="absolute top-3 right-3 text-zinc-500 hover:text-white cursor-pointer font-bold"
                        >
                          [✕ CLOSE]
                        </button>
                        <h3 className="text-sm font-extrabold mb-1">{SKILL_DATA[selectedSkill].name}</h3>
                        <div className="flex items-center gap-2 mb-3 text-[10px]">
                          <span className="text-zinc-400">PROFICIENCY:</span>
                          <span className="font-bold text-white bg-white/10 px-1.5 py-0.2 rounded">
                            {SKILL_DATA[selectedSkill].prof}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-300 leading-relaxed mb-3">
                          {SKILL_DATA[selectedSkill].desc}
                        </p>
                        <div className="border-t border-white/10 pt-2.5">
                          <span className="text-[10px] text-zinc-400 font-bold block mb-1">HIGHLIGHT BUILDS:</span>
                          <span className="text-[11px] text-white/95 leading-relaxed text-orange-300">
                            {SKILL_DATA[selectedSkill].projects}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              {activeProtocol === "projects" && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col md:flex-row items-center gap-8 w-full"
                >
                  <div className="w-full md:w-1/2 flex justify-center">
                    <ProjectsRadar />
                  </div>
                  <div className="w-full md:w-1/2 bg-zinc-950/70 border border-zinc-800/80 p-4 rounded-xl font-mono text-[11px] space-y-3 shadow-xl">
                    <div className="text-[9px] text-orange-500/60 pb-1 border-b border-zinc-900">RADAR // ACTIVE TARGET TELEMETRY</div>
                    
                    <div className="space-y-2 text-zinc-300">
                      <div>
                        <span className="text-orange-400 font-bold font-mono">1. CURALINK7.VERCEL.APP (ACTIVE)</span>
                        <div className="text-[10px] text-zinc-400 pl-3">Conversion Rate: 35% / Health Collab</div>
                      </div>
                      <div>
                        <span className="text-purple-400 font-bold font-mono">2. THESPIRITUALTRENDS.COM (ONLINE)</span>
                        <div className="text-[10px] text-zinc-400 pl-3">Scale: E-Commerce Store / Payment verif</div>
                      </div>
                      <div>
                        <span className="text-green-400 font-bold font-mono">3. BODYMASS-GYM.VERCEL.APP (ONLINE)</span>
                        <div className="text-[10px] text-zinc-400 pl-3">Framework: Next.js + DB Attendance tracking</div>
                      </div>
                      <div>
                        <span className="text-orange-300 font-bold font-mono">4. AGENTICRAG.ONLINE (DEPLOYED)</span>
                        <div className="text-[10px] text-zinc-400 pl-3">Architecture: LangGraph Multi-Agent RAG</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeProtocol === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full flex justify-center py-4 overflow-y-auto max-h-[360px] pr-2 scrollbar-thin"
                >
                  <HolographicTimeline />
                </motion.div>
              )}

              {activeProtocol === "contact" && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full flex justify-center"
                >
                  <HolographicHandshake />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  // Widget 1: My Passion State
  const [theme, setTheme] = useState("orange"); // orange, purple, emerald
  const [animation, setAnimation] = useState("float"); // float, pulse, spin
  const [glow, setGlow] = useState(true);

  // Widget 2: What Drives Me State
  const [terminalLogs, setTerminalLogs] = useState([
    "guest@atharva-mishra:~ $ ./drives_me.sh",
  ]);
  const [isDiagnosticRunning, setIsDiagnosticRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  // Widget 3: Projects I Love State
  const [activeTab, setActiveTab] = useState("ecommerce"); // ecommerce, ai, saas
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const [salesCount, setSalesCount] = useState(128);
  const [activeUsers, setActiveUsers] = useState(1482);
  const [latency, setLatency] = useState(48);
  const [tokensProcessed, setTokensProcessed] = useState(1245800);

  // Live simulation updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Fluctuate stats
      setSalesCount((prev) => prev + (Math.random() > 0.6 ? 1 : 0));
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 9) - 4);
      setLatency((prev) => {
        const diff = Math.floor(Math.random() * 7) - 3;
        const next = prev + diff;
        return next > 30 && next < 70 ? next : prev;
      });
      setTokensProcessed((prev) => prev + Math.floor(Math.random() * 150) + 50);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const runDiagnostics = () => {
    if (isDiagnosticRunning) return;
    setIsDiagnosticRunning(true);
    setProgress(0);
    setTerminalLogs(["guest@atharva-mishra:~ $ ./drives_me.sh"]);

    const logLines = [
      { text: "[INFO] Initializing Atharva's Core Drive...", delay: 500, progress: 15 },
      { text: "[LOAD] Curiosity Engine: LOADED (100% capacity)", delay: 1200, progress: 40 },
      { text: "[LOAD] Challenge Solver Module: ACTIVE [v2.4.0]", delay: 2000, progress: 65 },
      { text: "[LOAD] Community Collaboration Protocol: ONLINE", delay: 2800, progress: 85 },
      { text: "[EXEC] Seeking next ambitious build in full stack...", delay: 3500, progress: 95 },
      { text: "[READY] System status: ONLINE & READY TO BUILD! 🚀", delay: 4200, progress: 100 },
    ];

    logLines.forEach((item) => {
      setTimeout(() => {
        setTerminalLogs((prev) => [...prev, item.text]);
        setProgress(item.progress);
        if (item.progress === 100) {
          setIsDiagnosticRunning(false);
        }
      }, item.delay);
    });
  };

  const resetDiagnostics = () => {
    setTerminalLogs(["guest@atharva-mishra:~ $ ./drives_me.sh"]);
    setProgress(0);
    setIsDiagnosticRunning(false);
  };

  // Passion sandbox styles based on state
  const getThemeColors = () => {
    switch (theme) {
      case "purple":
        return {
          text: "text-purple-400",
          bgGradient: "from-purple-500/20 to-indigo-500/10",
          border: "border-purple-500/30",
          glowColor: "rgba(168,85,247,0.4)",
          accent: "bg-purple-500",
        };
      case "emerald":
        return {
          text: "text-emerald-400",
          bgGradient: "from-emerald-500/20 to-teal-500/10",
          border: "border-emerald-500/30",
          glowColor: "rgba(16,185,129,0.4)",
          accent: "bg-emerald-500",
        };
      case "orange":
      default:
        return {
          text: "text-orange-400",
          bgGradient: "from-orange-500/20 to-amber-500/10",
          border: "border-orange-500/30",
          glowColor: "rgba(249,115,22,0.4)",
          accent: "bg-orange-500",
        };
    }
  };

  const currentColors = getThemeColors();

  const getAnimationVariants = () => {
    switch (animation) {
      case "pulse":
        return {
          animate: { scale: [1, 1.08, 1] },
          transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        };
      case "spin":
        return {
          animate: { rotate: [0, 360] },
          transition: { repeat: Infinity, duration: 10, ease: "linear" },
        };
      case "float":
      default:
        return {
          animate: { y: [0, -12, 0] },
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
        };
    }
  };

  const anim = getAnimationVariants();

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-zinc-900">
          {/* Fixed Background Video */}
          <video
            className="fixed top-0 left-0 w-full h-full object-cover z-0"
            src={bg1}
            autoPlay
            muted
            loop
            playsInline
          />
    
          {/* Dark Overlay */}
          <div className="fixed top-0 left-0 w-full h-full " />

      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center  px-5 py-22 text-orange-500"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Row */}
        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-7xl">
          {/* LEFT: Text */}
          <motion.div className="md:w-1/2 text-center md:text-left" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl text-gray-500 font-extrabold mb-4">
              Hey,
            </h1>
            <h1 className="text-4xl md:text-4xl font-extrabold mb-4">
              I'm Atharva Mishra
            </h1>
            <h1 className="text-4xl md:text-4xl font-bold mb-4 text-gray-500 min-h-[100px] md:min-h-0">
              I'm a{" "}
              <span className="text-orange-500">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "MERN Enthusiast",
                    "UI/UX Explorer",
                    "Problem Solver",
                    "App Developer",
                  ]}
                  loop={0} // 0 = infinite
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

             {/* Social Contact Icons */}
          <div className="mt-6 flex items-center justify-center md:justify-start gap-6">
            <a
              href="https://www.instagram.com/the_atharvamishra_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 transition-colors text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919219004079"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-green-500 transition-colors text-2xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="tel:+919219004079"
              className="text-orange-500 hover:text-blue-400 transition-colors text-2xl"
            >
              <FaPhoneAlt />
            </a>
          </div>

            {/* Download Resume Button */}
            <div className="mt-12 relative inline-block">
              <motion.button
                onClick={() => setShowResumeOptions(!showResumeOptions)}
                className="px-6 py-3 bg-gray-600 text-orange-500 font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg cursor-pointer flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
              >
                <span>Download Resume</span>
                <motion.span
                  animate={{ rotate: showResumeOptions ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block text-xs"
                >
                  ▼
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {showResumeOptions && (
                  <>
                    <div
                      className="fixed inset-0 z-40 cursor-default"
                      onClick={() => setShowResumeOptions(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-56 rounded-xl bg-zinc-950/95 border border-zinc-800/80 backdrop-blur-xl shadow-2xl z-50 overflow-hidden text-left"
                    >
                      <div className="py-1">
                        <a
                          href="/Atharva_mishra_fullstack_resume.pdf"
                          download
                          onClick={() => setShowResumeOptions(false)}
                          className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-orange-500/10 hover:text-orange-400 transition-all font-semibold border-b border-zinc-900/60"
                        >
                          <span>🚀</span> Fullstack Resume
                        </a>
                        <a
                          href="/Atharva_mishra_Agentic_Ai_resume.pdf"
                          download
                          onClick={() => setShowResumeOptions(false)}
                          className="flex items-center gap-2 px-4 py-3 text-sm text-gray-300 hover:bg-orange-500/10 hover:text-orange-400 transition-all font-semibold"
                        >
                          <span>🤖</span> Agentic-AI Resume
                        </a>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            className="md:w-1/4 flex justify-center perspective-1000"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              x: {
                delay: 1,
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 1,
              },
            }}
          >
            <motion.img
              src={logo1}
              alt="Atharva Profile"
              className="w-60 h-60 md:w-140 md:h-140 rounded-full object-cover"
              animate={{ rotateY: 360 }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            />
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="mailto:you@email.com"
          className="mt-12 px-6 py-3 bg-gray-600 text-orange-500 font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          Let's Collaborate
        </motion.a>

        {/* Stack & Bio */}

        <motion.p
          className="text-md text-orange-500 mt-4 max-w-2xl font-bold text-center"
          variants={itemVariants}
        >
          I'm a detail-driven full stack dev who thrives on performance, design,
          and clean code. I believe in shipping fast, iterating faster, and
          creating software that truly matters.
        </motion.p>
      </motion.div>

      {/* Futuristic AI Developer Assistant Console */}
      <AIAssistantSection />

      {/* After CTA Section */}
      <section className="relative z-10 w-full py-24 px-6 bg-transparent text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Card 1: My Passion */}
          <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80 backdrop-blur-xl shadow-2xl flex flex-col justify-between min-h-[460px] hover:border-zinc-700/80 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-orange-500/10 rounded-lg text-orange-500">
                  <FaCode className="text-xl" />
                </div>
                <h3 className="text-xl font-extrabold text-orange-500">
                  My Passion
                </h3>
              </div>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Building intuitive interfaces and powerful backends that users
                love. Every line of code I write has purpose, precision, and
                performance in mind.
              </p>
            </div>

            {/* Sandbox Canvas */}
            <div className="bg-black/40 rounded-xl p-4 border border-zinc-800 flex flex-col items-center justify-between flex-grow">
              <div className="w-full flex items-center justify-center h-28 relative">
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-tr ${currentColors.bgGradient} border ${currentColors.border} flex items-center justify-center`}
                  style={{
                    boxShadow: glow ? `0 0 25px ${currentColors.glowColor}` : "none",
                  }}
                  animate={anim.animate}
                  transition={anim.transition}
                >
                  <FaCogs className={`text-2xl ${currentColors.text}`} />
                </motion.div>
              </div>

              {/* Sandbox Controls */}
              <div className="w-full space-y-3 mt-2 text-xs">
                {/* Theme Selector */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Theme:</span>
                  <div className="flex gap-1.5">
                    {["orange", "purple", "emerald"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTheme(t)}
                        className={`px-2 py-0.5 rounded capitalize font-medium transition-colors cursor-pointer ${
                          theme === t
                            ? "bg-orange-500 text-white font-bold"
                            : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Animation Selector */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Effect:</span>
                  <div className="flex gap-1.5">
                    {["float", "pulse", "spin"].map((a) => (
                      <button
                        key={a}
                        onClick={() => setAnimation(a)}
                        className={`px-2 py-0.5 rounded capitalize font-medium transition-colors cursor-pointer ${
                          animation === a
                            ? "bg-orange-500 text-white font-bold"
                            : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
                        }`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Glow Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Glow effect:</span>
                  <button
                    onClick={() => setGlow(!glow)}
                    className={`px-3 py-0.5 rounded font-medium transition-colors cursor-pointer ${
                      glow
                        ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                        : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
                    }`}
                  >
                    {glow ? "Active" : "Disabled"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: What Drives Me */}
          <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80 backdrop-blur-xl shadow-2xl flex flex-col justify-between min-h-[460px] hover:border-zinc-700/80 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-orange-500/10 rounded-lg text-orange-500">
                  <FaCompass className="text-xl" />
                </div>
                <h3 className="text-xl font-extrabold text-orange-500">
                  What Drives Me
                </h3>
              </div>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Curiosity, challenge, and community. I'm always upskilling,
                exploring new frameworks, and collaborating on ambitious builds.
              </p>
            </div>

            {/* Terminal Body */}
            <div className="bg-black/90 rounded-xl border border-zinc-800 p-4 font-mono text-xs flex-grow flex flex-col justify-between overflow-hidden">
              {/* Terminal Head */}
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 mb-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                </div>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">drives_me.sh — bash</span>
              </div>

              {/* Logs area */}
              <div className="text-[11px] text-zinc-300 space-y-1.5 flex-grow overflow-hidden text-left leading-relaxed">
                {terminalLogs.map((log, index) => (
                  <div
                    key={index}
                    className={
                      log.includes("[READY]")
                        ? "text-green-400 font-bold"
                        : log.startsWith("guest@")
                        ? "text-orange-400"
                        : "text-zinc-300"
                    }
                  >
                    {log}
                  </div>
                ))}
                {isDiagnosticRunning && (
                  <div className="flex items-center gap-2 text-zinc-500">
                    <span className="animate-pulse">Scanning system...</span>
                    <span>{progress}%</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-3 pt-2 border-t border-zinc-800/80 flex gap-2">
                <button
                  onClick={runDiagnostics}
                  disabled={isDiagnosticRunning}
                  className={`flex items-center justify-center gap-1.5 flex-grow py-1.5 px-3 rounded text-xs font-semibold transition-all cursor-pointer ${
                    isDiagnosticRunning
                      ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                      : "bg-orange-500 text-white hover:bg-orange-600 shadow-md shadow-orange-500/10"
                  }`}
                >
                  <FaTerminal /> {isDiagnosticRunning ? "Running..." : "Run Diagnostics"}
                </button>
                <button
                  onClick={resetDiagnostics}
                  disabled={isDiagnosticRunning}
                  className="p-1.5 bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 rounded transition-colors cursor-pointer"
                  title="Reset Terminal"
                >
                  <FaUndo />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Projects I Love */}
          <div className="bg-zinc-900/60 p-6 rounded-2xl border border-zinc-800/80 backdrop-blur-xl shadow-2xl flex flex-col justify-between min-h-[460px] hover:border-zinc-700/80 transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-orange-500/10 rounded-lg text-orange-500">
                  <FaRocket className="text-xl" />
                </div>
                <h3 className="text-xl font-extrabold text-orange-500">
                  Projects I Love
                </h3>
              </div>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Real-world apps with real-world impact — eCommerce platforms,
                productivity tools, admin dashboards, and everything in between.
              </p>
            </div>

            {/* Dashboard Visualizer */}
            <div className="bg-black/40 rounded-xl border border-zinc-800 p-4 flex-grow flex flex-col justify-between">
              {/* Tab Selector */}
              <div className="grid grid-cols-3 gap-1 mb-4 bg-zinc-950/60 p-1 rounded-lg border border-zinc-800/50">
                {[
                  { id: "ecommerce", label: "eComm", icon: FaShoppingCart },
                  { id: "ai", label: "AI Agent", icon: FaRobot },
                  { id: "saas", label: "Dashboard", icon: FaChartLine },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-col sm:flex-row items-center justify-center gap-1 py-1.5 px-2 rounded-md text-[10px] sm:text-xs font-medium transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-orange-500 text-white font-bold"
                          : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
                      }`}
                    >
                      <Icon className="text-xs sm:text-[11px]" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Live Metric Content */}
              <div className="flex-grow flex flex-col justify-center text-left">
                {activeTab === "ecommerce" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    key="ecommerce-tab"
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-zinc-800/60">
                      <span className="text-[11px] text-zinc-400">Checkout Conversion</span>
                      <span className="text-xs font-mono font-bold text-orange-400">3.84% (+0.4%)</span>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-zinc-800/60">
                      <span className="text-[11px] text-zinc-400">Orders / Hour</span>
                      <span className="text-xs font-mono font-bold text-green-400 animate-pulse">
                        {salesCount} orders
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-zinc-800/60">
                      <span className="text-[11px] text-zinc-400">Gateway Status</span>
                      <span className="text-xs font-bold text-emerald-400">99.98% OK</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "ai" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    key="ai-tab"
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-zinc-800/60">
                      <span className="text-[11px] text-zinc-400">Daily Agent Runs</span>
                      <span className="text-xs font-mono font-bold text-orange-400">4,812 runs</span>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-zinc-800/60">
                      <span className="text-[11px] text-zinc-400">Tokens Processed</span>
                      <span className="text-xs font-mono font-bold text-green-400">
                        {tokensProcessed.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-zinc-800/60">
                      <span className="text-[11px] text-zinc-400">Tool Accuracy Rate</span>
                      <span className="text-xs font-bold text-emerald-400">98.6%</span>
                    </div>
                  </motion.div>
                )}

                {activeTab === "saas" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    key="saas-tab"
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-zinc-800/60">
                      <span className="text-[11px] text-zinc-400">WebSocket Users</span>
                      <span className="text-xs font-mono font-bold text-green-400">
                        {activeUsers}
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-zinc-800/60">
                      <span className="text-[11px] text-zinc-400">Server Latency</span>
                      <span className="text-xs font-mono font-bold text-orange-400">
                        {latency}ms
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-zinc-900/40 p-2 rounded border border-zinc-800/60">
                      <span className="text-[11px] text-zinc-400">Server Load</span>
                      <span className="text-xs font-mono font-bold text-emerald-400">12%</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Heartbeat Ticker */}
              <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping inline-block" />
                  Live Simulation
                </span>
                <span>Interval: 1.5s</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
