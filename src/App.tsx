import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Lunch from "./pages/Lunch";
import Contact from "./pages/Contact";

import Catering from "./pages/Catering";
import Iftar from "./pages/Iftar";

// Ramadan 2026 ends approximately March 30, 2026
const RAMADAN_END_DATE = new Date("2026-03-31");
const isRamadanActive = () => new Date() <= RAMADAN_END_DATE;
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/meny" element={<Menu />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/bokning" element={<Contact />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/om-oss" element={<About />} />
            {isRamadanActive() && <Route path="/iftar" element={<Iftar />} />}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
