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
  const { t } = useLanguage();

  // Collect all unique dishes across all days
  const allDishes = new Map<string, { name: string; description?: string; price: string }>();
  lunchMenu.forEach((day) => {
    day.items.forEach((item) => {
      if (!allDishes.has(item.name)) {
        allDishes.set(item.name, item);
      }
    });
  });
  const dishes = Array.from(allDishes.values());

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
            {t("Mån–Fre, 11:00–15:00. Naan & ris ingår till alla rätter.", "Mon–Fri, 11:00–15:00. Naan & rice included with all dishes.")}
          </motion.p>
          <motion.p variants={fadeUp} className="text-white/60 text-sm mt-2">
            {t("+10 kr för Garlic Naan · +20 kr för Dryck", "+10 kr for Garlic Naan · +20 kr for Drink")}
          </motion.p>
        </motion.div>
      </div>

      {/* Lunch items */}
      <div className="max-w-5xl mx-auto px-4 py-16 my-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {dishes.map((item, i) => {
            const dishImage = lunchDishImages[item.name];
            return (
              <motion.div
                key={item.name + i}
                variants={fadeUp}
                className="border border-white/10 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm hover:bg-black/50 transition-colors"
              >
                {dishImage && (
                  <div className="w-full h-40">
                    <img src={dishImage} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-white font-medium text-sm">{item.name}</h3>
                    <span className="text-primary font-semibold text-sm whitespace-nowrap ml-3">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="text-white/60 text-xs mt-1">{item.description}</p>
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
