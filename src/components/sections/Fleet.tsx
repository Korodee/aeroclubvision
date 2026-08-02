"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import {
  ImageLightbox,
  LightboxTriggerHint,
} from "@/components/ui/ImageLightbox";
import { FLEET } from "@/data/fleet";
import type { Aircraft } from "@/types";
import { cn } from "@/lib/cn";

export function Fleet() {
  const [selected, setSelected] = useState(0);
  const [selectedImg, setSelectedImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const aircraft = FLEET[selected];

  const selectAircraft = (index: number) => {
    setSelected(index);
    setSelectedImg(0);
  };

  const openLightbox = (index: number, imgIndex = 0) => {
    setSelected(index);
    setSelectedImg(imgIndex);
    setLightboxOpen(true);
  };

  return (
    <section id="flotte" className="bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <Reveal>
          <div className="mb-8 flex items-baseline justify-between md:mb-12">
            <h2 className="font-display text-[clamp(34px,4vw,54px)] font-light tracking-[-0.03em] text-cream">
              Notre flotte & tarifs
            </h2>
            <span className="font-mono text-[10px] tracking-widest text-cream-45 uppercase">
              {FLEET.length} appareils
            </span>
          </div>
        </Reveal>

        {/* Mobile: scrollable plane cards with image previews */}
        <div className="flex flex-col gap-5 lg:hidden">
          {FLEET.map((plane, index) => (
            <MobilePlaneCard
              key={plane.reg}
              plane={plane}
              onOpenLightbox={(imgIndex) => openLightbox(index, imgIndex)}
            />
          ))}
          <FleetFootnote />
        </div>

        {/* Desktop: list + sticky detail */}
        <div className="hidden items-start gap-12 lg:grid lg:grid-cols-[1fr_380px]">
          <div>
            <div className="mb-1 grid grid-cols-[112px_1fr_auto] gap-4 px-3.5 py-2.5">
              {["Immatriculation", "Appareil", "Tarif dry"].map((heading) => (
                <span
                  key={heading}
                  className="font-mono text-[9px] tracking-widest text-cream-45 uppercase"
                >
                  {heading}
                </span>
              ))}
            </div>

            {FLEET.map((plane, index) => {
              const isActive = selected === index;
              return (
                <motion.button
                  key={plane.reg}
                  type="button"
                  onClick={() => selectAircraft(index)}
                  className={cn(
                    "w-full cursor-pointer border-b border-cream-07 px-3.5 py-4.5 text-left transition-colors duration-180",
                    isActive
                      ? "border-accent-25 bg-accent-07"
                      : "hover:bg-cream-04",
                  )}
                  whileTap={{ scale: 0.997 }}
                >
                  <div className="grid grid-cols-[112px_1fr_auto] items-center gap-4">
                    <span
                      className={cn(
                        "font-mono text-[10px] tracking-[0.08em] transition-colors duration-200",
                        isActive ? "text-accent" : "text-cream-45",
                      )}
                    >
                      {plane.reg}
                    </span>
                    <div>
                      <div className="mb-0.5 text-sm font-normal text-cream">
                        {plane.name}
                      </div>
                      <div className="text-[11px] text-cream-50">
                        {plane.category} · {plane.base}
                      </div>
                    </div>
                    <div className="whitespace-nowrap font-display text-lg font-light tracking-[-0.01em] text-cream">
                      {plane.price} $
                      <span className="font-sans text-[11px] font-light text-cream-45">
                        {" "}
                        /h
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}

            <FleetFootnote />
          </div>

          <div className="sticky top-24 overflow-hidden rounded-xl border border-cream-08 bg-ink">
            <div className="relative aspect-4/3 overflow-hidden">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                aria-label={`Agrandir la photo — ${aircraft.name}`}
                className="group absolute inset-0 z-1 cursor-zoom-in"
              >
                {aircraft.images.map((src, idx) => (
                  <motion.div
                    key={`${aircraft.reg}-${src}`}
                    initial={false}
                    animate={{ opacity: selectedImg === idx ? 1 : 0 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={src}
                      alt={`${aircraft.name} — vue ${idx === 0 ? "extérieure" : "cockpit"}`}
                      fill
                      sizes="420px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      priority={idx === 0 && selected === 0}
                    />
                  </motion.div>
                ))}

                <div className="fleet-photo-scrim pointer-events-none absolute inset-0" />
                <LightboxTriggerHint />
              </button>

              <div className="absolute inset-x-0 bottom-3 z-2 flex justify-center gap-1.75">
                {aircraft.images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={idx === 0 ? "Vue extérieure" : "Vue cockpit"}
                    onClick={() => setSelectedImg(idx)}
                    className={cn(
                      "size-1.25 rounded-full border-0 p-0 transition-[background,transform] duration-200 hover:scale-[1.3]",
                      selectedImg === idx ? "bg-white" : "bg-white/35",
                    )}
                  />
                ))}
              </div>

              <div className="pointer-events-none absolute top-3 right-3 z-2 rounded-sm bg-black/40 px-2 py-1 font-mono text-[8px] tracking-widest text-white/60 uppercase backdrop-blur-sm">
                {selectedImg === 0 ? "Extérieur" : "Cockpit"}
              </div>
            </div>

            <PlaneDetails aircraft={aircraft} />
          </div>
        </div>
      </div>

      <ImageLightbox
        open={lightboxOpen}
        images={aircraft.images}
        index={selectedImg}
        title={`${aircraft.reg} · ${aircraft.name}`}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setSelectedImg}
      />
    </section>
  );
}

function MobilePlaneCard({
  plane,
  onOpenLightbox,
}: {
  plane: Aircraft;
  onOpenLightbox: (imgIndex: number) => void;
}) {
  const [view, setView] = useState(0);

  return (
    <article className="overflow-hidden rounded-xl border border-cream-08">
      <div className="relative h-52">
        <button
          type="button"
          onClick={() => onOpenLightbox(view)}
          aria-label={`Agrandir la photo — ${plane.name}`}
          className="group absolute inset-0 z-1 cursor-zoom-in"
        >
          {plane.images.map((src, idx) => (
            <div
              key={src}
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                view === idx ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={src}
                alt={`${plane.name} — vue ${idx === 0 ? "extérieure" : "cockpit"}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
          <div className="fleet-photo-scrim-strong pointer-events-none absolute inset-0" />
          <LightboxTriggerHint />
        </button>

        <div className="absolute inset-x-0 bottom-3 z-2 flex justify-center gap-1.75">
          {plane.images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={idx === 0 ? "Vue extérieure" : "Vue cockpit"}
              onClick={() => setView(idx)}
              className={cn(
                "size-1.5 rounded-full transition-[background,transform] duration-200",
                view === idx ? "bg-white" : "bg-white/35",
              )}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute top-3 right-3 z-2 rounded-sm bg-black/40 px-2 py-1 font-mono text-[8px] tracking-widest text-white/60 uppercase backdrop-blur-sm">
          {view === 0 ? "Extérieur" : "Cockpit"}
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <div className="mb-1.5 font-mono text-[9px] tracking-[0.12em] text-accent uppercase">
              {plane.reg}
              {plane.code !== "—" ? ` · ${plane.code}` : ""}
            </div>
            <div className="font-display text-xl font-light tracking-tight text-cream">
              {plane.name}
            </div>
            <div className="mt-1 text-[12px] text-cream-50">
              {plane.category} · {plane.base}
            </div>
          </div>
          <div className="shrink-0 text-right">
            <div className="font-display text-[28px] font-light leading-none tracking-[-0.03em] text-cream">
              {plane.price}$
            </div>
            <div className="mt-1 text-[11px] font-light text-cream-50">
              / heure dry
            </div>
          </div>
        </div>

        {plane.notes.length > 0 && (
          <div className="mt-4 border-t border-cream-08 pt-4">
            {plane.notes.map((note) => (
              <div
                key={note}
                className="mb-1.5 flex gap-2.5 text-xs font-light leading-[1.7] text-cream-55"
              >
                <span className="shrink-0 text-accent">—</span>
                {note}
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function PlaneDetails({ aircraft }: { aircraft: Aircraft }) {
  return (
    <div className="p-7">
      <div className="mb-4 font-mono text-[9px] tracking-[0.12em] text-accent uppercase">
        {aircraft.reg} · {aircraft.code}
      </div>

      <div className="mb-1.5 font-display text-2xl font-light leading-[1.2] tracking-tight text-cream">
        {aircraft.name}
      </div>
      <div className="mb-6 text-xs text-cream-50">{aircraft.category}</div>

      <div className="mb-5 border-t border-cream-08 pt-5">
        <div className="mb-2 font-mono text-[9px] tracking-widest text-cream-45 uppercase">
          Tarif
        </div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-[48px] font-light leading-none tracking-[-0.03em] text-cream">
            {aircraft.price}$
          </span>
          <span className="text-xs font-light text-cream-50">/ heure dry</span>
        </div>
      </div>

      <div className={aircraft.notes.length ? "mb-5" : ""}>
        <div className="mb-2 font-mono text-[9px] tracking-widest text-cream-45 uppercase">
          Base
        </div>
        <div className="text-[13px] text-cream">
          {aircraft.base}
          {aircraft.code !== "—" && (
            <span className="ml-2 font-mono text-[10px] text-cream-50">
              · {aircraft.code}
            </span>
          )}
        </div>
      </div>

      {aircraft.notes.length > 0 && (
        <div>
          <div className="mb-2.5 font-mono text-[9px] tracking-widest text-cream-45 uppercase">
            Notes
          </div>
          {aircraft.notes.map((note) => (
            <div
              key={note}
              className="mb-1.5 flex gap-2.5 text-xs font-light leading-[1.7] text-cream-55"
            >
              <span className="shrink-0 text-accent">—</span>
              {note}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function FleetFootnote() {
  return (
    <p className="mt-5 px-1 font-mono text-[10px] leading-[1.8] tracking-[0.03em] text-cream-45 lg:px-3.5">
      * Monomoteurs : bloc min. 20 h · 50 h d&apos;expérience totale requises.
      <br />
      C-FVBQ : bloc 10 h · 20 h sur type · 100 h total.
      <br />
      C-FTNF : bloc 10 h · qualification multi + checkout.
    </p>
  );
}
