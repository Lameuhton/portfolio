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
                            'looking for an internship',
                            1200
                        ]}
                        wrapper="span"
                        speed={40}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg  mb-6 lg:text-xl'>
                    A curious, creative and driven young woman currently learning at Becode Liège
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white">Hire me</button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                        <a href="/CV-webdev-linkedin.pdf" download><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span></a>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image
                    src="/images/profile.png"
                    alt="hero image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    /> 
                </div>
            </div>
        </div>
        
    </motion.section>
  )
}

export default HeroSection