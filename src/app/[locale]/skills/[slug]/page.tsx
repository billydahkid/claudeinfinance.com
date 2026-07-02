import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ChevronRight, Sparkles, ArrowUpRight } from "lucide-react";
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
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink-muted">
        <Link href="/" className="hover:text-terracotta">
          {t("breadcrumbHome")}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        {category && (
          <>
            <Link
              href={`/categories/${category.slug}`}
              className="hover:text-terracotta"
            >
              {category.name[l]}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
          </>
        )}
        <span className="text-ink-soft">{skill.slug}</span>
      </nav>

      {/* Title block */}
      <div className="mt-8">
        {category && (
          <p className="eyebrow text-terracotta">{category.name[l]}</p>
        )}
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {skill.name[l]}
        </h1>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_18rem]">
        {/* Main column */}
        <div>
          <p className="eyebrow text-terracotta">{t("note")}</p>
          <p className="prose-serif mt-4 text-xl leading-relaxed text-ink">
            {skill.summary[l]}
          </p>

          {/* Prompt box */}
          <div className="mt-8 overflow-hidden rounded-card border border-ink/10 bg-ink">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
              <span className="font-mono text-xs uppercase tracking-wide text-cream/60">
                {t("promptTitle")}
              </span>
              <CopyPromptButton prompt={skill.prompt[l]} />
            </div>
            <pre className="prose-serif overflow-x-auto whitespace-pre-wrap px-5 py-5 text-[0.95rem] leading-relaxed text-cream/90">
              {skill.prompt[l]}
            </pre>
          </div>

          {/* Secondary action, mirroring the "voir le depot source" button */}
          <a
            href="https://claude.ai/new"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-3 flex items-center justify-between rounded-card border border-line bg-cream-100/60 px-4 py-3 transition-colors hover:border-terracotta-light hover:bg-cream-100"
          >
            <span className="flex items-center gap-2 text-sm font-medium text-ink">
              <Sparkles className="h-4 w-4 text-terracotta" />
              {t("openInClaude")}
            </span>
            <ArrowUpRight className="h-4 w-4 text-ink-muted transition-colors group-hover:text-terracotta" />
          </a>

          <p className="prose-serif mt-3 text-sm text-ink-muted">
            {t("promptHint")}
          </p>
        </div>

        {/* Sidebar */}
        <aside className="lg:border-l lg:border-line lg:pl-8">
          <p className="eyebrow text-ink-muted">{t("tags")}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {skill.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-line px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-ink-soft"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="eyebrow mt-8 text-ink-muted">{t("metadata")}</p>
          <dl className="mt-3 space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between gap-3 border-b border-line pb-2">
              <dt className="uppercase tracking-wide text-ink-muted">
                {t("metaCategory")}
              </dt>
              <dd className="text-ink-soft">{category?.name[l]}</dd>
            </div>
            <div className="flex items-center justify-between gap-3 border-b border-line pb-2">
              <dt className="uppercase tracking-wide text-ink-muted">
                {t("metaLanguage")}
              </dt>
              <dd className="uppercase text-ink-soft">{l}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="uppercase tracking-wide text-ink-muted">
                {t("metaSlug")}
              </dt>
              <dd className="text-ink-soft">{skill.slug}</dd>
            </div>
          </dl>
        </aside>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-16 border-t border-line pt-10">
          <p className="eyebrow text-terracotta">{t("related")}</p>
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
