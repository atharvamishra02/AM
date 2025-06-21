import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';

// Lazy load all pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Frontend = lazy(() => import("./pages/Frontend"));
const Backend = lazy(() => import("./pages/Backend"));
const Fullstack = lazy(() => import("./pages/Fullstack"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="text-white text-center mt-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/frontend-development" element={<Frontend />} />
          <Route path="/backend-development" element={<Backend />} />
          <Route path="/full-stack-solutions" element={<Fullstack />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
