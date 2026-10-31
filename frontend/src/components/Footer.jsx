import React from 'react';

export default function Footer() {
  return (
<footer className="bg-[#0B0E14] text-white pt-20 pb-12 px-12 border-t border-neutral-800 relative">
    <div className="max-w-7xl mx-auto space-y-16">

      {/*  3 Main Columns  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

        {/*  Column 1: Brand & Legacy  */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF5722] to-amber-500 flex items-center justify-center text-white shadow-md">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L14.4 7.6L20 8.4L16 12.8L17.2 18.8L12 15.6L6.8 18.8L8 12.8L4 8.4L9.6 7.6L12 2Z" />
              </svg>
            </div>
            <div>
              <span className="block text-xl font-black font-royal text-[#FF5722] leading-none">SAVERA</span>
              <span className="block text-[9px] font-bold tracking-[0.25em] text-white uppercase mt-0.5">TEX SOLUTION
                LLP</span>
            </div>
          </div>

          <p className="text-xs font-bold uppercase tracking-widest text-[#FF5722]">
            COMMISSION AGENT SINCE 1995
          </p>

          <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
            Connecting manufacturers with wholesalers, retailers, and exporters across India and overseas. Built on
            three decades of trust, goodwill and transparent trade.
          </p>

          <div className="pt-2 text-[11px] text-neutral-500">
            <span>LLP Identification: Operational Commission Platform</span>
          </div>
        </div>

        {/*  Column 2: Business Enquiries  */}
        <div className="space-y-4">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FF5722]">
            BUSINESS ENQUIRIES
          </h4>

          <div className="space-y-2.5 text-xs text-neutral-300">
            <div className="flex items-center gap-2.5">
              <span className="text-[#FF5722]">📞</span>
              <a href="tel:+919432583461" className="hover:text-white transition font-medium">+91 94325 83461</a>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#FF5722]">📞</span>
              <a href="tel:+919477665429" className="hover:text-white transition font-medium">+91 94776 65429</a>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#FF5722]">📞</span>
              <a href="tel:+919477665430" className="hover:text-white transition font-medium">+91 94776 65430</a>
            </div>
            <div className="flex items-center gap-2.5 pt-1">
              <span className="text-[#FF5722]">✉️</span>
              <a href="mailto:saveratexsolutionllp@gmail.com"
                className="hover:text-white transition font-medium">saveratexsolutionllp@gmail.com</a>
            </div>
          </div>

          <div className="pt-3 border-t border-neutral-800 text-[11px] text-neutral-500 space-y-1">
            <p><strong className="text-neutral-400">Business Hours:</strong> Monday – Saturday: 10:30 AM to 7:30 PM IST</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/*  Column 3: Official Kolkata Offices (Clean Corporate Addresses)  */}
        <div className="space-y-4">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#FF5722]">
            OFFICIAL KOLKATA OFFICES
          </h4>

          <div className="space-y-3 text-xs text-neutral-300">

            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 space-y-1">
              <p className="font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5722]"></span>
                <span>Operational Office (Since 1995):</span>
              </p>
              <p className="text-neutral-400 text-[11px] leading-relaxed pl-4">
                Central Operations Office,<br />
                Kolkata - 700007, West Bengal, India
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800 space-y-1">
              <p className="font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span>Registered Corporate Office:</span>
              </p>
              <p className="text-neutral-400 text-[11px] leading-relaxed pl-4">
                Registered Corporate Office,<br />
                Kolkata - 700007, West Bengal, India
              </p>
            </div>

          </div>
        </div>

      </div>

      {/*  Bottom Bar  */}
      <div
        className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-neutral-500">
        <p>© 2026 <span className="text-[#FF5722] font-semibold">Savera</span> Tex Solution LLP. All Rights Reserved.</p>
        <p className="flex items-center gap-2">
          <span>Textile Commission Agency</span>
          <span>•</span>
          <span>Connecting Textile Businesses, Building Relationships</span>
          <span>•</span>
          <span className="text-neutral-400">Kolkata, West Bengal</span>
        </p>
      </div>

    </div>
  </footer>
  );
}
