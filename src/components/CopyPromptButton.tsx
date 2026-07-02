"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Copy } from "lucide-react";

type Props = {
  prompt: string;
};

export default function CopyPromptButton({ prompt }: Props) {
  const t = useTranslations("skill");
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; silently ignore.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-cream/70 transition-colors hover:text-cream"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          {t("copied")}
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          {t("copy")}
        </>
      )}
    </button>
  );
}
