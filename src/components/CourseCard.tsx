import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Course } from "@/data/courses";
import type { Locale } from "@/i18n/routing";

type Props = {
  course: Course;
  locale: Locale;
};

export default function CourseCard({ course, locale }: Props) {
  const tCommon = useTranslations("common");
  const tCourses = useTranslations("featuredCourses");

  const isOpen = course.status === "available";

  return (
    <Link
      href={`/formations/${course.slug}`}
      className="group flex h-full flex-col rounded-card border border-line bg-cream-100/60 p-5 transition-colors hover:border-terracotta-light hover:bg-cream-100"
    >
      <div className="flex items-start justify-between gap-3">
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
        <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-colors group-hover:text-terracotta" />
      </div>

      <h3 className="font-display mt-3 text-xl font-semibold leading-snug text-ink">
        {course.title[locale]}
      </h3>
      <p className="prose-serif mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
        {course.summary[locale]}
      </p>

      <div className="mt-5 border-t border-line pt-3">
        <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-terracotta">
          {tCourses("detailsCta")}
        </span>
      </div>
    </Link>
  );
}
