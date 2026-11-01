import React, { useState } from 'react';

export default function ProductRange() {
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    {
      id: 'sarees',
      categoryNum: '01',
      title: 'Sarees Collection',
      shortTitle: 'Sarees',
      tagline: 'Surat & Banaras Heritage Weaves',
      image: '/photos/clean_sarees.jpg',
      badge: 'Brocades & Silks',
      badgeColor: 'bg-orange-100 text-[#FF5722] border-orange-200',
      description: 'Direct connections with master weavers and composite mills producing genuine Banarasi Katan, Organza, Georgette, and Surat designer print sarees at true factory-gate prices.',
      tags: ['Banarasi Katan Silk', 'Surat Jacquard', 'Pure Organza', 'Bandhani & Patola', 'Loom Rates'],
      hubs: 'Varanasi & Surat',
      moq: 'Flexible Wholesale Packs',
      delivery: 'Direct Mill Dispatch',
      themeGradient: 'from-orange-500/10 via-amber-500/5 to-white'
    },
    {
      id: 'salwar_suits',
      categoryNum: '02',
      title: 'Salwar Suits & Dress Materials',
      shortTitle: 'Salwar Suits',
      tagline: 'Unstitched & Semi-Stitched Sets',
      image: '/photos/clean_salwar_suits.jpg',
      badge: 'High-Volume Daily Wear',
      badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      description: 'Extensive collections of unstitched dress materials, festive embroidered three-piece suits, and printed daily wear cottons sourced directly from processing houses in Ahmedabad and Surat.',
      tags: ['Pure Cotton Suits', 'Chanderi Silk Sets', 'Handblock Prints', 'Heavy Dupatta Sets', 'Fast Turnover'],
      hubs: 'Ahmedabad & Surat',
      moq: 'Direct Factory Bundles',
      delivery: 'Bulk Processing Houses',
      themeGradient: 'from-emerald-500/10 via-teal-500/5 to-white'
    },
    {
      id: 'lehengas',
      categoryNum: '03',
      title: 'Bridal & Festive Lehengas',
      shortTitle: 'Lehengas',
      tagline: 'Artisan Zardozi & Heavy Embroidery',
      image: '/photos/clean_lehengas.jpg',
      badge: 'Wedding & Bridal Tier',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      description: 'Curated bridal and occasion lehengas featuring intricate hand embroidery, sequins, and threadwork. Ideal for premier retail showrooms seeking high-margin seasonal bridal inventory.',
      tags: ['Bridal Velvet', 'Georgette Can-Can Sets', 'Artisan Zari Work', 'Semi-Stitched Lehengas', 'Premium Tier'],
      hubs: 'Surat & Kolkata',
      moq: 'Curated Showroom Sets',
      delivery: 'Master Artisan Centers',
      themeGradient: 'from-amber-500/10 via-orange-500/5 to-white'
    },
    {
      id: 'indo_western',
      categoryNum: '04',
      title: 'Indo-Western & Ready-to-Wear',
      shortTitle: 'Indo-Western',
      tagline: 'Contemporary Fusion & Kurti Sets',
      image: '/photos/clean_indo_western.jpg',
      badge: 'Trending Fast Fashion',
      badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
      description: 'Contemporary silhouette tunics, co-ord sets, jacket gowns, and modern festive fusion wear tailored for high-repeat customer turnover and modern boutique display.',
      tags: ['Kurti Pant Sets', 'Fusion Gowns', 'Designer Co-ords', 'Tunic Sets', 'Fast-Moving Lines'],
      hubs: 'Jaipur & Surat',
      moq: 'Assorted Size Packs',
      delivery: 'Express Boutique Lines',
      themeGradient: 'from-purple-500/10 via-pink-500/5 to-white'
    }
  ];

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="products" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-white via-orange-50/20 to-white border-b border-[#E8E3DA] relative overflow-hidden">

      {/* Warm Ambient Decorative Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E3DA] pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-[#FF5722]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-ping"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest font-mono">Curated Product Portfolios</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-luxury text-[#0B0E14] tracking-tight">
              Featured Product Range
            </h2>
            <p className="text-sm md:text-base text-neutral-600">
              Connecting manufacturers with buyers across 4 primary commercial categories directly from source looms.
            </p>
          </div>

          {/* Carousel Category Switcher & Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs">
              {products.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    activeIndex === idx
                      ? 'bg-gradient-to-r from-[#FF5722] to-amber-500 text-white shadow-md'
                      : 'text-neutral-600 hover:text-[#0B0E14] hover:bg-slate-100'
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-80">{p.categoryNum}</span>
                  <span>{p.shortTitle}</span>
                </button>
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200 shadow-xs">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-neutral-700 hover:text-[#FF5722] transition cursor-pointer"
                title="Previous Category"
                aria-label="Previous Category"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-xl hover:bg-slate-100 flex items-center justify-center text-neutral-700 hover:text-[#FF5722] transition cursor-pointer"
                title="Next Category"
                aria-label="Next Category"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ═══ INTERACTIVE FLEX CAROUSEL (Desktop & Tablet) ═══ */}
        <div className="hidden lg:flex gap-4 h-[640px] w-full transition-all duration-700 ease-in-out">
          {products.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-3xl overflow-hidden border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer shadow-lg group ${
                  isActive
                    ? 'flex-[3.5] border-orange-300 bg-white ring-2 ring-orange-400/20 shadow-2xl'
                    : 'flex-[1] border-slate-200 hover:border-orange-300 bg-slate-50 hover:bg-white'
                }`}
              >
                {/* ── EXPANDED STATE (Active Card) ── */}
                {isActive && (
                  <div className="h-full w-full grid grid-cols-12 animate-fadeIn overflow-hidden">
                    {/* Left: High-Res Photo Showcase (5 Cols) */}
                    <div className="col-span-5 relative h-full overflow-hidden bg-neutral-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Soft ambient gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Top Badges */}
                      <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                        <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border backdrop-blur-md ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-[#FF5722] border border-orange-200 shadow-sm flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse"></span>
                          <span>Hub: {item.hubs}</span>
                        </span>
                      </div>

                      {/* Bottom Image Tag */}
                      <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                        <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase font-bold">
                          Direct Loom Rates
                        </span>
                        <p className="text-sm font-semibold drop-shadow-md">
                          Verified Composite Mill Partners
                        </p>
                      </div>
                    </div>

                    {/* Right: Technical Details & Commercial CTA (7 Cols) */}
                    <div className="col-span-7 p-6 lg:p-8 flex flex-col justify-between bg-gradient-to-br from-white via-orange-50/20 to-amber-50/10">
                      <div className="space-y-4">
                        {/* Category Header */}
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="px-2.5 py-0.5 rounded-md bg-[#FF5722] text-white font-mono font-black text-xs">
                              {item.categoryNum}
                            </span>
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5722]">
                              Textile Portfolio Collection
                            </span>
                          </div>
                          <h3 className="text-3xl font-bold font-luxury text-[#0B0E14] tracking-tight">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#FF5722] font-semibold mt-0.5">
                            {item.tagline}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                          {item.description}
                        </p>

                        {/* Attribute Pills */}
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold block">
                            Key Fabric Specifications
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="px-2.5 py-1 rounded-xl text-xs font-medium bg-white text-neutral-800 border border-slate-200 shadow-2xs hover:border-orange-300 transition"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Specifications Grid */}
                        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200/80">
                          <div className="bg-white/90 p-3 rounded-2xl border border-slate-200/80">
                            <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">
                              Production Centers
                            </span>
                            <span className="text-xs font-bold text-neutral-900 mt-0.5 block">
                              {item.hubs}
                            </span>
                          </div>
                          <div className="bg-white/90 p-3 rounded-2xl border border-slate-200/80">
                            <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-bold">
                              Wholesale MOQ
                            </span>
                            <span className="text-xs font-bold text-neutral-900 mt-0.5 block">
                              {item.moq}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action Strip */}
                      <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          <span className="text-xs font-semibold text-neutral-600 font-mono">
                            {item.delivery}
                          </span>
                        </div>

                        <a
                          href="#connect"
                          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF5722] to-amber-500 hover:from-[#E64A19] hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-md glow-orange transition transform hover:scale-105 flex items-center gap-2"
                        >
                          <span>Inquire Catalog & Swatches</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── COLLAPSED STATE (Inactive Card) ── */}
                {!isActive && (
                  <div className="h-full w-full relative flex flex-col items-center justify-between py-8 px-4 overflow-hidden">
                    {/* Background preview image with warm translucent tint */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover opacity-25 filter blur-xs group-hover:opacity-40 group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-orange-50/70 to-white/95"></div>
                    </div>

                    {/* Top: Category Number */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-2xl bg-white border border-orange-200/80 shadow-sm flex items-center justify-center text-[#FF5722] font-black font-royal text-sm group-hover:scale-110 transition">
                        {item.categoryNum}
                      </div>
                    </div>

                    {/* Center: Vertical Rotated Title */}
                    <div className="relative z-10 flex-1 flex items-center justify-center my-6">
                      <span className="[writing-mode:vertical-rl] rotate-180 font-luxury font-bold text-lg text-neutral-800 group-hover:text-[#FF5722] tracking-wider uppercase transition whitespace-nowrap">
                        {item.title}
                      </span>
                    </div>

                    {/* Bottom: Click to Expand Pill */}
                    <div className="relative z-10">
                      <div className="px-3 py-1.5 rounded-full bg-white/90 border border-slate-200 shadow-2xs text-[10px] font-bold text-neutral-600 group-hover:text-[#FF5722] group-hover:border-orange-300 transition flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]"></span>
                        <span>Expand</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ═══ MOBILE / TABLET VIEW (< lg) ═══ */}
        <div className="lg:hidden space-y-6">
          {/* Active Card for Mobile */}
          <div className="bg-white rounded-3xl border border-orange-200 shadow-xl overflow-hidden">
            {/* Top Image Frame */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-100">
              <img
                src={products[activeIndex].image}
                alt={products[activeIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase border backdrop-blur-md ${products[activeIndex].badgeColor}`}>
                  {products[activeIndex].badge}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 text-[#FF5722] border border-orange-200">
                  Hub: {products[activeIndex].hubs}
                </span>
              </div>

              {/* Bottom Title on Image */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <span className="text-[10px] font-mono font-bold text-amber-300 uppercase">
                  Category {products[activeIndex].categoryNum}
                </span>
                <h3 className="text-2xl font-bold font-luxury">
                  {products[activeIndex].title}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-5 bg-gradient-to-b from-white to-orange-50/20">
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {products[activeIndex].description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {products[activeIndex].tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white text-neutral-800 border border-slate-200 shadow-2xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Specs */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200 text-xs">
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase font-bold">Hubs</span>
                  <span className="font-bold text-neutral-900">{products[activeIndex].hubs}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase font-bold">MOQ</span>
                  <span className="font-bold text-neutral-900">{products[activeIndex].moq}</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href="#connect"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF5722] to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
                >
                  <span>Inquire Catalog & Swatches</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Indicator Dots & Prev/Next for Mobile */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-neutral-700 shadow-xs flex items-center gap-1"
            >
              ← Prev
            </button>
            <div className="flex items-center gap-1.5">
              {products.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === idx ? 'w-7 bg-[#FF5722]' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-neutral-700 shadow-xs flex items-center gap-1"
            >
              Next →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
