import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, RefreshCcw, X, BookOpen } from 'lucide-react';
import { cn } from '../../lib/utils';

export function InteractiveBook({
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

  const handleOpenBook = () => setIsOpen(true);

  const handleCloseBook = (e) => {
    e?.stopPropagation();
    setIsOpen(false);
    setCurrentPageIndex(-1);
  };

  const nextPage = (e) => {
    e?.stopPropagation();
    if (currentPageIndex < pages.length - 1) {
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
          {/* Front Face (Cover Art with Rich Orange Gradient) */}
          <div
            className="absolute inset-0 w-full h-full rounded-r-2xl rounded-l-md shadow-2xl overflow-hidden border border-[#f8b47d]/60 bg-gradient-to-br from-[#f16701] via-[#f48129] to-[#f8b47d] text-white p-6 sm:p-7 flex flex-col justify-between"
            style={{ transform: 'translateZ(20px)', backfaceVisibility: 'hidden' }}
          >
            {/* Book Spine Shadow Left Edge */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/20" />

            {/* Top Foil Embellishment */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xs">
                {coverBadge}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Central Seal & Crest */}
            <div className="relative z-10 my-auto text-center space-y-3 px-2">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 p-2 shadow-inner flex items-center justify-center">
                <img src="/assets/logo_cropped.png" alt="Savera" className="w-full h-full object-contain filter brightness-0 invert" />
              </div>

              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-[#fbd7b4]">
                  {coverSubtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mt-1">
                  {coverTitle}
                </h3>
              </div>

              <div className="w-12 h-0.5 mx-auto bg-white/40 rounded-full" />
              <p className="text-xs text-white/90 leading-relaxed font-normal max-w-xs mx-auto">
                {coverDescription}
              </p>
            </div>

            {/* Bottom Authority Line */}
            <div className="relative z-10 pt-4 border-t border-white/25 flex items-center justify-between text-[11px]">
              <span className="font-bold tracking-wider uppercase text-white/90">{bookAuthor}</span>
              <span className="text-white/80 font-mono text-[10px]">VOL. 2026</span>
            </div>
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
                    {pages[0].title}
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
                  className="absolute inset-0 w-full h-full p-5 sm:p-6 flex flex-col justify-between bg-white rounded-r-2xl cursor-pointer hover:bg-[#FFFDFB] transition-colors"
                  style={{
                    transform: `translateZ(${(pages.length - index) * 1 + 2}px)`,
                    backfaceVisibility: 'hidden',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPage();
                  }}
                >
                  {/* Left Gutter Crease Shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/10 via-black/5 to-transparent pointer-events-none" />

                  {/* Header: Category Badge + Page Number */}
                  <div className="flex items-center justify-between border-b border-[#fbd7b4]/50 pb-2.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#f16701] bg-[#f7e5d4] px-2.5 py-0.5 rounded-full border border-[#f8b47d]/40">
                      {page.stageTag || `Category 0${index + 1}`}
                    </span>
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      Plate 0{page.pageNumber * 2 - 1}
                    </span>
                  </div>

                  {/* Page Body: Title, Tagline, Description, Chips */}
                  <div className="flex-1 py-3 flex flex-col justify-center space-y-2.5">
                    <div>
                      <h4 className="text-lg sm:text-xl font-black text-[#0F1318] leading-tight">
                        {page.title}
                      </h4>
                      {page.tagline && (
                        <p className="text-xs font-bold text-[#f16701] mt-0.5">
                          {page.tagline}
                        </p>
                      )}
                    </div>

                    <p className="text-[11px] sm:text-xs text-neutral-600 leading-relaxed font-normal">
                      {page.content}
                    </p>

                    {/* Tags / Specs Chips */}
                    {page.tags && page.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {page.tags.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-[#FAF8F5] text-neutral-700 border border-[#fbd7b4]/60"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Footer Hint */}
                  <div className="pt-2.5 border-t border-[#fbd7b4]/30 flex items-center justify-between text-[11px] text-neutral-500">
                    <span>Turn Page</span>
                    <span className="text-[#f16701] font-bold">→</span>
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
                            {isLastPage ? "Composite Loom Weaving" : spreadProduct.title}
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

          {/* ── BACK COVER (Static Inside) ── */}
          <div
            className="absolute inset-0 w-full h-full bg-[#FAF8F5] rounded-r-2xl rounded-l-md shadow-xl border border-[#f8b47d]/40 flex flex-col justify-between p-7 text-center pointer-events-auto"
            style={{ transform: 'translateZ(0px)', zIndex: 1 }}
          >
            <div className="flex-1 flex flex-col items-center justify-center space-y-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[#f7e5d4] text-[#f16701] border border-[#f8b47d]/40">
                End of Lookbook
              </span>
              <h4 className="text-xl font-black text-[#0F1318]">
                Custom Loom Orders &amp; Weaving
              </h4>
              <p className="text-xs text-neutral-600 max-w-xs leading-relaxed">
                Need custom yarn specifications, jacquard motifs, or special loom runs? Our 700+ partner mills accommodate commercial contracts.
              </p>
              <button
                type="button"
                onClick={restartBook}
                className="mt-3 relative z-30 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#f16701] to-[#f48129] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:opacity-95 transition transform hover:scale-105 cursor-pointer pointer-events-auto"
              >
                <RefreshCcw className="w-3.5 h-3.5" />
                <span>Read From Beginning</span>
              </button>
            </div>

            <p className="text-[10px] text-neutral-400 font-mono">
              Savera Tex Solution LLP • Wholesale Sourcing Platform
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── EXTERNAL NAVIGATION CONTROLS (Always accessible when open) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="mt-8 z-20 flex items-center gap-4 bg-white/95 px-5 py-2.5 rounded-full border border-[#f8b47d]/50 shadow-lg backdrop-blur-md"
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
            <div className="text-xs font-bold text-neutral-700 min-w-[150px] text-center">
              {currentPageIndex === -1 ? (
                <span>
                  Category <span className="text-[#f16701] font-black">1</span> of {pages.length} • {pages[0]?.title || "Sarees"}
                </span>
              ) : currentPageIndex >= pages.length - 1 ? (
                <span className="text-[#f16701]">Lookbook End • Mill Orders</span>
              ) : (
                <span>
                  Category <span className="text-[#f16701] font-black">{currentPageIndex + 2}</span> of {pages.length} • {pages[currentPageIndex + 1]?.title}
                </span>
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={nextPage}
              disabled={currentPageIndex >= pages.length - 1}
              className="p-2 rounded-full hover:bg-[#f7e5d4] text-neutral-700 hover:text-[#f16701] disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
              title="Next Page"
              aria-label="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="w-[1px] h-5 bg-[#fbd7b4]" />

            {/* Close Button */}
            <button
              onClick={handleCloseBook}
              className="px-3.5 py-1.5 rounded-full bg-[#f7e5d4] hover:bg-[#f8b47d] text-[#f16701] text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center gap-1.5"
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
