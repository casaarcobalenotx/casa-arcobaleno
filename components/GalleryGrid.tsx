import Image from "next/image";
import { gallery } from "@/lib/site-data";

type GalleryGridProps = {
  limit?: number;
};

export function GalleryGrid({ limit }: GalleryGridProps) {
  const items = typeof limit === "number" ? gallery.slice(0, limit) : gallery;

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item, index) => (
        <figure key={item.title} className={index % 5 === 0 ? "md:col-span-2" : ""}>
          <div className="relative aspect-[4/3] overflow-hidden bg-linen">
            <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 hover:scale-[1.03]" />
          </div>
          <figcaption className="mt-3 flex items-center justify-between gap-3 text-sm">
            <span className="font-medium text-espresso">{item.title}</span>
            <span className="text-charcoal/55">{item.category}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
