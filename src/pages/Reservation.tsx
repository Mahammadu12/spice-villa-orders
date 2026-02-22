import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Reservation = () => {
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
    <section className="min-h-screen bg-background pt-24 pb-16 px-4">
      <motion.div
        className="max-w-2xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        <motion.h1 variants={fadeUp} className="font-serif text-3xl md:text-4xl text-foreground text-center mb-2">
          Boka bord
        </motion.h1>
        <motion.p variants={fadeUp} className="text-muted-foreground text-center mb-10 max-w-md mx-auto">
          Reservera ett bord hos Spice Villa. Fyll i formuläret så bekräftar vi din bokning.
        </motion.p>

        {submitted ? (
          <motion.div
            variants={fadeUp}
            className="bg-card border border-border rounded-lg p-8 text-center"
          >
            <CalendarDays className="text-primary mx-auto mb-4" size={48} />
            <h2 className="font-serif text-2xl text-foreground mb-2">Tack för din bokning!</h2>
            <p className="text-muted-foreground mb-6">Vi har tagit emot din förfrågan och återkommer med bekräftelse via telefon eller e-post.</p>
            <Button onClick={() => setSubmitted(false)} variant="outline">Gör en ny bokning</Button>
          </motion.div>
        ) : (
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Namn *</label>
                <Input name="name" required placeholder="Ditt namn" maxLength={100} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Telefon *</label>
                <Input name="phone" type="tel" required placeholder="07X XXX XX XX" maxLength={20} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">E-post</label>
              <Input name="email" type="email" placeholder="din@email.se" maxLength={255} />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-1">
                  <CalendarDays size={14} /> Datum *
                </label>
                <Input name="date" type="date" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-1">
                  <Clock size={14} /> Tid *
                </label>
                <Input name="time" type="time" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-1">
                  <Users size={14} /> Antal gäster *
                </label>
                <Input name="guests" type="number" min={1} max={50} required placeholder="2" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Önskemål</label>
              <Textarea name="message" placeholder="Allergier, barnstol, speciella önskemål..." maxLength={500} rows={3} />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Skicka bokning
            </Button>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
};

export default Reservation;
