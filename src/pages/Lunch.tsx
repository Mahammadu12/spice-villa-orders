import { useState } from "react";
import { motion } from "framer-motion";
import { lunchMenu } from "@/data/menuData";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Lunch = () => {
  const todayIndex = new Date().getDay(); // 0=Sun, 1=Mon...
  const dayMap: Record<number, string> = { 1: "Måndag", 2: "Tisdag", 3: "Onsdag", 4: "Torsdag", 5: "Fredag" };
  const todayName = dayMap[todayIndex] || null;
  const [activeDay, setActiveDay] = useState<string>(todayName || "Måndag");

  const currentLunch = lunchMenu.find((d) => d.day === activeDay);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-10" initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">Lunchmeny</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Mån–Fre, 11:00–15:00. Naan & ris ingår till alla rätter.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            +10 kr för Garlic Naan · +20 kr för Dryck
          </p>
        </motion.div>

        {/* Day tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {lunchMenu.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-colors ${
                activeDay === day.day
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {day.day}
              {day.day === todayName && " ✦"}
            </button>
          ))}
        </div>

        {/* Lunch items */}
        {currentLunch && (
          <motion.div
            key={activeDay}
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
            className="max-w-2xl mx-auto"
          >
            <div className="border border-border rounded-lg overflow-hidden">
              {currentLunch.items.map((item, i) => (
                <motion.div
                  key={item.name + i}
                  variants={fadeUp}
                  className={`flex justify-between items-start px-5 py-4 ${
                    i !== currentLunch.items.length - 1 ? "border-b border-border" : ""
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA */}
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

export default Lunch;
