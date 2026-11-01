import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-2xl border-b border-slate-200/90 shadow-xs text-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

        {/* Brand Pill */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF5722] via-[#E64A19] to-amber-500 flex items-center justify-center text-white shadow-md glow-orange transition transform group-hover:scale-105">
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L14.4 7.6L20 8.4L16 12.8L17.2 18.8L12 15.6L6.8 18.8L8 12.8L4 8.4L9.6 7.6L12 2Z" />
            </svg>
          </div>
          <div>
            <span className="block text-lg font-black tracking-tight text-[#FF5722] font-royal leading-none">
              SAVERA
            </span>
            <span className="block text-[8px] font-bold tracking-[0.22em] text-[#000000] uppercase mt-0.5">
              TEX SOLUTION LLP
            </span>
          </div>
        </a>

        {/* Center Nav Pills (Desktop Capsule Structure) */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/90 p-1.5 rounded-full border border-slate-200/80 text-xs font-semibold text-neutral-600 shadow-inner">
          <a href="#hero" className="px-3 py-1.5 rounded-full hover:text-neutral-900 hover:bg-white transition">About Us</a>
          <a href="#why-choose" className="px-3 py-1.5 rounded-full hover:text-neutral-900 hover:bg-white transition">Why Choose Us</a>
          <a href="#how-we-work" className="px-3 py-1.5 rounded-full hover:text-neutral-900 hover:bg-white transition">How We Work</a>
          <a href="#map" className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/15 text-[#FF5722] border border-orange-500/30 flex items-center gap-1.5 shadow-2xs font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse"></span>
            <span>Sourcing Hubs</span>
          </a>
          <a href="#products" className="px-3 py-1.5 rounded-full hover:text-neutral-900 hover:bg-white transition">Product Range</a>
          <a href="#founder" className="px-3 py-1.5 rounded-full hover:text-neutral-900 hover:bg-white transition">Founder & Vision</a>
          <a href="#story" className="px-3 py-1.5 rounded-full hover:text-neutral-900 hover:bg-white transition">Our Journey</a>
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Inquire Action Button */}
          <a
            href="#connect"
            className="px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#FF5722] to-amber-500 hover:from-[#E64A19] hover:to-amber-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-md glow-orange transition transform hover:scale-105 flex items-center gap-1.5"
          >
            <span>Inquire Now</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-full bg-slate-100 text-neutral-700 hover:bg-slate-200 transition cursor-pointer"
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
        <div className="xl:hidden border-t border-slate-200 bg-white/98 backdrop-blur-2xl px-6 py-5 shadow-2xl flex flex-col gap-2.5 text-sm text-neutral-700 animate-fadeIn">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-slate-50 hover:text-[#FF5722] transition">About Us</a>
          <a href="#why-choose" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-slate-50 hover:text-[#FF5722] transition">Why Choose Us</a>
          <a href="#how-we-work" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-slate-50 hover:text-[#FF5722] transition">How We Work</a>
          <a href="#map" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl text-[#FF5722] font-bold hover:bg-orange-50 transition">Sourcing Hubs (6 Cities)</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-slate-50 hover:text-[#FF5722] transition">Product Range (4 Categories)</a>
          <a href="#founder" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-slate-50 hover:text-[#FF5722] transition">Founder & Vision</a>
          <a href="#story" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 rounded-xl hover:bg-slate-50 hover:text-[#FF5722] transition">Our Journey (2026 ➔ 1995)</a>
        </div>
      )}
    </header>
  );
}
