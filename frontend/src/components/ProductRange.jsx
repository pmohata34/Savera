import React from 'react';

export default function ProductRange() {
  const products = [
    {
      categoryNum: '01',
      title: 'Sarees',
      tagline: 'Cotton, Silk, Designer, and Partywear collections',
      image: '/assets/Sarees.jpeg',
      description: 'Comprehensive wholesale collections spanning pure Varanasi Katan silks, lightweight organzas, handloom cottons, partywear georgettes, and intricately embellished designer festive sarees direct from composite looms.'
    },
    {
      categoryNum: '02',
      title: 'Salwar Suits',
      tagline: 'Stitched and unstitched varieties',
      image: '/assets/Salwar_Suit.jpeg',
      description: 'Extensive portfolio of daily-wear and festive salwar suit sets available in unstitched 3-piece cuts as well as ready-to-wear tailored sets. Features premium cottons, chanderi silks, modal, and handblock prints.'
    },
    {
      categoryNum: '03',
      title: 'Lehengas',
      tagline: 'Bridal, festive, and partywear collections',
      image: '/assets/Lehengas.jpeg',
      description: 'Bridal masterpieces, festive occasion wear, and contemporary lightweight partywear lehenga sets. Masterfully crafted with intricate zardozi, gota patti, resham embroidery, sequins, and opulent flares.'
    },
    {
      categoryNum: '04',
      title: 'Indo Western Wear',
      tagline: 'Gowns, kurtis, and fusion sets',
      image: '/assets/Indo_Western.jpeg',
      description: 'Modern silhouettes meeting traditional textiles: floor-length evening gowns, asymmetrical tunic kurtis, co-ord jacket sets, and fusion drape dresses designed for the modern ethnic retail market.'
    },
    {
      categoryNum: '05',
      title: 'Fabrics',
      tagline: 'Dyable, dyed, printed, silk, and cotton fabrics',
      image: '/assets/Fabrics.jpeg',
      description: 'Industrial and commercial wholesale fabric yardage covering pure dyeable whites, mills-dyed solids, screen and digital prints, pure silks, viscose blends, modal muslins, and rich cambric cottons.'
    }
  ];

  return (
    <section id="products" className="py-14 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FDF0E5] via-[#FAF8F5] to-white border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-bl from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#f8b47d]/60 text-[#f16701] text-[11px] font-bold uppercase tracking-widest shadow-2xs">
            <span>Textile Portfolios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1318] tracking-tight">
            Featured Product Range
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-normal">
            Connecting manufacturers with buyers across 5 primary commercial categories directly from source looms.
          </p>
        </div>

        {/* 5-Card Grid: Picture at Front, Title Written Horizontally at the Bottom of the Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden bg-white border border-[#f8b47d]/40 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Picture at Front */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-[#FAF8F5]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>

                  {/* Horizontal Title at Bottom of Image (No vertical text!) */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#fbd7b4]">
                      Category {item.categoryNum}
                    </span>
                    <h3 className="text-lg font-black text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-4 space-y-2">
                  <p className="text-xs font-bold text-[#f16701] leading-snug">
                    {item.tagline}
                  </p>
                  <p className="text-[11px] text-neutral-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Popped Centered Inquiry CTA at Bottom after all products */}
        <div className="pt-2 flex justify-center">
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
