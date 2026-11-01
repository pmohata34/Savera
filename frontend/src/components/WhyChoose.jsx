import React from 'react';

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 px-6 sm:px-12 bg-[#FAF8F5] border-b border-[#E8E3DA]">
      <div className="max-w-7xl mx-auto space-y-14">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-[#FF5722]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-ping"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest font-mono">The Institutional Standard</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-luxury text-[#0B0E14] tracking-tight">
            Why Choose <span className="text-[#FF5722]">Savera</span> Tex Solution LLP?
          </h2>
          <p className="text-base font-designer italic text-[#FF5722]">
            Three Decades of Experience. One Goal: Better Business Connections.
          </p>
          <p className="text-xs md:text-sm text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            With experience in the textile market since 1995, <span className="text-[#FF5722] font-bold">Savera</span> Tex
            Solution LLP understands the importance of connecting the right manufacturers with the right buyers. As a
            textile commission agency, we work with manufacturers, retailers and wholesalers across India and
            international markets, helping them explore suitable business connections and new opportunities.
          </p>
        </div>

        {/* WHAT SETS US APART: 7-PILLAR LUXURY CARD GRID */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-1 bg-[#FF5722] rounded-full"></span>
            <h3 className="text-2xl font-bold font-royal text-[#0B0E14]">What Sets Us Apart</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* Card 1: Experience Since 1995 */}
            <div
              className="bg-white p-8 rounded-3xl border border-[#E8E3DA] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between group card-hover-lift cursor-pointer">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 text-[#FF5722] font-black font-royal text-xl flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition duration-300 shadow-sm">
                    01
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    ESTD 1995
                  </span>
                </div>
                <h4 className="text-xl font-bold font-royal text-[#0B0E14] group-hover:text-[#FF5722] transition">
                  Textile Market Experience Since 1995
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Our journey in the textile market began in 1995. Over the years, we have developed a practical
                  understanding of the industry, its markets, business practices and the requirements of different
                  businesses. This experience helps us guide both manufacturers and buyers in exploring suitable business
                  opportunities.
                </p>
              </div>
              <div
                className="pt-5 mt-6 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-bold text-[#FF5722]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]"></span>
                <span>30+ Years Generational Market Trust</span>
              </div>
            </div>

            {/* Card 2: Two-Way Business Support */}
            <div
              className="bg-white p-8 rounded-3xl border border-[#E8E3DA] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between group card-hover-lift cursor-pointer">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 text-[#FF5722] font-black font-royal text-xl flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition duration-300 shadow-sm">
                    02
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    DUAL SYNERGY
                  </span>
                </div>
                <h4 className="text-xl font-bold font-royal text-[#0B0E14] group-hover:text-[#FF5722] transition">
                  Two-Way Business Support
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  As a commission agency, we support both manufacturers and buyers. We help manufacturers connect with
                  retailers and wholesalers in new markets, while also assisting buyers in finding dependable
                  manufacturers who can meet their specific merchandise and supply requirements.
                </p>
              </div>
              <div
                className="pt-5 mt-6 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-bold text-[#FF5722]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]"></span>
                <span>Connecting Mills &amp; Showrooms Directly</span>
              </div>
            </div>

            {/* Card 3: Understanding Market Requirements */}
            <div
              className="bg-white p-8 rounded-3xl border border-[#E8E3DA] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between group card-hover-lift cursor-pointer">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 text-[#FF5722] font-black font-royal text-xl flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition duration-300 shadow-sm">
                    03
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    CURATED MATCHING
                  </span>
                </div>
                <h4 className="text-xl font-bold font-royal text-[#0B0E14] group-hover:text-[#FF5722] transition">
                  Understanding Market Requirements
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Different markets have different preferences in fabrics, designs and price segments. We take time to
                  understand the commercial needs of buyers and the capabilities of manufacturers, helping create
                  meaningful and productive business connections that deliver immediate commercial value.
                </p>
              </div>
              <div
                className="pt-5 mt-6 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-bold text-[#FF5722]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]"></span>
                <span>Precision Regional Demand Matching</span>
              </div>
            </div>

            {/* Card 4: Product Variety Across Multiple Categories */}
            <div
              className="bg-white p-8 rounded-3xl border border-[#E8E3DA] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between group card-hover-lift cursor-pointer">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 text-[#FF5722] font-black font-royal text-xl flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition duration-300 shadow-sm">
                    04
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    DIVERSE PORTFOLIO
                  </span>
                </div>
                <h4 className="text-xl font-bold font-royal text-[#0B0E14] group-hover:text-[#FF5722] transition">
                  Product Variety Across Multiple Categories
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Through our established network, we help buyers explore a wide variety of textile products, including
                  sarees, salwar suits, dress materials, lehengas, kurtis, fabrics and ready-to-wear collections,
                  providing options suitable for different retail and wholesale needs.
                </p>
              </div>
              <div
                className="pt-5 mt-6 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-bold text-[#FF5722]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]"></span>
                <span>Ethnic, Modern Fusion &amp; Fabrics</span>
              </div>
            </div>

            {/* Card 5: Connections Across Major Textile Hubs */}
            <div
              className="bg-white p-8 rounded-3xl border border-[#E8E3DA] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between group card-hover-lift cursor-pointer">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 text-[#FF5722] font-black font-royal text-xl flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition duration-300 shadow-sm">
                    05
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    PAN-INDIA NETWORK
                  </span>
                </div>
                <h4 className="text-xl font-bold font-royal text-[#0B0E14] group-hover:text-[#FF5722] transition">
                  Connections Across Major Textile Hubs
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Our network connects with manufacturers and markets across key textile production hubs in India,
                  including Kolkata, Surat, Varanasi, Jaipur, Ahmedabad and Bhagalpur. These connections allow us to offer
                  diverse sourcing options and create opportunities to expand business connections across different regions.
                </p>
              </div>
              <div
                className="pt-5 mt-6 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-bold text-[#FF5722]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]"></span>
                <span>Kolkata, Surat, Banaras, Jaipur, Ahmedabad</span>
              </div>
            </div>

            {/* Card 6: Transparency & Clear Communication */}
            <div
              className="bg-white p-8 rounded-3xl border border-[#E8E3DA] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between group card-hover-lift cursor-pointer">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200/60 text-[#FF5722] font-black font-royal text-xl flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition duration-300 shadow-sm">
                    06
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    INTEGRITY FIRST
                  </span>
                </div>
                <h4 className="text-xl font-bold font-royal text-[#0B0E14] group-hover:text-[#FF5722] transition">
                  Transparency and Clear Communication
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  We believe that trust is essential for successful business relationships. We focus on clear
                  communication between manufacturers and buyers, helping both sides understand product requirements,
                  commercial discussions and agreed business terms.
                </p>
              </div>
              <div
                className="pt-5 mt-6 border-t border-neutral-100 flex items-center gap-2 text-[11px] font-bold text-[#FF5722]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]"></span>
                <span>100% Commercial Clarity</span>
              </div>
            </div>

            {/* Card 7: Opportunities for Mutual Business Growth (Spans full width on large screens) */}
            <div
              className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-orange-50/70 via-amber-50/50 to-white p-8 lg:p-10 rounded-3xl border border-orange-200/90 shadow-sm hover:shadow-xl transition duration-300 flex flex-col md:flex-row items-center justify-between gap-6 group">
              <div className="flex items-start gap-6">
                <div
                  className="w-14 h-14 rounded-2xl bg-[#FF5722] text-white font-black font-royal text-2xl flex items-center justify-center shrink-0 shadow-md">
                  07
                </div>
                <div className="space-y-2">
                  <span
                    className="px-2.5 py-0.5 rounded-full bg-orange-200/60 text-[10px] font-mono font-bold text-orange-900 uppercase tracking-wider">
                    STRATEGIC EXPANSION
                  </span>
                  <h4 className="text-2xl font-bold font-royal text-[#0B0E14]">
                    Opportunities for Mutual Business Growth
                  </h4>
                  <p className="text-xs md:text-sm text-neutral-700 leading-relaxed max-w-3xl">
                    Our role is not limited to making introductions. We aim to build connections that create value for
                    both sides. By bringing manufacturers and buyers together, we support opportunities for new business,
                    stronger partnerships and long-term growth in the textile industry.
                  </p>
                </div>
              </div>
              <a href="#connect"
                className="px-8 py-3.5 rounded-full bg-[#FF5722] hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition shadow-lg shrink-0">
                Connect With Us
              </a>
            </div>

          </div>
        </div>

        {/* Founder Quote Calligraphy Bar at Bottom */}
        <div
          className="p-6 md:p-8 bg-gradient-to-r from-orange-50 via-white to-amber-50 text-neutral-800 rounded-3xl border border-orange-200 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <p className="text-[#FF5722] font-designer italic text-lg md:text-xl font-medium">
              "Goodwill is more valuable than money, and trust is the true foundation of business."
            </p>
            <p className="text-xs text-neutral-600">
              Founder Vineet Kr. Taparia • Established 1995 • Three decades of trusted partnership
            </p>
          </div>
          <a href="#founder"
            className="px-6 py-2.5 rounded-full border border-orange-300 hover:bg-[#FF5722] hover:text-white text-xs text-neutral-800 font-bold transition shrink-0 bg-white shadow-2xs">
            Read Founder's Vision
          </a>
        </div>

      </div>
    </section>
  );
}
