import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ChevronDown, ChevronUp } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const COOKIE_KEY = "spicevilla_cookie_consent";

interface CookiePrefs {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (p: CookiePrefs) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(p));
    setVisible(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const acceptSelected = () => save(prefs);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.35 }}
        className="fixed bottom-4 left-4 z-[100] w-[320px] max-w-[calc(100vw-2rem)] rounded-xl border border-border bg-card shadow-2xl"
      >
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center gap-2 mb-2">
            <Cookie size={18} className="text-primary shrink-0" />
            <span className="text-sm font-semibold text-foreground">
              {t("Vi använder cookies", "We use cookies")}
            </span>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            {t(
              "Vi använder cookies för att förbättra din upplevelse, analysera trafik och för marknadsföring.",
              "We use cookies to improve your experience, analyze traffic, and for marketing."
            )}{" "}
            <Link to="/integritetspolicy" className="text-primary underline underline-offset-2" onClick={() => setVisible(false)}>
              {t("Läs mer", "Learn more")}
            </Link>
          </p>

          {/* Toggle details */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-3"
          >
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            {t("Hantera inställningar", "Manage settings")}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden mb-3"
              >
                <div className="space-y-2.5">
                  {/* Necessary */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-foreground">
                        {t("Nödvändiga", "Necessary")}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {t("Krävs för att sidan ska fungera", "Required for the site to work")}
                      </p>
                    </div>
                    <Switch checked disabled className="opacity-60" />
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-foreground">
                        {t("Analys", "Analytics")}
                      </p>
                      <p className="text-[10px] text-muted-foreground">Google Analytics</p>
                    </div>
                    <Switch
                      checked={prefs.analytics}
                      onCheckedChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
                    />
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium text-foreground">
                        {t("Marknadsföring", "Marketing")}
                      </p>
                      <p className="text-[10px] text-muted-foreground">Meta Pixel</p>
                    </div>
                    <Switch
                      checked={prefs.marketing}
                      onCheckedChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttons */}
          <div className="flex gap-2">
            {expanded && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs h-8"
                onClick={acceptSelected}
              >
                {t("Spara val", "Save")}
              </Button>
            )}
            <Button
              size="sm"
              className="flex-1 text-xs h-8"
              onClick={acceptAll}
            >
              {t("Acceptera alla", "Accept all")}
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CookieConsent;
