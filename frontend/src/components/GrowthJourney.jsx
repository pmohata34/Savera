import React, { useState, useRef } from 'react';

export default function GrowthJourney() {
  const [activeStation, setActiveStation] = useState(5); // Default to 2026 present platform
  const scrollContainerRef = useRef(null);

  const stations = [
    {
      year: '1995',
      stationNum: 'STOP 01',
      title: 'The Beginning of Savera Marketing',
      phase: 'Founding Terminal',
      description: 'Savera Marketing was established as a proprietorship, beginning its journey with salwar suits and unstitched dress materials.',
      focus: 'Salwar Suits & Unstitched Materials',
      icon: '🌱'
    },
    {
      year: '1999',
      stationNum: 'STOP 02',
      title: 'Expansion into Bed Sheets',
      phase: 'Portfolio Expansion',
      description: 'Expanded our product range to include bed sheets, marking another step in the growth of our textile business.',
      focus: 'Home Textiles & Bed Linens',
      icon: '🛏️'
    },
    {
      year: '2003',
      stationNum: 'STOP 03',
      title: 'Savera Textile Agency',
      phase: 'Ethnic Corridors',
      description: 'Launched Savera Textile Agency, focusing on sarees and lehengas and further expanding our presence in the ethnic wear segment.',
      focus: 'Sarees & Lehengas',
      icon: '✨'
    },
    {
      year: '2006',
      stationNum: 'STOP 04',
      title: 'Savera Trade Solutions',
      phase: 'Commercial Diversification',
      description: 'Established Savera Trade Solutions with a focus on Ladies formal bottom wear, diversifying our product portfolio.',
      focus: 'Ladies Formal Bottom Wear',
      icon: '👗'
    },
    {
      year: '2010',
      stationNum: 'STOP 05',
      title: 'Expansion into Fabric Sourcing',
      phase: 'Pan-India Hub Integration',
      description: 'Entered fabric sourcing and developed business connections across major textile hubs, including Surat, Banaras, Jaipur and Ahmedabad.',
      focus: 'Mill Fabric Sourcing Across 4 States',
      icon: '🏭'
    },
    {
      year: '2026',
      stationNum: 'STOP 06',
      title: 'Formation of Savera Tex Solution LLP',
      phase: 'Present Institutional Platform',
      description: 'Established Savera Tex Solution LLP, bringing together years of industry experience and business relationships under a structured business platform, with a broader vision of connecting manufacturers, retailers and wholesalers across India and international markets.',
      focus: 'Pan-India & International Trade Agency',
      icon: '🏛️'
    }
  ];

  const scrollToStation = (idx) => {
    setActiveStation(idx);
    if (scrollContainerRef.current) {
      const children = scrollContainerRef.current.children;
      if (children[idx]) {
        children[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = activeStation === 0 ? stations.length - 1 : activeStation - 1;
    scrollToStation(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeStation === stations.length - 1 ? 0 : activeStation + 1;
    scrollToStation(nextIdx);
  };

  return (
    <section id="growth-journey" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#fbd7b4]/50 pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#f7e5d4] to-white border border-[#f8b47d]/60 text-[#f16701] text-xs font-bold uppercase tracking-widest shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#f16701] animate-ping"></span>
              <span>1995 to 2026 • Thirty-Year Route</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1318] tracking-tight">
              Our Growth Journey
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Follow our horizontal milestone route from our founding origins in 1995 through three decades of relationship-building across India's textile landscape.
            </p>
          </div>

          {/* Bus Line Interactive Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="px-4 py-2.5 rounded-full bg-white border border-[#f8b47d]/50 text-neutral-700 hover:text-[#f16701] hover:border-[#f16701] shadow-xs flex items-center gap-1.5 text-xs font-bold transition cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Prev Station</span>
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#f16701] to-[#f48129] text-white shadow-md glow-orange flex items-center gap-1.5 text-xs font-bold hover:opacity-95 transition cursor-pointer"
            >
              <span>Next Station</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── OUR STORY EXECUTIVE SUMMARY ── */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-[#FAF8F5] to-[#f7e5d4]/40 border border-[#f8b47d]/40 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f16701]"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f16701]">
              Our Story • Archival Narrative
            </span>
          </div>
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
            Our journey in the textile industry began in 1995 with <strong>Savera Marketing</strong>, established as a proprietorship by Mr. Vineet Kr. Taparia. We started with salwar suits and unstitched dress materials, laying the foundation for what would gradually grow into a wider textile business. In 1999, we expanded our product range to include bed sheets, followed by an important step in 2003 with the launch of Savera Textile Agency, focusing on sarees and lehengas. As our business continued to develop, we introduced Savera Trade Solutions in 2006, expanding into ladies formal bottom wear and further strengthening our presence in the textile market. In 2010, we expanded into fabric sourcing across major textile hubs, including Surat, Banaras, Jaipur and Ahmedabad, strengthening our connections with different textile markets. Over the years, our experience, product knowledge and business relationships have helped us build a wider network across the industry. In 2026, this journey reached another important milestone with the formation of <strong>Savera Tex Solution LLP</strong>, bringing our experience and business operations together under a structured business platform. Today, we continue our journey as a textile agency, connecting manufacturers with retailers and wholesalers across India and international markets. While our business has evolved over three decades, our commitment to trust, goodwill and long-term business relationships remains unchanged.
          </p>
        </div>

        {/* ── THE HORIZONTAL BUS-LINE / METRO TRANSIT ROUTE ── */}
        <div className="space-y-8">

          {/* Interactive Station Transit Bar */}
          <div className="relative py-6">
            {/* The Continuous Glowing Bus Line Track */}
            <div className="hidden md:block absolute top-1/2 left-4 right-4 h-2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#f7e5d4] via-[#f8b47d] to-[#f16701] shadow-inner">
              {/* Animated Progress Beam */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-white/70 blur-xs rounded-full animate-bus-line-pulse"></div>
              </div>
            </div>

            {/* Station Stops Grid / Rapid Switcher */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 relative z-10">
              {stations.map((st, idx) => {
                const isActive = activeStation === idx;
                return (
                  <button
                    key={st.year}
                    onClick={() => scrollToStation(idx)}
                    className={`p-3.5 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-b from-white to-[#f7e5d4] border-[#f16701] shadow-lg ring-2 ring-[#f16701]/30 transform -translate-y-1'
                        : 'bg-white/90 hover:bg-white border-[#f8b47d]/40 shadow-2xs hover:border-[#f16701]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase text-[#f16701]">
                        {st.stationNum}
                      </span>
                      <span className="text-sm">{st.icon}</span>
                    </div>
                    <div className="text-lg font-extrabold text-[#0F1318]">
                      {st.year}
                    </div>
                    <div className="text-[11px] font-medium text-neutral-500 truncate mt-0.5">
                      {st.title.replace('The Beginning of ', '').replace('Formation of ', '')}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Horizontal Station Cards Carousel (Bus Route Stops) */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory hide-scrollbar"
          >
            {stations.map((st, idx) => {
              const isActive = activeStation === idx;
              return (
                <div
                  key={st.year}
                  onClick={() => setActiveStation(idx)}
                  className={`min-w-[320px] sm:min-w-[380px] max-w-[400px] flex-shrink-0 snap-center p-7 sm:p-8 rounded-3xl transition-all duration-500 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-gradient-to-br from-white via-white to-[#f7e5d4]/60 border-[#f16701] shadow-xl ring-2 ring-[#f16701]/25'
                      : 'bg-white/80 hover:bg-white border-[#f8b47d]/40 shadow-xs hover:shadow-md'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Bus Stop Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#f16701] to-[#f79a52] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                          {idx + 1}
                        </span>
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-wider text-[#f16701]">
                            {st.phase}
                          </span>
                          <span className="block text-2xl font-black text-[#0F1318] leading-tight">
                            {st.year}
                          </span>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/50">
                        {st.stationNum}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0F1318] pt-2">
                      {st.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {st.description}
                    </p>
                  </div>

                  {/* Bottom Stop Deliverable / Milestone */}
                  <div className="pt-5 mt-6 border-t border-[#fbd7b4]/40 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-neutral-500">Core Milestone</span>
                    <span className="text-xs font-bold text-neutral-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#f16701]"></span>
                      {st.focus}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── MOVING FORWARD TERMINUS CARD (From Document) ── */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52] text-white shadow-xl glow-orange flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl text-center md:text-left">
              <span className="text-[11px] font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full text-white inline-block">
                Station Terminus &amp; Beyond
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Moving Forward
              </h3>
              <p className="text-sm sm:text-base text-white/95 leading-relaxed font-normal">
                Building on our experience since 1995, we continue to strengthen textile connections, develop new business opportunities and create lasting relationships across the industry.
              </p>
            </div>

            <a
              href="#connect"
              className="px-6 py-3.5 rounded-full bg-white text-[#f16701] hover:bg-[#FAF8F5] font-extrabold text-xs uppercase tracking-wider shadow-lg transition transform hover:scale-105 flex-shrink-0 flex items-center gap-2"
            >
              <span>Connect with Our Agency</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
