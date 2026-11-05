import React from 'react';
import GlowCard from './ui/glow-card';
import { Target, Layers, Compass, Handshake, Clock, ShieldCheck } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      num: '01',
      stageTag: 'Stage 01 • Intake',
      icon: Target,
      title: 'Understanding Requirements',
      subtitle: 'Client-First Sourcing Alignment',
      description: "We begin by understanding our clients' specific needs, including product preferences, quality expectations, quantity requirements and target market. This helps us identify suitable sourcing opportunities aligned with their business objectives.",
      deliverable: 'Target Commercial Brief & Mill Alignment'
    },
    {
      num: '02',
      stageTag: 'Stage 02 • Network Scan',
      icon: Compass,
      title: 'Sourcing from Our Network',
      subtitle: 'Direct Production Corridors',
      description: "Based on the requirements, we explore our established network of manufacturers across major textile hubs to identify relevant manufacturing partners and suitable sourcing options.",
      deliverable: 'Vetted Mill & Weaver Matching'
    },
    {
      num: '03',
      stageTag: 'Stage 03 • Curated Selection',
      icon: Layers,
      title: 'Product Matching & Selection',
      subtitle: 'Sample Verification & Swatch Scrutiny',
      description: "We help identify and match suitable products with our clients' requirements, considering their preferences, target customers and market needs to support better product selection.",
      deliverable: 'Verified Swatch & Sampling Coordination'
    },
    {
      num: '04',
      stageTag: 'Stage 04 • Commercial Terms',
      icon: Handshake,
      title: 'Price Coordination & Negotiation',
      subtitle: 'Direct Loom Commercial Alignment',
      description: "We facilitate commercial discussions between our clients and manufacturers, helping both parties communicate their expectations and work towards mutually agreeable terms.",
      deliverable: 'Transparent Direct-Loom Pricing'
    },
    {
      num: '05',
      stageTag: 'Stage 05 • Execution',
      icon: Clock,
      title: 'Order Processing & Follow-Up',
      subtitle: 'Dispatch & Production Tracking',
      description: "Once the order terms are finalised, we coordinate with the relevant parties and follow up on the order process to help maintain proper communication and timely progress.",
      deliverable: 'End-to-End Loom Schedule Tracking'
    },
    {
      num: '06',
      stageTag: 'Stage 06 • Long-Term Trust',
      icon: ShieldCheck,
      title: 'Transparency & Reliable Support',
      subtitle: 'Generational Relationship Management',
      description: "We prioritise clear communication and transparency throughout the process, keeping our clients and manufacturing partners informed of relevant updates and agreed arrangements.",
      deliverable: 'Enduring Commercial Relationship'
    }
  ];

  return (
    <section id="how-we-work" className="py-14 sm:py-18 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FAF8F5] via-[#FFF6EE] to-[#FDF0E5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            How We Work
          </h2>

          <p className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52]">
            From Understanding Your Needs to Building Business Opportunities
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
            At <strong>Savera Tex Solution LLP</strong>, we follow a structured approach to connect retailers and wholesalers with suitable manufacturers. From understanding your requirements to coordinating orders and follow-ups, we make the process clear, organized and dependable.
          </p>
        </div>

        {/* ── 6 GLOW CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {steps.map((step) => (
            <GlowCard key={step.num} borderWidth="p-[3.5px]">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-black text-[#0F1318] group-hover:text-[#f16701] transition-colors leading-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm font-bold text-[#f16701]">
                  {step.subtitle}
                </p>

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
