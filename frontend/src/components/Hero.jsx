import React, { useState, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-22 pb-6 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FAF8F5] via-[#FFF6EE] to-[#FDF0E5] border-b border-[#fbd7b4]/40 min-h-[calc(100vh-4.5rem)] flex flex-col justify-between overflow-hidden"
    >
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#f7e5d4] via-[#f8b47d]/35 to-[#f16701]/20 rounded-full blur-[110px] animate-float-slow"></div>
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-gradient-to-bl from-[#fbd7b4] via-[#f79a52]/30 to-[#f26e12]/20 rounded-full blur-[120px] animate-float-reverse"></div>
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-tr from-[#f8b47d]/25 to-[#f16701]/15 rounded-full blur-[100px] animate-pulse-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-between space-y-4 lg:space-y-6">

        {/* Top 2-Column Split: Editorial Text vs Showcase Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center flex-1">

          {/* Left Column: Verbatim About Us Copy */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">

            {/* Established Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 border border-[#f8b47d]/60 text-[#f16701] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#f16701] animate-ping"></span>
              <span className="tracking-widest uppercase">ESTABLISHED 1995 • ABOUT US</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-5xl font-extrabold text-[#0F1318] leading-[1.12] tracking-tight">
              Connecting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52]">
                Textile Businesses
              </span>
              ,<br />
              Building Relationships.
            </h1>

            {/* Verbatim Document Paragraphs (Tailored for 1-Screen Viewport) */}
            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal max-w-xl">
              <p>
                <strong className="text-[#f16701] font-bold">Savera Tex Solution LLP</strong> is a textile commission agency that connects manufacturers with retailers and wholesalers across India and international markets. We work with both sides of the textile trade, helping manufacturers reach new buyers and enabling retailers and wholesalers to explore suitable suppliers for their business requirements.
              </p>

              <p className="text-neutral-600">
                With connections across major textile hubs in India, we help manufacturers expand their business reach and create new trade opportunities. At the same time, we help retailers and wholesalers connect with suitable manufacturers and explore collections that match their market needs.
              </p>

              <div className="p-3 sm:p-3.5 rounded-xl bg-white/80 border border-[#f8b47d]/40 shadow-2xs">
                <p className="text-[11px] sm:text-xs font-semibold text-neutral-800 italic">
                  "At Savera Tex Solution LLP, we believe that successful trade is built on trust, clear communication and strong business relationships. We connect the right businesses to create opportunities for mutual growth."
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: About Us Video Adjusted in Framework */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#f16701]/25 via-[#f8b47d]/20 to-transparent rounded-3xl blur-xl opacity-70"></div>

            <div className="relative bg-white p-2.5 sm:p-3 rounded-2xl border border-[#fbd7b4]/60 shadow-lg w-full max-w-md group">
              <div className="h-[230px] sm:h-[270px] lg:h-[310px] xl:h-[340px] w-full rounded-xl overflow-hidden relative shadow-inner bg-[#FAF8F5]">
                <video
                  ref={videoRef}
                  src="/assets/about_us.mp4"
                  poster="/photos/clean_hero.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
                />

                {/* Subtle Header Badge */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#f16701] backdrop-blur-md border border-[#f8b47d]/60 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f16701] animate-ping"></span>
                    <span>About Us Video</span>
                  </span>
                </div>

                {/* Interactive Audio Toggle Control */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-3 right-3 z-10 p-2 rounded-full bg-white/90 text-[#f16701] hover:bg-[#f16701] hover:text-white backdrop-blur-md border border-[#f8b47d]/60 shadow-md transition transform hover:scale-110 cursor-pointer"
                  title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  aria-label="Toggle Audio"
                >
                  {isMuted ? (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Integrated 5-Card Trust Metrics Bar (Tailored for Asus VivoBook 15) */}
        <div className="pt-3 border-t border-[#fbd7b4]/50">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">

            <div className="p-2.5 sm:p-3 rounded-xl bg-white/90 border border-[#f8b47d]/30 shadow-2xs text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f16701] leading-none">500+</div>
              <p className="text-[11px] font-bold uppercase text-neutral-900 mt-1">Active Cities</p>
              <p className="text-[10px] text-neutral-500 font-medium">Pan-India &amp; Overseas</p>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-white/90 border border-[#f8b47d]/30 shadow-2xs text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f16701] leading-none">1,200+</div>
              <p className="text-[11px] font-bold uppercase text-neutral-900 mt-1">Retailers &amp; Wholesalers</p>
              <p className="text-[10px] text-neutral-500 font-medium">Connected to Direct Looms</p>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-white/90 border border-[#f8b47d]/30 shadow-2xs text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f16701] leading-none">700+</div>
              <p className="text-[11px] font-bold uppercase text-neutral-900 mt-1">Manufacturing Mills</p>
              <p className="text-[10px] text-neutral-500 font-medium">Across 6 Production Hubs</p>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-white/90 border border-[#f8b47d]/30 shadow-2xs text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f16701] leading-none">25+</div>
              <p className="text-[11px] font-bold uppercase text-neutral-900 mt-1">Counters Launched</p>
              <p className="text-[10px] text-neutral-500 font-medium">Turnkey Store Inceptions</p>
            </div>

            <div className="p-2.5 sm:p-3 rounded-xl bg-white/90 border border-[#f8b47d]/30 shadow-2xs text-center md:text-left col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#f16701] leading-none">30+</div>
              <p className="text-[11px] font-bold uppercase text-neutral-900 mt-1">Years of Trust</p>
              <p className="text-[10px] text-neutral-500 font-medium">Operating Since 1995</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
