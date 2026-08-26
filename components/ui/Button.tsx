import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">;

const variantClasses: Record<Variant, string> = {
  primary: "bg-terracotta text-cream-soft hover:bg-terracotta-dark shadow-soft",
  secondary: "bg-olive text-cream-soft hover:bg-olive-dark",
  ghost: "bg-transparent text-olive-dark border border-olive-dark/30 hover:bg-olive-dark/5",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body font-medium text-[15px] transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0";

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  target,
  rel,
  type,
  ...rest
}: Props) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type ?? "button"} {...rest}>
      {children}
    </button>
  );
}
