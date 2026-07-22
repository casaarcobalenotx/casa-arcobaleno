import { QuoteForm } from "@/components/QuoteForm";
import { SectionIntro } from "@/components/SectionIntro";
import { site } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description: "Request a personalized quote from Casa Arcobaleno for home, family, and lifestyle support in Austin."
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.85fr_1.15fr] md:px-8 md:py-28">
      <div>
        <SectionIntro
          eyebrow="Contact"
          title="Tell us what would make life easier."
          text="Share a few details about your home, timeline, and the kind of support you need. Casa Arcobaleno will be in touch soon."
        />
        <div className="mt-10 border-t border-linen pt-7 text-sm leading-7 text-charcoal/72">
          <p>
            <a href={`mailto:${site.email}`} className="font-medium text-espresso underline decoration-terracotta/40 underline-offset-8">
              {site.email}
            </a>
          </p>
          <p>{site.location}</p>
        </div>
      </div>
      <div className="border border-linen bg-ivory p-5 md:p-8">
        <QuoteForm />
      </div>
    </section>
  );
}
