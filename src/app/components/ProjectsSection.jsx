import React from 'react'
import { ProjectCard } from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Game catalog website",
        description: "Project 1 description",
        image: "/images/projet-bestgamez.png"
    },
    {
        id: 2,
        title: "Todolist App",
        description: "Project 2 description",
        image: "/images/projet-todoapp.png"
    },
    {
        id: 3,
        title: "Responsive home page",
        description: "Project 2 description",
        image: "/images/projet-responsive.png"
    }
]

export const ProjectsSection = () => {
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4'>My projects</h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                    />
                ))}
            </div>
        </>
    )
}
