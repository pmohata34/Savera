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
      title: (
        <span>
          Formation of{' '}
          <strong className="font-playfair font-bold inline-flex items-baseline gap-1">
            <span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span>
          </strong>
        </span>
      ),
      description: (
        <span>
          Established{' '}
          <strong className="font-playfair font-bold inline-flex items-baseline gap-1">
            <span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span>
          </strong>
          , bringing together years of industry experience and business relationships under a structured business platform, with a broader vision of connecting manufacturers, retailers and wholesalers across India and international markets.
        </span>
      )
    }
  ];

  return (
    <section id="growth-journey" className="py-14 sm:py-18 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-[#FAF8F5] to-[#FDF0E5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1318] tracking-tight">
            Our Growth Journey
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-normal">
            A thirty-year journey connecting manufacturers with buyers, expanding continuously from 1995 to 2026.
            Building on our experience since 1995, we continue to strengthen textile connections, develop new business opportunities and create lasting relationships across the industry.
          </p>
        </div>

        {/* ── DESKTOP ALTERNATING TIMELINE WITH ANIMATED DASHED CURVE ── */}
        <div className="hidden lg:block relative py-6">
          <div className="relative min-h-[600px] w-full">

            {/* Background Sinuous SVG Wave (Dashed & Animated Left to Right) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <svg viewBox="0 0 1200 600" preserveAspectRatio="none" className="w-full h-full">
                <defs>
                  <linearGradient id="curvedWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f7e5d4" />
                    <stop offset="25%" stopColor="#f8b47d" />
                    <stop offset="60%" stopColor="#f48129" />
                    <stop offset="100%" stopColor="#f16701" />
                  </linearGradient>
                </defs>

                {/* Soft Ambient Glow under the wave */}
                <path
                  d="M 20 320 L 100 320 C 200 320, 200 240, 300 240 C 400 240, 400 320, 500 320 C 600 320, 600 240, 700 240 C 800 240, 800 320, 900 320 C 1000 320, 1000 240, 1100 240 L 1180 240"
                  fill="none"
                  stroke="#f8b47d"
                  strokeWidth="8"
                  strokeOpacity="0.3"
                  className="blur-[3px]"
                />

                {/* Base Soft Guidance Track */}
                <path
                  d="M 20 320 L 100 320 C 200 320, 200 240, 300 240 C 400 240, 400 320, 500 320 C 600 320, 600 240, 700 240 C 800 240, 800 320, 900 320 C 1000 320, 1000 240, 1100 240 L 1180 240"
                  fill="none"
                  stroke="#fbd7b4"
                  strokeWidth="2"
                  strokeOpacity="0.45"
                />

                {/* Active Dashed Animated Line Streaming from Left to Right */}
                <path
                  d="M 20 320 L 100 320 C 200 320, 200 240, 300 240 C 400 240, 400 320, 500 320 C 600 320, 600 240, 700 240 C 800 240, 800 320, 900 320 C 1000 320, 1000 240, 1100 240 L 1180 240"
                  fill="none"
                  stroke="url(#curvedWaveGradient)"
                  strokeWidth="4"
                  strokeDasharray="14 10"
                  strokeLinecap="round"
                  className="animate-dash-flow"
                />
              </svg>
            </div>

            {/* 6 Alternating Milestone Columns - Starts with Bottom Card for 1995 */}
            <div className="grid grid-cols-6 gap-3.5 sm:gap-4 relative z-10 h-full">
              {milestones.map((m, idx) => {
                const isBottom = idx % 2 === 0; // Even: Start from BOTTOM (1995, 2003, 2010), Odd: TOP (1999, 2006, 2026)

                return (
                  <div key={m.year} className="flex flex-col items-center h-full">
                    {isBottom ? (
                      /* ── DOWN CARD (1995, 2003, 2010 - Starts from Bottom) ── */
                      <>
                        {/* 1. Spacer above so dot aligns with trough at Y=320 */}
                        <div className="h-[270px]" />

                        {/* 2. Year Label Above Dot */}
                        <div className="h-6 mb-2 flex items-center justify-center text-center">
                          <span className="text-xs font-black text-[#0F1318] font-mono tracking-wider">
                            {m.year}
                          </span>
                        </div>

                        {/* 3. Dot on Trough of Curve */}
                        <div className="relative z-20 flex items-center justify-center">
                          <div className="w-9 h-9 rounded-full bg-white border-3 border-[#f16701] shadow-md flex items-center justify-center transition-transform hover:scale-125 cursor-pointer group">
                            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#f16701] to-[#f48129] group-hover:scale-125 transition-transform"></span>
                          </div>
                        </div>

                        {/* 4. Vertical Stem down to Card */}
                        <div className="w-0.5 h-6 bg-gradient-to-b from-[#f16701] to-[#f8b47d]"></div>

                        {/* 5. Full Text Box Below */}
                        <div className="w-full p-3.5 rounded-2xl bg-white border border-[#f8b47d]/40 hover:border-[#f16701]/60 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-start min-h-[200px] space-y-1.5 group">
                          <div className="flex items-center justify-between">
                            <span className="text-base font-black text-[#f16701] tracking-tight group-hover:scale-105 transition-transform inline-block">
                              {m.year}
                            </span>
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/35">
                              0{idx + 1}
                            </span>
                          </div>
                          <h3 className="text-xs font-bold text-[#0F1318] leading-snug">
                            {m.title}
                          </h3>
                          <p className="text-[11px] text-neutral-600 leading-relaxed font-normal">
                            {m.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      /* ── UP CARD (1999, 2006, 2026 - Text Box Above) ── */
                      <>
                        {/* 1. Full Text Box Above */}
                        <div className="w-full p-3.5 rounded-2xl bg-white border border-[#f8b47d]/40 hover:border-[#f16701]/60 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-start min-h-[190px] space-y-1.5 group">
                          <div className="flex items-center justify-between">
                            <span className="text-base font-black text-[#f16701] tracking-tight group-hover:scale-105 transition-transform inline-block">
                              {m.year}
                            </span>
                            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/35">
                              0{idx + 1}
                            </span>
                          </div>
                          <h3 className="text-xs font-bold text-[#0F1318] leading-snug">
                            {m.title}
                          </h3>
                          <p className="text-[11px] text-neutral-600 leading-relaxed font-normal">
                            {m.description}
                          </p>
                        </div>

                        {/* 2. Vertical Stem down to Dot */}
                        <div className="w-0.5 h-8 bg-gradient-to-b from-[#f8b47d] to-[#f16701]"></div>

                        {/* 3. Dot on Crest of Curve */}
                        <div className="relative z-20 flex items-center justify-center">
                          <div className="w-9 h-9 rounded-full bg-white border-3 border-[#f16701] shadow-md flex items-center justify-center transition-transform hover:scale-125 cursor-pointer group">
                            <span className="w-3 h-3 rounded-full bg-gradient-to-r from-[#f16701] to-[#f48129] group-hover:scale-125 transition-transform"></span>
                          </div>
                        </div>

                        {/* 4. Year Label Under Dot */}
                        <div className="h-6 mt-2 flex items-center justify-center text-center">
                          <span className="text-xs font-black text-[#0F1318] font-mono tracking-wider">
                            {m.year}
                          </span>
                        </div>

                        {/* 5. Spacer below so dot aligns with crest at Y=240 */}
                        <div className="h-[270px]" />
                      </>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* ── MOBILE CONNECTED VERTICAL TIMELINE ── */}
        <div className="lg:hidden relative pl-6 border-l-2 border-dashed border-[#f16701]/70 ml-3 space-y-6">
          {milestones.map((m, idx) => (
            <div key={m.year} className="relative group">
              {/* Dot on the vertical line */}
              <div className="absolute -left-[31px] top-4 w-6 h-6 rounded-full bg-white border-3 border-[#f16701] flex items-center justify-center shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#f16701]"></span>
              </div>

              {/* Text Box */}
              <div className="p-4 rounded-2xl bg-white border border-[#f8b47d]/40 shadow-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-[#f16701]">
                    {m.year}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#f7e5d4] text-[#f16701]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-[#0F1318]">
                  {m.title}
                </h3>
                <p className="text-xs text-neutral-600 font-normal leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
