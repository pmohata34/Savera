import React from 'react';
import InteractiveBook from './ui/interactive-book';
import RadialGlowButton from './ui/radial-glow-button';

export default function ProductRange() {
  const products = [
    {
      id: 'sarees',
      categoryNum: '01',
      title: 'Sarees',
      tagline: 'Silk, cotton, designer, and partywear collections',
      image: '/assets/Sarees.jpeg',
      content: 'Comprehensive wholesale saree portfolios direct from premier weaving clusters in Varanasi, Surat, and Bengal. Featuring pure Banarasi silks, lightweight daily wear cottons, ornate bridal partywear, and contemporary designer weaves.',
      specs: ['Hubs: Varanasi, Surat & Bengal', 'Direct Mill Wholesale Batches'],
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
      specs: ['Hubs: Jaipur & Ahmedabad', 'Unstitched 3-Piece & Tailored'],
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
      specs: ['Craft: Zardozi & Gota Patti', 'Semi-Stitched & Designer Sets'],
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
      specs: ['Styles: Gowns & Co-ords', 'Modern Ethnic Retail'],
      tags: ['Designer Gowns', 'Contemporary Kurtis', 'Fusion Sets', 'Co-ord Ensembles'],
      ctaHref: '#connect'
    },
    {
      id: 'fabrics',
      categoryNum: '05',
      title: 'Fabrics',
      tagline: 'Dyeable, dyed, printed, silk, and cotton fabrics',
      image: '/assets/Fabrics.jpeg',
      content: 'Industrial and commercial wholesale fabric yardage covering pure dyeable whites, mills-dyed solids, screen and digital prints, pure silks, viscose blends, modal muslins, and rich cambric cottons.',
      specs: ['Hubs: Surat & Ahmedabad', 'Bulk Mill Yardage & Rolls'],
      tags: ['Dyeable Fabrics', 'Dyed Solids', 'Printed Yardage', 'Silk & Cotton Blends'],
      ctaHref: '#connect'
    }
  ];

  const bookPages = products.map((p, idx) => ({
    pageNumber: idx + 1,
    title: p.title,
    tagline: p.tagline,
    stageTag: `Category 0${idx + 1}`,
    image: p.image,
    content: p.content,
    specs: p.specs,
    tags: p.tags,
    ctaHref: p.ctaHref
  }));

  return (
    <section id="products" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDF0E5] via-[#FAF8F5] to-white border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            Featured Product Range
          </h2>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Open our 3D lookbook below to explore our collections.
          </p>
        </div>

        {/* ── 3D INTERACTIVE TEXTILE LOOKBOOK (Open Book in Products) ── */}
        <div className="w-full flex justify-center py-2">
          <InteractiveBook
            coverImage="/assets/product_range_cover.jpg"
            coverBadge="Wholesale Lookbook • Since 1995"
            coverTitle="Product Range"
            coverSubtitle="Textile Portfolios & Swatches"
            coverDescription="Connecting manufacturers with buyers across 5 primary commercial categories."
            bookAuthor={
              <span className="font-playfair font-bold inline-flex items-baseline gap-1">
                <span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span>
              </span>
            }
            insideCoverBadge="Verified Collections"
            insideCoverTitle="Five Core Product Categories"
            insideCoverDescription="Turn the pages to view authentic photography, weaving specifications, and wholesale sourcing options direct from production looms."
            pages={bookPages}
            width={360}
            height={510}
          />
        </div>

        {/* Centered Popped Inquiry CTA */}
        <div className="pt-4 flex justify-center">
          <RadialGlowButton
            as="a"
            href="#connect"
            size="md"
          >
            <span>Inquire Catalog &amp; Swatches</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </RadialGlowButton>
        </div>

      </div>
    </section>
  );
}
