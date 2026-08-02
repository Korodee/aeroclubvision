"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { PREREQUISITES } from "@/data/content";
import { cn } from "@/lib/cn";

const FEE_STATS = [
  { val: "0$", label: "Inscription" },
  { val: "0$", label: "Cotisation" },
  { val: "∞", label: "Validité" },
] as const;

export function Prerequisites() {
  const [openPrereq, setOpenPrereq] = useState<number | null>(null);

  return (
    <section
      id="prereqs"
      className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-25 lg:px-20 lg:py-30"
    >
      <Reveal>
        <div className="mb-12 md:mb-16">
          <span className="mb-5 block font-mono text-[10px] tracking-[0.12em] text-cream-28 uppercase">
            Prérequis d&apos;assurance
          </span>
          <h2 className="max-w-125 font-display text-[clamp(32px,3.5vw,50px)] font-light leading-[1.15] tracking-[-0.03em] text-cream">
            Tout ce dont vous avez besoin.
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-15">
        <div>
          {PREREQUISITES.map((prereq, index) => {
            const isOpen = openPrereq === index;
            return (
              <Reveal key={prereq.title} delay={index * 60}>
                <div className="border-t border-cream-09">
                  <button
                    type="button"
                    onClick={() => setOpenPrereq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between py-5.5 text-left font-sans text-cream"
                  >
                    <span className="text-sm font-normal">{prereq.title}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        "inline-block font-mono text-xl leading-none",
                        isOpen ? "text-accent" : "text-cream-35",
                      )}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.3 },
                        }}
                        className="overflow-hidden"
                      >
                        <ul className="list-none pb-6">
                          {prereq.items.map((item) => (
                            <li
                              key={item}
                              className="mb-2 flex gap-3 text-[13px] font-light leading-[1.7] text-cream-50"
                            >
                              <span className="shrink-0 text-accent">—</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}

          <div className="border-t border-cream-09" />

          <Reveal delay={200}>
            <p className="mt-5 text-[11px] font-light leading-[1.8] text-cream-45">
              Détails complets fournis lors de l&apos;inscription et du briefing
              initial.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="overflow-hidden rounded-xl border border-cream-08 bg-ink-card p-8 md:p-10">
            <div className="mb-7 font-mono text-[9px] tracking-[0.12em] text-accent uppercase">
              Aucun frais caché
            </div>
            <p className="mb-6 font-display text-2xl font-light leading-[1.4] tracking-[-0.02em] text-cream">
              Pas de cotisation annuelle.
              <br />
              Pas de frais d&apos;inscription.
              <br />
              Pas de date d&apos;expiration.
            </p>
            <p className="text-[13px] font-light leading-[1.75] text-cream-40">
              Vous achetez un bloc d&apos;heures. Vous volez à votre rythme. Vos
              heures restent valides indéfiniment.
            </p>
            <div className="mt-9 flex gap-8 border-t border-cream-08 pt-7">
              {FEE_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-[28px] font-light leading-none tracking-[-0.02em] text-cream">
                    {stat.val}
                  </div>
                  <div className="mt-1.5 font-mono text-[9px] tracking-[0.08em] text-cream-28 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
