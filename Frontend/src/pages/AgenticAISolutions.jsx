import React from "react";
import bg1 from "../assets/bg1.mp4";
import { motion } from "framer-motion";

const agenticSkills = [
  {
    title: "AI Agent Architecture",
    desc: "Designing autonomous agents using planning, memory, reflection, and ReAct patterns.",
  },
  {
    title: "LangGraph & LangChain",
    desc: "Building complex, stateful multi-agent workflows and orchestration frameworks.",
  },
  {
    title: "Multi-Agent Collaboration",
    desc: "Implementing collaborative agent groups with specialized roles using crewAI and AutoGen.",
  },
  {
    title: "Tool Use & Function Calling",
    desc: "Equipping agents with custom tools to run code, search databases, and call external APIs.",
  },
  {
    title: "Vector Databases & RAG",
    desc: "Developing Retrieval-Augmented Generation workflows using Pinecone, Chroma, and pgvector.",
  },
  {
    title: "Agentic Evaluation & Guardrails",
    desc: "Testing agent safety, behavior, and output reliability using LangSmith and NeMo Guardrails.",
  },
];

const AgenticAISolutions = () => {
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

      {/* Foreground Content */}
      <div className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-500 mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Agentic AI Solutions
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-orange-400 leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I specialize in building autonomous AI agents, multi-agent frameworks, and workflow automation systems that solve complex, multi-step problems. By leveraging state-of-the-art LLMs, stateful orchestration libraries, and vector databases, I build production-grade agentic systems designed to operate independently and make smart decisions.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agenticSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-md backdrop-blur-md hover:shadow-orange-400/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-500 mb-2">{skill.title}</h3>
              <p className="text-sm text-orange-400">{skill.desc}</p>
              <p className="text-sm text-gray-500 mt-2 italic">Experience: 2+ years</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgenticAISolutions;
