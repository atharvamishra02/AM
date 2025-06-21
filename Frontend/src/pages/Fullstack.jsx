import React from "react"; // ✅ FIXED

import aag from "../assets/aag.mp4";
import { motion } from "framer-motion";





const fullstackSkills = [
  {
    title: "React & Tailwind",
    desc: "Built seamless, responsive UIs using component-based architecture and utility-first styling.",
  },
  {
    title: "Node.js & Express",
    desc: "Handled business logic, authentication, and RESTful APIs for scalable applications.",
  },
  {
    title: "MongoDB",
    desc: "Managed NoSQL databases with Mongoose, optimized for flexibility and performance.",
  },
  {
    title: "JWT & Auth",
    desc: "Secured applications with token-based authentication and protected routes.",
  },
  {
    title: "API Integration",
    desc: "Integrated third-party services and microservices to enhance app functionality.",
  },
  {
    title: "Deployment & Hosting",
    desc: "Deployed apps on platforms like Render, Vercel, and handled NGINX/PM2 setups.",
  },
];

const FullStack = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        src={aag}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="fixed top-0 left-0 w-full h-full " />

      {/* Foreground Content */}
      <div className="relative z-10 px-6 py-24 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-500 mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Full Stack Development
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-orange-400 leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          As a Full Stack Developer with 2+ years of hands-on experience, I bridge the gap between elegant frontend interfaces
          and powerful backend systems. I take ownership of the full development cycle—from designing interactive UIs
          to architecting backend APIs, securing user data, and deploying scalable apps in production environments.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {fullstackSkills.map((skill, index) => (
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
              <p className="text-sm text-gray-400 mt-2 italic">Experience: 2+ years</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullStack;
