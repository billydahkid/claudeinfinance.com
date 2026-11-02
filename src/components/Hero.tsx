"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import LandingVideoPlaceholder from "./LandingVideoPlaceholder";

export default function Hero() {
  const t = useTranslations("hero");
  const tags = t.raw("tags") as string[];
  const prefix = t("rotate.prefix");
  const words = t.raw("rotate.words") as string[];

  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2100);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-4xl px-4 pb-14 pt-16 text-center sm:px-6 sm:pb-16 sm:pt-20">
        <p className="eyebrow animate-hero-in text-terracotta">{t("eyebrow")}</p>

        <h1
          className="animate-hero-in mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {t("title")}
          <br />
          <span className="whitespace-nowrap font-body font-normal italic text-terracotta">
            {prefix}
            <span key={i} className="rotating-word animate-word-in">
              {words[i]}
            </span>
            .
          </span>
        </h1>

        <p
          className="prose-serif animate-hero-in mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft"
          style={{ animationDelay: "160ms" }}
        >
          {t("subtitle")}
        </p>

        <div
          className="animate-hero-in mt-8 flex flex-wrap items-center justify-center gap-3"
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
          className="animate-hero-in mt-5 flex flex-wrap justify-center gap-1.5"
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

        {/* Video below the copy */}
        <div
          className="animate-hero-in mx-auto mt-12 max-w-3xl"
          style={{ animationDelay: "420ms" }}
        >
          <LandingVideoPlaceholder />
        </div>
      </div>
    </section>
  );
}
