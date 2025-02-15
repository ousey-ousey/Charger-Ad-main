"use client";

import { motion } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  weight: ["400", "700"],
  subsets: ["arabic"],
  display: "swap",
});

export const Banner = () => {
  return (
    <motion.section
      className={`relative flex justify-center items-center text-center h-16 sm:h-20 p-4 md:p-8 lg:p-12 ${cairo.className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/image-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Background Vector Graphic */}
      <img
        src="/Vector-banner.png"
        alt="draw"
        className="absolute bottom-4 left-[48%] transform -translate-x-1/2 w-3/4 h-10 z-0 opacity-80"
      />

      {/* Delivery Icon positioned at the end of the vector */}
      <img
        src="/mdi_delivery-dining-electric.png"
        alt="delivery"
        className="absolute bottom-4 right-[13%] z-0 w-12 h-12"
      />

      {/* Text Content */}
      <motion.p
        className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold px-4 py-3 rounded-lg text-[#FFA726] relative z-10"
        style={{ lineHeight: 1.75 }}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeIn" }}
      >
        توصيل سريع خلال ٤٨ ساعة + تخفيض
        <span className="text-[#FEE3BB]"> %50 </span>+ هدية بعد الطلب
      </motion.p>
    </motion.section>
  );
};
