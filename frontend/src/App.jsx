import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowWeWork from './components/HowWeWork';
import SourcingMap from './components/SourcingMap';
import ProductRange from './components/ProductRange';
import Founder from './components/Founder';
import GrowthJourney from './components/GrowthJourney';
import ComparativeDifference from './components/ComparativeDifference';
import WhyChoose from './components/WhyChoose';
import ConnectForm from './components/ConnectForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1318] relative selection:bg-[#FF5722] selection:text-white">
      {/* 1. Fixed Top Luxury Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full pt-16">
        {/* 2. Hero Section with White Luxury Canvas & Trust Metrics (Clean Picture, Zero Buttons) */}
        <Hero />

        {/* 3. How We Work (6-Step Sourcing & Order Process) */}
        <HowWeWork />

        {/* 4. Pan-India 3D Sourcing Map (6 Textile Hubs) */}
        <SourcingMap />

        {/* 5. Product Range Showcase (Interactive Expanding Flex Carousel) */}
        <ProductRange />

        {/* 6. Founder & Vision (Mr. Vineet Kr. Taparia) */}
        <Founder />

        {/* 7. Our Growth Journey (The Infinite Graph Curve: Upward Flow) */}
        <GrowthJourney />

        {/* 8. The Difference Matrix: Direct Solo Sourcing vs. Partnering with Savera */}
        <ComparativeDifference />

        {/* 9. Why Choose Us: 7 Strategic Pillars of Excellence & Founder Monograph */}
        <WhyChoose />

        {/* 10. Interactive Sourcing Inquiry Form */}
        <ConnectForm />
      </main>

      {/* 11. Corporate Legal Footer */}
      <Footer />
    </div>
  );
}
