import React from 'react';

export default function WhyChoose() {
  const pillars = [
    {
      num: '01',
      title: 'Textile Market Experience Since 1995',
      description: 'Our journey in the textile market began in 1995. Over the years, we have developed a practical understanding of the industry, its markets, business practices and the requirements of different businesses. This experience helps us guide both manufacturers and buyers in exploring suitable business opportunities.',
      tag: 'Three Decades of Practical Market Knowledge',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      num: '02',
      title: 'Connecting Manufacturers with Genuine Buyers',
      description: 'We help manufacturers connect with genuine retailers and wholesalers who have relevant product requirements. Our focus is on developing reliable business connections that can grow into long-term professional relationships.',
      tag: 'Verified Commercial Integrity',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      num: '03',
      title: 'Saving Time Through the Right Connections',
      description: 'Finding suitable manufacturers or genuine buyers can take considerable time and effort. Through our established business network, we help both sides explore relevant connections more efficiently, reducing the need for independent searching.',
      tag: 'Frictionless Matchmaking',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      num: '04',
      title: 'Support for New and Growing Businesses',
      description: 'Starting a new textile shop or expanding an existing business requires the right product connections and market understanding. With our experience since 1995, we aim to assist new retailers and growing businesses in exploring suitable manufacturers, while also helping manufacturers connect with new business opportunities.',
      tag: 'Retailer & Startup Incubation',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      num: '05',
      title: 'Access to Multiple Textile Markets',
      description: 'With connections across major textile hubs, we help buyers explore manufacturers from different markets and enable manufacturers to reach potential buyers beyond their existing business networks. This creates opportunities to expand business connections across different regions.',
      tag: 'Multi-Hub Interoperability',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      num: '06',
      title: 'Transparency and Clear Communication',
      description: 'We believe that trust is essential for successful business relationships. We focus on clear communication between manufacturers and buyers, helping both sides understand product requirements, commercial discussions and agreed business terms.',
      tag: 'Complete Commercial Clarity',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      num: '07',
      title: 'Opportunities for Mutual Business Growth',
      description: 'Our role is not limited to making introductions. We aim to build connections that create value for both sides. By bringing manufacturers and buyers together, we support opportunities for new business, stronger partnerships and long-term growth in the textile industry.',
      tag: 'Enduring Generational Alliances',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-choose" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-white via-[#FAF8F5] to-white border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">

        {/* Section Header with Verbatim Document Content */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#f7e5d4] to-white text-[#f16701] text-xs font-bold uppercase tracking-widest border border-[#f8b47d]/50 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f16701] animate-pulse"></span>
            <span>The Agency Advantage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            Why Choose Savera Tex Solution LLP?
          </h2>

          <p className="text-base sm:text-lg font-bold text-[#f16701]">
            Three Decades of Experience. One Goal: Better Business Connections.
          </p>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            With experience in the textile market since 1995, <strong className="text-[#0F1318] font-bold">Savera Tex Solution LLP</strong> understands the importance of connecting the right manufacturers with the right buyers. As a textile commission agency, we work with manufacturers, retailers and wholesalers across India and international markets, helping them explore suitable business connections and new opportunities.
          </p>
        </div>

        {/* 7 Pillars Grid (Enhanced Card Backgrounds & Gradient Highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-white to-[#f7e5d4]/40 border border-[#f8b47d]/35 hover:border-[#f16701]/50 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between ${
                idx === 6 ? 'md:col-span-2 lg:col-span-3 lg:max-w-xl lg:mx-auto' : ''
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#f16701] to-[#f79a52] text-white flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-[#f16701]/40 font-mono">
                    {item.num}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#f16701]">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-[#0F1318]">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#fbd7b4]/40 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f16701]"></span>
                <span className="text-[11px] font-bold text-neutral-700">Verified Institutional Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
