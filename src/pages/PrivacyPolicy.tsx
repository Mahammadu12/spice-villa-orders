import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">
            {t("Integritetspolicy", "Privacy Policy")}
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-sm leading-relaxed">
            <p>{t("Senast uppdaterad: Mars 2026", "Last updated: March 2026")}</p>

            <h2 className="text-foreground text-lg font-semibold mt-8">
              {t("1. Inledning", "1. Introduction")}
            </h2>
            <p>
              {t(
                "Spice Villa AB (\"vi\", \"oss\") värnar om din integritet. Denna policy beskriver hur vi samlar in, använder och skyddar dina personuppgifter när du besöker spice-villa.se.",
                "Spice Villa AB (\"we\", \"us\") values your privacy. This policy describes how we collect, use, and protect your personal data when you visit spice-villa.se."
              )}
            </p>

            <h2 className="text-foreground text-lg font-semibold mt-8">
              {t("2. Vilka uppgifter vi samlar in", "2. What Data We Collect")}
            </h2>
            <p>
              {t(
                "Vi samlar in uppgifter som du frivilligt lämnar genom våra formulär (namn, e-post, telefonnummer, meddelande) samt tekniska data via cookies.",
                "We collect data you voluntarily provide through our forms (name, email, phone number, message) and technical data via cookies."
              )}
            </p>

            <h2 className="text-foreground text-lg font-semibold mt-8">
              {t("3. Cookies och spårning", "3. Cookies and Tracking")}
            </h2>
            <p>
              {t(
                "Vi använder följande typer av cookies:",
                "We use the following types of cookies:"
              )}
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>{t("Nödvändiga cookies", "Necessary cookies")}</strong> – {t(
                  "Krävs för att webbplatsen ska fungera korrekt (t.ex. språkinställning, cookie-samtycke).",
                  "Required for the website to function properly (e.g., language settings, cookie consent)."
                )}
              </li>
              <li>
                <strong>Google Analytics</strong> – {t(
                  "Används för att förstå hur besökare använder vår webbplats. Data anonymiseras.",
                  "Used to understand how visitors use our website. Data is anonymized."
                )}
              </li>
              <li>
                <strong>Meta Pixel</strong> – {t(
                  "Används för marknadsföring och annonsering på Facebook och Instagram.",
                  "Used for marketing and advertising on Facebook and Instagram."
                )}
              </li>
            </ul>
            <p>
              {t(
                "Du kan hantera dina cookie-inställningar via vår cookie-banner som visas vid ditt första besök.",
                "You can manage your cookie settings via our cookie banner shown on your first visit."
              )}
            </p>

            <h2 className="text-foreground text-lg font-semibold mt-8">
              {t("4. Hur vi använder dina uppgifter", "4. How We Use Your Data")}
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>{t("För att hantera bokningar och cateringförfrågningar", "To manage reservations and catering requests")}</li>
              <li>{t("För att förbättra vår webbplats och tjänster", "To improve our website and services")}</li>
              <li>{t("För marknadsföring (med ditt samtycke)", "For marketing (with your consent)")}</li>
            </ul>

            <h2 className="text-foreground text-lg font-semibold mt-8">
              {t("5. Dina rättigheter", "5. Your Rights")}
            </h2>
            <p>
              {t(
                "Enligt GDPR har du rätt att begära tillgång till, rättelse eller radering av dina personuppgifter. Kontakta oss på info@spice-villa.se.",
                "Under GDPR, you have the right to request access to, correction, or deletion of your personal data. Contact us at info@spice-villa.se."
              )}
            </p>

            <h2 className="text-foreground text-lg font-semibold mt-8">
              {t("6. Kontakt", "6. Contact")}
            </h2>
            <p>
              Spice Villa AB<br />
              Tenstagången 25, 163 64 Spånga<br />
              info@spice-villa.se<br />
              +46 76 422 27 70
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
