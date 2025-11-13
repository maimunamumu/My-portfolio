import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import logo from '../assets/Untitled-1-removebg-preview.png'
import { AuthContext } from "../Context/AuthContext";

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home" },
        { name: 'Skill' },
        { name: "About" },
        { name: "Projects" },
        { name: "Contact" },
    ];


    const { goToProjectSection, homeRef, targetRef, SkillRef, aboutRef, contactRef } = useContext(AuthContext)


    return (
    
         <nav className="sticky top-0 bg-[#1A0B2E] text-white backdrop-blur-lg shadow-md z-50">
            <div className="max-w-[1500px] mx-auto px-4 flex justify-between items-center h-16">





                <button

                    className="text-2xl font-bold text-[#9e63d5]"
                    onClick={() => goToProjectSection(homeRef)}
                >
                    <img className="w-24 " src={logo} alt="" />
                </button>



                <ul className="hidden md:flex space-x-8 font-medium">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <button
                                onClick={() => {
                                    if (item.name === "Projects") {

                                        goToProjectSection(targetRef)
                                    }
                                    else if (item?.name == 'Skill') {
                                        goToProjectSection(SkillRef)
                                    }
                                    else if (item?.name == 'About') {
                                        goToProjectSection(aboutRef)
                                    }
                                    else if (item?.name === 'Contact') {
                                        goToProjectSection(contactRef)
                                    } else {
                                        goToProjectSection(homeRef)
                                    }
                                }}
                                className="text-white hover:text-[#8e59c1] transition"
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}
                </ul>


                <div className="">
                    <a
                        href="https://drive.google.com/file/d/1a3ENcxx0zcFnhXtEZM-dtbwgTHqmHt_G/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="resume"
                        className="hidden w-full md:inline-block bg-[#9912FA] text-white px-4 py-2 rounded-lg shadow-md shadow-white/40 transition"
                    >
                        Resume
                    </a>
                </div>





                <button
                    className="md:hidden text-2xl text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>


            {isOpen && (
                <div className="md:hidden bg-white/10 backdrop-blur-lg shadow-md">
                    <ul className="flex flex-col space-y-4 p-4 font-medium">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <button
                                    onClick={() => {
                                        if (item.name === "Projects") {

                                            goToProjectSection(targetRef)
                                        }
                                        else if (item?.name == 'Skill') {
                                            goToProjectSection(SkillRef)
                                        }
                                        else if (item?.name == 'About') {
                                            goToProjectSection(aboutRef)
                                        }
                                        else if (item?.name === 'Contact') {
                                            goToProjectSection(contactRef)
                                        } else {
                                            goToProjectSection(homeRef)
                                        }
                                    }}
                                    className="text-white hover:text-[#C27AFF] transition"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                        <li>
                            <li className=" w-full">
                                <a
                                    href="https://drive.google.com/file/d/1XSQxAI_RwonvghV6mtSdy9iYxvyVcB7F/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full px-3 sm:px-6 py-1 sm:py-2 bg-[#C27AFF] shadow-lg shadow-white/30 text-white rounded-lg hover:bg-[#9810FA] transition text-sm sm:text-base text-center"
                                >
                                    Resume
                                </a>
                            </li>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
   
    );
};

export default Navber;
