"use client";
import Link from 'next/link';
import React, { useState } from "react";
import { Link as ScrollLink } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "À propos",
        path: "about"
    },
    {
        title: "Tech skills",
        path: "techskills"
    },
    {
        title: "Projets",
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
      <nav className="fixed mx-auto bg-[#1C1C1C] top-0 left-0 right-0 z-10  bg-opacity-100">
        <div className="flex container lg:py-5 lg:px-10 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link
            href={"/"}
            className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 font-extrabold"
          >
            Auréliane G.
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-10 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <ScrollLink
                    to={link.path}
                    smooth={true}
                    duration={700}
                    className="block py-2 pl-3 pr-4 text-white sm:text-lg rounded md:p-0 hover:text-primary-500 duration-150 cursor-pointer"
                  >
                    {link.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? (
          <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />
        ) : null}
      </nav>
    );
}


