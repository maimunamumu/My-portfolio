import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsDetails from "./ProjectsDetails";

const SpotlightCard = ({
    id = '',
    image = "/project-placeholder.jpg",
    title = "Project Title",
    subtitle = "Project Subtitle",
    description = "A short description of the project goes here.",
    liveLink = "#",
    clientRepo = "#",
    serverRepo = "#",
    spotlightColor = "rgba(0, 229, 255, 0.2)",
    className = "",
}) => {

    let [isOpen, setIsOpen] = useState(false);
    const [storeId, setStoreId] = useState(null);

    function close() {
        setIsOpen(false);
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            animate={{
                y: [0, -8, 0], // subtle hum effect
            }}
            transition={{
                y: { repeat: Infinity, repeatType: "mirror", duration: 4, ease: "easeInOut" },
                default: { duration: 0.6, ease: "easeOut" },
            }}
            whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(194, 122, 255, 0.3)"
            }}
            className={`relative rounded-2xl overflow-hidden shadow-lg 
            backdrop-blur-lg border border-cyan-300/20 p-0 flex flex-col 
            transition-all duration-300 ${className}`}
            style={{ background: spotlightColor }}
        >

            {/* Image */}
            <div className="w-full h-48 sm:h-56 overflow-hidden flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#C27AFF]">{title}</h3>
                <p className="text-sm sm:text-base text-gray-300 font-medium">{subtitle}</p>
                <p className="text-gray-200 text-sm sm:text-base">{description}</p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 bg-[#C27AFF] text-white rounded-lg shadow-md hover:bg-[#9810FA] transition"
                    >
                        Live
                    </a>

                    <a
                        href={clientRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 bg-[#C27AFF] text-white rounded-lg shadow-md hover:bg-[#9810FA] transition"
                    >
                        GitHub
                    </a>

                    <button
                        onClick={() => {
                            setIsOpen(!isOpen);
                            setStoreId(id);
                        }}
                        className="px-4 py-1 border border-[#C27AFF] text-[#C27AFF] rounded-lg 
                        hover:bg-[#9810FA] hover:text-white transition"
                    >
                        View More
                    </button>

                    {isOpen && (
                        <ProjectsDetails
                            storeId={storeId}
                            isOpen={isOpen}
                            close={close}
                        />
                    )}
                </div>
            </div>

        </motion.div>
    );
};

export default function SpotlightProjects() {
    const projects = [
        {
            id: 1,
            image: "https://i.ibb.co.com/LFCZdzg/Screenshot-2025-11-13-212856.png",
            title: "Nest Mart",
            subtitle: "Frontend E-Commerce Website",
            description:
                "Nest Mart is a responsive grocery shopping website built with React and Tailwind. Users can browse and filter products easily with a clean and fast interface.",
            liveLink: "https://nest-mart-and-grosery-website.vercel.app/",
            clientRepo:
                "https://github.com/maimunamumu/Nest-Mart-And-Grosery-Website?tab=readme-ov-file",
            serverRepo:
                "https://github.com/maimunamumu/Nest-Mart-And-Grosery-Website?tab=readme-ov-file",
            spotlightColor: "rgba(255, 0, 229, 0.15)",
        },

        {
            id: 2,
            image: "https://i.ibb.co.com/9HtKZ7kP/Screenshot-2025-11-13-212727.png",
            title: "Shop Heaven",
            subtitle: "Frontend E-Commerce Website",
            description:
                "Shop Heaven is a React-based e-commerce website where users can browse products, add items to the cart, and enjoy smooth navigation with a clean UI.",
            liveLink: "https://my-shop-e-commerce-website.vercel.app/",
            clientRepo: "https://github.com/maimunamumu/my-shop-e-commerce-website",
            serverRepo: "https://github.com/maimunamumu/my-shop-e-commerce-website",
            spotlightColor: "rgba(255, 0, 229, 0.15)",
        },

        {
            id: 3,
            image: "https://i.ibb.co.com/zhknYBtD/Screenshot-2025-11-13-212327.png",
            title: "Social Hub",
            subtitle: "Frontend Social Media Website",
            description:
                "Social Hub is a React-based social media website where users can view posts and navigate through pages easily with a simple, modern interface.",
            liveLink: "https://socialhub2saima-new.vercel.app/",
            clientRepo: "https://github.com/maimunamumu/social-hub-apps-project",
            serverRepo: "https://github.com/maimunamumu/social-hub-apps-project",
            spotlightColor: "rgba(255, 0, 229, 0.15)",
        },
    ];

    return (
        <section className="py-12 px-6 sm:px-12 bg-[#0f0f1a]">
            <h2 className="text-center text-4xl sm:text-5xl font-bold text-[#C27AFF] my-6">
                My Projects
            </h2>

            <div className="text-center h-1 w-[50%] mx-auto bg-[#9810FA] rounded-md"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {projects.map((proj) => (
                    <SpotlightCard key={proj.id} {...proj} />
                ))}
            </div>
        </section>
    );
}
