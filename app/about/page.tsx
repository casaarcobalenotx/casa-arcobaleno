import Image from "next/image";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata = {
  title: "About",
  description: "Learn about Casa Arcobaleno, a trusted Austin home and lifestyle support company built around thoughtful care for every home and family."
};

export default function AboutPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-28">
      <div>
        <div className="relative aspect-[4/3] overflow-hidden bg-linen">
          <Image src="/images/personal-assistant-planning.webp" alt="Calm planning desk with notebook, closed laptop, flowers, and coffee" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
        </div>
      </div>
      <div>
        <SectionIntro
          eyebrow="About"
          title="Because every home deserves every color of care."
          text={'Casa Arcobaleno, Italian for "Rainbow House," is built on the belief that every home deserves thoughtful care, and every family deserves support they can trust.'}
        />
        <div className="mt-9 space-y-6 leading-8 text-charcoal/72">
          <p>
            Just as a rainbow brings many colors together to create something beautiful, we believe the different parts of everyday life, moving, organizing, cleaning, planning,
            childcare, and personal assistance, work best when they come together with intention and care.
          </p>
          <p>
            Rather than searching for a different company for every task, our clients have one trusted team that understands their home, their priorities, and the way they live.
          </p>
          <p>
            Based in Austin, Texas, Casa Arcobaleno offers personalized home and lifestyle support designed to simplify everyday life. Whether you are settling into a new home,
            preparing for an important event, creating organized spaces, or simply looking for an extra set of reliable hands, our mission is to bring calm, order, and peace of
            mind.
          </p>
          <p>
            Our work is shaped by years of international experience supporting families and households in Italy, Germany, and the United States. We proudly serve Austin&apos;s
            diverse community and communicate in English, Italian, Spanish, and Moroccan Arabic, allowing us to build genuine relationships with clients from many backgrounds.
          </p>
          <p>
            Behind every project is a trusted network of organizers, movers, cleaners, handymen, and other home professionals who share our commitment to quality, reliability, and
            respect.
          </p>
          <p>
            At Casa Arcobaleno, we believe that caring for a home means caring for the people who live in it. Our goal is not simply to complete a task. It is to create spaces that
            feel welcoming, organized, and ready for life&apos;s next chapter.
          </p>
        </div>
        <div className="mt-10 grid gap-6 border-t border-linen pt-8 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-espresso">Languages</h2>
            <p className="mt-3 text-charcoal/70">Italian, English, Spanish, Moroccan Arabic</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-espresso">Experience</h2>
            <p className="mt-3 text-charcoal/70">Family assistance, personal assistance, home organization, household management</p>
          </div>
        </div>
      </div>
    </section>
  );
}
