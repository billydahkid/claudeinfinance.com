import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

type Card = {
  title: string;
  context: string;
  steps: string[];
  deliverable: string;
  level: string;
};

export default function WhatYouBuild() {
  const t = useTranslations("whatYouBuild");
  const cards = t.raw("cards") as Card[];

  return (
    <section className="border-b border-line bg-cream-100/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("title")}
        </h2>
        <p className="prose-serif mt-3 max-w-2xl text-ink-soft">
          {t("subtitle")}
        </p>

        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-card border border-line bg-cream p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wide text-ink-muted">
                  {t("exampleBadge")}
                </span>
                <span className="font-mono text-[0.65rem] uppercase tracking-wide text-terracotta">
                  {card.level}
                </span>
              </div>
              <h3 className="font-display mt-3 text-lg font-semibold text-ink">
                {card.title}
              </h3>
              <p className="prose-serif mt-1.5 text-sm text-ink-soft">
                {card.context}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {card.steps.map((step, i) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <span className="rounded bg-cream-100 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-ink-soft">
                      {step}
                    </span>
                    {i < card.steps.length - 1 && (
                      <ArrowRight className="h-3 w-3 text-ink-muted" />
                    )}
                  </span>
                ))}
              </div>

              <div className="mt-4 border-t border-line pt-3">
                <span className="prose-serif text-sm text-ink">
                  {card.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
