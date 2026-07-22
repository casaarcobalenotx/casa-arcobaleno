import Link from "next/link";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site-data";

export const metadata = {
  title: "Services",
  description: "Thoughtful home organization, moving support, cleaning coordination, events, family support, and personal assistance in Austin."
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionIntro
          eyebrow="Services"
          title="One trusted place for the support your life requires."
          text="This is not a pricing page. Every project is unique. We provide personalized quotes based on your needs, timeline, and project scope."
        />
        <div className="mt-14 grid gap-7">
          {services.map((service) => (
            <ServiceCard key={service.href} service={service} />
          ))}
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-full bg-espresso px-7 text-sm font-semibold text-white transition hover:bg-terracotta">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
