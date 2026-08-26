"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/menus", label: "Menu's" },
  { href: "/zo-werkt-het", label: "Zo werkt het" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Sluit het mobiele menu bij het wisselen van pagina
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Voorkom scrollen op de achtergrond als het mobiele menu open staat
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-olive-dark/10 bg-cream/90 backdrop-blur-md">
      <div className="container-max section-padding flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Mannen met Pannen — home">
          <Image src="/images/logo.png" alt="Mannen met Pannen" width={168} height={84} priority className="h-14 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hoofdnavigatie">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-[15px] transition-colors hover:text-terracotta ${
                  active ? "text-terracotta font-medium" : "text-bark"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary" className="!px-5 !py-2.5 text-sm">
            Vraag een avond aan
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-olive-dark transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-olive-dark transition-opacity ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-0.5 w-6 bg-olive-dark transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobiel menu */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-max section-padding flex flex-col gap-1 pb-6" aria-label="Mobiele navigatie">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-3 text-[15px] ${
                pathname === link.href ? "bg-olive-dark/5 text-terracotta font-medium" : "text-bark"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" variant="primary" className="mt-2 w-full">
            Vraag een avond aan
          </Button>
        </nav>
      </div>
    </header>
  );
}
