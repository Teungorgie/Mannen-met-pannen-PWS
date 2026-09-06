import Image from "next/image";

type Props = {
  label?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
  /** Pad naar de echte foto, bijv. "/images/Foto bord.jpg". Laat leeg voor de placeholder. */
  src?: string;
  /** Verplicht zodra 'src' is ingevuld â€” beschrijf wat er op de foto te zien is. */
  alt?: string;
};

const aspectClasses: Record<NonNullable<Props["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

/**
 * Plek voor een foto. Zolang er geen 'src' is opgegeven, toont dit component
 * een placeholder met de juiste verhouding zodat de lay-out niet verspringt.
 * Zodra je een 'src' meegeeft, toont het de echte foto op exact dezelfde plek.
 */
export default function ImagePlaceholder({
  label = "Foto volgt",
  aspect = "landscape",
  className = "",
  src,
  alt,
}: Props) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-lg ${aspectClasses[aspect]} w-full ${className}`}
      >
        <Image
          src={src}
          alt={alt ?? label}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex ${aspectClasses[aspect]} w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-olive/30 bg-[linear-gradient(135deg,#EFE7D4_25%,#F7F2E7_25%,#F7F2E7_50%,#EFE7D4_50%,#EFE7D4_75%,#F7F2E7_75%,#F7F2E7)] bg-[length:24px_24px] ${className}`}
    >
      <div className="flex flex-col items-center gap-2 rounded-full bg-cream-soft/90 px-5 py-4 shadow-sm">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3E4A2B"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
        <span className="text-xs font-medium tracking-wide text-olive-dark">{label}</span>
      </div>
    </div>
  );
}
