import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Building2, GraduationCap, ArrowUpRight } from "lucide-react";
import { FORWARD_DEPLOY_CONTACT } from "@/config";
import { fdUtm } from "@/data/offer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "organisationsPage" });
  return { title: `${t("title")} - ClaudeInFinance`, description: t("intro") };
}

export default async function OrganisationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("organisationsPage");

  const cards = [
    {
      icon: Building2,
      title: t("teamsTitle"),
      body: t("teamsBody"),
      cta: t("teamsCta"),
      href: fdUtm(FORWARD_DEPLOY_CONTACT, "orgpage-teams"),
    },
    {
      icon: GraduationCap,
      title: t("schoolsTitle"),
      body: t("schoolsBody"),
      cta: t("schoolsCta"),
      href: fdUtm(FORWARD_DEPLOY_CONTACT, "orgpage-schools"),
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
      <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
      <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {t("title")}
      </h1>
      <p className="prose-serif mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
        {t("intro")}
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-card border border-line bg-cream-100/60 p-6 transition-colors hover:border-terracotta-light hover:bg-cream-100"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-muted transition-colors group-hover:text-terracotta" />
              </div>
              <h2 className="font-display mt-4 text-xl font-semibold text-ink">
                {card.title}
              </h2>
              <p className="prose-serif mt-1.5 flex-1 text-sm text-ink-soft">
                {card.body}
              </p>
              <span className="mt-4 font-mono text-xs uppercase tracking-wide text-terracotta">
                {card.cta}
              </span>
            </a>
          );
        })}
      </div>

      <p className="prose-serif mt-6 text-sm text-ink-muted">{t("note")}</p>
    </div>
  );
}
