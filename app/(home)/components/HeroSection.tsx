"use client"
import React from "react"
import TextEffect from "./TextEffect"
import Link from "next/link"
import Image from "next/image"
import { MovingBorderBtn } from "@/components/ui/moving-border"
import Title from "./Title"

export default function HeroSection() {
    return (
        <div id="home" className="min-h-[60vh] max-w-7xl mx-auto flex flex-col-reverse gap-10 lg:flex-row items-center justify-between ">
            <div className="space-y-10 text lg:text-left">
                <h1 className="text-4xl lg:text-7xl font-bold">Nice to Meet you 🙌<br /> I"m Pansawut</h1>
                <span><TextEffect /></span>
                <p className="md:w-96 text-lg text-gray-300">Hi my name is Pansawut Pujaroen. I"m a Fullstack developer, Base in Bangkok</p>
                <Link href={"mailto:some@gmail.com"} className="inline-block group">
                    <Title text="Contact Me 📨" />
                </Link>
            </div>
            <div className="relative">
                <div className="w-72 h-72 bg-[#f0f0f0] lg:flex md:flex  rounded-full relative">
                    <Image src="https://scontent.fbkk12-5.fna.fbcdn.net/v/t39.30808-6/359529804_6810727408950825_6104438987199652622_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGpTEQOFDw9P66CR3eerfdqTttxk-ZvT8BO23GT5m9PwKdxaaM7srmDeGgbT726vzR2jF33L_uob5IAla5kSkii&_nc_ohc=PStZzF3KzP8Q7kNvgELwga_&_nc_ht=scontent.fbkk12-5.fna&oh=00_AYCChS7x71aSJr0-H-amLddIxfBHsZine_JRkEi_b28daA&oe=665DE948" alt="me" layout="fill" className="rounded-full" />
                </div>
                <div className="absolute bottom-5 md:-bottom-14 right-16 sm:bottom-14">
                    <MovingBorderBtn borderRadius="1rem" className="p- font-semibold">
                        <p>✔️ Available for Work</p>
                    </MovingBorderBtn>
                </div>
            </div>
        </div>
    )
} 
