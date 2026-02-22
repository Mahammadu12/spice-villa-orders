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
            <p className="text-muted-foreground text-sm">Tenstagången 25</p>
            <p className="text-muted-foreground text-sm">163 64 Spånga</p>
            <p className="text-muted-foreground text-xs mt-1">Tensta Centrum</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-6 text-center"
          >
            <Clock className="mx-auto text-primary mb-3" size={28} />
            <h3 className="font-serif text-lg text-foreground mb-2">Öppettider</h3>
            <p className="text-muted-foreground text-sm">Mån–Fre: 11:00 – 22:00</p>
            <p className="text-muted-foreground text-sm">Lör: 12:00 – 22:00</p>
            <p className="text-muted-foreground text-sm">Sön: 12:00 – 21:00</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-6 text-center"
          >
            <Phone className="mx-auto text-primary mb-3" size={28} />
            <h3 className="font-serif text-lg text-foreground mb-2">Telefon</h3>
            <a href="tel:+46764222770" className="text-primary hover:underline text-sm font-medium">
              +46 76 422 27 70
            </a>
          </motion.div>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          className="max-w-4xl mx-auto mb-16 rounded-lg overflow-hidden border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.5!2d17.9!3d59.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e5b0b0b0b0b%3A0x0!2sTenstag%C3%A5ngen+25%2C+163+64+Sp%C3%A5nga!5e0!3m2!1ssv!2sse!4v1700000000000!5m2!1ssv!2sse"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Spice Villa - Tenstagången 25, Spånga"
          />
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg"
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
