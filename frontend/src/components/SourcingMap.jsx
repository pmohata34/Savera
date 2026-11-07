import React from 'react';

export default function SourcingMap() {
  const leftHubs = [
    {
      city: 'Kolkata',
      state: 'West Bengal',
      isHQ: true
    },
    {
      city: 'Surat',
      state: 'Gujarat',
      isHQ: false
    },
    {
      city: 'Ahmedabad',
      state: 'Gujarat',
      isHQ: false
    }
  ];

  const rightHubs = [
    {
      city: 'Jaipur',
      state: 'Rajasthan',
      isHQ: false
    },
    {
      city: 'Varanasi (Banaras)',
      state: 'Uttar Pradesh',
      isHQ: false
    },
    {
      city: 'Bhagalpur',
      state: 'Bihar',
      isHQ: false
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
              <span className="text-[9px] font-bold uppercase text-neutral-500">Manufacturing Partners</span>
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
                className={`p-3.5 sm:p-4 rounded-xl border-l-4 border-l-[#f16701] border-t border-r border-b border-[#f8b47d]/40 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between gap-3 ${
                  hub.isHQ ? 'bg-gradient-to-br from-white via-white to-[#FFF6ED]' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-[#FFF3E8] border border-[#f8b47d]/50 flex items-center justify-center flex-shrink-0 text-[#f16701] shadow-2xs">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0F1318] leading-tight truncate">
                    {hub.city}
                  </h3>
                </div>

                {hub.isHQ ? (
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-[#f16701] text-white shadow-xs tracking-wider uppercase whitespace-nowrap flex-shrink-0">
                    West Bengal • Central HQ
                  </span>
                ) : (
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#f8b47d]/60 text-neutral-800 shadow-2xs whitespace-nowrap flex-shrink-0">
                    {hub.state}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Center Column: Prominent India Map */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#f16701]/20 via-[#f8b47d]/15 to-transparent rounded-3xl blur-xl opacity-60"></div>

            <div className="relative bg-white p-4 sm:p-6 rounded-2xl border border-[#fbd7b4]/60 shadow-lg w-full flex flex-col items-center justify-center">
              <img
                src="/assets/India_Map.png"
                alt="Pan-India Sourcing Map"
                className="w-full max-h-[380px] sm:max-h-[420px] object-contain drop-shadow-sm hover:scale-102 transition duration-500"
              />
            </div>
          </div>

          {/* Right Column: 3 Compact Hub Cards */}
          <div className="lg:col-span-3 space-y-3.5 order-3">
            {rightHubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 rounded-xl border-l-4 border-l-[#f16701] border-t border-r border-b border-[#f8b47d]/40 bg-white shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-[#FFF3E8] border border-[#f8b47d]/50 flex items-center justify-center flex-shrink-0 text-[#f16701] shadow-2xs">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#0F1318] leading-tight truncate">
                    {hub.city}
                  </h3>
                </div>

                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#f8b47d]/60 text-neutral-800 shadow-2xs whitespace-nowrap flex-shrink-0">
                  {hub.state}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
