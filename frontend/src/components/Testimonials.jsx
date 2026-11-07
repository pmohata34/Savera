import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Ujjwal Sewani',
    role: '25+ Years Business Partner',
    tag: 'Sarees & Suits Wholesale Partner',
    paragraphs: [
      `We have been working with them for over 25 years, and the experience has always been exceptional. They are extremely trustworthy, professional, and have deep knowledge of the textile market in Kolkata. Whether it's sarees, suits, or any specific requirement, they always takes us to the right suppliers and ensures we get the best quality and variety at the right price.`,
      `Special mention to Vineet Bhaiya. What makes him stand out is his dedication and personal touch. He treats our business like his own and goes above and beyond to make sure we are satisfied. In an industry where reliability is hard to find, Vineet Bhaiya has consistently been a dependable partner for us for more than two decades.`,
      `Highly recommended to anyone looking for a genuine and experienced textile marketing agent in Kolkata.`
    ]
  },
  {
    id: 2,
    name: 'Siddharth Gupta',
    role: 'New Startup Founder',
    tag: 'Retail Startup Mentorship',
    paragraphs: [
      `We are a new startup. Vineet Ji (owner of savera group) understood and guided us like a father. His experience speaks. We met amazing manufacturers. Apart from business also, he guided us with the city tour, the food, hotels everything.`
    ]
  },
  {
    id: 3,
    name: 'Vijesh Vidyadhar',
    role: '10+ Years Business Partner',
    tag: 'Long-Standing Commercial Associate',
    paragraphs: [
      `We have been doing business with Savera Marketing for over 10 years now. Vineet Bhai has been a great support for us, his knowledge of the Industry is exemplary! Definitely recommend!!`
    ]
  },
  {
    id: 4,
    name: 'Srinidi',
    role: 'Client Associate',
    tag: 'Multi-Generational Association',
    paragraphs: [
      `Great experience working with Vineeth ji. . Looking forward to working together again. All the best to his son Pranay as he carries forward his father’s legacy!!`
    ]
  },
  {
    id: 5,
    name: 'Sandhya Tayal',
    role: 'Kolkata Sourcing Client',
    tag: 'Direct Manufacturer Network',
    paragraphs: [
      `Always cooperative ..knowledgeable..and experienced and main thing is has a v well connection with renowned manufacturers of Kolkata..thank savera textiles for serving best 👍`
    ]
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDark, setIsDark] = useState(true); // Default to Dark Luxury as in the 1st reference photo

  const current = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className={`py-16 sm:py-20 px-4 sm:px-8 lg:px-12 border-b transition-colors duration-500 relative overflow-hidden ${
        isDark
          ? 'bg-[#0E0B09] border-neutral-800 text-white'
          : 'bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-[#fbd7b4]/40 text-[#0F1318]'
      }`}
    >
      {/* Ambient Lighting Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 -right-24 w-96 h-96 rounded-full blur-3xl transition-opacity duration-700 ${
            isDark ? 'bg-[#f16701]/10' : 'bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20'
          }`}
        ></div>
        <div
          className={`absolute bottom-1/4 -left-24 w-96 h-96 rounded-full blur-3xl transition-opacity duration-700 ${
            isDark ? 'bg-[#f16701]/10' : 'bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15'
          }`}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">

        {/* Section Header: Formatted exactly like ShriVara Reference */}
        <div className="text-center space-y-3">
          
          {/* Subtle Theme Toggle (Luxury Noir / Warm Ivory) */}
          <div className="flex justify-end mb-2">
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition border ${
                isDark
                  ? 'bg-neutral-900/80 border-[#f8b47d]/30 text-[#fbd7b4] hover:border-[#f16701]'
                  : 'bg-white border-[#f8b47d]/50 text-neutral-600 hover:text-[#f16701]'
              }`}
              title="Toggle between Luxury Noir (Pic 1) and Warm Ivory (Site theme)"
            >
              <span>{isDark ? '🌙 Luxury Noir' : '☀️ Warm Ivory'}</span>
              <span className="text-[9px] opacity-60">| Switch</span>
            </button>
          </div>

          {/* — TESTIMONIALS — with refined horizontal rules */}
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-bold tracking-[0.28em] text-[#f16701] uppercase">
            <span className={`w-8 sm:w-12 h-px ${isDark ? 'bg-[#f16701]/60' : 'bg-[#f16701]/70'}`}></span>
            <span>TESTIMONIALS</span>
            <span className={`w-8 sm:w-12 h-px ${isDark ? 'bg-[#f16701]/60' : 'bg-[#f16701]/70'}`}></span>
          </div>

          {/* "What Our Clients Say" with "Clients" in elegant italic serif accent */}
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-[#0F1318]'
            }`}
          >
            What Our <span className="text-[#f16701] italic font-serif font-normal">Clients</span> Say
          </h2>
        </div>

        {/* Carousel Card Container */}
        <div className="relative">

          {/* Active Testimonial Card */}
          <div
            className={`relative rounded-3xl p-7 sm:p-10 md:p-12 transition-all duration-500 border ${
              isDark
                ? 'bg-[#15110E] border-[#f8b47d]/40 shadow-2xl'
                : 'bg-white border-[#f8b47d]/60 shadow-xl'
            }`}
          >
            {/* Large Accent Quotation Mark (66 shape) */}
            <div className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f16701] leading-none mb-4 sm:mb-6 select-none font-bold">
              “
            </div>

            {/* Testimonial Quote Text: Italicized, High-End Editorial Serif */}
            <div
              className={`space-y-4 text-sm sm:text-base md:text-lg italic font-serif leading-relaxed font-normal min-h-[160px] sm:min-h-[140px] ${
                isDark ? 'text-[#FAF8F5]/90' : 'text-neutral-700'
              }`}
            >
              {current.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Bottom Attribution Line: Dash prefix + Uppercase author + tag */}
            <div
              className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-3 ${
                isDark ? 'border-neutral-800' : 'border-[#fbd7b4]/40'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 sm:w-8 h-px bg-[#f16701]"></span>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#f16701]">
                    {current.name}
                  </h4>
                  <p
                    className={`text-[11px] sm:text-xs font-medium uppercase tracking-wider mt-0.5 ${
                      isDark ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    {current.role}
                  </p>
                </div>
              </div>

              {/* Review Index Pill */}
              <div
                className={`text-[11px] font-mono px-2.5 py-1 rounded-full ${
                  isDark ? 'bg-neutral-900 text-neutral-400' : 'bg-[#FAF8F5] text-neutral-500'
                }`}
              >
                {currentIndex + 1} / {testimonials.length}
              </div>
            </div>
          </div>

          {/* Navigation Controls: Previous / Next Buttons */}
          <div className="flex items-center justify-between pt-6 sm:pt-8">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                isDark
                  ? 'bg-[#15110E] border-[#f8b47d]/40 text-[#FAF8F5] hover:border-[#f16701] hover:text-[#f16701] hover:bg-[#1f1814]'
                  : 'bg-white border-[#f8b47d]/60 text-neutral-700 hover:border-[#f16701] hover:text-[#f16701] hover:bg-[#FAF8F5] shadow-xs'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Prev</span>
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-7 bg-[#f16701]'
                      : isDark
                      ? 'w-2 bg-neutral-700 hover:bg-neutral-500'
                      : 'w-2 bg-[#fbd7b4] hover:bg-[#f8b47d]'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                isDark
                  ? 'bg-[#15110E] border-[#f8b47d]/40 text-[#FAF8F5] hover:border-[#f16701] hover:text-[#f16701] hover:bg-[#1f1814]'
                  : 'bg-white border-[#f8b47d]/60 text-neutral-700 hover:border-[#f16701] hover:text-[#f16701] hover:bg-[#FAF8F5] shadow-xs'
              }`}
            >
              <span>Next</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
