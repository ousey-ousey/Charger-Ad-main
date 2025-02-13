/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  { id: 1, src: "/product-1.png", alt: "Item 1" },
  { id: 2, src: "/product-2.png", alt: "Item 2" },
  { id: 3, src: "/product-3.png", alt: "Item 3" },
];

export const ProductSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    focusOnSelect: true,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    centerMode: true,
    afterChange: (current: number) => setActiveIndex(current),
    appendDots: (dots: string) => (
      <div className="mt-8">
        <ul className="flex justify-center gap-4 mt-10 p-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer mt-4 transition-all ${
          i === activeIndex
            ? "bg-red-600 border-2 border-black"
            : "bg-gray-300 border border-transparent"
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <motion.section
      className="bg-[#FAEEDF] py-10 px-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="mx-5 sm:mx-10">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-snug"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          حامل شحن لاسلكي دوار 3 في 1
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
          <div className="text-right">
            <motion.p
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-primary"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              حامل شحن لاسلكي دوار 3 في 1 من Levelo TERRA مع بنك طاقة
            </motion.p>

            <motion.p
              className="mt-10 text-[#616161] text-base sm:text-lg md:text-xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              قابل للفصل بقوة 5000 مللي أمبير في الساعة، ونظام تبديد الحرارة،
              وقوة مغناطيسية قوية، وقاعدة دوارة، ومدة شحن تصل إلى ساعتين - أسود
            </motion.p>

            <div className="flex items-center gap-5 mt-8">
              <motion.button
                className="px-6 py-3 bg-primary text-lg sm:text-xl text-white font-medium rounded-lg shadow-md hover:bg-primary/90 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                إشترِ الآن
              </motion.button>
              <p className="text-primary text-xl font-semibold">السعر : 200.00 SAR</p>
            </div>
          </div>

          <div className="relative">
            <Slider {...settings} className="focus:border-none">
              {carouselItems.map((item) => (
                <div key={item.id} className="rounded focus:border-none shadow h-[31.25rem] flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full focus:border-none h-full object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
