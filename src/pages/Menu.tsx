import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { dinnerMenu } from "@/data/menuData";
import { categoryImages } from "@/data/menuImages";
import menuCollageBg from "@/assets/menu-collage-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Menu = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? dinnerMenu.filter((c) => c.title === activeCategory)
    : dinnerMenu;

  return (
    <div className="min-h-screen">
      {/* Fixed full-page background */}
      <div className="fixed inset-0 -z-10">
        <img src={menuCollageBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-20">
        <motion.div className="text-center mb-10" initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-3">{t("Vår Meny", "Our Menu")}</h1>
          <p className="text-white/70 max-w-lg mx-auto">
            {t("Utforska vårt kompletta utbud av autentiska sydasiatiska rätter.", "Explore our complete range of authentic South Asian dishes.")}
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-colors ${
              !activeCategory ? "bg-primary text-primary-foreground" : "bg-white/10 text-white/70 hover:text-white border border-white/10"
            }`}
          >
            {t("Alla", "All")}
          </button>
          {dinnerMenu.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-colors ${
                activeCategory === cat.title ? "bg-primary text-primary-foreground" : "bg-white/10 text-white/70 hover:text-white border border-white/10"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Menu categories */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory || "all"}
            initial="hidden" animate="visible" exit="hidden"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            className="space-y-14"
          >
            {filtered.map((category) => {
              const catImage = categoryImages[category.title];
              return (
                <motion.div key={category.title} variants={fadeUp}>
                  <div className="relative rounded-xl overflow-hidden mb-4">
                    {catImage && (
                      <div className="relative h-40 md:h-48">
                        <img src={catImage} alt={category.title} className="w-full h-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-5">
                          <h2 className="font-serif text-2xl md:text-3xl text-primary drop-shadow-lg">{category.title}</h2>
                          {category.description && <p className="text-foreground/80 text-sm mt-1 max-w-lg drop-shadow">{category.description}</p>}
                        </div>
                      </div>
                    )}
                    {!catImage && (
                      <div className="mb-4">
                        <h2 className="font-serif text-2xl md:text-3xl text-primary">{category.title}</h2>
                        {category.description && <p className="text-muted-foreground text-sm mt-1">{category.description}</p>}
                      </div>
                    )}
                  </div>
                  <div className="border border-white/10 rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm">
                    {category.items.map((item, i) => (
                      <div key={item.name + i} className={`flex justify-between items-start px-5 py-4 ${i !== category.items.length - 1 ? "border-b border-white/10" : ""} hover:bg-white/5 transition-colors`}>
                        <div className="flex-1 pr-4">
                          <h3 className="text-white font-medium text-sm">{item.name}</h3>
                          {item.description && <p className="text-white/60 text-xs mt-0.5">{item.description}</p>}
                        </div>
                        <span className="text-primary font-semibold text-sm whitespace-nowrap">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
          <a href="https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded font-semibold text-base hover:bg-primary/90 transition-colors">
            {t("Beställ via Uber Eats", "Order via Uber Eats")}
          </a>
          <a href="https://www.foodora.se/restaurant/ljf2/spice-villa-ljf2" target="_blank" rel="noopener noreferrer" className="inline-block bg-[hsl(338,90%,46%)] text-white px-10 py-4 rounded font-semibold text-base hover:bg-[hsl(338,90%,40%)] transition-colors">
            {t("Beställ via Foodora", "Order via Foodora")}
          </a>
          <a href="https://qopla.com/restaurant/spice-villa-spanga/qZkwaaE0oN/order" target="_blank" rel="noopener noreferrer" className="inline-block bg-[hsl(142,70%,35%)] text-white px-10 py-4 rounded font-semibold text-base hover:bg-[hsl(142,70%,30%)] transition-colors">
            {t("Beställ via Qopla", "Order via Qopla")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
