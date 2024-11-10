"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react';

 export const  EmailSection = () => {
  const [state, handleSubmit] = useForm("xoqgzwoa");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (state.succeeded) {
        alert("Message submitted!");
        window.location.reload();
        window.scrollTo(0, 0);
    }

  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-10 relative' id="contact">
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-2xl absolute top-3/4 -left-4 transform -translate-x-1/2'></div>
      <div className='z-9'>
        <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12'>Let's Connect</h2>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {" "}
          Je suis à la recherche de nouvelles opportunités professionnelles pour mettre en pratique mes compétences et évoluer. N'hésitez pas à me contacter pour des propositions, je reviendrai vers vous au plus vite. Vous pouvez me joindre via ce formulaire ou à l'adresse <a href="mailto:aurelianeg2000@gmail.com" className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 hover:underline'>aurelianeg2000@gmail.com</a>
        </p>

        <div className='socials flex flex-row gap-2'>
          <Link href="https://github.com/lameuhton">
            <img src="/images/icons8-github-50.png" alt="Github logo" />
          </Link>
          <Link href="https://linkedin.com/in/aurelianeg-webdev/">
            <img src="/images/icons8-linkedin-50.png" alt="Linkedin logo" />
          </Link>
        </div>
      </div>
      <div className='z-9'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Votre email</label>
            <input name="email" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"type="email" id='email' required placeholder='jacob@google.com'/>
          </div>
          
          <div className='mb-6'>
            <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Sujet</label>
            <input name="subject" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"type="text" id='subject' required placeholder='Sujet de votre message...'/>
          </div>
          
          <div className='mb-6'>
            <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Message</label>
            <textarea name="message" id="message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 place" required placeholder='Décrivez votre message ici...'></textarea>
          </div>
          <button type='submit' className='bg-primary-500 hover:bg-primary-600 duration-150 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}
