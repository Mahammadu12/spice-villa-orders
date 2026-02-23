import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { dinnerMenu, SpiceLevel } from "@/data/menuData";
import { categoryImages } from "@/data/menuImages";
import menuCollageBg from "@/assets/menu-collage-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const spiceLevels: { key: SpiceLevel; label: string; color: string; dots: number }[] = [
  { key: "mild", label: "Mild", color: "bg-green-500", dots: 1 },
  { key: "medium", label: "Medium", color: "bg-yellow-500", dots: 2 },
  { key: "spicy", label: "Spicy", color: "bg-orange-500", dots: 3 },
  { key: "hot", label: "Hot", color: "bg-red-500", dots: 4 },
  { key: "extra-hot", label: "Extra Hot", color: "bg-red-700", dots: 5 },
];

const SpiceBadge = ({ level }: { level: SpiceLevel }) => {
  const info = spiceLevels.find((s) => s.key === level);
  if (!info) return null;
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-white/70">
      {Array.from({ length: info.dots }).map((_, i) => (
        <span key={i} className={`w-1.5 h-1.5 rounded-full ${info.color}`} />
      ))}
      <span className="ml-0.5">{info.label}</span>
    </span>
  );
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
        <img src={menuCollageBg} alt="" className="w-full h-full object-cover opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-20">
        <motion.div className="text-center mb-6" initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="font-serif text-4xl md:text-5xl text-white mb-3">{t("Vår Meny", "Our Menu")}</h1>
          <p className="text-white/70 max-w-lg mx-auto">
            {t("Utforska vårt kompletta utbud av autentiska sydasiatiska rätter.", "Discover authentic Pakistani flavors — each dish crafted with traditional spices and love")}
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
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-white font-medium text-sm">{item.name}</h3>
                            {item.spice && <SpiceBadge level={item.spice} />}
                          </div>
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

      </div>
    </div>
  );
};

export default Menu;
