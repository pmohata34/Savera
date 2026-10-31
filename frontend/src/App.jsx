import React from 'react';
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
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1318] relative selection:bg-[#FF5722] selection:text-white">
      {/* 1. Glassmorphism Pill Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* 2. Hero Section with Trust Metrics */}
        <Hero />

        {/* 3. Why Choose Us & Comparative Difference Matrix */}
        <WhyChoose />

        {/* 4. How We Work (6-Step Sourcing & Order Process) */}
        <HowWeWork />

        {/* 5. Pan-India 3D Sourcing Map (6 Textile Hubs) */}
        <SourcingMap />

        {/* 6. Product Range Showcase */}
        <ProductRange />

        {/* 7. Founder & Vision (Mr. Vineet Kr. Taparia) */}
        <Founder />

        {/* 8. Our Growth Journey (The Infinite Graph Curve 2026 -> 1995) */}
        <GrowthJourney />

        {/* 9. Interactive Sourcing Inquiry Form */}
        <ConnectForm />
      </main>

      {/* 10. Corporate Legal Footer */}
      <Footer />
    </div>
  );
}
