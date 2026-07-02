"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Search, X } from "lucide-react";
import { skills, categories } from "@/data/skills";
import type { Locale } from "@/i18n/routing";
import SkillCard from "./SkillCard";

export default function SkillExplorer() {
  const t = useTranslations("explorer");
  const locale = useLocale() as Locale;

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skills.filter((skill) => {
      if (activeCategory && skill.category !== activeCategory) return false;
      if (!q) return true;
      const haystack = [
        skill.name[locale],
        skill.summary[locale],
        ...skill.tags,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, activeCategory, locale]);

  const hasFilter = query.trim() !== "" || activeCategory !== null;

  function reset() {
    setQuery("");
    setActiveCategory(null);
  }

  return (
    <section id="skills" className="scroll-mt-20 bg-cream-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-ink-soft">{t("subtitle")}</p>
        </div>

        <div className="mt-8">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("searchPlaceholder")}
              aria-label={t("searchPlaceholder")}
              className="w-full rounded-full border border-cream-200 bg-white py-3 pl-12 pr-4 text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-terracotta"
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors " +
                (activeCategory === null
                  ? "bg-terracotta text-white"
                  : "border border-cream-200 bg-white text-ink-soft hover:border-terracotta-light")
              }
            >
              {t("all")}
            </button>
            {categories.map((category) => {
              const active = activeCategory === category.slug;
              return (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => setActiveCategory(category.slug)}
                  className={
                    "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors " +
                    (active
                      ? "bg-terracotta text-white"
                      : "border border-cream-200 bg-white text-ink-soft hover:border-terracotta-light")
                  }
                >
                  {category.name[locale]}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-sm text-ink-muted">
            {t("resultsCount", { count: filtered.length })}
          </p>
          {hasFilter && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1 text-sm font-medium text-terracotta hover:text-terracotta-dark"
            >
              <X className="h-4 w-4" />
              {t("reset")}
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((skill) => (
              <SkillCard key={skill.slug} skill={skill} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-card border border-dashed border-cream-200 bg-white p-12 text-center text-ink-muted">
            {t("empty")}
          </div>
        )}
      </div>
    </section>
  );
}
