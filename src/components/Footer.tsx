import { useLocale, useTranslations } from "next-intl";
import { TrendingUp } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { categories } from "@/data/skills";
import type { Locale } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale() as Locale;

  return (
    <footer
      id="about-footer"
      className="border-t border-cream-200 bg-cream-100"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 font-semibold text-ink">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-terracotta text-white">
                <TrendingUp className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="text-lg tracking-tight">ClaudeInFinance</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-ink-muted">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">
              {t("sections.explore")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              <li>
                <Link href="/#skills" className="hover:text-terracotta">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="hover:text-terracotta">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-terracotta">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">
              {t("sections.categories")}
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-muted">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/categories/${c.slug}`}
                    className="hover:text-terracotta"
                  >
                    {c.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-cream-200 pt-6 text-xs text-ink-muted">
          <p>{t("disclaimer")}</p>
          <p className="mt-1">
            &copy; 2026 ClaudeInFinance. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
