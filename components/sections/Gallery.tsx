import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const SLOTS: {
  label: string;
  aspect: "square" | "portrait" | "landscape" | "wide";
  src: string;
}[] = [
  {
    label: "Foto: koken bij klanten thuis",
    aspect: "landscape",
    src: "/images/Foto bord.jpg",
  },
  {
    label: "Foto: gedekte tafel",
    aspect: "portrait",
    src: "/images/Foto mes en vork.jpg",
  },
  {
    label: "Foto: een van de gerechten",
    aspect: "square",
    src: "/images/Foto bord.jpg",
  },
  {
    label: "Foto: sfeerbeeld van de avond",
    aspect: "landscape",
    src: "/images/foto pak.jpg",
  },
];

export default function Gallery() {
  return (
    <section className="section-padding py-20">
      <div className="container-max">
        <h2 className="text-3xl sm:text-4xl">Een avond bij Mannen met Pannen</h2>
        <p className="mt-2 max-w-xl text-bark/70">
          Een impressie van onze avonden bij klanten thuis.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {SLOTS.map((slot) => (
            <ImagePlaceholder
              key={slot.label}
              label={slot.label}
              aspect={slot.aspect}
              src={slot.src}
              alt={slot.label.replace("Foto: ", "")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
