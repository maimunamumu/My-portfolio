import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../Context/AuthContext";

const Contact = () => {
  const { contactRef } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={contactRef}
      className="relative py-16 px-4 sm:px-12 text-gray-200"
    >
      {/* Background gradient / subtle spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#9810FA]/20 via-black/80 to-black/90 -z-10"></div>

      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Info Section */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#9810FA]">
            Contact Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">
            Got a question or want to work together? I’d love to hear from you.
            Fill out the form and I’ll get back to you as soon as possible.
          </p>
          <p className="text-gray-400">
            You can also reach me via email:{" "}
            <span className="text-[#C27AFF] font-medium">
              maimunamumu7@gmail.com
            </span>
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          variants={itemVariants}
          className="bg-black/70 backdrop-blur-md border border-[#9810FA]/30 rounded-2xl p-8 space-y-5 shadow-lg shadow-[#9810FA]/20"
        >
          {/* Name & Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 focus:outline-none focus:border-[#C27AFF] transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-1 p-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 focus:outline-none focus:border-[#C27AFF] transition"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 focus:outline-none focus:border-[#C27AFF] transition"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="w-full p-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 focus:outline-none focus:border-[#C27AFF] transition"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#9810FA] to-[#C27AFF] text-black font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
