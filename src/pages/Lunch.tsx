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
      <div className="max-w-3xl mx-auto px-4 py-16 bg-background/90 backdrop-blur-sm rounded-xl my-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          className="grid gap-3"
        >
          {dishes.map((item, i) => {
            const dishImage = lunchDishImages[item.name];
            return (
              <motion.div
                key={item.name + i}
                variants={fadeUp}
                className="flex items-center gap-4 border border-border rounded-lg overflow-hidden hover:bg-secondary/50 transition-colors"
              >
                {dishImage && (
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                    <img src={dishImage} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <div className="flex-1 py-3 pr-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-foreground font-medium text-sm">{item.name}</h3>
                    <span className="text-primary font-semibold text-sm whitespace-nowrap ml-3">{item.price}</span>
                  </div>
                  {item.description && (
                    <p className="text-muted-foreground text-xs mt-0.5">{item.description}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
          <a href="https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded font-semibold text-base hover:bg-primary/90 transition-colors text-center">
            {t("Beställ via Uber Eats", "Order via Uber Eats")}
          </a>
          <a href="https://www.foodora.se/restaurant/ljf2/spice-villa-ljf2" target="_blank" rel="noopener noreferrer" className="inline-block bg-[hsl(338,90%,46%)] text-white px-10 py-4 rounded font-semibold text-base hover:bg-[hsl(338,90%,40%)] transition-colors text-center">
            {t("Beställ via Foodora", "Order via Foodora")}
          </a>
          <a href="https://qopla.com/restaurant/spice-villa-spanga/qZkwaaE0oN/order" target="_blank" rel="noopener noreferrer" className="inline-block bg-[hsl(142,70%,35%)] text-white px-10 py-4 rounded font-semibold text-base hover:bg-[hsl(142,70%,30%)] transition-colors text-center">
            {t("Beställ via Qopla", "Order via Qopla")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lunch;
