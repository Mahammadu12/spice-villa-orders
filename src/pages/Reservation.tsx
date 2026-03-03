import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Users, Clock, Loader2 } from "lucide-react";
import { format } from "date-fns";
import { sv } from "date-fns/locale";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendFormEmail } from "@/lib/sendFormEmail";
import { cn } from "@/lib/utils";
import interiorImg from "@/assets/interior.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
    <span className="text-primary/80 text-sm">✦</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
  </div>
);

const TIME_SLOTS = [
  "11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30",
  "15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
  "19:00","19:30","20:00","20:30","21:00","21:30",
];

const Reservation = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {
      form_type: "reservation",
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      date: format(selectedDate, "yyyy-MM-dd"),
      time: selectedTime,
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
        <img src={interiorImg} alt="" className="w-full h-full object-cover opacity-35" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,72%,55%,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(43,72%,55%,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,72%,55%,0.03),transparent_60%)]" />
      </div>

      <div className="relative z-10 pt-36 pb-8 text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p variants={fadeUp} className="text-primary/80 text-[10px] font-medium tracking-[0.5em] uppercase mb-4">
            {t("Spice Villa", "Spice Villa")}
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl text-white mb-5 tracking-tight leading-none">
            {t("Boka Bord", "Book a Table")}
          </motion.h1>
          <Ornament className="mb-5" />
          <motion.p variants={fadeUp} className="text-white/70 max-w-md mx-auto text-sm font-light italic leading-relaxed">
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
            <p className="text-white/75 mb-6 font-light">{t("Vi har tagit emot din förfrågan och återkommer med bekräftelse via telefon eller e-post.", "We have received your request and will confirm via phone or email.")}</p>
            <Button onClick={() => setSubmitted(false)} variant="outline">{t("Gör en ny bokning", "Make a new booking")}</Button>
          </motion.div>
        ) : (
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 md:p-9 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-medium text-white/70 uppercase tracking-[0.15em]">{t("Namn", "Name")} *</label>
                <Input name="name" required placeholder={t("Ditt namn", "Your name")} maxLength={100} className="border-white/[0.08] bg-white/[0.03]" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-medium text-white/70 uppercase tracking-[0.15em]">{t("Telefon", "Phone")} *</label>
                <Input name="phone" type="tel" required placeholder="07X XXX XX XX" maxLength={20} className="border-white/[0.08] bg-white/[0.03]" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-medium text-white/70 uppercase tracking-[0.15em]">{t("E-post", "Email")}</label>
              <Input name="email" type="email" placeholder={t("din@email.se", "your@email.com")} maxLength={255} className="border-white/[0.08] bg-white/[0.03]" />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-medium text-white/70 uppercase tracking-[0.15em] flex items-center gap-1"><CalendarDays size={12} /> {t("Datum", "Date")} *</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06]", !selectedDate && "text-muted-foreground")}>
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "d MMM yyyy", { locale: sv }) : <span>{t("Välj datum", "Pick date")}</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date(new Date().setHours(0,0,0,0))}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-medium text-white/70 uppercase tracking-[0.15em] flex items-center gap-1"><Clock size={12} /> {t("Tid", "Time")} *</label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger className="border-white/[0.08] bg-white/[0.03]">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder={t("Välj tid", "Pick time")} />
                  </SelectTrigger>
                  <SelectContent>
                    {TIME_SLOTS.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-medium text-white/70 uppercase tracking-[0.15em] flex items-center gap-1"><Users size={12} /> {t("Antal gäster", "Guests")} *</label>
                <Input name="guests" type="number" min={1} max={50} required placeholder="2" className="border-white/[0.08] bg-white/[0.03]" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-medium text-white/70 uppercase tracking-[0.15em]">{t("Önskemål", "Requests")}</label>
              <Textarea name="message" placeholder={t("Allergier, barnstol, speciella önskemål...", "Allergies, high chair, special requests...")} maxLength={500} rows={3} className="border-white/[0.08] bg-white/[0.03]" />
            </div>

            <Button type="submit" className="w-full" size="lg" disabled={sending || !selectedDate || !selectedTime}>
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