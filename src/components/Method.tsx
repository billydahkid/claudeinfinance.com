import { useTranslations } from "next-intl";

type Step = { title: string; body: string };

export default function Method() {
  const t = useTranslations("method");
  const steps = t.raw("steps") as Step[];

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("title")}
        </h2>

        <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col rounded-card border border-line bg-cream-100/60 p-5"
            >
              <span className="font-mono text-xs text-ink-muted">
                {i + 1} / {steps.length}
              </span>
              <h3 className="font-display mt-2 text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="prose-serif mt-1.5 text-sm leading-relaxed text-ink-muted">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
