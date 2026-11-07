import React from 'react';

export default function Founder() {
  return (
    <section id="founder" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 scroll-mt-24 sm:scroll-mt-28 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-bl from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 relative z-10">

        {/* Section Header */}
        <div className="border-b border-[#fbd7b4]/50 pb-4 space-y-1.5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            Message from Our Founder
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-normal">
            Three decades of building generational trust across India's premier textile manufacturing hubs.
          </p>
        </div>

        {/* Editorial 2-Column Split: Balanced 50/50 Width with Natural Spacing & Matching Bottom Levels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

          {/* Left Column: Clean Archival Portrait + Dedicated Nameplate Under Photo */}
          <div className="space-y-3">
            
            {/* The Photo Container (Cropped height to align cleanly with right text and eliminate empty space) */}
            <div className="relative rounded-2xl overflow-hidden bg-white p-2.5 sm:p-3 border border-[#f8b47d]/40 shadow-lg group">
              <div className="h-[350px] sm:h-[370px] lg:h-[385px] w-full rounded-xl overflow-hidden relative shadow-inner bg-[#FAF8F5]">
                <img
                  src="/photos/founder_vineet_taparia.jpg"
                  alt="Mr. Vineet Kr. Taparia"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition duration-500 ease-out"
                />
              </div>
            </div>

            {/* Dedicated Nameplate Under the Photo */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-br from-white to-[#f7e5d4]/40 border border-[#f8b47d]/40 shadow-xs text-center space-y-0.5">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/40 mb-0.5">
                Established 1995
              </span>
              <h3 className="text-xl font-black text-[#0F1318] tracking-tight">
                Vineet Kr. Taparia
              </h3>
              <p className="text-xs font-bold text-[#f16701]">
                Founder, <span className="font-playfair font-bold text-xs inline-flex items-baseline gap-1"><span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span></span>
              </p>
              <p className="text-[11px] text-neutral-500 pt-0.5">
                30+ Years of Textile Commission Leadership • Kolkata Central Operations
              </p>
            </div>

          </div>

          {/* Right Column: Verbatim Founder Message from Document (Natural tight flow with no artificial gap) */}
          <div className="space-y-3.5 sm:space-y-4">

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f16701]">
                Foundational Philosophy
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F1318] leading-snug">
                "Goodwill is more valuable than money, and trust is the true foundation of business."
              </h3>
            </div>

            <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              <p>
                Every successful business begins with a belief. When I started <strong className="text-[#0F1318] font-bold">Savera Marketing</strong> in 1995 as a small proprietorship, my belief was simple: goodwill is more valuable than money, and trust is the true foundation of business. This belief has guided me throughout my journey and continues to define the way we work today.
              </p>

              <p>
                Over the years, the textile industry has taught me that business is not just about buying and selling. It is about understanding people, keeping commitments and building relationships that stand the test of time. I have always believed that a satisfied business partner and the goodwill earned through honest dealings are far more valuable than any short-term gain.
              </p>

              <p>
                With this vision, <strong className="font-playfair font-bold text-xs sm:text-sm inline-flex items-baseline gap-1"><span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span></strong> carries forward the legacy of Savera Marketing. Today, we work towards bringing textile manufacturers, retailers and wholesalers closer together by creating meaningful business connections. We believe that manufacturers deserve the opportunity to reach the right buyers, while retailers and wholesalers deserve access to reliable manufacturing connections that meet their requirements.
              </p>

              <p>
                As the textile industry continues to evolve, our aim is to grow with it, strengthen our network and create new opportunities for everyone associated with us. While we embrace new ways of doing business, we remain committed to the values on which this journey began.
              </p>

              <p>
                For me, the success of <strong className="font-playfair font-bold text-xs sm:text-sm inline-flex items-baseline gap-1"><span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span></strong> will never be measured by business figures alone, but by the trust we earn, the relationships we build and the goodwill we create along the way.
              </p>
            </div>

            {/* Concluding Belief Card: Sits directly below paragraph with natural spacing */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#f7e5d4] via-[#fbd7b4]/40 to-white border border-[#f8b47d]/50 shadow-xs">
              <p className="text-xs sm:text-sm font-bold text-neutral-800 italic">
                "Our journey began with trust, has grown through relationships and will continue with the same values for generations to come."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
