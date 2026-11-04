import React from 'react';

export default function MissionVision() {
  return (
    <section id="mission-vision" className="py-14 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-white via-[#FAF8F5] to-white border-b border-[#fbd7b4]/40 relative overflow-hidden">

      {/* Atmospheric Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#f7e5d4] to-white text-[#f16701] text-xs font-bold uppercase tracking-widest border border-[#f8b47d]/50 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f16701] animate-ping"></span>
            <span>Strategic Direction</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            Our Mission &amp; Vision
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Guiding principles that steer our commission agency across regional and international textile markets.
          </p>
        </div>

        {/* 2-Column Split: Mission vs Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-white to-[#f7e5d4]/40 border border-[#f8b47d]/40 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/40">
                  Purpose in Action
                </span>
                <span className="text-2xl">🎯</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#0F1318]">
                Our Mission
              </h3>

              <div className="space-y-3 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                <p>
                  Our mission is to strengthen connections across the textile industry by bringing manufacturers, retailers and wholesalers together. We aim to help manufacturers reach genuine buyers and explore new business opportunities, while enabling retailers and wholesalers to connect with suitable manufacturers and find products that match their business requirements.
                </p>
                <p>
                  Through our experience since 1995, industry knowledge and business network, we strive to simplify the process of finding the right business connections, encourage transparent dealings and build long-term relationships. We are committed to creating value for both manufacturers and buyers through reliable support and opportunities for mutual growth.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#fbd7b4]/40 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f16701]"></span>
              <span className="text-xs font-bold text-neutral-800">Mutual Value Creation • Since 1995</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-white to-[#f7e5d4]/40 border border-[#f8b47d]/40 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/40">
                  Long-Term Horizon
                </span>
                <span className="text-2xl">🔭</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#0F1318]">
                Our Vision
              </h3>

              <div className="space-y-3 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                <p>
                  Our vision is to become a trusted name in the textile industry by building a strong and reliable network of manufacturers, retailers and wholesalers across India and international markets.
                </p>
                <p>
                  We aim to create an environment where manufacturers can expand their reach, connect with genuine buyers and develop lasting business partnerships, while retailers and wholesalers can access suitable manufacturing connections and explore new market opportunities.
                </p>
                <p className="text-xs sm:text-sm text-neutral-600">
                  As the textile industry evolves, we aspire to expand our network, adapt to changing business needs and strengthen our role in connecting the textile trade. We want Savera Tex Solution LLP to be recognised for its experience, market understanding, transparent business practices and commitment to building relationships that create long-term value for everyone.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#fbd7b4]/40 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f16701]"></span>
              <span className="text-xs font-bold text-neutral-800">Pan-India &amp; Global Trade Vision</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

