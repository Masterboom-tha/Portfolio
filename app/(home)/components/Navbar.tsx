'use client'
// Navbar.js
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
import React from 'react';


export default function Navbar() {
  

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socials = [
    {
      name: "Github",
      url: "https://github.com/Masterboom-tha",
      Icon: SiGithub,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/passawut.pujarone/",
      Icon: SiFacebook,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/pansawut-pujaroen-839b39310/",
      Icon: SiLinkedin,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/pansawut-pujaroen-839b39310/",
      Icon: SiLinkedin,
    },
  ];

  return (
    <nav className="mx-10 py-10 flex justify-between item-center sticky top-0 z-50 bg-white dark:bg-black dark:text-white w-full shadow-lg">
      <h1 className="text-2x1 font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Pansawut 👨‍💻</h1>
      <ul className="hidden sm:flex items-center gap-10 md:gap-10 lg:gap-20 hover:scale-125 ease-in-out duration-300">
        <li className="hover:text-green-500 hover:cursor-pointer">
          <a href="#" onClick={(e) => handleClick(e, 'hero')}>Home</a>
        </li>
        <li className="hover:text-green-500 hover:cursor-pointer">
          <a href="#" onClick={(e) => handleClick(e, 'skills')}>Skills</a>
        </li>
        <li className="hover:text-green-500 hover:cursor-pointer">
          <a href="#" onClick={(e) => handleClick(e, 'projects')}>Projects</a>
        </li>
        <li className="hover:text-green-500 hover:cursor-pointer">
          <a href="#" onClick={(e) => handleClick(e, 'contact')}>Contact</a>
        </li>
      </ul>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <a href={social.url} key={index} aria-label={social.name}>
              <Icon className="w-5 h-5 hover:scale-125 ease-in-out duration-300" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
