import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { getOfficialSkills, ANTHROPIC_REPO } from "@/data/skills";
import type { Locale } from "@/i18n/routing";
import SkillCard from "./SkillCard";

export default function OfficialSkills() {
  const t = useTranslations("official");
  const locale = useLocale() as Locale;
  const official = getOfficialSkills();

  if (official.length === 0) return null;

  return (
    <section className="border-b border-line bg-cream-100/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl">
            <p className="eyebrow text-terracotta">{t("title")}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t("subtitle")}
            </h2>
          </div>
          <a
            href={ANTHROPIC_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-terracotta hover:text-terracotta-dark"
          >
            anthropics/financial-services
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {official.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
