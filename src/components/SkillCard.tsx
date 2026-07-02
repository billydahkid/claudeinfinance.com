import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getCategory, type Skill } from "@/data/skills";
import type { Locale } from "@/i18n/routing";

type Props = {
  skill: Skill;
  locale: Locale;
};

export default function SkillCard({ skill, locale }: Props) {
  const category = getCategory(skill.category);

  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="group flex h-full flex-col rounded-card border border-cream-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-terracotta-light hover:shadow-lg hover:shadow-terracotta/5"
    >
      <div className="flex items-start justify-between gap-3">
        {category && (
          <span className="inline-flex items-center rounded-full bg-cream-100 px-2.5 py-1 text-xs font-medium text-ink-soft">
            {category.name[locale]}
          </span>
        )}
        <ArrowUpRight className="h-5 w-5 shrink-0 text-ink-muted transition-colors group-hover:text-terracotta" />
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug text-ink">
        {skill.name[locale]}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {skill.summary[locale]}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {skill.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-cream-100 px-2 py-0.5 text-xs text-ink-soft"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
