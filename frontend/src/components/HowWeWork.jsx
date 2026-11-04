import React, { useState } from 'react';
import InteractiveBook from './ui/interactive-book';

export default function HowWeWork() {
  const [activeTab, setActiveTab] = useState(0);

  const steps = [
    {
      title: 'Understanding Requirements',
      stageTag: 'Stage 01 • Intake',
      highlight: 'Target Market & Quality Parameter Definition',
      description: "We begin by understanding our clients' specific needs, including product preferences, quality expectations, quantity requirements and target market. This helps us identify suitable sourcing opportunities aligned with their business objectives.",
      valueNote: 'Client-first alignment ensures manufacturers receive precise commercial briefs.'
    },
    {
      title: 'Sourcing from Our Network',
      stageTag: 'Stage 02 • Network Scan',
      highlight: 'Surat, Banaras, Jaipur, Ahmedabad & Bhagalpur',
      description: "Based on the requirements, we explore our established network of manufacturers across major textile hubs to identify relevant manufacturing partners and suitable sourcing options.",
      valueNote: 'Direct loom access eliminates intermediary speculation and delays.'
    },
    {
      title: 'Product Matching & Selection',
      stageTag: 'Stage 03 • Curated Selection',
      highlight: 'Sample Verification & Swatch Scrutiny',
      description: "We help identify and match suitable products with our clients' requirements, considering their preferences, target customers and market needs to support better product selection.",
      valueNote: 'Strict quality filters ensure swatches meet exact retail requirements.'
    },
    {
      title: 'Price Coordination & Negotiation',
      stageTag: 'Stage 04 • Commercial Terms',
      highlight: 'Direct Manufacturer Commercial Terms',
      description: "We facilitate commercial discussions between our clients and manufacturers, helping both parties communicate their expectations and work towards mutually agreeable terms.",
      valueNote: 'Fair commercial alignment builds long-term multi-season partnerships.'
    },
    {
      title: 'Order Processing & Follow-Up',
      stageTag: 'Stage 05 • Execution',
      highlight: 'Loom Scheduling & Dispatch Tracking',
      description: "Once the order terms are finalised, we coordinate with the relevant parties and follow up on the order process to help maintain proper communication and timely progress.",
      valueNote: 'End-to-end follow-up protects production schedules and delivery commitments.'
    },
    {
      title: 'Transparency & Reliable Support',
      stageTag: 'Stage 06 • Long-Term Trust',
      highlight: 'Generational Partnership Since 1995',
      description: "We prioritise clear communication and transparency throughout the process, keeping our clients and manufacturing partners informed of relevant updates and agreed arrangements.",
      valueNote: 'Goodwill earned through honest dealings is our most valuable asset.'
    }
  ];

  // Map to Book Pages format
  const bookPages = steps.map((step, idx) => ({
    pageNumber: idx + 1,
    title: step.title,
    stageTag: step.stageTag,
    highlight: step.highlight,
    content: step.description,
    backContent: (
      <div className="space-y-3">
        <span className="text-[10px] font-black uppercase tracking-wider text-[#f16701] bg-[#f7e5d4] px-2.5 py-0.5 rounded-full border border-[#f8b47d]/40 inline-block">
          Commercial Principle
        </span>
        <h5 className="text-sm font-bold text-[#0F1318]">
          Value Commitment
        </h5>
        <p className="text-xs text-neutral-600 italic leading-relaxed">
          "{step.valueNote}"
        </p>
        <div className="pt-2 border-t border-[#fbd7b4]/40 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f16701]"></span>
          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Savera Tex Solution LLP</span>
        </div>
      </div>
    )
  }));

  return (
    <section id="how-we-work" className="py-14 sm:py-18 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FAF8F5] via-[#FFF6EE] to-[#FDF0E5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Gradient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#f7e5d4] to-[#f8b47d]/25 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#f16701] text-[11px] font-bold uppercase tracking-widest border border-[#f8b47d]/50 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f16701] animate-ping"></span>
            <span>Operating Pipeline • Interactive Handbook</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            How We Work
          </h2>

          <p className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52]">
            From Understanding Your Needs to Building Business Opportunities
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
            At <strong>Savera Tex Solution LLP</strong>, we follow a structured approach to connect retailers and wholesalers with suitable manufacturers. Explore our 6-stage operational sourcing handbook below.
          </p>
        </div>

        {/* ── 3D INTERACTIVE BOOK (Vengence UI Interactive Book) ── */}
        <div className="w-full flex justify-center py-4">
          <InteractiveBook
            coverTitle="Operating Pipeline"
            coverSubtitle="Sourcing Handbook"
            bookAuthor="Savera Tex Solution LLP"
            pages={bookPages}
            width={340}
            height={460}
          />
        </div>

        {/* ── RESPONSIVE COMPACT STAGE SUMMARY CARDS (Quick Grid View) ── */}
        <div className="pt-6 border-t border-[#fbd7b4]/40">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#f16701]">
              Full Sourcing Pipeline At A Glance
            </span>
            <span className="text-[11px] text-neutral-500">
              6 Structured Stages
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#f8b47d]/35 hover:border-[#f16701]/60 shadow-xs hover:shadow-md transition-all duration-300 space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/40">
                    Stage 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#f16701]/30 group-hover:bg-[#f16701] transition-colors"></span>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-[#0F1318] group-hover:text-[#f16701] transition-colors">
                  {step.title}
                </h4>

                <p className="text-xs text-neutral-600 leading-relaxed font-normal line-clamp-3">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
