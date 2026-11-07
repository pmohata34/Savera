import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowWeWork from './components/HowWeWork';
import SourcingMap from './components/SourcingMap';
import ProductRange from './components/ProductRange';
import GrowthJourney from './components/GrowthJourney';
import WhyChoose from './components/WhyChoose';
import Founder from './components/Founder';
import MissionVision from './components/MissionVision';
import Testimonials from './components/Testimonials';
import ConnectForm from './components/ConnectForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1318] relative selection:bg-[#f16701] selection:text-white overflow-x-hidden">
      {/* Fixed Top Luxury Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="w-full pt-18">
        {/* 1. About Us (Hero Section with Heritage Positioning & Metrics) */}
        <Hero />

        {/* 2. How We Work (6-Stage Sourcing Pipeline) */}
        <HowWeWork />

        {/* 3. Sourcing Hubs (Pan-India 6 Major Production Centers) */}
        <SourcingMap />

        {/* 4. Product Range (5 Collections Interactive Flex Carousel) */}
        <ProductRange />

        {/* 5. Our Story & Growth Journey (Horizontal Bus Line Route: 1995 to 2026) */}
        <GrowthJourney />

        {/* 6. Why Choose Us (7 Strategic Pillars & 3 Decades of Experience) */}
        <WhyChoose />

        {/* 7. Message from Our Founder (Mr. Vineet Kr. Taparia) */}
        <Founder />

        {/* 8. Mission & Vision */}
        <MissionVision />

        {/* 9. Verified Client Testimonials (Google Business Reviews) */}
        <Testimonials />

        {/* 10. Commercial Sourcing Inquiry Form */}
        <ConnectForm />
      </main>

      {/* 10. Corporate Legal Footer */}
      <Footer />
    </div>
  );
}
