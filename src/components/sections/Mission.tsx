import { Reveal } from "@/components/ui/Reveal";

export function Mission() {
  return (
    <section
      id="mission"
      className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-24"
    >
      <Reveal>
        <blockquote className="max-w-205 font-display text-[clamp(26px,3.2vw,48px)] font-light leading-[1.28] tracking-tight text-cream">
          &ldquo;Comme être propriétaire de votre avion — sans assumer
          l&apos;achat, l&apos;assurance, l&apos;annuel, ni la gestion de
          navigabilité.&rdquo;
        </blockquote>
      </Reveal>
      <Reveal delay={100}>
        <p className="mt-10 max-w-135 text-[15px] font-light leading-[1.75] text-cream-42">
          L&apos;Aéro-club du Québec est le plus grand aéroclub de la province.
          Notre modèle 100% non lucratif vous permet de monter vos heures PIC,
          dégeler votre ATPL, ou simplement voler pour le plaisir — à des tarifs
          qu&apos;aucune école ne peut égaler.
        </p>
      </Reveal>
    </section>
  );
}
