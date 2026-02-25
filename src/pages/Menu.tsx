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

const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
    <span className="text-primary/80 text-sm">✦</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
  </div>
);

const Menu = () => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? dinnerMenu.filter((c) => c.title === activeCategory)
    : dinnerMenu;

  return (
    <div className="min-h-screen">
      {/* Layered background for depth */}
      <div className="fixed inset-0 -z-10">
        <img src={menuCollageBg} alt="" className="w-full h-full object-cover opacity-35" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,72%,55%,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(43,72%,55%,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,72%,55%,0.03),transparent_60%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-28">
        {/* Grand header */}
        <motion.div className="text-center mb-16" initial="hidden" animate="visible" variants={fadeUp}>
          <p className="text-primary/80 text-[10px] font-medium tracking-[0.5em] uppercase mb-4">
            {t("Spice Villa Presenterar", "Spice Villa Presents")}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-5 tracking-tight leading-none">
            {t("Vår Meny", "Our Menu")}
          </h1>
          <Ornament className="mb-6" />
          <p className="text-white/70 max-w-sm mx-auto text-sm leading-relaxed italic font-light">
            {t(
              "En kulinarisk resa genom Sydasiens rikaste smaker, hantverksmässigt tillagade av våra kockar.",
              "A culinary journey through South Asia's richest flavors, artfully crafted by our chefs."
            )}
          </p>
        </motion.div>

        {/* Category filter — refined pill style */}
        <div className="flex flex-wrap justify-center gap-2 mb-20">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-6 py-2.5 rounded-full text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
              !activeCategory
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-white/[0.03] text-white/70 hover:text-white/90 border border-white/[0.08] hover:border-white/15"
            }`}
          >
            {t("Alla", "All")}
          </button>
          {dinnerMenu.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
                activeCategory === cat.title
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-white/[0.03] text-white/70 hover:text-white/90 border border-white/[0.08] hover:border-white/15"
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
            className="space-y-24"
          >
            {filtered.map((category) => {
              const catImage = categoryImages[category.title];
              const displayTitle = lang === "en" ? (category.titleEn || category.title) : category.title;
              const displayDesc = lang === "en" ? (category.descriptionEn || category.description) : category.description;
              return (
                <motion.section key={category.title} variants={fadeUp}>
                  {/* Category header */}
                  {catImage ? (
                    <div className="relative rounded-2xl overflow-hidden mb-10 ring-1 ring-white/[0.06]">
                      <div className="relative h-48 md:h-60">
                        <img src={catImage} alt={displayTitle} className="w-full h-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10" />
                        <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                          <p className="text-primary/80 text-[10px] tracking-[0.4em] uppercase mb-2 font-medium">
                            {t("Kategori", "Category")}
                          </p>
                          <h2 className="font-serif text-3xl md:text-4xl text-white drop-shadow-lg tracking-tight">{displayTitle}</h2>
                          {displayDesc && (
                            <p className="text-white/75 text-sm mt-2 max-w-lg italic font-light">{displayDesc}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-10 text-center">
                      <p className="text-primary/70 text-[10px] tracking-[0.4em] uppercase mb-2 font-medium">
                        {t("Kategori", "Category")}
                      </p>
                      <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight">{displayTitle}</h2>
                      {displayDesc && <p className="text-white/70 text-sm mt-2 italic font-light">{displayDesc}</p>}
                      <Ornament className="mt-5" />
                    </div>
                  )}

                  {/* Dish list — fine-dining dotted leaders */}
                  <div className="space-y-0">
                    {category.items.map((item, i) => {
                      const itemName = lang === "en" ? (item.nameEn || item.name) : item.name;
                      const itemDesc = lang === "en" ? (item.descriptionEn || item.description) : item.description;
                      return (
                        <div
                          key={item.name + i}
                          className={`group py-4 ${
                            i !== category.items.length - 1 ? "border-b border-white/[0.08]" : ""
                          }`}
                        >
                          <div className="flex items-baseline gap-2">
                            {item.num && (
                              <span className="text-primary/60 text-[11px] font-mono w-6 flex-shrink-0">{item.num}.</span>
                            )}
                            <h3 className="text-white font-serif text-base md:text-lg tracking-wide group-hover:text-primary transition-colors duration-300">
                              {itemName}
                            </h3>
                            <span className="flex-1 border-b border-dotted border-white/[0.15] mx-3 mb-1 min-w-[2rem]" />
                            <span className="text-primary font-serif text-base md:text-lg whitespace-nowrap tracking-wide">
                              {item.price}
                            </span>
                          </div>
                          {itemDesc && (
                            <p className={`text-white/60 text-xs mt-1.5 leading-relaxed italic font-light ${item.num ? "pl-8" : ""}`}>
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
          className="text-center mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Ornament className="mb-6" />
          <p className="text-white/50 text-[10px] mt-4 tracking-[0.3em] uppercase font-medium">
            {t("Alla priser i SEK inkl. moms", "All prices in SEK incl. VAT")}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
