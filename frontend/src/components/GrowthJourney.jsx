import React from 'react';

export default function GrowthJourney() {
  return (
    <section id="growth-journey" className="py-24 px-6 sm:px-12 bg-white border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 text-[#FF5722] text-xs font-bold uppercase tracking-widest border border-orange-200">
            <span>Thirty-Year Milestone Trajectory</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-luxury text-[#0B0E14] tracking-tight">
            Our Growth Journey
          </h2>
          <p className="text-xs md:text-sm text-neutral-500">
            From our present institutional platform in 2026, trace the continuous curve back to our founding roots in 1995.
          </p>
        </div>

        {/* INFINITE GRAPH CURVE CANVAS */}
        <div className="relative py-12 max-w-5xl mx-auto min-h-[1400px]">

          {/* BACKGROUND SVG INFINITE CURVE (RESPONSIVE SINUOUS SPLINE) */}
          <svg viewBox="0 0 1000 1400" preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="curveBaseGradReverse" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF5722" stopOpacity="0.7" />
                <stop offset="25%" stopColor="#F59E0B" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#FF5722" stopOpacity="0.4" />
                <stop offset="75%" stopColor="#F59E0B" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FF5722" stopOpacity="0.3" />
              </linearGradient>

              <linearGradient id="pulseBeamGradReverse" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF5722" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF5722" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Base Sinuous Ribbon Track */}
            <path d="M 220 120
                     C 520 120, 780 240, 780 360
                     C 780 480, 220 480, 220 600
                     C 220 720, 780 720, 780 840
                     C 780 960, 220 960, 220 1080
                     C 220 1200, 420 1300, 500 1300" fill="none" stroke="url(#curveBaseGradReverse)" strokeWidth="4"
              strokeDasharray="8 6" />

            {/* Animated Glowing Flow Pulse (Infinite Curve Flow) */}
            <path d="M 220 120
                     C 520 120, 780 240, 780 360
                     C 780 480, 220 480, 220 600
                     C 220 720, 780 720, 780 840
                     C 780 960, 220 960, 220 1080
                     C 220 1200, 420 1300, 500 1300" fill="none" stroke="url(#pulseBeamGradReverse)" strokeWidth="4"
              strokeLinecap="round" className="infinite-curve-pulse" />
          </svg>

          {/* MILESTONE NODES (STARTING FROM 2026 DOWN TO 1995) */}
          <div className="space-y-28 relative z-10 pt-4">

            {/* MILESTONE 1: 2026 (Top Arc - Savera Tex Solution LLP) */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div
                className="md:col-span-6 bg-gradient-to-tr from-white via-orange-50 to-amber-50 text-neutral-800 p-6 md:p-8 rounded-3xl border-2 border-[#FF5722] shadow-xl hover:shadow-2xl transition space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full bg-[#FF5722] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    Present Platform
                  </span>
                  <span className="text-3xl font-black font-royal text-[#FF5722]">2026</span>
                </div>
                <h4 className="text-xl font-bold font-royal text-[#0B0E14]">Formation of <span
                    className="text-[#FF5722]">Savera</span> Tex Solution LLP</h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  Established <span className="text-[#FF5722] font-bold">Savera</span> Tex Solution LLP, bringing together
                  thirty years of industry experience and trusted business relationships under a structured
                  institutional platform. We connect manufacturers, retailers, and wholesalers across India and
                  international markets.
                </p>
                {/* Delicate connector dot toward curve */}
                <div
                  className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#FF5722] border-2 border-white items-center justify-center shadow-lg milestone-orb">
                  <span className="w-3 h-3 rounded-full bg-white"></span>
                </div>
              </div>
              <div className="hidden md:block md:col-span-6 pl-12 text-neutral-500 font-mono text-xs">
                Structured Commission Agency Platform • Pan-India &amp; Global Trade
              </div>
            </div>

            {/* MILESTONE 2: 2010 (Right Arc - Direct Fabric Sourcing Across 4 Hubs) */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="hidden md:block md:col-span-6 pr-12 text-right text-neutral-400 font-mono text-xs">
                Direct Mill Corridors • Surat, Banaras, Jaipur, Ahmedabad
              </div>
              <div
                className="md:col-span-6 bg-[#FAF8F5] p-6 md:p-8 rounded-3xl border border-[#E8E3DA] shadow-sm hover:shadow-lg transition space-y-3 relative group">
                {/* Delicate connector dot toward curve */}
                <div
                  className="hidden md:flex absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-2 border-[#FF5722] items-center justify-center shadow-md milestone-orb">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5722]"></span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full bg-orange-100 text-[#FF5722] text-xs font-bold uppercase tracking-wider">
                    Direct Sourcing
                  </span>
                  <span className="text-2xl font-black font-royal text-[#FF5722]">2010</span>
                </div>
                <h4 className="text-lg font-bold font-royal text-[#0B0E14]">Expansion into Fabric Sourcing</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Entered fabric sourcing and developed business connections across major textile hubs, including Surat,
                  Banaras, Jaipur, and Ahmedabad, securing direct loom-level access for buyers nationwide.
                </p>
              </div>
            </div>

            {/* MILESTONE 3: 2006 (Left Arc - Savera Trade Solutions) */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div
                className="md:col-span-6 bg-[#FAF8F5] p-6 md:p-8 rounded-3xl border border-[#E8E3DA] shadow-sm hover:shadow-lg transition space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider">
                    Diversification
                  </span>
                  <span className="text-2xl font-black font-royal text-[#FF5722]">2006</span>
                </div>
                <h4 className="text-lg font-bold font-royal text-[#0B0E14]"><span className="text-[#FF5722]">Savera</span> Trade
                  Solutions</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Established <span className="text-[#FF5722] font-bold">Savera</span> Trade Solutions with a focus on
                  ladies formal bottom wear, diversifying our product portfolio to serve growing ready-to-wear retail
                  demands.
                </p>
                {/* Delicate connector dot toward curve */}
                <div
                  className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-2 border-amber-500 items-center justify-center shadow-md milestone-orb">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                </div>
              </div>
              <div className="hidden md:block md:col-span-6 pl-12 text-neutral-400 font-mono text-xs">
                Ladies Formal Bottom Wear • Ready-to-Wear Portfolio
              </div>
            </div>

            {/* MILESTONE 4: 2003 (Right Arc - Savera Textile Agency) */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="hidden md:block md:col-span-6 pr-12 text-right text-neutral-400 font-mono text-xs">
                Sarees &amp; Bridal Lehengas Specialization
              </div>
              <div
                className="md:col-span-6 bg-[#FAF8F5] p-6 md:p-8 rounded-3xl border border-[#E8E3DA] shadow-sm hover:shadow-lg transition space-y-3 relative group">
                {/* Delicate connector dot toward curve */}
                <div
                  className="hidden md:flex absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-2 border-[#FF5722] items-center justify-center shadow-md milestone-orb">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5722]"></span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full bg-orange-100 text-[#FF5722] text-xs font-bold uppercase tracking-wider">
                    Ethnic Agency
                  </span>
                  <span className="text-2xl font-black font-royal text-[#FF5722]">2003</span>
                </div>
                <h4 className="text-lg font-bold font-royal text-[#0B0E14]"><span className="text-[#FF5722]">Savera</span>
                  Textile Agency</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Launched <span className="text-[#FF5722] font-bold">Savera</span> Textile Agency, focusing specifically on
                  sarees and bridal lehengas, establishing an enduring presence in the regional ethnic wear segment.
                </p>
              </div>
            </div>

            {/* MILESTONE 5: 1999 (Left Arc - Expansion into Bed Sheets) */}
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div
                className="md:col-span-6 bg-[#FAF8F5] p-6 md:p-8 rounded-3xl border border-[#E8E3DA] shadow-sm hover:shadow-lg transition space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <span
                    className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider">
                    Home Textiles
                  </span>
                  <span className="text-2xl font-black font-royal text-[#FF5722]">1999</span>
                </div>
                <h4 className="text-lg font-bold font-royal text-[#0B0E14]">Expansion into Bed Sheets</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Expanded our product range to include bed sheets and home textiles, marking another steady step in the
                  growth and reputation of our textile agency business.
                </p>
                {/* Delicate connector dot toward curve */}
                <div
                  className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border-2 border-amber-500 items-center justify-center shadow-md milestone-orb">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                </div>
              </div>
              <div className="hidden md:block md:col-span-6 pl-12 text-neutral-400 font-mono text-xs">
                Home Textiles Portfolio • Bed Sheets Segment
              </div>
            </div>

          </div>

          {/* MILESTONE 6: 1995 (FOUNDATIONAL ROOT TERMINAL AT BASE) */}
          <div className="mt-28 relative z-20 text-center max-w-2xl mx-auto">
            <div
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#FF5722] to-amber-400 text-white font-black text-sm flex items-center justify-center shadow-xl mx-auto border-4 border-white mb-4 milestone-orb">
              1995
            </div>

            <div className="bg-[#FAF8F5] p-8 md:p-10 rounded-3xl border-2 border-[#E8E3DA] shadow-xl space-y-4">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF5722] text-xs font-mono font-bold tracking-widest border border-orange-200">
                <span>FOUNDATIONAL ANCHOR</span>
              </div>

              <h4 className="text-2xl md:text-3xl font-bold font-royal text-[#0B0E14]">
                The Beginning of <span className="text-[#FF5722]">Savera</span> Marketing
              </h4>

              <p className="text-xs md:text-sm text-neutral-600 leading-relaxed">
                <span className="text-[#FF5722] font-bold">Savera</span> Marketing was established as a proprietorship by
                Mr. Vineet Kr. Taparia, beginning its journey with salwar suits and unstitched dress materials on the
                principle that trust is the true foundation of business.
              </p>

              <div className="pt-6 border-t border-[#E8E3DA] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <span className="block text-xs font-bold text-[#0B0E14] uppercase tracking-wider">Moving Forward</span>
                  <span className="block text-[11px] text-neutral-500">Building on our experience since 1995, we continue to
                    create lasting relationships.</span>
                </div>
                <a href="#connect"
                  className="px-6 py-2.5 rounded-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition shadow-lg shrink-0">
                  Connect With Us
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
