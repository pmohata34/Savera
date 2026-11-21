import React from 'react';

export default function Founder() {
  return (
    <section id="founder" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

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

        {/* Custom Proportional Split: ~30-34% Left (Portrait Photo) & ~66-70% Right (Written Philosophy) */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 xl:gap-12">

          {/* Left Column: Natural 3:4 Aspect Ratio Frame (0 Letterbox, 0 Crop) + Executive Nameplate */}
          <div className="w-full max-w-[360px] sm:max-w-[380px] lg:max-w-none lg:w-[34%] xl:w-[31%] mx-auto lg:mx-0 space-y-3.5 flex-shrink-0">

            {/* Solid Luxury Orange Outer Frame */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-white to-[#FFF6EE] p-2.5 sm:p-3 border-2 border-[#f16701] shadow-xl shadow-[#f16701]/10 group">
              {/* Inner Archival Container perfectly matched to 3:4 image aspect ratio */}
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden relative shadow-inner bg-[#FAF8F5] border border-[#f8b47d]/40">
                <img
                  src="/assets/founder.jpeg"
                  alt="Mr. Vineet Kr. Taparia - Founder"
                  className="w-full h-full object-cover object-top drop-shadow-sm group-hover:scale-102 transition duration-500 ease-out"
                />
              </div>
            </div>

            {/* Dedicated Executive Nameplate Directly Under Photo */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-br from-white to-[#f7e5d4]/40 border border-[#f8b47d]/40 shadow-xs text-center space-y-1">
              <h3 className="text-xl font-black text-[#0F1318] tracking-tight">
                Vineet Kr. Taparia
              </h3>
              <p className="text-xs font-bold text-[#f16701]">
                Founder, <span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span>
              </p>
            </div>

          </div>

          {/* Right Column: Verbatim Written Founder Message (66-70% Width) */}
          <div className="w-full lg:flex-1 space-y-4">

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f16701]">
                Foundational Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1318] leading-tight">
                "Goodwill is more valuable than money, and trust is the true foundation of business."
              </h3>
            </div>

            <div className="space-y-3 sm:space-y-3.5 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
              <p>
                Every successful business begins with a belief. When I started <strong className="text-[#0F1318] font-bold"><span className="text-[#f16701]">Savera</span> Marketing</strong> in 1995 as a small proprietorship, my belief was simple: goodwill is more valuable than money, and trust is the true foundation of business. This belief has guided me throughout my journey and continues to define the way we work today.
              </p>

              <p>
                Over the years, the textile industry has taught me that business is not just about buying and selling. It is about understanding people, keeping commitments and building relationships that stand the test of time. I have always believed that a satisfied business partner and the goodwill earned through honest dealings are far more valuable than any short-term gain.
              </p>

              <p>
                With this vision, <strong className="font-playfair font-bold text-xs sm:text-sm inline-flex items-baseline gap-1"><span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span></strong> carries forward the legacy of <span className="text-[#f16701]">Savera</span> Marketing. Today, we work towards bringing textile manufacturers, retailers and wholesalers closer together by creating meaningful business connections. We believe that manufacturers deserve the opportunity to reach the right buyers, while retailers and wholesalers deserve access to reliable manufacturing connections that meet their requirements.
              </p>

              <p>
                As the textile industry continues to evolve, our aim is to grow with it, strengthen our network and create new opportunities for everyone associated with us. While we embrace new ways of doing business, we remain committed to the values on which this journey began.
              </p>

              <p>
                For me, the success of <strong className="font-playfair font-bold text-xs sm:text-sm inline-flex items-baseline gap-1"><span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span></strong> will never be measured by business figures alone, but by the trust we earn, the relationships we build and the goodwill we create along the way.
              </p>
            </div>

            {/* Concluding Belief Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#f7e5d4] via-[#fbd7b4]/40 to-white border border-[#f8b47d]/50 shadow-xs">
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
