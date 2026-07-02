import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-3xl">
          <p className="eyebrow text-terracotta">{t("title")}</p>
          <p className="prose-serif mt-5 text-2xl leading-relaxed text-ink sm:text-[1.7rem]">
            {t("body")}
          </p>
          <p className="prose-serif mt-6 text-sm text-ink-muted">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </section>
  );
}
