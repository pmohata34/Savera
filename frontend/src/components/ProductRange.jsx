import React, { useState } from 'react';

export default function ProductRange() {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      id: 'sarees',
      categoryNum: '01',
      title: 'SAREES',
      shortTitle: 'Sarees',
      tagline: 'Cotton, Silk, Designer, and Partywear collections',
      image: '/assets/Sarees.jpeg',
      description: 'Comprehensive wholesale collections spanning pure Varanasi Katan silks, lightweight organzas, handloom cottons, partywear georgettes, and intricately embellished designer festive sarees direct from composite looms.',
      tags: ['Cotton Sarees', 'Pure Silk', 'Designer Wear', 'Partywear Collections'],
      hubs: 'Varanasi, Surat & Kolkata HQ',
      moq: 'Wholesale Commercial Lots',
      badge: 'Bestseller Portfolio',
      badgeColor: 'bg-[#f7e5d4] text-[#f16701] border-[#f8b47d]/60',
      delivery: 'Direct Loom Dispatch'
    },
    {
      id: 'salwar-suits',
      categoryNum: '02',
      title: 'SALWAR SUITS',
      shortTitle: 'Salwar Suits',
      tagline: 'Stitched and unstitched varieties',
      image: '/assets/Salwar_Suit.jpeg',
      description: 'Extensive portfolio of daily-wear and festive salwar suit sets available in unstitched 3-piece cuts as well as ready-to-wear tailored sets. Features premium cottons, chanderi silks, modal, and handblock prints.',
      tags: ['Stitched Suits', 'Unstitched Dress Materials', '3-Piece Sets', 'Handblock Prints'],
      hubs: 'Jaipur, Surat & Ahmedabad',
      moq: 'Catalog & Bundle Minimums',
      badge: 'High Turnaround',
      badgeColor: 'bg-[#fbd7b4] text-[#f16701] border-[#f8b47d]/60',
      delivery: 'Direct Loom Dispatch'
    },
    {
      id: 'lehengas',
      categoryNum: '03',
      title: 'LEHENGAS',
      shortTitle: 'Lehengas',
      tagline: 'Bridal, festive, and partywear collections',
      image: '/assets/Lehengas.jpeg',
      description: 'Bridal masterpieces, festive occasion wear, and contemporary lightweight partywear lehenga sets. Masterfully crafted with intricate zardozi, gota patti, resham embroidery, sequins, and opulent can-can flares.',
      tags: ['Bridal Lehengas', 'Festive Wear', 'Partywear Collections', 'Semi-Stitched Sets'],
      hubs: 'Surat, Varanasi & Kolkata HQ',
      moq: 'Tiered Boutique Lots',
      badge: 'Bridal & Festive',
      badgeColor: 'bg-[#f8b47d]/40 text-[#f16701] border-[#f8b47d]/60',
      delivery: 'Direct Loom Dispatch'
    },
    {
      id: 'indo-western',
      categoryNum: '04',
      title: 'INDO WESTERN WEAR',
      shortTitle: 'Indo Western',
      tagline: 'Gowns, kurtis, and fusion sets',
      image: '/assets/Indo_Western.jpeg',
      description: 'Modern silhouettes meeting traditional textiles: floor-length evening gowns, asymmetrical tunic kurtis, co-ord jacket sets, and fusion drape dresses designed for the modern ethnic retail market.',
      tags: ['Designer Gowns', 'Contemporary Kurtis', 'Fusion Sets', 'Co-ord Ensembles'],
      hubs: 'Jaipur, Surat & Ahmedabad',
      moq: 'Curated Assortments',
      badge: 'Contemporary Fusion',
      badgeColor: 'bg-[#f79a52]/20 text-[#f16701] border-[#f8b47d]/60',
      delivery: 'Direct Loom Dispatch'
    },
    {
      id: 'fabrics',
      categoryNum: '05',
      title: 'FABRICS',
      shortTitle: 'Fabrics',
      tagline: 'Dyable, dyed, printed, silk, and cotton fabrics',
      image: '/assets/Fabrics.jpeg',
      description: 'Industrial and commercial wholesale fabric yardage covering pure dyeable whites, mills-dyed solids, screen and digital prints, pure silks, viscose blends, modal muslins, and rich cambric cottons.',
      tags: ['Dyeable Fabrics', 'Dyed Solids', 'Printed Yardage', 'Silk & Cotton Blends'],
      hubs: 'Surat, Ahmedabad & Bhagalpur',
      moq: 'Commercial Roll & Bale Runs',
      badge: 'Industrial Yardage',
      badgeColor: 'bg-[#f48129]/20 text-[#f16701] border-[#f8b47d]/60',
      delivery: 'Direct Loom Dispatch'
    }
  ];

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="products" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-white via-[#FAF8F5] to-white border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#fbd7b4]/50 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#f7e5d4] to-white border border-[#f8b47d]/60 text-[#f16701] text-xs font-bold uppercase tracking-widest shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#f16701] animate-ping"></span>
              <span>Commercial Product Portfolios</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1318] tracking-tight">
              Featured Product Range
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Connecting manufacturers with retailers and wholesalers across 5 primary commercial categories directly from source looms.
            </p>
          </div>

          {/* Carousel Category Switcher Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-[#f8b47d]/40 shadow-xs">
              {products.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    activeIndex === idx
                      ? 'bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52] text-white shadow-md glow-orange'
                      : 'text-neutral-600 hover:text-[#0F1318] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-80">{p.categoryNum}</span>
                  <span>{p.shortTitle}</span>
                </button>
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1 bg-white p-1.5 rounded-2xl border border-[#f8b47d]/40 shadow-xs">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl hover:bg-[#FAF8F5] text-neutral-700 hover:text-[#f16701] transition cursor-pointer"
                aria-label="Previous product"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl hover:bg-[#FAF8F5] text-neutral-700 hover:text-[#f16701] transition cursor-pointer"
                aria-label="Next product"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── DESKTOP INTERACTIVE FLEX CAROUSEL (5 Columns) ── */}
        <div className="hidden lg:flex gap-4 h-[580px] w-full transition-all duration-500">
          {products.map((item, idx) => {
            const isExpanded = activeIndex === idx;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-3xl overflow-hidden transition-all duration-700 ease-out cursor-pointer border border-[#f8b47d]/50 shadow-lg ${
                  isExpanded ? 'flex-[5] shadow-2xl ring-2 ring-[#f16701]/30' : 'flex-[1] hover:flex-[1.25] opacity-90 hover:opacity-100'
                }`}
              >
                {/* ── EXPANDED STATE ── */}
                {isExpanded ? (
                  <div className="w-full h-full grid grid-cols-12 bg-white">
                    {/* Left: Authentic Image (5 Cols) */}
                    <div className="col-span-5 relative overflow-hidden bg-[#FAF8F5]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                      <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border backdrop-blur-md ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 text-[#f16701] border border-[#f8b47d]/50">
                          Hub: {item.hubs}
                        </span>
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbd7b4]">
                          Direct Loom Sourcing
                        </span>
                        <p className="text-sm font-semibold drop-shadow-md">
                          Verified Composite Mill Partners
                        </p>
                      </div>
                    </div>

                    {/* Right: Technical Details & Commercial CTA (7 Cols) */}
                    <div className="col-span-7 p-7 lg:p-8 flex flex-col justify-between bg-gradient-to-br from-white via-[#FAF8F5] to-[#f7e5d4]/30">
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="px-2.5 py-0.5 rounded-md bg-[#f16701] text-white font-black text-xs">
                              {item.categoryNum}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#f16701]">
                              Textile Portfolio Collection
                            </span>
                          </div>
                          <h3 className="text-3xl font-extrabold text-[#0F1318] tracking-tight">
                            {item.title}
                          </h3>
                          <p className="text-xs font-bold text-[#f16701] mt-0.5">
                            {item.tagline}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                          {item.description}
                        </p>

                        <div className="space-y-1.5">
                          <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block">
                            Key Fabric Specifications
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded-xl text-xs font-medium bg-white text-neutral-800 border border-[#f8b47d]/40 shadow-2xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#fbd7b4]/50">
                          <div className="bg-white/90 p-3 rounded-2xl border border-[#f8b47d]/35">
                            <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                              Production Centers
                            </span>
                            <span className="text-xs font-bold text-neutral-900 mt-0.5 block">
                              {item.hubs}
                            </span>
                          </div>
                          <div className="bg-white/90 p-3 rounded-2xl border border-[#f8b47d]/35">
                            <span className="block text-[10px] uppercase tracking-wider text-neutral-500 font-bold">
                              Wholesale MOQ
                            </span>
                            <span className="text-xs font-bold text-neutral-900 mt-0.5 block">
                              {item.moq}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action Strip */}
                      <div className="pt-4 border-t border-[#fbd7b4]/50 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          <span className="text-xs font-bold text-neutral-600">
                            {item.delivery}
                          </span>
                        </div>

                        <a
                          href="#connect"
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-md glow-orange transition transform hover:scale-105 flex items-center gap-2"
                        >
                          <span>Inquire Catalog &amp; Swatches</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ── COLLAPSED VERTICAL TAB ── */
                  <div className="w-full h-full relative overflow-hidden bg-neutral-900 flex flex-col justify-between p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] group-hover:brightness-[0.9] transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>

                    <span className="relative z-10 w-7 h-7 rounded-lg bg-white/90 backdrop-blur-md text-[#f16701] font-black text-xs flex items-center justify-center shadow-md">
                      {item.categoryNum}
                    </span>

                    <div className="relative z-10 [writing-mode:vertical-rl] rotate-180 text-white font-extrabold text-sm tracking-wider uppercase drop-shadow-md py-4">
                      {item.title}
                    </div>

                    <div className="relative z-10 text-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#f16701]"></span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── MOBILE / TABLET ACCORDION CARDS ── */}
        <div className="lg:hidden space-y-4">
          <div className="rounded-3xl overflow-hidden border border-[#f8b47d]/50 bg-white shadow-xl">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden">
              <img
                src={products[activeIndex].image}
                alt={products[activeIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase border backdrop-blur-md ${products[activeIndex].badgeColor}`}>
                  {products[activeIndex].badge}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 text-[#f16701] border border-[#f8b47d]/50">
                  Hub: {products[activeIndex].hubs}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <span className="text-[10px] font-bold uppercase text-[#fbd7b4]">
                  Category {products[activeIndex].categoryNum}
                </span>
                <h3 className="text-2xl font-extrabold">
                  {products[activeIndex].title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 bg-gradient-to-b from-white to-[#FAF8F5]">
              <p className="text-xs font-bold text-[#f16701]">
                {products[activeIndex].tagline}
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                {products[activeIndex].description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {products[activeIndex].tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white text-neutral-800 border border-[#f8b47d]/40 shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#fbd7b4]/50 text-xs">
                <div>
                  <span className="block text-[10px] text-neutral-500 uppercase font-bold">Hubs</span>
                  <span className="font-bold text-neutral-900">{products[activeIndex].hubs}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-neutral-500 uppercase font-bold">MOQ</span>
                  <span className="font-bold text-neutral-900">{products[activeIndex].moq}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#fbd7b4]/50">
                <a
                  href="#connect"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
                >
                  <span>Inquire Catalog &amp; Swatches</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Indicator Dots & Prev/Next for Mobile */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl bg-white border border-[#f8b47d]/40 text-xs font-bold text-neutral-700 shadow-xs flex items-center gap-1 cursor-pointer"
            >
              ← Prev
            </button>
            <div className="flex items-center gap-1.5">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-3 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx ? 'w-7 bg-[#f16701]' : 'w-3 bg-[#fbd7b4]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-white border border-[#f8b47d]/40 text-xs font-bold text-neutral-700 shadow-xs flex items-center gap-1 cursor-pointer"
            >
              Next →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
