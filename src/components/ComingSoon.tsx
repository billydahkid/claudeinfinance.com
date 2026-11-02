import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export default function ComingSoon({
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: Props) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-28">
      <p className="eyebrow text-terracotta">{eyebrow}</p>
      <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {title}
      </h1>
      <p className="prose-serif mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
        {body}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        {primary && (
          <Link
            href={primary.href}
            className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
          >
            {primary.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
        {secondary && (
          <Link
            href={secondary.href}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-terracotta-light"
          >
            {secondary.label}
          </Link>
        )}
      </div>
    </div>
  );
}
