import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
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
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-terracotta"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("backToHome")}
      </Link>

      <div className="mt-6 flex items-start gap-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-terracotta/10 text-terracotta">
          <Icon className="h-7 w-7" />
        </span>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {category.name[l]}
          </h1>
          <p className="mt-2 max-w-2xl text-lg text-ink-soft">
            {category.description[l]}
          </p>
        </div>
      </div>

      <h2 className="mt-12 text-xl font-semibold text-ink">
        {t("skillsTitle")}
      </h2>

      {categorySkills.length > 0 ? (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categorySkills.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} locale={l} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-ink-muted">{t("empty")}</p>
      )}
    </div>
  );
}
