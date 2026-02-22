import logoNew from "@/assets/logo-new.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col items-center md:items-start">
            <img src={logoNew} alt="Spice Villa" className="h-14 mb-4" />
            <p className="text-muted-foreground text-sm text-center md:text-left">
              {t("Autentisk sydasiatisk mat — Indisk · Pakistansk · Bengalisk · Afghansk", "Authentic South Asian food — Indian · Pakistani · Bengali · Afghan")}
            </p>
            <span className="mt-3 inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
              100% Halal
            </span>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg text-foreground mb-3">{t("Öppettider", "Opening Hours")}</h4>
            <p className="text-muted-foreground text-sm">{t("Mån–Fre: 11:00 – 22:00", "Mon–Fri: 11:00 – 22:00")}</p>
            <p className="text-muted-foreground text-sm">{t("Lör: 12:00 – 22:00", "Sat: 12:00 – 22:00")}</p>
            <p className="text-muted-foreground text-sm">{t("Sön: 12:00 – 21:00", "Sun: 12:00 – 21:00")}</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg text-foreground mb-3">{t("Kontakt", "Contact")}</h4>
            <p className="text-muted-foreground text-sm">Tenstagången 25, 163 64 Spånga</p>
            <p className="text-muted-foreground text-sm">
              Tel: <a href="tel:+46764222770" className="text-primary hover:underline">+46 76 422 27 70</a>
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Spice Villa. {t("Alla rättigheter förbehållna.", "All rights reserved.")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
