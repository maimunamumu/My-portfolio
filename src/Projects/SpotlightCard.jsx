import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsDetails from "./ProjectsDetails";

import SocialHubImg from "../assets/projectImage/Screenshot 2025-11-18 204129.png";
import NestMartImg from "../assets/projectImage/Screenshot 2025-11-17 225420.png";
import ShopHeavenImg from "../assets/projectImage/Screenshot 2025-11-18 181449.png";

const SpotlightCard = ({
  id,
  image,
  title,
  subtitle,
  description,
  liveLink,
  clientRepo,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}

        whileHover={{ y: -12 }}
        className="group relative bg-gradient-to-br from-purple-900/20 via-black/40 to-pink-900/20 
                   backdrop-blur-2xl border border-purple-500/30 rounded-3xl overflow-hidden
                   shadow-2xl hover:shadow-purple-500/25 transition-all duration-700
                   cursor-pointer"
      >
        {/* Floating Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

        {/* Project Image - Full Visible, No Crop */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full object-cover object-top transition-transform duration-1000 
                       group-hover:scale-110 group-hover:rotate-1"
            style={{ height: "420px" }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          
          {/* Title on Image Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
            <p className="text-purple-300 text-lg mt-1">{subtitle}</p>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-8 space-y-5 bg-gradient-to-b from-transparent to-black/60">
          <p className="text-gray-200 leading-Relaxed line-clamp-3">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
                         text-white font-semibold rounded-full hover:scale-105 
                         shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Live Demo
            </a>

            <a
              href={clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-purple-500 text-purple-300 
                         font-semibold rounded-full hover:bg-purple-500/20 
                         transition-all duration-300 backdrop-blur-sm"
            >
              GitHub
            </a>

            <button
              onClick={() => setIsOpen(true)}
              className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 
                         text-white font-medium rounded-full hover:bg-white/20 
                         transition-all duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      </motion.div>

      {isOpen && (
        <ProjectsDetails
          storeId={id}
          isOpen={isOpen}
          close={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default function SpotlightProjects() {
  const projects = [
    {
      id: 1,
      image: NestMartImg,
      title: "Nest Mart",
      subtitle: "Grocery Shopping Experience",
      description: "A clean, modern grocery e-commerce platform with smooth navigation, category filtering, and premium user experience.",
      liveLink: "https://nest-mart-and-grosery-website.vercel.app/",
      clientRepo: "https://github.com/maimunamumu/Nest-Mart-And-Grosery-Website",
    },
    {
      id: 2,
      image: ShopHeavenImg,
      title: "Shop Heaven",
      subtitle: "Premium Fashion Store",
      description: "Minimal & elegant e-commerce UI with fast transitions, product showcase, and luxurious feel.",
      liveLink: "https://my-shop-e-commerce-website.vercel.app/",
      clientRepo: "https://github.com/maimunamumu/my-shop-e-commerce-website",
    },
    {
      id: 3,
      image: SocialHubImg,
      title: "Tourex",
      subtitle: "Travel Booking Platform",
      description: "A stunning, fully responsive travel agency website with advanced filtering, tour details, cart system, and breathtaking animations.",
      liveLink: "https://travel-website-project-3.vercel.app/",
      clientRepo: "https://github.com/maimunamumu/Travel-website",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black/95">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-extrabold text-[#C27AFF] "
        >
          My Project
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1.5 w-48 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6 rounded-full"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project) => (
          <SpotlightCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}