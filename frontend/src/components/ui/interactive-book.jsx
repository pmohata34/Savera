import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RefreshCcw, X, BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';

export function InteractiveBook({
  coverImage,
  coverBadge = "Lookbook • Since 1995",
  coverTitle = "Product Range",
  coverSubtitle = "Textile Portfolios & Swatches",
  coverDescription = "Wholesale collections direct from India's premier manufacturing hubs.",
  bookAuthor = "Savera Tex Solution LLP",
  insideCoverBadge = "Wholesale Portfolios",
  insideCoverTitle = "Five Signature Textile Categories",
  insideCoverDescription = "Turn the pages to explore our comprehensive collections spanning sarees, salwar suits, lehengas, indo-western wear and commercial fabrics.",
  pages = [],
  className,
  width = 360,
  height = 490,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(-1);
  const [isHovering, setIsHovering] = useState(false);

  const widthNum = typeof width === 'number' ? width : 360;
  const heightNum = typeof height === 'number' ? height : 490;

  const BOOK_OPEN_DURATION = 1.2;
  const EASING = [0.25, 0, 0, 1];

  const maxPageIndex = pages.length - 2;

  const handleOpenBook = () => setIsOpen(true);

  const handleCloseBook = (e) => {
    e?.stopPropagation();
    setIsOpen(false);
    setCurrentPageIndex(-1);
  };

  const nextPage = (e) => {
    e?.stopPropagation();
    if (currentPageIndex < maxPageIndex) {
      setCurrentPageIndex((prev) => prev + 1);
    }
  };

  const prevPage = (e) => {
    e?.stopPropagation();
    if (currentPageIndex >= 0) {
      setCurrentPageIndex((prev) => prev - 1);
    }
  };

  const restartBook = (e) => {
    e?.stopPropagation();
    setCurrentPageIndex(-1);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
      if (e.key === 'Escape') handleCloseBook();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPageIndex, pages.length]);

  return (
    <div
      className={cn("relative flex flex-col items-center justify-center my-4 overflow-visible", className)}
      style={{
        perspective: '2000px',
        minHeight: heightNum + 80,
      }}
    >
      {/* 3D Book Container */}
      <motion.div
        className="relative"
        style={{
          width: widthNum,
          height: heightNum,
          transformStyle: 'preserve-3d',
        }}
        initial={{ x: 0 }}
        animate={{ x: isOpen ? widthNum / 2 : 0 }}
        transition={{ duration: BOOK_OPEN_DURATION, ease: EASING }}
      >
        {/* ── FRONT COVER ── */}
        <motion.div
          className="absolute inset-0 w-full h-full origin-left cursor-pointer select-none"
          initial={{ rotateY: 0, zIndex: 100 }}
          animate={{
            rotateY: isOpen ? -180 : (isHovering ? -15 : 0),
            zIndex: isOpen ? 1 : 100,
          }}
          transition={{
            rotateY: { duration: BOOK_OPEN_DURATION, ease: EASING },
            zIndex: { delay: isOpen ? BOOK_OPEN_DURATION * 0.6 : BOOK_OPEN_DURATION * 0.4 },
          }}
          style={{ transformStyle: 'preserve-3d' }}
          onClick={!isOpen ? handleOpenBook : undefined}
          onHoverStart={() => !isOpen && setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
        >
          {/* Front Face (Cover Art with Rich Luxury Artwork & 3D Hardcover depth) */}
          <div
            className={cn(
              "absolute inset-0 w-full h-full rounded-r-2xl rounded-l-md shadow-2xl overflow-hidden border-2 border-[#fbd7b4]/80",
              coverImage ? "bg-[#1e1005]" : "bg-gradient-to-br from-[#ff832b] via-[#f16701] to-[#bd4000] text-white p-6 sm:p-7 flex flex-col justify-between"
            )}
            style={{ transform: 'translateZ(20px)', backfaceVisibility: 'hidden' }}
          >
            {coverImage ? (
              <div className="relative w-full h-full select-none">
                <img
                  src={coverImage}
                  alt={coverTitle || "Product Portfolio Cover"}
                  className="w-full h-full object-cover object-center"
                />

                {/* Book Spine Shadow Left Edge for authentic 3D book crease depth */}
                <div className="absolute left-0 top-0 bottom-0 w-7 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none z-20" />
                <div className="absolute left-4 top-0 bottom-0 w-[1.5px] bg-white/35 z-20 pointer-events-none" />

                {/* Subtle luxury gloss sheen & rim border */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/20 rounded-r-2xl rounded-l-md pointer-events-none z-20" />
              </div>
            ) : (
              <>
                {/* Book Spine Shadow Left Edge */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/50 via-black/15 to-transparent pointer-events-none z-20" />
                <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/25 z-20" />

                {/* Ambient Lighting & Luxury Luminous Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-white/15 rounded-full blur-2xl pointer-events-none" />

                {/* Hardcover Debossed Luxury Borders */}
                <div className="absolute inset-3 rounded-xl border border-white/30 pointer-events-none" />
                <div className="absolute inset-4.5 rounded-lg border border-white/15 pointer-events-none" />

                {/* Top Foil Embellishment */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-white/25 backdrop-blur-md border border-white/40 shadow-xs text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFF8F0] to-[#fbd7b4]">
                    {coverBadge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-xs">
                    <BookOpen className="w-4 h-4 text-white drop-shadow-xs" />
                  </div>
                </div>

                {/* Central Seal & Crest with Real Official Logo & Light Gradient Typography */}
                <div className="relative z-10 my-auto text-center space-y-3 px-2">
                  
                  {/* Official Logo Medallion with Since 1995 Pill */}
                  <div className="relative inline-block mx-auto mb-1">
                    <div className="absolute -inset-1.5 bg-white/30 rounded-2xl blur-md" />
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-white p-2 shadow-xl border-2 border-white/90 flex items-center justify-center transform hover:scale-105 transition duration-300">
                      <img
                        src="/assets/logo_cropped.png"
                        alt="Savera Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-[#0F1318] text-[#fbd7b4] text-[8px] font-extrabold uppercase tracking-widest border border-[#f8b47d]/60 shadow-md whitespace-nowrap">
                      SINCE 1995
                    </div>
                  </div>

                  <div className="pt-2">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.28em] text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF9] via-[#fbd7b4] to-[#f8b47d] drop-shadow-xs">
                      {coverSubtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-playfair tracking-tight leading-tight mt-1 text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FFF7ED] to-[#FFE0C2] drop-shadow-md">
                      {coverTitle}
                    </h3>
                  </div>

                  <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-transparent via-white/70 to-transparent rounded-full" />
                  
                  <p className="text-xs sm:text-[13px] text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF9] via-white to-[#FFF0DE] leading-relaxed font-normal max-w-xs mx-auto drop-shadow-xs">
                    {coverDescription}
                  </p>
                </div>

                {/* Bottom Authority Line with Crisp White Brand Capsule */}
                <div className="relative z-10 pt-3 border-t border-white/25 flex items-center justify-between text-[11px]">
                  <div className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-white/60 shadow-sm flex items-center gap-1.5">
                    {bookAuthor}
                  </div>
                  <span className="text-white/90 font-mono text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-black/25 backdrop-blur-xs border border-white/20">
                    VOL. 2026
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Back Face (Inside Front Cover) -> Displays Photo Plate for Page 0 (Sarees) */}
          <div
            className="absolute inset-0 w-full h-full rounded-l-2xl rounded-r-md overflow-hidden border-r border-[#fbd7b4]/60 shadow-xl flex flex-col justify-end bg-[#1e1005] cursor-pointer"
            style={{
              transform: 'rotateY(180deg) translateZ(1px)',
              backfaceVisibility: 'hidden',
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleCloseBook(e);
            }}
          >
            {pages[0]?.image ? (
              <div className="relative w-full h-full overflow-hidden flex flex-col justify-end p-6 sm:p-7 text-white">
                <img
                  src={pages[0].image}
                  alt={pages[0].title || "Sarees"}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1005]/85 via-[#1e1005]/20 to-transparent" />

                {/* Only Category Name at Bottom */}
                <div className="relative z-10">
                  <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
                    {pages[0].title.replace(/^\d+[\.\s]+/, '')}
                  </h4>
                </div>
              </div>
            ) : (
              <div className="p-6 flex-1 flex flex-col justify-center items-center text-center space-y-3 bg-[#FAF8F5]">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/40">
                  {insideCoverBadge}
                </span>
                <h4 className="text-xl font-black text-[#0F1318]">
                  {insideCoverTitle}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed max-w-xs">
                  {insideCoverDescription}
                </p>
              </div>
            )}

            {/* Right Gutter Crease Shadow */}
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/25 via-black/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* ── PAGES STACK ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none" style={{ transformStyle: 'preserve-3d' }}>
          {pages.map((page, index) => {
            const isFlipped = index <= currentPageIndex;

            return (
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full origin-left rounded-r-2xl rounded-l-md shadow-md border border-[#f8b47d]/35 select-none pointer-events-auto"
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ rotateY: 0, zIndex: (pages.length - index) * 10 }}
                animate={{
                  rotateY: isFlipped ? -180 : 0,
                  zIndex: isFlipped ? (index + 2) * 10 : (pages.length - index) * 10,
                }}
                transition={{
                  rotateY: { duration: 0.7, ease: [0.645, 0.045, 0.355, 1] },
                  zIndex: { delay: isFlipped ? 0.35 : 0 },
                }}
              >
                {/* Front Face of Page (Right Spread) */}
                <div
                  className={cn(
                    "absolute inset-0 w-full h-full p-6 sm:p-7 flex flex-col justify-between bg-white rounded-r-2xl select-none",
                    index >= pages.length - 1 ? "cursor-default" : "cursor-pointer hover:bg-[#FFFDFB] transition-colors"
                  )}
                  style={{
                    transform: `translateZ(${(pages.length - index) * 1 + 2}px)`,
                    backfaceVisibility: 'hidden',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (index < pages.length - 1) {
                      nextPage();
                    }
                  }}
                >
                  {/* Left Gutter Crease Shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/10 via-black/5 to-transparent pointer-events-none" />

                  {/* Page Body: Fills the entire page generously with big typography & wholesale profile */}
                  <div className="flex-1 flex flex-col justify-between space-y-4 py-2">
                    
                    {/* Big Title & Tagline */}
                    <div className="space-y-1.5">
                      <h4 className="text-2xl sm:text-3xl font-extrabold font-playfair text-[#0F1318] leading-tight tracking-tight">
                        {page.title.replace(/^\d+[\.\s]+/, '')}
                      </h4>
                      {page.tagline && (
                        <p className="text-xs sm:text-sm font-bold text-[#f16701]">
                          {page.tagline}
                        </p>
                      )}
                    </div>

                    {/* Rich Content Paragraph */}
                    <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed font-normal">
                      {page.content}
                    </p>

                    {/* OUR COLLECTION INCLUDES */}
                    {page.includes && page.includes.length > 0 && (
                      <div className="pt-3 border-t border-[#fbd7b4]/40 space-y-2">
                        <span className="block text-[11px] font-black text-[#0F1318] uppercase tracking-wider">
                          OUR COLLECTION INCLUDES
                        </span>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-2">
                          {page.includes.map((item, iIdx) => (
                            <div key={iIdx} className="flex items-start gap-1.5 text-xs text-neutral-800 font-medium leading-snug">
                              <span className="text-[#f16701] font-bold text-sm leading-none shrink-0">•</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Wholesale Commercial Sourcing Box (Fallback) */}
                    {page.specs && page.specs.length > 0 && (
                      <div className="p-3 rounded-xl bg-gradient-to-r from-[#FAF8F5] via-[#FFF8F0] to-[#FAF8F5] border border-[#f8b47d]/40 space-y-1.5 shadow-2xs">
                        <span className="block font-bold text-[#0F1318] uppercase tracking-wider text-[10px]">
                          Commercial Sourcing Profile:
                        </span>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-700 font-medium">
                          {page.specs.map((s, sIdx) => (
                            <span key={sIdx} className="inline-flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f16701]"></span>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Wholesale Varieties Chips (Fallback) */}
                    {page.tags && page.tags.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="block text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                          Key Product Varieties:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {page.tags.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 rounded-lg text-xs font-bold bg-[#FAF8F5] text-neutral-800 border border-[#fbd7b4]/80 shadow-2xs hover:border-[#f16701] transition"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Back Face of Page (Left Spread: Rich Image matching the next active right page) */}
                <div
                  className="absolute inset-0 w-full h-full rounded-l-2xl border-r border-[#fbd7b4]/40 cursor-pointer overflow-hidden flex flex-col justify-end bg-[#1e1005]"
                  style={{
                    transform: `rotateY(180deg) translateZ(${(index + 1) * 2 + 2}px)`,
                    backfaceVisibility: 'hidden',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPage();
                  }}
                >
                  {(() => {
                    const spreadProduct = pages[index + 1] || page;
                    const isLastPage = index === pages.length - 1;

                    return spreadProduct.image ? (
                      <div className="relative w-full h-full overflow-hidden flex flex-col justify-end p-6 sm:p-7 text-white">
                        <img
                          src={spreadProduct.image}
                          alt={spreadProduct.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1005]/85 via-[#1e1005]/20 to-transparent" />

                        {/* Only Category Name at Bottom */}
                        <div className="relative z-10">
                          <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
                            {spreadProduct.title.replace(/^\d+[\.\s]+/, '')}
                          </h4>
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 flex flex-col justify-between h-full bg-[#FAF8F5]">
                        <div className="flex items-center justify-between border-b border-[#fbd7b4]/50 pb-2.5">
                          <span className="text-xs font-mono font-bold text-neutral-400">
                            Page 0{index + 2}
                          </span>
                          <span className="text-[10px] font-bold text-[#f16701] uppercase tracking-wider">
                            Portfolio Note
                          </span>
                        </div>
                        <div className="flex-1 py-4 flex flex-col justify-center">
                          {spreadProduct.backContent || spreadProduct.content}
                        </div>
                        <div className="pt-2.5 border-t border-[#fbd7b4]/30 flex items-center justify-between text-[11px] text-neutral-500">
                          <span className="text-[#f16701] font-bold">←</span>
                          <span>Previous Page</span>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Right Gutter Crease Shadow */}
                  <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/25 via-black/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            );
          })}

          {/* ── REAR HARDBACK BACKING CASING (No extra pages or text) ── */}
          <div
            className="absolute inset-0 w-full h-full bg-[#FAF8F5] rounded-r-2xl rounded-l-md shadow-xl border border-[#f8b47d]/40 pointer-events-none"
            style={{ transform: 'translateZ(0px)', zIndex: 1 }}
          />
        </div>
      </motion.div>

      {/* ── EXTERNAL NAVIGATION CONTROLS (Always accessible when open) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="mt-8 z-20 flex items-center gap-3 sm:gap-4 bg-white/95 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#f8b47d]/50 shadow-lg backdrop-blur-md"
          >
            {/* Prev Button */}
            <button
              onClick={prevPage}
              disabled={currentPageIndex < 0}
              className="p-2 rounded-full hover:bg-[#f7e5d4] text-neutral-700 hover:text-[#f16701] disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
              title="Previous Page"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Page Counter */}
            <div className="text-xs font-bold text-neutral-700 min-w-[150px] sm:min-w-[170px] text-center select-none">
              {currentPageIndex === -1 ? (
                <span>
                  <span className="text-[#f16701] font-black">1</span> of {pages.length} • {pages[0]?.title?.replace(/^\d+[\.\s]+/, '') || "Sarees"}
                </span>
              ) : (
                <span>
                  <span className="text-[#f16701] font-black">{Math.min(currentPageIndex + 2, pages.length)}</span> of {pages.length} • {pages[Math.min(currentPageIndex + 1, pages.length - 1)]?.title?.replace(/^\d+[\.\s]+/, '')}
                </span>
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={nextPage}
              disabled={currentPageIndex >= maxPageIndex}
              className="p-2 rounded-full hover:bg-[#f7e5d4] text-neutral-700 hover:text-[#f16701] disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
              title="Next Page"
              aria-label="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Read from Beginning / Reset */}
            <button
              onClick={restartBook}
              disabled={currentPageIndex === -1}
              className="p-2 rounded-full hover:bg-[#f7e5d4] text-neutral-700 hover:text-[#f16701] disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
              title="Read from Beginning"
              aria-label="Read from Beginning"
            >
              <RefreshCcw className="w-4 h-4" />
            </button>

            <div className="w-[1px] h-5 bg-[#fbd7b4]" />

            {/* Close Button */}
            <button
              onClick={handleCloseBook}
              className="px-3 sm:px-3.5 py-1.5 rounded-full bg-[#f7e5d4] hover:bg-[#f8b47d] text-[#f16701] text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close Book</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CLICK TO OPEN HINT (When Closed) ── */}
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={handleOpenBook}
          className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#f16701] to-[#f48129] text-white text-xs font-extrabold uppercase tracking-widest shadow-md hover:shadow-xl transition transform hover:scale-105 cursor-pointer glow-orange"
        >
          <BookOpen className="w-4 h-4" />
          <span>Click to Open Textile Lookbook</span>
        </motion.button>
      )}
    </div>
  );
}

export default InteractiveBook;
