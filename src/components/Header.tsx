import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "Hem", href: "/" },
  { label: "Meny", href: "/meny" },
  { label: "Lunch", href: "/lunch" },
  { label: "Kontakt", href: "/kontakt" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Spice Villa" className="h-10" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
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
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Beställ via Uber Eats
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-background border-t border-border px-4 pb-6 pt-2 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className={`block text-base font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-primary text-primary-foreground px-5 py-3 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Beställ via Uber Eats
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
