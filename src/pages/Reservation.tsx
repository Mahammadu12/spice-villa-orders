import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Clock, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendFormEmail } from "@/lib/sendFormEmail";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

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
    <section className="min-h-screen bg-background pt-24 pb-16 px-4">
      <motion.div className="max-w-2xl mx-auto" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
        <motion.h1 variants={fadeUp} className="font-serif text-3xl md:text-4xl text-foreground text-center mb-2">{t("Boka bord", "Book a Table")}</motion.h1>
        <motion.p variants={fadeUp} className="text-muted-foreground text-center mb-10 max-w-md mx-auto">
          {t(
            "För bokningar mer än 24 timmar i förväg, fyll i formuläret. För bokningar samma dag, vänligen ring oss.",
            "For bookings more than 24 hours in advance, please fill in the form. For same-day bookings, please call us."
          )}
        </motion.p>

        {submitted ? (
          <motion.div variants={fadeUp} className="bg-card border border-border rounded-lg p-8 text-center">
            <CalendarDays className="text-primary mx-auto mb-4" size={48} />
            <h2 className="font-serif text-2xl text-foreground mb-2">{t("Tack för din bokning!", "Thank you for your booking!")}</h2>
            <p className="text-muted-foreground mb-6">{t("Vi har tagit emot din förfrågan och återkommer med bekräftelse via telefon eller e-post.", "We have received your request and will confirm via phone or email.")}</p>
            <Button onClick={() => setSubmitted(false)} variant="outline">{t("Gör en ny bokning", "Make a new booking")}</Button>
          </motion.div>
        ) : (
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 md:p-8 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t("Namn", "Name")} *</label>
                <Input name="name" required placeholder={t("Ditt namn", "Your name")} maxLength={100} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">{t("Telefon", "Phone")} *</label>
                <Input name="phone" type="tel" required placeholder="07X XXX XX XX" maxLength={20} />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t("E-post", "Email")}</label>
              <Input name="email" type="email" placeholder={t("din@email.se", "your@email.com")} maxLength={255} />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-1"><CalendarDays size={14} /> {t("Datum", "Date")} *</label>
                <Input name="date" type="date" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-1"><Clock size={14} /> {t("Tid", "Time")} *</label>
                <Input name="time" type="time" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground flex items-center gap-1"><Users size={14} /> {t("Antal gäster", "Number of Guests")} *</label>
                <Input name="guests" type="number" min={1} max={50} required placeholder="2" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">{t("Önskemål", "Requests")}</label>
              <Textarea name="message" placeholder={t("Allergier, barnstol, speciella önskemål...", "Allergies, high chair, special requests...")} maxLength={500} rows={3} />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={sending}>
              {sending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {t("Skicka bokning", "Submit Booking")}
            </Button>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
};

export default Reservation;
