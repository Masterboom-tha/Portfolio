'use client'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IconType } from "react-icons";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        Icon: IconType;
        describe: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => {
                const Icons = item.Icon
                return <div
                    key={idx}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-lg"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="rounded-md w-full p-4 overflow-hidden bg-black group-hover:ring-2 ring-green-500 relative z-20 transition-all duration-500">
                        <div className="py-10 z-50 relative">
                            <Icons className="w-12 h-12 mx-auto mb-5" />
                            <p className="text-xl font-bold text-center text-gray-300">{item.title}</p>
                            <p className={`text-xl font-bold text-center ${item.describe === "Basic" ? "text-gray-300" :
                                    item.describe === "Good" ? "text-green-300" :
                                        item.describe === "Excellent" ? "text-green-300" : ""
                                }`}>
                                {item.describe}
                            </p>
                        </div>
                    </div>
                </div>
            })}
        </div>
    );
};
