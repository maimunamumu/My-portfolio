import React from "react";
import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Footer = () => {
    return (
        <footer className="bg-[#0f0f1a] backdrop-blur-md text-gray-300 px-4 pt-16 max-w-[1400px] mx-auto md:px-24 lg:px-8">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
    
                <div className="md:max-w-md lg:col-span-2">
                    <Link to="/" className="inline-flex items-center">
                        <svg
                            className="w-8 text-[#9810FA]"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                        >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-[#C27AFF] uppercase">
                            Mymuna Mumu
                        </span>
                    </Link>
                    <div className="mt-4 lg:max-w-sm">
                        <p className="text-sm text-gray-400">
                            Passionate Frontend Developer building responsive and modern web experiences.
                        </p>
                        <p className="mt-4 text-sm text-gray-400">
                            Crafting clean code and beautiful UI/UX for web applications.
                        </p>
                    </div>
                </div>

  
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div>
                        <p className="font-semibold tracking-wide text-[#9810FA]">Category</p>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/news" className="text-gray-400 hover:text-[#C27AFF] transition">News</Link></li>
                            <li><Link to="/world" className="text-gray-400 hover:text-[#C27AFF] transition">World</Link></li>
                            <li><Link to="/games" className="text-gray-400 hover:text-[#C27AFF] transition">Games</Link></li>
                            <li><Link to="/references" className="text-gray-400 hover:text-[#C27AFF] transition">References</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-[#9810FA]">Business</p>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/web" className="text-gray-400 hover:text-[#C27AFF] transition">Web</Link></li>
                            <li><Link to="/ecommerce" className="text-gray-400 hover:text-[#C27AFF] transition">eCommerce</Link></li>
                            <li><Link to="/portfolio" className="text-gray-400 hover:text-[#C27AFF] transition">Portfolio</Link></li>
                            <li><Link to="/entertainment" className="text-gray-400 hover:text-[#C27AFF] transition">Entertainment</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-[#9810FA]">Apples</p>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/media" className="text-gray-400 hover:text-[#C27AFF] transition">Media</Link></li>
                            <li><Link to="/brochure" className="text-gray-400 hover:text-[#C27AFF] transition">Brochure</Link></li>
                            <li><Link to="/educational" className="text-gray-400 hover:text-[#C27AFF] transition">Educational</Link></li>
                            <li><Link to="/projects" className="text-gray-400 hover:text-[#C27AFF] transition">Projects</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-[#9810FA]">Cherry</p>
                        <ul className="mt-2 space-y-2">
                            <li><Link to="/personal" className="text-gray-400 hover:text-[#C27AFF] transition">Personal</Link></li>
                            <li><Link to="/wiki" className="text-gray-400 hover:text-[#C27AFF] transition">Wiki</Link></li>
                            <li><Link to="/forum" className="text-gray-400 hover:text-[#C27AFF] transition">Forum</Link></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-700 sm:flex-row">
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Mymuna. All rights reserved.
                </p>
                <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C27AFF] transition"><FaGithub className="h-5 w-5" /></a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C27AFF] transition"><FaLinkedin className="h-5 w-5" /></a>
                    <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C27AFF] transition"><FaFacebook className="h-5 w-5" /></a>
                    <a href="https://leetcode.com/your-leetcode" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C27AFF] transition"><SiLeetcode className="h-5 w-5" /></a>
                </div>
            </div>
        </footer>
    );
};
