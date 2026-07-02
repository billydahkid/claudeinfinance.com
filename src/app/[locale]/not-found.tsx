import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <span className="font-mono text-6xl font-semibold text-terracotta">
        404
      </span>
      <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink">
        {t("title")}
      </h1>
      <p className="prose-serif mt-3 text-lg text-ink-soft">{t("body")}</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-terracotta hover:text-terracotta-dark"
      >
        {t("cta")}
      </Link>
    </div>
  );
}
