import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Train, Car, Footprints, CalendarDays, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Bokning mottagen!",
      description: "Vi återkommer med en bekräftelse inom kort.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeUp}>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">Kontakt & Boka Bord</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Boka bord, hitta oss eller beställ direkt via Uber Eats & Foodora.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto mb-16">
          {/* Left column */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Booking form */}
            <motion.div variants={fadeUp} className="bg-card text-card-foreground border border-card/80 rounded-lg p-6 md:p-8 shadow-lg">
              <h2 className="font-serif text-2xl mb-5 flex items-center gap-2">
                <CalendarDays className="text-primary" size={24} /> Boka bord
              </h2>

              {submitted ? (
                <div className="text-center py-6">
                  <CalendarDays className="text-primary mx-auto mb-4" size={48} />
                  <h3 className="font-serif text-xl mb-2">Tack för din bokning!</h3>
                  <p className="text-card-foreground/60 mb-4 text-sm">Vi återkommer med bekräftelse via telefon eller e-post.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">Gör en ny bokning</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Namn *</label>
                      <Input name="name" required placeholder="Ditt namn" maxLength={100} className="border-input bg-white/80 text-card-foreground" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Telefon *</label>
                      <Input name="phone" type="tel" required placeholder="07X XXX XX XX" maxLength={20} className="border-input bg-white/80 text-card-foreground" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">E-post</label>
                    <Input name="email" type="email" placeholder="din@email.se" maxLength={255} className="border-input bg-white/80 text-card-foreground" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-xs flex items-center gap-1"><CalendarDays size={12} /> Datum *</label>
                      <Input name="date" type="date" required className="border-input bg-white/80 text-card-foreground" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-xs flex items-center gap-1"><Clock size={12} /> Tid *</label>
                      <Input name="time" type="time" required className="border-input bg-white/80 text-card-foreground" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-xs flex items-center gap-1"><Users size={12} /> Gäster *</label>
                      <Input name="guests" type="number" min={1} max={50} required placeholder="2" className="border-input bg-white/80 text-card-foreground" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium">Önskemål</label>
                    <Textarea name="message" placeholder="Allergier, barnstol, speciella önskemål..." maxLength={500} rows={2} className="border-input bg-white/80 text-card-foreground" />
                  </div>
                  <Button type="submit" className="w-full" size="lg">Skicka bokning</Button>
                </form>
              )}
            </motion.div>

            {/* Contact info cards */}
            <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card text-card-foreground rounded-lg p-5 text-center shadow">
                <MapPin className="mx-auto text-primary mb-2" size={24} />
                <h3 className="font-serif text-sm font-semibold mb-1">Adress</h3>
                <p className="text-card-foreground/60 text-xs">Tenstagången 25</p>
                <p className="text-card-foreground/60 text-xs">163 64 Spånga</p>
              </div>
              <div className="bg-card text-card-foreground rounded-lg p-5 text-center shadow">
                <Clock className="mx-auto text-primary mb-2" size={24} />
                <h3 className="font-serif text-sm font-semibold mb-1">Öppettider</h3>
                <p className="text-card-foreground/60 text-xs">Mån–Fre: 11–22</p>
                <p className="text-card-foreground/60 text-xs">Lör: 12–22 · Sön: 12–21</p>
              </div>
              <div className="bg-card text-card-foreground rounded-lg p-5 text-center shadow">
                <Phone className="mx-auto text-primary mb-2" size={24} />
                <h3 className="font-serif text-sm font-semibold mb-1">Telefon</h3>
                <a href="tel:+46764222770" className="text-primary hover:underline text-xs font-medium">+46 76 422 27 70</a>
              </div>
            </motion.div>

            {/* Transport */}
            <motion.div variants={fadeUp} className="space-y-4">
              <h2 className="font-serif text-xl text-foreground">Hitta till oss</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-card text-card-foreground rounded-lg p-4 shadow">
                  <Train className="text-primary mb-2" size={22} />
                  <h3 className="font-serif text-sm font-semibold mb-1">Kollektivtrafik</h3>
                  <p className="text-card-foreground/60 text-xs">Tunnelbana blå linje till <strong>Tensta station</strong>, 2 min gångväg.</p>
                </div>
                <div className="bg-card text-card-foreground rounded-lg p-4 shadow">
                  <Car className="text-primary mb-2" size={22} />
                  <h3 className="font-serif text-sm font-semibold mb-1">Bil</h3>
                  <p className="text-card-foreground/60 text-xs">Kör mot Tensta Centrum. Gratis parkering i anslutning.</p>
                </div>
                <div className="bg-card text-card-foreground rounded-lg p-4 shadow">
                  <Footprints className="text-primary mb-2" size={22} />
                  <h3 className="font-serif text-sm font-semibold mb-1">Till fots / Cykel</h3>
                  <p className="text-card-foreground/60 text-xs">Hjärtat av Tensta Centrum. Cykelparkering utanför entrén.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column – Map */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="rounded-lg overflow-hidden border border-border sticky top-28 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.5!2d17.9!3d59.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e5b0b0b0b0b%3A0x0!2sTenstag%C3%A5ngen+25%2C+163+64+Sp%C3%A5nga!5e0!3m2!1ssv!2sse!4v1700000000000!5m2!1ssv!2sse"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Spice Villa - Tenstagången 25, Spånga"
              />
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm text-center hover:bg-primary/90 transition-colors"
              >
                Beställ via Uber Eats
              </a>
              <a
                href="https://www.foodora.se/restaurant/ljf2/spice-villa-ljf2"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[hsl(338,90%,46%)] text-white px-6 py-3 rounded font-semibold text-sm text-center hover:bg-[hsl(338,90%,40%)] transition-colors"
              >
                Beställ via Foodora
              </a>
              <a
                href="https://qopla.com/restaurant/spice-villa-spanga/qZkwaaE0oN/order"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[hsl(142,70%,35%)] text-white px-6 py-3 rounded font-semibold text-sm text-center hover:bg-[hsl(142,70%,30%)] transition-colors"
              >
                Beställ via Qopla
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
