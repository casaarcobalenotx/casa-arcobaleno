import Link from "next/link";
import { navItems, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-linen bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-serif text-2xl text-espresso">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-charcoal/70">{site.tagline}</p>
        </div>
        <nav className="grid gap-3 text-sm text-charcoal/75" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-espresso">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm leading-7 text-charcoal/75">
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-espresso">
              {site.email}
            </a>
          </p>
          <p>{site.location}</p>
          <p className="mt-4 text-xs">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
