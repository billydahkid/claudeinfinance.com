"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Search, X } from "lucide-react";
import { skills, categories, getSkillsByCategory } from "@/data/skills";
import type { Locale } from "@/i18n/routing";
import SkillCard from "./SkillCard";

export default function SkillExplorer() {
  const t = useTranslations("explorer");
  const locale = useLocale() as Locale;

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const category of categories) {
      map[category.slug] = getSkillsByCategory(category.slug).length;
    }
    return map;
  }, []);

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

  const pillBase =
    "inline-flex items-center gap-1.5 rounded border px-2.5 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors";

  return (
    <section id="skills" className="scroll-mt-16 border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Search */}
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("searchPlaceholder")}
            aria-label={t("searchPlaceholder")}
            className="w-full rounded border border-line bg-cream-100/60 py-3 pl-11 pr-4 text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-terracotta focus:bg-cream-100"
          />
        </div>

        {/* Filter by category */}
        <div className="mt-8">
          <p className="eyebrow text-ink-muted">{t("filterByCategory")}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className={
                pillBase +
                " " +
                (activeCategory === null
                  ? "border-ink bg-ink text-cream"
                  : "border-line text-ink-soft hover:border-terracotta-light")
              }
            >
              {t("all")}
              <span className="text-[0.65rem] opacity-60">{skills.length}</span>
            </button>
            {categories.map((category) => {
              const active = activeCategory === category.slug;
              return (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => setActiveCategory(category.slug)}
                  className={
                    pillBase +
                    " " +
                    (active
                      ? "border-ink bg-ink text-cream"
                      : "border-line text-ink-soft hover:border-terracotta-light")
                  }
                >
                  {category.name[locale]}
                  <span className="text-[0.65rem] opacity-60">
                    {counts[category.slug]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results header */}
        <div className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-5">
          <p className="font-mono text-sm text-ink-muted">
            {t("resultsCount", { count: filtered.length })}
          </p>
          {hasFilter && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-terracotta hover:text-terracotta-dark"
            >
              <X className="h-3.5 w-3.5" />
              {t("reset")}
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((skill) => (
              <SkillCard key={skill.slug} skill={skill} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="prose-serif mt-6 rounded-card border border-dashed border-line bg-cream-100/50 p-12 text-center text-ink-muted">
            {t("empty")}
          </div>
        )}
      </div>
    </section>
  );
}
