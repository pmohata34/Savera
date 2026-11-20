import React from 'react';
import { highlightSavera } from '../utils/highlightSavera';

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
      title: 'Formation of Savera',
      description: 'Established Savera Tex Solution LLP, bringing together years of industry experience and business relationships under a structured platform across India and international markets.'
    }
  ];

  // SVG Geometry Config:
  // 6 columns centered at X = 100, 300, 500, 700, 900, 1100 (in a 1200-wide coordinate space)
  // Wave alternates between trough (Y=320) and crest (Y=240)
  const svgPoints = [
    { x: 100, y: 320, isBottom: true },
    { x: 300, y: 240, isBottom: false },
    { x: 500, y: 320, isBottom: true },
    { x: 700, y: 240, isBottom: false },
    { x: 900, y: 320, isBottom: true },
    { x: 1100, y: 240, isBottom: false },
  ];

  const wavePath = "M 20 320 L 100 320 C 200 320, 200 240, 300 240 C 400 240, 400 320, 500 320 C 600 320, 600 240, 700 240 C 800 240, 800 320, 900 320 C 1000 320, 1000 240, 1100 240 L 1180 240";

  return (
    <section id="growth-journey" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#FAF8F5] to-[#FDF0E5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-1.5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            Our Growth Journey
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
            A thirty-year journey connecting manufacturers with buyers, expanding continuously from 1995 to 2026.
            Building on our experience since 1995, we continue to strengthen textile connections, develop new business opportunities and create lasting relationships across the industry.
          </p>
        </div>

        {/* ── DESKTOP ALTERNATING TIMELINE WITH GUARANTEED SVG-ANCHORED POINTS ── */}
        <div className="hidden lg:block relative py-2">
          <div className="relative h-[560px] w-full">

            {/* Sinuous SVG Wave & Anchored Milestone Nodes */}
            <svg
              viewBox="0 0 1200 560"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
            >
              <defs>
                <linearGradient id="growthWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f7e5d4" />
                  <stop offset="25%" stopColor="#f8b47d" />
                  <stop offset="60%" stopColor="#f48129" />
                  <stop offset="100%" stopColor="#f16701" />
                </linearGradient>
              </defs>

              {/* Ambient soft glow along path */}
              <path
                d={wavePath}
                fill="none"
                stroke="#f8b47d"
                strokeWidth="8"
                strokeOpacity="0.3"
                className="blur-[3px]"
              />

              {/* Base guide track */}
              <path
                d={wavePath}
                fill="none"
                stroke="#fbd7b4"
                strokeWidth="2.5"
                strokeOpacity="0.5"
              />

              {/* Streaming dashed active line */}
              <path
                d={wavePath}
                fill="none"
                stroke="url(#growthWaveGrad)"
                strokeWidth="4"
                strokeDasharray="14 10"
                strokeLinecap="round"
                className="animate-dash-flow"
              />

              {/* Guaranteed Stems, Dots & Year Labels (Drawn directly in SVG to ensure permanent attachment) */}
              {svgPoints.map((pt, idx) => {
                const m = milestones[idx];
                return (
                  <g key={m.year}>
                    {/* Vertical Connector Stem directly to the Card */}
                    {pt.isBottom ? (
                      // From bottom of circle (334) down to card top (362)
                      <line
                        x1={pt.x}
                        y1="334"
                        x2={pt.x}
                        y2="362"
                        stroke="#f16701"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    ) : (
                      // From card bottom (198) down to top of circle (226)
                      <line
                        x1={pt.x}
                        y1="198"
                        x2={pt.x}
                        y2="226"
                        stroke="#f16701"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    )}

                    {/* Outer Ambient Halo */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="18"
                      fill="#f16701"
                      fillOpacity="0.14"
                    />

                    {/* Outer Ring Circle */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="13"
                      fill="#ffffff"
                      stroke="#f16701"
                      strokeWidth="3.5"
                    />

                    {/* Inner Solid Bullseye Dot (Locked dead-center on the wave) */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r="5.5"
                      fill="#f16701"
                    />

                    {/* Monospace Year Label adjacent to Dot */}
                    <text
                      x={pt.x}
                      y={pt.isBottom ? 298 : 274}
                      textAnchor="middle"
                      fill="#0F1318"
                      fontSize="12.5"
                      fontWeight="900"
                      fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
                      letterSpacing="0.05em"
                    >
                      {m.year}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* 6 Milestone HTML Cards (Positioned in 6 exact columns aligned with SVG centers) */}
            <div className="absolute inset-0 flex z-10 pointer-events-none">
              {milestones.map((m, idx) => {
                const isBottom = idx % 2 === 0; // Starts from BOTTOM (1995, 2003, 2010 at bottom; 1999, 2006, 2026 at top)

                return (
                  <div key={m.year} className="w-1/6 px-1.5 sm:px-2 relative h-full">
                    {isBottom ? (
                      /* ── DOWN CARD (1995, 2003, 2010 - Starts below wave at 362px) ── */
                      <div className="absolute top-[362px] left-1.5 right-1.5 p-3 rounded-2xl bg-white border border-[#f8b47d]/40 hover:border-[#f16701]/60 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-start space-y-1 group pointer-events-auto">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-black text-[#f16701] tracking-tight group-hover:scale-105 transition-transform inline-block">
                            {m.year}
                          </span>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/35">
                            0{idx + 1}
                          </span>
                        </div>
                        <h3 className="text-xs font-bold text-[#0F1318] leading-snug">
                          {highlightSavera(m.title)}
                        </h3>
                        <p className="text-[11px] text-neutral-600 leading-relaxed font-normal">
                          {highlightSavera(m.description)}
                        </p>
                      </div>
                    ) : (
                      /* ── UP CARD (1999, 2006, 2026 - Positioned at top, bottom touches stem at 198px) ── */
                      <div className="absolute top-0 left-1.5 right-1.5 p-3 rounded-2xl bg-white border border-[#f8b47d]/40 hover:border-[#f16701]/60 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-start space-y-1 group pointer-events-auto">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-black text-[#f16701] tracking-tight group-hover:scale-105 transition-transform inline-block">
                            {m.year}
                          </span>
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/35">
                            0{idx + 1}
                          </span>
                        </div>
                        <h3 className="text-xs font-bold text-[#0F1318] leading-snug">
                          {highlightSavera(m.title)}
                        </h3>
                        <p className="text-[11px] text-neutral-600 leading-relaxed font-normal">
                          {highlightSavera(m.description)}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* ── MOBILE CONNECTED VERTICAL TIMELINE ── */}
        <div className="lg:hidden relative pl-6 border-l-2 border-dashed border-[#f16701]/70 ml-3 space-y-5">
          {milestones.map((m, idx) => (
            <div key={m.year} className="relative group">
              {/* Dot on the vertical line */}
              <div className="absolute -left-[31px] top-3.5 w-6 h-6 rounded-full bg-white border-3 border-[#f16701] flex items-center justify-center shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#f16701]"></span>
              </div>

              {/* Text Box */}
              <div className="p-3.5 rounded-2xl bg-white border border-[#f8b47d]/40 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-base font-black text-[#f16701]">
                    {m.year}
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#f7e5d4] text-[#f16701]">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-[#0F1318]">
                  {highlightSavera(m.title)}
                </h3>
                <p className="text-xs text-neutral-600 font-normal leading-relaxed">
                  {highlightSavera(m.description)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
