import React from 'react';

export default function Hero() {
  return (
<section id="hero"
    className="relative pt-36 pb-20 px-8 md:px-12 overflow-hidden bg-gradient-to-b from-[#090C10] via-[#0D1117] to-[#090C10] text-white border-b border-neutral-800">

    {/*  Atmospheric Ambient Lighting & Luxury Loom Texture  */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 left-1/4 w-[650px] h-[650px] bg-[#FF5722]/15 rounded-full blur-[160px]"></div>
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[140px]"></div>
      {/*  Subtle Luxury Jacquard Matrix  */}
      <div className="absolute inset-0 opacity-15"
        style="background-image: radial-gradient(#F59E0B 0.75px, transparent 0.75px); background-size: 28px 28px;">
      </div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10 w-full space-y-16">

      {/*  Main Hero 2-Column Split  */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/*  Left Column: Copy Directly from DOCX (7 cols)  */}
        <div className="lg:col-span-7 space-y-6 text-left">

          {/*  Badge  */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold bg-white/[0.07] backdrop-blur-md border border-orange-500/30 text-[#FF5722] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-ping"></span>
            <span className="tracking-widest uppercase font-mono text-[11px]">ESTABLISHED 1995 • TEXTILE COMMISSION
              AGENCY</span>
          </div>

          {/*  Editorial Headline  */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-normal font-designer text-white leading-[1.06] tracking-tight">
            Connecting <span
              className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#FF5722] to-amber-300">Textile
              Businesses</span>,<br />
            Building <span className="italic font-light text-white">Relationships</span>.
          </h1>

          {/*  Authentic Text From DOCX  */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light max-w-xl">
            <span className="text-[#FF5722] font-bold">Savera</span> Tex Solution LLP is a textile commission agency that
            connects manufacturers with retailers and wholesalers across India and international markets. We work with
            both sides of the textile trade, helping manufacturers reach new buyers and enabling retailers and
            wholesalers to explore suitable suppliers for their business requirements.
          </p>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl">
            With connections across major textile hubs in India, we help manufacturers expand their business reach and
            create new trade opportunities. At the same time, we help retailers and wholesalers connect with suitable
            manufacturers and explore collections that match their market needs.
          </p>

          {/*  Interactive Action Buttons  */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#connect"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF5722] via-orange-500 to-amber-500 hover:from-[#E64A19] hover:to-amber-600 text-white font-bold text-sm shadow-xl glow-orange transition transform hover:scale-105 flex items-center gap-2.5">
              <span>Inquire for Sourcing</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#map"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm backdrop-blur-md transition flex items-center gap-2">
              <span>Explore Sourcing Hubs</span>
            </a>
          </div>

        </div>

        {/*  Right Column: Pure Luxury Showcase Visual (5 cols - Zero Text Overlays)  */}
        <div className="lg:col-span-5 relative">
          {/*  Backlight Ambient Glow Effect  */}
          <div
            className="absolute -inset-2 bg-gradient-to-tr from-[#FF5722]/30 via-amber-400/20 to-transparent rounded-3xl blur-2xl opacity-75">
          </div>

          <div
            className="relative bg-white/[0.04] backdrop-blur-xl p-3.5 rounded-3xl border border-white/20 shadow-2xl group overflow-hidden">
            <div className="h-[520px] lg:h-[580px] w-full rounded-2xl overflow-hidden relative shadow-2xl bg-neutral-950">
              <img src="photos/clean_hero.jpg" alt="Savera Textiles Showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out" />
            </div>
          </div>
        </div>

      </div>

      {/*  Integrated Luxury Trust Metrics Bar (Seamless & Connected)  */}
      <div className="pt-8 border-t border-neutral-800/80">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-800/80">

          <div className="text-center md:text-left md:pl-2">
            <div className="text-3xl lg:text-4xl font-black font-luxury text-[#FF5722]">500+</div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-200 mt-1">Cities with Active Clients</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Across All 29 States & International Markets</p>
          </div>

          <div className="text-center md:text-left md:pl-8 pt-4 md:pt-0">
            <div className="text-3xl lg:text-4xl font-black font-luxury text-[#FF5722]">1,200+</div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-200 mt-1">Retailers & Wholesalers</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Connected Directly with Suitable Mills</p>
          </div>

          <div className="text-center md:text-left md:pl-8 pt-4 md:pt-0">
            <div className="text-3xl lg:text-4xl font-black font-luxury text-[#FF5722]">700+</div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-200 mt-1">Manufacturing Partners</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Across 6 Major Textile Production Hubs</p>
          </div>

          <div className="text-center md:text-left md:pl-8 pt-4 md:pt-0">
            <div className="text-3xl lg:text-4xl font-black font-luxury text-[#FF5722]">6 Hubs</div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-200 mt-1">Major Textile Hubs</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Kolkata, Surat, Varanasi, Jaipur, Ahmedabad, Bhagalpur</p>
          </div>

        </div>
      </div>

    </div>
  </section>
  );
}
