import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowWeWork from './components/HowWeWork';
import SourcingMap from './components/SourcingMap';
import ProductRange from './components/ProductRange';
import GrowthJourney from './components/GrowthJourney';
import WhyChoose from './components/WhyChoose';
import Founder from './components/Founder';
import ConnectForm from './components/ConnectForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1318] relative selection:bg-[#FF5722] selection:text-white">
      {/* Fixed Top Luxury Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full pt-16">
        {/* 1. Home Page (Hero Section with Trust Metrics) */}
        <Hero />

        {/* 2. How We Work (6-Step Sourcing & Order Process) */}
        <HowWeWork />

        {/* 3. Sourcing Hubs (Pan-India 3D Sourcing Map) */}
        <SourcingMap />

        {/* 4. Product Range (Interactive Expanding Flex Carousel) */}
        <ProductRange />

        {/* 5. Growth Journey (The Infinite Graph Curve Trajectory: 1995 to 2026) */}
        <GrowthJourney />

        {/* 6. Why Choose Us (The Institutional Standard & 7 Strategic Pillars) */}
        <WhyChoose />

        {/* 7. Founder & Vision (Mr. Vineet Kr. Taparia) */}
        <Founder />

        {/* 8. Sourcing Inquiry Form */}
        <ConnectForm />
      </main>

      {/* 9. Corporate Legal Footer */}
      <Footer />
    </div>
  );
}
