"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import { TabButton } from './TabButton';

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <p className="pl-4 ml-2 border-l-4 border-l-primary-500">
        Après avoir suivi des études d'informatique de gestion et de
        cybersécurité, je me suis rendue compte que la méthode traditionnelle
        d'étude ne me convenait pas. J'ai découvert BeCode, un bootcamp
        proposant une pédagogie active basée sur des projets pratiques, ce qui
        m'a permis de progresser et d'améliorer mes compétences rapidement.
        Actuellement, je termine mon stage de 3 mois dans l'agence web{" "}
        <a href="https://www.webecode.be/" className="text-primary-500 hover:underline">Webecode</a> et suis donc à la
        recherche de nouvelles opportunités professionnelles.
      </p>
    ),
  },
  {
    title: "Soft Skills",
    id: "softskills",
    content: (
      <ul className="marker:text-primary-500 list-outside list-disc ml-6">
        <li>Travail d'équipe</li>
        <li>Empathique</li>
        <li>Créative</li>
        <li>Curieuse</li>
        <li>Attentive au détail</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="marker:text-primary-500 list-outside list-disc ml-6">
        <li>Jeux vidéos</li>
        <li>Chant</li>
        <li>Coder</li>
        <li>Faire du sport</li>
        <li>Lire</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [ isPending, startTransition ] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-10" id="about">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          className="rounded-3xl"
        />
        <div className="mt-3 md:mt-0 text-left flex flex-col h-full">
          <div className="text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-4">
              À propos
            </h2>
            <p className="text-base md:text-lg">
              Passionnée par l'informatique et le développement web, j'allie
              créativité et logique pour relever des défis et améliorer mes
              compétences. Curieuse et déterminée, j'ai acquis un sens du détail
              et une grande adaptabilité. Je recherche actuellement un <span class="text-primary-400">poste de
              développeuse web</span>, notamment en front-end, pour contribuer à des
              projets innovants.
            </p>
          </div>

          <div className="text-left flex flex-col h-full">
            <div className="flex flex-row mt-8">
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Formation
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("softskills")}
                active={tab === "softskills"}
              >
                Softskills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("hobbies")}
                active={tab === "hobbies"}
              >
                Hobby's
              </TabButton>
            </div>
            <div className="mt-8 card">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

