import { useTranslations } from "next-intl";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function Pricing() {
  const t = useTranslations("pricing");
  const terms = t.raw("terms") as string[];

  return (
    <section className="border-b border-line bg-cream-100/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-2xl rounded-card border border-line bg-cream p-8">
          <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink">
            {t("title")}
          </h2>

          <ul className="mt-6 space-y-2.5">
            {terms.map((term) => (
              <li key={term} className="prose-serif flex gap-2 text-ink-soft">
                <Check className="mt-1 h-4 w-4 shrink-0 text-terracotta" />
                <span>{term}</span>
              </li>
            ))}
          </ul>

          <p className="prose-serif mt-6 text-sm text-ink-muted">{t("note")}</p>

          <Link
            href="/formations"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
          >
            {t("cta")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
