import React from 'react';

/**
 * Ensures:
 * 1. "Savera Tex Solution LLP" (any casing) is permanently formatted in Playfair Display Bold ('font-playfair font-bold'),
 *    with 'SAVERA'/'Savera' in orange (#f16701) and 'TEX SOLUTION LLP' in bold Playfair.
 * 2. Standalone 'Savera' / 'savera' / 'SAVERA' is permanently rendered in orange (#f16701).
 * Preserves exact casing and returns React nodes.
 */
export function highlightSavera(text) {
  if (typeof text !== 'string') return text;
  if (!/(savera\s+tex\s+solution(?:\s+llp)?|savera)/i.test(text)) return text;

  // Split matching either the full brand name (with or without LLP) or standalone savera
  const parts = text.split(/(savera\s+tex\s+solution(?:\s+llp)?|savera)/i);

  return parts.map((part, idx) => {
    const lower = part.toLowerCase();

    // Full brand phrase: Savera Tex Solution [LLP]
    if (lower.startsWith('savera') && lower.includes('tex') && lower.includes('solution')) {
      const match = part.match(/^(savera)\s*(.*)$/i);
      const saveraWord = match ? match[1] : 'Savera';
      const restWords = match ? match[2] : 'Tex Solution LLP';

      return (
        <span
          key={idx}
          className="font-playfair font-bold inline-flex items-baseline gap-1"
        >
          <span className="font-playfair font-bold text-[#f16701]">{saveraWord}</span>
          <span className="font-playfair font-bold text-inherit">{restWords}</span>
        </span>
      );
    }

    // Standalone Savera / savera / SAVERA
    if (lower === 'savera') {
      return (
        <span key={idx} className="text-[#f16701]">
          {part}
        </span>
      );
    }

    return part;
  });
}

export default highlightSavera;
