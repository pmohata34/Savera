import React, { useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

export function RadialGlowButton({
  children,
  className,
  containerClassName,
  as = 'button',
  href,
  onClick,
  glowColor = 'rgba(241, 103, 1, 0.45)',
  spotlightColor = 'rgba(255, 255, 255, 0.35)',
  size = 'md',
  disabled = false,
  ...props
}) {
  const buttonRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX, { stiffness: 350, damping: 25 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 350, damping: 25 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
  };

  // Dynamic radial spotlight that tracks cursor on hover
  const spotlightBackground = useMotionTemplate`radial-gradient(
    140px circle at ${mouseXSpring}px ${mouseYSpring}px,
    ${spotlightColor},
    transparent 80%
  )`;

  // Ambient radial glow that emanates outward around the perimeter
  const ambientGlowBackground = useMotionTemplate`radial-gradient(
    180px circle at ${mouseXSpring}px ${mouseYSpring}px,
    ${glowColor},
    transparent 70%
  )`;

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3 text-xs sm:text-[13px]',
    lg: 'px-8 py-3.5 text-sm',
  }[size] || 'px-6 py-3 text-xs';

  const Component = as === 'a' ? motion.a : motion.button;

  return (
    <div className={cn("relative inline-flex items-center justify-center group", containerClassName)}>
      {/* ── 1. Outer Ambient Radial Glow Halo (Expands on Hover) ── */}
      <motion.div
        className="absolute -inset-1.5 rounded-full blur-xl opacity-45 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none"
        style={{ background: ambientGlowBackground }}
      />

      {/* ── 2. Soft Outer Ambient Bloom Ring ── */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f8b47d] opacity-50 group-hover:opacity-100 blur-sm transition-opacity duration-300 pointer-events-none" />

      {/* ── 3. Main Interactive Button Surface with Cursor-Tracking Radial Spotlight ── */}
      <Component
        ref={buttonRef}
        href={as === 'a' ? href : undefined}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        disabled={disabled}
        className={cn(
          "relative z-10 inline-flex items-center justify-center gap-2 rounded-full",
          "bg-gradient-to-r from-[#f16701] via-[#f48129] to-[#f79a52]",
          "text-white font-extrabold uppercase tracking-wider",
          "shadow-lg shadow-[#f16701]/30",
          "border border-white/25 overflow-hidden transition-all duration-300 cursor-pointer select-none",
          sizeClasses,
          className
        )}
        {...props}
      >
        {/* Dynamic Cursor-Tracking Radial Spotlight Layer */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: spotlightBackground }}
        />

        {/* Shimmer Sheen Accent */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 via-transparent to-black/10 pointer-events-none" />

        {/* Button Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Component>
    </div>
  );
}

export default RadialGlowButton;
