import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dinnerMenu } from "@/data/menuData";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? dinnerMenu.filter((c) => c.title === activeCategory)
    : dinnerMenu;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-10" initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">Vår Meny</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Utforska vårt kompletta utbud av autentiska sydasiatiska rätter.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-colors ${
              !activeCategory
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            Alla
          </button>
          {dinnerMenu.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(cat.title)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-colors ${
                activeCategory === cat.title
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
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
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            className="space-y-12"
          >
            {filtered.map((category) => (
              <motion.div key={category.title} variants={fadeUp}>
                <div className="mb-4">
                  <h2 className="font-serif text-2xl md:text-3xl text-primary">{category.title}</h2>
                  {category.description && (
                    <p className="text-muted-foreground text-sm mt-1">{category.description}</p>
                  )}
                </div>
                <div className="border border-border rounded-lg overflow-hidden">
                  {category.items.map((item, i) => (
                    <div
                      key={item.name + i}
                      className={`flex justify-between items-start px-5 py-4 ${
                        i !== category.items.length - 1 ? "border-b border-border" : ""
                      } hover:bg-secondary/50 transition-colors`}
                    >
                      <div className="flex-1 pr-4">
                        <h3 className="text-foreground font-medium text-sm">{item.name}</h3>
                        {item.description && (
                          <p className="text-muted-foreground text-xs mt-0.5">{item.description}</p>
                        )}
                      </div>
                      <span className="text-primary font-semibold text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
          <a
            href="https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded font-semibold text-base hover:bg-primary/90 transition-colors"
          >
            Beställ via Uber Eats
          </a>
          <a
            href="https://www.foodora.se/restaurant/ruvj/spice-villa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[hsl(338,90%,46%)] text-white px-10 py-4 rounded font-semibold text-base hover:bg-[hsl(338,90%,40%)] transition-colors"
          >
            Beställ via Foodora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
