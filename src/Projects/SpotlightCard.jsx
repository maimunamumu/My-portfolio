
import React, { useState } from "react";
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



    let [isOpen, setIsOpen] = useState(false)
    const [storeId,setStoreId] = useState(null)


    function close() {
        setIsOpen(false)
    }
    return (
        <div
            className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-400/20 backdrop-blur-lg border border-cyan-300/20 p-0 ${className}`}
            style={{ background: spotlightColor }}
        >

            <div className="w-full h-48 sm:h-56 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>


            <div className="p-6 space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#C27AFF]">{title}</h3>
                <p className="text-sm sm:text-base text-gray-300 font-medium">{subtitle}</p>
                <p className="text-gray-200 text-sm sm:text-base">{description}</p>


                <div className="flex flex-wrap gap-2 mt-4">
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
                        Client
                    </a>
                    <a
                        href={serverRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1 bg-[#C27AFF] text-white rounded-lg shadow-md hover:bg-[#9810FA] transition"
                    >
                        Server
                    </a>
                    <button


                        onClick={() => {
                            setIsOpen(!isOpen)
                            setStoreId(id)
                        }}
                        className="px-4 py-1 border flex justify-center items-center border-[#C27AFF] text-[#C27AFF] rounded-lg hover:bg-[#9810FA] hover:text-white transition"
                    >
                        View More
                    </button>
                    {isOpen && <ProjectsDetails storeId={storeId && storeId} isOpen={isOpen} close={close} ></ProjectsDetails>}

                </div>
            </div>
        </div>
    );
};




export default function SpotlightProjects() {
    const projects = [
         {
        id: 1,
        image: "https://i.ibb.co.com/LFCZdzg/Screenshot-2025-11-13-212856.png",
        title: "Nest Mart ",
        subtitle: "Role Based Front-End E-commerce Website",
        description: "Nest Mart is a modern grocery shopping web application built with React and Tailwind CSS. It provides a smooth, responsive user experience with dynamic product listings, category-based filtering. This project focuses on clean UI design, reusability, and fast performance — making online grocery shopping seamless and user-friendly.",
        liveLink: "https://nest-mart-and-grosery-website.vercel.app/",
        clientRepo: "https://github.com/maimunamumu/Nest-Mart-And-Grosery-Website?tab=readme-ov-file",
        serverRepo: "https://github.com/maimunamumu/Nest-Mart-And-Grosery-Website?tab=readme-ov-file",
        spotlightColor: "rgba(255, 0, 229, 0.15)",
         viewLink: "https://nest-mart-and-grosery-website.vercel.app/",
    },
        
        {
            id: 2,
            image: "https://i.ibb.co.com/9HtKZ7kP/Screenshot-2025-11-13-212727.png",
            title: "Shop Heaven",
            subtitle: "Role-Based Frontend E-Commerce WebSite",
         description: "Shop Heaven is a role-based frontend e-commerce web application built entirely with React and React Router. Customers can browse products, add items to the cart, and navigate seamlessly through different pages. The project features a clean and responsive design using Tailwind CSS, providing a smooth and modern shopping experience for all users.",
            liveLink: "https://my-shop-e-commerce-website.vercel.app/",
            viewLink: "https://my-shop-e-commerce-website.vercel.app/",
             spotlightColor: "rgba(255, 0, 229, 0.15)",
            clientRepo: "https://github.com/maimunamumu/my-shop-e-commerce-website",
            serverRepo: "https://github.com/maimunamumu/my-shop-e-commerce-website"
        }
        ,
        {
            id: 3,
            image: "https://i.ibb.co.com/zhknYBtD/Screenshot-2025-11-13-212327.png",
            title: "Social Hub",
            subtitle: "FrontEnd Application Website",
          description: "Social Hub is a frontend social media web application built with React and React Router. Users can view posts, navigate between different pages, and interact with the UI in a seamless way. The project emphasizes responsive design, modern UI/UX, and smooth navigation without any backend integration.",
            liveLink: "https://social-hub-apps-project-a8nc.vercel.app/",
            viewLink: "https://social-hub-apps-project-a8nc.vercel.app/",
            spotlightColor: "rgba(255, 0, 229, 0.15)",
            clientRepo: "https://github.com/maimunamumu/Social-Hub-Apps-Project",
            serverRepo: "https://github.com/maimunamumu/Social-Hub-Apps-Project"
        }
    ];

    return (
        <section className="py-12 px-6 border sm:px-12 bg-[#0f0f1a]">
            <h2 className="text-center text-4xl sm:text-5xl font-bold text-[#C27AFF] my-6">
                My Projects
            </h2>
             <div className='text-center border h-1 w-[50%] mx-auto bg-[#9810FA] rounded-md'></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {projects.map((proj, idx) => (
                    <SpotlightCard key={idx} {...proj} />
                ))}
            </div>
        </section>
    );
}
