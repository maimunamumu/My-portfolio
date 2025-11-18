import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Project from '../Projects/Project';
import Contact from '../Contact/Contact';



const Home = () => {
    return (
        <div className='mx-auto'>

            <Hero></Hero>


            <About></About>

            <div className=' max-w-[1400px] mx-auto'>
                <Skill></Skill>
            </div>

            <div className=' max-w-[1400px] mx-auto'>
                <Project></Project>
            </div>


         <div className='max-w-[1400px] mx-auto bg-[#0f0f1a]'>

             <Contact></Contact>
         </div> 


        </div>
    );
};

export default Home;