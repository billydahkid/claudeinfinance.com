import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import SkillExplorer from "@/components/SkillExplorer";
import OfficialSkills from "@/components/OfficialSkills";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "skillsPreview" });
  return { title: `${t("title")} - ClaudeInFinance`, description: t("subtitle") };
}

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("skillsPreview");

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-14 sm:px-6">
          <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
          <h1 className="font-display mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {t("title")}
          </h1>
          <p className="prose-serif mt-3 max-w-2xl text-lg text-ink-soft">
            {t("subtitle")}
          </p>
        </div>
      </section>
      <SkillExplorer />
      <OfficialSkills />
    </>
  );
}
