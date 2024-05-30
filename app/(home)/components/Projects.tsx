"use client"
import React from 'react';
import Title from './Title';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Imgproject1 from '../../../public/1.png'
import Imgproject2 from '../../../public/2.png'
import Imgproject3 from '../../../public/3.png'
import Imgproject4 from '../../../public/4.png'

export default function Projects() {
  const projectData = [
    {
      imageUrl1: "https://static.wixstatic.com/media/eee79a_bbecf73b9a434c568ea1961c50a1a91e~mv2.png/v1/fill/w_1920,h_909,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/eee79a_bbecf73b9a434c568ea1961c50a1a91e~mv2.png",
      imageUrl2: "https://static.wixstatic.com/media/eee79a_da4af0293b51471e9764fd439f2b7f13~mv2.jpg/v1/fill/w_1920,h_909,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/eee79a_da4af0293b51471e9764fd439f2b7f13~mv2.jpg",
      imageUrl3: "https://static.wixstatic.com/media/eee79a_0b423ee3e0e34aa9ad7ce3efbba74e9d~mv2.png/v1/fill/w_1920,h_909,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/eee79a_0b423ee3e0e34aa9ad7ce3efbba74e9d~mv2.png",
      imageUrl4: "https://static.wixstatic.com/media/eee79a_4732b424e1544487b89b174ea9a6d3cb~mv2.png/v1/fill/w_1920,h_909,al_c,q_95,usm_0.66_1.00_0.01,enc_auto/eee79a_4732b424e1544487b89b174ea9a6d3cb~mv2.png",
    },
    {
      imageUrl1: "https://static.wixstatic.com/media/eee79a_d602e0b8b5274ef593812b8d05fcef5c~mv2.png/v1/fill/w_1920,h_909,al_c,q_90,enc_auto/eee79a_d602e0b8b5274ef593812b8d05fcef5c~mv2.png",
      imageUrl2: "https://static.wixstatic.com/media/eee79a_3f2970aeeebf4c2599a738bd7ef49ca4~mv2.png/v1/fill/w_1920,h_909,al_c,q_90,enc_auto/eee79a_3f2970aeeebf4c2599a738bd7ef49ca4~mv2.png",
      imageUrl3: "https://static.wixstatic.com/media/eee79a_cd5a308d31cb4a7cb322748f2eb51f28~mv2.png/v1/fill/w_1920,h_909,al_c,q_90,enc_auto/eee79a_cd5a308d31cb4a7cb322748f2eb51f28~mv2.png",
      imageUrl4: "https://static.wixstatic.com/media/eee79a_535c6237cb06459bbbeb197cc54995c9~mv2.png/v1/fill/w_1920,h_909,al_c,q_90,enc_auto/eee79a_535c6237cb06459bbbeb197cc54995c9~mv2.png",
    },
    {
      imageUrl1: "https://static.wixstatic.com/media/eee79a_d5a48f377531470dba317d330fd408c9~mv2.jpg/v1/fill/w_1920,h_909,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eee79a_d5a48f377531470dba317d330fd408c9~mv2.jpg",
      imageUrl2: "https://static.wixstatic.com/media/eee79a_820fb1574e2e4cfc84b58592657f0c6c~mv2.jpg/v1/fill/w_1920,h_909,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eee79a_820fb1574e2e4cfc84b58592657f0c6c~mv2.jpg",
      imageUrl3: "https://static.wixstatic.com/media/eee79a_6540b9c5e5db4802bfa5ead40346e302~mv2.jpg/v1/fill/w_1920,h_909,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eee79a_6540b9c5e5db4802bfa5ead40346e302~mv2.jpg",
      imageUrl4: "https://static.wixstatic.com/media/eee79a_4f29e802c7594bc18538edda47801f5c~mv2.jpg/v1/fill/w_1920,h_909,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eee79a_4f29e802c7594bc18538edda47801f5c~mv2.jpg",
    },
    {
      imageUrl1: Imgproject1,
      imageUrl2: Imgproject2,
      imageUrl3: Imgproject3,
      imageUrl4: Imgproject4,
    },
  ];

  // State for current slide of each project
  const [currentSlides, setCurrentSlides] = React.useState(projectData.map(() => 0));

  const prev = (index: number) => {
    setCurrentSlides(prevSlides => {
      const newSlides = [...prevSlides];
      const projectValues = Object.values(projectData[index]);
      newSlides[index] = newSlides[index] === 0 ? projectValues.length - 1 : newSlides[index] - 1;
      return newSlides;
    });
  };

  const next = (index: number) => {
    setCurrentSlides(prevSlides => {
      const newSlides = [...prevSlides];
      const projectValues = Object.values(projectData[index]);
      newSlides[index] = newSlides[index] === projectValues.length - 1 ? 0 : newSlides[index] + 1;
      return newSlides;
    });
  };
  return (
    <div className='max-w-7xl mx-auto px-8'>
      <Title text="Projects 🗂️" className='flex flex-col items-center justify-center -rotate-2' />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        {projectData.map((project, index) => (
          <div key={index} className="relative">
            <Image
              src={Object.values(project)[currentSlides[index]]}
              alt=""
              width={400}
              height={300}
              objectFit="none"
              className="w-full h-full  object-none rounded-lg h-fit w-fit"
            />
            <button onClick={() => prev(index)} className="absolute top-1/2 left-0 transform -translate-y-1/2 p-1 rounded-full shadow bg-green-500 hover:bg-white hover:text-black">
              <ChevronLeft size={40} />
            </button>
            <button onClick={() => next(index)} className="absolute top-1/2 right-0 transform -translate-y-1/2 p-1 rounded-full shadow bg-green-500 hover:bg-white hover:text-black">
              <ChevronRight size={40} />
            </button>
          </div>
        ))}
        
      </div>
    </div>
  );
}
