import { useTranslations } from "next-intl";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="sticky top-0 z-50 border-b border-cream-200 bg-cream/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-ink"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-terracotta text-white">
            <TrendingUp className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="text-lg tracking-tight">{t("brand")}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-soft md:flex">
          <Link href="/#categories" className="hover:text-terracotta">
            {t("nav.categories")}
          </Link>
          <Link href="/#skills" className="hover:text-terracotta">
            {t("nav.skills")}
          </Link>
          <Link href="/#about" className="hover:text-terracotta">
            {t("nav.about")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link
            href="/#skills"
            className="hidden items-center gap-1.5 rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark sm:inline-flex"
          >
            {t("explore")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
