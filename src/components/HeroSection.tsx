"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cover } from "./ui/cover";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Spotlight } from "./ui/spotlight-new";
import { ThreeDMarquee } from "./ui/3d-marquee";
import { Button } from "./ui/moving-border";
import { useRouter } from 'next/navigation';

const words = [
    {
      text: "Take",
      className: "font-work-sans font-bold text-4xl",
    },
    {
      text: "Loan",
      className: "font-work-sans font-bold text-4xl",
    },
    {
      text: "in ",
      className: "font-work-sans font-bold text-4xl",
    },
    {
      text: "a",
      className: "font-work-sans font-bold text-4xl",
    },
    {
      text: "Blink",
      className: "font-work-sans font-bold text-4xl text-blue-500 dark:text-blue-500",
      component: <Cover className="text-blue-500">Blink</Cover>,
    },
];

const images = [
    "https://images.unsplash.com/photo-1603039078583-13468e835b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1559067341-04a52c7d06d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1681437746657-412fe919561a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1709534486708-fb8f94150d0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1634757439914-23b8acb9d411?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1622186477895-f2af6a0f5a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1679920897222-3c9e713bde36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1521897258701-21e2a01f5e8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1634474588707-de99f09285c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1661425407118-e64871d1ab65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1564052269004-c0878d752c92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1564052269004-c0878d752c92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1679920897222-3c9e713bde36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1603039078583-13468e835b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1521897258701-21e2a01f5e8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1559067341-04a52c7d06d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1603039078583-13468e835b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1564052269004-c0878d752c92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGxvYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1603039078583-13468e835b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://images.unsplash.com/photo-1603039078583-13468e835b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://images.unsplash.com/photo-1603039078583-13468e835b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://images.unsplash.com/photo-1603039078583-13468e835b01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bG9hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://assets.aceternity.com/world-map.webp",
];

function HeroSection() {
    const router = useRouter();
    // Set up scrolling animations
    const { scrollY } = useScroll();
    
    // Transform values based on scroll position
    const titleOpacity = useTransform(scrollY, [0, 200], [1, 0]);
    const titleY = useTransform(scrollY, [0, 200], [0, -50]);
    
    const descriptionOpacity = useTransform(scrollY, [50, 250], [1, 0]);
    const descriptionY = useTransform(scrollY, [50, 250], [0, -50]);
    
    const buttonOpacity = useTransform(scrollY, [100, 300], [1, 0]);
    const buttonY = useTransform(scrollY, [100, 300], [0, -50]);
    
    // Parallax effect for video background
    const videoY = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Video Section with parallax */}
            <div className="h-screen w-full relative overflow-hidden">
                <motion.div 
                    className="absolute inset-0 w-full h-full z-0"
                    style={{ y: videoY }}
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute w-full h-full object-cover"
                    >
                        <source src="/hero-desktop.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/50" />
                </motion.div>
                <Spotlight />
                <div className='h-full w-full flex flex-col items-center justify-center relative mx-auto py-10 md:py-0'>
                    <div className='p-4 relative z-10 w-full text-center'>
                        {/* Title with scroll animation */}
                        <motion.div style={{ opacity: titleOpacity, y: titleY }}>
                            <h1><TypewriterEffect words={words} /></h1>
                        </motion.div>
                        
                        {/* Description with scroll animation */}
                        <motion.p 
                            className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'
                            style={{ opacity: descriptionOpacity, y: descriptionY }}
                        >
                            RBI regulated, we are a new age fintech platform.We offer emergency loans, including short-term salaried loans and micro business loans,crafted to provide quick, dependable and compassionate financial solutions
                        </motion.p>
                        
                        {/* Button with scroll animation */}
                        <motion.div 
                            className="mt-4 flex justify-center"
                            style={{ opacity: buttonOpacity, y: buttonY }}
                        >
                            <Button
                                onClick={() => router.push('/apply')}
                                className='px-8 py-3 rounded-md bg-black text-white font-medium transition-all duration-300 cursor-pointer'
                            >
                                <span className='hover:scale-130 transition-all duration-300'>Apply Now</span>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ThreeDMarquee Section with fade-in animation */}
            <motion.div 
                className="w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                <ThreeDMarquee images={images} />
            </motion.div>
        </div>
    );
}

export default HeroSection;