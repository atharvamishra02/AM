import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-orange-400 ">

        {/* Left Side: Social Icons + Logo */}
        <div className="flex items-center gap-6">
          {/* Social Icons */}
          <motion.div
            className="flex gap-4 text-lg md:text-xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="https://github.com/atharvamishra02"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/atharvamishra02/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:mishraatharva756@gmail.com"
              className="hover:text-red-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          </motion.div>

          {/* Logo */}
          {/* <Link to="/" className="text-xl text-gray-400 font-bold tracking-wider ml-4">
            A.M
          </Link> */}
        </div>

        {/* Right Side: Nav Links */}
        <ul className="flex gap-6 text-sm md:text-base font-medium">
          <li>
            <Link to="/" className="text-orange-400 hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-400 hover:text-blue-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-orange-400 hover:text-blue-400 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
