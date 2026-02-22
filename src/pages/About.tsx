import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChefHat, Flame, Star, UtensilsCrossed, Award } from "lucide-react";
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
import beefPayaImg from "@/assets/beef-paya.jpg";
import biryaniImg from "@/assets/biryani.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const galleryPhotos = [
  { src: chefExteriorImg, alt: "Vår kock framför Spice Villa", span: "col-span-2 row-span-2" },
  { src: diningAreaImg, alt: "Vår mysiga matsal", span: "col-span-2" },
  { src: fruitChaatImg, alt: "Färsk fruktsallad", span: "" },
  { src: saladSaucesImg, alt: "Sallad med hemgjorda såser", span: "" },
  { src: kitchenImg, alt: "Vårt öppna kök", span: "col-span-2" },
  { src: entranceImg, alt: "Välkommen in", span: "" },
  { src: chefsImg, alt: "Våra kockar", span: "" },
  { src: teamImg, alt: "Spice Villa-teamet", span: "col-span-2" },
  { src: storefrontImg, alt: "Spice Villa skyltfönster", span: "col-span-2" },
];

const signatureDishes = [
  { img: nihariImg, name: "Nihari", desc: "Vår mest eftertraktade rätt — nötköttsstomp som kokas långsamt i timmar med hemliga kryddblandningar." },
  { img: chapliKababImg, name: "Chapli Kebab", desc: "Kryddiga köttfärsbiffar med färska örter, tomat och granatäpple — en afghansk klassiker." },
  { img: beefPayaImg, name: "Beef Paya", desc: "Traditionell kotlettgryta med rik buljong och aromatiska kryddor, en helgfavorit." },
  { img: biryaniImg, name: "Biryani", desc: "Doftande basmatiris tillagat med saffran, hela kryddor och möra köttbitar i lager." },
];

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Banner */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={interiorImg}
            alt="Spice Villa interiör"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>
        <motion.div
          className="relative z-10 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span
            className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-4 block"
            variants={fadeUp}
          >
            Vår Historia
          </motion.span>
          <motion.h1
            className="font-serif text-4xl md:text-6xl text-white mb-4"
            variants={fadeUp}
          >
            Om Spice Villa
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-xl mx-auto"
            variants={fadeUp}
          >
            Över 20 års passion för autentisk sydasiatisk mat
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div variants={fadeUp}>
              <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
                Sedan 2004
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
                Välkommen till <span className="text-primary">Spice Villa</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                Spice Villa erbjuder en unik matupplevelse med autentiska recept från Indien, Pakistan,
                Bangladesh och Afghanistan. Vår huvudkock har över <strong className="text-foreground">20 års erfarenhet</strong> inom
                branschen och brinner för att servera de mest autentiska smakerna.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Varje rätt tillagas med noggrant utvalda kryddor som importeras direkt, och vi använder
                traditionella matlagningsmetoder som kolgrillning och tandoori-ugn för att ge varje maträtt
                sin karakteristiska smak.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Vi är kända för våra signatur­rätter som <strong className="text-foreground">Nihari</strong>, <strong className="text-foreground">Chapli Kebab</strong>,{" "}
                <strong className="text-foreground">Beef Paya</strong> och <strong className="text-foreground">Biryani</strong> — 
                alla tillagade med traditionella metoder, färska kryddor och kärlek.
                Vår mysiga restaurang med tegelstensinteriör bjuder in till en avkopplande middag med familj och vänner.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-secondary border border-border">
                  <ChefHat className="mx-auto mb-2 text-primary" size={24} />
                  <span className="text-2xl font-serif text-foreground block">20+</span>
                  <span className="text-muted-foreground text-xs">Års Erfarenhet</span>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary border border-border">
                  <Flame className="mx-auto mb-2 text-primary" size={24} />
                  <span className="text-2xl font-serif text-foreground block">100%</span>
                  <span className="text-muted-foreground text-xs">Halal Certifierad</span>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary border border-border">
                  <Star className="mx-auto mb-2 text-primary" size={24} />
                  <span className="text-2xl font-serif text-foreground block">4.5</span>
                  <span className="text-muted-foreground text-xs">Betyg</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="relative">
              <img
                src={diningAreaImg}
                alt="Spice Villa matsal"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
                <span className="font-serif text-3xl block">20+</span>
                <span className="text-sm font-medium">År av Passion</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Specialties */}
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
              Det Vi Gör Bäst
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
              Våra Signaturrätter
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Rätter som har gjort oss kända — varje en berättelse om tradition och hantverksskicklighet.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {signatureDishes.map((dish) => (
              <motion.div
                key={dish.name}
                variants={fadeUp}
                className="flex gap-5 bg-card text-card-foreground rounded-2xl overflow-hidden border border-border/50 p-5 group hover:border-primary/40 transition-all duration-300"
              >
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-28 h-28 object-cover rounded-xl flex-shrink-0"
                />
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{dish.name}</h3>
                  <p className="text-card-foreground/60 text-sm leading-relaxed">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Det Som Skiljer Oss
            </h2>
          </motion.div>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { icon: <Flame size={28} />, title: "Kolgrillat", desc: "Vi grillar över kol och i tandoori-ugn för autentisk smak." },
              { icon: <UtensilsCrossed size={28} />, title: "Hemlagat", desc: "Alla rätter tillagas från grunden med färska råvaror varje dag." },
              { icon: <Award size={28} />, title: "100% Halal", desc: "All vår mat är halal-certifierad och noggrant utvald." },
              { icon: <ChefHat size={28} />, title: "Erfarna Kockar", desc: "Vårt köksteam har decennier av erfarenhet från hela Sydasien." },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="text-center p-8 rounded-2xl bg-secondary border border-border hover:border-primary/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-3 block">
              Bildgalleri
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
              Vår Restaurang
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              En inblick i vår matsal, vårt kök och vårt passionerade team.
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
              <motion.div
                key={i}
                variants={fadeUp}
                className={`overflow-hidden rounded-xl ${photo.span}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 min-h-[200px]"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Kom och Besök Oss
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Vi ser fram emot att välkomna dig till Spice Villa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontakt"
                className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-base hover:bg-primary/90 transition-colors shadow-lg"
              >
                Boka Bord
              </Link>
              <Link
                to="/meny"
                className="inline-block border-2 border-primary text-primary px-10 py-4 rounded-lg font-semibold text-base hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Se Menyn
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
