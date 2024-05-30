// app/(home)/components/ContactForm.tsx
"use client"; 

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "65704608-3659-4f02-9127-af5ae9336cf0",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            const { name, email, message } = result.data;
            toast.success(
                <div>
                    <h1>Your message has been sent successfully.</h1>
                    <p>Name: {name}</p>
                    <p>Email: <span style={{ whiteSpace: 'normal' }}>{email}</span></p>
                    <p>Message: {message}</p>
                </div>
            );
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='max-w-3xl mt-5 mx-auto space-y-4'>
                <input type="text" name="name" placeholder="Name" className='w-full p-2 border border-gray-300 rounded-md' />
                <input type="email" name="email" placeholder="Email" className='w-full p-2 border border-gray-300 rounded-md' />
                <textarea name="message" placeholder="Message" className='w-full h-40 p-2 border border-gray-300 rounded-md' />
                <button type="submit" className='w-full p-2 border border-gray-300 rounded-md'>Send</button>
            </form>
            <ToastContainer /> {/* คอมโพเนนต์สำหรับแสดง Snackbar */}
        </div>
    );
}
