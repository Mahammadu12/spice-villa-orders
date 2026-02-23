import { MapPin, Phone, Mail, Clock, Train, Bus, Car } from "lucide-react";
import logoNew from "@/assets/logo-new.png";
import { useLanguage } from "@/contexts/LanguageContext";

const OPENING_HOURS = [
  { day: "Monday", sv: "Måndag", hours: "11:00 – 22:00" },
  { day: "Tuesday", sv: "Tisdag", hours: "11:00 – 22:00" },
  { day: "Wednesday", sv: "Onsdag", hours: "11:00 – 22:00" },
  { day: "Thursday", sv: "Torsdag", hours: "11:00 – 22:00" },
  { day: "Friday", sv: "Fredag", hours: "11:00 – 22:00" },
  { day: "Saturday", sv: "Lördag", hours: "12:00 – 22:00" },
  { day: "Sunday", sv: "Söndag", hours: "12:00 – 21:00" },
];

const Footer = () => {
  const { t } = useLanguage();
  const today = new Date().getDay(); // 0=Sun, 1=Mon...
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <footer className="bg-secondary border-t border-border py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logoNew} alt="Spice Villa" className="h-12" width={96} height={48} loading="lazy" decoding="async" />
              <div>
                <span className="font-serif text-lg text-foreground">Spice Villa</span>
                <span className="block text-[10px] text-primary font-medium tracking-[0.2em] uppercase">SPÅNGA</span>
              </div>
            </div>
            <h4 className="font-serif text-lg text-foreground mb-4">{t("Kontaktinformation", "Contact Information")}</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p>Tenstagången 25</p>
                  <p>163 64 Spånga, Sweden</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+46764222770" className="hover:text-primary transition-colors">+46 76 422 27 70</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:info@spicevillaspanga.se" className="hover:text-primary transition-colors">info@spicevillaspanga.se</a>
              </div>
            </div>
            <span className="mt-4 inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
              100% Halal
            </span>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4 flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              {t("Öppettider", "Opening Hours")}
            </h4>
            <div className="space-y-2 text-sm">
              {OPENING_HOURS.map((item, i) => (
                <div
                  key={item.day}
                  className={`flex justify-between py-1.5 px-2 rounded ${
                    i === todayIndex
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}
                >
                  <span>{t(item.sv, item.day)}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Getting Here */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">{t("Hitta Hit", "Getting Here")}</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <Train size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{t("Tunnelbana", "Metro")}</p>
                  <p>{t("Tensta station (Blå linjen) — 5 min promenad", "Tensta station (Blue Line) — 5 min walk")}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Bus size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{t("Buss", "Bus")}</p>
                  <p>{t("Linje 179, 514 — hållplats Tenstagången", "Lines 179, 514 — stop at Tenstagången")}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Car size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">{t("Bil", "Driving")}</p>
                  <p>{t("Gratis parkering utanför restaurangen", "Free parking available outside the restaurant")}</p>
                </div>
              </div>
            </div>
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
