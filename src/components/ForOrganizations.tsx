import { useTranslations } from "next-intl";
import { Building2, GraduationCap, ArrowUpRight } from "lucide-react";
import { FORWARD_DEPLOY_URL } from "@/config";
import { fdUtm } from "@/data/offer";

export default function ForOrganizations() {
  const t = useTranslations("organizations");

  const cards = [
    {
      icon: Building2,
      title: t("teams.title"),
      body: t("teams.body"),
      cta: t("teams.cta"),
      href: fdUtm(FORWARD_DEPLOY_URL, "teams"),
    },
    {
      icon: GraduationCap,
      title: t("schools.title"),
      body: t("schools.body"),
      cta: t("schools.cta"),
      href: fdUtm(FORWARD_DEPLOY_URL, "schools"),
    },
  ];

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("title")}
        </h2>
        <p className="prose-serif mt-3 max-w-2xl text-ink-soft">
          {t("subtitle")}
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2">
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
                <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                  {card.title}
                </h3>
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
      </div>
    </section>
  );
}
