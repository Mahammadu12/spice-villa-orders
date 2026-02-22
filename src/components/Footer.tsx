import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Spice Villa" className="h-12 mb-4" />
            <p className="text-muted-foreground text-sm text-center md:text-left">
              Autentisk sydasiatisk mat — Indisk · Pakistansk · Bengalisk · Afghansk
            </p>
            <span className="mt-3 inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
              100% Halal
            </span>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg text-foreground mb-3">Öppettider</h4>
            <p className="text-muted-foreground text-sm">Mån–Fre: 11:00 – 21:00</p>
            <p className="text-muted-foreground text-sm">Lör–Sön: 12:00 – 21:00</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg text-foreground mb-3">Kontakt</h4>
            <p className="text-muted-foreground text-sm">Adress kommer snart</p>
            <p className="text-muted-foreground text-sm">Tel: Kommer snart</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Spice Villa. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
