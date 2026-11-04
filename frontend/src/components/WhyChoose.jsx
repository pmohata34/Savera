import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PerspectiveCarousel from './ui/perspective-carousel';

export default function WhyChoose() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const pillars = [
    {
      title: 'Textile Market Experience Since 1995',
      tag: 'Pillar 01 • Heritage',
      subtitle: '30+ Years of Practical Industry Mastery',
      src: '/assets/Sarees.jpeg',
      description: 'Our journey in the textile market began in 1995. Over the years, we have developed a practical understanding of the industry, its markets, business practices and the requirements of different businesses. This experience helps us guide both manufacturers and buyers in exploring suitable business opportunities.'
    },
    {
      title: 'Connecting Manufacturers with Genuine Buyers',
      tag: 'Pillar 02 • Verified Network',
      subtitle: 'Targeted Commercial Introductions',
      src: '/assets/Salwar_Suit.jpeg',
      description: 'We help manufacturers connect with genuine retailers and wholesalers who have relevant product requirements. Our focus is on developing reliable business connections that can grow into long-term professional relationships.'
    },
    {
      title: 'Saving Time Through the Right Connections',
      tag: 'Pillar 03 • Operational Speed',
      subtitle: 'Direct Loom Reach Without Intermediary Lag',
      src: '/assets/Fabrics.jpeg',
      description: 'Finding suitable manufacturers or genuine buyers can take considerable time and effort. Through our established business network, we help both sides explore relevant connections more efficiently, reducing the need for independent searching.'
    },
    {
      title: 'Support for New and Growing Businesses',
      tag: 'Pillar 04 • Incubation',
      subtitle: 'Assisting New Retail Counters & Showrooms',
      src: '/photos/clean_hero.jpg',
      description: 'Starting a new textile shop or expanding an existing business requires the right product connections and market understanding. With our experience since 1995, we aim to assist new retailers and growing businesses in exploring suitable manufacturers, while also helping manufacturers connect with new business opportunities.'
    },
    {
      title: 'Access to Multiple Textile Markets',
      tag: 'Pillar 05 • Pan-India Corridors',
      subtitle: 'Surat, Banaras, Jaipur, Ahmedabad & More',
      src: '/assets/Lehengas.jpeg',
      description: 'With connections across major textile hubs, we help buyers explore manufacturers from different markets and enable manufacturers to reach potential buyers beyond their existing business networks. This creates opportunities to expand business connections across different regions.'
    },
    {
      title: 'Transparency and Clear Communication',
      tag: 'Pillar 06 • Pure Ethics',
      subtitle: 'Clear Terms & Honest Commercial Practice',
      src: '/assets/Indo_Western.jpeg',
      description: 'We believe that trust is essential for successful business relationships. We focus on clear communication between manufacturers and buyers, helping both sides understand product requirements, commercial discussions and agreed business terms.'
    },
    {
      title: 'Opportunities for Mutual Business Growth',
      tag: 'Pillar 07 • Shared Value',
      subtitle: 'Generational Partnerships Built for Longevity',
      src: '/assets/Sarees.jpeg',
      description: 'Our role is not limited to making introductions. We aim to build connections that create value for both sides. By bringing manufacturers and buyers together, we support opportunities for new business, stronger partnerships and long-term growth in the textile industry.'
    }
  ];

  const currentPillar = pillars[activePillarIndex] || pillars[0];

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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#f16701] text-[11px] font-bold uppercase tracking-widest border border-[#f8b47d]/50 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f16701] animate-ping"></span>
            <span>What Sets Us Apart • 3D Perspective</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            Why Choose Savera Tex Solution LLP?
          </h2>

          <p className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52]">
            Three Decades of Experience. One Goal: Better Business Connections.
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
            With experience in the textile market since 1995, <strong>Savera Tex Solution LLP</strong> understands the importance of connecting the right manufacturers with the right buyers. Rotate through our 7 core strategic pillars below.
          </p>
        </div>

        {/* ── 3D PERSPECTIVE CAROUSEL (Vengence UI Perspective Carousel) ── */}
        <div className="py-2">
          <PerspectiveCarousel
            items={pillars}
            activeIndex={activePillarIndex}
            onActiveIndexChange={setActivePillarIndex}
            loop={true}
            slideWidth={280}
            rotationStep={40}
            inactiveScale={0.82}
            showControls={true}
            showDots={true}
          />
        </div>

        {/* ── DETAILED PILLAR CARD (Synchronized with 3D Carousel Selection) ── */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-white to-[#f7e5d4]/40 border border-[#f8b47d]/50 shadow-xl space-y-3 relative overflow-hidden"
            >
              {/* Subtle Ambient Background Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#f16701]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#fbd7b4]/50 pb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/40">
                  {currentPillar.tag}
                </span>
                <span className="text-xs font-semibold text-neutral-500">
                  {currentPillar.subtitle}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#0F1318] pt-1">
                {currentPillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                {currentPillar.description}
              </p>

              <div className="pt-3 border-t border-[#fbd7b4]/40 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f16701]"></span>
                  <span>Direct Loom Representation • Generational Trust</span>
                </span>
                <span className="font-bold text-[#f16701]">
                  Pillar {activePillarIndex + 1} of 7
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
