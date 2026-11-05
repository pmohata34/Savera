import React from 'react';

export default function SourcingMap() {
  const leftHubs = [
    {
      city: 'Kolkata',
      state: 'West Bengal',
      tag: 'Headquarters & Single Office',
      description: '1/C Burman Street, 3rd Floor, Room No. 312. Central operations office managing trade and direct connections across all partner manufacturing hubs.'
    },
    {
      city: 'Surat',
      state: 'Gujarat',
      tag: 'High-Volume Production & Daily Wear',
      description: 'Major composite textile epicenter connecting high-volume synthetic weaves, daily wear sarees, jacquards, and dress materials.'
    },
    {
      city: 'Ahmedabad',
      state: 'Gujarat',
      tag: 'Pure Cottons & Mill Weaves',
      description: 'Renowned textile hub connecting pure cambric cottons, mill-finish fabrics, printed textiles, and commercial garment yardages.'
    }
  ];

  const rightHubs = [
    {
      city: 'Jaipur',
      state: 'Rajasthan',
      tag: 'Ethnic Wear & Handblocks',
      description: 'Sourcing connections for traditional ethnic wear, authentic handblock prints, Sanganeri prints, and contemporary fusion apparel.'
    },
    {
      city: 'Varanasi (Banaras)',
      state: 'Uttar Pradesh',
      tag: 'Heritage Silk Brocades',
      description: 'Centuries of weaving mastery connecting genuine Banarasi Katan silk, organza, tissue georgettes, and ornate bridal sarees.'
    },
    {
      city: 'Bhagalpur',
      state: 'Bihar',
      tag: 'Tussar & Handloom Silks',
      description: 'Specialized regional production corridors for pure Bhagalpuri Tussar silk, textured handloom yardage, and regional artisanal weaves.'
    }
  ];

  return (
    <section id="sourcing-map" className="py-14 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-[#FAF8F5] to-[#FDF0E5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#fbd7b4]/50 pb-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1318] tracking-tight">
              Our Sourcing Hubs
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              Direct commercial connections across India's 6 foremost textile production corridors.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-[#f8b47d]/40 shadow-xs self-start md:self-auto">
            <div className="text-center px-3 border-r border-[#fbd7b4]/60">
              <span className="block text-xl font-extrabold text-[#f16701] leading-none">6</span>
              <span className="text-[9px] font-bold uppercase text-neutral-500">Major Hubs</span>
            </div>
            <div className="text-center px-3">
              <span className="block text-xl font-extrabold text-[#f16701] leading-none">700+</span>
              <span className="text-[9px] font-bold uppercase text-neutral-500">Partner Mills</span>
            </div>
          </div>
        </div>

        {/* 3-Column Symmetrical Layout: 3 Hubs Left | Map Center | 3 Hubs Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

          {/* Left Column: 3 Compact Hub Cards */}
          <div className="lg:col-span-3 space-y-3.5 order-2 lg:order-1">
            {leftHubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#f8b47d]/35 hover:border-[#f16701]/50 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#0F1318] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#f16701]"></span>
                    {hub.city}
                  </h3>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#f7e5d4] text-[#f16701]">
                    {hub.state}
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-[#f16701]">{hub.tag}</p>
                <p className="text-[11px] text-neutral-600 leading-snug font-normal line-clamp-3">
                  {hub.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Column: Prominent India Map */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#f16701]/20 via-[#f8b47d]/15 to-transparent rounded-3xl blur-xl opacity-60"></div>

            <div className="relative bg-white p-4 sm:p-6 rounded-2xl border border-[#fbd7b4]/60 shadow-lg w-full flex flex-col items-center justify-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f16701] mb-2">
                Active Production Corridors (6 Hubs)
              </span>
              <img
                src="/assets/India_Map_Orange.png"
                alt="Pan-India Sourcing Map"
                className="w-full max-h-[380px] sm:max-h-[420px] object-contain drop-shadow-sm hover:scale-102 transition duration-500"
              />
              <div className="mt-3 flex items-center gap-2 text-[11px] text-neutral-500 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f16701]"></span>
                <span>Gujarat, Rajasthan, UP, Bihar &amp; West Bengal</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Compact Hub Cards */}
          <div className="lg:col-span-3 space-y-3.5 order-3">
            {rightHubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#f8b47d]/35 hover:border-[#f16701]/50 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#0F1318] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#f16701]"></span>
                    {hub.city}
                  </h3>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#f7e5d4] text-[#f16701]">
                    {hub.state}
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-[#f16701]">{hub.tag}</p>
                <p className="text-[11px] text-neutral-600 leading-snug font-normal line-clamp-3">
                  {hub.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
