import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Presentation from "./pages/Presentation";
import Produits from "./pages/Produits";
import Additifs from "./pages/Additifs";
import ProductDetail from "./pages/ProductDetail";
import Entretien from "./pages/Entretien";
import Automobile from "./pages/Automobile";
import Moto from "./pages/Moto";
import Industrie from "./pages/Industrie";
import Marine from "./pages/Marine";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/produits/additifs" element={<Additifs />} />
          <Route path="/produits/additifs/:productId" element={<ProductDetail />} />
          <Route path="/produits/entretien" element={<Entretien />} />
          <Route path="/produits/entretien/:productId" element={<ProductDetail />} />
          <Route path="/produits/automobile" element={<Automobile />} />
          <Route path="/produits/automobile/:productId" element={<ProductDetail />} />
          <Route path="/produits/moto" element={<Moto />} />
          <Route path="/produits/moto/:productId" element={<ProductDetail />} />
          <Route path="/produits/industrie" element={<Industrie />} />
          <Route path="/produits/industrie/:productId" element={<ProductDetail />} />
          <Route path="/produits/marine" element={<Marine />} />
          <Route path="/produits/marine/:productId" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
