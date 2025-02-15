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
    <div className="relative bg-[#FAEEDF] overflow-hidden min-h-screen flex flex-col md:flex-row mb-32 items-center w-full justify-center px-4 sm:px-6">
      {/* White Header Box */}
      <div className="absolute bg-white md:w-[35%] md:h-[15%] w-11/12 h-auto top-0 right-0 flex justify-center items-center rounded-bl-[2rem] z-40 p-2">
        <p className="text-center text-xl sm:text-2xl md:text-[2.5rem] font-semibold text-[#FFA726]">
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
        className="absolute bottom-0 left-[-2rem] w-10 sm:w-12 md:w-auto"
      />
      <img
        src="/sliderdeco3.png"
        alt="deco"
        className="absolute bottom-0 right-0 w-10 sm:w-12 md:w-auto"
      />

      {/* Slider Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-5 mt-20 md:mt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="flex flex-col md:flex-row items-center justify-center w-full gap-5"
          >
            {/* Text Container */}
            <motion.div
              className="w-full md:w-3/4 text-center md:text-right flex flex-col justify-start items-center md:items-start"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {currentSlide === 1 ? (
                <div>
                  <p className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight whitespace-nowrap">
                    شحن لاسلكي مغناطيسي
                  </p>
                  <p className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight whitespace-nowrap">
                    شاحن سريع سطح المكتب
                  </p>
                </div>
              ) : (
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight whitespace-nowrap">
                  {slides[currentSlide].text}
                </p>
              )}
            </motion.div>

            {/* Image Container */}
            <div className="flex justify-center items-center md:w-1/2">
              <motion.img
                src={slides[currentSlide].image}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full max-w-md md:max-w-[50rem] h-auto z-50 object-contain"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{ maxHeight: "80vh" }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
