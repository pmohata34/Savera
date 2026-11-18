import React, { useState, useEffect } from 'react';
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
import BuyerGuide from './components/BuyerGuide';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const path = window.location.pathname;
      return hash === '#buyer-guide' || path === '/buyer-guide' ? 'buyer-guide' : 'home';
    }
    return 'home';
  });

  const navigateTo = (view, targetHash = '') => {
    if (view === 'buyer-guide') {
      setCurrentView('buyer-guide');
      window.location.hash = '#buyer-guide';
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setCurrentView('home');
      if (targetHash) {
        window.location.hash = targetHash;
        setTimeout(() => {
          const el = document.querySelector(targetHash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.location.hash = '#';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (hash === '#buyer-guide' || path === '/buyer-guide') {
        setCurrentView('buyer-guide');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (
        !hash ||
        hash === '#' ||
        hash === '#hero' ||
        hash === '#how-we-work' ||
        hash === '#sourcing-map' ||
        hash === '#products' ||
        hash === '#growth-journey' ||
        hash === '#why-choose' ||
        hash === '#founder' ||
        hash === '#testimonials' ||
        hash === '#connect'
      ) {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F1318] relative selection:bg-[#f16701] selection:text-white overflow-x-hidden">
      {/* Fixed Top Luxury Navbar */}
      <Navbar currentView={currentView} onNavigate={navigateTo} />

      {/* Main Content Sections (pt-[82px] ensures exactly 10px space between navbar and page) */}
      <main className="w-full pt-[82px]">
        {currentView === 'buyer-guide' ? (
          <BuyerGuide 
            onBack={() => navigateTo('home')} 
            onInquire={() => navigateTo('home', '#connect')} 
          />
        ) : (
          <>
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
          </>
        )}
      </main>

      {/* Corporate Legal Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
