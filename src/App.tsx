
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Solutions from "./pages/Solutions";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import ElectoralSolution from "./pages/ElectoralSolution";
import BankingSolution from "./pages/BankingSolution";
import BorderSolution from "./pages/BorderSolution";
import Noticias from "./pages/Noticias";
import NoticiaDetalhe from "./pages/NoticiaDetalhe"; 
import ScrollProgressBar from "@/components/ScrollProgressBar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgressBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solucoes" element={<Solutions />} />
          <Route path="/solucoes/cadastramento-eleitoral" element={<ElectoralSolution />} />
          <Route path="/solucoes/instituicoes-financeiras" element={<BankingSolution />} />
          <Route path="/solucoes/controle-fronteiras" element={<BorderSolution />} />
          <Route path="/quem-somos" element={<AboutUs />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/privacidade" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticias/:slug" element={<NoticiaDetalhe />} /> {/* ✅ detalhe */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
