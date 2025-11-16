import React from "react";
import { motion } from "framer-motion";

export default function LanyardCard({
    title = "Mymuna Jahan",
    dropDelay = 0.2,
}) {
    return (
        <section className="relative w-full flex flex-col items-center px-4 sm:px-12 bg-[#0f0f1a] lg:pt-12 pt-12 lg:pb-12 pb-6">
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-purple-400 mb-10 sm:mb-12 text-center">
                About Me
            </h2>

            <div className="relative w-full flex justify-center pointer-events-none mb-8">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0">
                    <div className="w-1.5 h-36 sm:h-72 md:h-96 bg-gradient-to-b from-purple-400/80 to-transparent mx-auto rounded-full" />
                </div>

                {/* ✨ Updated Smooth Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: dropDelay,
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        y: {
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut",
                        },
                        default: { duration: 0.8, delay: dropDelay }
                    }}
                    className="pointer-events-auto relative z-20 mt-12 w-full max-w-md sm:max-w-3xl"
                >
                    <div className="w-full backdrop-blur-sm bg-[#1c1036]/30 border border-purple-500/40 rounded-3xl shadow-md shadow-purple-700/30 overflow-hidden">

                        {/* Header */}
                        <div className="flex flex-col items-center gap-6 p-8 border-b border-purple-500/30">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-purple-400">{title}</h3>
                                <p className="text-base text-gray-300 mt-1">MERN Stack Developer</p>
                            </div>
                        </div>

                        {/* About Content */}
                        <div className="p-8 space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
                            <p>
                                Hi, I’m <span className="text-purple-400 font-semibold">Mymuna Jahan</span>, a passionate <span className="text-purple-400">MERN Stack Developer</span> from Bangladesh 🇧🇩, building modern & responsive web applications.
                            </p>
                            <p>
                                I am currently doing my industrial attachment at <span className="text-purple-400">BD Calling</span>, gaining hands-on experience and learning professional skills.
                            </p>
                            <p>
                                I am completing my <span className="text-purple-400">Diploma in Computer Science</span> from <span className="text-purple-400">Feni Computer Institute</span> (Session 2021-2022), which is helping me build a strong foundation for web development.
                            </p>
                            <p>
                                I focus on creating <span className="text-purple-400">responsive and interactive web applications</span> using <span className="text-purple-400">React</span> and <span className="text-purple-400">Tailwind CSS</span>, ensuring clean, efficient, and user-friendly interfaces.
                            </p>
                        </div>

                        {/* Footer Gradient */}
                        <div className="h-2 bg-gradient-to-r from-purple-500/50 via-purple-400/30 to-pink-500/20" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
