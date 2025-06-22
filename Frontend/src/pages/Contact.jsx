import React, { useState } from "react";
import { motion } from "framer-motion";
import aag from "../assets/aag.mp4";
import { ClipLoader } from "react-spinners";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true); // Start loading

fetch("backend/index.js", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
})

    .then((res) => {
      setLoading(false); // Stop loading
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    })
    .catch((err) => {
      setLoading(false); // Stop loading
      console.error("Error submitting form:", err);
      alert("An error occurred.");
    });
};



  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        src={aag}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="fixed top-0 left-0 w-full h-full " />

      {/* Foreground content */}
      <motion.div
        className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-3xl  p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">Contact Me</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-zinc-800 text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-zinc-800 text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-zinc-800 text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-md bg-zinc-800 text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

          {loading ? (
  <div className="flex justify-center py-3">
    <ClipLoader color="#f97316" size={35} />
  </div>
) : (
  <button
    type="submit"
    className="w-full py-3 bg-orange-400 hover:bg-orange-600 text-gray-900 font-semibold rounded-md transition-all"
  >
    Send Message
  </button>
)}

          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
