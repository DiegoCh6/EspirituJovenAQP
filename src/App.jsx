import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SpecialtiesCarousel from "./components/SpecialtiesCarousel";
import Services from "./components/Services";
// import OurWork from "./components/OurWork";
import AboutUS from "./components/AboutUS";
import ContactUs from "./components/ContactUs";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";

// Simplified App component with default system cursor (custom cursor removed)
const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <div>
        <Hero />
        <SpecialtiesCarousel />
        <Services />
        <AboutUS />
        <ContactUs />
        <Footer theme={theme} />
      </div>
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;
