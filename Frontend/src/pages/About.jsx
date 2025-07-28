import React from "react";
import bg1 from "../assets/bg1.mp4";
import am from "../assets/am.png";
import { motion } from "framer-motion";

import { Typewriter } from 'react-simple-typewriter';

import js from '../assets/js.png';
import node from '../assets/node.png';
import database from '../assets/database.png';
import react from '../assets/react.png';
import rn from '../assets/rn.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import j from '../assets/j.png';
import g from '../assets/g.png';
import figma from '../assets/figma.png';
import next from '../assets/next.webp';
import python from '../assets/python.webp';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // Delay between icons
    },
  },
};

const itemVariants = {
  hidden: { y: 100, opacity: 0 }, // Fly in from bottom
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const techStack = [
  { src: js, alt: "JavaScript" },
  { src: node, alt: "Node.js" },
  { src: database, alt: "MongoDB" },
  { src: react, alt: "React" },
  { src: rn, alt: "React Native" },
  { src: html, alt: "HTML5" },
  { src: css, alt: "CSS3" },
  { src: j, alt: "Java" },
  { src: g, alt: "GitHub" },
  { src: figma, alt: "Figma" },
  { src: next, alt: "next.webp" },
  { src: python, alt: "python.webp" },
];

const projects = [
  

  {
    title: "Yuvdish",
    description: "Yuvdish bridges the gap between blue-collar job seekers and recruiters in Bengaluru, empowering livelihoods through smart matchmaking, real-time listings, and human-first tech.",
    link: "https://yuvdish.netlify.app/"
  },
  {
    title: "LearnX",
    description: "A full-stack learning management platform with separate Admin and Student portals. Admins can create and manage courses, while students can enroll, study, and track their progress. Built using React, Node.js, Express, and MongoDB.",
    link: "https://olp2.up.railway.app/"
  },

  {
    title: "The Spiritual Trends",
    description: "Building a full-stack spiritual trends platform showcasing divine feminine energy, rituals, and goddess-centric products — blending sacred aesthetics with modern tech, tailored for a niche audience.",
    link: "https://tsm1.netlify.app/"
  },
  {
    title: "ShoeVerse",
    description: "A full-stack e-commerce platform for designer shoes with categories, cart, and checkout built using MERN stack.",
    link: "https://kingshoe.netlify.app/"
  },
  {
    title: "Portfolio",
    description: "MY first portfolio i made while learning basic concepts of Nextjs .",
    link: "https://harshitrajarya.vercel.app/"
  },
];


const About = () => {
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
      <div className="relative z-10 min-h-screen flex flex-col justify-between items-center gap-15 text-white px-10 py-22">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-orange-400 mb-12 text-center drop-shadow-md">
          About Me
        </h2>

        {/* Image + Typing Text Section */}
<div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-120 max-w-6xl w-full">
  {/* Typewriter Description - Now on Left */}
  <div className="md:w-1/2 text-center md:text-left text-lg leading-relaxed">
    <span className="text-orange-400 font-bold">
      <Typewriter
        words={[
          "I am a passionate Full Stack Developer who enjoys building scalable, user-first applications using React, Tailwind CSS, Node.js, and MongoDB.",
          "My strength lies in converting complex ideas into clean, optimized, and responsive web solutions. Outside of coding, I sketch UI mockups, explore animations, and occasionally reverse-engineer websites just for fun."
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={30}
        delaySpeed={1500}
      />
    </span>
  </div>

  {/* Profile Image - Now on Right */}
  <div className="flex justify-center md:w-1/2">
    <img
      src={am}
      alt="Atharva Mishra"
      className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-orange-400 shadow-lg object-cover"
    />
  </div>
</div>

<p className="font-bold text-3xl text-orange-400 mb-6">Tech I Use</p>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-8 place-items-center px-10 bg-white/10 py-8 rounded-xl backdrop-blur-md shadow-md w-full max-w-4xl overflow-hidden">
  {techStack.map((item, index) => (
    <img
      key={index}
      src={item.src}
      alt={item.alt}
      className="w-16 h-16 sm:w-20 sm:h-20"
    />
  ))}
</div>

{/* 🔗 Projects Section */}
<div className="mt-20 w-full max-w-6xl">
  <h2 className="text-4xl text-orange-400 font-bold text-center mb-12 drop-shadow-md">Projects</h2>

  {projects.map((project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row items-center mb-16 gap-8 md:gap-20 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Project Description */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg w-full md:w-2/3 text-center md:text-left">
        <h3 className="text-2xl font-bold text-orange-300 mb-3">{project.title}</h3>
        <p className="text-gray-300">{project.description}</p>
      </div>

      {/* Project Link */}
      <div className="w-full md:w-1/3 text-center">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
        >
          Visit Project 🔗
        </a>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </div>
  );
};

export default About;
