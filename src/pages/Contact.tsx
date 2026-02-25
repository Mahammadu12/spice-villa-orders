import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Train, Car, Footprints, CalendarDays, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { sendFormEmail } from "@/lib/sendFormEmail";
import heroImg from "@/assets/exterior.jpeg";
import sideImg from "@/assets/interior.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
    <span className="text-primary/60 text-sm">✦</span>
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
  </div>
);

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {
      form_type: "table_booking",
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
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-25" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43,72%,55%,0.03),transparent_60%)]" />
      </div>

      {/* Hero text */}
      <div className="relative z-10 pt-36 pb-14 text-center px-4">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p variants={fadeUp} className="text-primary/60 text-[10px] font-medium tracking-[0.5em] uppercase mb-4">
            {t("Spice Villa", "Spice Villa")}
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-5 tracking-tight leading-none">
            {t("Kontakt & Boka Bord", "Contact & Reserve")}
          </motion.h1>
          <Ornament className="mb-5" />
          <motion.p variants={fadeUp} className="text-white/40 text-base max-w-xl mx-auto italic font-light">
            {t("Boka bord eller hitta oss.", "Book a table or find us.")}
          </motion.p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10 pb-12">
        {submitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm rounded-2xl p-10 text-center shadow-xl max-w-lg mx-auto">
            <CalendarDays className="text-primary mx-auto mb-4" size={48} />
            <h2 className="font-serif text-2xl mb-2 text-white">{t("Tack för din bokning!", "Thank you for your booking!")}</h2>
            <p className="text-white/50 mb-6 font-light">{t("Vi återkommer med bekräftelse.", "We will confirm shortly.")}</p>
            <Button onClick={() => setSubmitted(false)} variant="outline">{t("Gör en ny bokning", "Make a new booking")}</Button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/[0.06]">
            {/* Left: Image with contact info */}
            <div className="relative hidden lg:block min-h-[600px]">
              <img src={sideImg} alt="Spice Villa interior" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 space-y-3">
                {[
                  { icon: <MapPin className="text-primary flex-shrink-0" size={20} />, label: t("Adress", "Address"), value: "Tenstagången 25, 163 64 Spånga" },
                  { icon: <Clock className="text-primary flex-shrink-0" size={20} />, label: t("Öppettider", "Opening Hours"), value: t("Mån–Fre: 11–22 · Lör: 12–22 · Sön: 12–21", "Mon–Fri: 11–22 · Sat: 12–22 · Sun: 12–21") },
                ].map((item) => (
                  <div key={item.label} className="bg-black/40 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 border border-white/[0.06]">
                    {item.icon}
                    <div>
                      <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase">{item.label}</p>
                      <p className="text-white text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
                <div className="bg-black/40 backdrop-blur-md rounded-xl p-4 flex items-center gap-3 border border-white/[0.06]">
                  <Phone className="text-primary flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase">{t("Telefon", "Phone")}</p>
                    <a href="tel:+46764222770" className="text-white text-sm font-medium hover:text-primary transition-colors">+46 76 422 27 70</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking form */}
            <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }} className="bg-[hsl(0,0%,7%)]/95 backdrop-blur-md p-8 md:p-10 border-l border-white/[0.06]">
              <motion.div variants={fadeUp}>
                <p className="text-primary/50 text-[10px] tracking-[0.4em] uppercase mb-2">{t("Reservation", "Reservation")}</p>
                <h2 className="font-serif text-2xl md:text-3xl text-white mb-1">{t("Boka bord", "Book a Table")}</h2>
                <div className="w-12 h-0.5 bg-primary/40 rounded mb-5" />
                <div className="bg-white/[0.03] border border-primary/15 rounded-xl px-5 py-4 mb-6 flex items-start gap-3">
                  <CalendarDays className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-white/60 text-sm leading-relaxed font-light">
                    {t(
                      "För bokningar mer än 24 timmar i förväg, fyll i formuläret nedan. För bokningar samma dag, vänligen ring oss på ",
                      "For bookings more than 24 hours in advance, please fill in the form below. For same-day bookings, please call us at "
                    )}
                    <a href="tel:+46764222770" className="text-primary font-semibold hover:underline whitespace-nowrap">+46 76 422 27 70</a>.
                  </p>
                </div>
              </motion.div>

              <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
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

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Datum", "Date")} *</label>
                    <Input name="date" type="date" required className="border-white/[0.08] bg-white/[0.03]" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Tid", "Time")} *</label>
                    <Input name="time" type="time" required className="border-white/[0.08] bg-white/[0.03]" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-medium text-white/40 uppercase tracking-[0.15em]">{t("Gäster", "Guests")} *</label>
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
            </motion.div>
          </div>
        )}
      </div>

      {/* Transport & Map Section */}
      <div className="max-w-6xl mx-auto px-4 pb-20 relative z-10">
        <div className="lg:hidden grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { icon: <MapPin className="mx-auto text-primary mb-2" size={22} />, title: t("Adress", "Address"), lines: ["Tenstagången 25", "163 64 Spånga"] },
            { icon: <Clock className="mx-auto text-primary mb-2" size={22} />, title: t("Öppettider", "Hours"), lines: [t("Mån–Fre: 11–22", "Mon–Fri: 11–22"), t("Lör: 12–22 · Sön: 12–21", "Sat: 12–22 · Sun: 12–21")] },
            { icon: <Phone className="mx-auto text-primary mb-2" size={22} />, title: t("Telefon", "Phone"), lines: [], link: { href: "tel:+46764222770", text: "+46 76 422 27 70" } },
          ].map((c) => (
            <div key={c.title} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 text-center">
              {c.icon}
              <h3 className="font-serif text-sm font-semibold mb-1 text-white">{c.title}</h3>
              {c.lines.map((l) => <p key={l} className="text-white/50 text-xs">{l}</p>)}
              {c.link && <a href={c.link.href} className="text-primary hover:underline text-xs font-medium">{c.link.text}</a>}
            </div>
          ))}
        </div>

        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={fadeUp} className="space-y-4">
            <h2 className="font-serif text-xl text-white">{t("Hitta till oss", "How to Find Us")}</h2>
            <div className="grid gap-3">
              {[
                { icon: <Train className="text-primary mb-2" size={20} />, title: t("Kollektivtrafik", "Public Transport"), desc: t("Tunnelbana blå linje till Tensta station, 2 min gångväg.", "Blue metro line to Tensta station, 2 min walk.") },
                { icon: <Car className="text-primary mb-2" size={20} />, title: t("Bil", "By Car"), desc: t("Kör mot Tensta Centrum. Gratis parkering i anslutning.", "Drive towards Tensta Centrum. Free parking nearby.") },
                { icon: <Footprints className="text-primary mb-2" size={20} />, title: t("Till fots / Cykel", "Walk / Bike"), desc: t("Hjärtat av Tensta Centrum. Cykelparkering utanför entrén.", "Heart of Tensta Centrum. Bike parking outside.") },
              ].map((item) => (
                <div key={item.title} className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                  {item.icon}
                  <h3 className="font-serif text-sm font-semibold mb-1 text-white">{item.title}</h3>
                  <p className="text-white/50 text-xs font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="rounded-xl overflow-hidden border border-white/[0.06] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2028.5!2d17.9!3d59.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9e5b0b0b0b0b%3A0x0!2sTenstag%C3%A5ngen+25%2C+163+64+Sp%C3%A5nga!5e0!3m2!1ssv!2sse!4v1700000000000!5m2!1ssv!2sse"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Spice Villa - Tenstagången 25, Spånga"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
