import { motion } from "framer-motion";
import { Gift, Star, Cake, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import exteriorImg from "@/assets/exterior.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Loyalty = () => {
  const { t } = useLanguage();

  const perks = [
    {
      icon: Gift,
      title: t("Välkomstbonus", "Welcome Bonus"),
      desc: t("Få 10% rabatt på din första beställning när du registrerar dig", "Get 10% off your first order when you sign up"),
    },
    {
      icon: Star,
      title: t("Samla Poäng", "Earn Points"),
      desc: t("1 poäng för varje 10 kr — lös in poäng mot gratis rätter", "1 point for every 10 kr spent — redeem for free dishes"),
    },
    {
      icon: Cake,
      title: t("Födelsedagspresent", "Birthday Treat"),
      desc: t("Gratis dessertfat under din födelsedagsmånad", "Free dessert platter on your birthday month"),
    },
    {
      icon: Sparkles,
      title: t("Exklusiva Erbjudanden", "Exclusive Offers"),
      desc: t("Medlemserbjudanden, tidig tillgång till nya rätter & events", "Members-only deals, early access to new dishes & events"),
    },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 -z-10">
        <img src={exteriorImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center pt-20">
        <motion.div className="text-center px-4 max-w-2xl" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }}>
          <motion.p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-3" variants={fadeUp}>
            {t("Belöningsprogram", "Rewards Program")}
          </motion.p>
          <motion.h1 className="font-serif text-4xl md:text-6xl text-white mb-4" variants={fadeUp}>
            Spice Villa <span className="text-primary">Rewards</span>
          </motion.h1>
          <motion.p className="text-white/60 text-lg max-w-md mx-auto" variants={fadeUp}>
            {t("Gå med i vårt lojalitetsprogram och lås upp exklusiva erbjudanden, födelsedagspresenter och mer", "Join our loyalty program and unlock exclusive dining offers, birthday treats & more")}
          </motion.p>
        </motion.div>
      </section>

      {/* Perks grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {perks.map((perk) => (
              <motion.div
                key={perk.title}
                variants={fadeUp}
                className="bg-black/40 backdrop-blur-sm border border-border/30 rounded-2xl p-8 text-center hover:border-primary/40 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/15 mb-5">
                  <perk.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-xl text-white mb-2">{perk.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div className="text-center mt-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <a
              href="tel:+4646764222770"
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-base hover:bg-primary/90 transition-colors"
            >
              {t("Gå Med Nu", "Join Now")}
            </a>
            <p className="text-white/40 text-sm mt-4">
              {t("Kontakta oss i restaurangen eller ring för att registrera dig", "Contact us at the restaurant or call to sign up")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Loyalty;
