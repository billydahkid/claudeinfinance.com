import { useTranslations } from "next-intl";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-ink">
          <BookOpen className="h-5 w-5 text-terracotta" strokeWidth={2} />
          <span className="font-display text-xl font-semibold tracking-tight">
            ClaudeInFinance
            <span className="font-body italic text-terracotta">.com</span>
          </span>
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
