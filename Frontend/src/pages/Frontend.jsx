import React from "react";
import bg1 from "../assets/bg1.mp4";
import { motion } from "framer-motion";

const frontendSkills = [
  {
    title: "React.js",
    desc: "Built component-based interfaces with hooks, routing, and dynamic state handling.",
  },
  {
    title: "Tailwind CSS",
    desc: "Designed responsive UIs with utility-first styling and minimal custom CSS.",
  },
  {
    title: "Framer Motion",
    desc: "Added rich animations and transitions to elevate user experience.",
  },
  {
    title: "Responsive Design",
    desc: "Ensured cross-device compatibility with mobile-first design principles.",
  },
  {
    title: "React Router",
    desc: "Created single-page apps with route-based navigation and URL param handling.",
  },
  {
    title: "UI/UX Principles",
    desc: "Focused on clarity, accessibility, and interactive feedback to engage users.",
  },
];

const Frontend = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
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
          Frontend Development
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-orange-400 leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I specialize in crafting intuitive, high-performance user interfaces using modern frontend tools and design systems.
          With 2+ years of experience, I focus on building interfaces that are responsive, accessible, and visually stunning.
          My frontend stack is powered by React.js, Tailwind CSS, and animation libraries like Framer Motion.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {frontendSkills.map((skill, index) => (
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

export default Frontend;
