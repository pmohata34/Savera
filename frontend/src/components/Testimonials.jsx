import React from 'react';

const testimonials = [
  {
    name: 'Ujjwal Sewani',
    badge: 'Local Guide • 18 reviews • 5 photos',
    time: 'a year ago',
    rating: 5,
    avatarBg: 'bg-[#1a73e8]',
    avatarText: 'U',
    tag: '25+ Years Business Partner',
    featured: true,
    content: `We have been working with them for over 25 years, and the experience has always been exceptional. They are extremely trustworthy, professional, and have deep knowledge of the textile market in Kolkata. Whether it's sarees, suits, or any specific requirement, they always takes us to the right suppliers and ensures we get the best quality and variety at the right price.

Special mention to Vineet Bhaiya. What makes him stand out is his dedication and personal touch. He treats our business like his own and goes above and beyond to make sure we are satisfied. In an industry where reliability is hard to find, Vineet Bhaiya has consistently been a dependable partner for us for more than two decades.

Highly recommended to anyone looking for a genuine and experienced textile marketing agent in Kolkata.`
  },
  {
    name: 'Siddharth Gupta',
    badge: 'Local Guide • 18 reviews',
    time: '9 months ago',
    rating: 5,
    avatarBg: 'bg-[#2e7d32]',
    avatarText: 'S',
    tag: 'New Startup Founder',
    featured: false,
    content: `We are a new startup. Vineet Ji (owner of savera group) understood and guided us like a father. His experience speaks. We met amazing manufacturers. Apart from business also, he guided us with the city tour, the food, hotels everything.`
  },
  {
    name: 'Vijesh Vidyadhar',
    badge: '6 reviews',
    time: 'a year ago',
    rating: 5,
    avatarBg: 'bg-[#0288d1]',
    avatarText: 'V',
    tag: '10+ Years Partnership',
    featured: false,
    content: `We have been doing business with Savera Marketing for over 10 years now. Vineet Bhai has been a great support for us, his knowledge of the Industry is exemplary! Definitely recommend!!`
  },
  {
    name: 'Srinidi',
    badge: '2 reviews',
    time: '2 months ago',
    rating: 5,
    avatarBg: 'bg-[#7b1fa2]',
    avatarText: 'S',
    tag: 'Long-Term Association',
    featured: false,
    content: `Great experience working with Vineeth ji. . Looking forward to working together again. All the best to his son Pranay as he carries forward his father's legacy!!`
  },
  {
    name: 'Sandhya Tayal',
    badge: '1 review',
    time: 'a year ago',
    rating: 5,
    avatarBg: 'bg-[#e65100]',
    avatarText: 'S',
    tag: 'Kolkata Sourcing Client',
    featured: false,
    content: `Always cooperative ..knowledgeable..and experienced and main thing is has a v well connection with renowned manufacturers of Kolkata..thank savera textiles for serving best 👍`
  }
];

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function StarRating({ count = 5 }) {
  return (
    <div className="flex items-center gap-1 text-[#f59e0b]">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-b border-[#fbd7b4]/40 relative overflow-hidden">
      
      {/* Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-gradient-to-bl from-[#f7e5d4] to-[#f8b47d]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 -left-24 w-96 h-96 bg-gradient-to-tr from-[#fbd7b4] to-[#f16701]/15 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF3E8] border border-[#f8b47d]/40 text-[#f16701] text-[11px] font-bold uppercase tracking-wider">
            <GoogleIcon />
            <span>Verified Client Reviews • Google Business</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1318] tracking-tight">
            Trusted by <span className="text-[#f16701]">Generations</span> of Textile Traders
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Real feedback from showroom owners, wholesalers, and startup founders who have partnered with Vineet Ji and Savera Tex Solution LLP across India.
          </p>
        </div>

        {/* Aggregate Credibility Ribbon */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-white via-[#FFF9F3] to-white rounded-2xl p-4 sm:p-5 border border-[#f8b47d]/40 shadow-xs flex flex-wrap items-center justify-around gap-4 text-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-black text-[#0F1318]">5.0</span>
            <div className="text-left">
              <StarRating count={5} />
              <span className="text-[11px] font-semibold text-neutral-500">Perfect 5-Star Rating</span>
            </div>
          </div>
          <div className="h-8 w-px bg-[#fbd7b4]/50 hidden sm:block"></div>
          <div>
            <div className="text-base sm:text-lg font-extrabold text-[#f16701]">25+ Years</div>
            <div className="text-[11px] text-neutral-600 font-medium">Continuous Client Associations</div>
          </div>
          <div className="h-8 w-px bg-[#fbd7b4]/50 hidden sm:block"></div>
          <div>
            <div className="text-base sm:text-lg font-extrabold text-[#0F1318]">100% Genuine</div>
            <div className="text-[11px] text-neutral-600 font-medium">Direct Loom & Market Guidance</div>
          </div>
        </div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Featured Anchor Card: Ujjwal Sewani (25+ Years) */}
          <div className="md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-[#f8b47d]/40 shadow-md hover:shadow-xl hover:border-[#f16701]/60 transition-all duration-300 flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full bg-[#1a73e8] text-white font-extrabold flex items-center justify-center text-lg shadow-sm">
                    U
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-base text-[#0F1318]">Ujjwal Sewani</h4>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#E8F0FE] text-[#1a73e8]">
                        Local Guide
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500">18 reviews • 5 photos • a year ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <StarRating count={5} />
                  <GoogleIcon />
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#FFF3E8] text-[#f16701] border border-[#f8b47d]/40">
                ⭐ 25+ Years Working Relationship
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed whitespace-pre-line font-normal">
                {testimonials[0].content}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span className="inline-flex items-center gap-1 text-[#f16701] font-semibold">
                <span>Verified Google Review</span>
              </span>
              <span className="inline-flex items-center gap-1 font-medium text-neutral-400">
                ❤️ 1 like
              </span>
            </div>
          </div>

          {/* Card 2: Siddharth Gupta (New Startup) */}
          <div className="bg-white rounded-3xl p-6 border border-[#f8b47d]/40 shadow-md hover:shadow-xl hover:border-[#f16701]/60 transition-all duration-300 flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#2e7d32] text-white font-extrabold flex items-center justify-center text-base shadow-sm">
                    S
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-extrabold text-sm text-[#0F1318]">Siddharth Gupta</h4>
                    </div>
                    <p className="text-[11px] text-neutral-500">Local Guide • 18 reviews</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>

              <div className="flex items-center justify-between">
                <StarRating count={5} />
                <span className="text-[11px] text-neutral-400 font-medium">9 months ago</span>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E8F5E9] text-[#2e7d32]">
                New Startup Mentorship
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                "{testimonials[1].content}"
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span className="text-[11px] text-neutral-400">Verified Review</span>
              <span className="inline-flex items-center gap-1 text-rose-500 font-medium">
                ❤️ 1
              </span>
            </div>
          </div>

          {/* Card 3: Vijesh Vidyadhar (10+ Years) */}
          <div className="bg-white rounded-3xl p-6 border border-[#f8b47d]/40 shadow-md hover:shadow-xl hover:border-[#f16701]/60 transition-all duration-300 flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#0288d1] text-white font-extrabold flex items-center justify-center text-base shadow-sm">
                    V
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#0F1318]">Vijesh Vidyadhar</h4>
                    <p className="text-[11px] text-neutral-500">6 reviews • a year ago</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>

              <div className="flex items-center justify-between">
                <StarRating count={5} />
                <span className="text-[11px] text-neutral-400 font-medium">Over 10 Years Client</span>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E1F5FE] text-[#0288d1]">
                10+ Years Business Partner
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                "{testimonials[2].content}"
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span className="text-[11px] text-neutral-400">Verified Review</span>
              <span className="text-[11px] font-bold text-[#f16701]">Exemplary Knowledge</span>
            </div>
          </div>

          {/* Card 4: Srinidi (Vineeth ji & Pranay legacy) */}
          <div className="bg-white rounded-3xl p-6 border border-[#f8b47d]/40 shadow-md hover:shadow-xl hover:border-[#f16701]/60 transition-all duration-300 flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#7b1fa2] text-white font-extrabold flex items-center justify-center text-base shadow-sm">
                    S
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#0F1318]">Srinidi</h4>
                    <p className="text-[11px] text-neutral-500">2 reviews • 2 months ago</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>

              <div className="flex items-center justify-between">
                <StarRating count={5} />
                <span className="text-[11px] text-neutral-400 font-medium">Recent Review</span>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F3E5F5] text-[#7b1fa2]">
                Generational Legacy
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                "{testimonials[3].content}"
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span className="text-[11px] text-neutral-400">Verified Review</span>
              <span className="inline-flex items-center gap-1 text-rose-500 font-medium">
                ❤️ 1
              </span>
            </div>
          </div>

          {/* Card 5: Sandhya Tayal (Renowned manufacturers connection) */}
          <div className="bg-white rounded-3xl p-6 border border-[#f8b47d]/40 shadow-md hover:shadow-xl hover:border-[#f16701]/60 transition-all duration-300 flex flex-col justify-between relative group">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[#e65100] text-white font-extrabold flex items-center justify-center text-base shadow-sm">
                    S
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-[#0F1318]">Sandhya Tayal</h4>
                    <p className="text-[11px] text-neutral-500">1 review • a year ago</p>
                  </div>
                </div>
                <GoogleIcon />
              </div>

              <div className="flex items-center justify-between">
                <StarRating count={5} />
                <span className="text-[11px] text-neutral-400 font-medium">Kolkata Sourcing</span>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FFF3E0] text-[#e65100]">
                Manufacturer Connections
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                "{testimonials[4].content}"
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
              <span className="text-[11px] text-neutral-400">Verified Review</span>
              <span className="text-[11px] font-bold text-[#f16701]">Best Sourcing 👍</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
