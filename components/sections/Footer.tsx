import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-olive-dark/10 bg-olive-dark text-cream-soft">
      <div className="container-max section-padding grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Image
            src="/images/logo.png"
            alt="Mannen met Pannen"
            width={168}
            height={84}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="text-sm text-cream/70">{BUSINESS.tagline}.</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream/50">Navigatie</h3>
          <Link href="/" className="text-sm text-cream/85 hover:text-terracotta-light">
            Home
          </Link>
          <Link href="/menus" className="text-sm text-cream/85 hover:text-terracotta-light">
            Menu&apos;s
          </Link>
          <Link href="/zo-werkt-het" className="text-sm text-cream/85 hover:text-terracotta-light">
            Zo werkt het
          </Link>
          <Link href="/over-ons" className="text-sm text-cream/85 hover:text-terracotta-light">
            Over ons
          </Link>
          <Link href="/contact" className="text-sm text-cream/85 hover:text-terracotta-light">
            Contact
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream/50">Contact</h3>
          <a href={`mailto:${BUSINESS.email}`} className="text-sm text-cream/85 hover:text-terracotta-light">
            {BUSINESS.email}
          </a>
          {BUSINESS.phones.map((p) => (
            <a
              key={p.number}
              href={`tel:${p.number.replace(/\s/g, "")}`}
              className="text-sm text-cream/85 hover:text-terracotta-light"
            >
              {p.label}: {p.number}
            </a>
          ))}
          <a
            href={BUSINESS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cream/85 hover:text-terracotta-light"
          >
            Instagram — {BUSINESS.instagramHandle}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-cream/50">Werkgebied</h3>
          <p className="text-sm text-cream/85">{BUSINESS.serviceArea.join(" · ")}</p>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-max section-padding flex flex-col-reverse items-center justify-between gap-3 py-6 text-xs text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}
          </p>
          <Link href="/privacy" className="hover:text-terracotta-light">
            Privacyverklaring
          </Link>
        </div>
      </div>
    </footer>
  );
}
