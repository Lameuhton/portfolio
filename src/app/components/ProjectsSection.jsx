"use client";
import React, { useState, useRef } from 'react'
import { ProjectCard } from './ProjectCard'
import { motion, useInView } from "framer-motion"


const projectsData = [
  {
    id: 1,
    title: "Craftify - site eCommerce",
    description:
      "Ce projet de groupe propose un site e-commerce pour les artisans, offrant une plateforme pour exposer et vendre des produits faits main. Conçu avec React, Tailwind, Express et Node.js, le site garantit une interface intuitive et une infrastructure solide. Les fonctionnalités incluent la gestion des articles, des paniers et des profils utilisateurs.",
    image: "/images/craftify-home.png",
    gitUrl: "https://github.com/YasmineSan/The_Project",
    previewUrl: "https://ecommerce-craftify.netlify.app/",
  },
  {
    id: 2,
    title: "Catalogue de jeux",
    description:
      "Il s'agit d'un projet de groupe, c'est un site web qui regroupe tous les jeux vidéo en utilisant une API pour les données de jeu, permettant aux utilisateurs de trier les jeux par genre, plateforme, etc., ou de les rechercher via une barre de recherche. Réalisé avec SCSS, React et avec l'API de RAWG.",
    image: "/images/projet-bestgamez.png",
    gitUrl:
      "https://github.com/Junior-dev-Track/16-react-everyonegames-christophe-aureliane",
    previewUrl: "https://bestgamez.netlify.app/",
  },
  {
    id: 3,
    title: "Application Todolist",
    description:
      "J'ai réalisé une liste de tâches interactive qui affiche le nombre restant de tâches, permet la modification et la suppression de tâches, et conserve les tâches ajoutées lorsque la page est rechargée ou fermée. Tout cela réalisé avec React, en utilisant le local storage pour stocker les tâches.",
    image: "/images/projet-todoapp.png",
    gitUrl: "https://github.com/Lameuhton/todoapp",
    previewUrl: "https://aurelianegtodolist.netlify.app/",
  },
  {
    id: 4,
    title: "Page d'accueil responsive",
    description:
      "Cet exercice a été réalisé de manière indépendante et visait à apprendre à créer une page entièrement responsive basée sur un modèle donné.",
    image: "/images/projet-responsive.png",
    gitUrl: "https://github.com/Lameuhton/responsive-exercice",
    previewUrl: "https://lameuhton.github.io/responsive-exercice/",
  },
];

export const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1}
    }

    return (
        <section id="projects">
            <h2 className='text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12'>Projets</h2>
            <ul ref={ref} className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project, index) => (
                    <motion.li key={index} variants={cardVariants} inital="initial" animate={isInView ? "animate" : "initial"} transition= {{duration: 0.3, delay: index * 0.4}}>
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}
