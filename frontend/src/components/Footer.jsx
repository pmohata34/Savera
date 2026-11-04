import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white via-[#FAF8F5] to-[#f7e5d4]/40 text-neutral-800 pt-14 pb-10 px-4 sm:px-8 lg:px-12 border-t border-[#fbd7b4]/40 relative">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* 3 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Brand & Legacy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-[#f8b47d]/40 bg-white flex items-center justify-center p-0.5">
                <img src="/assets/logo.jpg" alt="Savera Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="block text-xl font-extrabold text-[#f16701] leading-none">SAVERA</span>
                <span className="block text-[9px] font-bold tracking-[0.25em] text-neutral-600 uppercase mt-0.5">TEX SOLUTION LLP</span>
              </div>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-[#f16701]">
              COMMISSION AGENT SINCE 1995
            </p>

            <p className="text-xs text-neutral-600 leading-relaxed max-w-sm">
              Connecting manufacturers with retailers and wholesalers across India and international markets. Built on three decades of trust, goodwill and long-term business relationships.
            </p>

            <div className="pt-2 text-[11px] text-neutral-500">
              <span>Operational Commission Platform • Registered LLP</span>
            </div>
          </div>

          {/* Column 2: Business Enquiries */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#f16701]">
              BUSINESS ENQUIRIES
            </h4>

            <div className="space-y-2.5 text-xs text-neutral-700">
              <div className="flex items-center gap-2.5">
                <span className="text-[#f16701]">📞</span>
                <a href="tel:+919432583461" className="hover:text-[#f16701] transition font-medium">+91 94325 83461</a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#f16701]">📞</span>
                <a href="tel:+919477665429" className="hover:text-[#f16701] transition font-medium">+91 94776 65429</a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#f16701]">📞</span>
                <a href="tel:+919477665430" className="hover:text-[#f16701] transition font-medium">+91 94776 65430</a>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <span className="text-[#f16701]">✉️</span>
                <a href="mailto:saveratexsolutionllp@gmail.com" className="hover:text-[#f16701] transition font-medium">saveratexsolutionllp@gmail.com</a>
              </div>
            </div>

            <div className="pt-3 border-t border-[#fbd7b4]/40 text-[11px] text-neutral-600 space-y-1">
              <p><strong className="text-neutral-800">Business Hours:</strong> Monday – Saturday: 10:30 AM to 7:30 PM IST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Column 3: Sourcing Corridors & Operations Hub */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#f16701]">
              CENTRAL OPERATIONS OFFICE
            </h4>

            <div className="space-y-3 text-xs text-neutral-700">
              <div className="p-4 rounded-2xl bg-white border border-[#f8b47d]/40 shadow-xs space-y-1">
                <p className="font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f16701]"></span>
                  <span>Operational Hub (Since 1995):</span>
                </p>
                <p className="text-neutral-600 text-[11px] leading-relaxed pl-4">
                  Central Operations Office,<br />
                  Kolkata - 700007, West Bengal, India
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#f8b47d]/40 shadow-xs space-y-1">
                <p className="font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f79a52]"></span>
                  <span>Registered Corporate Office:</span>
                </p>
                <p className="text-neutral-600 text-[11px] leading-relaxed pl-4">
                  Registered Corporate Office,<br />
                  Kolkata - 700007, West Bengal, India
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Sourcing Network Bar */}
        <div className="pt-8 border-t border-[#fbd7b4]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 1995 – 2026 <strong>Savera Tex Solution LLP</strong>. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>Kolkata HQ</span>
            <span>•</span>
            <span>Surat</span>
            <span>•</span>
            <span>Ahmedabad</span>
            <span>•</span>
            <span>Jaipur</span>
            <span>•</span>
            <span>Varanasi</span>
            <span>•</span>
            <span>Bhagalpur</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
