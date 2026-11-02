import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { courses } from "@/data/courses";
import type { Locale } from "@/i18n/routing";
import CourseCard from "@/components/CourseCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "courses" });
  return {
    title: `${t("catalogTitle")} - ClaudeInFinance`,
    description: t("catalogSubtitle"),
  };
}

export default async function FormationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const t = await getTranslations("courses");

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <p className="eyebrow text-terracotta">{t("catalogTitle")}</p>
      <h1 className="font-display mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {t("catalogTitle")}
      </h1>
      <p className="prose-serif mt-3 max-w-2xl text-lg text-ink-soft">
        {t("catalogSubtitle")}
      </p>

      {courses.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} locale={l} />
          ))}
        </div>
      ) : (
        <p className="prose-serif mt-10 text-ink-muted">{t("empty")}</p>
      )}
    </div>
  );
}
