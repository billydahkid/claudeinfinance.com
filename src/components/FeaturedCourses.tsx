import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getFeaturedCourses } from "@/data/courses";
import type { Locale } from "@/i18n/routing";
import CourseCard from "./CourseCard";

export default function FeaturedCourses() {
  const t = useTranslations("featuredCourses");
  const locale = useLocale() as Locale;
  const courses = getFeaturedCourses();

  if (courses.length === 0) return null;

  return (
    <section className="border-b border-line bg-cream-100/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl">
            <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t("title")}
            </h2>
            <p className="prose-serif mt-3 text-ink-soft">{t("subtitle")}</p>
          </div>
          <Link
            href="/formations"
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-terracotta hover:text-terracotta-dark"
          >
            {t("viewAll")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
