"use client";
import React, { useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaPhp,
  FaDatabase,
  FaLaravel,
  FaNextJs,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiVite, SiTailwindcss } from "react-icons/si";
import useMeasure from "react-use-measure";
import { motion, animate, useMotionValue } from "framer-motion";

const skills = [
  { name: "HTML5", status: "acquired", icon: <FaHtml5 /> },
  { name: "CSS3", status: "acquired", icon: <FaCss3Alt /> },
  { name: "SCSS", status: "acquired", icon: <FaSass /> },
  { name: "Tailwind", status: "acquired", icon: <SiTailwindcss /> },
  { name: "JavaScript", status: "acquired", icon: <FaJs /> },
  { name: "PHP", status: "acquired", icon: <FaPhp /> },
  { name: "React", status: "inprogress", icon: <FaReact /> },
  { name: "Wordpress", status: "inprogress", icon: <FaWordpress /> },
  { name: "SQL", status: "acquired", icon: <FaDatabase /> },
  { name: "Python", status: "acquired", icon: <FaPython /> },
  { name: "Laravel", status: "inprogress", icon: <FaLaravel /> },
  { name: "Next.js", status: "inprogress", icon: <RiNextjsFill /> },
  { name: "Vite.js", status: "acquired", icon: <SiVite /> },
  { name: "Figma", status: "acquired", icon: <FaFigma /> },
];

export const TechSection = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <section className="my-12" id="techskills">
      <h2 className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
        Tech Skills
      </h2>
      <div className="mx-auto max-w-4xl p-6 bg-[#181818] rounded-lg shadow-lg">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <span className="w-4 h-4 bg-primary-500 inline-block rounded-full mr-2"></span>
            <span className="text-white font-semibold">Acquis</span>
          </div>
          <div className="flex items-center">
            <span className="w-4 h-4 bg-secondary-500 inline-block rounded-full mr-2"></span>
            <span className="text-white font-semibold">En cours</span>
          </div>
        </div>
        <div className="animate-scroll">
          <motion.div
            className="animate-scroll-content scroll-container flex space-x-4"
            ref={ref}
            style={{ x: xTranslation }}
          >
            {skills.concat(skills).map((skill, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-white flex flex-col items-center ${
                  skill.status === "acquired"
                    ? "bg-gradient-to-r from-primary-400 to-primary-600"
                    : "bg-gradient-to-r from-secondary-400 to-secondary-600"
                }`}
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
