import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { categories } from "@/data/skills";
import type { Locale } from "@/i18n/routing";
import NewsletterSignup from "./NewsletterSignup";
import Logo from "./Logo";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale() as Locale;

  return (
    <footer className="border-t border-line bg-cream-100/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo size="sm" />
            <p className="prose-serif mt-3 max-w-sm text-sm text-ink-muted">
              {t("tagline")} {t("editedBy")}{" "}
              <a
                href="https://careerhub.fr"
                target="_blank"
                rel="noopener"
                className="font-medium text-ink-soft underline decoration-terracotta/40 underline-offset-2 transition-colors hover:text-terracotta hover:decoration-terracotta"
              >
                CareerHub
              </a>
              .
            </p>
            <div className="mt-8">
              <NewsletterSignup />
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-ink-muted">{t("sections.explore")}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              <li>
                <Link href="/#skills" className="hover:text-terracotta">
                  {t("links.skills")}
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="hover:text-terracotta">
                  {t("links.categories")}
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-terracotta">
                  {t("links.about")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-ink-muted">
              {t("sections.categories")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
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

        <div className="mt-12 flex flex-col gap-1 border-t border-line pt-6 font-mono text-xs text-ink-muted">
          <p>{t("disclaimer")}</p>
          <p>&copy; 2026 ClaudeInFinance. {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
