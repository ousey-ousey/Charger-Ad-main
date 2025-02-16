"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    text: "وفر وقتك لا تضيع فرص مع الشاحن",
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
    <div className="relative bg-[#FAEEDF] overflow-hidden min-h-screen flex flex-col md:flex-row mb-20 md:mb-28 items-center w-full justify-center px-4 sm:px-6">
      {/* White Header Box */}
      <div className="absolute bg-white md:w-[35%] md:h-[15%] w-11/12 h-auto top-0 right-0 flex justify-center items-center rounded-bl-[2rem] z-40 p-2">
        <p 
          style={{ lineHeight: "2rem" }}
          className="text-center text-xl sm:text-2xl md:text-[2.3rem] font-semibold text-[#2EC5A7]"
        >
          حامل شحن لاسلكي دوار 3 في 1
        </p>
      </div>

      {/* Decorative Elements */}
      <img
        src="/sliderdeco.png"
        alt="deco"
        className="absolute top-0 left-0 w-10 sm:w-12 md:w-auto"
      />
      <img
        src="/sliderdeco2.png"
        alt="deco"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <img
        src="/sliderdeco3.png"
        alt="deco"
        className="absolute bottom-0 right-0 w-10 sm:w-12 md:w-auto"
      />

      {/* Slider Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-around w-full max-w-6xl gap-40 mt-20 md:mt-0 z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="flex flex-col md:flex-row items-center justify-center w-full gap-5"
          >
            {/* Text Container */}
            <motion.div
               className="w-full md:w-[50%] text-right text-6xl min-w-[31.25rem] 
               flex justify-center md:justify-start flex-wrap font-bold text-[#3E2723]"
     style={{ lineHeight: "5rem" }}
     variants={textVariants}
     initial="hidden"
     animate="visible"
     exit="exit"
            >
              {currentSlide === 1 ? (
                <div>
                  <p className="text-2xl text-center md:text-right sm:text-3xl md:text-6xl font-bold leading-tight whitespace-nowrap">
                    شحن لاسلكي مغناطيسي
                  </p>
                  <p className="text-2xl mt-3 md:text-right sm:text-3xl md:text-6xl font-bold leading-tight whitespace-nowrap">
                    شاحن سريع سطح المكتب
                  </p>
                </div>
              ) : currentSlide === 0 ? (
                <div>
                  <p className="text-2xl text-center md:text-right sm:text-3xl md:text-6xl font-bold leading-tight whitespace-nowrap">
                 وفر وقتك ولا تضيع 
                  </p>
                 <p className="text-2xl text-center md:text-right mt-3 sm:text-3xl md:text-6xl font-bold leading-tight whitespace-nowrap">
                 فرص مع الشاحن
                  </p>
                  
                </div>
              ):currentSlide === 2 ? (
                <div>
                  <p className="text-2xl text-center md:text-right sm:text-3xl md:text-6xl font-bold leading-tight whitespace-nowrap">
          يعمل لجميع الأجهزة،                </p>
                <p className="text-2xl text-center md:text-right mt-3 sm:text-3xl md:text-6xl font-bold leading-tight whitespace-nowrap">
                حامل + شاحن                  </p>
                </div>
              ):""}
            </motion.div>

            {/* Image Container */}
                  {/* Image Container */}
<div className="flex justify-center md:justify-start items-center">
  <motion.img
    src={slides[currentSlide].image}
    alt={`Slide ${currentSlide + 1}`}
    className="max-w-[50rem] w-full md:left-[-10rem] left-0 h-auto z-50 md:mr-8 mr-0 self-center object-contain"
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
