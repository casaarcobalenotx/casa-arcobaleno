import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group grid overflow-hidden border border-linen bg-chalk md:grid-cols-[0.9fr_1fr]">
      <Link href={service.href} className="relative aspect-[4/3] bg-linen md:aspect-auto" aria-label={`View ${service.title}`}>
        <Image src={service.image} alt={service.alt} fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.03]" />
      </Link>
      <div className="flex flex-col justify-between p-7 md:p-9">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Service</p>
          <h2 className="mt-4 font-serif text-3xl text-espresso">{service.title}</h2>
          <p className="mt-4 leading-7 text-charcoal/72">{service.shortDescription}</p>
          <p className="mt-5 text-sm leading-6 text-charcoal/60">{service.who}</p>
        </div>
        <Link href={service.href} className="mt-8 inline-flex text-sm font-semibold text-espresso underline decoration-terracotta/40 underline-offset-8">
          Learn more
        </Link>
      </div>
    </article>
  );
}
