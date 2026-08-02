import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { CINEMATIC_IMAGE } from "@/data/content";

export function CinematicBreak() {
  return (
    <div className="theme-media relative h-[55vh] overflow-hidden">
      <Image
        src={CINEMATIC_IMAGE}
        alt="Petit avion sur piste"
        fill
        sizes="100vw"
        className="object-cover object-[center_40%] brightness-[0.45]"
      />
      <div className="cinematic-scrim absolute inset-0" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <Reveal>
          <p className="text-center font-display text-[clamp(30px,4.5vw,60px)] font-light leading-tight tracking-tight text-cream italic drop-shadow-sm">
            Volez. Partagez.
            <br />
            Avancez.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-center font-mono text-[10px] tracking-[0.12em] text-cream-50 uppercase">
            Le plus grand aéroclub du Québec
          </p>
        </Reveal>
      </div>
    </div>
  );
}
