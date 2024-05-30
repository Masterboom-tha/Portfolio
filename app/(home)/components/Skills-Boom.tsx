'use client'
import React from 'react'
import Title from './Title'
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SiCsharp, SiGoland, SiJavascript, SiLaravel, SiMongodb, SiMysql, SiNextdotjs, SiPhp, SiPostgresql, SiPython, SiReact, SiVuedotjs, } from "react-icons/si";
import { describe } from 'node:test';

export default function Skills() {
  const skills = [
    {
      title: "React",
      Icon: SiReact,
      describe : "Good"
    },
    {
      title: "Javascript",
      Icon: SiJavascript,
      describe : "Good"
    },
    {
      title: "Postgresql",
      Icon: SiPostgresql,
      describe : "Good"
    },
    {
      title: "Vue",
      Icon: SiVuedotjs,
      describe : "Good"
    },
    {
      title: "Next",
      Icon: SiNextdotjs,
      describe : "Good"
    },
    {
      title: "MYSQL",
      Icon: SiMysql,
      describe : "Good"
    },
    {
      title: "Mongodb",
      Icon: SiMongodb,
      describe : "Good"
    },
    {
      title: "Python",
      Icon: SiPython,
      describe : "Good"
    },
    {
      title: "C#",
      Icon: SiCsharp,
      describe : "Basic"
    },
    {
      title: "PHP",
      Icon: SiPhp,
      describe : "Good"
    },
    {
      title: "Go",
      Icon: SiGoland,
      describe : "Good"
    },
    {
      title: "Laravel",
      Icon: SiLaravel,
      describe : "Good"
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-8'>
      <Title text="Skills 🥷🏻" className='flex flex-col items-center justify-center -rotate-2'/>
      <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={skills} />
    </div>
    </div>
  )
}