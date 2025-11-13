import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import GlassIcons from "./GlassIcons"; // your icon marquee component
import borderImage from "../assets/images/border.png";
import light from "../assets/images/shutterstock_2478458207-removebg-preview.png";
import backgroundColour from "../assets/images/Ellipse 6.png";

const Skill = () => {
    const { SkillRef } = useContext(AuthContext);

    return (
        <div
            ref={SkillRef}
            className="relative overflow-hidden flex flex-col items-center justify-center max-w-[1400px] mx-auto text-white py-10 bg-[#0f0f1a]" // Reduced py-16 → py-10
        >
            {/* Soft background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-800/40 via-[#0f0f1a]/90 to-[#0f0f1a] blur-3xl"></div>

            {/* Section Title */}
            <div className="relative w-[400px] z-10"> {/* Reduced width */}
                <div className="flex justify-center">
                    <h1 className="text-purple-400 text-3xl sm:text-4xl mb-1 text-center font-bold">
                        My Skills
                    </h1>
                </div>

                {/* Border Image (Top Decorative Line) */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2"> {/* Reduced top offset */}
                    <img
                        src={borderImage}
                        width={400} // Reduced width
                        height={12} // Reduced height
                        alt="border"
                        className="opacity-80"
                    />
                </div>
            </div>

            {/* Triangle Light Decoration */}
            <div className="relative mt-4 sm:mt-2 w-[200px] h-[200px] mb-8"> {/* Reduced size & margin */}
                <div
                    className="absolute inset-0 backdrop-blur-3xl"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(150, 0, 255, 0.8), rgba(255,255,255,0.05))",
                        clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                        boxShadow: "0 0 30px 10px rgba(150, 0, 255, 0.4)", // Reduced shadow
                    }}
                ></div>
            </div>

            {/* Skills Icon Component */}
            <div className="z-10 w-full">
                <GlassIcons />
            </div>

            {/* Background Decorative Images */}
            <div className="absolute bottom-0 opacity-70"> {/* Slightly reduce opacity */}
                <img
                    src={light}
                    width={300} // Smaller image
                    height={300}
                    alt="light"
                    className="mix-blend-screen"
                />
            </div>

            <div className="absolute bottom-0 opacity-50"> {/* Slightly reduce opacity */}
                <img
                    src={backgroundColour}
                    width={300} // Smaller image
                    height={300}
                    alt="glow"
                    className="mix-blend-lighten"
                />
            </div>
        </div>
    );
};

export default Skill;
