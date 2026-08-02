"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MEMBER_APP_URL, NAV_LINKS } from "@/data/content";
import { cn } from "@/lib/cn";

function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      <path d="M3 17l3-9 3 4 3-8 3 5 3-3" />
      <circle cx="20" cy="17" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-100 flex h-18 items-center transition-[background,border-color,backdrop-filter,color] duration-300",
        scrolled
          ? "border-b border-cream-08 bg-ink/94 text-cream backdrop-blur-md"
          : "theme-media border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
        <a
          href="#top"
          className="flex items-center gap-3 text-cream no-underline"
        >
          <BrandMark />
          <span className="font-display text-[17px] font-normal tracking-[-0.01em]">
            Aéro-club du Québec
          </span>
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.02em] text-cream-55 no-underline transition-colors duration-200 hover:text-cream"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <Button
            href={MEMBER_APP_URL}
            variant="primary"
            className="px-5 py-2.5 text-[13px]"
          >
            Accès membre
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center justify-center p-1 text-cream"
          >
            {menuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-18 flex flex-col border-b border-cream-08 bg-ink/97 px-6 pt-5 pb-7 backdrop-blur-md md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-cream-07 py-4 text-base text-cream-60 no-underline"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={MEMBER_APP_URL}
              variant="primary"
              className="mt-5 justify-center"
            >
              Accès membre
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
