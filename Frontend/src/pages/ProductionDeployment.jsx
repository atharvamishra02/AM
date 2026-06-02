import React from "react";
import bg1 from "../assets/bg1.mp4";
import { motion } from "framer-motion";

const deploymentSkills = [
  {
    title: "Docker & Containerization",
    desc: "Building production-grade multi-stage Docker images, compose orchestration, and container security hardening.",
  },
  {
    title: "CI/CD Pipelines",
    desc: "Automated build, test, scan, and deploy workflows using GitHub Actions, with image caching and rollback support.",
  },
  {
    title: "SLURM & HPC Clusters",
    desc: "Deploying services on HPC clusters using Singularity/Apptainer containers and SLURM batch job scheduling.",
  },
  {
    title: "Nginx & SSL/TLS",
    desc: "Configuring reverse proxies, load balancing, HTTPS with Let's Encrypt, security headers, and gzip compression.",
  },
  {
    title: "Server Provisioning",
    desc: "Automated server setup scripts covering firewall, user management, Docker installation, and log rotation.",
  },
  {
    title: "Monitoring & Observability",
    desc: "Container and host metrics with cAdvisor, Prometheus, and Grafana for real-time health dashboards.",
  },
];

const ProductionDeployment = () => {
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
          Production Deployment & DevOps
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-orange-400 leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I deliver battle-tested deployment pipelines that take applications from code to production with confidence.
          From containerizing apps with Docker and orchestrating CI/CD with GitHub Actions, to running workloads on
          SLURM-managed HPC clusters and hardening servers with Nginx, SSL, and real-time monitoring — I ensure your
          applications are secure, scalable, and always online.
        </motion.p>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {deploymentSkills.map((skill, index) => (
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

export default ProductionDeployment;
