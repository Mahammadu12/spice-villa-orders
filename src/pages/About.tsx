import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChefHat, Flame, Star, UtensilsCrossed, Award, MapPin, Clock, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import chefExteriorImg from "@/assets/chef-exterior.jpeg";
import diningAreaImg from "@/assets/dining-area.jpeg";
import kitchenImg from "@/assets/kitchen.jpeg";
import entranceImg from "@/assets/entrance.jpeg";
import chefsImg from "@/assets/chefs.jpeg";
import teamImg from "@/assets/team.jpeg";
import fruitChaatImg from "@/assets/fruit-chaat.jpeg";
import saladSaucesImg from "@/assets/salad-sauces.jpeg";
import storefrontImg from "@/assets/storefront.jpeg";
import interiorImg from "@/assets/interior.jpeg";
import nihariImg from "@/assets/nihari.jpg";
import chapliKababImg from "@/assets/chapli-kabab.jpeg";
import beefPayaImg from "@/assets/beef-paya-new.png";
import biryaniImg from "@/assets/biryani.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const About = () => {
  const { t } = useLanguage();

  const galleryPhotos = [
    { src: chefExteriorImg, alt: t("Vår kock framför Spice Villa", "Our chef in front of Spice Villa"), span: "col-span-2 row-span-2" },
    { src: diningAreaImg, alt: t("Vår mysiga matsal", "Our cozy dining area"), span: "col-span-2" },
    { src: fruitChaatImg, alt: t("Färsk fruktsallad", "Fresh fruit salad"), span: "" },
    { src: saladSaucesImg, alt: t("Sallad med hemgjorda såser", "Salad with homemade sauces"), span: "" },
    { src: kitchenImg, alt: t("Vårt öppna kök", "Our open kitchen"), span: "col-span-2" },
    { src: entranceImg, alt: t("Välkommen in", "Welcome in"), span: "" },
    { src: chefsImg, alt: t("Våra kockar", "Our chefs"), span: "" },
    { src: teamImg, alt: t("Spice Villa-teamet", "The Spice Villa team"), span: "col-span-2" },
    { src: storefrontImg, alt: t("Spice Villa skyltfönster", "Spice Villa storefront"), span: "col-span-2" },
  ];

  const signatureDishes = [
    { img: nihariImg, name: "Nihari", desc: t("Vår mest eftertraktade rätt Lamm som långsamt tillagas i timmar med hemliga kryddblandningar.", "Our most sought-after dish Lamb slowly cooked for hours with secret spice blends.") },
    { img: chapliKababImg, name: "Chapli Kebab", desc: t("Kryddiga köttfärsbiffar med färska örter, tomat och granatäpple — en afghansk klassiker.", "Spicy minced meat patties with fresh herbs, tomato and pomegranate — an Afghan classic.") },
    { img: beefPayaImg, name: "Beef Paya", desc: t("Traditionell kotlettgryta med rik buljong och aromatiska kryddor, en helgfavorit.", "Traditional trotters stew with rich broth and aromatic spices, a weekend favorite.") },
    { img: biryaniImg, name: "Biryani", desc: t("Doftande basmatiris tillagat med saffran, hela kryddor och möra köttbitar i lager.", "Fragrant basmati rice cooked with saffron, whole spices and tender meat in layers.") },
  ];

  const features = [
    { icon: <Flame size={26} />, title: t("Kolgrillat", "Charcoal Grilled"), desc: t("Vi grillar över kol och i tandoori-ugn för autentisk smak.", "We grill over charcoal and in tandoori oven for authentic flavor.") },
    { icon: <UtensilsCrossed size={26} />, title: t("Hemlagat", "Homemade"), desc: t("Alla rätter tillagas från grunden med färska råvaror varje dag.", "All dishes are prepared from scratch with fresh ingredients every day.") },
    { icon: <Award size={26} />, title: "100% Halal", desc: t("All vår mat är halal-certifierad och noggrant utvald.", "All our food is halal-certified and carefully selected.") },
    { icon: <ChefHat size={26} />, title: t("Erfarna Kockar", "Experienced Chefs"), desc: t("Vårt köksteam har decennier av erfarenhet från hela Sydasien.", "Our kitchen team has decades of experience from across South Asia.") },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={interiorImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-background" />
        </div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
              {t("Vår Historia", "Our Story")}
            </span>
            <div className="h-px w-12 bg-primary" />
          </motion.div>
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight leading-[0.95]"
            variants={fadeUp}
          >
            {t("Om", "About")} <br />
            <span className="text-primary">Spice Villa</span>
          </motion.h1>
          <motion.p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto font-light" variants={fadeUp}>
            {t("Över 20 års passion för autentisk sydasiatisk mat", "Over 20 years of passion for authentic South Asian food")}
          </motion.p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.04),transparent_60%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div variants={fadeUp}>
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-4 block">
                {t("Sedan 2004", "Since 2004")}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">
                {t("Välkommen till", "Welcome to")} <span className="text-primary">Spice Villa</span>
              </h2>
              <div className="space-y-5 mb-10">
                <p className="text-white/85 leading-relaxed text-base">
                  {t("Spice Villa erbjuder en unik matupplevelse med autentiska recept från Indien, Pakistan, Bangladesh och Afghanistan. Vår huvudkock har över 20 års erfarenhet inom branschen och brinner för att servera de mest autentiska smakerna.", "Spice Villa offers a unique dining experience with authentic recipes from India, Pakistan, Bangladesh and Afghanistan. Our head chef has over 20 years of experience and is passionate about serving the most authentic flavors.")}
                </p>
                <p className="text-white/85 leading-relaxed">
                  {t("Varje rätt tillagas med noggrant utvalda kryddor som importeras direkt, och vi använder traditionella matlagningsmetoder som kolgrillning och tandoori-ugn för att ge varje maträtt sin karakteristiska smak.", "Every dish is prepared with carefully selected spices imported directly, and we use traditional cooking methods like charcoal grilling and tandoori oven to give each dish its characteristic flavor.")}
                </p>
                <p className="text-white/85 leading-relaxed">
                  {t("Vi är kända för våra signaturrätter som Nihari, Chapli Kebab, Beef Paya och Biryani alla tillagade med traditionella metoder, färska kryddor och kärlek. Vår mysiga restaurang med tegelstensinteriör bjuder in till en avkopplande middag med familj och vänner.", "We are known for our signature dishes like Nihari, Chapli Kebab, Beef Paya and Biryani all prepared with traditional methods, fresh spices and love. Our cozy restaurant with brick interior invites you to a relaxing dinner with family and friends.")}
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <ChefHat className="text-primary" size={20} />, val: "20+", label: t("Års Erfarenhet", "Years Experience") },
                  { icon: <Flame className="text-primary" size={20} />, val: "100%", label: t("Halal Certifierad", "Halal Certified") },
                  { icon: <Star className="text-primary" size={20} />, val: "4.5", label: t("Betyg", "Rating") },
                ].map((s) => (
                  <div key={s.label} className="text-center p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-primary/20 transition-colors duration-300">
                    <div className="flex justify-center mb-2">{s.icon}</div>
                    <span className="text-3xl font-serif text-white block mb-1">{s.val}</span>
                    <span className="text-white/60 text-xs uppercase tracking-wider">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={scaleIn} className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                alt="Spice Villa matsal"
                className="relative w-full h-[550px] object-cover rounded-2xl shadow-2xl ring-1 ring-white/10"
                src="/lovable-uploads/326f0c58-955f-4830-8b5c-9b231157081f.jpg"
              />
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-br from-primary to-[hsl(35,72%,45%)] text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:flex flex-col items-center">
                <span className="font-serif text-4xl block leading-none">20+</span>
                <span className="text-sm font-medium mt-1">{t("År av Passion", "Years of Passion")}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-white/[0.02] to-background" />
        <div className="container mx-auto px-4 relative">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">
              {t("Det Vi Gör Bäst", "What We Do Best")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-5">
              {t("Våra Signaturrätter", "Our Signature Dishes")}
            </h2>
            <p className="text-white/70 max-w-xl mx-auto text-base">
              {t("Rätter som har gjort oss kända varje en berättelse om tradition och hantverksskicklighet.", "Dishes that made us famous each a story of tradition and craftsmanship.")}
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {signatureDishes.map((dish) => (
              <motion.div
                key={dish.name}
                variants={fadeUp}
                className="group relative flex gap-5 rounded-2xl overflow-hidden border border-white/10 p-5 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:border-primary/25 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img src={dish.img} alt={dish.name} className="relative w-28 h-28 object-cover rounded-xl flex-shrink-0 group-hover:scale-105 transition-transform duration-500" />
                <div className="relative">
                  <h3 className="font-serif text-xl text-white mb-2 group-hover:text-primary transition-colors duration-300">{dish.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">
              {t("Varför Välja Oss", "Why Choose Us")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-5">
              {t("Det Som Skiljer Oss", "What Sets Us Apart")}
            </h2>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {features.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group relative text-center p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg text-white mb-3">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-white/[0.02] to-background" />
        <div className="container mx-auto px-4 relative">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase mb-3 block">
              {t("Bildgalleri", "Photo Gallery")}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
              {t("Vår Restaurang", "Our Restaurant")}
            </h2>
            <p className="text-white/70 max-w-lg mx-auto">
              {t("En inblick i vår matsal, vårt kök och vårt passionerade team.", "A glimpse into our dining area, kitchen and passionate team.")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {galleryPhotos.map((photo, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className={`group overflow-hidden rounded-2xl ring-1 ring-white/10 ${photo.span}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out min-h-[200px]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06),transparent_60%)]" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">✦</span>
              <div className="h-px w-12 bg-primary" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-5xl text-white mb-5">
              {t("Kom och Besök Oss", "Come Visit Us")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 mb-10 max-w-md mx-auto text-lg">
              {t("Vi ser fram emot att välkomna dig till Spice Villa.", "We look forward to welcoming you to Spice Villa.")}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontakt"
                className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold text-base hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                {t("Boka Bord", "Book a Table")}
              </Link>
              <Link
                to="/meny"
                className="inline-block border border-primary/40 text-primary px-10 py-4 rounded-xl font-semibold text-base hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
              >
                {t("Se Menyn", "See the Menu")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
