
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
          {/* Системы организма */}
          <Route path="/systems" element={<NotFound />} />
          <Route path="/systems/cardiovascular" element={<NotFound />} />
          <Route path="/systems/nervous" element={<NotFound />} />
          <Route path="/systems/digestive" element={<NotFound />} />
          <Route path="/systems/respiratory" element={<NotFound />} />
          
          {/* Основные разделы */}
          <Route path="/atlas" element={<NotFound />} />
          <Route path="/atlas/demo" element={<NotFound />} />
          <Route path="/cases" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/forum" element={<NotFound />} />
          <Route path="/consultations" element={<NotFound />} />
          <Route path="/dictionary" element={<NotFound />} />
          
          {/* Аккаунт */}
          <Route path="/login" element={<NotFound />} />
          <Route path="/register" element={<NotFound />} />
          <Route path="/profile" element={<NotFound />} />
          
          {/* Информационные страницы */}
          <Route path="/about" element={<NotFound />} />
          <Route path="/team" element={<NotFound />} />
          <Route path="/faq" element={<NotFound />} />
          <Route path="/contacts" element={<NotFound />} />
          <Route path="/support" element={<NotFound />} />
          <Route path="/privacy" element={<NotFound />} />
          <Route path="/terms" element={<NotFound />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
