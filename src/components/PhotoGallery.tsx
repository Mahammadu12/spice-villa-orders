import { motion } from "framer-motion";
import chefExteriorImg from "@/assets/chef-exterior.jpeg";
import diningAreaImg from "@/assets/dining-area.jpeg";
import kitchenImg from "@/assets/kitchen.jpeg";
import entranceImg from "@/assets/entrance.jpeg";
import chefsImg from "@/assets/chefs.jpeg";
import teamImg from "@/assets/team.jpeg";
import fruitChaatImg from "@/assets/fruit-chaat.jpeg";
import saladSaucesImg from "@/assets/salad-sauces.jpeg";
import storefrontImg from "@/assets/storefront.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const photos = [
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

const PhotoGallery = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
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
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`overflow-hidden rounded-lg ${photo.span}`}
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
  );
};

export default PhotoGallery;
