import Button from "@/components/ui/Button";

type Props = {
  title: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function CTA({
  title,
  text,
  buttonLabel = "Vraag een avond aan",
  buttonHref = "/contact",
}: Props) {
  return (
    <section className="section-padding py-20">
      <div className="container-max flex flex-col items-center gap-5 rounded-xl bg-olive-dark px-8 py-16 text-center">
        <h2 className="max-w-2xl text-3xl text-cream-soft sm:text-4xl">{title}</h2>
        {text && <p className="max-w-xl text-cream/75">{text}</p>}
        <Button href={buttonHref} variant="primary" className="mt-2">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
