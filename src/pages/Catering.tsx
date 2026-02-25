import { useState } from "react";
import { motion } from "framer-motion";
import { PartyPopper, Phone, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sendFormEmail } from "@/lib/sendFormEmail";
import heroImg from "@/assets/catering-hero.jpg";
import foodImg from "@/assets/catering-hero.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
    <span className="text-primary/60 text-sm">✦</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
  </div>
);

const Catering = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [foodType, setFoodType] = useState("");
  const [eventType, setEventType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {
      form_type: "catering",
      date: formData.get("date") as string,
      food_type: foodType,
      event_type: eventType,
      guests: formData.get("guests") as string,
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      await sendFormEmail(data);
      setSubmitted(true);
      toast({
        title: t("Förfrågan skickad!", "Request sent!"),
        description: t("Vi kontaktar dig inom kort för att diskutera ditt event.", "We will contact you shortly to discuss your event."),
      });
    } catch {
      toast({
        title: t("Något gick fel", "Something went wrong"),
        description: t("Försök igen eller ring oss.", "Please try again or call us."),
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Layered background */}
      <div className="fixed inset-0 -z-10">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,72%,55%,0.03),transparent_60%)]" />
      </div>

      <div className="relative z-10 pt-36 pb-14 text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p variants={fadeUp} className="text-primary/60 text-[10px] font-medium tracking-[0.5em] uppercase mb-4">
            {t("Evenemang & Fest", "Events & Celebrations")}
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-5 tracking-tight leading-none">Catering & Event</motion.h1>
          <Ornament className="mb-5" />
          <motion.p variants={fadeUp} className="text-white/40 text-base max-w-xl mx-auto italic font-light">
            {t("Låt Spice Villa göra ditt event till något speciellt med autentisk pakistansk & indisk mat.", "Let Spice Villa make your event special with authentic Pakistani & Indian food.")}
          </motion.p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 pb-20">
        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10 text-center shadow-xl max-w-lg mx-auto">
            <PartyPopper className="text-primary mx-auto mb-4" size={48} />
            <h2 className="font-serif text-2xl mb-2 text-white">{t("Tack för din förfrågan!", "Thank you for your request!")}</h2>
            <p className="text-white/50 mb-6 font-light">{t("Vi kontaktar dig så snart som möjligt.", "We will contact you as soon as possible.")}</p>
            <Button onClick={() => setSubmitted(false)} variant="outline">{t("Skicka en ny förfrågan", "Send a new request")}</Button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/[0.06]">
            <div className="relative hidden lg:block min-h-[500px]">
              <img src={foodImg} alt="Spice Villa mat" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/40 backdrop-blur-md rounded-xl p-5 inline-flex items-center gap-3 border border-white/[0.06]">
                  <Phone className="text-primary" size={22} />
                  <div>
                    <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase">{t("Ring oss", "Call us")}</p>
                    <a href="tel:+46704431515" className="text-white text-lg font-semibold hover:text-primary transition-colors">070-443 15 15</a>
                  </div>
                </div>
              </div>
            </div>

            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="bg-[hsl(0,0%,7%)]/95 backdrop-blur-md p-8 md:p-10 border-l border-white/[0.06]">
              <motion.div variants={fadeUp}>
                <p className="text-primary/50 text-[10px] tracking-[0.4em] uppercase mb-2">Catering</p>
                <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">{t("Få en offert", "Get a Quote")}</h2>
                <div className="w-12 h-0.5 bg-primary/40 rounded mb-6" />
              </motion.div>

              <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Datum", "Date")}</label>
                    <Input name="date" type="date" required className="border-white/[0.08] bg-white/[0.03]" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Typ av mat", "Food Type")}</label>
                    <Select value={foodType} onValueChange={setFoodType}>
                      <SelectTrigger className="border-white/[0.08] bg-white/[0.03]"><SelectValue placeholder={t("Välj", "Choose")} /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pakistansk">{t("Pakistansk", "Pakistani")}</SelectItem>
                        <SelectItem value="indisk">{t("Indisk", "Indian")}</SelectItem>
                        <SelectItem value="mix">{t("Blandad meny", "Mixed menu")}</SelectItem>
                        <SelectItem value="vegetarisk">{t("Vegetarisk", "Vegetarian")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Antal gäster", "Number of Guests")}</label>
                    <Input name="guests" type="number" min={1} max={500} placeholder="50" required className="border-white/[0.08] bg-white/[0.03]" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Eventtyp", "Event Type")}</label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger className="border-white/[0.08] bg-white/[0.03]"><SelectValue placeholder={t("Välj", "Choose")} /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brollop">{t("Bröllop", "Wedding")}</SelectItem>
                        <SelectItem value="fest">{t("Fest / Kalas", "Party")}</SelectItem>
                        <SelectItem value="foretag">{t("Företagsevent", "Corporate Event")}</SelectItem>
                        <SelectItem value="annat">{t("Annat", "Other")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Namn", "Name")}</label>
                    <Input name="name" required placeholder={t("Ditt namn", "Your name")} maxLength={100} className="border-white/[0.08] bg-white/[0.03]" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Telefon", "Phone")}</label>
                    <Input name="phone" type="tel" required placeholder="07X XXX XX XX" maxLength={20} className="border-white/[0.08] bg-white/[0.03]" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("E-post", "Email")}</label>
                  <Input name="email" type="email" required placeholder={t("din@email.se", "your@email.com")} maxLength={255} className="border-white/[0.08] bg-white/[0.03]" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Meddelande", "Message")}</label>
                  <Textarea name="message" placeholder={t("Önskemål, allergier, budget...", "Preferences, allergies, budget...")} maxLength={2000} rows={3} className="border-white/[0.08] bg-white/[0.03]" />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={sending}>
                  {sending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {t("Skicka förfrågan", "Send Request")}
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
