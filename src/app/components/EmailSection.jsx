import React from 'react'
import Link from 'next/link'

export const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-10 relative'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2'></div>
      <div className='z-10'>
        <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-4 mb-8 md:mb-12'>Let's Connect</h2>
        <p className='text-#[ADB7BE] mb-4 max-w-md'>
          {" "}
          I'm seeking new internship opportunities to apply my skills and grow. Feel free to reach out for proposals or to discuss potential collaborations. You can contact me via the form below or at <span className='font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>aurelianeg2000@gmail.com</span>
        </p>

        <div className='socials flex flex-row gap-2'>
          <Link href="github.com/lameuhton">
            <img src="/images/icons8-github-50.png" alt="Github logo" />
          </Link>
          <Link href="linkedin.com/in/aurelianeg-webdev/">
            <img src="/images/icons8-linkedin-50.png" alt="Linkedin logo" />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col'>
          <div className='mb-6'>
            <label htmlFor="email" className='text-white block mb-2 text-sm font-medium'>Your email</label>
            <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"type="email" id='email' required placeholder='jacob@google.com'/>
          </div>
          
          <div className='mb-6'>
            <label htmlFor="subject" className='text-white block mb-2 text-sm font-medium'>Subject</label>
            <input className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"type="text" id='subject' required placeholder='Just saying hi'/>
          </div>
          
          <div className='mb-6'>
            <label htmlFor="message" className='text-white block mb-2 text-sm font-medium'>Message</label>
            <textarea name="message" id="message" className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 place" required placeholder='Leave your message here...'></textarea>
          </div>
          <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
