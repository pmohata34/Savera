import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 sm:px-12 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FFF8F2] to-white border-b border-[#fbd7b4]/40">

      {/* Animated Atmospheric Background Mesh (Using Official Gradient Stops: #f7e5d4 to #f16701) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[650px] h-[650px] bg-gradient-to-br from-[#f7e5d4] via-[#f8b47d]/30 to-[#f16701]/15 rounded-full blur-[140px] animate-float-slow"></div>
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-gradient-to-bl from-[#fbd7b4] via-[#f79a52]/25 to-[#f26e12]/15 rounded-full blur-[140px] animate-float-reverse"></div>
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-tr from-[#f8b47d]/20 to-[#f16701]/10 rounded-full blur-[130px] animate-pulse-glow"></div>
        
        {/* Subtle Decorative Pattern */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'radial-gradient(#f48129 0.75px, transparent 0.75px)',
            backgroundSize: '32px 32px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full space-y-16">

        {/* Main Hero 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Official Positioning & Verbatim About Us Text */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Established Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-[#f7e5d4] to-white border border-[#f8b47d]/60 text-[#f16701] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#f16701] animate-ping"></span>
              <span className="tracking-widest uppercase text-[11px] font-semibold">ESTABLISHED 1995 • ABOUT US</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F1318] leading-[1.08] tracking-tight">
              Connecting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52]">
                Textile Businesses
              </span>
              ,<br />
              Building Relationships.
            </h1>

            {/* Verbatim Document Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal max-w-xl">
              <p>
                <strong className="text-[#f16701] font-bold">Savera Tex Solution LLP</strong> is a textile commission agency that connects manufacturers with retailers and wholesalers across India and international markets. We work with both sides of the textile trade, helping manufacturers reach new buyers and enabling retailers and wholesalers to explore suitable suppliers for their business requirements.
              </p>

              <p className="text-sm sm:text-base text-neutral-600">
                With connections across major textile hubs in India, we help manufacturers expand their business reach and create new trade opportunities. At the same time, we help retailers and wholesalers connect with suitable manufacturers and explore collections that match their market needs.
              </p>

              <p className="text-sm sm:text-base text-neutral-600">
                At Savera Tex Solution LLP, we believe that successful trade is built on trust, clear communication and strong business relationships. We focus on understanding the requirements of both manufacturers and buyers, facilitating business connections and helping both sides work towards their goals.
              </p>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#f7e5d4]/70 to-[#fbd7b4]/40 border border-[#f8b47d]/50">
                <p className="text-xs sm:text-sm font-semibold text-neutral-800 italic">
                  "Our aim is to bring manufacturers and buyers closer together, create opportunities for business growth and build long-term partnerships across the textile industry. At Savera Tex Solution LLP, we connect the right businesses to create opportunities for mutual growth."
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Pure Luxury Showcase Visual */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Glow */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#f16701]/30 via-[#f8b47d]/20 to-transparent rounded-3xl blur-2xl opacity-70"></div>

            <div className="relative bg-white p-3.5 sm:p-4 rounded-3xl border border-[#fbd7b4]/60 shadow-xl group overflow-hidden">
              <div className="h-[520px] lg:h-[580px] w-full rounded-2xl overflow-hidden relative shadow-md bg-[#FAF8F5]">
                <img
                  src="/photos/clean_hero.jpg"
                  alt="Savera Textiles Heritage Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Integrated Luxury Trust Metrics Bar */}
        <div className="pt-10 border-t border-[#fbd7b4]/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">

            <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-[#f7e5d4]/40 border border-[#f8b47d]/30 shadow-xs hover:border-[#f16701]/40 transition text-center md:text-left">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#f16701]">500+</div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-900 mt-1">Cities with Active Clients</p>
              <p className="text-[11px] text-neutral-500 font-medium mt-0.5">Across All Major States &amp; Overseas</p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-[#f7e5d4]/40 border border-[#f8b47d]/30 shadow-xs hover:border-[#f16701]/40 transition text-center md:text-left">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#f16701]">1,200+</div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-900 mt-1">Retailers &amp; Wholesalers</p>
              <p className="text-[11px] text-neutral-500 font-medium mt-0.5">Connected Directly with Suitable Mills</p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-[#f7e5d4]/40 border border-[#f8b47d]/30 shadow-xs hover:border-[#f16701]/40 transition text-center md:text-left">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#f16701]">700+</div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-900 mt-1">Manufacturing Partners</p>
              <p className="text-[11px] text-neutral-500 font-medium mt-0.5">Across 6 Major Textile Hubs</p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-white to-[#f7e5d4]/40 border border-[#f8b47d]/30 shadow-xs hover:border-[#f16701]/40 transition text-center md:text-left">
              <div className="text-3xl lg:text-4xl font-extrabold text-[#f16701]">30+</div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-900 mt-1">Years of Trust</p>
              <p className="text-[11px] text-neutral-500 font-medium mt-0.5">Guiding the Textile Trade Since 1995</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
