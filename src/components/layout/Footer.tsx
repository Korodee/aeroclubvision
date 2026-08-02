import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
} from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-cream-07 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-6 py-10 md:flex-row md:items-center md:px-12 md:py-11 lg:px-20">
        <div>
          <div className="mb-1.5 font-display text-sm font-normal text-cream">
            Aéro-club du Québec
          </div>
          <div className="font-mono text-[9px] tracking-widest text-cream-45 uppercase">
            CYJN · CYRQ · CSE4 · CSC3
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-9">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[13px] text-cream-55 no-underline transition-colors duration-200 hover:text-cream"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href={`tel:${CONTACT_PHONE}`}
            className="font-mono text-xs text-cream-55 no-underline transition-colors duration-200 hover:text-cream"
          >
            {CONTACT_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </footer>
  );
}
