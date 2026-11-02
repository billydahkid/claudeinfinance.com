import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function FinalCta() {
  const t = useTranslations("finalCta");

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="prose-serif mx-auto mt-4 max-w-xl text-lg text-ink-soft">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/formations"
              className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
            >
              {t("cta")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/skills"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-terracotta-light"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
