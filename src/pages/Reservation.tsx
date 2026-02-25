import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Clock, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendFormEmail } from "@/lib/sendFormEmail";
import interiorImg from "@/assets/interior.jpeg";

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

const Reservation = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {
      form_type: "reservation",
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      date: formData.get("date") as string,
      time: formData.get("time") as string,
      guests: formData.get("guests") as string,
      message: formData.get("message") as string,
    };

    try {
      await sendFormEmail(data);
      setSubmitted(true);
      toast({
        title: t("Bokning mottagen!", "Booking received!"),
        description: t("Vi återkommer med en bekräftelse inom kort.", "We will confirm your booking shortly."),
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
        <img src={interiorImg} alt="" className="w-full h-full object-cover opacity-[0.12]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,4%)] via-[hsl(0,0%,6%)] to-[hsl(0,0%,4%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,72%,55%,0.03),transparent_60%)]" />
      </div>

      <div className="relative z-10 pt-36 pb-8 text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p variants={fadeUp} className="text-primary/60 text-[10px] font-medium tracking-[0.5em] uppercase mb-4">
            {t("Spice Villa", "Spice Villa")}
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl text-white mb-5 tracking-tight leading-none">
            {t("Boka Bord", "Book a Table")}
          </motion.h1>
          <Ornament className="mb-5" />
          <motion.p variants={fadeUp} className="text-white/40 max-w-md mx-auto text-sm font-light italic leading-relaxed">
            {t(
              "För bokningar mer än 24 timmar i förväg, fyll i formuläret. För bokningar samma dag, vänligen ring oss.",
              "For bookings more than 24 hours in advance, please fill in the form. For same-day bookings, please call us."
            )}
          </motion.p>
        </motion.div>
      </div>

      <motion.div className="max-w-2xl mx-auto px-4 pb-20 relative z-10" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
        {submitted ? (
          <motion.div variants={fadeUp} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10 text-center">
            <CalendarDays className="text-primary mx-auto mb-4" size={48} />
            <h2 className="font-serif text-2xl text-white mb-2">{t("Tack för din bokning!", "Thank you for your booking!")}</h2>
            <p className="text-white/50 mb-6 font-light">{t("Vi har tagit emot din förfrågan och återkommer med bekräftelse via telefon eller e-post.", "We have received your request and will confirm via phone or email.")}</p>
            <Button onClick={() => setSubmitted(false)} variant="outline">{t("Gör en ny bokning", "Make a new booking")}</Button>
          </motion.div>
        ) : (
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 md:p-9 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Namn", "Name")} *</label>
                <Input name="name" required placeholder={t("Ditt namn", "Your name")} maxLength={100} className="border-white/[0.08] bg-white/[0.03]" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Telefon", "Phone")} *</label>
                <Input name="phone" type="tel" required placeholder="07X XXX XX XX" maxLength={20} className="border-white/[0.08] bg-white/[0.03]" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("E-post", "Email")}</label>
              <Input name="email" type="email" placeholder={t("din@email.se", "your@email.com")} maxLength={255} className="border-white/[0.08] bg-white/[0.03]" />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em] flex items-center gap-1"><CalendarDays size={12} /> {t("Datum", "Date")} *</label>
                <Input name="date" type="date" required className="border-white/[0.08] bg-white/[0.03]" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em] flex items-center gap-1"><Clock size={12} /> {t("Tid", "Time")} *</label>
                <Input name="time" type="time" required className="border-white/[0.08] bg-white/[0.03]" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em] flex items-center gap-1"><Users size={12} /> {t("Antal gäster", "Guests")} *</label>
                <Input name="guests" type="number" min={1} max={50} required placeholder="2" className="border-white/[0.08] bg-white/[0.03]" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Önskemål", "Requests")}</label>
              <Textarea name="message" placeholder={t("Allergier, barnstol, speciella önskemål...", "Allergies, high chair, special requests...")} maxLength={500} rows={3} className="border-white/[0.08] bg-white/[0.03]" />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={sending}>
              {sending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t("Skicka bokning", "Submit Booking")}
            </Button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
};

export default Reservation;
