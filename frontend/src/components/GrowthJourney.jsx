import React from 'react';

export default function GrowthJourney() {
  const milestones = [
    {
      year: '1995',
      title: 'The Beginning of Savera Marketing',
      description: 'Savera Marketing was established as a proprietorship, beginning its journey with salwar suits and unstitched dress materials.'
    },
    {
      year: '1999',
      title: 'Expansion into Bed Sheets',
      description: 'Expanded our product range to include bed sheets, marking another step in the growth of our textile business.'
    },
    {
      year: '2003',
      title: 'Savera Textile Agency',
      description: 'Launched Savera Textile Agency, focusing on sarees and lehengas and further expanding our presence in the ethnic wear segment.'
    },
    {
      year: '2006',
      title: 'Savera Trade Solutions',
      description: 'Established Savera Trade Solutions with a focus on Ladies formal bottom wear, diversifying our product portfolio.'
    },
    {
      year: '2010',
      title: 'Expansion into Fabric Sourcing',
      description: 'Entered fabric sourcing and developed business connections across major textile hubs, including Surat, Banaras, Jaipur and Ahmedabad.'
    },
    {
      year: '2026',
      title: 'Formation of Savera Tex Solution LLP',
      description: 'Established Savera Tex Solution LLP, bringing together years of industry experience and business relationships under a structured platform across India and international markets.'
    }
  ];

  return (
    <section id="growth-journey" className="py-14 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-[#FAF8F5] to-[#FDF0E5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#f8b47d]/60 text-[#f16701] text-[11px] font-bold uppercase tracking-widest shadow-2xs">
            <span>Milestone Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1318] tracking-tight">
            Our Growth Journey
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-normal">
            A thirty-year journey connecting manufacturers with buyers, expanding continuously from 1995 to 2026.
          </p>
        </div>

        {/* ── DESKTOP FLOWING CURVED TIMELINE (1995 on Left ➔ 2026 on Right) ── */}
        <div className="hidden lg:block relative py-8">

          {/* Flowing SVG Sinuous Curved Line from Left to Right */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-48 pointer-events-none z-0">
            <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="horizontalCurvedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f7e5d4" stopOpacity="0.8" />
                  <stop offset="25%" stopColor="#f8b47d" stopOpacity="1" />
                  <stop offset="60%" stopColor="#f48129" stopOpacity="1" />
                  <stop offset="100%" stopColor="#f16701" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Base Smooth Flowing Curvy Wave */}
              <path
                d="M 60 100 
                   C 160 30, 260 170, 360 100 
                   C 460 30, 560 170, 660 100 
                   C 760 30, 860 170, 960 100 
                   C 1060 40, 1120 120, 1160 100"
                fill="none"
                stroke="url(#horizontalCurvedGradient)"
                strokeWidth="5"
                strokeLinecap="round"
              />

              {/* Pulsing Dash Beam along the curve */}
              <path
                d="M 60 100 
                   C 160 30, 260 170, 360 100 
                   C 460 30, 560 170, 660 100 
                   C 760 30, 860 170, 960 100 
                   C 1060 40, 1120 120, 1160 100"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeDasharray="16 30"
                strokeLinecap="round"
                className="bus-line-pulse opacity-90"
              />
            </svg>
          </div>

          {/* 6 Milestone Nodes positioned across the 6 columns */}
          <div className="grid grid-cols-6 gap-3.5 relative z-10">
            {milestones.map((m, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={m.year}
                  className={`flex flex-col items-center ${isEven ? 'justify-start' : 'justify-end'} min-h-[300px]`}
                >
                  {/* Card for Even Nodes (Top Position) */}
                  {isEven && (
                    <div className="w-full p-3.5 rounded-2xl bg-white border border-[#f8b47d]/40 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 space-y-1.5 mb-8">
                      <span className="text-xl font-black text-[#f16701] block">
                        {m.year}
                      </span>
                      <h3 className="text-xs font-bold text-[#0F1318] leading-tight">
                        {m.title}
                      </h3>
                      <p className="text-[11px] text-neutral-600 leading-snug font-normal">
                        {m.description}
                      </p>
                    </div>
                  )}

                  {/* Station Node on the Curved Path */}
                  <div className="relative my-auto flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-white border-3 border-[#f16701] shadow-md flex items-center justify-center text-xs font-black text-[#f16701] transition-transform hover:scale-125 cursor-pointer">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#f16701]"></span>
                    </div>
                  </div>

                  {/* Card for Odd Nodes (Bottom Position) */}
                  {!isEven && (
                    <div className="w-full p-3.5 rounded-2xl bg-white border border-[#f8b47d]/40 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 space-y-1.5 mt-8">
                      <span className="text-xl font-black text-[#f16701] block">
                        {m.year}
                      </span>
                      <h3 className="text-xs font-bold text-[#0F1318] leading-tight">
                        {m.title}
                      </h3>
                      <p className="text-[11px] text-neutral-600 leading-snug font-normal">
                        {m.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* ── MOBILE / TABLET RESPONSIVE HORIZONTAL TIMELINE ── */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x">
          {milestones.map((m, idx) => (
            <div
              key={m.year}
              className="min-w-[260px] max-w-[280px] p-4.5 rounded-2xl bg-white border border-[#f8b47d]/40 shadow-xs flex-shrink-0 snap-center space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-black text-[#f16701]">
                  {m.year}
                </span>
                <span className="w-6 h-6 rounded-full bg-[#f7e5d4] text-[#f16701] text-[10px] font-bold flex items-center justify-center">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-sm font-bold text-[#0F1318]">
                {m.title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                {m.description}
              </p>
            </div>
          ))}
        </div>

        {/* Moving Forward Card (From Document) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52] text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">
              Moving Forward
            </h3>
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal max-w-3xl">
              Building on our experience since 1995, we continue to strengthen textile connections, develop new business opportunities and create lasting relationships across the industry.
            </p>
          </div>
          <a
            href="#connect"
            className="px-5 py-2.5 rounded-full bg-white text-[#f16701] font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-[#FAF8F5] transition flex-shrink-0"
          >
            Connect With Us
          </a>
        </div>

      </div>
    </section>
  );
}
