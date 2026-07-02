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
      className="inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          {t("copied")}
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          {t("copy")}
        </>
      )}
    </button>
  );
}
