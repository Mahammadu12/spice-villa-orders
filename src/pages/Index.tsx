import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Moon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import exteriorImg from "@/assets/exterior.jpeg";
import nihariImg from "@/assets/nihari.jpg";
import chapliKababImg from "@/assets/chapli-kabab.jpeg";
import beefPayaImg from "@/assets/beef-paya.jpg";
import biryaniImg from "@/assets/biryani.jpg";
import iftarBg from "@/assets/iftar-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Index = () => {
  const { t } = useLanguage();

  const popularDishes = [
    { img: nihariImg, name: "Nihari", desc: t("Långkokt nötköttsgryta med djupa kryddor, serverad med färsk ingefära och koriander", "Slow-cooked beef stew with deep spices, served with fresh ginger and coriander"), price: "189 kr" },
    { img: chapliKababImg, name: "Chapli Kebab", desc: t("Kryddiga köttfärsbiffar med färska örter, tomat och granatäpple", "Spicy minced meat patties with fresh herbs, tomato and pomegranate"), price: "169 kr" },
    { img: beefPayaImg, name: "Beef Paya", desc: t("Traditionell långkokt kotlettgryta med rik buljong och aromatiska kryddor", "Traditional slow-cooked trotters stew with rich broth and aromatic spices"), price: "189 kr" },
    { img: biryaniImg, name: "Biryani", desc: t("Doftande basmatiris tillagat med saffran, hela kryddor och möra köttbitar", "Fragrant basmati rice cooked with saffron, whole spices and tender meat"), price: "179 kr" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={exteriorImg} alt="Spice Villa restaurang" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <motion.div
          className="relative z-10 text-center px-4 max-w-3xl"
          initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p className="text-primary font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4" variants={fadeUp}>
            {t("Indisk · Pakistansk · Bengalisk · Afghansk", "Indian · Pakistani · Bengali · Afghan")}
          </motion.p>
          <motion.h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight" variants={fadeUp}>
            {t("Autentiska Smaker från Sydasien", "Authentic Flavors from South Asia")}
          </motion.h1>
          <motion.p className="text-white/70 text-lg md:text-xl mb-8 max-w-xl mx-auto" variants={fadeUp}>
            {t("Upplev kulinarisk excellens med över 20 års erfarenhet av traditionellt kök", "Experience culinary excellence with over 20 years of traditional cooking")}
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp}>
            <Link to="/meny" className="bg-primary text-primary-foreground px-10 py-4 rounded font-semibold text-base hover:bg-primary/90 transition-colors">
              {t("Utforska Menyn", "Explore the Menu")}
            </Link>
            <Link to="/kontakt" className="border border-white/40 text-white px-10 py-4 rounded font-semibold text-base hover:bg-white/10 transition-colors backdrop-blur-sm">
              {t("Boka Bord", "Book a Table")}
            </Link>
          </motion.div>
          <motion.span className="inline-block mt-8 bg-primary/20 text-primary px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border border-primary/30" variants={fadeUp}>
            🕌 {t("100% Halal Certifierad", "100% Halal Certified")}
          </motion.span>
        </motion.div>
      </section>

      {/* Popular Dishes */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              {t("Signatur­rätter", "Signature Dishes")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              {t("Populära Rätter", "Popular Dishes")}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              {t("Smaka på våra mest älskade rätter, tillagade med kärlek och tradition.", "Taste our most beloved dishes, prepared with love and tradition.")}
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {popularDishes.map((dish) => (
              <motion.div key={dish.name} variants={fadeUp} className="bg-card text-card-foreground rounded-2xl overflow-hidden border border-border/50 group hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                <div className="overflow-hidden h-64">
                  <img src={dish.img} alt={dish.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl">{dish.name}</h3>
                    <span className="text-primary font-bold text-base">{dish.price}</span>
                  </div>
                  <p className="text-card-foreground/60 text-sm leading-relaxed">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Link to="/meny" className="inline-block border-2 border-primary text-primary px-10 py-4 rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors tracking-wide uppercase">
              {t("Se Hela Menyn", "See Full Menu")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Iftar CTA Banner */}
      {new Date() <= new Date("2026-03-31") && (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={iftarBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
            <motion.div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
              <motion.div variants={fadeUp} className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <Moon size={20} className="text-[hsl(43,80%,65%)]" />
                  <span className="text-[hsl(43,80%,65%)] text-sm font-semibold tracking-wider uppercase">Ramadan Special</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
                  {t("Iftar hos Spice Villa", "Iftar at Spice Villa")}
                </h2>
                <p className="text-white/60 max-w-md">
                  {t("Komplett iftarmåltid med förrätter, karahi, dessert och drycker. Från 219 kr/person.", "Complete iftar meal with starters, karahi, dessert and drinks. From 219 kr/person.")}
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link to="/iftar" className="inline-block bg-[hsl(43,80%,55%)] text-[hsl(220,50%,10%)] px-8 py-3 rounded-lg font-bold text-base hover:bg-[hsl(43,80%,60%)] transition-colors shadow-lg whitespace-nowrap">
                  {t("Se Iftar Menyn 🌙", "See Iftar Menu 🌙")}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Order CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              {t("Leverans", "Delivery")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              {t("Sugen? Beställ Nu!", "Hungry? Order Now!")}
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg">
              {t("Beställ dina favoriter direkt via Uber Eats, Foodora eller Qopla och njut hemma.", "Order your favorites via Uber Eats, Foodora or Qopla and enjoy at home.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-primary-foreground px-12 py-4 rounded-lg font-semibold text-base hover:bg-primary/90 transition-colors shadow-lg">
                {t("Beställ via Uber Eats", "Order via Uber Eats")}
              </a>
              <a href="https://www.foodora.se/restaurant/ljf2/spice-villa-ljf2" target="_blank" rel="noopener noreferrer" className="inline-block bg-[hsl(338,90%,46%)] text-white px-12 py-4 rounded-lg font-semibold text-base hover:bg-[hsl(338,90%,40%)] transition-colors shadow-lg">
                {t("Beställ via Foodora", "Order via Foodora")}
              </a>
              <a href="https://qopla.com/restaurant/spice-villa-spanga/qZkwaaE0oN/order" target="_blank" rel="noopener noreferrer" className="inline-block bg-[hsl(142,70%,35%)] text-white px-12 py-4 rounded-lg font-semibold text-base hover:bg-[hsl(142,70%,30%)] transition-colors shadow-lg">
                {t("Beställ via Qopla", "Order via Qopla")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
