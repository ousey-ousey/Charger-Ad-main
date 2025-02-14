"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    text: "وفر وقتك ولا تضيع فرص مع الشاحن",
    image: "/slideimage1.png",
  },
  {
    text: "شحن لاسلكي مغناطيسي، شاحن سريع سطح المكتب",
    image: "/slideimage2.png",
  },
  {
    text: "يعمل لجميع الأجهزة، حامل + شاحن",
    image: "/slideimage3.png",
  },
];

// Image Animation
const imageVariants = {
  hidden: { x: 100, opacity: 0 }, 
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

// Text Animation
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative bg-[#FAEEDF] overflow-hidden min-h-screen flex flex-col md:flex-row mb-32 items-center justify-center px-6">
      {/* White Corner Box */}
      <div
  className="absolute bg-white w-[35%] h-[15%] top-0 right-0 rounded-bl-[2rem] z-40"
>
  <p className="text-4xl font-semibold text-center mt-8 text-[#FFA726]">
    حامل شحن لاسلكي دوار 3 في 1
  </p>
</div>


      {/* Decorative Images */}
      <img src="/sliderdeco.png" alt="deco" className="absolute top-0 left-0" />
      <img src="/sliderdeco2.png" alt="deco" className="absolute bottom-0 left-[-2rem]" />
      <img src="/sliderdeco3.png" alt="deco" className="absolute bottom-0 right-0" />

      {/* Main Slider Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-5">
        <AnimatePresence mode="wait">
          {/* Slide Content */}
          <motion.div
            key={currentSlide}
            className="flex flex-col md:flex-row items-center justify-center w-full gap-5"
          >
            {/* Text Section */}
            <motion.p
  className="w-full md:w-1/2 text-center text-3xl md:text-5xl font-semibold text-[#3E2723]"
  style={{ lineHeight: "5rem" }}
  variants={textVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
>
  {slides[currentSlide].text}
</motion.p>


            {/* Image Section */}
            <div className="flex justify-between items-center">
            <motion.img
  src={slides[currentSlide].image}
  alt={`Slide ${currentSlide + 1}`}
  className="max-w-[50rem] w-full relative left-[-10rem] h-auto z-50 mr-8 self-center object-contain"
  variants={imageVariants}
  initial="hidden"
  animate="visible"
  exit="exit"
  style={{ maxHeight: "100vh" }} 
/>
            </div>
           
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
