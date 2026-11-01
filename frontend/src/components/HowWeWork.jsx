import React from 'react';

export default function HowWeWork() {
  return (
<section id="how-we-work" className="py-24 px-12 bg-white border-b border-[#E8E3DA]">
    <div className="max-w-7xl mx-auto space-y-14">

      {/*  Section Header  */}
      <div className="border-b border-[#E8E3DA] pb-8 space-y-3">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF5722] text-xs font-extrabold uppercase tracking-widest">
          <span>Operating Pipeline</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-luxury text-[#0B0E14] tracking-tight">
          How We Work
        </h2>
        <p className="text-xl font-designer italic text-[#FF5722]">
          From Understanding Your Needs to Building Business Opportunities
        </p>
        <p className="text-base text-neutral-600 max-w-4xl leading-relaxed">
          At <span className="text-[#FF5722] font-bold">Savera</span> Tex Solution LLP, we follow a structured approach to
          connect retailers and wholesalers with suitable manufacturers. From understanding your requirements to
          coordinating orders and follow-ups, our 6-stage engine makes trade clear, organized, and frictionless.
        </p>
      </div>

      {/*  6-STAGE CONNECTED PIPELINE (3 STRATEGIC PHASES)  */}
      <div className="space-y-12">

        {/*  Phase I: Discovery & Sourcing  */}
        <div
          className="bg-[#FAF8F5] p-8 md:p-10 rounded-3xl border border-[#E8E3DA] shadow-sm space-y-6 relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-4">
            <div className="flex items-center gap-3">
              <span
                className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/15 border border-orange-500/30 text-[#FF5722] text-[10px] font-black uppercase tracking-widest font-mono">
                PHASE 01 • INTELLIGENCE & SOURCING
              </span>
              <span className="text-xs text-neutral-500 font-medium">Requirements Intake & Factory Discovery</span>
            </div>
            <span className="text-xs font-mono font-bold text-[#FF5722]">STAGES 01 — 02</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/*  Stage 01  */}
            <div
              className="bg-white p-7 rounded-2xl border border-[#E8E3DA] hover:border-[#FF5722] hover:shadow-lg transition space-y-4 card-hover-lift cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-royal text-[#FF5722]">01</span>
                <span
                  className="text-[10px] font-mono px-2.5 py-1 rounded bg-orange-100 text-[#FF5722] font-bold">REQUIREMENTS</span>
              </div>
              <h3 className="text-xl font-bold font-luxury text-[#0B0E14]">Understanding Requirements</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We begin by understanding our clients' specific needs, including product preferences, quality
                expectations, quantity requirements, and target markets. This deep intake ensures every sourcing
                proposal aligns precisely with commercial objectives.
              </p>
              <div
                className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Deliverable:</span>
                <span className="font-bold text-[#0B0E14]">Target Sourcing Specification</span>
              </div>
            </div>

            {/*  Stage 02  */}
            <div
              className="bg-white p-7 rounded-2xl border border-[#E8E3DA] hover:border-[#FF5722] hover:shadow-lg transition space-y-4 card-hover-lift cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-royal text-[#FF5722]">02</span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-orange-100 text-[#FF5722] font-bold">NETWORK
                  SCAN</span>
              </div>
              <h3 className="text-xl font-bold font-luxury text-[#0B0E14]">Sourcing from Our Network</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Based on the requirements, we explore our established network of manufacturers across major textile hubs
                — Surat, Banaras, Jaipur, Ahmedabad, and Bhagalpur — identifying relevant manufacturing partners and
                optimal production capacities.
              </p>
              <div
                className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Deliverable:</span>
                <span className="font-bold text-[#0B0E14]">Vetted Mill & Weaver Matching</span>
              </div>
            </div>
          </div>
        </div>

        {/*  Directional Flow Indicator  */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-neutral-100 border border-neutral-200">
            <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-ping"></span>
            <span className="text-xs font-mono font-bold tracking-wider text-neutral-600">STREAMING TO SELECTION &
              COMMERCIAL ALIGNMENT</span>
            <svg className="w-4 h-4 text-[#FF5722]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/*  Phase II: Selection & Negotiation  */}
        <div
          className="bg-[#FAF8F5] p-8 md:p-10 rounded-3xl border border-[#E8E3DA] shadow-sm space-y-6 relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-4">
            <div className="flex items-center gap-3">
              <span
                className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/15 border border-orange-500/30 text-[#FF5722] text-[10px] font-black uppercase tracking-widest font-mono">
                PHASE 02 • CURATION & COMMERCIALS
              </span>
              <span className="text-xs text-neutral-500 font-medium">Sample Matching & Transparent Negotiation</span>
            </div>
            <span className="text-xs font-mono font-bold text-[#FF5722]">STAGES 03 — 04</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/*  Stage 03  */}
            <div
              className="bg-white p-7 rounded-2xl border border-[#E8E3DA] hover:border-[#FF5722] hover:shadow-lg transition space-y-4 card-hover-lift cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-royal text-[#FF5722]">03</span>
                <span
                  className="text-[10px] font-mono px-2.5 py-1 rounded bg-orange-100 text-[#FF5722] font-bold">SELECTION</span>
              </div>
              <h3 className="text-xl font-bold font-luxury text-[#0B0E14]">Product Matching & Selection</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We help identify and match suitable products with our clients' requirements, considering weave nuances,
                design palettes, target retail price-points, and regional fashion preferences to support superior
                merchandising decisions.
              </p>
              <div
                className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Deliverable:</span>
                <span className="font-bold text-[#0B0E14]">Curated Swatches & Lookbooks</span>
              </div>
            </div>

            {/*  Stage 04  */}
            <div
              className="bg-white p-7 rounded-2xl border border-[#E8E3DA] hover:border-[#FF5722] hover:shadow-lg transition space-y-4 card-hover-lift cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-royal text-[#FF5722]">04</span>
                <span
                  className="text-[10px] font-mono px-2.5 py-1 rounded bg-orange-100 text-[#FF5722] font-bold">COMMERCIALS</span>
              </div>
              <h3 className="text-xl font-bold font-luxury text-[#0B0E14]">Price Coordination & Negotiation</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We facilitate transparent commercial discussions between clients and manufacturers, bridging
                expectations with respect to rate parity, minimum order quantities, and delivery schedules to achieve
                mutually beneficial agreements.
              </p>
              <div
                className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Deliverable:</span>
                <span className="font-bold text-[#0B0E14]">Agreed Commercial Contract</span>
              </div>
            </div>
          </div>
        </div>

        {/*  Directional Flow Indicator  */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-neutral-100 border border-neutral-200">
            <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-ping"></span>
            <span className="text-xs font-mono font-bold tracking-wider text-neutral-600">STREAMING TO EXECUTION &
              TRANSPARENCY</span>
            <svg className="w-4 h-4 text-[#FF5722]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        {/*  Phase III: Execution & Transparency  */}
        <div
          className="bg-[#FAF8F5] p-8 md:p-10 rounded-3xl border border-[#E8E3DA] shadow-sm space-y-6 relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-[#E8E3DA] pb-4">
            <div className="flex items-center gap-3">
              <span
                className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/15 border border-orange-500/30 text-[#FF5722] text-[10px] font-black uppercase tracking-widest font-mono">
                PHASE 03 • EXECUTION & PARTNERSHIP
              </span>
              <span className="text-xs text-neutral-500 font-medium">Order Follow-Up & Long-Term Trust</span>
            </div>
            <span className="text-xs font-mono font-bold text-[#FF5722]">STAGES 05 — 06</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/*  Stage 05  */}
            <div
              className="bg-white p-7 rounded-2xl border border-[#E8E3DA] hover:border-[#FF5722] hover:shadow-lg transition space-y-4 card-hover-lift cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-royal text-[#FF5722]">05</span>
                <span
                  className="text-[10px] font-mono px-2.5 py-1 rounded bg-orange-100 text-[#FF5722] font-bold">PROCESSING</span>
              </div>
              <h3 className="text-xl font-bold font-luxury text-[#0B0E14]">Order Processing & Follow-Up</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Once terms are finalized, we coordinate actively with all parties, tracking loom schedules, packaging
                parameters, and dispatch timelines to ensure seamless communication and punctual fulfillment.
              </p>
              <div
                className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Deliverable:</span>
                <span className="font-bold text-[#0B0E14]">Dispatch Monitoring & Logistics Tracking</span>
              </div>
            </div>

            {/*  Stage 06  */}
            <div
              className="bg-white p-7 rounded-2xl border border-[#E8E3DA] hover:border-[#FF5722] hover:shadow-lg transition space-y-4 card-hover-lift cursor-pointer">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-royal text-[#FF5722]">06</span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-orange-100 text-[#FF5722] font-bold">TRUST &
                  SUPPORT</span>
              </div>
              <h3 className="text-xl font-bold font-luxury text-[#0B0E14]">Transparency & Reliable Support</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                We prioritize total transparency throughout the relationship, keeping both clients and manufacturing
                partners informed of real-time updates, fostering the trust essential for repeat business and
                generational goodwill.
              </p>
              <div
                className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Deliverable:</span>
                <span className="font-bold text-[#0B0E14]">Enduring Commercial Relationship</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
  );
}
