import React from 'react';

export default function Founder() {
  return (
<section id="founder" className="py-24 px-12 bg-[#FAF8F5] border-b border-[#E8E3DA]">
    <div className="max-w-7xl mx-auto space-y-16">

      {/*  Executive Monograph Grid  */}
      <div className="grid grid-cols-12 gap-12 items-center">

        {/*  Left: Founder Portrait Gallery Frame  */}
        <div className="col-span-12 lg:col-span-5 bg-white p-5 rounded-3xl border border-[#E8E3DA] shadow-xl space-y-4">
          <div className="h-[460px] rounded-2xl overflow-hidden shadow-inner relative group">
            <img src="photos/founder_vineet_taparia.jpg" alt="Vineet Kr. Taparia"
              className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-amber-300">ESTABLISHED 1995</span>
              <h4 className="text-xl font-bold font-royal text-white">Vineet Kr. Taparia</h4>
              <p className="text-xs text-[#FF5722] font-bold mt-0.5">Founder, <span className="text-[#FF5722]">Savera</span> Tex
                Solution LLP</p>
            </div>
          </div>

          <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/60 text-center">
            <p className="text-xs font-mono text-neutral-600">
              30+ Years Textile Market Leadership • Kolkata Central Hub
            </p>
          </div>
        </div>

        {/*  Right: Unabridged Founder Statement from DOCX with Illuminated Drop Cap  */}
        <div className="col-span-12 lg:col-span-7 space-y-6">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF5722] text-xs font-extrabold uppercase tracking-widest">
            <span>Executive Monograph</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold font-luxury text-[#0B0E14] leading-tight">
            "Goodwill is more valuable than money, and trust is the true foundation of business."
          </h2>

          <div className="space-y-4 text-sm text-neutral-700 leading-relaxed font-normal">
            <p className="     ">
              Every successful business begins with a belief. When I started <span
                className="text-[#FF5722] font-bold">Savera</span> Marketing in 1995 as a small proprietorship, my belief
              was simple: goodwill is more valuable than money, and trust is the true foundation of business. This
              belief has guided me throughout my journey and continues to define the way we work today.
            </p>
            <p>
              Over the years, the textile industry has taught me that business is not just about buying and selling. It
              is about understanding people, keeping commitments and building relationships that stand the test of time.
              I have always believed that a satisfied business partner and the goodwill earned through honest dealings
              are far more valuable than any short-term gain.
            </p>
            <p>
              With this vision, <span className="text-[#FF5722] font-bold">Savera</span> Tex Solution LLP carries forward
              the legacy of <span className="text-[#FF5722] font-bold">Savera</span> Marketing. Today, we work towards
              bringing textile manufacturers, retailers and wholesalers closer together by creating meaningful business
              connections. We believe that manufacturers deserve the opportunity to reach the right buyers, while
              retailers and wholesalers deserve access to reliable manufacturing connections that meet their
              requirements.
            </p>
            <p>
              As the textile industry continues to evolve, our aim is to grow with it, strengthen our network and create
              new opportunities for everyone associated with us. While we embrace new ways of doing business, we remain
              committed to the values on which this journey began.
            </p>
            <p>
              For me, the success of <span className="text-[#FF5722] font-bold">Savera</span> Tex Solution LLP will never be
              measured by business figures alone, but by the trust we earn, the relationships we build and the goodwill
              we create along the way.
            </p>
            <div className="pt-4 border-t border-[#E8E3DA] flex items-center justify-between">
              <p className="italic text-neutral-800 font-designer text-lg">
                "Our journey began with trust, has grown through relationships and will continue with the same values
                for generations to come."
              </p>
              <div className="text-right shrink-0">
                <span className="block text-sm font-bold font-royal text-[#0B0E14]">Vineet Kr. Taparia</span>
                <span className="block text-[11px] text-neutral-500">Founder, <span className="text-[#FF5722]">Savera</span> Tex
                  Solution LLP</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/*  Architectural Dual Monoliths: Mission & Vision (Verbatim DOCX)  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#E8E3DA]">

        {/*  Our Mission Monolith  */}
        <div
          className="bg-gradient-to-br from-[#0B0E14] to-[#1A1F2C] text-white p-8 md:p-10 rounded-3xl border border-neutral-800 shadow-xl space-y-4 relative overflow-hidden">
          <div
            className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 text-[#FF5722] flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">Institutional Purpose</span>
          <h3 className="text-2xl font-bold font-royal text-white">Our Mission</h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Our mission is to strengthen connections across the textile industry by bringing manufacturers and buyers
            together through trusted, reliable and transparent business relationships.
          </p>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Through our experience since 1995, industry knowledge and business network, we strive to simplify the
            process of exploring new markets and sourcing opportunities for both manufacturers and retailers.
          </p>
        </div>

        {/*  Our Vision Monolith  */}
        <div
          className="bg-gradient-to-br from-[#0B0E14] to-[#1A1F2C] text-white p-8 md:p-10 rounded-3xl border border-neutral-800 shadow-xl space-y-4 relative overflow-hidden">
          <div
            className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
              </path>
            </svg>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">Future Horizon</span>
          <h3 className="text-2xl font-bold font-royal text-white">Our Vision</h3>
          <p className="text-xs text-neutral-300 leading-relaxed">
            Our vision is to become a trusted name in the textile industry by building a strong and dependable business
            network that supports long-term growth for manufacturers, retailers and wholesalers.
          </p>
          <p className="text-xs text-neutral-400 leading-relaxed">
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
