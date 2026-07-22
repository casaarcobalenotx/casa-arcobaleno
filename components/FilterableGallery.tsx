"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { gallery } from "@/lib/site-data";

const filters = ["All", "Organization", "Packing", "Unpacking", "Cleaning", "Events", "Family Support"];

export function FilterableGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const items = useMemo(() => (activeFilter === "All" ? gallery : gallery.filter((item) => item.category === activeFilter)), [activeFilter]);

  return (
    <>
      <div className="mt-9 flex flex-wrap gap-3" aria-label="Gallery filters">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={
              activeFilter === filter
                ? "rounded-full bg-espresso px-4 py-2 text-sm text-white"
                : "rounded-full border border-linen px-4 py-2 text-sm text-charcoal/70 hover:text-espresso"
            }
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <figure key={item.title} className="mb-5 break-inside-avoid">
            <div className={index % 4 === 0 ? "relative aspect-[4/5] overflow-hidden bg-linen" : "relative aspect-[4/3] overflow-hidden bg-linen"}>
              <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-3 text-sm">
              <span className="font-medium text-espresso">{item.title}</span>
              <span className="text-charcoal/55">{item.category}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
