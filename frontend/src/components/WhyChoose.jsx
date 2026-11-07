import React, { useState } from 'react';
import PerspectiveCarousel from './ui/perspective-carousel';

export default function WhyChoose() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const pillars = [
    {
      title: 'Textile Market Experience Since 1995',
      tag: 'Pillar 01 • Heritage',
      subtitle: '30+ Years of Practical Industry Mastery',
      description: 'Our journey in the textile market began in 1995. Over the years, we have developed a practical understanding of the industry, its markets, business practices and the requirements of different businesses. This experience helps us guide both manufacturers and buyers in exploring suitable business opportunities.'
    },
    {
      title: 'Connecting Manufacturers with Genuine Buyers',
      tag: 'Pillar 02 • Verified Network',
      subtitle: 'Targeted Commercial Introductions',
      description: 'We help manufacturers connect with genuine retailers and wholesalers who have relevant product requirements. Our focus is on developing reliable business connections that can grow into long-term professional relationships.'
    },
    {
      title: 'Saving Time Through the Right Connections',
      tag: 'Pillar 03 • Operational Speed',
      subtitle: 'Direct Loom Reach Without Intermediary Lag',
      description: 'Finding suitable manufacturers or genuine buyers can take considerable time and effort. Through our established business network, we help both sides explore relevant connections more efficiently, reducing the need for independent searching.'
    },
    {
      title: 'Support for New and Growing Businesses',
      tag: 'Pillar 04 • Incubation',
      subtitle: 'Assisting New Retail Counters & Showrooms',
      description: 'Starting a new textile shop or expanding an existing business requires the right product connections and market understanding. With our experience since 1995, we aim to assist new retailers and growing businesses in exploring suitable manufacturers, while also helping manufacturers connect with new business opportunities.'
    },
    {
      title: 'Access to Multiple Textile Markets',
      tag: 'Pillar 05 • Pan-India Corridors',
      subtitle: 'Surat, Banaras, Jaipur, Ahmedabad & More',
      description: 'With connections across major textile hubs, we help buyers explore manufacturers from different markets and enable manufacturers to reach potential buyers beyond their existing business networks. This creates opportunities to expand business connections across different regions.'
    },
    {
      title: 'Transparency and Clear Communication',
      tag: 'Pillar 06 • Pure Ethics',
      subtitle: 'Clear Terms & Honest Commercial Practice',
      description: 'We believe that trust is essential for successful business relationships. We focus on clear communication between manufacturers and buyers, helping both sides understand product requirements, commercial discussions and agreed business terms.'
    },
    {
      title: 'Opportunities for Mutual Business Growth',
      tag: 'Pillar 07 • Shared Value',
      subtitle: 'Generational Partnerships Built for Longevity',
      description: 'Our role is not limited to making introductions. We aim to build connections that create value for both sides. By bringing manufacturers and buyers together, we support opportunities for new business, stronger partnerships and long-term growth in the textile industry.'
    }
  ];

  return (
    <section id="why-choose" className="py-14 sm:py-18 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FDF0E5] via-[#FAF8F5] to-white border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/25 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            Why Choose <span className="font-playfair font-bold inline-flex items-baseline gap-1.5"><span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span></span>?
          </h2>

          <p className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52]">
            Three Decades of Experience. One Goal: Better Business Connections.
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
            With experience in the textile market since 1995, <strong className="font-playfair font-bold text-sm inline-flex items-baseline gap-1"><span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span></strong> understands the importance of connecting the right manufacturers with the right buyers. Rotate through our 7 core strategic pillars below.
          </p>
        </div>

        {/* ── 3D PERSPECTIVE CAROUSEL (Vengence UI Perspective Carousel with Text Cards) ── */}
        <div className="py-2">
          <PerspectiveCarousel
            items={pillars}
            activeIndex={activePillarIndex}
            onActiveIndexChange={setActivePillarIndex}
            loop={true}
            slideWidth={340}
            rotationStep={36}
            inactiveScale={0.84}
            showControls={true}
            showDots={true}
          />
        </div>

      </div>
    </section>
  );
}
