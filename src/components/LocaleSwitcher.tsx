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
      className="inline-flex items-center rounded-full border border-cream-200 bg-white p-0.5 text-sm font-medium"
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
              "rounded-full px-3 py-1 uppercase transition-colors " +
              (active
                ? "bg-terracotta text-white"
                : "text-ink-muted hover:text-ink")
            }
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
