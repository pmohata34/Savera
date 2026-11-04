import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProductRange() {
  const [active, setActive] = useState(null);
  const modalRef = useRef(null);
  const id = useId();

  const products = [
    {
      id: 'sarees',
      categoryNum: '01',
      title: 'Sarees',
      tagline: 'Cotton, Silk, Designer, and Partywear collections',
      image: '/assets/Sarees.jpeg',
      description: 'Comprehensive wholesale collections spanning pure Varanasi Katan silks, lightweight organzas, handloom cottons, partywear georgettes, and intricately embellished designer festive sarees direct from composite looms.',
      tags: ['Cotton Sarees', 'Pure Silk', 'Designer Wear', 'Partywear Collections'],
      gridClass: 'lg:col-span-7'
    },
    {
      id: 'salwar-suits',
      categoryNum: '02',
      title: 'Salwar Suits',
      tagline: 'Stitched and unstitched varieties',
      image: '/assets/Salwar_Suit.jpeg',
      description: 'Extensive portfolio of daily-wear and festive salwar suit sets available in unstitched 3-piece cuts as well as ready-to-wear tailored sets. Features premium cottons, chanderi silks, modal, and handblock prints.',
      tags: ['Stitched Suits', 'Unstitched Dress Materials', '3-Piece Sets', 'Handblock Prints'],
      gridClass: 'lg:col-span-5'
    },
    {
      id: 'lehengas',
      categoryNum: '03',
      title: 'Lehengas',
      tagline: 'Bridal, festive, and partywear collections',
      image: '/assets/Lehengas.jpeg',
      description: 'Bridal masterpieces, festive occasion wear, and contemporary lightweight partywear lehenga sets. Masterfully crafted with intricate zardozi, gota patti, resham embroidery, sequins, and opulent flares.',
      tags: ['Bridal Lehengas', 'Festive Wear', 'Partywear Collections', 'Semi-Stitched Sets'],
      gridClass: 'lg:col-span-4'
    },
    {
      id: 'indo-western',
      categoryNum: '04',
      title: 'Indo Western Wear',
      tagline: 'Gowns, kurtis, and fusion sets',
      image: '/assets/Indo_Western.jpeg',
      description: 'Modern silhouettes meeting traditional textiles: floor-length evening gowns, asymmetrical tunic kurtis, co-ord jacket sets, and fusion drape dresses designed for the modern ethnic retail market.',
      tags: ['Designer Gowns', 'Contemporary Kurtis', 'Fusion Sets', 'Co-ord Ensembles'],
      gridClass: 'lg:col-span-4'
    },
    {
      id: 'fabrics',
      categoryNum: '05',
      title: 'Fabrics',
      tagline: 'Dyable, dyed, printed, silk, and cotton fabrics',
      image: '/assets/Fabrics.jpeg',
      description: 'Industrial and commercial wholesale fabric yardage covering pure dyeable whites, mills-dyed solids, screen and digital prints, pure silks, viscose blends, modal muslins, and rich cambric cottons.',
      tags: ['Dyeable Fabrics', 'Dyed Solids', 'Printed Yardage', 'Silk & Cotton Blends'],
      gridClass: 'lg:col-span-4'
    }
  ];

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setActive(null);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActive(null);
      }
    }
    if (active) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [active]);

  return (
    <section id="products" className="py-14 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FDF0E5] via-[#FAF8F5] to-white border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-bl from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#fbd7b4]/50 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#f8b47d]/60 text-[#f16701] text-[11px] font-bold uppercase tracking-widest shadow-2xs">
              <span>Textile Portfolios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1318] tracking-tight">
              Featured Product Range
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal">
              Connecting manufacturers with buyers across 5 primary commercial categories directly from source looms. Click any card to expand details.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#f16701] bg-white px-3.5 py-2 rounded-xl border border-[#f8b47d]/40 shadow-2xs">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>Interactive Expandable Bento Grid</span>
          </div>
        </div>

        {/* ── EXPANDED MODAL OVERLAY (Vengence UI Expandable Bento) ── */}
        <AnimatePresence>
          {active && typeof active === 'object' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#1e1005]/50 backdrop-blur-xs h-full w-full z-[10000]"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && typeof active === 'object' ? (
            <div className="fixed inset-0 top-6 grid place-items-center z-[10001] p-4">
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={modalRef}
                className="w-full max-w-[580px] max-h-[90vh] flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#f8b47d]/50"
              >
                {/* Modal Header Image */}
                <motion.div layoutId={`image-${active.title}-${id}`} className="relative h-64 sm:h-72 w-full bg-[#FAF8F5] overflow-hidden flex-shrink-0">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1005]/80 via-[#1e1005]/20 to-transparent"></div>

                  {/* Close Button on Image */}
                  <button
                    onClick={() => setActive(null)}
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/95 hover:bg-[#f16701] text-neutral-800 hover:text-white backdrop-blur-md flex items-center justify-center transition cursor-pointer shadow-md border border-[#f8b47d]/50"
                    aria-label="Close modal"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Title horizontally at bottom of the expanded image */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#fbd7b4]">
                      Category {active.categoryNum} • Textile Portfolio
                    </span>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-2xl sm:text-3xl font-black text-white leading-tight"
                    >
                      {active.title}
                    </motion.h3>
                  </div>
                </motion.div>

                {/* Modal Content Body */}
                <div className="p-6 sm:p-7 space-y-5 overflow-y-auto">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#f16701] block mb-1">
                      Collection Highlights
                    </span>
                    <p className="text-sm font-bold text-[#0F1318]">
                      {active.tagline}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block mb-1">
                      Commercial Description
                    </span>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* Fabric Tag Pills */}
                  <div className="space-y-1.5 pt-2 border-t border-[#fbd7b4]/40">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block">
                      Fabric Specifications
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {active.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button inside Expanded Card */}
                  <div className="pt-4 border-t border-[#fbd7b4]/40 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setActive(null)}
                      className="px-4 py-2.5 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-xs font-bold text-neutral-700 transition cursor-pointer"
                    >
                      Close Details
                    </button>

                    <a
                      href="#connect"
                      onClick={() => setActive(null)}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#f16701] to-[#f48129] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:opacity-95 transition flex items-center gap-1.5"
                    >
                      <span>Inquire This Collection</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        {/* ── EXPANDABLE BENTO GRID (5 Products) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 items-stretch">
          {products.map((item) => (
            <motion.div
              layoutId={`card-${item.title}-${id}`}
              key={item.id}
              onClick={() => setActive(item)}
              className={`${item.gridClass} group rounded-2xl overflow-hidden bg-white border border-[#f8b47d]/40 hover:border-[#f16701]/60 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between transform hover:-translate-y-1 relative`}
            >
              <div>
                {/* Photo at Front */}
                <motion.div layoutId={`image-${item.title}-${id}`} className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1e1005]/85 via-transparent to-transparent"></div>

                  {/* Horizontal Title at Bottom of Image */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white flex items-end justify-between">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-[#fbd7b4]">
                        Category {item.categoryNum}
                      </span>
                      <motion.h3
                        layoutId={`title-${item.title}-${id}`}
                        className="text-lg sm:text-xl font-black text-white leading-tight"
                      >
                        {item.title}
                      </motion.h3>
                    </div>

                    {/* Subtle Expand Hint Icon */}
                    <span className="w-7 h-7 rounded-lg bg-white/20 hover:bg-white text-white hover:text-[#f16701] backdrop-blur-md flex items-center justify-center transition shadow-xs group-hover:bg-[#f16701] group-hover:text-white">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </span>
                  </div>
                </motion.div>

                {/* Content Box: Tagline and Description */}
                <div className="p-4 sm:p-5 space-y-2">
                  <p className="text-xs font-bold text-[#f16701] leading-snug">
                    {item.tagline}
                  </p>
                  <motion.p
                    layoutId={`description-${item.title}-${id}`}
                    className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed font-normal line-clamp-3"
                  >
                    {item.description}
                  </motion.p>
                </div>
              </div>

              {/* Bottom Subtle Pill Action */}
              <div className="px-4 pb-4 pt-1 flex items-center justify-between text-[11px] text-[#f16701] font-semibold">
                <span>View Full Details</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popped Centered Inquiry CTA at Bottom after all 5 products */}
        <div className="pt-4 flex justify-center">
          <a
            href="#connect"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg glow-orange transition transform hover:scale-105 flex items-center gap-2"
          >
            <span>Inquire Catalog &amp; Swatches</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
