import React from 'react';

export default function HowWeWork() {
  const steps = [
    {
      title: 'Understanding Requirements',
      description: "We begin by understanding our clients' specific needs, including product preferences, quality expectations, quantity requirements and target market. This helps us identify suitable sourcing opportunities aligned with their business objectives."
    },
    {
      title: 'Sourcing from Our Network',
      description: "Based on the requirements, we explore our established network of manufacturers across major textile hubs to identify relevant manufacturing partners and suitable sourcing options."
    },
    {
      title: 'Product Matching & Selection',
      description: "We help identify and match suitable products with our clients' requirements, considering their preferences, target customers and market needs to support better product selection."
    },
    {
      title: 'Price Coordination & Negotiation',
      description: "We facilitate commercial discussions between our clients and manufacturers, helping both parties communicate their expectations and work towards mutually agreeable terms."
    },
    {
      title: 'Order Processing & Follow-Up',
      description: "Once the order terms are finalised, we coordinate with the relevant parties and follow up on the order process to help maintain proper communication and timely progress."
    },
    {
      title: 'Transparency & Reliable Support',
      description: "We prioritise clear communication and transparency throughout the process, keeping our clients and manufacturing partners informed of relevant updates and agreed arrangements."
    }
  ];

  return (
    <section id="how-we-work" className="py-14 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FDF0E5] via-[#FAF8F5] to-white border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-bl from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#f16701] text-[11px] font-bold uppercase tracking-widest border border-[#f8b47d]/50 shadow-2xs">
            <span>Operating Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1318] tracking-tight">
            How We Work
          </h2>

          <p className="text-sm sm:text-base font-bold text-[#f16701]">
            From Understanding Your Needs to Building Business Opportunities
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            At <strong>Savera Tex Solution LLP</strong>, we follow a structured approach to connect retailers and wholesalers with suitable manufacturers. From understanding your requirements to coordinating orders and follow-ups, we aim to make the process clear, organised and convenient for everyone involved.
          </p>
        </div>

        {/* 6 Minimalist Cards Grid (Clean Heading + Paragraph only, zero badges/deliverables) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-[#f8b47d]/35 hover:border-[#f16701]/50 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 space-y-2.5"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#0F1318] hover:text-[#f16701] transition-colors">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
