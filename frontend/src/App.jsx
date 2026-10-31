import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import HowWeWork from './components/HowWeWork';
import SourcingMap from './components/SourcingMap';
import ProductRange from './components/ProductRange';
import Founder from './components/Founder';
import GrowthJourney from './components/GrowthJourney';
import ConnectForm from './components/ConnectForm';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('savera_theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('savera_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('savera_theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#07090D] text-neutral-100' : 'bg-[#FAF8F5] text-[#0F1318]'} transition-colors duration-300 relative selection:bg-[#FF5722] selection:text-white`}>
      {/* 1. Fixed Top Navbar with Theme Toggle */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content Sections */}
      <main className="w-full pt-16">
        {/* 2. Hero Section with Trust Metrics */}
        <Hero />

        {/* 3. Why Choose Us & Comparative Difference Matrix */}
        <WhyChoose />

        {/* 4. How We Work (6-Step Sourcing & Order Process) */}
        <HowWeWork />

        {/* 5. Pan-India 3D Sourcing Map (6 Textile Hubs) */}
        <SourcingMap />

        {/* 6. Product Range Showcase (4 Animated Product Cards) */}
        <ProductRange />

        {/* 7. Founder & Vision (Mr. Vineet Kr. Taparia) */}
        <Founder />

        {/* 8. Our Growth Journey (The Infinite Graph Curve: Upward Flow) */}
        <GrowthJourney />

        {/* 9. Interactive Sourcing Inquiry Form */}
        <ConnectForm />
      </main>

      {/* 10. Corporate Legal Footer */}
      <Footer />
    </div>
  );
}
