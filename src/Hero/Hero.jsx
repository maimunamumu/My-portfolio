import React, { useContext } from 'react';
import CircularText from './CircularText';
import photo from '../assets/projectImage/mumu4jpg-removebg-preview.png'
import TextType from './TextType';
import ShinyText from './ShinyText';
import { Link } from 'react-router';
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { AuthContext } from '../Context/AuthContext';

const Hero = () => {
    const { homeRef ,contactRef ,goToProjectSection } = useContext(AuthContext)
    return (
        <div ref={homeRef} className="flex flex-col px-4 sm:px-0 md:flex-row  justify-between items-center max-w-[1400px] mx-auto bg-[#0f0f1a]">
            

             <div className="flex-1 sm:py-10 py-0    flex justify-center items-center relative w-full  lg:mt-0 md:mt-0 overflow-hidden mt-5">
                <div className="relative w-full lg:mt-10 mt-4  h-[60vh] md:w-[540px] md:h-[450px]">
                    <CircularText
                        text="REACT*BITS*COMPONENTS*"
                        spinDuration={20}
                        className="absolute top-0 left-0 w-full h-full"
                    />
                    <img
                        src={photo}
                        alt="center"
                        className="absolute top-1/2 left-1/2 shadow-lg shadow-[#C27AFF] px-13 py-1  w-[80%] sm:w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    />
                </div>
            </div>

            <div className="flex-1 space-y-6 border md:pr-12 my-4 sm:my-0">
                <h1 className="sm:text-5xl text-3xl font-bold text-[#C27AFF]">
                    <TextType text={["Mymuna Jahan"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"></TextType>
                </h1>
                <h2 className="text-2xl font-semibold text-gray-200">
                    <ShinyText
                        text="Mern Stack Developer"
                        disabled={false}
                        speed={3}
                        className='custom-class'
                    />
                </h2>
                <p className="text-gray-300 text-[14px] sm:text-lg max-w-lg">
                    Web developer from <span className="text-[#C27AFF]">Bangladesh</span>, building modern & responsive web applications.
                </p>

                <div className="flex items-center gap-3">
                    <a
                        href="https://www.linkedin.com/in/maimuna-mumu-b35ba8318/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex items-center justify-center p-2 rounded-full shadow-md bg-white/10 text-[#C27AFF] hover:bg-[#C27AFF] hover:text-white transition"
                    >
                        <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>


                    <a
                        href="https://github.com/maimunamumu"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="flex items-center justify-center p-2  shadow-md bg-white/10 rounded-full text-[#C27AFF] hover:bg-[#C27AFF] hover:text-white transition"
                    >
                        <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>


                    <a
                        href="https://www.facebook.com/mymuna.mumu91"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="flex items-center justify-center p-2 shadow-md bg-white/10 rounded-full text-[#C27AFF] hover:bg-[#C27AFF] hover:text-white transition"
                    >
                        <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>


                   
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                    <a
                        href="https://drive.google.com/file/d/1a3ENcxx0zcFnhXtEZM-dtbwgTHqmHt_G/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LeetCode"
                        className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 
                         text-white font-semibold rounded-full hover:scale-105 
                         shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                    >
                        Resume
                    </a>
                    <button
                        onClick={()=>goToProjectSection(contactRef)}
                        className="px-4 sm:px-6 py-1 sm:py-1 border border-[#9912FA]  shadow-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 
                         font-semibold rounded-full hover:scale-105 
                        hover:shadow-purple-500/50 transition-all duration-300"
                    >
                        Contact Me
                    </button>
                </div>
            </div>



           

        </div>
    );
};

export default Hero;
