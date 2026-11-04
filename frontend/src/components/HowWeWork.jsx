import React from 'react';

export default function HowWeWork() {
  const steps = [
    {
      num: '01',
      title: 'Understanding Requirements',
      badge: 'Step 01 • Intake',
      description: "We begin by understanding our clients' specific needs, including product preferences, quality expectations, quantity requirements and target market. This helps us identify suitable sourcing opportunities aligned with their business objectives.",
      deliverable: 'Target Sourcing Alignment'
    },
    {
      num: '02',
      title: 'Sourcing from Our Network',
      badge: 'Step 02 • Network Scan',
      description: "Based on the requirements, we explore our established network of manufacturers across major textile hubs to identify relevant manufacturing partners and suitable sourcing options.",
      deliverable: 'Vetted Mill & Weaver Matching'
    },
    {
      num: '03',
      title: 'Product Matching & Selection',
      badge: 'Step 03 • Curated Selection',
      description: "We help identify and match suitable products with our clients' requirements, considering their preferences, target customers and market needs to support better product selection.",
      deliverable: 'Sample & Swatch Verification'
    },
    {
      num: '04',
      title: 'Price Coordination & Negotiation',
      badge: 'Step 04 • Commercial Alignment',
      description: "We facilitate commercial discussions between our clients and manufacturers, helping both parties communicate their expectations and work towards mutually agreeable terms.",
      deliverable: 'Direct Loom Commercial Terms'
    },
    {
      num: '05',
      title: 'Order Processing & Follow-Up',
      badge: 'Step 05 • Execution',
      description: "Once the order terms are finalised, we coordinate with the relevant parties and follow up on the order process to help maintain proper communication and timely progress.",
      deliverable: 'Dispatch & Production Coordination'
    },
    {
      num: '06',
      title: 'Transparency & Reliable Support',
      badge: 'Step 06 • Long-Term Support',
      description: "We prioritise clear communication and transparency throughout the process, keeping our clients and manufacturing partners informed of relevant updates and agreed arrangements.",
      deliverable: 'Continuous Relationship Management'
    }
  ];

  return (
    <section id="how-we-work" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-white via-[#FAF8F5] to-white border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Gradient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-28 w-96 h-96 bg-gradient-to-tr from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -right-28 w-96 h-96 bg-gradient-to-bl from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">

        {/* Section Header with Verbatim Text */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#f7e5d4] to-white text-[#f16701] text-xs font-bold uppercase tracking-widest border border-[#f8b47d]/50 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f16701] animate-pulse"></span>
            <span>Structured Sourcing Engine</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            How We Work
          </h2>

          <p className="text-base sm:text-lg font-semibold text-[#f16701]">
            From Understanding Your Needs to Building Business Opportunities
          </p>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            At <strong className="text-[#0F1318] font-bold">Savera Tex Solution LLP</strong>, we follow a structured approach to connect retailers and wholesalers with suitable manufacturers. From understanding your requirements to coordinating orders and follow-ups, we aim to make the process clear, organised and convenient for everyone involved.
          </p>
        </div>

        {/* 6-Card Structured Grid (No ugly pill bridges!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group relative p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-white to-[#f7e5d4]/40 border border-[#f8b47d]/35 hover:border-[#f16701]/50 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Top Row: Number & Badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f16701] to-[#f48129]">
                    {step.num}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#f7e5d4]/80 text-[#f16701] border border-[#f8b47d]/40">
                    {step.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0F1318] group-hover:text-[#f16701] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Bottom Deliverable Strip */}
              <div className="pt-6 mt-6 border-t border-[#fbd7b4]/40 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-neutral-500">Deliverable</span>
                <span className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f16701]"></span>
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
