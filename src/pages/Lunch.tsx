import { useState } from "react";
import { motion } from "framer-motion";
import { lunchMenu } from "@/data/menuData";
import { lunchDishImages } from "@/data/menuImages";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImg from "@/assets/dining-area.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
    <span className="text-primary/60 text-sm">✦</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
  </div>
);

const Lunch = () => {
  const { lang, t } = useLanguage();
  const [activeDay, setActiveDay] = useState(lunchMenu[0].day);

  const currentDay = lunchMenu.find((d) => d.day === activeDay) || lunchMenu[0];

  return (
    <div className="min-h-screen">
      {/* Layered background */}
      <div className="fixed inset-0 -z-10">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-[0.1]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,4%)] via-[hsl(0,0%,6%)] to-[hsl(0,0%,4%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,72%,55%,0.03),transparent_60%)]" />
      </div>

      {/* Hero Banner */}
      <div className="relative pt-36 pb-10 text-center overflow-hidden">
        <motion.div className="relative z-10 px-4" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p variants={fadeUp} className="text-primary/60 text-[10px] font-medium tracking-[0.5em] uppercase mb-4">
            {t("Spice Villa", "Spice Villa")}
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-5 tracking-tight leading-none">
            {t("Lunchmeny", "Lunch Menu")}
          </motion.h1>
          <Ornament className="mb-5" />
          <motion.p variants={fadeUp} className="text-white/40 text-base max-w-xl mx-auto italic font-light">
            {t("Mån–Fre, 11:00–15:00. Ris ingår till alla rätter.", "Mon–Fri, 11:00–15:00. Rice included with all dishes.")}
          </motion.p>
          <motion.p variants={fadeUp} className="text-white/30 text-xs mt-3 font-light">
            {t("+10 kr för Naan · +10 kr för Garlic Naan · +20 kr för Dryck", "+10 kr for Naan · +10 kr for Garlic Naan · +20 kr for Drink")}
          </motion.p>
        </motion.div>
      </div>

      {/* Day buttons */}
      <div className="flex flex-wrap justify-center gap-2 px-4 mb-6">
        {lunchMenu.map((day) => (
          <button
            key={day.day}
            onClick={() => setActiveDay(day.day)}
            className={`px-6 py-2.5 rounded-full text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
              activeDay === day.day
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-white/[0.03] text-white/40 hover:text-white/70 border border-white/[0.08] hover:border-white/15"
            }`}
          >
            {lang === "en" ? (day.dayEn || day.day) : day.day}
          </button>
        ))}
      </div>

      {/* Lunch items for selected day */}
      <div className="max-w-5xl mx-auto px-4 py-8 mb-8">
        <motion.div
          key={activeDay}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {currentDay.items.map((item, i) => {
            const dishImage = lunchDishImages[item.name];
            const itemName = lang === "en" ? (item.nameEn || item.name) : item.name;
            const itemDesc = lang === "en" ? (item.descriptionEn || item.description) : item.description;
            return (
              <motion.div
                key={item.name + i}
                variants={fadeUp}
                className="border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] backdrop-blur-sm hover:border-primary/20 transition-all duration-300 group"
              >
                {dishImage && (
                  <div className="w-full h-44 overflow-hidden">
                    <img src={dishImage} alt={itemName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-white/90 font-serif text-sm tracking-wide">{itemName}</h3>
                    <span className="text-primary/80 font-serif text-sm whitespace-nowrap ml-3">{item.price}</span>
                  </div>
                  {itemDesc && (
                    <p className="text-white/30 text-xs mt-1.5 font-light italic">{itemDesc}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Lunch;
