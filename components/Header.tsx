import Link from "next/link";
import { navItems, site } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-linen/80 bg-chalk/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="font-serif text-xl tracking-wide text-espresso" aria-label="Casa Arcobaleno home">
          {site.name}
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-charcoal/75 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-espresso">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-espresso px-5 text-sm font-medium text-white transition hover:bg-terracotta"
        >
          Request a Quote
        </Link>
      </div>
      <nav className="flex gap-5 overflow-x-auto border-t border-linen/70 px-5 py-3 text-sm text-charcoal/75 md:hidden" aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
