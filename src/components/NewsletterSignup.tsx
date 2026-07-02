"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterSignup() {
  const t = useTranslations("footer.newsletter");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder handler: wire up to a real provider later.
    if (email.trim() === "") return;
    setDone(true);
  }

  return (
    <div>
      <p className="eyebrow text-ink-muted">{t("label")}</p>
      {done ? (
        <p className="mt-3 inline-flex items-center gap-1.5 font-mono text-sm text-terracotta">
          <Check className="h-4 w-4" />
          {t("success")}
        </p>
      ) : (
        <form
          onSubmit={submit}
          className="mt-3 flex max-w-md items-stretch overflow-hidden rounded border border-line bg-cream-100/60"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("placeholder")}
            aria-label={t("label")}
            className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-ink outline-none placeholder:text-ink-muted"
          />
          <button
            type="submit"
            className="inline-flex shrink-0 items-center gap-1.5 bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-ink-soft"
          >
            {t("subscribe")}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}
      <p className="prose-serif mt-2 text-xs text-ink-muted">{t("hint")}</p>
    </div>
  );
}
