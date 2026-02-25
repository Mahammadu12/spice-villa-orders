import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { dinnerMenu } from "@/data/menuData";
import { categoryImages } from "@/data/menuImages";
import menuCollageBg from "@/assets/menu-collage-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Menu = () => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? dinnerMenu.filter((c) => c.title === activeCategory)
    : dinnerMenu;

  return (
    <div className="min-h-screen">
      {/* Fixed full-page background */}
      <div className="fixed inset-0 -z-10">
        <img src={menuCollageBg} alt="" className="w-full h-full object-cover opacity-10" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-24">
        {/* Elegant header */}
        <motion.div className="text-center mb-14" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="text-primary/80 text-xs font-medium tracking-[0.35em] uppercase mb-3">
            {t("Spice Villa", "Spice Villa")}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4 tracking-tight">
            {t("Vår Meny", "Our Menu")}
          </h1>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-16 bg-primary/40" />
            <span className="text-primary text-lg">✦</span>
            <div className="h-px w-16 bg-primary/40" />
          </div>
          <p className="text-white/50 max-w-md mx-auto text-sm leading-relaxed italic">
            {t(
              "Utforska vårt kompletta utbud av autentiska sydasiatiska rätter.",
              "Discover authentic Pakistani flavors — each dish crafted with traditional spices and love."
            )}
          </p>
        </motion.div>

        {/* Category filter — pill style */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2 rounded-full text-[11px] font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
              !activeCategory
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-white/5 text-white/50 hover:text-white/80 border border-white/10 hover:border-white/20"
            }`}
          >
            {t("Alla", "All")}
          </button>
          {dinnerMenu.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-5 py-2 rounded-full text-[11px] font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                activeCategory === cat.title
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-white/5 text-white/50 hover:text-white/80 border border-white/10 hover:border-white/20"
              }`}
            >
              {lang === "en" ? (cat.titleEn || cat.title) : cat.title}
            </button>
          ))}
        </div>

        {/* Menu categories */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory || "all"}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="space-y-20"
          >
            {filtered.map((category) => {
              const catImage = categoryImages[category.title];
              const displayTitle = lang === "en" ? (category.titleEn || category.title) : category.title;
              const displayDesc = lang === "en" ? (category.descriptionEn || category.description) : category.description;
              return (
                <motion.section key={category.title} variants={fadeUp}>
                  {/* Category header */}
                  {catImage ? (
                    <div className="relative rounded-2xl overflow-hidden mb-8">
                      <div className="relative h-44 md:h-56">
                        <img src={catImage} alt={displayTitle} className="w-full h-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                          <h2 className="font-serif text-3xl md:text-4xl text-white drop-shadow-lg tracking-tight">{displayTitle}</h2>
                          {displayDesc && (
                            <p className="text-white/60 text-sm mt-2 max-w-lg italic">{displayDesc}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-8 text-center">
                      <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">{displayTitle}</h2>
                      {displayDesc && <p className="text-white/50 text-sm mt-2 italic">{displayDesc}</p>}
                      <div className="flex items-center justify-center gap-3 mt-4">
                        <div className="h-px w-10 bg-primary/30" />
                        <span className="text-primary/60 text-xs">✦</span>
                        <div className="h-px w-10 bg-primary/30" />
                      </div>
                    </div>
                  )}

                  {/* Dish list — fine-dining style with dotted leaders */}
                  <div className="space-y-0">
                    {category.items.map((item, i) => {
                      const itemName = lang === "en" ? (item.nameEn || item.name) : item.name;
                      const itemDesc = lang === "en" ? (item.descriptionEn || item.description) : item.description;
                      return (
                        <div
                          key={item.name + i}
                          className={`group py-4 ${
                            i !== category.items.length - 1 ? "border-b border-white/[0.06]" : ""
                          }`}
                        >
                          <div className="flex items-baseline gap-2">
                            {item.num && (
                              <span className="text-primary/40 text-xs font-mono w-6 flex-shrink-0">{item.num}.</span>
                            )}
                            <h3 className="text-white font-serif text-base md:text-lg tracking-wide group-hover:text-primary transition-colors duration-300">
                              {itemName}
                            </h3>
                            <span className="flex-1 border-b border-dotted border-white/10 mx-2 mb-1 min-w-[2rem]" />
                            <span className="text-primary font-serif text-base md:text-lg whitespace-nowrap tracking-wide">
                              {item.price}
                            </span>
                          </div>
                          {itemDesc && (
                            <p className={`text-white/40 text-xs mt-1 leading-relaxed italic ${item.num ? "pl-8" : ""}`}>
                              {itemDesc}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.section>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Footer ornament */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-primary/20" />
            <span className="text-primary/40 font-serif text-lg">❧</span>
            <div className="h-px w-20 bg-primary/20" />
          </div>
          <p className="text-white/30 text-xs mt-4 tracking-[0.2em] uppercase">
            {t("Alla priser i SEK inkl. moms", "All prices in SEK incl. VAT")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
