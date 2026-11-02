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
  return { title: `${t("links.contact")} - ClaudeInFinance`, robots: { index: false } };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <ComingSoon
      eyebrow={t("footer.links.contact")}
      title={t("footer.links.contact")}
      body={t("placeholder.legalBody")}
      primary={{ href: "/", label: t("placeholder.backHome") }}
    />
  );
}
