import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "certificationPage" });
  return { title: `${t("title")} - ClaudeInFinance`, description: t("intro") };
}

type Step = { title: string; body: string };

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("certificationPage");
  const tc = await getTranslations("certification");
  const steps = tc.raw("steps") as Step[];

  const blocks = [
    { title: t("criteriaTitle"), body: t("criteriaBody") },
    { title: t("validityTitle"), body: t("validityBody") },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
      <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
      <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {t("title")}
      </h1>
      <p className="prose-serif mt-5 text-lg leading-relaxed text-ink-soft">
        {t("intro")}
      </p>

      <h2 className="font-display mt-12 text-2xl font-semibold tracking-tight text-ink">
        {t("stepsTitle")}
      </h2>
      <ol className="mt-5 grid gap-3 sm:grid-cols-2">
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="rounded-card border border-line bg-cream-100/60 p-4"
          >
            <span className="font-mono text-xs text-ink-muted">0{i + 1}</span>
            <h3 className="font-display mt-1 font-semibold text-ink">
              {step.title}
            </h3>
            <p className="prose-serif mt-1 text-sm text-ink-muted">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      <div className="mt-12 space-y-8">
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
      </div>

      <Link
        href="/formations"
        className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
      >
        {t("backCta")}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
