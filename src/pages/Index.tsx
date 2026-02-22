import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Flame, Award } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";
import exteriorImg from "@/assets/exterior.jpeg";
import interiorImg from "@/assets/interior.jpeg";
import karahi1Img from "@/assets/karahi1.jpeg";
import sizzlerImg from "@/assets/sizzler.jpeg";
import karahi2Img from "@/assets/karahi2.jpeg";
import chefExteriorImg from "@/assets/chef-exterior.jpeg";
import diningAreaImg from "@/assets/dining-area.jpeg";
import chapliKababImg from "@/assets/chapli-kabab.jpeg";
import chanaChaatImg from "@/assets/chana-chaat.jpeg";
import logoNew from "@/assets/logo-new.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Index = () => {
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
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <motion.div
          className="relative z-10 text-center px-4 max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.img
            src={logoNew}
            alt="Spice Villa"
            className="h-32 md:h-44 mx-auto mb-6 drop-shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
            variants={fadeUp}
          />
          <motion.p
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4"
            variants={fadeUp}
          >
            Indisk · Pakistansk · Bengalisk · Afghansk
          </motion.p>
          <motion.h1
            className="font-serif text-4xl md:text-6xl text-foreground mb-6 leading-tight"
            variants={fadeUp}
          >
            Autentiska Smaker från Sydasien
          </motion.h1>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeUp}>
            <a
              href="https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3 rounded font-semibold text-base hover:bg-primary/90 transition-colors"
            >
              Beställ via Uber Eats
            </a>
            <Link
              to="/meny"
              className="border border-primary text-primary px-8 py-3 rounded font-semibold text-base hover:bg-primary/10 transition-colors"
            >
              Se Menyn
            </Link>
          </motion.div>
          <motion.span
            className="inline-block mt-6 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
            variants={fadeUp}
          >
            🕌 100% Halal Certifierad
          </motion.span>
        </motion.div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div variants={fadeUp}>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Välkommen till <span className="text-primary">Spice Villa</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Spice Villa erbjuder en unik matupplevelse med autentiska recept från Indien, Pakistan,
                Bangladesh och Afghanistan. Våra kockar använder traditionella metoder och de finaste
                kryddorna för att skapa rätter som berör alla sinnen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vår mysiga restaurang med tegelstensinteriör bjuder in till en avkopplande middag med
                familj och vänner. All vår mat är 100% halal-certifierad.
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-primary">
                  <Flame size={20} />
                  <span className="text-sm font-medium text-foreground">Kolgrillat</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <UtensilsCrossed size={20} />
                  <span className="text-sm font-medium text-foreground">Hemlagat</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Award size={20} />
                  <span className="text-sm font-medium text-foreground">Halal</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-lg overflow-hidden">
              <img
                src={diningAreaImg}
                alt="Spice Villa matsal"
                className="w-full h-80 md:h-[400px] object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              Populära Rätter
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Smaka på våra mest älskade rätter, tillagade med kärlek och tradition.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { img: karahi1Img, name: "Lamb Karahi", desc: "Traditionell karahi med lamm, färska tomater och kryddor", price: "179 kr" },
              { img: chapliKababImg, name: "Chapli Kabab", desc: "Kryddiga köttfärsbiffar med färska örter och citron", price: "169 kr" },
              { img: chanaChaatImg, name: "Chana Chaat", desc: "Krispiga kikärtor med potatis, tomat, lök och kryddiga såser", price: "89 kr" },
              { img: sizzlerImg, name: "Mix Grill Sizzler", desc: "Kolgrillad mix av kyckling, lamm och seekh kabab på het platta", price: "249 kr" },
            ].map((dish) => (
              <motion.div
                key={dish.name}
                variants={fadeUp}
                className="bg-card rounded-lg overflow-hidden border border-border group hover:border-primary/40 transition-colors"
              >
                <div className="overflow-hidden h-56">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-lg text-foreground">{dish.name}</h3>
                    <span className="text-primary font-semibold text-sm">{dish.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Link
              to="/meny"
              className="inline-block border border-primary text-primary px-8 py-3 rounded font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              Se Hela Menyn
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Sugen? Beställ Nu!
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Beställ dina favoriter direkt via Uber Eats och njut hemma.
            </p>
            <a
              href="https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded font-semibold text-base hover:bg-primary/90 transition-colors"
            >
              Beställ via Uber Eats
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
