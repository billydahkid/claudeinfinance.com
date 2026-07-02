import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { categories, getSkillsByCategory } from "@/data/skills";
import type { Locale } from "@/i18n/routing";

export default function CategoryGrid() {
  const t = useTranslations("categories");
  const locale = useLocale() as Locale;

  return (
    <section id="categories" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="eyebrow text-terracotta">{t("title")}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("subtitle")}
        </h2>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const count = getSkillsByCategory(category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group flex flex-col rounded-card border border-line bg-cream-100/60 p-5 transition-colors hover:border-terracotta-light hover:bg-cream-100"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className="h-6 w-6 text-terracotta"
                    strokeWidth={1.75}
                  />
                  <span className="font-mono text-xs text-ink-muted">
                    {t("countSkills", { count })}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                  {category.name[locale]}
                </h3>
                <p className="prose-serif mt-1.5 flex-1 text-sm leading-relaxed text-ink-muted">
                  {category.description[locale]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-terracotta">
                  {t("explore")}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
