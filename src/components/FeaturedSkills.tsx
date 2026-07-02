import { useLocale, useTranslations } from "next-intl";
import { getFeaturedSkills } from "@/data/skills";
import type { Locale } from "@/i18n/routing";
import SkillCard from "./SkillCard";

export default function FeaturedSkills() {
  const t = useTranslations("featured");
  const locale = useLocale() as Locale;
  const featured = getFeaturedSkills();

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="eyebrow text-terracotta">{t("title")}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("subtitle")}
        </h2>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
