import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import iftarBg from "@/assets/iftar-bg.jpg";
import iftarOpeningImg from "@/assets/iftar-opening.png";
import iftarStarterImg from "@/assets/iftar-starter.png";
import iftarKarahiImg from "@/assets/iftar-karahi.png";
import iftarVegetarianImg from "@/assets/iftar-vegetarian.png";
import iftarSidesImg from "@/assets/iftar-sides.png";
import gulabJamunImg from "@/assets/gulab-jamun.jpg";
import zardaImg from "@/assets/zarda.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
    <span className="text-primary/60 text-sm">✦</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
  </div>
);

const Iftar = () => {
  const { t } = useLanguage();

  const iftarCourses = [
    { title: t("Iftar Öppning", "Iftar Opening"), subtitle: t("Bryt fastan med", "Break your fast with"), items: ["Khajoor (Dates)", "Rooh Afza (Drink)"], image: iftarOpeningImg },
    { title: t("Förrätter", "Starters"), items: ["Aloo Chana Chaat", "Dahi Bhare", "Veg Samosa", "Mix Veg Pakora"], image: iftarStarterImg },
    { title: "Karahi", subtitle: t("Välj en", "Choose one"), items: ["Lamb", "Chicken", "Beef"], image: iftarKarahiImg },
    { title: t("Vegetariskt", "Vegetarian"), subtitle: t("Välj en", "Choose one"), items: ["Aloo Palak", "Dal", "Lahori Chana"], image: iftarVegetarianImg },
    { title: t("Tillbehör", "Sides"), items: ["Zeera Rice", "Naan Bread", "Salad", "Mint Raita", "Garlic Sauce"], image: iftarSidesImg },
    { title: t("Dessert & Drycker", "Dessert & Drinks"), items: ["Zarda", "Gulab Jamun", "Chai (Tea)", "Coffee"], image: zardaImg, secondImage: gulabJamunImg },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Layered background */}
      <div className="fixed inset-0 -z-10">
        <img src={iftarBg} alt="" className="w-full h-full object-cover opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,72%,55%,0.04),transparent_60%)]" />
      </div>

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div className="relative z-10 text-center px-4 max-w-2xl" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p className="text-primary/60 text-[10px] font-medium tracking-[0.5em] uppercase mb-4" variants={fadeUp}>
            🌙 Ramadan Mubarak
          </motion.p>
          <motion.h1 className="font-serif text-5xl md:text-7xl text-white mb-5 leading-tight tracking-tight" variants={fadeUp}>
            {t("Iftar Meny", "Iftar Menu")}
          </motion.h1>
          <Ornament className="mb-5" />
          <motion.p className="text-white/40 text-base mb-10 max-w-md mx-auto italic font-light" variants={fadeUp}>
            {t("Njut av en komplett iftarmåltid med familj och vänner hos Spice Villa.", "Enjoy a complete iftar meal with family and friends at Spice Villa.")}
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 justify-center mb-10" variants={fadeUp}>
            <div className="bg-primary/10 backdrop-blur border border-primary/20 rounded-xl px-7 py-4 text-center">
              <p className="text-primary font-serif text-3xl">219 kr</p>
              <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-1">{t("per person", "per person")}</p>
            </div>
            <div className="bg-white/[0.03] backdrop-blur border border-white/[0.08] rounded-xl px-7 py-4 text-center">
              <p className="text-white font-serif text-3xl">99 kr</p>
              <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-1">{t("barn (5–10 år)", "children (5–10 yrs)")}</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <a href="tel:0764222770" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
              <Phone size={18} />
              {t("Ring & Boka: 0764222770", "Call & Book: 0764222770")}
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Booking notice */}
      <section className="bg-white/[0.02] border-y border-white/[0.06] py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Star size={14} className="text-primary/60" />
            <span className="text-primary/60 font-medium text-[10px] uppercase tracking-[0.3em]">
              {t("Förbokning krävs", "Pre-booking required")}
            </span>
            <Star size={14} className="text-primary/60" />
            <span className="text-white/20 text-sm">|</span>
            <span className="text-white/40 text-xs font-light">
              {t("Bokning måste göras före kl. 14:00 (samma dag)", "Booking must be made before 2:00 PM (same day)")}
            </span>
            <span className="text-white/20 text-sm">|</span>
            <div className="flex items-center gap-1.5 text-white/40 text-xs font-light">
              <Clock size={13} />
              16:30 – 20:00
            </div>
          </div>
        </div>
      </section>

      {/* Menu courses */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary/50 text-[10px] font-medium tracking-[0.4em] uppercase mb-3">
              {t("Meny", "Menu")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              {t("Vad som ingår", "What's Included")}
            </h2>
            <Ornament className="mb-4" />
            <p className="text-white/35 max-w-md mx-auto font-light italic">
              {t("En komplett iftarmåltid med förrätter, huvudrätt, tillbehör, dessert och drycker.", "A complete iftar meal with starters, main course, sides, dessert and drinks.")}
            </p>
          </motion.div>

          <div className="space-y-8">
            {iftarCourses.map((course, idx) => (
              <motion.div key={course.title} className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-5 items-stretch`} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                <div className="md:w-2/5 flex gap-3">
                  <div className={`${course.secondImage ? "w-1/2" : "w-full"} rounded-xl overflow-hidden ring-1 ring-white/[0.06]`}>
                    <img src={course.image} alt={course.title} className="w-full h-52 md:h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  {course.secondImage && (
                    <div className="w-1/2 rounded-xl overflow-hidden ring-1 ring-white/[0.06]">
                      <img src={course.secondImage} alt={`${course.title} 2`} className="w-full h-52 md:h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </div>
                  )}
                </div>
                <div className="md:w-3/5 bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-xl p-7 md:p-9 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-primary/10 text-primary/70 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-[0.2em]">{idx + 1}</span>
                    <h3 className="font-serif text-2xl text-white">{course.title}</h3>
                  </div>
                  {course.subtitle && <p className="text-white/30 text-sm italic mb-3 font-light">{course.subtitle}</p>}
                  <div className="flex flex-wrap gap-2">
                    {course.items.map((item) => (
                      <span key={item} className="bg-white/[0.03] border border-white/[0.06] text-white/60 px-4 py-2 rounded-lg text-sm font-light">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom info */}
      <section className="relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 py-20 text-center max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <Ornament className="mb-6" />
            <motion.div className="flex items-center justify-center gap-2 mb-4" variants={fadeUp}>
              <MapPin size={18} className="text-primary/60" />
              <span className="text-white/50 text-sm font-light">Tenstagången 25, Tensta Centrum</span>
            </motion.div>
            <motion.h2 className="font-serif text-3xl text-white mb-8" variants={fadeUp}>
              {t("Boka din Iftar idag", "Book your Iftar today")}
            </motion.h2>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp}>
              <a href="tel:0764222770" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                <Phone size={18} />
                {t("Ring: 0764222770", "Call: 0764222770")}
              </a>
              <Link to="/meny" className="inline-flex items-center justify-center border border-primary/30 text-primary/80 px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                {t("Se hela menyn", "See full menu")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Iftar;
