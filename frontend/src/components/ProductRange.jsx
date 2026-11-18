import React from 'react';
import InteractiveBook from './ui/interactive-book';

export default function ProductRange() {
  const products = [
    {
      id: 'sarees',
      categoryNum: '01',
      title: 'SAREES',
      tagline: 'A Diverse Collection of Traditional & Contemporary Sarees',
      image: '/assets/Sarees.jpeg',
      content: 'Explore an extensive range of sarees featuring elegant designs, beautiful textures and traditional craftsmanship, suitable for different occasions and preferences.',
      includes: [
        'Cotton Sarees',
        'Silk Sarees',
        'Designer Sarees',
        'Partywear Sarees'
      ],
      ctaHref: '#connect'
    },
    {
      id: 'salwar-suits',
      categoryNum: '02',
      title: 'SALWAR SUITS',
      tagline: 'Elegance, Comfort & Versatile Designs',
      image: '/assets/Salwar_Suit.jpeg',
      content: 'Discover a variety of salwar suit collections combining traditional aesthetics with contemporary designs, offering styles for everyday wear and special occasions.',
      includes: [
        'Stitched Salwar Suits',
        'Unstitched Dress Materials',
        'Printed Collections',
        'Embroidered Suits'
      ],
      ctaHref: '#connect'
    },
    {
      id: 'lehengas',
      categoryNum: '03',
      title: 'LEHENGAS',
      tagline: 'Celebrating Tradition with Timeless Elegance',
      image: '/assets/Lehengas.jpeg',
      content: 'Explore beautiful lehenga collections featuring intricate embroidery, exquisite detailing and attractive designs for weddings, festivals and special celebrations',
      includes: [
        'Bridal Lehengas',
        'Festive Lehengas',
        'Partywear Lehengas',
        'Designer Lehengas'
      ],
      ctaHref: '#connect'
    },
    {
      id: 'indo-western',
      categoryNum: '04',
      title: 'INDO WESTERN WEAR',
      tagline: 'Where Traditional Elegance Meets Modern Fashion',
      image: '/assets/Indo_Western.jpeg',
      content: 'Discover Indo Western styles that blend Indian aesthetics with contemporary silhouettes, creating distinctive looks for celebrations and special occasions.',
      includes: [
        'Indo Western Gowns',
        'Fusion Wear',
        'Designer Gowns',
        'Contemporary Kurtis & Sets'
      ],
      ctaHref: '#connect'
    },
    {
      id: 'fabrics',
      categoryNum: '05',
      title: 'FABRICS',
      tagline: 'An Extensive Range of Textures, Colours & Designs',
      image: '/assets/Fabrics.jpeg',
      content: 'Explore a diverse selection of fabrics available in different textures, patterns, colours and finishes, suitable for various garment and styling requirements.',
      includes: [
        'Dyable Fabrics',
        'Dyed Fabrics',
        'Printed Fabrics',
        'Silk Fabrics',
        'Cotton Fabrics'
      ],
      ctaHref: '#connect'
    }
  ];

  const bookPages = products.map((p, idx) => ({
    pageNumber: idx + 1,
    categoryNum: p.categoryNum,
    title: p.title,
    tagline: p.tagline,
    stageTag: `0${idx + 1}`,
    image: p.image,
    content: p.content,
    includes: p.includes,
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

      </div>
    </section>
  );
}
