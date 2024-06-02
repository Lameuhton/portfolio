import React from 'react'
import NavLink from './NavLink'
import { motion } from 'framer-motion';

export const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => (
            <motion.li 
              key={index} 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1 + index / 10,
              }}>
                <NavLink href={link.path} title={link.title} />
            </motion.li>
        ))}
    </ul>
  )
}

export default MenuOverlay;