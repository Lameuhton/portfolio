"use client";
import Link from 'next/link';
import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About",
        path: "about"
    },
    {
        title: "Tech skills",
        path: "techskills"
    },
    {
        title: "Projects",
        path: "projects"
    },
    {
        title: "Contact",
        path: "contact"
    }
]

export const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [activePage, setActivePage] = useState(false);

    return (
        <nav className='fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'> 
            <div className='flex container lg:py-5 lg:px-10 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"} className='text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 font-extrabold'>Auréliane G.</Link>
                <div className='mobile-menu block md:hidden'>
                    {!navbarOpen ? (
                            <button onClick={ ()=> setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'> 
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={ ()=> setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <ScrollLink
                                    to={link.path}
                                    smooth={true}
                                    duration={700}
                                    className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer'
                                >
                                    {link.title}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen}/> : null}
        </nav>
    )
}


