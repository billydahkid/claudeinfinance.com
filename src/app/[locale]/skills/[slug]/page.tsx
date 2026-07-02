import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, Tag } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import {
  skills,
  getSkill,
  getCategory,
  getSkillsByCategory,
} from "@/data/skills";
import CopyPromptButton from "@/components/CopyPromptButton";
import SkillCard from "@/components/SkillCard";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    skills.map((skill) => ({ locale, slug: skill.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const skill = getSkill(slug);
  if (!skill) return {};
  const l = locale as Locale;
  return {
    title: `${skill.name[l]} - ClaudeInFinance`,
    description: skill.summary[l],
  };
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const skill = getSkill(slug);
  if (!skill) notFound();

  const t = await getTranslations("skill");
  const category = getCategory(skill.category);
  const related = getSkillsByCategory(skill.category)
    .filter((s) => s.slug !== skill.slug)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-terracotta"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("backToHome")}
      </Link>

      <div className="mt-6">
        {category && (
          <Link
            href={`/categories/${category.slug}`}
            className="inline-flex items-center rounded-full bg-cream-100 px-3 py-1 text-xs font-medium text-ink-soft hover:text-terracotta"
          >
            {category.name[l]}
          </Link>
        )}
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {skill.name[l]}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          {skill.summary[l]}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Tag className="h-4 w-4 text-ink-muted" />
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-cream-100 px-2 py-0.5 text-xs text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-card border border-cream-200 bg-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-ink">
              {t("promptTitle")}
            </h2>
            <p className="mt-1 text-sm text-ink-muted">{t("promptHint")}</p>
          </div>
          <CopyPromptButton prompt={skill.prompt[l]} />
        </div>
        <pre className="mt-5 whitespace-pre-wrap rounded-xl bg-cream-100 p-5 font-sans text-sm leading-relaxed text-ink-soft">
          {skill.prompt[l]}
        </pre>
      </div>

      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            {t("related")}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <SkillCard key={s.slug} skill={s} locale={l} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
