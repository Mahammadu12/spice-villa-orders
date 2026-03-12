import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";

const Menu = lazy(() => import("./pages/Menu"));
const Lunch = lazy(() => import("./pages/Lunch"));
const Contact = lazy(() => import("./pages/Contact"));
const Catering = lazy(() => import("./pages/Catering"));
const Iftar = lazy(() => import("./pages/Iftar"));
const About = lazy(() => import("./pages/About"));

const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Ramadan 2026 ends approximately March 30, 2026
const RAMADAN_END_DATE = new Date("2026-03-31");
const isRamadanActive = () => new Date() <= RAMADAN_END_DATE;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <FloatingParticles />
          <Header />
          <main>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/meny" element={<Menu />} />
                <Route path="/lunch" element={<Lunch />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/bokning" element={<Contact />} />
                <Route path="/catering" element={<Catering />} />
                <Route path="/om-oss" element={<About />} />
                
                <Route path="/villkor" element={<TermsOfService />} />
                <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
                {isRamadanActive() && <Route path="/iftar" element={<Iftar />} />}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
