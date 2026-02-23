import { Link } from "react-router-dom";
import { Check, Accessibility } from "lucide-react";
import logoNew from "@/assets/logo-new.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary border-t border-border py-14 text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logoNew} alt="Spice Villa" className="h-8" width={64} height={32} loading="lazy" decoding="async" />
              <span className="font-serif text-xl text-white">Spice Villa</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              {t(
                "Autentisk pakistansk mat i hjärtat av Spånga. Från vår lerugn till ditt bord — med kärlek.",
                "Authentic Pakistani cuisine in the heart of Spånga. From our clay oven to your table — with love."
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4">{t("Snabblänkar", "Quick Links")}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">{t("Hem", "Home")}</Link></li>
              <li><Link to="/meny" className="hover:text-primary transition-colors">{t("Meny", "Menu")}</Link></li>
              <li><Link to="/lunch" className="hover:text-primary transition-colors">{t("Lunch", "Lunch Specials")}</Link></li>
              <li><Link to="/om-oss" className="hover:text-primary transition-colors">{t("Om Oss", "About")}</Link></li>
              <li><Link to="/kontakt" className="hover:text-primary transition-colors">{t("Kontakt", "Contact")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4">{t("Tjänster", "Services")}</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/catering" className="hover:text-primary transition-colors">Catering</Link></li>
              <li><Link to="/lunch" className="hover:text-primary transition-colors">{t("Lunch", "Lunch Specials")}</Link></li>
              <li>
                <a href="https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  {t("Leverans via Uber Eats", "Delivery via Uber Eats")}
                </a>
              </li>
              <li><Link to="/kontakt" className="hover:text-primary transition-colors">{t("Bokning", "Reservation")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-base mb-4">{t("Kontakt", "Contact")}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>Tenstagången 25, 163 64 Spånga</li>
              <li><a href="tel:+46764222770" className="hover:text-primary transition-colors">+46 76 422 27 70</a></li>
              <li><a href="mailto:info@spicevillaspanga.se" className="hover:text-primary transition-colors">info@spicevillaspanga.se</a></li>
              <li className="leading-relaxed">
                {t("Mån – Fre: 11:00 – 22:00", "Mon – Fri: 11:00 – 22:00")}<br />
                {t("Lör: 12:00 – 22:00", "Sat: 12:00 – 22:00")}<br />
                {t("Sön: 12:00 – 21:00", "Sun: 12:00 – 21:00")}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Spice Villa Spånga. {t("Alla rättigheter förbehållna.", "All rights reserved.")}
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 border border-primary/40 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Check size={14} />
              Halal Certified
            </span>
            <span className="inline-flex items-center gap-1.5 border border-white/20 text-white/70 px-3.5 py-1.5 rounded-full text-xs font-semibold">
              <Accessibility size={14} />
              Accessible
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
