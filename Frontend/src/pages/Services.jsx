import React from "react";
import { motion } from "framer-motion";
import bg1 from "../assets/bg1.mp4"; // Background video
import { Link } from "react-router-dom";

const services = [
  {
    title: "Frontend Development",
    desc: "Pixel-perfect UI with React, Tailwind, and animations for fast, responsive apps.",
  },
  {
    title: "Backend Development",
    desc: "Secure and scalable APIs using Node.js, Express, and MongoDB.",
  },
  {
    title: "Full-Stack Solutions",
    desc: "From database to browser — complete web apps with integrated functionality.",
  },
];

const Services = () => {
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

      {/* Content */}
      <section
        id="services"
        className="relative z-20 px-6 py-24 flex flex-col items-center text-orange-400"
      >
        <motion.h2
          className="text-4xl font-bold mb-16 text-center drop-shadow-lg"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          What I Do
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <Link to={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="bg-white/10 border border-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-blue-500/40 transition-all hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
