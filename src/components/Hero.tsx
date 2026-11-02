import { useTranslations } from "next-intl";
import { ArrowRight, FileText, ScanLine, BarChart3, FileCheck } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");
  const tags = t.raw("tags") as string[];
  const flowLabels = t.raw("flow") as string[];

  const flow = [
    { icon: FileText, key: "documents" },
    { icon: ScanLine, key: "extraction" },
    { icon: BarChart3, key: "analyse" },
    { icon: FileCheck, key: "livrable" },
  ];

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
        <p className="eyebrow animate-hero-in text-terracotta">{t("eyebrow")}</p>

        <h1
          className="animate-hero-in mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {t("title")}
        </h1>

        <p
          className="prose-serif animate-hero-in mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft"
          style={{ animationDelay: "160ms" }}
        >
          {t("subtitle")}
        </p>

        <div
          className="animate-hero-in mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <Link
            href="/formations"
            className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
          >
            {t("ctaPrimary")}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-terracotta-light"
          >
            {t("ctaSecondary")}
          </Link>
        </div>

        <div
          className="animate-hero-in mt-6 flex flex-wrap gap-1.5"
          style={{ animationDelay: "320ms" }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-line px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Readable finance workflow visual (no decorative animation) */}
        <div
          className="animate-hero-in mt-12 overflow-x-auto"
          style={{ animationDelay: "400ms" }}
        >
          <div className="flex min-w-max items-center gap-2 rounded-card border border-line bg-cream-100/60 p-3">
            {flow.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.key} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2">
                    <Icon className="h-4 w-4 text-terracotta" />
                    <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                      {flowLabels[i]}
                    </span>
                  </div>
                  {i < flow.length - 1 && (
                    <ArrowRight className="h-4 w-4 shrink-0 text-ink-muted" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
