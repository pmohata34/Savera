import React from 'react';

export default function Founder() {
  return (
    <section id="founder" className="py-24 px-6 sm:px-12 bg-white border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section Header */}
        <div className="border-b border-[#E8E3DA] pb-8 space-y-2">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 text-[#FF5722] text-xs font-bold uppercase tracking-widest border border-orange-200">
            <span>Executive Monograph</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-luxury text-[#0B0E14] tracking-tight">
            Leadership &amp; Guiding Philosophy
          </h2>
          <p className="text-xs md:text-sm text-neutral-500">
            Three decades of building generational trust across India's premier textile manufacturing hubs.
          </p>
        </div>

        {/* Editorial 2-Column Split: Portrait vs. Official Words */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Clean Archival Portrait */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative rounded-3xl overflow-hidden bg-white p-3.5 border border-slate-200 shadow-2xl group">
              <div className="h-[460px] sm:h-[500px] w-full rounded-2xl overflow-hidden relative shadow-md bg-neutral-100">
                <img src="/photos/founder_vineet_taparia.jpg" alt="Mr. Vineet Kr. Taparia"
                  className="w-full h-full object-cover object-top group-hover:scale-102 transition duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                  <span className="text-[10px] font-mono tracking-widest text-[#FF5722] uppercase font-bold">ESTABLISHED
                    1995</span>
                  <h3 className="text-xl font-bold font-royal text-white tracking-wide mt-0.5">VINEET KR. TAPARIA</h3>
                  <p className="text-xs text-amber-200/90 font-light mt-0.5">Founder, Savera Tex Solution LLP</p>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs font-mono font-bold text-neutral-500">
                30+ Years Textile Market Leadership • Kolkata Central Hub
              </p>
            </div>
          </div>

          {/* Right Column: Authentic Verbatim Monograph from DOCX */}
          <div className="lg:col-span-7 space-y-6">

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF5722]">
                Executive Monograph
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold font-designer text-[#0B0E14] leading-snug">
                "Goodwill is more valuable than money, and trust is the true foundation of business."
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              <p>
                Every successful business begins with a belief. When I started <span
                  className="text-[#FF5722] font-semibold">Savera</span> Marketing in 1995 as a small proprietorship, my
                belief was simple: goodwill is more valuable than money, and trust is the true foundation of business. This
                belief has guided me throughout my journey and continues to define the way we work today.
              </p>

              <p>
                Over the years, the textile industry has taught me that business is not just about buying and selling. It is
                about understanding people, keeping commitments and building relationships that stand the test of time. I
                have always believed that a satisfied business partner and the goodwill earned through honest dealings are
                far more valuable than any short-term gain.
              </p>

              <p>
                With this vision, <span className="text-[#FF5722] font-semibold">Savera</span> Tex Solution LLP carries
                forward the legacy of <span className="text-[#FF5722] font-semibold">Savera</span> Marketing. Today, we
                work towards bringing textile manufacturers, retailers and wholesalers closer together by creating
                meaningful business connections. We believe that manufacturers deserve the opportunity to reach the right
                buyers, while retailers and wholesalers deserve access to reliable manufacturing connections that meet
                their requirements.
              </p>

              <p>
                As the textile industry continues to evolve, our aim is to grow with it, strengthen our network and create
                new opportunities for everyone associated with us. While we embrace new ways of doing business, we remain
                committed to the values on which this journey began.
              </p>

              <p>
                For me, the success of <span className="text-[#FF5722] font-semibold">Savera</span> Tex Solution LLP will
                never be measured by business figures alone, but by the trust we earn, the relationships we build and the
                goodwill we create along the way.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E3DA] flex items-center justify-between">
              <div>
                <p className="text-sm font-designer italic text-[#FF5722]">
                  "Our journey began with trust, has grown through relationships and will continue with the same values for
                  generations to come."
                </p>
              </div>
              <div className="text-right shrink-0 pl-4">
                <span className="block font-royal font-bold text-[#0B0E14] text-xs">VINEET KR. TAPARIA</span>
                <span className="block text-[10px] text-neutral-500 font-mono">Founder, Savera Tex Solution LLP</span>
              </div>
            </div>

          </div>

        </div>

        {/* Architectural Dual Monoliths: Mission & Vision (Verbatim DOCX - Orange & Amber Light Luxury Gradients) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#E8E3DA]">

          {/* Our Mission Monolith */}
          <div
            className="bg-gradient-to-br from-white via-orange-50/70 to-amber-50/40 text-neutral-800 p-8 md:p-10 rounded-3xl border border-orange-200/80 shadow-lg space-y-4 relative overflow-hidden">
            <div
              className="w-12 h-12 rounded-2xl bg-orange-100 text-[#FF5722] border border-orange-200 flex items-center justify-center shadow-xs">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF5722] font-bold">Institutional Purpose</span>
            <h3 className="text-2xl font-bold font-royal text-[#0B0E14]">Our Mission</h3>
            <p className="text-xs text-neutral-700 leading-relaxed font-normal">
              Our mission is to strengthen connections across the textile industry by bringing manufacturers and buyers
              together through trusted, reliable and transparent business relationships.
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Through our experience since 1995, industry knowledge and business network, we strive to simplify the
              process of exploring new markets and sourcing opportunities for both manufacturers and retailers.
            </p>
          </div>

          {/* Our Vision Monolith */}
          <div
            className="bg-gradient-to-br from-white via-amber-50/70 to-orange-50/40 text-neutral-800 p-8 md:p-10 rounded-3xl border border-amber-200/80 shadow-lg space-y-4 relative overflow-hidden">
            <div
              className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 border border-amber-200 flex items-center justify-center shadow-xs">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                </path>
              </svg>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 font-bold">Future Horizon</span>
            <h3 className="text-2xl font-bold font-royal text-[#0B0E14]">Our Vision</h3>
            <p className="text-xs text-neutral-700 leading-relaxed font-normal">
              Our vision is to become a trusted name in the textile industry by building a strong and dependable business
              network that supports long-term growth for manufacturers, retailers and wholesalers.
            </p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              We aim to create an environment where manufacturers can expand their reach, connect with genuine buyers, and
              where retailers and wholesalers can confidently explore reliable manufacturing partners across India and
              international markets.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
