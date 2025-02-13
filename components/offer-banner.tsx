"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PercentCircle } from "lucide-react";

export const OfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date().getTime() + 1000 * 60 * 60 * 72; // 72 hours from now
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mx-5 sm:mx-10 mb-20 bg-gradient-to-r from-[#996417] to-[#FFA726] p-5 rounded-lg flex flex-col md:flex-row justify-between items-center text-white"
    >
      {/* Countdown Label with icon */}
      <motion.span
        variants={itemVariants}
        whileHover={{ scale: 1.05, rotate: 5 }}
        className="flex items-center gap-3 text-lg md:text-xl font-semibold text-[#FEE3BB] mb-4 md:mb-0"
      >
        <PercentCircle />
        هذه العروض ستنتهي بعد:
      </motion.span>

      {/* Countdown Timer */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        {/* Days */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.span
            layout
            className="text-[#D9D9D9] text-2xl md:text-3xl px-3 py-1 rounded-md font-mono"
          >
            {String(timeLeft.days).padStart(2, "0")}
          </motion.span>
          <span className="text-lg md:text-xl">أيام</span>
        </motion.div>

        {/* Hours */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.span
            layout
            className="text-[#D9D9D9] text-2xl md:text-3xl px-3 py-1 rounded-md font-mono"
          >
            {String(timeLeft.hours).padStart(2, "0")}
          </motion.span>
          <span className="text-lg md:text-xl">ساعات</span>
        </motion.div>

        {/* Minutes */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.span
            layout
            className="text-[#D9D9D9] text-2xl md:text-3xl px-3 py-1 rounded-md font-mono"
          >
            {String(timeLeft.minutes).padStart(2, "0")}
          </motion.span>
          <span className="text-lg md:text-xl">دقائق</span>
        </motion.div>

        {/* Seconds */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.span
            layout
            className="text-[#D9D9D9] text-2xl md:text-3xl px-3 py-1 rounded-md font-mono"
          >
            {String(timeLeft.seconds).padStart(2, "0")}
          </motion.span>
          <span className="text-lg md:text-xl">ثواني</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
