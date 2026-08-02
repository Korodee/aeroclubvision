import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT_EMAIL, CTA_IMAGE, MEMBER_APP_URL } from "@/data/content";

export function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center md:px-12 md:py-25 lg:px-20 lg:py-30">
      <div className="absolute inset-0">
        <Image
          src={CTA_IMAGE}
          alt="Avion en vol au-dessus des nuages"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,11,0.82)_0%,rgba(10,10,11,0.4)_50%,rgba(10,10,11,0.55)_100%)]" />
      </div>

      <div className="relative">
        <Reveal>
          <h2 className="mb-5 font-display text-[clamp(40px,5.5vw,76px)] font-light leading-[1.08] tracking-[-0.03em] text-white italic">
            Prêt à décoller ?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mb-11 max-w-115 text-[15px] font-light leading-[1.7] text-white/75">
            Rejoignez une communauté de passionnés qui fait évoluer
            l&apos;aviation générale au Québec.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="flex flex-wrap justify-center gap-2.5">
            <Button href={MEMBER_APP_URL} variant="ctaWhite">
              Accès membre pour réserver
            </Button>
            <Button href={`mailto:${CONTACT_EMAIL}`} variant="ctaOutline">
              Nous écrire
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
