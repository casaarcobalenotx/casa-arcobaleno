import Image from "next/image";
import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionIntro } from "@/components/SectionIntro";
import { services, site } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden">
        <Image src="/images/hero-home.webp" alt="Calm organized Austin home interior with warm natural light" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/42 to-transparent" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-20 pt-40 md:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-linen">Austin, Texas</p>
            <h1 className="font-serif text-6xl leading-[0.95] md:text-8xl">A little more order. A lot more ease.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/88">
              Casa Arcobaleno provides thoughtful home, family, and lifestyle support throughout Austin. From organizing and moving assistance to events, cleaning coordination,
              childcare support, and personal assistance, we help make everyday life feel lighter.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex min-h-12 items-center rounded-full bg-chalk px-6 text-sm font-semibold text-espresso transition hover:bg-linen">
                Explore Services
              </Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full border border-white/45 px-6 text-sm font-semibold text-white transition hover:bg-white/10">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionIntro
          eyebrow="Introduction"
          title="Support designed around real life."
          text="Every home, family, and project has its own rhythm. Casa Arcobaleno adapts to the details in front of us, creating thoughtful support that feels personal, practical, and calm."
        />
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionIntro eyebrow="Find help by need" title="One trusted place for the support your life requires." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <Link key={service.href} href={service.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-linen">
                  <Image src={service.image} alt={service.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/72 via-espresso/12 to-transparent" />
                  <h2 className="absolute bottom-6 left-6 right-6 font-serif text-3xl leading-tight text-white">{service.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionIntro eyebrow="Featured work" title="Calm homes, easier moves, thoughtful details." />
          <Link href="/gallery" className="text-sm font-semibold text-espresso underline decoration-terracotta/40 underline-offset-8">
            View gallery
          </Link>
        </div>
        <GalleryGrid limit={6} />
      </section>

      <section className="bg-espresso py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3 md:px-8">
          {["Personalized Support", "Trusted Local Network", "Thoughtful Attention to Detail"].map((title) => (
            <div key={title} className="border-t border-white/20 pt-7">
              <h2 className="font-serif text-3xl">{title}</h2>
              <p className="mt-4 leading-7 text-white/70">
                Every project is approached with care, discretion, and a practical plan shaped around your home, timeline, and priorities.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Testimonials</p>
            <h2 className="font-serif text-4xl leading-tight text-espresso md:text-5xl">Client stories coming soon.</h2>
            <p className="mt-5 text-lg leading-8 text-charcoal/72">
              Casa Arcobaleno will share client feedback here only after receiving permission.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-24 text-center md:px-8 md:py-32">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">{site.location}</p>
        <h2 className="font-serif text-5xl leading-tight text-espresso md:text-7xl">Tell us what would make life easier.</h2>
        <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center rounded-full bg-espresso px-7 text-sm font-semibold text-white transition hover:bg-terracotta">
          Request a Quote
        </Link>
      </section>
    </>
  );
}
