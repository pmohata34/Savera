import React, { useState } from 'react';
import RadialGlowButton from './ui/radial-glow-button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#fbd7b4]/50 shadow-xs">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 h-18 flex items-center justify-between gap-3 lg:gap-4 xl:gap-6">

        {/* Brand Pill with Prominent Cropped Official Logo & Visible 'Since 1995' - VERY LEFT */}
        <a href="#hero" className="flex items-center gap-3 group flex-shrink-0 min-w-0">
          <div className="h-11 w-11 sm:h-12 sm:w-12 rounded-xl overflow-hidden bg-white p-1 border border-[#f8b47d]/40 shadow-xs flex items-center justify-center flex-shrink-0 group-hover:border-[#f16701] transition">
            <img
              src="/assets/logo_cropped.png"
              alt="Savera - Since 1995"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-lg sm:text-xl xl:text-2xl font-bold font-playfair tracking-normal leading-none inline-flex items-baseline gap-1.5 whitespace-nowrap">
              <span className="text-[#f16701]">SAVERA</span>
              <span className="text-[#0F1318]">TEX SOLUTION LLP</span>
            </span>
            <span className="text-[9px] font-bold tracking-[0.22em] text-neutral-600 uppercase mt-0.5 whitespace-nowrap">
              Commission Agent of all textile goods
            </span>
          </div>
        </a>

        {/* Center Nav Capsule in Sequential Order - CENTERED IN FLEX FLOW (NEVER OVERLAPS BRAND) */}
        <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-[#FAF8F5] p-1 rounded-full border border-[#fbd7b4]/60 text-[11px] xl:text-xs font-bold text-neutral-600 shadow-inner flex-shrink-0">
          <a href="#hero" className="px-2.5 xl:px-3 py-1 rounded-full hover:text-[#f16701] hover:bg-white transition whitespace-nowrap">About Us</a>
          <a href="#how-we-work" className="px-2.5 xl:px-3 py-1 rounded-full hover:text-[#f16701] hover:bg-white transition whitespace-nowrap">How We Work</a>
          <a href="#sourcing-map" className="px-2.5 xl:px-3 py-1 rounded-full hover:text-[#f16701] hover:bg-white transition whitespace-nowrap">Sourcing Hubs</a>
          <a href="#products" className="px-2.5 xl:px-3 py-1 rounded-full hover:text-[#f16701] hover:bg-white transition whitespace-nowrap">Product Range</a>
          <a href="#growth-journey" className="px-2.5 xl:px-3 py-1 rounded-full hover:text-[#f16701] hover:bg-white transition whitespace-nowrap">Growth Journey</a>
          <a href="#why-choose" className="px-2.5 xl:px-3 py-1 rounded-full hover:text-[#f16701] hover:bg-white transition whitespace-nowrap">Why Choose Us</a>
          <a href="#founder" className="px-2.5 xl:px-3 py-1 rounded-full hover:text-[#f16701] hover:bg-white transition whitespace-nowrap">Founder</a>
          <a href="#testimonials" className="px-2.5 xl:px-3 py-1 rounded-full hover:text-[#f16701] hover:bg-white transition whitespace-nowrap">Reviews</a>
        </nav>

        {/* Right Action Cluster - VERY RIGHT */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <RadialGlowButton
            as="a"
            href="#connect"
            size="sm"
          >
            <span>Inquire Now</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </RadialGlowButton>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#FAF8F5] text-neutral-700 hover:bg-[#fbd7b4]/30 transition cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#fbd7b4]/40 bg-white/98 backdrop-blur-2xl px-6 py-5 shadow-2xl flex flex-col gap-2.5 text-sm text-neutral-700">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-[#FAF8F5] hover:text-[#f16701] transition">About Us</a>
          <a href="#how-we-work" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-[#FAF8F5] hover:text-[#f16701] transition">How We Work</a>
          <a href="#sourcing-map" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-[#FAF8F5] hover:text-[#f16701] transition">Sourcing Hubs</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-[#FAF8F5] hover:text-[#f16701] transition">Product Range</a>
          <a href="#growth-journey" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-[#FAF8F5] hover:text-[#f16701] transition">Growth Journey</a>
          <a href="#why-choose" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-[#FAF8F5] hover:text-[#f16701] transition">Why Choose Us</a>
          <a href="#founder" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-[#FAF8F5] hover:text-[#f16701] transition">Founder Message</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-[#FAF8F5] hover:text-[#f16701] transition">Client Reviews</a>
          <a href="#connect" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl bg-[#f7e5d4] text-[#f16701] font-bold transition">Inquire Now</a>
        </div>
      )}
    </header>
  );
}
