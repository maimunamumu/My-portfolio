import React, { useContext, useState } from "react";
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

  return (
    <section
      ref={contactRef}
      className="relative py-16 px-4 sm:px-12 text-gray-200"
    >
      {/* Background gradient / subtle spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#9810FA]/20 via-black/80 to-black/90 -z-10"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Info Section */}
        <div className="space-y-6">
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
              maimunamumu7@gmail.com.com
            </span>
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
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
        </form>
      </div>
    </section>
  );
};

export default Contact;
