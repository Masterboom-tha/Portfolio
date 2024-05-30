'use client'
import { SiFacebook, SiGithub, SiX } from "react-icons/si";
import React from 'react'
import Link from "next/link";

export default function Navbar() {

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
      name: "X",
      url: "https://twitter.com/pansawut",
      Icon: SiX,
    },
  ]

  return (
    <nav className="mx-10 py-10 flex justify-between item-center ">
      <h1 className="text-2x1 font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Pansawut 👨‍💻</h1>
      <ul className="hidden sm:flex items-center gap-10 md:gap-10 lg:gap-20 hover:scale-125 ease-in-out duration-300">
        <li className="hover:text-green-500 hover:cursor-pointer">Home</li>
        <li className="hover:text-green-500 hover:cursor-pointer">Skils</li>
        <li className="hover:text-green-500 hover:cursor-pointer">Projects</li>
        <li className="hover:text-green-500 hover:cursor-pointer">Contact</li>
      </ul>
      <div className="flex items-center gap-5">
        {socials.map((socials, index) => {
          const Icon = socials.Icon
          return <Link href={socials.url} key={index} aria-label={socials.name}> <Icon className="w-5 h-5 hover:scale-125 ease-in-out duration-300"/></Link>
        })}
      </div>
    </nav>
  )
}
