import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectsDetails from "./ProjectsDetails";

// Imported Images (REPLACING URL IMAGES)
import SocialHubImg from "../assets/projectImage/Screenshot 2025-11-18 204129.png";
import NestMartImg from "../assets/projectImage/Screenshot 2025-11-17 225420.png";
import ShopHeavenImg from "../assets/projectImage/Screenshot 2025-11-18 181449.png";

const SpotlightCard = ({
    id = "",
    image,
    title,
    subtitle,
    description,
    liveLink,
    clientRepo,
    serverRepo,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [storeId, setStoreId] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}

            animate={{ y: [0, -6, 0] }}
            transition={{
                y: { repeat: Infinity, repeatType: "mirror", duration: 4 },
                scale: { duration: 0.5 },
            }}

            whileHover={{
                scale: 1.04,
                boxShadow: "0 0 35px rgba(194, 122, 255, 0.35)",
            }}

            className="relative rounded-2xl overflow-hidden shadow-lg 
                       border border-[#C27AFF33] 
                       bg-[#1a1128]/60 backdrop-blur-xl 
                       transition-all duration-300 flex flex-col"
        >
            {/* Image */}
            <div className="w-full  overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[400px]  object-cover transition-transform duration-500 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-6 space-y-3 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#C27AFF]">
                    {title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300">{subtitle}</p>

                <p className="text-gray-200 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-auto pt-3">
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-[#C27AFF] text-white rounded-lg 
                                hover:bg-[#9810FA] transition shadow-md"
                    >
                        Live
                    </a>

                    <a
                        href={clientRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 bg-[#C27AFF] text-white rounded-lg 
                                hover:bg-[#9810FA] transition shadow-md"
                    >
                        GitHub
                    </a>

                    <button
                        onClick={() => {
                            setIsOpen(true);
                            setStoreId(id);
                        }}
                        className="px-4 py-1.5 border border-[#C27AFF] text-[#C27AFF] rounded-lg 
                                hover:bg-[#9810FA] hover:text-white transition"
                    >
                        View More
                    </button>
                </div>

                {isOpen && (
                    <ProjectsDetails
                        storeId={storeId}
                        isOpen={isOpen}
                        close={() => setIsOpen(false)}
                    />
                )}
            </div>
        </motion.div>
    );
};


export default function SpotlightProjects() {
    const projects = [
        {
            id: 1,
            image: NestMartImg,
            title: "Nest Mart",
            subtitle: "Frontend E-Commerce Website",
            description:
                "Clean grocery shopping UI with category browsing, product view, and a smooth user experience.",
            liveLink: "https://nest-mart-and-grosery-website.vercel.app/",
            clientRepo: "https://github.com/maimunamumu/Nest-Mart-And-Grosery-Website",
            serverRepo: "https://github.com/maimunamumu/Nest-Mart-And-Grosery-Website",
        },

        {
            id: 2,
            image: ShopHeavenImg,
            title: "Shop Heaven",
            subtitle: "Premium E-Commerce UI",
            description:
                "Minimal and elegant e-commerce UI with fast transitions, product showcase, and clean layout.",
            liveLink: "https://my-shop-e-commerce-website.vercel.app/",
            clientRepo: "https://github.com/maimunamumu/my-shop-e-commerce-website",
            serverRepo: "https://github.com/maimunamumu/my-shop-e-commerce-website",
        },

        {
            id: 3,
            image: SocialHubImg,
            title: "Travel Website",
            subtitle: "Explore the World – Built with React",
          description: "Modern, fully responsive travel agency website built with React and Tailwind CSS. Includes destination , tour packages,  travel booking experience.",
            liveLink: "https://travel-website-project-3.vercel.app/",
            clientRepo: "https://github.com/maimunamumu/Travel-website",
            serverRepo: "https://github.com/maimunamumu/Travel-website",
        },
    ];

    return (
        <section className="py-14 px-6 sm:px-12 bg-[#0f0f1a]">
            <h2 className="text-center text-4xl sm:text-5xl font-bold text-[#C27AFF]">
                My Projects
            </h2>

            <div className="h-1 w-40 bg-[#9810FA] mx-auto rounded-full mt-3"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {projects.map((proj) => (
                    <SpotlightCard key={proj.id} {...proj} />
                ))}
            </div>
        </section>
 );
}