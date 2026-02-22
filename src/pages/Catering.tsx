import { useState } from "react";
import { motion } from "framer-motion";
import { PartyPopper, Briefcase, Heart, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const eventTypes = [
  { icon: Heart, label: "Bröllop" },
  { icon: PartyPopper, label: "Fest / Kalas" },
  { icon: Briefcase, label: "Företagsevent" },
  { icon: Users, label: "Annat" },
];

const Catering = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Förfrågan skickad!",
      description: "Vi kontaktar dig inom kort för att diskutera ditt event.",
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
          Catering & Event
        </motion.h1>
        <motion.p variants={fadeUp} className="text-muted-foreground text-center mb-10 max-w-lg mx-auto">
          Låt Spice Villa göra ditt event till något speciellt! Vi erbjuder catering för bröllop, fester, företagsevent och mer.
        </motion.p>

        {submitted ? (
          <motion.div
            variants={fadeUp}
            className="bg-card text-card-foreground rounded-lg p-8 text-center shadow-lg"
          >
            <PartyPopper className="text-primary mx-auto mb-4" size={48} />
            <h2 className="font-serif text-2xl mb-2">Tack för din förfrågan!</h2>
            <p className="text-card-foreground/60 mb-6">Vi har tagit emot ditt meddelande och kontaktar dig så snart som möjligt.</p>
            <Button onClick={() => setSubmitted(false)} variant="outline">Skicka en ny förfrågan</Button>
          </motion.div>
        ) : (
          <>
            {/* Event type selector */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {eventTypes.map((type) => (
                <button
                  key={type.label}
                  type="button"
                  onClick={() => setSelectedEvent(type.label)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border transition-all ${
                    selectedEvent === type.label
                      ? "border-primary bg-primary/20 text-primary shadow-md"
                      : "border-foreground/20 bg-secondary text-foreground/70 hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  <type.icon size={24} />
                  <span className="text-sm font-medium">{type.label}</span>
                </button>
              ))}
            </motion.div>

            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="bg-card text-card-foreground rounded-lg p-6 md:p-8 space-y-5 shadow-lg"
            >
              <input type="hidden" name="eventType" value={selectedEvent} />

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Namn *</label>
                  <Input name="name" required placeholder="Ditt namn" maxLength={100} className="border-input bg-white/80 text-card-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Telefon *</label>
                  <Input name="phone" type="tel" required placeholder="07X XXX XX XX" maxLength={20} className="border-input bg-white/80 text-card-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">E-post *</label>
                <Input name="email" type="email" required placeholder="din@email.se" maxLength={255} className="border-input bg-white/80 text-card-foreground" />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Datum för eventet</label>
                  <Input name="date" type="date" className="border-input bg-white/80 text-card-foreground" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Antal gäster (ungefär)</label>
                  <Input name="guests" type="number" min={1} max={500} placeholder="50" className="border-input bg-white/80 text-card-foreground" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Berätta om ditt event *</label>
                <Textarea
                  name="message"
                  required
                  placeholder="Beskriv ditt event, önskemål om mat, allergier, plats, budget etc..."
                  maxLength={2000}
                  rows={5}
                  className="border-input bg-white/80 text-card-foreground"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Skicka förfrågan
              </Button>
            </motion.form>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Catering;
