import React, { useState, useEffect, useId, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, X, Sparkles } from 'lucide-react';

export default function HowWeWork() {
  const [activeStep, setActiveStep] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const modalRef = useRef(null);
  const id = useId();

  const steps = [
    {
      num: '01',
      stageTag: 'Stage 01 • Intake & Analysis',
      title: 'Understanding Requirements',
      subtitle: 'Client-First Sourcing Alignment',
      description: "We begin by understanding our clients' specific needs, including product preferences, quality expectations, quantity requirements and target market. This helps us identify suitable sourcing opportunities aligned with their business objectives.",
      deliverable: 'Target Commercial Brief & Mill Alignment',
      checklist: [
        'Detailed client preference and fabric composition mapping',
        'Target retail price-point calibration',
        'Quantity and seasonal delivery schedule setup'
      ]
    },
    {
      num: '02',
      stageTag: 'Stage 02 • Network Scan',
      title: 'Sourcing from Our Network',
      subtitle: 'Direct Production Corridors',
      description: "Based on the requirements, we explore our established network of manufacturers across major textile hubs to identify relevant manufacturing partners and suitable sourcing options.",
      deliverable: 'Vetted Mill & Weaver Matching',
      checklist: [
        'Direct scan across Surat, Banaras, Jaipur, Ahmedabad & Bhagalpur',
        'Matching with composite mills & specialized handloom clusters',
        'Filtering for verified capacity and production reliability'
      ]
    },
    {
      num: '03',
      stageTag: 'Stage 03 • Curated Selection',
      title: 'Product Matching & Selection',
      subtitle: 'Sample Verification & Swatch Scrutiny',
      description: "We help identify and match suitable products with our clients' requirements, considering their preferences, target customers and market needs to support better product selection.",
      deliverable: 'Verified Swatch & Sampling Coordination',
      checklist: [
        'Hands-on physical fabric swatch verification',
        'Design exclusivity & pattern alignment',
        'Batch consistency check before commercial commitment'
      ]
    },
    {
      num: '04',
      stageTag: 'Stage 04 • Commercial Terms',
      title: 'Price Coordination & Negotiation',
      subtitle: 'Direct Loom Commercial Alignment',
      description: "We facilitate commercial discussions between our clients and manufacturers, helping both parties communicate their expectations and work towards mutually agreeable terms.",
      deliverable: 'Transparent Direct-Loom Pricing',
      checklist: [
        'Eliminating intermediary speculative markup',
        'Clear payment structures and credit arrangements',
        'Mutual commercial alignment built on generational trust'
      ]
    },
    {
      num: '05',
      stageTag: 'Stage 05 • Execution',
      title: 'Order Processing & Follow-Up',
      subtitle: 'Dispatch & Production Tracking',
      description: "Once the order terms are finalised, we coordinate with the relevant parties and follow up on the order process to help maintain proper communication and timely progress.",
      deliverable: 'End-to-End Loom Schedule Tracking',
      checklist: [
        'Real-time tracking of weaving and dyeing schedules',
        'Packaging standards and transit documentation check',
        'Timely dispatch coordination to destination stores'
      ]
    },
    {
      num: '06',
      stageTag: 'Stage 06 • Long-Term Trust',
      title: 'Transparency & Reliable Support',
      subtitle: 'Generational Relationship Management',
      description: "We prioritise clear communication and transparency throughout the process, keeping our clients and manufacturing partners informed of relevant updates and agreed arrangements.",
      deliverable: 'Enduring Commercial Relationship',
      checklist: [
        'Continuous multi-season market feedback',
        'Proactive updates on emerging textile collections',
        'Long-term trade advocacy since 1995'
      ]
    }
  ];

  // Close modal on Escape key and lock background scroll
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setActiveStep(null);
    }
    if (activeStep) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeStep]);

  // Close modal on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setActiveStep(null);
      }
    }
    if (activeStep) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [activeStep]);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % steps.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section id="how-we-work" className="py-14 sm:py-18 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FAF8F5] via-[#FFF6EE] to-[#FDF0E5] border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#f16701] text-[11px] font-bold uppercase tracking-widest border border-[#f8b47d]/50 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f16701] animate-ping"></span>
            <span>Operating Pipeline • Interactive Pop-Up Carousel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            How We Work
          </h2>

          <p className="text-sm sm:text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52]">
            From Understanding Your Needs to Building Business Opportunities
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
            At <strong>Savera Tex Solution LLP</strong>, we follow a structured 6-stage approach to connect retailers and wholesalers with suitable manufacturers. Click any stage card to pop up the full operational breakdown.
          </p>
        </div>

        {/* ── EXPANDABLE POP-UP MODAL (Framer Motion layoutId) ── */}
        <AnimatePresence>
          {activeStep && typeof activeStep === 'object' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#1e1005]/60 backdrop-blur-sm h-full w-full z-[10000]"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeStep && typeof activeStep === 'object' ? (
            <div className="fixed inset-0 top-6 grid place-items-center z-[10001] p-4">
              <motion.div
                layoutId={`step-card-${activeStep.num}-${id}`}
                ref={modalRef}
                className="w-full max-w-[620px] max-h-[90vh] flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#f8b47d]/60 relative my-auto"
              >
                {/* Pop-Up Modal Header with Gradient */}
                <div className="relative p-6 sm:p-7 bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52] text-white">
                  <button
                    onClick={() => setActiveStep(null)}
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#f16701] backdrop-blur-md flex items-center justify-center transition cursor-pointer shadow-md"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md border border-white/30 text-white">
                      {activeStep.stageTag}
                    </span>
                    <span className="text-xs font-mono font-bold text-white/80">
                      Step {activeStep.num} of 06
                    </span>
                  </div>

                  <motion.h3
                    layoutId={`step-title-${activeStep.num}-${id}`}
                    className="text-2xl sm:text-3xl font-black text-white leading-tight"
                  >
                    {activeStep.title}
                  </motion.h3>

                  <p className="text-xs text-white/90 font-medium mt-1">
                    {activeStep.subtitle}
                  </p>
                </div>

                {/* Pop-Up Body */}
                <div className="p-6 sm:p-7 overflow-y-auto space-y-5">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#f16701]">
                      Detailed Operational Framework
                    </span>
                    <motion.p
                      layoutId={`step-desc-${activeStep.num}-${id}`}
                      className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal"
                    >
                      {activeStep.description}
                    </motion.p>
                  </div>

                  {/* Primary Deliverable Callout */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#f7e5d4] via-[#fbd7b4]/40 to-white border border-[#f8b47d]/50 space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#f16701]">
                      Key Stage Deliverable
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#0F1318]">
                      {activeStep.deliverable}
                    </p>
                  </div>

                  {/* Execution Protocol Checklist */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                      Execution Protocol
                    </span>
                    <div className="space-y-2">
                      {activeStep.checklist.map((item, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-[#f16701] flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pop-Up Footer Actions */}
                  <div className="pt-4 border-t border-[#fbd7b4]/40 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setActiveStep(null)}
                      className="px-4 py-2 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-xs font-bold text-neutral-700 transition cursor-pointer"
                    >
                      Close Details
                    </button>

                    <a
                      href="#connect"
                      onClick={() => setActiveStep(null)}
                      className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#f16701] to-[#f48129] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:opacity-95 transition flex items-center gap-1.5"
                    >
                      <span>Inquire This Process</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        {/* ── EXPANDABLE PROCESS CARDS GRID (Pop-Up Cards with Gradient Glow) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, idx) => (
            <motion.div
              layoutId={`step-card-${step.num}-${id}`}
              key={step.num}
              onClick={() => setActiveStep(step)}
              className="group p-5 sm:p-6 rounded-3xl bg-white border border-[#f8b47d]/35 hover:border-[#f16701]/60 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 transform hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f16701]/10 to-transparent rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              <div>
                {/* Header: Stage Badge + Number */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/40">
                    {step.stageTag}
                  </span>
                  <span className="text-xl font-black text-[#f16701]/70 font-mono group-hover:text-[#f16701] transition-colors">
                    {step.num}
                  </span>
                </div>

                <motion.h3
                  layoutId={`step-title-${step.num}-${id}`}
                  className="text-base sm:text-lg font-bold text-[#0F1318] group-hover:text-[#f16701] transition-colors leading-snug"
                >
                  {step.title}
                </motion.h3>

                <p className="text-[11px] font-semibold text-[#f48129] mt-0.5 mb-2">
                  {step.subtitle}
                </p>

                <motion.p
                  layoutId={`step-desc-${step.num}-${id}`}
                  className="text-xs text-neutral-600 leading-relaxed font-normal line-clamp-3"
                >
                  {step.description}
                </motion.p>
              </div>

              {/* Bottom Expand Pill Action */}
              <div className="pt-3 border-t border-[#fbd7b4]/35 flex items-center justify-between text-[11px] text-[#f16701] font-bold">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Click to Expand Pop-Up</span>
                </span>
                <span className="w-6 h-6 rounded-full bg-[#f7e5d4] flex items-center justify-center text-[#f16701] group-hover:translate-x-1 group-hover:bg-[#f16701] group-hover:text-white transition-all">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
