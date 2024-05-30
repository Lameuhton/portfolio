import React from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from 'next/link'

export const ProjectCard = ({ imgUrl, title, description }) => {
    return (
      <div className="relative group">
        <div className="h-52 md:h-72 rounded-t-xl relative overflow-hidden">
          <img src={imgUrl} alt={title} className='w-full h-full object-cover'/>
          <div className='overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex justify-center items-center'>
            <Link href="/" className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center'>
              <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer hover:text-white' />
            </Link>
          </div>
          <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </div>
        <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
          <h5 className='font-xl font-semibold mb-2'>{title}</h5>
          <p className='text-[#ADB7BE]'>{description}</p>
        </div>
      </div>
    );
  };
