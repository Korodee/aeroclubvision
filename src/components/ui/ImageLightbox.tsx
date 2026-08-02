"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { cn } from "@/lib/cn";

type ImageLightboxProps = {
  open: boolean;
  images: readonly string[];
  index: number;
  title: string;
  labels?: readonly string[];
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function ImageLightbox({
  open,
  images,
  index,
  title,
  labels = ["Extérieur", "Cockpit"],
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const label = labels[index] ?? `Vue ${index + 1}`;
  const hasMultiple = images.length > 1;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (!hasMultiple) return;
      if (event.key === "ArrowLeft") {
        onIndexChange((index - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        onIndexChange((index + 1) % images.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, index, images.length, hasMultiple, onClose, onIndexChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} — ${label}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-200 flex items-center justify-center bg-ink/92 p-4 backdrop-blur-md md:p-8"
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full border border-cream-08 bg-ink-panel text-cream transition-colors hover:bg-cream-04 md:top-6 md:right-6"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          <div
            className="relative flex w-full max-w-5xl flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-cream-08 bg-ink-panel">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={images[index]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[index]}
                    alt={`${title} — ${label}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {hasMultiple && (
                <>
                  <button
                    type="button"
                    aria-label="Photo précédente"
                    onClick={() =>
                      onIndexChange((index - 1 + images.length) % images.length)
                    }
                    className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream-08 bg-ink/70 text-cream backdrop-blur-sm transition-colors hover:bg-ink md:left-4"
                  >
                    <ChevronLeft size={18} strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    aria-label="Photo suivante"
                    onClick={() =>
                      onIndexChange((index + 1) % images.length)
                    }
                    className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream-08 bg-ink/70 text-cream backdrop-blur-sm transition-colors hover:bg-ink md:right-4"
                  >
                    <ChevronRight size={18} strokeWidth={1.5} />
                  </button>
                </>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 px-1">
              <div>
                <div className="font-display text-lg font-light tracking-tight text-cream md:text-xl">
                  {title}
                </div>
                <div className="mt-1 font-mono text-[10px] tracking-widest text-cream-40 uppercase">
                  {label}
                </div>
              </div>

              {hasMultiple && (
                <div className="flex items-center gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      aria-label={labels[idx] ?? `Vue ${idx + 1}`}
                      onClick={() => onIndexChange(idx)}
                      className={cn(
                        "size-1.5 rounded-full duration-200 hover:scale-125",
                        index === idx ? "bg-white" : "bg-white/35",
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type LightboxTriggerHintProps = {
  className?: string;
};

export function LightboxTriggerHint({ className }: LightboxTriggerHintProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 rounded-sm bg-black/40 px-2 py-1 font-mono text-[8px] tracking-widest text-white/55 uppercase backdrop-blur-sm",
        className,
      )}
    >
      <Expand size={10} strokeWidth={1.5} />
      Agrandir
    </div>
  );
}
