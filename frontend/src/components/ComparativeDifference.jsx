import React from 'react';

export default function ComparativeDifference() {
  return (
    <section id="difference" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-b border-[#E8E3DA] relative overflow-hidden">

      {/* Warm Ambient Decorative Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-100/80 border border-orange-200 text-[#FF5722]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]"></span>
            <span className="text-[11px] font-bold uppercase tracking-widest font-mono">The Sourcing Decision</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-luxury text-[#0B0E14] tracking-tight">
            Direct Sourcing <span className="text-neutral-400 font-light text-xl md:text-3xl">vs.</span> Partnering With <span className="text-[#FF5722]">Savera</span>
          </h2>
          <p className="text-xs md:text-sm text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Why leading textile retailers, wholesalers, and manufacturers choose a structured commission agency over fragmented, high-risk solo sourcing.
          </p>
        </div>

        {/* Desktop Comparison Table (Hidden on small mobile, flex on md+) */}
        <div className="hidden md:block bg-white rounded-3xl border border-[#E8E3DA] overflow-hidden shadow-xl">
          <div className="grid grid-cols-12 bg-gradient-to-r from-slate-100 via-orange-50 to-amber-50 text-neutral-800 text-xs font-bold uppercase tracking-wider divide-x divide-neutral-200 border-b border-orange-200">
            <div className="col-span-3 p-5 text-neutral-800 font-extrabold">Commercial Parameter</div>
            <div className="col-span-4 p-5 bg-slate-100/90 text-neutral-700 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center text-[10px] font-black">✕</span>
              <span>Without Agent (Solo Sourcing)</span>
            </div>
            <div className="col-span-5 p-5 bg-gradient-to-r from-orange-100/80 via-orange-50 to-amber-100/80 text-[#FF5722] flex items-center justify-between border-l border-orange-200">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center text-[10px] font-black">✓</span>
                <span>With <span className="text-[#FF5722]">Savera</span> Tex Solution LLP</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FF5722]/15 text-[#FF5722] font-bold border border-orange-500/30">Since 1995</span>
            </div>
          </div>

          <div className="divide-y divide-neutral-100 text-sm">

            {/* Row 1: Market Access & Mill Connections */}
            <div className="grid grid-cols-12 divide-x divide-neutral-100 hover:bg-neutral-50/80 transition items-stretch">
              <div className="col-span-3 p-6 bg-neutral-50/50 flex flex-col justify-center">
                <span className="font-bold font-royal text-[#0B0E14] text-base">Market Access & Mill Reach</span>
                <span className="text-[11px] text-neutral-500 mt-0.5">Connecting production to demand</span>
              </div>
              <div className="col-span-4 p-6 space-y-1.5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-rose-600 text-xs font-bold">
                  <span>✕ Fragmented & Localized</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Confined to known local traders or unverified brokers with stacked markups. Visiting remote manufacturing centers across Surat, Varanasi, or Jaipur involves high travel expenses, fatigue, and trial-and-error risk.
                </p>
              </div>
              <div className="col-span-5 p-6 space-y-1.5 bg-orange-50/30 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                  <span>✓ 700+ Verified Direct Mills</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  Direct vertical links to over 700 verified manufacturers across all 6 major textile hubs (Surat, Varanasi, Jaipur, Ahmedabad, Kolkata, Bhagalpur) at genuine loom rates without traveling.
                </p>
              </div>
            </div>

            {/* Row 2: Pricing & Commission Transparency */}
            <div className="grid grid-cols-12 divide-x divide-neutral-100 hover:bg-neutral-50/80 transition items-stretch">
              <div className="col-span-3 p-6 bg-neutral-50/50 flex flex-col justify-center">
                <span className="font-bold font-royal text-[#0B0E14] text-base">Pricing & Transparency</span>
                <span className="text-[11px] text-neutral-500 mt-0.5">Commercial clarity & true rates</span>
              </div>
              <div className="col-span-4 p-6 space-y-1.5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-rose-600 text-xs font-bold">
                  <span>✕ Hidden Layers & Multi-Markups</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Layers of unmonitored trader margins, undisclosed middlemen cuts, and arbitrary price fluctuations due to lack of local insider knowledge.
                </p>
              </div>
              <div className="col-span-5 p-6 space-y-1.5 bg-orange-50/30 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                  <span>✓ Direct Loom Rates + Clear Commission</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  Complete commercial transparency. Buyers get true manufacturer prices; <span className="text-[#FF5722] font-semibold">Savera</span> operates on a clear, standard commission with zero hidden margins.
                </p>
              </div>
            </div>

            {/* Row 3: Trust & Transaction Security */}
            <div className="grid grid-cols-12 divide-x divide-neutral-100 hover:bg-neutral-50/80 transition items-stretch">
              <div className="col-span-3 p-6 bg-neutral-50/50 flex flex-col justify-center">
                <span className="font-bold font-royal text-[#0B0E14] text-base">Trust & Financial Security</span>
                <span className="text-[11px] text-neutral-500 mt-0.5">Counterparty reliability</span>
              </div>
              <div className="col-span-4 p-6 space-y-1.5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-rose-600 text-xs font-bold">
                  <span>✕ High Counterparty Risk</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Constant risk of payment delays, default, deceptive sample quality, or delivery failures with zero intermediary accountability or dispute recourse.
                </p>
              </div>
              <div className="col-span-5 p-6 space-y-1.5 bg-orange-50/30 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                  <span>✓ 30 Years Institutional Goodwill</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  Backed by 30 years of generational goodwill (Since 1995). Both mills and buyers are vetted counterparties; trade is safeguarded by mutual commercial trust.
                </p>
              </div>
            </div>

            {/* Row 4: Product Curation & Dead Stock Protection */}
            <div className="grid grid-cols-12 divide-x divide-neutral-100 hover:bg-neutral-50/80 transition items-stretch">
              <div className="col-span-3 p-6 bg-neutral-50/50 flex flex-col justify-center">
                <span className="font-bold font-royal text-[#0B0E14] text-base">Inventory & Dead Stock Risk</span>
                <span className="text-[11px] text-neutral-500 mt-0.5">Stock rotation & turnover</span>
              </div>
              <div className="col-span-4 p-6 space-y-1.5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-rose-600 text-xs font-bold">
                  <span>✕ High Capital Lockup</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Purchasing based on guesswork and supplier hype. Unsold seasonal ethnic wear becomes dead stock, severely hurting retailer cash flows.
                </p>
              </div>
              <div className="col-span-5 p-6 space-y-1.5 bg-orange-50/30 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                  <span>✓ Curated Fast-Moving Lines</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  Curation guided by active trade data across 500+ client cities. You receive curated designs with proven sell-through demand to maximize inventory turnover.
                </p>
              </div>
            </div>

            {/* Row 5: Operational Support & Dispute Handling */}
            <div className="grid grid-cols-12 divide-x divide-neutral-100 hover:bg-neutral-50/80 transition items-stretch">
              <div className="col-span-3 p-6 bg-neutral-50/50 flex flex-col justify-center">
                <span className="font-bold font-royal text-[#0B0E14] text-base">Order Processing & Logistics</span>
                <span className="text-[11px] text-neutral-500 mt-0.5">End-to-end follow-up</span>
              </div>
              <div className="col-span-4 p-6 space-y-1.5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-rose-600 text-xs font-bold">
                  <span>✕ Solo Operational Burden</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Retailer must personally chase loom production timelines, arrange transport, inspect packaging, and fight dispute claims alone when shipments are delayed or damaged.
                </p>
              </div>
              <div className="col-span-5 p-6 space-y-1.5 bg-orange-50/30 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                  <span>✓ Dedicated 6-Step Coordination</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  <span className="text-[#FF5722] font-semibold">Savera</span> manages the complete cycle: sample approval, loom production tracking, packaging quality checks, transport logistics, and fair dispute mediation.
                </p>
              </div>
            </div>

            {/* Row 6: Support for New & Growing Businesses */}
            <div className="grid grid-cols-12 divide-x divide-neutral-100 hover:bg-neutral-50/80 transition items-stretch">
              <div className="col-span-3 p-6 bg-neutral-50/50 flex flex-col justify-center">
                <span className="font-bold font-royal text-[#0B0E14] text-base">Scalability & New Store Support</span>
                <span className="text-[11px] text-neutral-500 mt-0.5">Empowering business growth</span>
              </div>
              <div className="col-span-4 p-6 space-y-1.5 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-rose-600 text-xs font-bold">
                  <span>✕ Strict MOQs & Disregard</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Major textile mills often decline smaller trial orders or demand 100% upfront advances from new stores, making diversification costly and risky.
                </p>
              </div>
              <div className="col-span-5 p-6 space-y-1.5 bg-orange-50/30 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                  <span>✓ Dedicated Mentorship & Flexible Access</span>
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  We hand-hold new showrooms and growing wholesalers, facilitating accessible minimum order quantities and helping them establish direct supplier credibility from day one.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Card Comparison (Visible on screens < md) */}
        <div className="block md:hidden space-y-6">
          <div className="bg-rose-50/80 border border-rose-200 p-6 rounded-3xl space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
              <span className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-black">✕</span>
              <span>Without Agent (Solo Sourcing)</span>
            </div>
            <ul className="space-y-3 text-xs text-neutral-700 divide-y divide-rose-100">
              <li className="pt-2"><strong className="text-rose-900 block mb-0.5">Market Access:</strong> Confined to local middlemen with stacked margins; tedious travel to Surat/Banaras/Jaipur.</li>
              <li className="pt-2"><strong className="text-rose-900 block mb-0.5">Pricing:</strong> Layered dealer cuts with undisclosed markups and zero transparency.</li>
              <li className="pt-2"><strong className="text-rose-900 block mb-0.5">Trust Risk:</strong> Vulnerable to non-delivery, sample mismatches, and payment default without recourse.</li>
              <li className="pt-2"><strong className="text-rose-900 block mb-0.5">Inventory Risk:</strong> Uncurated stock leading to high dead capital lockup.</li>
              <li className="pt-2"><strong className="text-rose-900 block mb-0.5">Operations:</strong> Solo burden for logistics disputes, transit damage, and delayed dispatch.</li>
              <li className="pt-2"><strong className="text-rose-900 block mb-0.5">New Stores:</strong> Denied access by large mills demanding prohibitive minimum orders.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-b from-orange-50/90 to-white border-2 border-[#FF5722] p-6 rounded-3xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#0B0E14] font-bold text-sm font-royal">
                <span className="w-6 h-6 rounded-full bg-[#FF5722] text-white flex items-center justify-center text-xs font-black">✓</span>
                <span>With <span className="text-[#FF5722]">Savera</span> Tex Solution</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-100 text-[#FF5722] font-bold">Advantage</span>
            </div>
            <ul className="space-y-3 text-xs text-neutral-800 divide-y divide-orange-100">
              <li className="pt-2"><strong className="text-[#FF5722] block mb-0.5">Direct Pan-India Reach:</strong> Direct links to 700+ verified mills in 6 hubs at loom rates without traveling.</li>
              <li className="pt-2"><strong className="text-[#FF5722] block mb-0.5">Transparent Pricing:</strong> Factory prices with standard nominal commission—zero hidden cuts.</li>
              <li className="pt-2"><strong className="text-[#FF5722] block mb-0.5">30-Year Trust:</strong> Backed by goodwill established in 1995; verified commercial counterparties.</li>
              <li className="pt-2"><strong className="text-[#FF5722] block mb-0.5">Curated Sell-Through:</strong> Data-driven curation across 500+ client cities for rapid turnover.</li>
              <li className="pt-2"><strong className="text-[#FF5722] block mb-0.5">6-Step Coordination:</strong> Dedicated follow-up for samples, looms, packaging, transit, and mediation.</li>
              <li className="pt-2"><strong className="text-[#FF5722] block mb-0.5">Growth Hand-Holding:</strong> Flexible entry points and mentorship for new and growing showrooms.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
