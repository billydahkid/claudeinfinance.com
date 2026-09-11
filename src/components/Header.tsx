import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "./Logo";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="ClaudeInFinance">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          <Link href="/" className="transition-colors hover:text-ink">
            {t("nav.home")}
          </Link>
          <Link
            href="/#categories"
            className="transition-colors hover:text-ink"
          >
            {t("nav.categories")}
          </Link>
          <Link href="/#skills" className="transition-colors hover:text-ink">
            {t("nav.skills")}
          </Link>
          <Link href="/#about" className="transition-colors hover:text-ink">
            {t("nav.about")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link
            href="/#skills"
            className="hidden items-center gap-1.5 text-sm font-semibold text-terracotta transition-colors hover:text-terracotta-dark sm:inline-flex"
          >
            {t("explore")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
