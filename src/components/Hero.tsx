import { useTranslations } from "next-intl";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { skills, categories } from "@/data/skills";
import { locales } from "@/i18n/routing";

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: skills.length, label: t("stats.skills") },
    { value: categories.length, label: t("stats.categories") },
    { value: locales.length, label: t("stats.languages") },
  ];

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 30rem at 70% -10%, rgba(217,119,87,0.12), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cream-200 bg-white px-3 py-1 text-xs font-medium text-ink-soft">
            <Sparkles className="h-3.5 w-3.5 text-terracotta" />
            {t("badge")}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-soft">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#skills"
              className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
            >
              {t("ctaPrimary")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#categories"
              className="inline-flex items-center gap-1.5 rounded-full border border-cream-200 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-terracotta-light"
            >
              {t("ctaSecondary")}
            </Link>
          </div>

          <dl className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-card border border-cream-200 bg-white px-3 py-4"
              >
                <dt className="text-2xl font-bold text-terracotta">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs text-ink-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
