import { useState } from "react";
import { motion } from "framer-motion";
import { PartyPopper, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImg from "@/assets/sizzler.jpeg";
import foodImg from "@/assets/catering-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Catering = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [foodType, setFoodType] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Förfrågan skickad!",
      description: "Vi kontaktar dig inom kort för att diskutera ditt event.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Catering" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="relative z-10 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h1 variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Catering & Event
          </motion.h1>
          <motion.p variants={fadeUp} className="text-white/80 text-lg md:text-xl max-w-xl mx-auto">
            Låt Spice Villa göra ditt event till något speciellt med autentisk pakistansk & indisk mat.
          </motion.p>
        </motion.div>
      </div>

      {/* Main Content: Image + Form side by side */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-20 pb-20">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card text-card-foreground rounded-xl p-10 text-center shadow-xl max-w-lg mx-auto"
          >
            <PartyPopper className="text-primary mx-auto mb-4" size={48} />
            <h2 className="font-serif text-2xl mb-2">Tack för din förfrågan!</h2>
            <p className="text-muted-foreground mb-6">Vi kontaktar dig så snart som möjligt.</p>
            <Button onClick={() => setSubmitted(false)} variant="outline">Skicka en ny förfrågan</Button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-2xl">
            {/* Left: Food image with call info */}
            <div className="relative hidden lg:block min-h-[500px]">
              <img src={foodImg} alt="Spice Villa mat" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-5 inline-flex items-center gap-3">
                  <Phone className="text-primary" size={24} />
                  <div>
                    <p className="text-white/70 text-sm">Ring oss</p>
                    <a href="tel:+46736251508" className="text-white text-lg font-semibold hover:text-primary transition-colors">
                      073-625 15 08
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Quote form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="bg-card p-8 md:p-10"
            >
              <motion.div variants={fadeUp}>
                <h2 className="font-serif text-2xl md:text-3xl text-card-foreground mb-1">Få en offert</h2>
                <div className="w-12 h-1 bg-primary rounded mb-6" />
              </motion.div>

              <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Datum</label>
                    <Input name="date" type="date" required className="border-border bg-secondary/50" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Typ av mat</label>
                    <Select value={foodType} onValueChange={setFoodType}>
                      <SelectTrigger className="border-border bg-secondary/50">
                        <SelectValue placeholder="Välj" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pakistansk">Pakistansk</SelectItem>
                        <SelectItem value="indisk">Indisk</SelectItem>
                        <SelectItem value="mix">Blandad meny</SelectItem>
                        <SelectItem value="vegetarisk">Vegetarisk</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Antal gäster</label>
                    <Input name="guests" type="number" min={1} max={500} placeholder="50" required className="border-border bg-secondary/50" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Eventtyp</label>
                    <Select>
                      <SelectTrigger className="border-border bg-secondary/50">
                        <SelectValue placeholder="Välj" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brollop">Bröllop</SelectItem>
                        <SelectItem value="fest">Fest / Kalas</SelectItem>
                        <SelectItem value="foretag">Företagsevent</SelectItem>
                        <SelectItem value="annat">Annat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Namn</label>
                    <Input name="name" required placeholder="Ditt namn" maxLength={100} className="border-border bg-secondary/50" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Telefon</label>
                    <Input name="phone" type="tel" required placeholder="07X XXX XX XX" maxLength={20} className="border-border bg-secondary/50" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">E-post</label>
                  <Input name="email" type="email" required placeholder="din@email.se" maxLength={255} className="border-border bg-secondary/50" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Meddelande</label>
                  <Textarea
                    name="message"
                    placeholder="Önskemål, allergier, budget..."
                    maxLength={2000}
                    rows={3}
                    className="border-border bg-secondary/50"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Skicka förfrågan
                </Button>
              </motion.form>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catering;
