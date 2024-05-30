// Page.tsx
import React from 'react';
import Navbar from './(home)/components/Navbar';
import HeroSection from './(home)/components/HeroSection';
import Projects from './(home)/components/Projects';
import Skills from './(home)/components/Skills';
import Contact from './(home)/components/Contact';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='min-h-[400vh] bg-black overflow-hidden'>
      <div id="hero" className="max-w7xl mx-auto p-5 dark:bg-black bg-white dark:bg-grid-white/[0.04] relative">
        <Navbar />
        <HeroSection />
      </div>
      <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-0 left-0 xl:bottom-0 w-full'>
        <div id="skills" className='max-w7xl mx-auto p-5'>
          <Skills />
        </div>
        <div id="projects" className='max-w7xl mx-auto p-5 mt-5'>
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  )
}
