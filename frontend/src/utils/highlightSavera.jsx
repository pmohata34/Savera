import React from 'react';

/**
 * Ensures any occurrence of 'Savera', 'savera', or 'SAVERA' is permanently rendered in orange (#f16701).
 * Preserves the exact casing and returns React nodes.
 */
export function highlightSavera(text) {
  if (typeof text !== 'string') return text;
  if (!/(savera)/i.test(text)) return text;

  const parts = text.split(/(savera)/i);
  return parts.map((part, idx) => {
    if (part.toLowerCase() === 'savera') {
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
