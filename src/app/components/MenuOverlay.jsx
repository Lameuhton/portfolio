import React from 'react'
import NavLink from './NavLink'
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export const MenuOverlay = ({ links, setNavbarOpen}) => {
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
                <ScrollLink
                    to={link.path}
                    smooth={true}
                    duration={700}
                    className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer'
                    onClick={ ()=> setNavbarOpen(false)}
                >
                    {link.title}
                </ScrollLink>
            </motion.li>
        ))}
    </ul>
  )
}

export default MenuOverlay;