import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoNew from "@/assets/logo-new.png";
import { useLanguage } from "@/contexts/LanguageContext";

// Ramadan 2026 ends approximately March 30, 2026
const RAMADAN_END_DATE = new Date("2026-03-31");
const isRamadanActive = () => new Date() <= RAMADAN_END_DATE;

const getNavLinks = (t: (sv: string, en: string) => string) => [
  { label: t("Hem", "Home"), href: "/" },
  { label: t("Meny", "Menu"), href: "/meny" },
  { label: t("Lunch", "Lunch"), href: "/lunch" },
  { label: t("Om Oss", "About"), href: "/om-oss" },
  ...(isRamadanActive() ? [{ label: "Iftar", href: "/iftar" }] : []),
  { label: "Catering", href: "/catering" },
  { label: t("Kontakt", "Contact"), href: "/kontakt" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();
  const navLinks = getNavLinks(t);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-border/30">
      <div className="w-full flex items-center justify-between h-20 md:h-24 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoNew} alt="Spice Villa" className="h-10 md:h-14 drop-shadow-[0_0_12px_hsl(var(--primary)/0.3)] bg-white rounded p-1" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-primary/90 transition-colors">
            Uber Eats
          </a>
          <a href="https://www.foodora.se/restaurant/ljf2/spice-villa-ljf2" target="_blank" rel="noopener noreferrer" className="bg-[hsl(338,90%,46%)] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-[hsl(338,90%,40%)] transition-colors">
            Foodora
          </a>
          <a href="https://qopla.com/restaurant/spice-villa-spanga/qZkwaaE0oN/order" target="_blank" rel="noopener noreferrer" className="bg-[hsl(142,70%,35%)] text-white px-4 py-2 rounded text-sm font-semibold hover:bg-[hsl(142,70%,30%)] transition-colors">
            Qopla
          </a>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            className="ml-2 flex items-center bg-secondary rounded-full p-0.5 border border-border"
            aria-label="Toggle language"
          >
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${lang === "sv" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
              SV
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
              EN
            </span>
          </button>
        </nav>

        {/* Mobile toggle */}
        <div className="flex items-center gap-3 md:hidden">
          {/* Language Toggle Mobile */}
          <button
            onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            className="flex items-center bg-secondary rounded-full p-0.5 border border-border"
            aria-label="Toggle language"
          >
            <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition-colors ${lang === "sv" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
              SV
            </span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
              EN
            </span>
          </button>
          <button className="text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-background border-t border-border px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => setOpen(false)} className={`block text-base font-medium tracking-wide uppercase transition-colors hover:text-primary ${location.pathname === link.href ? "text-primary" : "text-foreground/80"}`}>
              {link.label}
            </Link>
          ))}
          <a href="https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg" target="_blank" rel="noopener noreferrer" className="block text-center bg-primary text-primary-foreground px-5 py-3 rounded text-sm font-semibold hover:bg-primary/90 transition-colors">
            {t("Beställ via Uber Eats", "Order via Uber Eats")}
          </a>
          <a href="https://www.foodora.se/restaurant/ljf2/spice-villa-ljf2" target="_blank" rel="noopener noreferrer" className="block text-center bg-[hsl(338,90%,46%)] text-white px-5 py-3 rounded text-sm font-semibold hover:bg-[hsl(338,90%,40%)] transition-colors">
            {t("Beställ via Foodora", "Order via Foodora")}
          </a>
          <a href="https://qopla.com/restaurant/spice-villa-spanga/qZkwaaE0oN/order" target="_blank" rel="noopener noreferrer" className="block text-center bg-[hsl(142,70%,35%)] text-white px-5 py-3 rounded text-sm font-semibold hover:bg-[hsl(142,70%,30%)] transition-colors">
            {t("Beställ via Qopla", "Order via Qopla")}
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
