import React from "react";
import bg1 from "../assets/bg1.mp4";
import { motion } from "framer-motion";

const backendSkills = [
  { title: "Node.js", desc: "Built scalable, asynchronous apps with event-driven architecture." },
  { title: "Express.js", desc: "Created robust REST APIs with middleware and routing systems." },
  { title: "MongoDB", desc: "Designed flexible schemas and optimized queries for performance." },
  { title: "Postman", desc: "Tested APIs, managed environments, and automated workflows." },
  { title: "API Testing", desc: "Implemented test suites for reliability and contract testing." },
  { title: "Server & Deployment", desc: "Handled production-grade servers with NGINX, PM2, and cloud platforms." },
];

const Backend = () => {
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
          Backend Development
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-orange-400 leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I specialize in designing and building robust backend systems that power modern web applications.
          With 2+ years of experience in Node.js, Express, and MongoDB, I’ve built and deployed high-performance APIs,
          handled secure authentication, managed servers, and optimized databases to serve thousands of users seamlessly.
        </motion.p>

        {/* Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {backendSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/10 border border-white/20 rounded-xl p-6 shadow-md backdrop-blur-md hover:shadow-orange-400/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-500 mb-2">{skill.title}</h3>
              <p className="text-sm font-bold text-orange-400">{skill.desc}</p>
              <p className="text-sm text-gray-500 mt-2 italic">Experience: 2+ years</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Backend;
