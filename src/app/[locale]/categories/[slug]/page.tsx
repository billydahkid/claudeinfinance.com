import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { categories, getCategory, getSkillsByCategory } from "@/data/skills";
import SkillCard from "@/components/SkillCard";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    categories.map((category) => ({ locale, slug: category.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const l = locale as Locale;
  return {
    title: `${category.name[l]} - ClaudeInFinance`,
    description: category.description[l],
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const category = getCategory(slug);
  if (!category) notFound();

  const t = await getTranslations("category");
  const categorySkills = getSkillsByCategory(category.slug);
  const Icon = category.icon;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink-muted">
        <Link href="/" className="hover:text-terracotta">
          {t("breadcrumbHome")}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-ink-soft">{category.name[l]}</span>
      </nav>

      {/* Header */}
      <div className="mt-8 flex items-start gap-4">
        <span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-card border border-line bg-cream-100/60 text-terracotta">
          <Icon className="h-6 w-6" strokeWidth={1.75} />
        </span>
        <div>
          <p className="eyebrow text-terracotta">
            {t("count", { count: categorySkills.length })}
          </p>
          <h1 className="font-display mt-2 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {category.name[l]}
          </h1>
          <p className="prose-serif mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {category.description[l]}
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-line pt-8">
        <p className="eyebrow text-ink-muted">{t("skillsTitle")}</p>
        {categorySkills.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categorySkills.map((skill) => (
              <SkillCard key={skill.slug} skill={skill} locale={l} />
            ))}
          </div>
        ) : (
          <p className="prose-serif mt-6 text-ink-muted">{t("empty")}</p>
        )}
      </div>
    </div>
  );
}
