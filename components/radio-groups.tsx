"use client";
import * as React from "react";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroups() {
  const [selectedOption, setSelectedOption] = React.useState<string>("");

  const labelVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <motion.section
      className="mt-20 mb-20 mx-5 sm:mx-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <RadioGroup
        className="space-y-4"
        style={{ direction: "rtl" }}
        value={selectedOption}
        onValueChange={(value) => setSelectedOption(value)}
      >
        {/* Option 1 */}
        <motion.label
          htmlFor="option1"
          variants={labelVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
          className={`flex items-center justify-between w-full relative border-2 rounded px-9 py-7 cursor-pointer ${
            selectedOption === "option1"
              ? "border-[#FFA726]"
              : "border-[#B8B0A5]"
          }`}
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem id="option1" value="option1" className="shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-primary">
              نظام تبديد الحرارة
            </h2>
          </div>
          <div className="flex flex-col items-baseline gap-3">
            <h3
              className="text-lg sm:text-xl font-extrabold text-primary"
              style={{ direction: "ltr" }}
            >
              200.00 SAR
            </h3>
            <h3
              className="line-through text-sm sm:text-base font-bold text-muted-foreground"
              style={{ direction: "ltr" }}
            >
              250.00 SAR
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute -top-4"
          >
            <Badge className="bg-[#FFA726] hover:bg-[#e79c2d]">
              +بطارية 500 أمبير
            </Badge>
          </motion.div>
        </motion.label>

        {/* Option 2 */}
        <motion.label
          htmlFor="option2"
          variants={labelVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
          className={`flex items-center justify-between w-full relative border-2 rounded px-9 py-7 cursor-pointer ${
            selectedOption === "option2"
              ? "border-[#FFA726]"
              : "border-[#B8B0A5]"
          }`}
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem id="option2" value="option2" className="shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-primary">
              قوة مغناطيسية قوية، وقاعدة دوارة
            </h2>
          </div>
          <div className="flex flex-col items-baseline gap-3">
            <h3
              className="text-lg sm:text-xl font-extrabold text-primary"
              style={{ direction: "ltr" }}
            >
              220.00 SAR
            </h3>
            <h3
              className="line-through text-sm sm:text-base font-bold text-muted-foreground"
              style={{ direction: "ltr" }}
            >
              250.00 SAR
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute -top-4"
          >
            <Badge className="bg-[#FFA726] hover:bg-[#e79c2d]">
              +بطارية 500 أمبير
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: -45, x: -10 }}
            animate={{ opacity: 1, rotate: -45, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-2.5 -left-6 -rotate-45"
          >
            <Badge className="bg-[#FFA726] hover:bg-[#e79c2d] rounded-full text-[12px]">
              خصم 100 ريال
            </Badge>
          </motion.div>
        </motion.label>

        {/* Option 3 */}
        <motion.label
          htmlFor="option3"
          variants={labelVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
          className={`flex items-center justify-between w-full relative border-2 rounded px-9 py-7 cursor-pointer ${
            selectedOption === "option3"
              ? "border-[#FFA726]"
              : "border-[#B8B0A5]"
          }`}
        >
          <div className="flex items-center gap-3">
            <RadioGroupItem id="option3" value="option3" className="shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-primary">
              بطارية اضافية احتياطيه
            </h2>
          </div>
          <div className="flex flex-col items-baseline gap-3">
            <h3
              className="text-lg sm:text-xl font-extrabold text-primary"
              style={{ direction: "ltr" }}
            >
              120.00 SAR
            </h3>
            <h3
              className="line-through text-sm sm:text-base font-bold text-muted-foreground"
              style={{ direction: "ltr" }}
            >
              180.00 SAR
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute -top-4"
          >
            <Badge className="bg-[#FFA726] hover:bg-[#e79c2d]">
              +بطارية 500 أمبير
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: -45, x: -10 }}
            animate={{ opacity: 1, rotate: -45, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-2.5 -left-6 -rotate-45"
          >
            <Badge className="bg-[#FFA726] hover:bg-[#e79c2d] rounded-full text-[12px]">
              خصم 100 ريال
            </Badge>
          </motion.div>
        </motion.label>

        {/* Option 4 */}
        <motion.label
          htmlFor="option4"
          variants={labelVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
          className={`flex items-center justify-between w-full relative border-2 rounded px-9 py-7 cursor-pointer ${
            selectedOption === "option4"
              ? "border-[#FFA726]"
              : "border-[#B8B0A5]"
          }`}
        >
          <div className="flex flex-col sm:items-center sm:flex-row gap-3">
            <RadioGroupItem id="option4" value="option4" className="shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-primary">
              كفر مضاد للمياه + خصم 40%
            </h2>
            <div className="px-5 py-3 text-center bg-[#E7E7E7] text-[#F57C00] font-bold">
              الأكثر مبيعا
            </div>
          </div>
          <div className="flex flex-col items-baseline gap-3">
            <h3
              className="text-lg sm:text-xl font-extrabold text-primary"
              style={{ direction: "ltr" }}
            >
              500.00 SAR
            </h3>
            <h3
              className="line-through text-sm sm:text-base font-bold text-muted-foreground"
              style={{ direction: "ltr" }}
            >
              750.00 SAR
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute -top-4"
          >
            <Badge className="bg-[#FFA726] hover:bg-[#e79c2d]">
              +بطارية 500 أمبير
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, rotate: -45, x: -10 }}
            animate={{ opacity: 1, rotate: -45, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-2.5 -left-6 -rotate-45"
          >
            <Badge className="bg-[#FFA726] hover:bg-[#e79c2d] rounded-full text-[12px]">
              خصم 100 ريال
            </Badge>
          </motion.div>
        </motion.label>

        {/* Option 5 */}
        <motion.label
          htmlFor="option5"
          variants={labelVariants}
          initial="initial"
          whileHover="hover"
          animate="animate"
          className={`flex items-center justify-between w-full relative border-2 rounded px-9 py-7 cursor-pointer ${
            selectedOption === "option5"
              ? "border-[#FFA726]"
              : "border-[#B8B0A5]"
          }`}
        >
          <div className="flex flex-col sm:items-center sm:flex-row gap-3">
            <RadioGroupItem id="option5" value="option5" className="shrink-0" />
            <h2 className="text-lg sm:text-xl font-bold text-primary">
              كفر مضاد للمياه + خصم 40%
            </h2>
            <div className="px-5 py-3 text-center bg-[#E7E7E7] text-[#F57C00] font-bold">
              الأكثر مبيعا
            </div>
          </div>
          <div className="flex flex-col items-baseline gap-3">
            <h3
              className="text-lg sm:text-xl font-extrabold text-primary"
              style={{ direction: "ltr" }}
            >
              500.00 SAR
            </h3>
            <h3
              className="line-through text-sm sm:text-base font-bold text-muted-foreground"
              style={{ direction: "ltr" }}
            >
              750.00 SAR
            </h3>
          </div>
          <motion.div
            initial={{ opacity: 0, rotate: -45, x: -10 }}
            animate={{ opacity: 1, rotate: -45, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-2.5 -left-6 -rotate-45"
          >
            <Badge className="bg-[#FFA726] hover:bg-[#e79c2d] rounded-full text-[12px]">
              خصم 100 ريال
            </Badge>
          </motion.div>
        </motion.label>
      </RadioGroup>
    </motion.section>
  );
}
