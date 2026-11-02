import { useTranslations } from "next-intl";
import { GraduationCap, Bot, Workflow } from "lucide-react";

export default function LearnBuildAutomate() {
  const t = useTranslations("lba");

  const cards = [
    { icon: GraduationCap, key: "learn" },
    { icon: Bot, key: "build" },
    { icon: Workflow, key: "automate" },
  ] as const;

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.key}
                className="flex flex-col rounded-card border border-line bg-cream-100/60 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold text-ink">
                  {t(`${card.key}.title`)}
                </h3>
                <p className="prose-serif mt-2 text-sm leading-relaxed text-ink-soft">
                  {t(`${card.key}.body`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
