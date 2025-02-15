"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const DetailsSection = () => {
  return (
    <section className="bg-[#FAF3EA] p-6 my-10 pt-20">
      {/* First Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative mb-10"
      >
        <div className="absolute top-10 -left-6 opacity-50 sm:opacity-100">
          <Image
            src="/vector-1.png"
            alt="vector"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="mx-5 sm:mx-10 pb-10 relative z-10">
          <div className="flex flex-col gap-8 max-w-3xl">
            <Image
              src="/detail-1.png"
              alt="detail"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
            <h2 className="text-2xl lg:text-3xl font-bold text-primary">
              تواجة مشاكل بالشحن وعدم توفر الوقت للشحن
            </h2>
            <p className="text-muted-foreground">
              هذا الجهاز يدعم الشحن السريع للأجهزة المتوافقة مع MagSafe (مثل
              هواتف iPhone الحديثة). حيث انه مصنوع من مواد عالية الجودة مثل
              الألمنيوم والبلاستيك المقوى ويستخدم كابل USB-C لتوصيله بمصدر
              الطاقة. لكن تواجه أي مشكلة في العثور على شاحن معين أو بديل.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Second Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex flex-col-reverse sm:flex-row-reverse py-10 sm:py-20"
      >
        <div className="absolute top-10 -right-6 opacity-50 sm:opacity-100">
          <Image
            src="/vector-3.png"
            alt="vector"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
        <div className="mx-5 sm:mx-10 py-10 relative z-10">
          <div className="flex flex-col gap-8 max-w-3xl">
            <Image
              src="/detail-2.png"
              alt="detail"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
            <h2 className="text-2xl lg:text-3xl font-bold text-primary">
              تواجة مشاكل تشابك الأسلاك والفوضى؟
            </h2>
            <p className="text-muted-foreground">
              يعمل هذا الجهاز بتقنية الشحن اللاسلكي المغناطيسي، مما يلغي الحاجة
              إلى عدة كابلات شحن لكل جهاز. فهو جهاز لاسلكي لا يحتاج إلى وصلات أو
              كبلات بفضل استخدام الشحن المغناطيسي، مما يقلل من الحاجة إلى إدخال
              وإخراج الكابلات، ويحمي منافذ الشحن من التلف.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Third Block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative"
      >
        <div className="absolute top-10 -left-6 opacity-50 sm:opacity-100">
          <Image
            src="/vector-4.png"
            alt="vector"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="mx-5 sm:mx-10 pb-10 relative z-10">
          <div className="flex flex-col gap-8 max-w-3xl">
            <Image
              src="/detail-3.png"
              alt="detail"
              width={700}
              height={500}
              className="w-full h-auto object-cover"
            />
            <h2 className="text-2xl lg:text-3xl font-bold text-primary">
              جهازك ترتفع حرارته أثناء الشحن؟
            </h2>
            <p className="text-muted-foreground">
              يحتوي على نظام تبريد مدمج بمروحة تساعد في الحفاظ على درجة حرارة
              الجهاز أثناء الشحن السريع، كما يدعم الشحن السريع بتقنية MagSafe
              والملفات المغناطيسية عالية الكفاءة، مما يوفر طاقة ثابتة وسريعة
              ويقلل من ارتفاع الحرارة.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
