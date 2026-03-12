import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">
            {t("Villkor", "Terms of Service")}
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-sm leading-relaxed">
            <p>{t("Senast uppdaterad: Mars 2026", "Last updated: March 2026")}</p>

            <h2 className="text-foreground text-lg font-semibold mt-8">
              {t("1. Allmänt", "1. General")}
            </h2>
            <p>
              {t(
                "Dessa villkor gäller för användning av Spice Villas webbplats (spice-villa.se). Genom att använda vår webbplats accepterar du dessa villkor.",
                "These terms apply to the use of Spice Villa's website (spice-villa.se). By using our website, you accept these terms."
              )}
            </p>

            <h2 className="text-foreground text-lg font-semibold mt-8">
              {t("2. Beställningar och bokningar", "2. Orders and Reservations")}
            </h2>
            <p>
              {t(
                "Beställningar via Uber Eats och andra plattformar regleras av respektive plattforms villkor. Bokningar via vår webbplats är preliminära tills de bekräftas av oss.",
                "Orders via Uber Eats and other platforms are governed by the respective platform's terms. Reservations via our website are preliminary until confirmed by us."
              )}
            </p>

            <h2 className="text-foreground text-lg font-semibold mt-8">
              {t("3. Catering", "3. Catering")}
            </h2>
            <p>
              {t(
                "Cateringbeställningar kräver bekräftelse och eventuell förskottsbetalning. Avbeställning måste ske senast 48 timmar i förväg.",
                "Catering orders require confirmation and possible advance payment. Cancellation must be made at least 48 hours in advance."
              )}
            </p>

            <h2 className="text-foreground text-lg font-semibold mt-8">
              {t("4. Ansvarsbegränsning", "4. Limitation of Liability")}
            </h2>
            <p>
              {t(
                "Spice Villa ansvarar inte för eventuella fel eller avbrott på webbplatsen. Vi förbehåller oss rätten att ändra priser och meny utan förvarning.",
                "Spice Villa is not liable for any errors or interruptions on the website. We reserve the right to change prices and menus without notice."
              )}
            </p>

            <h2 className="text-foreground text-lg font-semibold mt-8">
              {t("5. Kontakt", "5. Contact")}
            </h2>
            <p>
              {t(
                "Vid frågor om dessa villkor, kontakta oss på info@spice-villa.se eller ring +46 76 422 27 70.",
                "For questions about these terms, contact us at info@spice-villa.se or call +46 76 422 27 70."
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
