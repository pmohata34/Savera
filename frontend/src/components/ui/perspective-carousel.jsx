import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const DEFAULT_TRANSITION = {
  type: 'spring',
  bounce: 0.15,
  duration: 0.8,
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export function PerspectiveCarousel({
  items = [],
  activeIndex,
  defaultActiveIndex = 0,
  onActiveIndexChange,
  loop = true,
  slideWidth = 260,
  rotationStep = 45,
  inactiveScale = 0.85,
  transition = DEFAULT_TRANSITION,
  showControls = true,
  showDots = true,
  viewportClassName,
  slideClassName,
  imageClassName,
  controlsClassName,
  className,
  onKeyDown,
  tabIndex = 0,
  ...props
}) {
  const maxIndex = Math.max(0, items.length - 1);
  const [uncontrolledIndex, setUncontrolledIndex] = useState(() =>
    clamp(defaultActiveIndex, 0, maxIndex)
  );
  const currentIndex = clamp(activeIndex ?? uncontrolledIndex, 0, maxIndex);
  const safeSlideWidth = Math.max(120, slideWidth);
  const safeInactiveScale = clamp(inactiveScale, 0.5, 1);

  const selectSlide = useCallback(
    (nextIndex) => {
      if (!items.length) return;

      const resolvedIndex = loop
        ? (nextIndex + items.length) % items.length
        : clamp(nextIndex, 0, maxIndex);

      if (activeIndex === undefined) {
        setUncontrolledIndex(resolvedIndex);
      }

      onActiveIndexChange?.(resolvedIndex);
    },
    [activeIndex, items.length, loop, maxIndex, onActiveIndexChange]
  );

  if (!items.length) return null;

  const isPreviousDisabled = !loop && currentIndex === 0;
  const isNextDisabled = !loop && currentIndex === maxIndex;

  const handleKeyDown = (event) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectSlide(currentIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectSlide(currentIndex + 1);
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Perspective 3D Carousel"
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
      className={cn('relative isolate w-full overflow-hidden select-none', className)}
      {...props}
    >
      <div
        className={cn('relative w-full h-[430px] sm:h-[460px] overflow-hidden flex items-center justify-center', viewportClassName)}
        style={{ perspective: '1200px' }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 flex w-fit -translate-y-1/2 items-center"
          animate={{ x: -(currentIndex * safeSlideWidth + safeSlideWidth / 2) }}
          transition={transition}
        >
          {items.map((item, index) => {
            const isActive = currentIndex === index;

            return (
              <div
                key={`${item.title}-${index}`}
                className="shrink-0"
                style={{ width: safeSlideWidth, perspective: '1200px' }}
              >
                <motion.div
                  className={cn(
                    'flex w-full flex-col items-center will-change-transform cursor-pointer px-2',
                    slideClassName
                  )}
                  animate={{
                    rotateY: (currentIndex - index) * rotationStep,
                    scale: isActive ? 1 : safeInactiveScale,
                    opacity: Math.abs(currentIndex - index) > 2 ? 0.35 : 1,
                  }}
                  transition={transition}
                  style={{ transformStyle: 'preserve-3d' }}
                  onClick={() => selectSlide(index)}
                >
                  <div
                    className={cn(
                      'w-full h-[380px] sm:h-[400px] rounded-3xl overflow-hidden relative transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between text-left select-none',
                      isActive
                        ? 'bg-gradient-to-br from-white via-white to-[#FFF6EE] ring-3 ring-[#f16701] shadow-2xl shadow-[#f16701]/25 border-2 border-[#f8b47d]/70'
                        : 'bg-white/95 border border-[#f8b47d]/40 shadow-lg hover:border-[#f16701]/60',
                      imageClassName
                    )}
                  >
                    {/* Top Ambient Corner Glow Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f7e5d4]/60 to-transparent rounded-full blur-xl pointer-events-none" />

                    {/* Top Pill / Number */}
                    <div className="relative z-10 flex items-center justify-between border-b border-[#fbd7b4]/40 pb-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-[#f7e5d4] text-[#f16701] shadow-2xs border border-[#f8b47d]/40">
                        {item.tag || `Pillar 0${index + 1}`}
                      </span>
                      <span className="text-base font-black text-[#f16701] font-mono">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Main Content: Title, Subtitle, Description */}
                    <div className="relative z-10 my-auto py-2 space-y-2">
                      <h4 className="text-lg sm:text-xl font-black text-[#0F1318] leading-tight">
                        {item.title}
                      </h4>

                      {item.subtitle && (
                        <p className="text-xs font-bold text-[#f16701]">
                          {item.subtitle}
                        </p>
                      )}

                      <div className="w-10 h-0.5 bg-gradient-to-r from-[#f16701] to-[#f8b47d] rounded-full my-2" />

                      <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Brand Line */}
                    <div className="relative z-10 pt-3 border-t border-[#fbd7b4]/40 flex items-center justify-between text-[10px] text-neutral-400">
                      <span className="font-playfair font-bold text-xs inline-flex items-baseline gap-1">
                        <span className="text-[#f16701]">SAVERA</span>
                        <span className="text-[#0F1318]">TEX SOLUTION LLP</span>
                      </span>
                      <span className="font-bold text-[#f16701] font-mono">Pillar {index + 1} of 7</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Floating Bottom Navigation Controls */}
      {showControls && (
        <div
          className={cn(
            'relative z-10 mx-auto mt-4 flex w-fit items-center justify-center gap-3 rounded-full border border-[#f8b47d]/50 bg-white/90 px-3 py-1.5 shadow-md backdrop-blur-md',
            controlsClassName
          )}
        >
          <button
            type="button"
            aria-label="Show previous slide"
            disabled={isPreviousDisabled}
            className="inline-flex size-8 items-center justify-center rounded-full text-neutral-700 hover:text-white hover:bg-gradient-to-r hover:from-[#f16701] hover:to-[#f48129] transition-all disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
            onClick={() => selectSlide(currentIndex - 1)}
          >
            <ChevronLeft className="size-4" />
          </button>

          {showDots && (
            <div className="flex items-center justify-center gap-1.5 px-2">
              {items.map((item, index) => (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  aria-label={`Show slide ${index + 1}: ${item.title}`}
                  aria-current={currentIndex === index ? 'true' : undefined}
                  className={cn(
                    'h-2 rounded-full transition-all duration-300 cursor-pointer',
                    currentIndex === index
                      ? 'w-7 bg-gradient-to-r from-[#f16701] to-[#f48129] shadow-xs'
                      : 'w-2 bg-[#fbd7b4] hover:bg-[#f8b47d]'
                  )}
                  onClick={() => selectSlide(index)}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            aria-label="Show next slide"
            disabled={isNextDisabled}
            className="inline-flex size-8 items-center justify-center rounded-full text-neutral-700 hover:text-white hover:bg-gradient-to-r hover:from-[#f16701] hover:to-[#f48129] transition-all disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer"
            onClick={() => selectSlide(currentIndex + 1)}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default PerspectiveCarousel;

