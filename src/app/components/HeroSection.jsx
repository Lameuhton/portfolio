"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
    <motion.section initial={{ opacity: 0, scale: 0.5}} animate={{ opacity: 1, scale: 1}} transition={{ duration: 0.5}} className='lg:py-16 '>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <div className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Hello, I'm{""}</div>
                    <TypeAnimation
                        sequence={[
                            'Auréliane Gagliardi',
                            1200,
                            ' a Jr Front-end developer',
                            1200,
                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg  mb-6 lg:text-xl'>
                    Une jeune femme curieuse, créative et motivée, actuellement en formation chez BeCode
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white"><a href="#contact">Me recruter</a></button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                        <a href="/CV-aureliane-gagliardi.pdf" download><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Télécharger mon CV</span></a>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
    
                <Image
                    src="/images/profile-2.png"
                    alt="hero image"
                    
                    width={400}
                    height={400}
                    /> 
            </div>
        </div>
        
    </motion.section>
  )
}

export default HeroSection