"use client";

import { TICKER_TEXT } from "@/data/content";

export function Ticker() {
  const items = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="overflow-hidden border-t border-cream-09 bg-white/1.5 py-3.25">
      <div className="ticker-track flex w-max animate-ticker whitespace-nowrap hover:[animation-play-state:paused]">
        {items.map((i) => (
          <span
            key={i}
            className="px-9 font-mono text-[10px] tracking-[0.14em] text-cream-45 uppercase"
          >
            {TICKER_TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
