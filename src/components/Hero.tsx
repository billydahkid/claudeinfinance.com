import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import LandingVideoPlaceholder from "./LandingVideoPlaceholder";

export default function Hero() {
  const t = useTranslations("hero");
  const tags = t.raw("tags") as string[];

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-16 sm:pt-20">
        <p className="eyebrow animate-hero-in text-terracotta">{t("eyebrow")}</p>

        <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <h1
              className="animate-hero-in font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl"
              style={{ animationDelay: "80ms" }}
            >
              {t("title")}
            </h1>
            <p
              className="prose-serif animate-hero-in mt-5 max-w-xl text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "160ms" }}
            >
              {t("subtitle")}
            </p>

            <div
              className="animate-hero-in mt-7 flex flex-wrap items-center gap-3"
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

            <p
              className="animate-hero-in mt-4 font-mono text-xs text-ink-muted"
              style={{ animationDelay: "300ms" }}
            >
              {t("microcopy")}
            </p>

            <div
              className="animate-hero-in mt-6 flex flex-wrap gap-1.5"
              style={{ animationDelay: "360ms" }}
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
          </div>

          {/* Right: video placeholder */}
          <div
            className="animate-hero-in"
            style={{ animationDelay: "280ms" }}
          >
            <LandingVideoPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}
