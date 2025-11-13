import React, {  useContext } from 'react';
import LanyardCard from './LanyardCard';
import { AuthContext } from '../Context/AuthContext';


const About = () => {
    const { aboutRef } = useContext(AuthContext)
    return (
        <div ref={aboutRef} className='max-w-[1400px] mx-auto' >
            <LanyardCard title="Mymuna Jahan"
                subtitle="MERN Stack Developer"
              
                dropDelay={0.4}
                href="/about"></LanyardCard>
        </div>
    );
};

export default About;