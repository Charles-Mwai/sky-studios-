import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { BookingProvider } from "./context/BookingContext";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import CategoryDetail from "./pages/CategoryDetail";
import CategoryGallery from "./pages/CategoryGallery";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";

// Scroll restoration helper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App = () => {
  const location = useLocation();

  return (
    <BookingProvider>
      <div className="flex flex-col min-h-screen bg-brand-bg text-brand-text">
        <ScrollToTop />
        
        {/* Navigation bar */}
        <Navbar />
        
        {/* Main Content Area with Page Transitions */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/portraits" element={<CategoryGallery categoryId="portraits" />} />
              <Route path="/portfolio/weddings" element={<CategoryGallery categoryId="weddings" />} />
              <Route path="/portfolio/product" element={<CategoryGallery categoryId="product" />} />
              <Route path="/portfolio/real-estate" element={<CategoryGallery categoryId="real-estate" />} />
              <Route path="/portfolio/fashion" element={<CategoryGallery categoryId="fashion" />} />
              <Route path="/portfolio/corporate" element={<CategoryGallery categoryId="corporate" />} />
              <Route path="/portfolio/drone" element={<CategoryGallery categoryId="drone" />} />
              <Route path="/portfolio/landscape" element={<CategoryGallery categoryId="landscape" />} />
              <Route path="/portfolio/:categoryId" element={<CategoryDetail />} />
              <Route path="/project/:projectId" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Fallback route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </BookingProvider>
  );
};

export default App;
