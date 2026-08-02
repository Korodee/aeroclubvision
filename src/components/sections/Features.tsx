import { Reveal } from "@/components/ui/Reveal";
import { FEATURES } from "@/data/content";

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 md:px-12 md:pb-16 lg:px-20 lg:pb-20">
      <Reveal>
        <div className="mb-14 border-t border-cream-09 pt-14">
          <span className="font-mono text-[10px] tracking-[0.12em] text-cream-30 uppercase">
            Pourquoi voler avec nous
          </span>
        </div>
      </Reveal>

      {FEATURES.map((feature, index) => (
        <Reveal key={feature.num} delay={index * 50}>
          <div className="grid grid-cols-[56px_1fr] items-start gap-4 border-b border-cream-08 py-8 md:grid-cols-[72px_1fr_180px] md:gap-10">
            <span className="pt-0.5 font-mono text-[11px] tracking-[0.06em] text-accent">
              {feature.num}
            </span>
            <div>
              <h3 className="mb-2.5 font-display text-[22px] font-light tracking-[-0.02em] text-cream">
                {feature.title}
              </h3>
              <p className="max-w-125 text-sm font-light leading-[1.72] text-cream-45">
                {feature.desc}
              </p>
            </div>
            <div className="hidden pt-0.5 text-right font-mono text-[10px] tracking-[0.08em] text-cream-45 uppercase md:block">
              {feature.aside}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
