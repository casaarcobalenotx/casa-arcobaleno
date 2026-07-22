import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GalleryGrid } from "@/components/GalleryGrid";
import { services } from "@/lib/site-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Casa Arcobaleno`,
      description: service.shortDescription,
      images: [{ url: service.image, alt: service.alt }]
    }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="relative min-h-[620px] overflow-hidden">
        <Image src={service.image} alt={service.alt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/78 via-espresso/36 to-transparent" />
        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-5 pb-16 pt-32 md:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-linen">Service</p>
            <h1 className="font-serif text-6xl leading-[0.95] md:text-8xl">{service.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/88">{service.intro}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:px-8 md:py-28">
        <aside className="border-t border-linen pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Ideal for</p>
          <ul className="mt-5 grid gap-3 text-charcoal/72">
            {service.idealFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
        <div>
          <h2 className="font-serif text-4xl text-espresso">Thoughtful help, shaped to the project.</h2>
          <p className="mt-6 text-lg leading-8 text-charcoal/72">{service.description}</p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl text-espresso">How We Help</h3>
              <ul className="mt-4 grid gap-3 text-charcoal/72">
                {service.how.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-espresso">Examples</h3>
              <ul className="mt-4 grid gap-3 text-charcoal/72">
                {service.examples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Process</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Tell us what you need", "Receive your personalized plan", "We take care of the details"].map((step, index) => (
              <div key={step} className="border border-linen bg-chalk p-7">
                <p className="text-sm text-charcoal/50">0{index + 1}</p>
                <h2 className="mt-5 font-serif text-3xl text-espresso">{step}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Gallery</p>
            <h2 className="font-serif text-4xl text-espresso">A quiet look at the work.</h2>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-espresso px-7 text-sm font-semibold text-white transition hover:bg-terracotta">
            Request a Quote
          </Link>
        </div>
        <GalleryGrid limit={3} />
      </section>

      <section className="border-t border-linen bg-chalk py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Related services</p>
          <div className="flex flex-wrap gap-3">
            {related.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full border border-linen px-5 py-3 text-sm text-charcoal/75 hover:text-espresso">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
