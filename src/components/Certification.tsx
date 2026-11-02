import { useTranslations } from "next-intl";
import { ArrowRight, GraduationCap, Hammer, ClipboardCheck, Award } from "lucide-react";
import { Link } from "@/i18n/navigation";

type Step = { title: string; body: string };

export default function Certification() {
  const t = useTranslations("certification");
  const steps = t.raw("steps") as Step[];
  const icons = [GraduationCap, Hammer, ClipboardCheck, Award];

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("title")}
        </h2>

        <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = icons[i] ?? GraduationCap;
            return (
              <li
                key={step.title}
                className="flex flex-col rounded-card border border-line bg-cream-100/60 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="mt-3 font-mono text-xs text-ink-muted">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-1 text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="prose-serif mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="prose-serif max-w-2xl text-sm text-ink-soft">
            {t("accessNote")} {t("disclaimer")}
          </p>
          <Link
            href="/certification"
            className="inline-flex shrink-0 items-center gap-1 font-mono text-xs uppercase tracking-wide text-terracotta hover:text-terracotta-dark"
          >
            {t("learnMore")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
