// app/(home)/components/Contact.tsx
import React from 'react';
import Title from './Title';
import Image from 'next/image';
import myImage from '../../../public/5537157_2887740.png';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <div className='max-w7xl mx-auto p-5 dark:bg-black bg-white  dark:bg-grid-white/[0.04] relative'>
            <Title text="Contact 🤝" className='flex flex-col items-center justify-center -rotate-2' />
            <div className='max-w-7xl mt-7 mx-auto gap-10 p-5'>
                <ContactForm />
                <div className="sm:hidden">
                    <Image src={myImage} alt="Description" width={500} height={500} />
                </div>
            </div>
        </div>
    );
}
