"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  return (
    <motion.section
      className="bg-[#FAF3EA] p-8 sm:p-16 mb-10 sm:mb-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mx-5 sm:mx-10">
        {/* Feature 1 */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4"
        >
          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-primary">
              خدمة العملاء
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              دعم مخصص
            </p>
          </div>
          <div>
            <Image src="/feature-1.png" alt="feature" width={50} height={50} />
          </div>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4"
        >
          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-primary">
              توصيل مجاني
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              توصيل مجاني للمنتجات
            </p>
          </div>
          <div>
            <Image src="/feature-2.png" alt="feature" width={50} height={50} />
          </div>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4"
        >
          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-primary">
              ضمان 100%
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              ضمان يصل لسنتين
            </p>
          </div>
          <div>
            <Image src="/feature-3.png" alt="feature" width={50} height={50} />
          </div>
        </motion.div>

        {/* Feature 4 */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-4"
        >
          <div>
            <h2 className="text-lg sm:text-2xl font-bold text-primary">
              جوده عاليه
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              مصنوعة من مواد عالية الجوده
            </p>
          </div>
          <div>
            <Image src="/feature-4.png" alt="feature" width={50} height={50} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
