import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { FORWARD_DEPLOY_URL } from "@/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  return { title: `${t("eyebrow")} - ClaudeInFinance`, description: t("mission") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("aboutPage");

  const blocks = [
    { title: t("methodTitle"), body: t("methodBody") },
    { title: t("toolsTitle"), body: t("toolsBody") },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
      <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
      <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {t("title")}
      </h1>
      <p className="prose-serif mt-5 text-xl leading-relaxed text-ink-soft">
        {t("mission")}
      </p>

      <div className="mt-12 space-y-10">
        {blocks.map((b) => (
          <div key={b.title}>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              {b.title}
            </h2>
            <p className="prose-serif mt-3 leading-relaxed text-ink-soft">
              {b.body}
            </p>
          </div>
        ))}

        <div className="rounded-card border border-line bg-cream-100/60 p-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            {t("fdTitle")}
          </h2>
          <p className="prose-serif mt-3 leading-relaxed text-ink-soft">
            {t("fdBody")}
          </p>
          <a
            href={FORWARD_DEPLOY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-terracotta hover:text-terracotta-dark"
          >
            {t("fdCta")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
