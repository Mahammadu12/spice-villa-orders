import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iftarItems = {
  starters: [
    "Khajoor (Dates) & Rooh Afza (Drink)",
    "Aloo Chana Chaat",
    "Dahi Bhare",
    "Veg Samosa",
    "Mix Veg Pakora",
  ],
  karahi: ["Lamb", "Chicken", "Beef"],
  vegetarian: ["Aloo Palak", "Dal", "Lahori Chana"],
  sides: ["Zeera Rice", "Naan Bread", "Salad", "Mint Raita", "Garlic Sauce"],
  dessert: ["Zarda", "Gulab Jamun"],
  drinks: ["Chai (Tea)", "Coffee"],
};

const Iftar = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3"
            variants={fadeUp}
          >
            Ramadan Special
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-5xl text-foreground mb-4"
            variants={fadeUp}
          >
            Iftar Menu
          </motion.h1>
          <motion.p className="text-muted-foreground" variants={fadeUp}>
            Njut av en komplett iftarmåltid med familj och vänner.
          </motion.p>
        </motion.div>

        {/* Booking notice */}
        <motion.div
          className="bg-primary/10 border border-primary/30 rounded-lg p-6 mb-10 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star size={18} className="text-primary" />
            <span className="font-semibold text-foreground uppercase tracking-wide text-sm">
              Förbokning krävs
            </span>
            <Star size={18} className="text-primary" />
          </div>
          <p className="text-muted-foreground text-sm mb-3">
            Bokning måste göras före kl. 14:00 (samma dag).
          </p>
          <a
            href="tel:0764222770"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            <Phone size={16} />
            Ring: 0764222770
          </a>
        </motion.div>

        {/* Menu card */}
        <motion.div
          className="bg-card text-card-foreground rounded-lg border border-border overflow-hidden shadow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Starters */}
          <motion.div className="p-6 border-b border-border" variants={fadeUp}>
            <h3 className="font-serif text-lg text-primary mb-3">Inkluderat</h3>
            <ul className="space-y-1.5">
              {iftarItems.starters.map((item) => (
                <li key={item} className="text-card-foreground/80 text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Karahi */}
          <motion.div className="p-6 border-b border-border" variants={fadeUp}>
            <h3 className="font-serif text-lg text-primary mb-1">
              Karahi – <span className="italic text-card-foreground/60">Välj en:</span>
            </h3>
            <div className="flex flex-wrap gap-3 mt-3">
              {iftarItems.karahi.map((item) => (
                <span
                  key={item}
                  className="bg-secondary text-foreground px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Vegetarian */}
          <motion.div className="p-6 border-b border-border" variants={fadeUp}>
            <h3 className="font-serif text-lg text-primary mb-1">
              Vegetariskt – <span className="italic text-card-foreground/60">Välj en:</span>
            </h3>
            <div className="flex flex-wrap gap-3 mt-3">
              {iftarItems.vegetarian.map((item) => (
                <span
                  key={item}
                  className="bg-secondary text-foreground px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Sides */}
          <motion.div className="p-6 border-b border-border" variants={fadeUp}>
            <h3 className="font-serif text-lg text-primary mb-3">Tillbehör</h3>
            <p className="text-card-foreground/80 text-sm">
              {iftarItems.sides.join(" · ")}
            </p>
          </motion.div>

          {/* Dessert & Drinks */}
          <motion.div className="p-6" variants={fadeUp}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-serif text-lg text-primary mb-2">Dessert</h3>
                <p className="text-card-foreground/80 text-sm">
                  {iftarItems.dessert.join(" · ")}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-primary mb-2">Drycker</h3>
                <p className="text-card-foreground/80 text-sm">
                  {iftarItems.drinks.join(" · ")}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing & Info */}
        <motion.div
          className="mt-10 grid sm:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div
            className="bg-card text-card-foreground rounded-lg border border-border p-5 text-center shadow"
            variants={fadeUp}
          >
            <Clock size={24} className="mx-auto text-primary mb-2" />
            <p className="font-semibold text-sm">Iftar Tid</p>
            <p className="text-card-foreground/60 text-sm mt-1">16:30 – 20:00</p>
          </motion.div>
          <motion.div
            className="bg-card text-card-foreground rounded-lg border border-border p-5 text-center shadow"
            variants={fadeUp}
          >
            <MapPin size={24} className="mx-auto text-primary mb-2" />
            <p className="font-semibold text-sm">Plats</p>
            <p className="text-card-foreground/60 text-sm mt-1">Tenstagången 25, Tensta Centrum</p>
          </motion.div>
          <motion.div
            className="bg-primary text-primary-foreground rounded-lg p-5 text-center shadow"
            variants={fadeUp}
          >
            <p className="font-semibold text-lg">219 kr</p>
            <p className="text-primary-foreground/80 text-sm">per person</p>
            <p className="text-primary-foreground/60 text-xs mt-2">Barn (5–10 år): 99 kr</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Iftar;
