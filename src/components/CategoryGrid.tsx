import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { categories, getSkillsByCategory } from "@/data/skills";
import type { Locale } from "@/i18n/routing";

export default function CategoryGrid() {
  const t = useTranslations("categories");
  const locale = useLocale() as Locale;

  return (
    <section id="categories" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-ink-soft">{t("subtitle")}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const count = getSkillsByCategory(category.slug).length;
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group flex flex-col rounded-card border border-cream-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-terracotta-light hover:shadow-lg hover:shadow-terracotta/5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-semibold text-ink">
                  {category.name[locale]}
                </h3>
                <p className="mt-1.5 flex-1 text-sm text-ink-muted">
                  {category.description[locale]}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-terracotta">
                  {t("countSkills", { count })}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
