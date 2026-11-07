import React from 'react';

/**
 * Official Brand Typography:
 * "SAVERA" in Orange (#f16701)
 * "TEX SOLUTION LLP" in Black (#0F1318)
 * Font style: Playfair Display Bold
 */
export default function BrandName({ className = '', as = 'span', saveraClass = '', textClass = '' }) {
  const Component = as;
  return (
    <Component className={`font-playfair font-bold tracking-normal inline-flex items-baseline gap-1.5 ${className}`}>
      <span className={`text-[#f16701] ${saveraClass}`}>SAVERA</span>
      <span className={`text-[#0F1318] ${textClass}`}>TEX SOLUTION LLP</span>
    </Component>
  );
}

