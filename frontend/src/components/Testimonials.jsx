import React, { useState } from 'react';
import { highlightSavera } from '../utils/highlightSavera';

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
      className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] via-[#FFF5EC] to-[#FDF0E5] border-b border-[#fbd7b4]/40 relative overflow-hidden"
    >
      {/* Warm Ambient Lighting Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/25 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative z-10">

        {/* Section Header: ShriVara Typography & Proportions */}
        <div className="text-center space-y-2">
          
          {/* — TESTIMONIALS — with refined horizontal rules */}
          <div className="flex items-center justify-center gap-3 text-xs sm:text-sm font-bold tracking-[0.28em] text-[#f16701] uppercase">
            <span className="w-8 sm:w-12 h-px bg-[#f16701]/70"></span>
            <span>TESTIMONIALS</span>
            <span className="w-8 sm:w-12 h-px bg-[#f16701]/70"></span>
          </div>

          {/* "What Our Clients Say" with "Clients" highlighted in italic serif */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            What Our <span className="text-[#f16701] italic font-serif font-normal">Clients</span> Say
          </h2>
        </div>

        {/* Carousel Card Container */}
        <div className="relative">

          {/* Prev Button Positioned Directly on Left Border */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#f8b47d]/80 hover:border-[#f16701] text-neutral-800 hover:text-[#f16701] shadow-md hover:shadow-xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button Positioned Directly on Right Border */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#f8b47d]/80 hover:border-[#f16701] text-neutral-800 hover:text-[#f16701] shadow-md hover:shadow-xl flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Active Testimonial Card in Warm Gradient Luxe Styling */}
          <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-br from-white via-white to-[#FFF6ED] border border-[#f8b47d]/60 shadow-xl hover:border-[#f16701]/60 transition-all duration-300">
            
            {/* Quotation Mark (66 shape) in Savera Orange */}
            <div className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f16701] leading-none mb-3 sm:mb-5 select-none font-bold">
              “
            </div>

            {/* Testimonial Quote Text: Italicized, High-End Editorial Serif */}
            <div className="space-y-4 text-sm sm:text-base md:text-lg italic font-serif leading-relaxed text-neutral-800 font-normal min-h-[150px] sm:min-h-[130px]">
              {current.paragraphs.map((p, idx) => (
                <p key={idx}>{highlightSavera(p)}</p>
              ))}
            </div>

            {/* Bottom Attribution Line: Dash prefix + Uppercase author + tag */}
            <div className="mt-6 pt-5 border-t border-[#fbd7b4]/50 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="w-6 sm:w-8 h-px bg-[#f16701]"></span>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#f16701]">
                    {current.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-600 mt-0.5">
                    {current.role}
                  </p>
                </div>
              </div>

              {/* Review Counter Badge */}
              <div className="text-[11px] font-bold font-mono px-3 py-1 rounded-full bg-[#FAF8F5] text-neutral-600 border border-[#f8b47d]/40">
                {currentIndex + 1} / {testimonials.length}
              </div>
            </div>
          </div>

          {/* Indicator Dots Centered Below Card */}
          <div className="flex items-center justify-center gap-2 pt-4">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 bg-[#f16701]'
                    : 'w-2 bg-[#fbd7b4] hover:bg-[#f8b47d]'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
