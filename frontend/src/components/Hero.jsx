import React from 'react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-4 sm:pt-6 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-[#FFF6EE] to-[#FDF0E5] border-b border-[#fbd7b4]/40 min-h-[calc(100vh-82px)] flex flex-col justify-between overflow-hidden"
    >
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#f7e5d4] via-[#f8b47d]/35 to-[#f16701]/20 rounded-full blur-[110px] animate-float-slow"></div>
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-gradient-to-bl from-[#fbd7b4] via-[#f79a52]/30 to-[#f26e12]/20 rounded-full blur-[120px] animate-float-reverse"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-[#f8b47d]/25 to-[#f16701]/15 rounded-full blur-[100px] animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-between space-y-4 lg:space-y-6">

        {/* Top 2-Column Split: Editorial Text vs Showcase Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center flex-1">

          {/* Left Column: Verbatim About Us Copy */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">

            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-extrabold text-[#0F1318] leading-[1.12] tracking-tight">
              Connecting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52]">
                Textile Businesses
              </span>
              ,<br />
              Building Relationships.
            </h1>

            {/* Verbatim Document Paragraphs (Tailored for 1-Screen Viewport) */}
            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal max-w-xl">
              <p>
                <strong className="font-playfair font-bold text-sm sm:text-base inline-flex items-baseline gap-1">
                  <span className="text-[#f16701]">SAVERA</span>
                  <span className="text-[#0F1318]">TEX SOLUTION LLP</span>
                </strong> is a textile commission agency that connects manufacturers with retailers and wholesalers across India and international markets. We work with both sides of the textile trade, helping manufacturers reach new buyers and enabling retailers and wholesalers to explore suitable suppliers for their business requirements.
              </p>

              <p className="text-neutral-600">
                With connections across major textile hubs in India, we help manufacturers expand their business reach and create new trade opportunities. At the same time, we help retailers and wholesalers connect with suitable manufacturers and explore collections that match their market needs.
              </p>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/80 border border-[#f8b47d]/40 shadow-2xs">
                <p className="text-[11px] sm:text-xs font-semibold text-neutral-800 italic">
                  "At <strong className="font-playfair font-bold not-italic inline-flex items-baseline gap-1"><span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span></strong>, we believe that successful trade is built on trust, clear communication and strong business relationships. We connect the right businesses to create opportunities for mutual growth."
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: About Us Video Adjusted in Framework */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#f16701]/25 via-[#f8b47d]/20 to-transparent rounded-3xl blur-xl opacity-70"></div>

            <div className="relative bg-white p-2.5 sm:p-3 rounded-2xl border border-[#fbd7b4]/60 shadow-lg w-full max-w-md group">
              <div className="h-[230px] sm:h-[270px] lg:h-[310px] xl:h-[340px] w-full rounded-xl overflow-hidden relative shadow-inner bg-[#FAF8F5]">
                <video
                  src="/assets/about_us.mp4"
                  poster="/photos/clean_hero.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl pointer-events-none"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Integrated 4-Card Trust Metrics Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#fbd7b4]/50">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">

            <div className="p-3 sm:p-4 rounded-xl bg-white/90 border border-[#f8b47d]/30 shadow-2xs text-center md:text-left transition-all duration-300 hover:border-[#f16701]/40">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f16701] leading-none">500+</div>
              <p className="text-[11px] font-bold uppercase text-neutral-900 mt-1.5">Active Cities Pan-India &amp; Overseas</p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white/90 border border-[#f8b47d]/30 shadow-2xs text-center md:text-left transition-all duration-300 hover:border-[#f16701]/40">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f16701] leading-none">1,200+</div>
              <p className="text-[11px] font-bold uppercase text-neutral-900 mt-1.5">Retailers &amp; Wholesalers</p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white/90 border border-[#f8b47d]/30 shadow-2xs text-center md:text-left transition-all duration-300 hover:border-[#f16701]/40">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f16701] leading-none">700+</div>
              <p className="text-[11px] font-bold uppercase text-neutral-900 mt-1.5">Manufacturing Partners</p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white/90 border border-[#f8b47d]/30 shadow-2xs text-center md:text-left transition-all duration-300 hover:border-[#f16701]/40">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f16701] leading-none">80+</div>
              <p className="text-[11px] font-bold uppercase text-neutral-900 mt-1.5">Counters Launched Upto 2026</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
