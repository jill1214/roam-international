import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cx(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>;
}

type SectionProps = { id?: string; tone?: "white" | "mist" | "brand"; className?: string; children: ReactNode; labelledBy?: string };
export function Section({ id, tone = "white", className, children, labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx(
        "py-16 sm:py-24",
        tone === "mist" && "bg-mist",
        tone === "brand" && "bg-brand-900 text-brand-50",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  id, title, intro, align = "left", as: Tag = "h2", className,
}: { id?: string; title: string; intro?: ReactNode; align?: "left" | "center"; as?: "h1" | "h2"; className?: string }) {
  return (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <Tag id={id} className="text-[clamp(1.85rem,3.6vw,2.75rem)] font-bold">{title}</Tag>
      {intro && <p className="mt-4 text-lg text-muted">{intro}</p>}
    </div>
  );
}

const variants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-[0_1px_2px_rgba(10,94,158,0.25)]",
  secondary: "border border-line bg-white text-ink hover:border-brand-300 hover:text-brand-700",
  whatsapp: "bg-wa text-white hover:bg-wa-dark shadow-[0_1px_2px_rgba(11,99,55,0.25)]",
  light: "bg-white text-brand-800 hover:bg-brand-50",
  ghostLight: "border border-white/35 text-white hover:bg-white/10",
  text: "px-0! text-brand-700 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-600",
} as const;
export type ButtonVariant = keyof typeof variants;

const sizes = { md: "min-h-11 px-5 text-[0.9375rem]", lg: "min-h-12 px-6 text-base", sm: "min-h-10 px-4 text-sm" };

export function buttonClass(variant: ButtonVariant = "primary", size: keyof typeof sizes = "md", className?: string) {
  return cx(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150",
    sizes[size],
    variants[variant],
    className,
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: ButtonVariant; size?: keyof typeof sizes };
export function ButtonLink({ variant, size, className, ...rest }: ButtonLinkProps) {
  return <Link className={buttonClass(variant, size, className)} {...rest} />;
}

type ExternalButtonProps = ComponentProps<"a"> & { variant?: ButtonVariant; size?: keyof typeof sizes };
export function ExternalButton({ variant, size, className, ...rest }: ExternalButtonProps) {
  const isHttp = typeof rest.href === "string" && rest.href.startsWith("http");
  return (
    <a
      className={buttonClass(variant, size, className)}
      {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    />
  );
}
