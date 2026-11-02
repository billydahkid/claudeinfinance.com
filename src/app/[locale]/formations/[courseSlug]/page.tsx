import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ChevronRight, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { courses, getCourse } from "@/data/courses";
import NewsletterSignup from "@/components/NewsletterSignup";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    courses.map((course) => ({ locale, courseSlug: course.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; courseSlug: string }>;
}): Promise<Metadata> {
  const { locale, courseSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) return {};
  const l = locale as Locale;
  return {
    title: `${course.title[l]} - ClaudeInFinance`,
    description: course.summary[l],
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ locale: string; courseSlug: string }>;
}) {
  const { locale, courseSlug } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;

  const course = getCourse(courseSlug);
  if (!course) notFound();

  const t = await getTranslations("courses");
  const tCommon = await getTranslations("common");
  const isOpen = course.status === "available";

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Breadcrumb */}
      <nav className="flex flex-wrap items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink-muted">
        <Link href="/" className="hover:text-terracotta">
          {t("breadcrumbHome")}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/formations" className="hover:text-terracotta">
          {t("catalogTitle")}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-ink-soft">{course.slug}</span>
      </nav>

      {/* Title block */}
      <div className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow text-terracotta">
            {tCommon(`levels.${course.level}`)}
          </span>
          <span
            className={
              "rounded border px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wide " +
              (isOpen
                ? "border-terracotta/30 text-terracotta"
                : "border-line text-ink-muted")
            }
          >
            {tCommon(`status.${course.status}`)}
          </span>
        </div>
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {course.title[l]}
        </h1>
        <p className="prose-serif mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {course.summary[l]}
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_18rem]">
        {/* Main column */}
        <div>
          <p className="eyebrow text-ink-muted">{t("outcomes")}</p>
          <ul className="mt-3 space-y-2">
            {course.outcomes[l].map((o) => (
              <li
                key={o}
                className="prose-serif flex gap-2 text-ink-soft"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-terracotta" />
                <span>{o}</span>
              </li>
            ))}
          </ul>

          <p className="eyebrow mt-10 text-ink-muted">{t("syllabus")}</p>
          {course.modules && course.modules.length > 0 ? (
            <ol className="mt-3 space-y-3">
              {course.modules.map((m, i) => (
                <li
                  key={m.title[l]}
                  className="rounded-card border border-line bg-cream-100/60 p-4"
                >
                  <h3 className="font-display font-semibold text-ink">
                    {i + 1}. {m.title[l]}
                  </h3>
                  <ul className="prose-serif mt-2 space-y-1 text-sm text-ink-muted">
                    {m.lessons.map((lesson) => (
                      <li key={lesson[l]}>{lesson[l]}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          ) : (
            <p className="prose-serif mt-3 text-sm text-ink-muted">
              {t("syllabusEmpty")}
            </p>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:border-l lg:border-line lg:pl-8">
          <p className="eyebrow text-ink-muted">{t("audience")}</p>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
            {course.audience[l].map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>

          <p className="eyebrow mt-8 text-ink-muted">{t("tools")}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {course.tools.map((tool) => (
              <span
                key={tool}
                className="rounded border border-line px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-ink-soft"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Status / CTA */}
          <div className="mt-8 rounded-card border border-line bg-cream-100/60 p-4">
            <p className="prose-serif text-sm text-ink-soft">
              {t("comingSoonNote")}
            </p>
            <div className="mt-4">
              <NewsletterSignup />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
