import React from 'react';

export default function SourcingMap() {
  const hubs = [
    {
      city: 'Kolkata',
      state: 'West Bengal',
      tag: 'Headquarters & Central Hub',
      description: 'Central operations office and eastern India textile trading gateway since 1995, managing order coordination and multi-state distribution.',
      highlight: true
    },
    {
      city: 'Surat',
      state: 'Gujarat',
      tag: 'High-Volume Production & Daily Wear',
      description: 'Major composite textile epicenter connecting high-volume synthetic weaves, daily wear sarees, jacquards, and high-turnover dress materials.',
      highlight: false
    },
    {
      city: 'Ahmedabad',
      state: 'Gujarat',
      tag: 'Pure Cottons & Mill Weaves',
      description: 'Renowned textile hub connecting pure cambric cottons, mill-finish fabrics, printed textiles, and commercial garment yardages.',
      highlight: false
    },
    {
      city: 'Jaipur',
      state: 'Rajasthan',
      tag: 'Ethnic Wear & Traditional Handblocks',
      description: 'Sourcing connections for traditional ethnic wear, authentic handblock prints, Sanganeri prints, and contemporary fusion apparel directly from master processing units.',
      highlight: false
    },
    {
      city: 'Varanasi (Banaras)',
      state: 'Uttar Pradesh',
      tag: 'Heritage Silk Brocades & Bridal Weaves',
      description: 'Centuries of weaving mastery connecting genuine Banarasi Katan silk, organza, tissue georgettes, and ornate bridal saree collections.',
      highlight: false
    },
    {
      city: 'Bhagalpur',
      state: 'Bihar',
      tag: 'Tussar & Textured Handloom Silks',
      description: 'Specialized regional production corridors for pure Bhagalpuri Tussar silk, textured handloom yardage, and regional artisanal weaves.',
      highlight: false
    }
  ];

  return (
    <section id="sourcing-map" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-white via-[#FAF8F5] to-white border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#fbd7b4]/50 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#f7e5d4] to-white border border-[#f8b47d]/60 text-[#f16701] text-xs font-bold uppercase tracking-widest shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#f16701] animate-ping"></span>
              <span>Pan-India Manufacturing Network</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1318] tracking-tight">
              Our Sourcing Hubs
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Direct commercial connections across India's 6 foremost textile production corridors, bridging buyers directly with verified composite mills and master weaving clusters.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-[#f8b47d]/40 shadow-xs">
            <div className="text-center px-3 border-r border-[#fbd7b4]/60">
              <span className="block text-2xl font-extrabold text-[#f16701]">6</span>
              <span className="text-[10px] font-bold uppercase text-neutral-500">Major Hubs</span>
            </div>
            <div className="text-center px-3">
              <span className="block text-2xl font-extrabold text-[#f16701]">700+</span>
              <span className="text-[10px] font-bold uppercase text-neutral-500">Partner Mills</span>
            </div>
          </div>
        </div>

        {/* Main 2-Column Split: Interactive Map Visual vs Hub Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Official India Map with Orange Highlighted States */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#f16701]/25 via-[#f8b47d]/20 to-transparent rounded-3xl blur-2xl opacity-60"></div>

            <div className="relative bg-white p-6 sm:p-8 rounded-3xl border border-[#fbd7b4]/60 shadow-xl overflow-hidden flex flex-col items-center justify-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#f16701] mb-2">
                Official Production Corridors
              </span>
              <img
                src="/assets/India_Map_Orange.png"
                alt="Pan-India Sourcing Map with Orange Highlighted States"
                className="w-full max-h-[520px] object-contain drop-shadow-md hover:scale-102 transition duration-500"
              />
              <div className="mt-4 flex items-center gap-2 text-xs text-neutral-500 font-medium">
                <span className="w-3 h-3 rounded-full bg-[#f16701]"></span>
                <span>Active Sourcing States: Gujarat, Rajasthan, UP, Bihar &amp; West Bengal</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Hub Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4.5">
            {hubs.map((hub, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 shadow-xs hover:shadow-lg ${
                  hub.highlight
                    ? 'bg-gradient-to-br from-[#f7e5d4] via-white to-white border-[#f16701]/60 ring-2 ring-[#f16701]/20'
                    : 'bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#f7e5d4]/40 border-[#f8b47d]/35 hover:border-[#f16701]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-[#0F1318] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#f16701]"></span>
                    {hub.city}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/40">
                    {hub.state}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#f16701] mb-1.5">
                  {hub.tag}
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
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
