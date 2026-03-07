import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import IndustriesSection from "./components/IndustriesSection";
import ServicesSection from "./components/ServicesSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import InteractiveStats from "./components/InteractiveStats";
import PricingSection from "./components/PricingSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import RestaurantHome from "./pages/RestaurantHome";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const Home = () => (
  <>
    <HeroSection />
    <IndustriesSection />
    <ServicesSection />
    <CaseStudiesSection />
    <InteractiveStats />
    <PricingSection />
    <AboutSection />
    <ContactSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<RestaurantHome />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;