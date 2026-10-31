import React, { useState } from 'react';

export default function ProductRange() {
  const [activeFilter, setActiveFilter] = useState('all');

  const products = [
    {
      id: 'sarees',
      category: 'sarees',
      cardType: 'Heritage Loom Spotlight',
      title: 'Sarees Collection',
      tagline: 'Surat & Banaras Heritage Weaves',
      image: '/photos/clean_sarees.jpg',
      badge: 'Brocades & Silks',
      badgeColor: 'bg-orange-500/20 text-orange-400 border-orange-500/40',
      description: 'Direct connections with master weavers and composite mills producing genuine Banarasi Katan, Organza, Georgette, and Surat designer print sarees at true factory-gate prices.',
      tags: ['Banarasi Katan Silk', 'Surat Jacquard', 'Pure Organza', 'Bandhani & Patola', 'Loom Rates'],
      hubs: 'Varanasi & Surat',
      moq: 'Flexible Wholesale Packs',
      accentColor: 'from-[#FF5722] to-amber-500'
    },
    {
      id: 'salwar_suits',
      category: 'suits',
      cardType: 'Prismatic Textile Card',
      title: 'Salwar Suits & Dress Materials',
      tagline: 'Unstitched & Semi-Stitched Sets',
      image: '/photos/clean_salwar_suits.jpg',
      badge: 'High-Volume Daily Wear',
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
      description: 'Extensive collections of unstitched dress materials, festive embroidered three-piece suits, and printed daily wear cottons sourced directly from processing houses in Ahmedabad and Surat.',
      tags: ['Pure Cotton Suits', 'Chanderi Silk Sets', 'Handblock Prints', 'Heavy Dupatta Sets', 'Fast Turnover'],
      hubs: 'Ahmedabad & Surat',
      moq: 'Direct Factory Bundles',
      accentColor: 'from-emerald-500 to-teal-400'
    },
    {
      id: 'lehengas',
      category: 'lehengas',
      cardType: 'Royal Gold Luxury Card',
      title: 'Bridal & Festive Lehengas',
      tagline: 'Artisan Zardozi & Heavy Embroidery',
      image: '/photos/clean_lehengas.jpg',
      badge: 'Wedding & Bridal Tier',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      description: 'Curated bridal and occasion lehengas featuring intricate hand embroidery, sequins, and threadwork. Ideal for premier retail showrooms seeking high-margin seasonal bridal inventory.',
      tags: ['Bridal Velvet', 'Georgette Can-Can Sets', 'Artisan Zari Work', 'Semi-Stitched Lehengas', 'Premium Tier'],
      hubs: 'Surat & Kolkata',
      moq: 'Curated Showroom Sets',
      accentColor: 'from-amber-400 via-orange-500 to-amber-600'
    },
    {
      id: 'indo_western',
      category: 'indo_western',
      cardType: 'Modern Kinetic Card',
      title: 'Indo-Western & Ready-to-Wear',
      tagline: 'Contemporary Fusion & Kurti Sets',
      image: '/photos/clean_indo_western.jpg',
      badge: 'Trending Fast Fashion',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      description: 'Contemporary silhouette tunics, co-ord sets, jacket gowns, and modern festive fusion wear tailored for high-repeat customer turnover and modern boutique display.',
      tags: ['Kurti Pant Sets', 'Fusion Gowns', 'Designer Co-ords', 'Tunic Sets', 'Fast-Moving Lines'],
      hubs: 'Jaipur & Surat',
      moq: 'Assorted Size Packs',
      accentColor: 'from-purple-500 to-pink-500'
    }
  ];

  const filtered = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section id="products" className="py-24 px-6 sm:px-12 bg-white dark:bg-[#07090D] border-b border-[#E8E3DA] dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E8E3DA] dark:border-neutral-800 pb-8">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/30 text-[#FF5722]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-ping"></span>
              <span className="text-[11px] font-bold uppercase tracking-widest font-mono">Curated Product Portfolios</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-luxury text-[#0B0E14] dark:text-white tracking-tight">
              Featured Product Range
            </h2>
            <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
              Connecting manufacturers with buyers across 4 primary commercial categories directly from source looms.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#FAF8F5] dark:bg-neutral-900/90 p-1.5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-inner">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#FF5722] text-white shadow-md'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-[#0B0E14] dark:hover:text-white'
              }`}
            >
              All 4 Collections
            </button>
            <button
              onClick={() => setActiveFilter('sarees')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeFilter === 'sarees'
                  ? 'bg-[#FF5722] text-white shadow-md'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-[#0B0E14] dark:hover:text-white'
              }`}
            >
              Sarees
            </button>
            <button
              onClick={() => setActiveFilter('suits')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeFilter === 'suits'
                  ? 'bg-[#FF5722] text-white shadow-md'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-[#0B0E14] dark:hover:text-white'
              }`}
            >
              Salwar Suits
            </button>
            <button
              onClick={() => setActiveFilter('lehengas')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeFilter === 'lehengas'
                  ? 'bg-[#FF5722] text-white shadow-md'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-[#0B0E14] dark:hover:text-white'
              }`}
            >
              Lehengas
            </button>
            <button
              onClick={() => setActiveFilter('indo_western')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeFilter === 'indo_western'
                  ? 'bg-[#FF5722] text-white shadow-md'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-[#0B0E14] dark:hover:text-white'
              }`}
            >
              Indo-Western
            </button>
          </div>
        </div>

        {/* 4 Distinct Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="card-hover-lift hover-shimmer-trigger group relative bg-[#FAF8F5] dark:bg-neutral-900 rounded-3xl border border-[#E8E3DA] dark:border-neutral-800 overflow-hidden shadow-lg flex flex-col justify-between transition-all duration-500"
            >
              {/* Top Visual Frame with Animated Shimmer */}
              <div className="relative h-72 sm:h-80 overflow-hidden bg-neutral-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Shimmer Light Bar */}
                <div className="shimmer-shine pointer-events-none absolute inset-0 -top-full h-[300%] w-16 bg-white/20 blur-md transform -rotate-25 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                {/* Category Floating Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border backdrop-blur-md ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Sourcing Hub Pin */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-black/60 backdrop-blur-md text-amber-300 border border-white/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>Hub: {item.hubs}</span>
                  </span>
                </div>

                {/* Title Overlay at bottom of visual */}
                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <span className="text-[10px] font-mono tracking-widest text-[#FF5722] uppercase font-bold">
                    Category 0{idx + 1} • {item.cardType}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-luxury text-white tracking-tight drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-amber-200/90 font-medium mt-0.5">
                    {item.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body & Technical Specifications */}
              <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Fabric & Technical Attribute Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/80 shadow-2xs group-hover:border-orange-300 dark:group-hover:border-orange-500/40 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-5 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-4">
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
                    <span>MOQ: </span>
                    <span className="font-bold text-neutral-800 dark:text-neutral-200">{item.moq}</span>
                  </div>

                  <a
                    href="#connect"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF5722] to-amber-500 hover:from-[#E64A19] hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-md glow-orange transition transform hover:scale-105 flex items-center gap-1.5"
                  >
                    <span>Inquire Catalog</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast-Turnover Sourcing Callout */}
        <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-neutral-900 border border-[#E8E3DA] dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-bold font-royal text-[#0B0E14] dark:text-white text-base">
              Custom Fabric Weaving & Unstitched Material Inquiries
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Need custom yarn specifications, jacquard motifs, or special loom runs? Our 700+ verified partner mills accommodate custom commercial weaving contracts.
            </p>
          </div>
          <a
            href="#connect"
            className="px-5 py-2.5 rounded-xl border-2 border-[#FF5722] text-[#FF5722] hover:bg-[#FF5722] hover:text-white font-bold text-xs uppercase tracking-wider transition shrink-0"
          >
            Custom Loom Order
          </a>
        </div>

      </div>
    </section>
  );
}
