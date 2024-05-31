"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import { TabButton } from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='marker:text-purple-500 list-outside list-disc ml-6'>
        <li>HTML5/CSS3</li>
        <li>SASS</li>
        <li>Javascript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>PHP</li>
        <li>Python</li>
        <li>MySQL</li>
        <li>and some basics with Bootstrap, Tailwind, Next.js, Laravel</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <p className='pl-4 ml-2 border-l border-l-dashed border-l-purple-500'>I pursued several years of higher education in Management Information Systems and Cybersecurity. However, the traditional method of studying did not suit me. I discovered BeCode, a training program focused on active pedagogy, where learning is centered around working autonomously on group projects. This hands-on approach enabled me to learn a great deal and significantly enhanced my skills.</p>
    )
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className='marker:text-purple-500 list-outside list-disc ml-6'>
        <li>Playing video games</li>
        <li>Singing</li>
        <li>Coding</li>
        <li>Sport</li>
        <li>Reading</li>
      </ul>
    )
  }
]

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ isPending, startTransition ] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4'>About Me</h2>
                <p className='text-base md:text-lg'>
                  Passionate about computers since childhood, I've explored its various facets for years. My higher education provided knowledge, but it's in front-end development that I found my path. After research, I chose BeCode to become a Front-end Developer. Always seeking improvement, I'm looking for a beginner internship starting in September to apply my skills and create memorable user experiences. Let's build an inspiring digital future together!
                </p>
                <div className='flex flex-row mt-8'>
                  <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
                  <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
                  <TabButton selectTab={() => handleTabChange("hobbies")} active={tab === "hobbies"}>Hobbies</TabButton>
                </div>
                <div className='mt-8 card'>
                  {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
        
    </section>
  )
}

