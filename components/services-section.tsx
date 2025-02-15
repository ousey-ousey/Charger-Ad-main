"use client";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ServicesSection = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <section className="bg-white mb-20">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-5 sm:mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Card 1 */}
        <motion.div variants={itemVariants} className="relative">
          <DropdownMenu onOpenChange={setOpen}>
            <div className="bg-[#FAF3EA] p-8 rounded-lg border border-primary">
              <h3 className="text-xl sm:text-3xl font-bold text-center text-primary">
                30 يوم ضمان
              </h3>
            </div>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 shadow-lg text-center bg-primary hover:bg-primary/90"
              >
                <ChevronDown
                  className={`transition-transform duration-300 text-white ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Button>
            </DropdownMenuTrigger>
            <AnimatePresence>
              {open && (
                <DropdownMenuContent asChild>
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    dir="rtl"
                    className="w-60 p-5 bg-[#FAF3EA] border border-primary"
                  >
                    <p className="text-muted-foreground text-justify">
                      ضمان إرجاع أو استرداد لمدة 30 يومًا. يؤهلك هذا للمطالبة
                      باسترداد المبلغ أو استبداله في غضون 30 يومًا من استلام
                      العناصر الخاصة بك. لتقديم مطالبة تواصل معنا على بريدنا
                      الالكتروني support@yourstore.com
                    </p>
                  </motion.div>
                </DropdownMenuContent>
              )}
            </AnimatePresence>
          </DropdownMenu>
        </motion.div>

        {/* Card 2 */}
        <motion.div variants={itemVariants} className="relative">
          <DropdownMenu onOpenChange={setOpen2}>
            <div className="bg-primary p-8 rounded-lg border border-[#FAF3EA]">
              <h3 className="text-xl sm:text-3xl font-bold text-center text-[#FAF3EA]">
                سياسة الاسترجاع
              </h3>
            </div>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 border-none shadow-lg text-center bg-[#FAF3EA] hover:bg-[#FAF3EA]/90"
              >
                <ChevronDown
                  className={`transition-transform duration-300 text-primary ${
                    open2 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Button>
            </DropdownMenuTrigger>
            <AnimatePresence>
              {open2 && (
                <DropdownMenuContent asChild>
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    dir="rtl"
                    className="w-60 p-5 bg-primary border border-[#FAF3EA]"
                  >
                    <p className="text-[#FAF3EA] text-justify">
                      عند استلام المنتج ، يمكنك إعادته خلال 30 يوم إذا كانت لديك
                      أي أسئلة بعد استلام المنتج ، فيرجى الاتصال بالدردشة
                      المباشرة أو البريد الإلكترونى support@yourstore.com
                    </p>
                  </motion.div>
                </DropdownMenuContent>
              )}
            </AnimatePresence>
          </DropdownMenu>
        </motion.div>

        {/* Card 3 */}
        <motion.div variants={itemVariants} className="relative">
          <DropdownMenu onOpenChange={setOpen3}>
            <div className="bg-[#FAF3EA] p-8 rounded-lg border border-primary">
              <h3 className="text-xl sm:text-3xl font-bold text-center text-primary">
                التوصيل
              </h3>
            </div>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 shadow-lg text-center bg-primary hover:bg-primary/90"
              >
                <ChevronDown
                  className={`transition-transform duration-300 text-white ${
                    open3 ? "rotate-180" : "rotate-0"
                  }`}
                />
              </Button>
            </DropdownMenuTrigger>
            <AnimatePresence>
              {open3 && (
                <DropdownMenuContent asChild>
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    dir="rtl"
                    className="w-60 p-5 bg-[#FAF3EA] border border-primary"
                  >
                    <p className="text-muted-foreground text-justify">
                      الشحن مجانا والدفع عند التسليم. يتم التوصيل عادةً في أيام
                      عمل 1-3
                    </p>
                  </motion.div>
                </DropdownMenuContent>
              )}
            </AnimatePresence>
          </DropdownMenu>
        </motion.div>
      </motion.div>
    </section>
  );
};
