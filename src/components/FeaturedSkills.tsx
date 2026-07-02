import { useLocale, useTranslations } from "next-intl";
import { getFeaturedSkills } from "@/data/skills";
import type { Locale } from "@/i18n/routing";
import SkillCard from "./SkillCard";

export default function FeaturedSkills() {
  const t = useTranslations("featured");
  const locale = useLocale() as Locale;
  const featured = getFeaturedSkills();

  return (
    <section className="bg-cream-100">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-ink-soft">{t("subtitle")}</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((skill) => (
            <SkillCard key={skill.slug} skill={skill} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
