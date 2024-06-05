"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import { TabButton } from './TabButton';

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <p className='pl-4 ml-2 border-l-4 border-l-primary-500'>J'ai suivi des études en Informatique de gestion et en Cybersécurité (HEPL et Helmo), mais la méthode traditionnelle d'étude ne me convenait pas. J'ai découvert BeCode, qui propose une approche pédagogique active avec des projets pratiques similaires au monde professionnel, en groupe ou individuellement. Cette méthode m'a permis d'apprendre rapidement et d'améliorer mes compétences. Nous avons récemment commencé un projet de site e-commerce pour approfondir mes connaissances en React, Next.js et Tailwind.</p>
    )
  },
  {
    title: "Soft Skills",
    id: "softskills",
    content: (
      <ul className='marker:text-primary-500 list-outside list-disc ml-6'>
        <li>Travail d'équipe</li>
        <li>Empathique</li>
        <li>Créative</li>
        <li>Curieuse</li>
        <li>Attentive au détail</li>
      </ul>
    )
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className='marker:text-primary-500 list-outside list-disc ml-6'>
        <li>Jeux vidéos</li>
        <li>Chant</li>
        <li>Coder</li>
        <li>Faire du sport</li>
        <li>Lire</li>
      </ul>
    )
  }
]

export const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [ isPending, startTransition ] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white mt-10'>
        <div className='flex flex-wrap lg:flex-nowrap gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500} className='rounded-3xl' />
            <div className='mt-3 md:mt-0 text-left flex flex-col h-full'>
              <div className='text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-4'>À propos</h2>
                <p className='text-base md:text-lg'>
                Intéressée par l'informatique depuis mon enfance, j'ai exploré ses divers aspects pendant des années. Mes études supérieures m'ont apporté des connaissances générales dans divers domaines de l'informatique, mais c'est dans le développement web que j'ai trouvé ma voie. Après des recherches, j'ai choisi BeCode pour devenir développeuse front-end. Toujours en quête d'amélioration, je suis à la recherche d'un stage débutant en septembre pour une durée de 3 mois afin d'appliquer mes compétences et créer des expériences utilisateur mémorables. Construisons ensemble un avenir numérique inspirant !
                </p>
              </div>
              
              <div className='text-left flex flex-col h-full'>
                <div className='flex flex-row mt-8'>
                  <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Formation</TabButton>
                  <TabButton selectTab={() => handleTabChange("softskills")} active={tab === "softskills"}>Softskills</TabButton>
                  <TabButton selectTab={() => handleTabChange("hobbies")} active={tab === "hobbies"}>Hobby's</TabButton>
                </div>
                <div className='mt-8 card'>
                  {TAB_DATA.find((t) => t.id === tab).content}
                </div>
              </div>  
            </div>
        </div>
        
    </section>
  )
}

