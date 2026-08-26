type Props = {
  label?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
};

const aspectClasses: Record<NonNullable<Props["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

/**
 * Plek voor een toekomstige foto. Vervang later door een <Image /> of <img>
 * op dezelfde plek in de code. De opzet houdt rekening met de juiste
 * verhouding, zodat de lay-out niet verspringt zodra er een foto in komt.
 */
export default function ImagePlaceholder({ label = "Foto volgt", aspect = "landscape", className = "" }: Props) {
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
