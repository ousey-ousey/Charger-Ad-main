"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RefreshCcw, ShoppingBag, Truck, UserRoundCheck } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const About = () => {
  return (
    <motion.section
      className="bg-[#FAF3EA] p-0 sm:p-5 mb-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="mx-5 sm:mx-10">
        <motion.div
          className="relative flex flex-col lg:flex-row-reverse justify-between gap-10 py-10"
          variants={itemVariants}
        >
          {/* Decorative Vector Image */}
          <div className="hidden md:block absolute top-0 left-[470px] opacity-50 sm:opacity-100">
            <Image
              src="/vector-5.png"
              alt="vector"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>

          {/* Video Section */}
          <motion.div
            className="mx-5 sm:mx-10 py-10 relative z-10"
            variants={itemVariants}
          >
            <div className="flex flex-col gap-8 max-w-xl">
              <motion.video
                src="/vid.mp4"
                className="object-cover w-full h-[400px] sm:h-[500px]"
                controls
                autoPlay
                loop
                muted
                whileHover={{ scale: 1.02 }}
              >
                Your browser does not support the video tag.
              </motion.video>
            </div>
          </motion.div>

          {/* Text and Features Section */}
          <motion.div className="mt-10" variants={itemVariants}>
            <motion.h1
              className="text-primary text-2xl sm:text-3xl md:text-5xl font-bold"
              variants={itemVariants}
            >
              لماذا تختارنا
            </motion.h1>
            <motion.p
              className="text-muted-foreground text-justify py-5 text-base sm:text-lg max-w-md"
              variants={itemVariants}
            >
              نحن نقدم العديد من الخصائص لأن منتجنا أصلي وأفضل الخامات والأسعار
              ومن حيث الراحة.
            </motion.p>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Feature 1 */}
              <motion.div
                className="flex flex-col items-start gap-3 relative"
                variants={itemVariants}
              >
                <div className="bg-[#35736E33] size-10 rounded-full absolute right-5 top-1" />
                <ShoppingBag className="size-10" />
                <h2 className="text-lg font-semibold text-primary">
                  سهولة التصفح
                </h2>
                <p className="text-muted-foreground">
                  يمكنك بسهولة التصفح واختيار الجهاز الملائم لك.
                </p>
              </motion.div>
              {/* Feature 2 */}
              <motion.div
                className="flex flex-col items-start gap-3 relative"
                variants={itemVariants}
              >
                <div className="bg-[#35736E33] size-10 rounded-full absolute right-5 top-1" />
                <Truck className="size-10 transform scale-x-[-1]" />
                <h2 className="text-lg font-semibold text-primary">
                  سرعة التوصيل
                </h2>
                <p className="text-muted-foreground">
                  لدينا أفضل السائقين من حيث السرعة وضمان الجودة.
                </p>
              </motion.div>
              {/* Feature 3 */}
              <motion.div
                className="flex flex-col items-start gap-3 relative"
                variants={itemVariants}
              >
                <div className="bg-[#35736E33] size-10 rounded-full absolute right-5 top-1" />
                <RefreshCcw className="size-10" />
                <h2 className="text-lg font-semibold text-primary">
                  استرجاع التلف
                </h2>
                <p className="text-muted-foreground">
                  نقدم خدمة استرجاع التالف في حالة حدوث أي ضرر للمنتج.
                </p>
              </motion.div>
              {/* Feature 4 */}
              <motion.div
                className="flex flex-col items-start gap-3 relative"
                variants={itemVariants}
              >
                <div className="bg-[#35736E33] size-10 rounded-full absolute right-5 top-1" />
                <UserRoundCheck className="size-10" />
                <h2 className="text-lg font-semibold text-primary">
                  آراء العملاء
                </h2>
                <p className="text-muted-foreground">
                  يمكنك الاطلاع على آراء العملاء للمصداقية والتأكد من المنتج.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
