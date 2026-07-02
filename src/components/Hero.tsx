import { useTranslations } from "next-intl";
import { skills, categories } from "@/data/skills";
import { locales } from "@/i18n/routing";

export default function Hero() {
  const t = useTranslations("hero");

  const stats = [
    { value: String(skills.length), label: t("stats.skills") },
    { value: String(categories.length), label: t("stats.categories") },
    { value: String(locales.length), label: t("stats.languages") },
  ];

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20">
        <p className="eyebrow text-terracotta">{t("eyebrow")}</p>

        <div className="mt-5 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h1 className="font-display text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl">
            {t("titleLine1")}
            <br />
            <span className="font-body font-normal italic text-terracotta">
              {t("titleLine2")}
            </span>
          </h1>

          <dl className="flex shrink-0 items-end gap-7">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-2xl font-semibold text-ink">
                  {s.value}
                </dt>
                <dd className="eyebrow mt-1 text-ink-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="prose-serif mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}
