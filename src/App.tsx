import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Portfolio, { AboutPage, ContactPage, EducationPage, ExperiencePage, HomePage, ReflectionPage, SkillsPage } from "@/components/Portfolio";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollUpButton from "@/components/ScrollUpButton";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Portfolio><HomePage /></Portfolio>} />
          <Route path="/about" element={<Portfolio><AboutPage /></Portfolio>} />
          <Route path="/education" element={<Portfolio><EducationPage /></Portfolio>} />
          <Route path="/skills" element={<Portfolio><SkillsPage /></Portfolio>} />
          <Route path="/experience" element={<Portfolio><ExperiencePage /></Portfolio>} />
          <Route path="/reflection" element={<Portfolio><ReflectionPage /></Portfolio>} />
          <Route path="/contact" element={<Portfolio><ContactPage /></Portfolio>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollUpButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
