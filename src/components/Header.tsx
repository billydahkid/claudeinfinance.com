import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Logo from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("header");

  const nav = [
    { href: "/formations", label: t("nav.formations") },
    { href: "/parcours", label: t("nav.parcours") },
    { href: "/skills", label: t("nav.skills") },
    { href: "/organisations", label: t("nav.organisations") },
    { href: "/a-propos", label: t("nav.about") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="ClaudeInFinance">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-ink-soft lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link
            href="/connexion"
            className="hidden text-sm text-ink-soft transition-colors hover:text-ink sm:inline"
          >
            {t("login")}
          </Link>
          <Link
            href="/formations"
            className="inline-flex items-center gap-1.5 rounded-full bg-terracotta px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
          >
            <span className="hidden sm:inline">{t("cta")}</span>
            <span className="sm:hidden">{t("nav.formations")}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
