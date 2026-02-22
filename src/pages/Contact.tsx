import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">Kontakt & Hitta Hit</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Vi ser fram emot ditt besök! Kontakta oss eller beställ direkt via Uber Eats.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-6 text-center"
          >
            <MapPin className="mx-auto text-primary mb-3" size={28} />
            <h3 className="font-serif text-lg text-foreground mb-2">Adress</h3>
            <p className="text-muted-foreground text-sm">Adress kommer snart</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-6 text-center"
          >
            <Clock className="mx-auto text-primary mb-3" size={28} />
            <h3 className="font-serif text-lg text-foreground mb-2">Öppettider</h3>
            <p className="text-muted-foreground text-sm">Mån–Fre: 11:00 – 21:00</p>
            <p className="text-muted-foreground text-sm">Lör–Sön: 12:00 – 21:00</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-6 text-center"
          >
            <Phone className="mx-auto text-primary mb-3" size={28} />
            <h3 className="font-serif text-lg text-foreground mb-2">Telefon</h3>
            <p className="text-muted-foreground text-sm">Kommer snart</p>
          </motion.div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 bg-card border border-border rounded-lg h-64 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-muted-foreground text-sm">Google Maps – kommer snart</p>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded font-semibold text-base hover:bg-primary/90 transition-colors"
          >
            Beställ via Uber Eats
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
