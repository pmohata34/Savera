import React from 'react';
import GlowCard from './ui/glow-card';

export default function HowWeWork() {
  const steps = [
    {
      num: '01',
      title: 'Understanding Requirements',
      description: "We begin by understanding our clients' specific needs, including product preferences, quality expectations, quantity requirements and target market. This helps us identify suitable sourcing opportunities aligned with their business objectives."
    },
    {
      num: '02',
      title: 'Sourcing from Our Network',
      description: "Based on the requirements, we explore our established network of manufacturers across major textile hubs to identify relevant manufacturing partners and suitable sourcing options."
    },
    {
      num: '03',
      title: 'Product Matching & Selection',
      description: "We help identify and match suitable products with our clients' requirements, considering their preferences, target customers and market needs to support better product selection."
    },
    {
      num: '04',
      title: 'Price Coordination & Negotiation',
      description: "We facilitate commercial discussions between our clients and manufacturers, helping both parties communicate their expectations and work towards mutually agreeable terms."
    },
    {
      num: '05',
      title: 'Order Processing & Follow-Up',
      description: "Once the order terms are finalised, we coordinate with the relevant parties and follow up on the order process to help maintain proper communication and timely progress."
    },
    {
      num: '06',
      title: 'Transparency & Reliable Support',
      description: "We prioritise clear communication and transparency throughout the process, keeping our clients and manufacturing partners informed of relevant updates and agreed arrangements."
    }
  ];

  return (
    <section id="how-we-work" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-[#FFF6EE] to-[#FDF0E5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            How We Work
          </h2>

          <p className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52]">
            From Understanding Your Needs to Building Business Opportunities
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
            At <strong className="font-playfair font-bold text-sm inline-flex items-baseline gap-1"><span className="text-[#f16701]">SAVERA</span> <span className="text-[#0F1318]">TEX SOLUTION LLP</span></strong>, we follow a structured approach to connect retailers and wholesalers with suitable manufacturers. From understanding your requirements to coordinating orders and follow-ups, we make the process clear, organized and dependable.
          </p>
        </div>

        {/* ── 6 GLOW CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {steps.map((step) => (
            <GlowCard key={step.num} borderWidth="p-[3.5px]">
              <div className="space-y-3 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/40 font-mono tracking-wider">
                      STEP {step.num}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0F1318] group-hover:text-[#f16701] transition-colors leading-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal pt-1">
                  {step.description}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>

      </div>
    </section>
  );
}
