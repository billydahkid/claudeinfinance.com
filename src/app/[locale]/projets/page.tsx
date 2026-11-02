import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ComingSoon from "@/components/ComingSoon";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "footer" });
  return { title: `${t("links.projets")} - ClaudeInFinance`, robots: { index: false } };
}

export default async function ProjetsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <ComingSoon
      eyebrow={t("footer.links.projets")}
      title={t("placeholder.comingSoon")}
      body={t("placeholder.comingSoonBody")}
      primary={{ href: "/formations", label: t("placeholder.browseCourses") }}
      secondary={{ href: "/skills", label: t("placeholder.browseSkills") }}
    />
  );
}
