import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChefHat, Flame, Star, UtensilsCrossed, Award } from "lucide-react";
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
    <span className="text-primary/80 text-sm">✦</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
  </div>
);

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

  return (
    <div className="min-h-screen">
      {/* Fixed full-page background */}
      <div className="fixed inset-0 -z-10">
        <img src={interiorImg} alt="" className="w-full h-full object-cover opacity-35" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,72%,55%,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(43,72%,55%,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,72%,55%,0.03),transparent_60%)]" />
      </div>

      {/* Hero Banner */}
      <section className="relative h-[55vh] md:h-[65vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img src={interiorImg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[hsl(0,0%,4%)]" />
        </div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span className="text-primary/80 text-[10px] font-medium tracking-[0.5em] uppercase mb-5 block" variants={fadeUp}>
            {t("Vår Historia", "Our Story")}
          </motion.span>
          <motion.h1 className="font-serif text-5xl md:text-7xl text-white mb-5 tracking-tight leading-none" variants={fadeUp}>
            {t("Om Spice Villa", "About Spice Villa")}
          </motion.h1>
          <Ornament className="mb-5" />
          <motion.p className="text-white/75 text-base max-w-xl mx-auto italic font-light" variants={fadeUp}>
            {t("Över 20 års passion för autentisk sydasiatisk mat", "Over 20 years of passion for authentic South Asian food")}
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div variants={fadeUp}>
              <p className="text-primary/70 text-[10px] font-medium tracking-[0.4em] uppercase mb-4">
                {t("Sedan 2004", "Since 2004")}
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
                {t("Välkommen till", "Welcome to")} <span className="text-primary">Spice Villa</span>
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground leading-relaxed text-base font-light">
                  {t("Spice Villa erbjuder en unik matupplevelse med autentiska recept från Indien, Pakistan, Bangladesh och Afghanistan. Vår huvudkock har över 20 års erfarenhet inom branschen och brinner för att servera de mest autentiska smakerna.", "Spice Villa offers a unique dining experience with authentic recipes from India, Pakistan, Bangladesh and Afghanistan. Our head chef has over 20 years of experience and is passionate about serving the most authentic flavors.")}
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {t("Varje rätt tillagas med noggrant utvalda kryddor som importeras direkt, och vi använder traditionella matlagningsmetoder som kolgrillning och tandoori-ugn för att ge varje maträtt sin karakteristiska smak.", "Every dish is prepared with carefully selected spices imported directly, and we use traditional cooking methods like charcoal grilling and tandoori oven to give each dish its characteristic flavor.")}
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  {t("Vi är kända för våra signaturrätter som Nihari, Chapli Kebab, Beef Paya och Biryani alla tillagade med traditionella metoder, färska kryddor och kärlek. Vår mysiga restaurang med tegelstensinteriör bjuder in till en avkopplande middag med familj och vänner.", "We are known for our signature dishes like Nihari, Chapli Kebab, Beef Paya and Biryani all prepared with traditional methods, fresh spices and love. Our cozy restaurant with brick interior invites you to a relaxing dinner with family and friends.")}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <ChefHat className="mx-auto mb-2 text-primary" size={22} />, val: "20+", label: t("Års Erfarenhet", "Years Experience") },
                  { icon: <Flame className="mx-auto mb-2 text-primary" size={22} />, val: "100%", label: t("Halal Certifierad", "Halal Certified") },
                  { icon: <Star className="mx-auto mb-2 text-primary" size={22} />, val: "4.5", label: t("Betyg", "Rating") },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    {s.icon}
                    <span className="text-2xl font-serif text-foreground block">{s.val}</span>
                    <span className="text-muted-foreground text-xs">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="relative">
              <img
                alt="Spice Villa matsal"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl ring-1 ring-white/[0.06]"
                src="/lovable-uploads/326f0c58-955f-4830-8b5c-9b231157081f.jpg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
                <span className="font-serif text-3xl block">20+</span>
                <span className="text-sm font-medium">{t("År av Passion", "Years of Passion")}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-28 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary/70 text-[10px] font-medium tracking-[0.4em] uppercase mb-3">
              {t("Det Vi Gör Bäst", "What We Do Best")}
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              {t("Våra Signaturrätter", "Our Signature Dishes")}
            </h2>
            <Ornament className="mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto text-base font-light italic">
              {t("Rätter som har gjort oss kända varje en berättelse om tradition och hantverksskicklighet.", "Dishes that made us famous each a story of tradition and craftsmanship.")}
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {signatureDishes.map((dish) => (
              <motion.div
                key={dish.name}
                variants={fadeUp}
                className="flex gap-5 bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.06] p-5 group hover:border-primary/30 transition-all duration-300"
              >
                <img src={dish.img} alt={dish.name} className="w-28 h-28 object-cover rounded-xl flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{dish.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              {t("Det Som Skiljer Oss", "What Sets Us Apart")}
            </h2>
            <Ornament />
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { icon: <Flame size={28} />, title: t("Kolgrillat", "Charcoal Grilled"), desc: t("Vi grillar över kol och i tandoori-ugn för autentisk smak.", "We grill over charcoal and in tandoori oven for authentic flavor.") },
              { icon: <UtensilsCrossed size={28} />, title: t("Hemlagat", "Homemade"), desc: t("Alla rätter tillagas från grunden med färska råvaror varje dag.", "All dishes are prepared from scratch with fresh ingredients every day.") },
              { icon: <Award size={28} />, title: "100% Halal", desc: t("All vår mat är halal-certifierad och noggrant utvald.", "All our food is halal-certified and carefully selected.") },
              { icon: <ChefHat size={28} />, title: t("Erfarna Kockar", "Experienced Chefs"), desc: t("Vårt köksteam har decennier av erfarenhet från hela Sydasien.", "Our kitchen team has decades of experience from across South Asia.") },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="text-center p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-primary/20 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-light">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-28 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary/70 text-[10px] font-medium tracking-[0.4em] uppercase mb-3">
              {t("Bildgalleri", "Photo Gallery")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              {t("Vår Restaurang", "Our Restaurant")}
            </h2>
            <Ornament className="mb-4" />
            <p className="text-muted-foreground max-w-lg mx-auto font-light italic">
              {t("En inblick i vår matsal, vårt kök och vårt passionerade team.", "A glimpse into our dining area, kitchen and passionate team.")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {galleryPhotos.map((photo, i) => (
              <motion.div key={i} variants={fadeUp} className={`overflow-hidden rounded-xl ring-1 ring-white/[0.06] ${photo.span}`}>
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 min-h-[200px]" loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Ornament className="mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              {t("Kom och Besök Oss", "Come Visit Us")}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto font-light italic">
              {t("Vi ser fram emot att välkomna dig till Spice Villa.", "We look forward to welcoming you to Spice Villa.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontakt"
                className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                {t("Boka Bord", "Book a Table")}
              </Link>
              <Link
                to="/meny"
                className="inline-block border border-primary/40 text-primary px-10 py-4 rounded-lg font-semibold text-base hover:bg-primary/10 transition-colors"
              >
                {t("Se Menyn", "See the Menu")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
