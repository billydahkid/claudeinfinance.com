import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { FORWARD_DEPLOY_URL } from "@/config";

export default function Credibility() {
  const t = useTranslations("credibility");

  return (
    <section className="border-b border-line bg-cream-100/50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="prose-serif mt-4 text-lg leading-relaxed text-ink-soft">
            {t("body")}
          </p>
          <a
            href={FORWARD_DEPLOY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-terracotta hover:text-terracotta-dark"
          >
            {t("poweredBy")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
