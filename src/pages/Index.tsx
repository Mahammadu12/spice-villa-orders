import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Moon, MapPin, Phone, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logoNew from "@/assets/spice-villa-logo.png";
import menuCollageBg from "@/assets/menu-collage-bg.jpg";
import nihariImg from "@/assets/nihari.jpg";
import chapliKababImg from "@/assets/chapli-kabab.jpeg";
import beefPayaImg from "@/assets/beef-paya-new.png";
import biryaniImg from "@/assets/biryani.jpg";
import cateringHeroImg from "@/assets/catering-hero.jpg";
import iftarBg from "@/assets/iftar-bg.jpg";

const OPENING_HOURS: Record<number, {open: number;close: number;}> = {
  1: { open: 11, close: 22 },
  2: { open: 11, close: 22 },
  3: { open: 11, close: 22 },
  4: { open: 11, close: 22 },
  5: { open: 11, close: 22 },
  6: { open: 12, close: 22 },
  0: { open: 12, close: 21 }
};

const DAY_NAMES_SV = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
const DAY_NAMES_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getOpenStatus(lang: string) {
  // Always use Sweden's timezone regardless of user's location
  const now = new Date();
  const swedenTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Stockholm" }));
  const day = swedenTime.getDay();
  const hour = swedenTime.getHours();
  const todayHours = OPENING_HOURS[day];
  const isOpen = hour >= todayHours.open && hour < todayHours.close;
  const dayName = lang === "sv" ? DAY_NAMES_SV[day] : DAY_NAMES_EN[day];
  const timeStr = `${String(todayHours.open).padStart(2, "0")}:00 – ${String(todayHours.close).padStart(2, "0")}:00`;
  return { isOpen, dayName, timeStr };
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Index = () => {
  const { lang, t } = useLanguage();
  const [openStatus, setOpenStatus] = useState(() => getOpenStatus(lang));

  useEffect(() => {
    const interval = setInterval(() => setOpenStatus(getOpenStatus(lang)), 60000);
    return () => clearInterval(interval);
  }, [lang]);

  const popularDishes = [
  {
    img: nihariImg,
    name: "Nihari Lamm",
    desc: t(
      "Långkokt lammgryta med kryddor, lime, lök, chili och koriander",
      "Slow-cooked lamb stew with spices, lime, onion, chili and coriander"
    ),
    price: "170 kr"
  },
  {
    img: chapliKababImg,
    name: "Chapli Kebab",
    desc: t(
      "Kryddiga köttfärsbiffar med färska örter, tomat och granatäpple",
      "Spicy minced meat patties with fresh herbs, tomato and pomegranate"
    ),
    price: "149 kr"
  },
  {
    img: beefPayaImg,
    name: "Beef Paya",
    desc: t(
      "Traditionell långkokt kotlettgryta med rik buljong och aromatiska kryddor",
      "Traditional slow-cooked trotters stew with rich broth and aromatic spices"
    ),
    price: "169 kr"
  },
  {
    img: biryaniImg,
    name: "Lamm Biryani",
    desc: t(
      "Doftande basmatiris tillagat med saffran, hela kryddor och möra köttbitar",
      "Fragrant basmati rice cooked with saffron, whole spices and tender meat"
    ),
    price: "169 kr"
  }];


  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background food image */}
        <div className="absolute inset-0">
          <img
            src={menuCollageBg}
            alt="Spice Villa mat"
            className="w-full h-full object-cover"
            width={2000}
            height={1333}
            fetchPriority="high" />


          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* Centered content */}
        <motion.div
          className="relative z-10 text-center px-4 items-center justify-start flex flex-col gap-0"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.18 } } }}>

          {/* Circular logo with fade-in popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="-mb-4 md:-mb-6">

            <div className="overflow-hidden h-44 md:h-56 lg:h-60 flex items-center justify-center">
              <img
                src={logoNew}
                alt="Spice Villa"
                className="h-[20rem] md:h-[26rem] lg:h-[30rem] mx-auto mix-blend-screen drop-shadow-2xl object-contain scale-[1.6]"
                width={384}
                height={384}
                fetchPriority="high" />
            </div>

          </motion.div>

          {/* Big navigation links */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-6 sm:gap-16 mb-12">
            <Link to="/meny" className="group relative">
              <span className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-[0.1em] uppercase transition-colors duration-300 group-hover:text-primary">
                {t("Meny", "Menu")}
              </span>
              <span className="block h-0.5 w-full bg-white/40 mt-2 group-hover:bg-primary transition-colors duration-300" />
            </Link>
            <Link to="/lunch" className="group relative">
              <span className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-[0.1em] uppercase transition-colors duration-300 group-hover:text-primary">
                Lunch
              </span>
              <span className="block h-0.5 w-full bg-white/40 mt-2 group-hover:bg-primary transition-colors duration-300" />
            </Link>
          </motion.div>

          {/* Open status badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 text-white/80 px-5 py-2 rounded-full text-sm">
              <span
                className={`w-2 h-2 rounded-full ${openStatus.isOpen ? "bg-green-500" : "bg-red-500"} animate-pulse`} />

              {openStatus.isOpen ?
              t(
                `Öppet Nu · ${openStatus.dayName} ${openStatus.timeStr}`,
                `Open Now · ${openStatus.dayName} ${openStatus.timeStr}`
              ) :
              t(
                `Stängt · ${openStatus.dayName} ${openStatus.timeStr}`,
                `Closed · ${openStatus.dayName} ${openStatus.timeStr}`
              )}
            </span>
          </motion.div>

          {/* Address & phone */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 text-white/50 text-sm tracking-wider uppercase">

            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" />
              Tenstagången 25, 163 64 Spånga
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={14} className="text-primary" />
              <a href="tel:+46764222770" className="hover:text-primary transition-colors">
                +46 76-4222770
              </a>
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll down arrow */}
        <motion.button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-primary transition-colors"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          aria-label="Scroll down">

          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </section>

      {/* ── Popular Dishes ── */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}>

            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              {t("Signaturrätter", "Signature Dishes")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              {t("Populära Rätter", "Popular Dishes")}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              {t(
                "Smaka på våra mest älskade rätter, tillagade med kärlek och tradition.",
                "Taste our most beloved dishes, prepared with love and tradition."
              )}
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>

            {popularDishes.map((dish) =>
            <motion.div
              key={dish.name}
              variants={fadeUp}
              className="bg-card text-card-foreground rounded-2xl overflow-hidden border border-border/50 group hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">

                <div className="overflow-hidden h-64">
                  <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={600}
                  height={512}
                  loading="lazy"
                  decoding="async" />

                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-xl">{dish.name}</h3>
                    <span className="text-primary font-bold text-base">{dish.price}</span>
                  </div>
                  <p className="text-card-foreground/60 text-sm leading-relaxed">{dish.desc}</p>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}>

            <Link
              to="/meny"
              className="inline-block border-2 border-primary text-primary px-10 py-4 rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors tracking-wide uppercase">

              {t("Se Hela Menyn", "See Full Menu")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Iftar CTA Banner ── */}
      {new Date() <= new Date("2026-03-31") &&
      <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
            src={iftarBg}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async" />

            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
            <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>

              <motion.div variants={fadeUp} className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <Moon size={20} className="text-[hsl(43,80%,65%)]" />
                  <span className="text-[hsl(43,80%,65%)] text-sm font-semibold tracking-wider uppercase">
                    Ramadan Special
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
                  {t("Iftar hos Spice Villa", "Iftar at Spice Villa")}
                </h2>
                <p className="text-white/60 max-w-md">
                  {t(
                  "Komplett iftarmåltid med förrätter, karahi, dessert och drycker. Från 219 kr/person.",
                  "Complete iftar meal with starters, karahi, dessert and drinks. From 219 kr/person."
                )}
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link
                to="/iftar"
                className="inline-block bg-[hsl(43,80%,55%)] text-[hsl(220,50%,10%)] px-8 py-3 rounded-lg font-bold text-base hover:bg-[hsl(43,80%,60%)] transition-colors shadow-lg whitespace-nowrap">

                  {t("Se Iftar Menyn 🌙", "See Iftar Menu 🌙")}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      }

      {/* ── Catering ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cateringHeroImg}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async" />

          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>

            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-5xl text-white mb-4">
              Catering
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
              {t(
                "Vi erbjuder catering för olika evenemang bröllop, företagsfester, familjesammankomster och mer. Tveka inte att kontakta oss för meny samt prisförslag.",
                "We offer catering for various events weddings, corporate parties, family gatherings and more. Don't hesitate to contact us for menu and pricing."
              )}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/catering"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded font-semibold hover:bg-primary/90 transition-colors">

                {t("Läs Mer", "Learn More")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>);

};

export default Index;