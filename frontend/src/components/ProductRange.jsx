import React from 'react';
import InteractiveBook from './ui/interactive-book';

export default function ProductRange() {
  const products = [
    {
      id: 'sarees',
      categoryNum: '01',
      title: 'Sarees',
      tagline: 'Cotton, Silk, Designer, and Partywear collections',
      image: '/assets/Sarees.jpeg',
      content: 'Comprehensive wholesale collections spanning pure Varanasi Katan silks, lightweight organzas, handloom cottons, partywear georgettes, and intricately embellished designer festive sarees direct from composite looms.',
      tags: ['Cotton Sarees', 'Pure Silk', 'Designer Wear', 'Partywear Collections'],
      ctaHref: '#connect'
    },
    {
      id: 'salwar-suits',
      categoryNum: '02',
      title: 'Salwar Suits',
      tagline: 'Stitched and unstitched varieties',
      image: '/assets/Salwar_Suit.jpeg',
      content: 'Extensive portfolio of daily-wear and festive salwar suit sets available in unstitched 3-piece cuts as well as ready-to-wear tailored sets. Features premium cottons, chanderi silks, modal, and handblock prints.',
      tags: ['Stitched Suits', 'Unstitched Dress Materials', '3-Piece Sets', 'Handblock Prints'],
      ctaHref: '#connect'
    },
    {
      id: 'lehengas',
      categoryNum: '03',
      title: 'Lehengas',
      tagline: 'Bridal, festive, and partywear collections',
      image: '/assets/Lehengas.jpeg',
      content: 'Bridal masterpieces, festive occasion wear, and contemporary lightweight partywear lehenga sets. Masterfully crafted with intricate zardozi, gota patti, resham embroidery, sequins, and opulent flares.',
      tags: ['Bridal Lehengas', 'Festive Wear', 'Partywear Collections', 'Semi-Stitched Sets'],
      ctaHref: '#connect'
    },
    {
      id: 'indo-western',
      categoryNum: '04',
      title: 'Indo Western Wear',
      tagline: 'Gowns, kurtis, and fusion sets',
      image: '/assets/Indo_Western.jpeg',
      content: 'Modern silhouettes meeting traditional textiles: floor-length evening gowns, asymmetrical tunic kurtis, co-ord jacket sets, and fusion drape dresses designed for the modern ethnic retail market.',
      tags: ['Designer Gowns', 'Contemporary Kurtis', 'Fusion Sets', 'Co-ord Ensembles'],
      ctaHref: '#connect'
    },
    {
      id: 'fabrics',
      categoryNum: '05',
      title: 'Fabrics',
      tagline: 'Dyable, dyed, printed, silk, and cotton fabrics',
      image: '/assets/Fabrics.jpeg',
      content: 'Industrial and commercial wholesale fabric yardage covering pure dyeable whites, mills-dyed solids, screen and digital prints, pure silks, viscose blends, modal muslins, and rich cambric cottons.',
      tags: ['Dyeable Fabrics', 'Dyed Solids', 'Printed Yardage', 'Silk & Cotton Blends'],
      ctaHref: '#connect'
    }
  ];

  const bookPages = products.map((p, idx) => ({
    pageNumber: idx + 1,
    title: p.title,
    tagline: p.tagline,
    stageTag: `Category 0${idx + 1} • Portfolio`,
    image: p.image,
    content: p.content,
    tags: p.tags,
    ctaHref: p.ctaHref
  }));

  return (
    <section id="products" className="py-14 sm:py-18 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FDF0E5] via-[#FAF8F5] to-white border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#f16701] text-[11px] font-bold uppercase tracking-widest border border-[#f8b47d]/50 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f16701] animate-ping"></span>
            <span>Textile Portfolios • 3D Interactive Lookbook</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            Featured Product Range
          </h2>

          <p className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52]">
            Connecting Manufacturers with Buyers Across 5 Primary Commercial Categories
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Open our 3D wholesale lookbook below to browse pure Varanasi silks, handloom cottons, festive lehengas, fusion ensembles and commercial fabric yardage directly from verified looms.
          </p>
        </div>

        {/* ── 3D INTERACTIVE TEXTILE LOOKBOOK (Open Book in Products) ── */}
        <div className="w-full flex justify-center py-2">
          <InteractiveBook
            coverBadge="Wholesale Lookbook • Since 1995"
            coverTitle="Product Range"
            coverSubtitle="Textile Portfolios & Swatches"
            coverDescription="Connecting manufacturers with buyers across 5 primary commercial categories."
            bookAuthor="Savera Tex Solution LLP"
            insideCoverBadge="Verified Collections"
            insideCoverTitle="Five Core Product Categories"
            insideCoverDescription="Turn the pages to view authentic photography, weaving specifications, and wholesale sourcing options direct from production looms."
            pages={bookPages}
            width={360}
            height={500}
          />
        </div>

        {/* Centered Popped Inquiry CTA */}
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
