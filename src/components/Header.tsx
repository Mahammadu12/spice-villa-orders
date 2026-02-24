import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoNew from "@/assets/spice-villa-logo.png";
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

const orderLinks = [
  { label: "Uber Eats", href: "https://www.ubereats.com/se/store/spice-villa/Kl8Zy8-nVg2eLxlWCDNlZg", color: "bg-primary text-primary-foreground hover:bg-primary/90" },
  { label: "Foodora", href: "https://www.foodora.se/restaurant/ljf2/spice-villa-ljf2", color: "bg-[hsl(338,90%,46%)] text-white hover:bg-[hsl(338,90%,40%)]" },
  { label: "Qopla", href: "https://qopla.com/restaurant/spice-villa-spanga/qZkwaaE0oN/order", color: "bg-[hsl(142,70%,35%)] text-white hover:bg-[hsl(142,70%,30%)]" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();
  const navLinks = getNavLinks(t);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setOrderOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-border/40"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="hidden sm:block">
            <span className="font-serif text-lg md:text-xl text-foreground tracking-wide">
              Spice Villa
            </span>
            <span className="block text-[10px] text-primary font-medium tracking-[0.2em] uppercase -mt-0.5">
              {t("Restaurang & Catering", "Restaurant & Catering")}
            </span>
          </div>
          <span className="sm:hidden font-serif text-lg text-foreground tracking-wide">
            Spice Villa
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative px-3 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors duration-200 rounded-md ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-white/5"
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}

          {/* Order dropdown */}
          <div className="relative ml-1">
            <button
              onClick={() => setOrderOpen(!orderOpen)}
              onBlur={() => setTimeout(() => setOrderOpen(false), 150)}
              className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-[13px] font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-primary/20"
            >
              {t("Beställ", "Order")}
              <ChevronDown size={14} className={`transition-transform duration-200 ${orderOpen ? "rotate-180" : ""}`} />
            </button>
            {orderOpen && (
              <div className="absolute right-0 top-full mt-2 bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl shadow-black/30 overflow-hidden min-w-[180px] animate-in fade-in slide-in-from-top-2 duration-200">
                 {orderLinks.map((link) => (
                   <a
                     key={link.label}
                     href={link.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-3 px-4 py-3 text-sm font-bold hover:bg-white/5 transition-colors border-b border-border/20 last:border-0"
                   >
                     <span
                       className="tracking-tight"
                       style={{
                         color: link.label === "Uber Eats" ? "#06C167" : link.label === "Foodora" ? "#D70F64" : "#2DB84B",
                       }}
                     >
                       {link.label === "Uber Eats" ? (
                         <><span className="font-bold">Uber</span> <span className="font-normal text-card-foreground">Eats</span></>
                       ) : link.label === "Foodora" ? (
                         "foodora"
                       ) : (
                         "Qopla"
                       )}
                     </span>
                   </a>
                 ))}
              </div>
            )}
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            className="ml-3 flex items-center bg-white/5 rounded-full p-0.5 border border-white/10 hover:border-primary/30 transition-colors"
            aria-label="Toggle language"
          >
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 ${lang === "sv" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"}`}>
              SV
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 ${lang === "en" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground"}`}>
              EN
            </span>
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setLang(lang === "sv" ? "en" : "sv")}
            className="flex items-center bg-white/5 rounded-full p-0.5 border border-white/10"
            aria-label="Toggle language"
          >
            <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${lang === "sv" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
              SV
            </span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-bold transition-all ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
              EN
            </span>
          </button>
          <button
            className="text-foreground p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border/30 px-4 pb-6 pt-3 space-y-1 animate-in slide-in-from-top-2 duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm font-medium tracking-wide uppercase rounded-lg transition-colors ${
                location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-foreground hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 space-y-2">
            {orderLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center px-5 py-3 rounded-lg text-sm font-semibold transition-colors ${link.color}`}
              >
                {t("Beställ via ", "Order via ")}{link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
