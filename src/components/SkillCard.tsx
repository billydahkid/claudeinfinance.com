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
      className="group flex h-full flex-col rounded-card border border-line bg-cream-100/60 p-5 transition-colors hover:border-terracotta-light hover:bg-cream-100"
    >
      <div className="flex items-start justify-between gap-3">
        {category && (
          <span className="eyebrow text-terracotta">
            {category.name[locale]}
          </span>
        )}
        <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-colors group-hover:text-terracotta" />
      </div>

      <h3 className="font-display mt-3 text-xl font-semibold leading-snug text-ink">
        {skill.name[locale]}
      </h3>
      <p className="prose-serif mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
        {skill.summary[locale]}
      </p>

      <div className="mt-5 border-t border-line pt-3">
        <div className="flex flex-wrap gap-1.5">
          {skill.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded border border-line px-1.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
