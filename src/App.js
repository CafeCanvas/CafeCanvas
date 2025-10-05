import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CreativeShowcase from "./components/CreativeShowcase";
import ServicesSection from "./components/ServicesSection";
import InteractiveStats from "./components/InteractiveStats";
import PricingSection from "./components/PricingSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CreativeShowcase />
      <ServicesSection />
      <InteractiveStats />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;