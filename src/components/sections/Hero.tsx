import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import bgImage1 from '@/assets/bgImage2.png';
import { twMerge } from "tailwind-merge";
import { El_Messiri } from "next/font/google";
import pccoeLogo from '@/assets/pccoeLogo.png';
import etsaLogo from '@/assets/etsaLogo.png';
import ieteLogo from '@/assets/ieteLogo.png';
import ieeeLogo from '@/assets/image.png';
import pccoeLogo2 from '@/assets/pccoe2Logo.png';
import { ArrowDown, Mouse } from "lucide-react";
import { useState, useEffect } from "react";

const elMessiri = El_Messiri({ style: "normal", subsets:['latin'] });

export const Hero = ({
    sectionRef
}: {
    sectionRef: React.RefObject<HTMLDivElement | null>
}) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    
      useEffect(() => {
        const updateDimensions = () => {
          setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        updateDimensions();
    
        window.addEventListener("resize", updateDimensions);
    
        return () => window.removeEventListener("resize", updateDimensions);
      }, []);
    return (
        <main ref={sectionRef}>
            <section className="relative flex flex-col items-center overflow-hidden">
                <div className="absolute bottom-0 z-10 h-full w-full"></div>
                <Image src={bgImage1} alt="bgImage1" priority className="absolute object-cover -z-40 left-0 w-full h-full" 
                 width={dimensions.width}
                />
                <div className="flex flex-col w-full justify-center items-center pt-32 md:pt-60 lg:pt-72">
                <motion.div 
                        className="flex justify-center items-center gap-4 md:gap-6 md:pt- lg:pt pb-10"
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {[pccoeLogo2, etsaLogo, pccoeLogo].map((logo, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="transition-transform"
                            >
                                <Image src={logo} alt="logo" className="size-8 md:size-16 object-cover aspect-square" />
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.8 }}
                        className={twMerge(elMessiri.className, 'font-semibold text-6xl md:text-7xl lg:text-9xl')}
                    >
                        NEXUS &apos;25
                    </motion.h1>
                    <motion.h2 
                        initial={{ opacity: 0, y: 50 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 1, delay: 0.3 }}
                        className={twMerge(elMessiri.className, 'text-sm py-1 md:text-lg lg:text-xl')}
                    >
                        The Ultimate Tech Convergence!
                    </motion.h2>
                    <span className={twMerge('pt-6 md:pt-10 text-xs md:text-xl font-extralight tracking-wide', elMessiri.className)}>Technical Sponsors</span>
                    <motion.div 
                        className="flex justify-center items-center gap-4 md:gap-6 md:pt- lg:pt"
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {[ieteLogo, ieeeLogo].map((logo, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="transition-transform"
                            >
                                <Image src={logo} alt="logo" className="size-8 md:size-16 object-cover" />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div 
                        className="hidden md:inline-flex border rounded-full p-1 mt-1 md:mt-10 lg:mt-28 md:p-3 opacity-75"
                        animate={{ y: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <Mouse className="size-4 md:size-8" />
                    </motion.div>
                    <motion.div
                        animate={{ y: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowDown className="size-4 md:size-8 opacity-75 mt-8 md:mt-1" />
                    </motion.div>
                    <div className="pb-36 md:pb-12"></div>
                </div>
            </section>
        </main>
    );
}
