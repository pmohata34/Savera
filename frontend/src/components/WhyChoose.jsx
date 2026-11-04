import React from 'react';

export default function WhyChoose() {
  const pillars = [
    {
      title: 'Textile Market Experience Since 1995',
      description: 'Our journey in the textile market began in 1995. Over the years, we have developed a practical understanding of the industry, its markets, business practices and the requirements of different businesses. This experience helps us guide both manufacturers and buyers in exploring suitable business opportunities.'
    },
    {
      title: 'Connecting Manufacturers with Genuine Buyers',
      description: 'We help manufacturers connect with genuine retailers and wholesalers who have relevant product requirements. Our focus is on developing reliable business connections that can grow into long-term professional relationships.'
    },
    {
      title: 'Saving Time Through the Right Connections',
      description: 'Finding suitable manufacturers or genuine buyers can take considerable time and effort. Through our established business network, we help both sides explore relevant connections more efficiently, reducing the need for independent searching.'
    },
    {
      title: 'Support for New and Growing Businesses',
      description: 'Starting a new textile shop or expanding an existing business requires the right product connections and market understanding. With our experience since 1995, we aim to assist new retailers and growing businesses in exploring suitable manufacturers, while also helping manufacturers connect with new business opportunities.'
    },
    {
      title: 'Access to Multiple Textile Markets',
      description: 'With connections across major textile hubs, we help buyers explore manufacturers from different markets and enable manufacturers to reach potential buyers beyond their existing business networks. This creates opportunities to expand business connections across different regions.'
    },
    {
      title: 'Transparency and Clear Communication',
      description: 'We believe that trust is essential for successful business relationships. We focus on clear communication between manufacturers and buyers, helping both sides understand product requirements, commercial discussions and agreed business terms.'
    },
    {
      title: 'Opportunities for Mutual Business Growth',
      description: 'Our role is not limited to making introductions. We aim to build connections that create value for both sides. By bringing manufacturers and buyers together, we support opportunities for new business, stronger partnerships and long-term growth in the textile industry.'
    }
  ];

  return (
    <section id="why-choose" className="py-14 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FDF0E5] via-[#FAF8F5] to-white border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#f16701] text-[11px] font-bold uppercase tracking-widest border border-[#f8b47d]/50 shadow-2xs">
            <span>What Sets Us Apart</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1318] tracking-tight">
            Why Choose Savera Tex Solution LLP?
          </h2>

          <p className="text-sm sm:text-base font-bold text-[#f16701]">
            Three Decades of Experience. One Goal: Better Business Connections.
          </p>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            With experience in the textile market since 1995, <strong>Savera Tex Solution LLP</strong> understands the importance of connecting the right manufacturers with the right buyers. As a textile commission agency, we work with manufacturers, retailers and wholesalers across India and international markets, helping them explore suitable business connections and new opportunities.
          </p>
        </div>

        {/* 7 Clean Cards Grid (Zero icons, zero 01 numbers, zero institutional tags) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded-2xl bg-white border border-[#f8b47d]/35 hover:border-[#f16701]/50 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 space-y-2.5 ${
                idx === 6 ? 'md:col-span-2 lg:col-span-3 lg:max-w-xl lg:mx-auto w-full' : ''
              }`}
            >
              <h3 className="text-base sm:text-lg font-bold text-[#0F1318]">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
