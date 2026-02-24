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

const Lunch = () => {
  const { lang, t } = useLanguage();
  const [activeDay, setActiveDay] = useState(lunchMenu[0].day);

  const currentDay = lunchMenu.find((d) => d.day === activeDay) || lunchMenu[0];

  return (
    <div className="min-h-screen">
      {/* Fixed full-page background */}
      <div className="fixed inset-0 -z-10">
        <img src={heroImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero Banner */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <motion.div className="relative z-10 text-center px-4" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            {t("Lunchmeny", "Lunch Menu")}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/80 text-lg md:text-xl max-w-xl mx-auto">
            {t("Mån–Fre, 11:00–15:00. Ris ingår till alla rätter.", "Mon–Fri, 11:00–15:00. Rice included with all dishes.")}
          </motion.p>
          <motion.p variants={fadeUp} className="text-white/60 text-sm mt-2">
            {t("+10 kr för Naan · +10 kr för Garlic Naan · +20 kr för Dryck", "+10 kr for Naan · +10 kr for Garlic Naan · +20 kr for Drink")}
          </motion.p>
        </motion.div>
      </div>

      {/* Day buttons */}
      <div className="flex flex-wrap justify-center gap-2 px-4 mb-4">
        {lunchMenu.map((day) => (
          <button
            key={day.day}
            onClick={() => setActiveDay(day.day)}
            className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-colors ${
              activeDay === day.day
                ? "bg-primary text-primary-foreground"
                : "bg-white/10 text-white/70 hover:text-white border border-white/10"
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
                className="border border-white/10 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm hover:bg-black/50 transition-colors"
              >
                {dishImage && (
                  <div className="w-full h-40">
                    <img src={dishImage} alt={itemName} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-white font-medium text-sm">{itemName}</h3>
                    <span className="text-primary font-semibold text-sm whitespace-nowrap ml-3">{item.price}</span>
                  </div>
                  {itemDesc && (
                    <p className="text-white/60 text-xs mt-1">{itemDesc}</p>
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
