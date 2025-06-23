import React from "react";
import { motion } from "framer-motion";
import logo1 from "../assets/logo1.png";
import bg1 from "../assets/bg1.mp4";
import { Typewriter } from "react-simple-typewriter";
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

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

      {/* Main Content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center  px-5 py-22 text-orange-400"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Row */}
        <motion.div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-7xl">
          {/* LEFT: Text */}
          <motion.div className="md:w-1/2 text-left" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl text-gray-500 font-extrabold mb-4">
              Hey,
            </h1>
            <h1 className="text-4xl md:text-4xl font-extrabold mb-4">
              I'm Atharva Mishra
            </h1>
            <h1 className="text-4xl md:text-4xl font-bold mb-4 text-gray-500">
              I'm a{" "}
              <span className="text-orange-400">
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
          <div className="mt-6 flex items-center gap-6">
            <a
              href="https://www.instagram.com/the_atharvamishra_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-600 transition-colors text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919219004079"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-green-500 transition-colors text-2xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="tel:+919219004079"
              className="text-orange-400 hover:text-blue-400 transition-colors text-2xl"
            >
              <FaPhoneAlt />
            </a>
          </div>

            {/* Download Resume Button */}
            <div className="mt-12">
              <motion.a
                href="/Atharva_Mishra.pdf"
                download
                className="px-5 py-3 bg-gray-500 text-orange-400 font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg"
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
          className="mt-12 px-6 py-3 bg-gray-600 text-orange-400 font-bold rounded-full hover:bg-yellow-300 transition-colors shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          Let's Collaborate
        </motion.a>

        {/* Stack & Bio */}

        <motion.p
          className="text-md text-orange-400 mt-4 max-w-2xl font-bold text-center"
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
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-2 text-orange-400">
              My Passion
            </h3>
            <p className="text-gray-300">
              Building intuitive interfaces and powerful backends that users
              love. Every line of code I write has purpose, precision, and
              performance in mind.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-2 text-orange-400">
              What Drives Me
            </h3>
            <p className="text-gray-300">
              Curiosity, challenge, and community. I'm always upskilling,
              exploring new frameworks, and collaborating on ambitious builds.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-2 text-orange-400">
              Projects I Love
            </h3>
            <p className="text-gray-300">
              Real-world apps with real-world impact — eCommerce platforms,
              productivity tools, admin dashboards, and everything in between.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
