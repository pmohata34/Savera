import React from 'react';

export default function ProductRange() {
  return (
<section id="products" className="py-24 px-12 bg-white border-b border-[#E8E3DA]">
    <div className="max-w-7xl mx-auto space-y-12">

      <div className="border-b border-[#E8E3DA] pb-8 space-y-2">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF5722]">Official Catalogue</span>
        <h2 className="text-4xl md:text-5xl font-bold font-luxury text-[#0B0E14] tracking-tight">
          Product Range
        </h2>
        <p className="text-base text-neutral-600">
          Connecting manufacturers and buyers across key ethnic wear, ready-to-wear, and loom fabric categories.
        </p>
      </div>

      {/*  ASYMMETRICAL EDITORIAL SHOWCASE (HERO SPOTLIGHT + CURATED COLLECTION DECK)  */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/*  Dominant Feature Spotlight: SAREES (7 cols)  */}
        <div
          className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl border border-[#E8E3DA] overflow-hidden shadow-lg flex flex-col justify-between group">
          <div className="relative h-[420px] overflow-hidden">
            <img src="/photos/clean_sarees.jpg" alt="Heritage Sarees Collection"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="absolute top-6 left-6 flex items-center gap-2">
              <span
                className="px-3.5 py-1.5 rounded-full bg-[#0B0E14]/80 backdrop-blur-md text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-400/30">
                FEATURED SPOTLIGHT • COLLECTION 01
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FF5722] text-white text-[11px] font-black">
                ESTD 2003
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-300">Handloom & Powerloom
                Weaves</span>
              <h3 className="text-3xl md:text-4xl font-black font-royal tracking-wide text-white">SAREES</h3>
              <p className="text-xs text-neutral-200 max-w-lg leading-relaxed">
                Cotton, Silk, Designer, and Partywear collections sourced straight from Varanasi, Surat, and Chanderi
                looms.
              </p>
            </div>
          </div>

          <div
            className="p-8 bg-white flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#E8E3DA]">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-lg bg-neutral-100 text-neutral-700 font-medium">Pure Katan Silk</span>
              <span className="px-3 py-1 rounded-lg bg-neutral-100 text-neutral-700 font-medium">Banarasi Jacquard</span>
              <span className="px-3 py-1 rounded-lg bg-neutral-100 text-neutral-700 font-medium">Surat Printed
                Georgette</span>
              <span className="px-3 py-1 rounded-lg bg-neutral-100 text-neutral-700 font-medium">Chanderi Cotton</span>
            </div>
            <a href="#connect"
              className="px-6 py-2.5 rounded-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition shadow shrink-0">
              Inquire Sourcing
            </a>
          </div>
        </div>

        {/*  Curated Vertical Trio Deck (5 cols)  */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4">

          {/*  Card 1: SALWAR SUITS  */}
          <div
            className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E3DA] hover:border-[#FF5722] hover:shadow-md transition flex items-center gap-5 group">
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative">
              <img src="/photos/clean_salwar_suits.jpg" alt="Salwar Suits"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <span
                className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-[#0B0E14]/80 text-[9px] font-bold text-amber-400">02</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF5722] font-bold">FOUNDATION WEAR •
                ESTD 1995</span>
              <h4 className="text-lg font-bold font-royal text-[#0B0E14]">SALWAR SUITS</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Stitched and unstitched varieties; fine muslin, cotton, chanderi, and partywear ensembles.
              </p>
            </div>
          </div>

          {/*  Card 2: LEHENGAS  */}
          <div
            className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E3DA] hover:border-[#FF5722] hover:shadow-md transition flex items-center gap-5 group">
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative">
              <img src="/photos/clean_lehengas.jpg" alt="Lehengas"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <span
                className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-[#0B0E14]/80 text-[9px] font-bold text-amber-400">03</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF5722] font-bold">BRIDAL & OCCASION •
                ESTD 2003</span>
              <h4 className="text-lg font-bold font-royal text-[#0B0E14]">LEHENGAS</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Bridal, festive, and partywear collections featuring zari, resham, and intricate heritage embroidery.
              </p>
            </div>
          </div>

          {/*  Card 3: INDO WESTERN  */}
          <div
            className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8E3DA] hover:border-[#FF5722] hover:shadow-md transition flex items-center gap-5 group">
            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 relative">
              <img src="/photos/clean_indo_western.jpg" alt="Indo Western"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <span
                className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-[#0B0E14]/80 text-[9px] font-bold text-amber-400">04</span>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF5722] font-bold">CONTEMPORARY FUSION
                • ESTD 2006</span>
              <h4 className="text-lg font-bold font-royal text-[#0B0E14]">INDO WESTERN WEAR</h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Designer gowns, premium kurtis, coordinated sets, and fusion ready-to-wear silhouettes.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/*  Architectural FABRIC HUB Banner (DOCX Specified Category)  */}
      <div
        className="bg-gradient-to-r from-[#0B0E14] via-[#1A1F2C] to-[#0B0E14] text-white p-8 px-10 rounded-3xl border border-neutral-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#FF5722] text-white text-[10px] font-mono font-bold tracking-widest">
              CATEGORY 05 • FABRICS SOURCING
            </span>
            <span className="text-xs text-neutral-400 font-mono">DIRECT FROM PRODUCTION HUBS</span>
          </div>
          <h3 className="text-2xl font-bold font-royal text-white">FABRICS & TEXTILE MATERIALS</h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Direct mill sourcing of dyable fabrics, mill-dyed materials, digital and screen printed textiles, pure silk,
            and pure cotton fabrics across Surat, Ahmedabad, Kolkata, and Bhagalpur.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a href="#map"
            className="px-5 py-2.5 rounded-full border border-neutral-600 hover:border-amber-400 text-xs text-neutral-300 font-bold transition">
            View Sourcing Hubs
          </a>
          <a href="#connect"
            className="px-6 py-2.5 rounded-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition shadow">
            Request Swatches
          </a>
        </div>
      </div>

    </div>
  </section>
  );
}
