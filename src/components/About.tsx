import { useTranslations } from "next-intl";
import { Info } from "lucide-react";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-card border border-cream-200 bg-white p-8 sm:p-12">
          <div className="mx-auto max-w-3xl">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
              <Info className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {t("body")}
            </p>
            <p className="mt-4 text-sm text-ink-muted">{t("disclaimer")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
