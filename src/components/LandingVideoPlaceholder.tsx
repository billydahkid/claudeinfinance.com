"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";

export default function LandingVideoPlaceholder() {
  const t = useTranslations("hero.video");
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setRevealed(true)}
        aria-label={t("label")}
        className="group relative block aspect-video w-full overflow-hidden rounded-card border border-line bg-ink"
      >
        {/* Poster: abstract, no invented UI, no fake video */}
        <span
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 70% 20%, rgba(217,119,87,0.35), transparent 60%), linear-gradient(140deg, #1c1a17, #2a2622)",
          }}
        />
        <span className="absolute left-3 top-3 rounded border border-white/20 px-1.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-wide text-cream/80">
          {t("badge")}
        </span>

        {revealed ? (
          <span className="absolute inset-0 flex items-center justify-center px-4 text-center">
            <span className="prose-serif text-sm text-cream/80">
              {t("comingSoon")}
            </span>
          </span>
        ) : (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 text-ink transition-transform group-hover:scale-105">
              <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
            </span>
            <span className="font-mono text-xs uppercase tracking-wide text-cream/80">
              {t("label")}
            </span>
          </span>
        )}
      </button>
    </div>
  );
}
