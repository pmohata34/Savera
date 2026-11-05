import React from 'react';
import { cn } from '../../lib/utils';

export function GlowCard({
  children,
  className,
  containerClassName,
  borderWidth = 'p-[3px]',
  glowOpacity = 'opacity-85 group-hover:opacity-100',
  ...props
}) {
  return (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden group transition-all duration-300 transform hover:-translate-y-1.5 shadow-md hover:shadow-xl hover:shadow-[#f16701]/20",
        borderWidth,
        containerClassName
      )}
      {...props}
    >
      {/* ── 1. Rotating Conic Gradient Glow Border ── */}
      <div
        className={cn(
          "absolute -inset-[150%] m-auto aspect-square w-[300%] glow-card-border transition-opacity duration-500 pointer-events-none",
          glowOpacity
        )}
      />

      {/* ── 2. Ambient Blurred Radiant Glow Halo ── */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#f16701]/25 via-[#f8b47d]/15 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* ── 3. Inner Card Surface ── */}
      <div
        className={cn(
          "relative z-10 w-full h-full bg-gradient-to-br from-white via-white to-[#FFF9F4] backdrop-blur-md rounded-[21px] p-7 sm:p-8 flex flex-col justify-start shadow-xs transition-all duration-300",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default GlowCard;

