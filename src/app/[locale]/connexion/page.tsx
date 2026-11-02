import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ComingSoon from "@/components/ComingSoon";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "header" });
  return { title: `${t("login")} - ClaudeInFinance`, robots: { index: false } };
}

export default async function ConnexionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <ComingSoon
      eyebrow={t("header.login")}
      title={t("placeholder.comingSoon")}
      body={t("placeholder.loginBody")}
      primary={{ href: "/formations", label: t("placeholder.browseCourses") }}
      secondary={{ href: "/skills", label: t("placeholder.browseSkills") }}
    />
  );
}
