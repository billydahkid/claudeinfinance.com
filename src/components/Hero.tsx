"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { skills, categories } from "@/data/skills";
import { locales } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";

/**
 * Phrase qui tourne dans le titre.
 * FR: "au service de la finance" -> "au service du M&A" -> ...
 * EN: "built for finance" -> "built for M&A" -> ...
 * (Le prefix reprend exactement le debut de hero.titleLine2 des messages.)
 */
const ROTATION: Record<string, { prefix: string; words: string[] }> = {
  fr: {
    prefix: "au service ",
    words: [
      "de la finance",
      "du M&A",
      "du Private Equity",
      "du Venture Capital",
      "des marches",
      "de l'audit",
      "de la data",
    ],
  },
  en: {
    prefix: "built for ",
    words: [
      "finance",
      "M&A",
      "Private Equity",
      "Venture Capital",
      "markets",
      "audit",
      "data",
    ],
  },
};

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale() as Locale;
  const rotation = ROTATION[locale] ?? ROTATION.fr;

  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setI((n) => (n + 1) % rotation.words.length),
      2100,
    );
    return () => clearInterval(id);
  }, [rotation.words.length]);

  const stats = [
    { value: String(skills.length), label: t("stats.skills") },
    { value: String(categories.length), label: t("stats.categories") },
    { value: String(locales.length), label: t("stats.languages") },
  ];

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20">
        <p className="eyebrow animate-hero-in text-terracotta">
          {t("eyebrow")}
        </p>

        {/* flex-nowrap + flex-1 sur le h1 : les stats restent fixees a droite,
            la largeur du h1 ne bouge pas quand le mot change. */}
        <div className="mt-5 flex flex-nowrap items-end justify-between gap-10">
          <h1
            className="animate-hero-in min-w-0 flex-1 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            {t("titleLine1")}
            <br />
            {/* whitespace-nowrap : la 2e ligne ne se casse jamais -> titre sur 2 lignes */}
            <span className="whitespace-nowrap font-body font-normal italic text-terracotta">
              {rotation.prefix}
              <span key={i} className="rotating-word animate-word-in">
                {rotation.words[i]}
              </span>
              .
            </span>
          </h1>

          <dl
            className="animate-hero-in flex shrink-0 items-end gap-7"
            style={{ animationDelay: "160ms" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-mono text-2xl font-semibold text-ink">
                  {s.value}
                </dt>
                <dd className="eyebrow mt-1 text-ink-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p
          className="prose-serif animate-hero-in mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft"
          style={{ animationDelay: "240ms" }}
        >
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}
