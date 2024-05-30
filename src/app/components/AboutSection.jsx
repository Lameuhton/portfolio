import React from 'react'
import Image from 'next/image'

export const AboutSection = () => {
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500} />
            <div>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p>
                Passionnée par l'informatique depuis l'enfance, j'ai exploré ses multiples facettes pendant des années. Mes études supérieures m'ont apporté des connaissances, mais c'est dans le front-end que j'ai trouvé ma voie. Après recherche, j'ai choisi BeCode pour devenir Front-end Developer. Toujours en quête de perfectionnement, je recherche un stage débutant en septembre pour mettre en pratique mes compétences et créer des expériences utilisateur mémorables. Ensemble, construisons un futur numérique inspirant !
                </p>
            </div>
        </div>
        
    </section>
  )
}
