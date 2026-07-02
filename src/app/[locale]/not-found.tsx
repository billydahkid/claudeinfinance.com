import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <span className="text-6xl font-bold text-terracotta">404</span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink">
        {t("title")}
      </h1>
      <p className="mt-3 text-ink-soft">{t("body")}</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
      >
        {t("cta")}
      </Link>
    </div>
  );
}
