type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
};

export function SectionIntro({ eyebrow, title, text, centered = false }: SectionIntroProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">{eyebrow}</p> : null}
      <h2 className="font-serif text-4xl leading-tight text-espresso md:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-charcoal/72">{text}</p> : null}
    </div>
  );
}
