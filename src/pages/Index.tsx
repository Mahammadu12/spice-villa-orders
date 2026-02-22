import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Moon } from "lucide-react";
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
  const popularDishes = [
    { img: nihariImg, name: "Nihari", desc: "Långkokt nötköttsgryta med djupa kryddor, serverad med färsk ingefära och koriander", price: "189 kr" },
    { img: chapliKababImg, name: "Chapli Kebab", desc: "Kryddiga köttfärsbiffar med färska örter, tomat och granatäpple", price: "169 kr" },
    { img: beefPayaImg, name: "Beef Paya", desc: "Traditionell långkokt kotlettgryta med rik buljong och aromatiska kryddor", price: "189 kr" },
    { img: biryaniImg, name: "Biryani", desc: "Doftande basmatiris tillagat med saffran, hela kryddor och möra köttbitar", price: "179 kr" },
  ];


  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={exteriorImg}
            alt="Spice Villa restaurang"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4"
            variants={fadeUp}
          >
            Indisk · Pakistansk · Bengalisk · Afghansk
          </motion.p>
          <motion.h1
            className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight"
            variants={fadeUp}
          >
            Autentiska Smaker från Sydasien
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg md:text-xl mb-8 max-w-xl mx-auto"
            variants={fadeUp}
          >
            Upplev kulinarisk excellens med över 20 års erfarenhet av traditionellt kök
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp}>
            <Link
              to="/meny"
              className="bg-primary text-primary-foreground px-10 py-4 rounded font-semibold text-base hover:bg-primary/90 transition-colors"
            >
              Utforska Menyn
            </Link>
            <Link
              to="/kontakt"
              className="border border-white/40 text-white px-10 py-4 rounded font-semibold text-base hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Boka Bord
            </Link>
          </motion.div>
          <motion.span
            className="inline-block mt-8 bg-primary/20 text-primary px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase border border-primary/30"
            variants={fadeUp}
          >
            🕌 100% Halal Certifierad
          </motion.span>
        </motion.div>
      </section>

      {/* Popular Dishes */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              Signatur­rätter
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              Populära Rätter
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              Smaka på våra mest älskade rätter, tillagade med kärlek och tradition.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {popularDishes.map((dish) => (
              <motion.div
                key={dish.name}
                variants={fadeUp}
                className="bg-card text-card-foreground rounded-2xl overflow-hidden border border-border/50 group hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Link
              to="/meny"
              className="inline-block border-2 border-primary text-primary px-10 py-4 rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors tracking-wide uppercase"
            >
              Se Hela Menyn
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Iftar CTA Banner - only during Ramadan */}
      {new Date() <= new Date("2026-03-31") && (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={iftarBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
            >
              <motion.div variants={fadeUp} className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <Moon size={20} className="text-[hsl(43,80%,65%)]" />
                  <span className="text-[hsl(43,80%,65%)] text-sm font-semibold tracking-wider uppercase">
                    Ramadan Special
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
                  Iftar hos Spice Villa
                </h2>
                <p className="text-white/60 max-w-md">
                  Komplett iftarmåltid med förrätter, karahi, dessert och drycker. Från 219 kr/person.
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Link
                  to="/iftar"
                  className="inline-block bg-[hsl(43,80%,55%)] text-[hsl(220,50%,10%)] px-8 py-3 rounded-lg font-bold text-base hover:bg-[hsl(43,80%,60%)] transition-colors shadow-lg whitespace-nowrap"
                >
                  Se Iftar Menyn 🌙
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Order CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              Leverans
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              Sugen? Beställ Nu!
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg">
              Beställ dina favoriter direkt via Uber Eats, Foodora eller Qopla och njut hemma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-12 py-4 rounded-lg font-semibold text-base hover:bg-primary/90 transition-colors shadow-lg"
              >
                Beställ via Uber Eats
              </a>
              <a
                href="https://www.foodora.se/restaurant/ljf2/spice-villa-ljf2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[hsl(338,90%,46%)] text-white px-12 py-4 rounded-lg font-semibold text-base hover:bg-[hsl(338,90%,40%)] transition-colors shadow-lg"
              >
                Beställ via Foodora
              </a>
              <a
                href="https://qopla.com/restaurant/spice-villa-spanga/qZkwaaE0oN/order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[hsl(142,70%,35%)] text-white px-12 py-4 rounded-lg font-semibold text-base hover:bg-[hsl(142,70%,30%)] transition-colors shadow-lg"
              >
                Beställ via Qopla
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
