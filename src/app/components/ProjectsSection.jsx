"use client";
import React, { useState, useRef } from 'react'
import { ProjectCard } from './ProjectCard'
import { motion, useInView } from "framer-motion"


const projectsData = [
    {
        id: 1,
        title: "Game catalog website",
        description: "This was a group project, and it is a website that consolidates all video games using an API for game data, allowing users to sort games by genre, platform, etc., or search through a search bar. Made with SCSS, React and with the API of RAWG.",
        image: "/images/projet-bestgamez.png",
        gitUrl: "https://github.com/Junior-dev-Track/16-react-everyonegames-christophe-aureliane",
        previewUrl: "https://bestgamez.netlify.app/"
    },
    {
        id: 2,
        title: "Todolist App",
        description: "I made an interactive Todo List that displays the remaining number of tasks, allows modification and deletion of tasks, and retains added tasks when the page is reloaded or closed. All that made with React, using the local storage to store the tasks.",
        image: "/images/projet-todoapp.png",
        gitUrl: "https://github.com/Junior-dev-Track/16-react-todolist-Lameuhton",
        previewUrl: "https://aurelianegtodolist.netlify.app/"
    },
    {
        id: 3,
        title: "Responsive home page",
        description: "This exercise was done independently and aimed to learn how to create a fully responsive page based on a model.",
        image: "/images/projet-responsive.png",
        gitUrl: "https://github.com/Lameuhton/responsive-exercice",
        previewUrl: "https://lameuhton.github.io/responsive-exercice/"
    }
]

export const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1}
    }

    return (
        <section>
            <h2 className='text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mt-4 mb-8 md:mb-12'>My projects</h2>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
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
