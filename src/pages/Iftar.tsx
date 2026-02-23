import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import iftarBg from "@/assets/iftar-bg.jpg";
import roohAfzaDatesImg from "@/assets/rooh-afza-dates.jpg";
import iftarStarterImg from "@/assets/iftar-starter.png";
import iftarKarahiImg from "@/assets/iftar-karahi.png";
import iftarVegetarianImg from "@/assets/iftar-vegetarian.png";
import iftarSidesImg from "@/assets/iftar-sides.png";
import gulabJamunImg from "@/assets/gulab-jamun.jpg";
import zardaImg from "@/assets/zarda.jpg";
import saladSaucesImg from "@/assets/salad-sauces.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Iftar = () => {
  const { t } = useLanguage();

  const iftarCourses = [
    { title: t("Iftar Öppning", "Iftar Opening"), subtitle: t("Bryt fastan med", "Break your fast with"), items: ["Khajoor (Dates)", "Rooh Afza (Drink)"], image: roohAfzaDatesImg },
    { title: t("Förrätter", "Starters"), items: ["Aloo Chana Chaat", "Dahi Bhare", "Veg Samosa", "Mix Veg Pakora"], image: chanaChaatImg, secondImage: dahiBhareImg },
    { title: "Karahi", subtitle: t("Välj en", "Choose one"), items: ["Lamb", "Chicken", "Beef"], image: karahi1Img },
    { title: t("Vegetariskt", "Vegetarian"), subtitle: t("Välj en", "Choose one"), items: ["Aloo Palak", "Dal", "Lahori Chana"], image: karahi2Img },
    { title: t("Tillbehör", "Sides"), items: ["Zeera Rice", "Naan Bread", "Salad", "Mint Raita", "Garlic Sauce"], image: naanRiceImg, secondImage: saladSaucesImg },
    { title: t("Dessert & Drycker", "Dessert & Drinks"), items: ["Zarda", "Gulab Jamun", "Chai (Tea)", "Coffee"], image: zardaImg, secondImage: gulabJamunImg },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Full-page background */}
      <div className="fixed inset-0 -z-10">
        <img src={iftarBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div className="relative z-10 text-center px-4 max-w-2xl" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p className="text-[hsl(43,80%,65%)] font-medium tracking-[0.3em] uppercase text-sm mb-3" variants={fadeUp}>
            🌙 Ramadan Mubarak
          </motion.p>
          <motion.h1 className="font-serif text-5xl md:text-7xl text-white mb-4 leading-tight" variants={fadeUp}>
            {t("Iftar Meny", "Iftar Menu")}
          </motion.h1>
          <motion.p className="text-white/70 text-lg mb-8 max-w-md mx-auto" variants={fadeUp}>
            {t("Njut av en komplett iftarmåltid med familj och vänner hos Spice Villa.", "Enjoy a complete iftar meal with family and friends at Spice Villa.")}
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 justify-center mb-8" variants={fadeUp}>
            <div className="bg-[hsl(43,80%,55%)]/20 backdrop-blur border border-[hsl(43,80%,55%)]/40 rounded-lg px-6 py-3 text-center">
              <p className="text-[hsl(43,80%,65%)] font-bold text-2xl">219 kr</p>
              <p className="text-white/60 text-xs">{t("per person", "per person")}</p>
            </div>
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg px-6 py-3 text-center">
              <p className="text-white font-bold text-2xl">99 kr</p>
              <p className="text-white/60 text-xs">{t("barn (5–10 år)", "children (5–10 yrs)")}</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <a href="tel:0764222770" className="inline-flex items-center gap-2 bg-[hsl(43,80%,55%)] text-[hsl(220,50%,10%)] px-8 py-3 rounded-lg font-bold text-base hover:bg-[hsl(43,80%,60%)] transition-colors shadow-lg">
              <Phone size={18} />
              {t("Ring & Boka: 0764222770", "Call & Book: 0764222770")}
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Booking notice */}
      <section className="bg-black/40 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Star size={16} className="text-[hsl(43,80%,55%)]" />
            <span className="text-[hsl(43,80%,65%)] font-semibold text-sm uppercase tracking-wider">
              {t("Förbokning krävs", "Pre-booking required")}
            </span>
            <Star size={16} className="text-[hsl(43,80%,55%)]" />
            <span className="text-white/50 text-sm">|</span>
            <span className="text-white/70 text-sm">
              {t("Bokning måste göras före kl. 14:00 (samma dag)", "Booking must be made before 2:00 PM (same day)")}
            </span>
            <span className="text-white/50 text-sm">|</span>
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Clock size={14} />
              16:30 – 20:00
            </div>
          </div>
        </div>
      </section>

      {/* Menu courses */}
      <section className="bg-black/30 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
              {t("Vad som ingår", "What's Included")}
            </h2>
            <p className="text-white/50 max-w-md mx-auto">
              {t("En komplett iftarmåltid med förrätter, huvudrätt, tillbehör, dessert och drycker.", "A complete iftar meal with starters, main course, sides, dessert and drinks.")}
            </p>
          </motion.div>

          <div className="space-y-10">
            {iftarCourses.map((course, idx) => (
              <motion.div key={course.title} className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-6 items-stretch`} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                <div className="md:w-2/5 flex gap-3">
                  <div className={`${course.secondImage ? "w-1/2" : "w-full"} rounded-xl overflow-hidden`}>
                    <img src={course.image} alt={course.title} className="w-full h-52 md:h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  {course.secondImage && (
                    <div className="w-1/2 rounded-xl overflow-hidden">
                      <img src={course.secondImage} alt={`${course.title} 2`} className="w-full h-52 md:h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                  )}
                </div>
                <div className="md:w-3/5 bg-black/40 backdrop-blur-sm border border-[hsl(43,80%,55%)]/15 rounded-xl p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[hsl(43,80%,55%)]/15 text-[hsl(43,80%,65%)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{idx + 1}</span>
                    <h3 className="font-serif text-2xl text-white">{course.title}</h3>
                  </div>
                  {course.subtitle && <p className="text-[hsl(43,80%,65%)]/70 text-sm italic mb-3">{course.subtitle}</p>}
                  <div className="flex flex-wrap gap-2">
                    {course.items.map((item) => (
                      <span key={item} className="bg-white/5 border border-white/10 text-white/80 px-4 py-2 rounded-lg text-sm">{item}</span>
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
        <div className="relative z-10 container mx-auto px-4 py-16 text-center max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div className="flex items-center justify-center gap-2 mb-4" variants={fadeUp}>
              <MapPin size={20} className="text-[hsl(43,80%,55%)]" />
              <span className="text-white/80 text-sm">Tenstagången 25, Tensta Centrum</span>
            </motion.div>
            <motion.h2 className="font-serif text-3xl text-white mb-6" variants={fadeUp}>
              {t("Boka din Iftar idag", "Book your Iftar today")}
            </motion.h2>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp}>
              <a href="tel:0764222770" className="inline-flex items-center justify-center gap-2 bg-[hsl(43,80%,55%)] text-[hsl(220,50%,10%)] px-8 py-3 rounded-lg font-bold hover:bg-[hsl(43,80%,60%)] transition-colors">
                <Phone size={18} />
                {t("Ring: 0764222770", "Call: 0764222770")}
              </a>
              <Link to="/meny" className="inline-flex items-center justify-center border border-[hsl(43,80%,55%)]/50 text-[hsl(43,80%,65%)] px-8 py-3 rounded-lg font-semibold hover:bg-[hsl(43,80%,55%)]/10 transition-colors">
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
