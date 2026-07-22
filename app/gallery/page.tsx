import { FilterableGallery } from "@/components/FilterableGallery";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata = {
  title: "Gallery",
  description: "Portfolio gallery for Casa Arcobaleno home organization, packing, unpacking, cleaning, events, and family support."
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
      <SectionIntro eyebrow="Gallery" title="A portfolio of calmer homes and thoughtful support." />
      <FilterableGallery />
    </section>
  );
}
