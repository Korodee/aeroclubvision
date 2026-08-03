"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Ticker } from "@/components/sections/Ticker";
import { HERO_IMAGE, HERO_STATS, MEMBER_APP_URL } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="theme-media relative flex min-h-dvh flex-col md:h-dvh md:overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Vue depuis le cockpit d'un avion de tourisme au-dessus du Québec"
          fill
          priority
          sizes="100vw"
          className="hero-photo h-full w-full object-cover object-center"
        />
        <div className="hero-scrim-side absolute inset-0" />
        <div className="hero-scrim-bottom absolute inset-0" />
      </div>

      <div className="relative flex flex-1 items-center px-6 pt-24 pb-8 md:min-h-0 md:px-12 md:pt-30 md:pb-10 lg:px-20">
        <div className="max-w-150">
          <Reveal delay={0}>
            <span className="mb-5 block font-mono text-[11px] font-semibold tracking-[0.14em] text-[#3d7eff] uppercase drop-shadow-sm md:mb-8">
              CYJN · CYRQ · CSE4 · CSC3
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mb-5 font-display text-[clamp(42px,11vw,84px)] font-light leading-[1.04] tracking-[-0.035em] text-cream md:mb-7">
              L&apos;aviation
              <br />
              générale,
              <br />
              <em className="italic text-cream-42">enfin accessible.</em>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mb-5 max-w-107.5 text-[15px] font-light leading-[1.65] text-cream-52 md:text-base md:leading-[1.72]">
              Des avions entretenus commercialement, à une fraction du prix du
              marché. Partagés entre pilotes. Sans frais cachés.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mb-6 flex flex-wrap gap-2.5">
              <Button href={MEMBER_APP_URL} variant="primary">
                Accès membre pour réserver
              </Button>
              <Button href="#flotte" variant="ghost">
                Voir la flotte
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-1 md:gap-x-10 md:gap-y-2 md:pt-2">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-[28px] font-light leading-none tracking-[-0.035em] text-cream md:text-[36px]">
                    {stat.val}
                  </div>
                  <div className="mt-1.5 font-mono text-[9px] tracking-[0.08em] text-cream-50 uppercase md:mt-2">
                    {stat.label}
                  </div>
                  <div className="mt-0.5 text-[10px] font-light text-cream-28 md:mt-1">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative shrink-0">
        <Ticker />
      </div>
    </section>
  );
}
