"use client";

import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function change(next: Locale) {
    if (next === locale) return;
    startTransition(() => {
      // @ts-expect-error -- params are forwarded to the typed navigation helper
      router.replace({ pathname, params }, { locale: next });
    });
  }

  return (
    <div
      className="inline-flex items-center rounded border border-line bg-cream-100/60 p-0.5 font-mono text-xs"
      role="group"
      aria-busy={isPending}
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => change(l)}
            aria-current={active ? "true" : undefined}
            className={
              "rounded px-2 py-1 uppercase tracking-wide transition-colors " +
              (active ? "bg-ink text-cream" : "text-ink-muted hover:text-ink")
            }
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
