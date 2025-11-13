// GlassIconsMarquee.jsx
import React from "react";
import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiExpress, SiFirebase, SiVercel, SiTypescript, SiC, SiCplusplus, SiNextdotjs } from "react-icons/si";

// All skill icons
const skillIcons = [
    { icon: <FaHtml5 />, label: "HTML", color: "orange-500" },
    { icon: <FaCss3Alt />, label: "CSS", color: "blue-500" },
    { icon: <SiTailwindcss />, label: "Tailwind", color: "cyan-400" },
    { icon: <SiJavascript />, label: "JavaScript", color: "yellow-400" },
    { icon: <FaReact />, label: "React", color: "blue-400" },
    { icon: <SiNextdotjs />, label: "Next.js", color: "white" },
    { icon: <FaGitAlt />, label: "Git", color: "red-500" },
    { icon: <FaGithub />, label: "GitHub", color: "black" },
    { icon: <SiVercel />, label: "Vercel", color: "gray-300" },
];

const GlassIconsMarquee = () => {
    return (
        <div className="py-1">
            <Marquee speed={40} gradient={false}>
                <div className="flex gap-6">
                    {skillIcons.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-lg hover:scale-110 transition-transform duration-300"
                        >
                            <div className={`text-3xl sm:text-4xl text-${item.color} mb-2`}>
                                {item.icon}
                            </div>
                            <span className="text-gray-200 text-xs sm:text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default GlassIconsMarquee;
