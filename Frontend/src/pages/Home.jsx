import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  FaCogs
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
            <div className="mt-12">
              <motion.a
                href="/Atharva_Mishra.pdf"
                download
                className="px-5 py-3 bg-gray-600 text-orange-500 font-bold rounded-full hover:bg-gray-800 transition-colors shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 }}
              >
                Download Resume
              </motion.a>
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
              <div className="text-[11px] text-zinc-300 space-y-1.5 flex-grow overflow-y-auto max-h-48 text-left leading-relaxed">
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
