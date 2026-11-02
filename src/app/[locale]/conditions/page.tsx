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
  return { title: `${t("links.terms")} - ClaudeInFinance`, robots: { index: false } };
}

export default async function ConditionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <ComingSoon
      eyebrow={t("footer.links.terms")}
      title={t("footer.links.terms")}
      body={t("placeholder.legalBody")}
      primary={{ href: "/", label: t("placeholder.backHome") }}
    />
  );
}
