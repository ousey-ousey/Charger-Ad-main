/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";

const carouselItems = [
  { id: 1, src: "/product-1.png", alt: "Item 1" },
  { id: 2, src: "/product-2.png", alt: "Item 2" },
  { id: 3, src: "/product-3.png", alt: "Item 3" },
];

export const ProductSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check viewport width to decide whether to use slider or default view.
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    focusOnSelect: false,
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
            ? "bg-[#2EC5A7] border-2 border-[#2EC5A7]"
            : "bg-gray-300 border border-transparent"
        }`}
      />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
          className="text-xl sm:text-xl lg:text-3xl xl:text-3xl font-bold text-primary leading-snug"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          حامل شحن لاسلكي دوار 3 في 1
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-10">
          <div className="text-center md:text-right">
            <motion.p
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-primary"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ lineHeight: "5rem" }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              حامل شحن لاسلكي دوار 3 في 1 من Levelo TERRA مع بنك طاقة
            </motion.p>

            <motion.p
              className="mt-10 text-[#616161] text-base sm:text-lg md:text-xl font-bold"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ lineHeight: "3rem" }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              قابل للفصل بقوة 5000 مللي أمبير في الساعة، ونظام تبديد الحرارة،
              وقوة مغناطيسية قوية، وقاعدة دوارة، ومدة شحن تصل إلى ساعتين - أسود
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center gap-5 mt-8">
              <Dialog>
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <DialogTrigger asChild>
                    <motion.button
                      className="mt-8 px-6 py-3 bg-[#2EC5A7] text-lg sm:text-xl text-white font-medium rounded-lg shadow-md hover:bg-primary/90 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      إشترِ الآن
                    </motion.button>
                  </DialogTrigger>
                  <p className="text-primary text-xl font-semibold mt-7">
                    السعر : 200.00 SAR
                  </p>
                </div>
                <DialogContent className="max-w-sm sm:max-w-[400px] bg-[#FAF3EA]">
                  <DialogHeader>
                    <DialogTitle className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary">
                      اعثر على راحتك ووقتك
                    </DialogTitle>
                  </DialogHeader>
                  <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="p-5 rounded-lg w-full max-w-md">
                      <form className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-primary">
                            الإسم بالكامل
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-[#FEE3BB] placeholder:text-white rounded-sm shadow-sm focus:outline-none"
                            placeholder="الإسم بالكامل"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-primary">
                            رقم الهاتف
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-[#FEE3BB] placeholder:text-white rounded-sm shadow-sm focus:outline-none"
                            placeholder="رقم الهاتف"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-primary">
                            العنوان
                          </label>
                          <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-[#FEE3BB] placeholder:text-white rounded-sm shadow-sm focus:outline-none"
                            placeholder="العنوان"
                          />
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#F57C00] to-[#8F4800] hover:from-[#F57C00] hover:to-[#8F4800] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            اشترى الآن
                          </button>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="relative">
            {isMobile ? (
              // On mobile: display all three images in a horizontal scroll container.
              <div className="flex gap-4 overflow-x-auto">
                {carouselItems.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-[80%] sm:min-w-[300px] rounded shadow h-96 flex items-center justify-center flex-shrink-0"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </div>
                ))}
              </div>
            ) : (
              // On larger screens: use the slider.
              <Slider {...settings} className="focus:border-none">
                {carouselItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded shadow h-96 sm:h-[31.25rem] flex items-center justify-center"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
