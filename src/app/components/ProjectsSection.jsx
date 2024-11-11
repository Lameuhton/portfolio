"use client";
import React, { useState, useRef } from 'react'
import { ProjectCard } from './ProjectCard'
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion"


const projectsData = [
  {
    id: 1,
    title: "Site du Dr. François Bernaerts",
    description:
      "Réalisé lors de mon stage chez Webecode, ce site vitrine présente les services du Dr. François Bernaerts, médecin généraliste homéopathe. L'interface intuitive permet aux patients de consulter les informations et de prendre rendez-vous en ligne, améliorant l'accessibilité et l'expérience utilisateur.",
    image: "/images/projet-docteur.png",
    tag: ["All", "Wordpress", "Tailwind"],
    gitUrl: "#",
    previewUrl: "https://www.docteur.webecode.be/",
  },
  {
    id: 2,
    title: "Portfolio de Colin G.",
    description:
      "Ce portfolio est un site moderne et responsive conçu pour présenter des compétences professionnelles avec un design élégant et des animations subtiles. Ce projet démontre des compétences avancées en développement front-end et une attention au détail.",
    image: "/images/projet-portfoliocolin.png",
    tag: ["All", "Next", "Tailwind"],
    gitUrl: "https://github.com/Lameuhton/atome_portfolio",
    previewUrl: "https://www.gregoire.dev/",
  },
  {
    id: 3,
    title: "Site de la Sandwicherie Deliziosa",
    description:
      "Projet réalisé entièrement par moi-même pour une connaissance, ce site vitrine présente de manière attrayante les services et produits de la sandwicherie. Avec un design moderne et une navigation fluide, le site permet aux clients de découvrir le menu et de commander facilement, tout en garantissant une expérience utilisateur optimisée.",
    image: "/images/projet-sandwicherie.png",
    tag: ["All", "Next", "Tailwind"],
    gitUrl: "https://github.com/Lameuhton/sandwicherie-deliziosa",
    previewUrl: "#",
  },
  {
    id: 4,
    title: "Site eCommerce",
    description:
      "Projet de groupe visant à créer une plateforme où les artisans peuvent exposer et vendre leurs créations faites main. Le site garantit une navigation fluide et propose des fonctionnalités complètes telles que la gestion des articles, des paniers et des profils utilisateurs, assurant une expérience client optimale.",
    image: "/images/craftify-home.png",
    tag: ["All", "React", "Tailwind", "Express"],
    gitUrl: "https://github.com/YasmineSan/The_Project",
    previewUrl: "https://ecommerce-craftify.netlify.app/",
  },
  {
    id: 5,
    title: "Landing page site immobilier",
    description:
      "Repris d'un design template, ce projet a été réalisé pour m'entraîner et affiner mes compétences. Cette landing page offre un design moderne et minimaliste, idéal pour une présentation immobilière efficace. Il met en avant les éléments clés et assure une navigation fluide.",
    image: "/images/projet-panto.png",
    tag: ["All", "Next", "Tailwind"],
    gitUrl: "https://github.com/Lameuhton/PantoProject",
    previewUrl: "https://panto-project.vercel.app/",
  },
  {
    id: 6,
    title: "Catalogue de jeux",
    description:
      "Site web regroupant tous les jeux vidéo populaires, permettant aux utilisateurs de parcourir, trier et rechercher des titres par genre, plateforme et autres critères via une barre de recherche. Il offre une expérience immersive et simplifiée pour explorer et découvrir de nouveaux jeux.",
    image: "/images/projet-bestgamez.png",
    tag: ["All", "React", "SCSS"],
    gitUrl:
      "https://github.com/Junior-dev-Track/16-react-everyonegames-christophe-aureliane",
    previewUrl: "https://bestgamez.netlify.app/",
  },
  {
    id: 7,
    title: "Application Todolist",
    description:
      "Application interactive de gestion de tâches permettant de visualiser, ajouter, modifier et supprimer des tâches, tout en conservant celles-ci après la fermeture de l'application. L'interface conviviale permet de suivre efficacement les tâches à accomplir, offrant une meilleure organisation et productivité.",
    image: "/images/projet-todoapp.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/Lameuhton/todoapp",
    previewUrl: "https://aurelianegtodolist.netlify.app/",
  },
];

export const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    const handleTagChange = (newTag) => {
      setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1}
    }

    return (
      <section id="projects" className="mt-28">
        <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-6 ">
          Projets
        </h2>
        <div className="text-white flex flex-wrap justify-center items-center gap-4 py-10">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="React"
            isSelected={tag === "React"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Next"
            isSelected={tag === "Next"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Wordpress"
            isSelected={tag === "Wordpress"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Tailwind"
            isSelected={tag === "Tailwind"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="SCSS"
            isSelected={tag === "SCSS"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Express"
            isSelected={tag === "Express"}
          />
        </div>
        <ul
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              inital="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
              className="h-full"
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                tags={project.tag}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
}
