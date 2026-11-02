import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { FORWARD_DEPLOY_URL } from "@/config";
import Logo from "./Logo";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  const t = useTranslations("footer");

  const explore = [
    { href: "/formations", label: t("links.formations") },
    { href: "/parcours", label: t("links.parcours") },
    { href: "/skills", label: t("links.skills") },
    { href: "/tutoriels", label: t("links.tutoriels") },
    { href: "/projets", label: t("links.projets") },
  ] as const;

  const about = [
    { href: "/a-propos", label: t("links.about") },
    { href: "/mentions-legales", label: t("links.legal") },
    { href: "/confidentialite", label: t("links.privacy") },
    { href: "/cgv", label: t("links.terms") },
    { href: "/cookies", label: t("links.cookies") },
    { href: "/contact", label: t("links.contact") },
  ] as const;

  return (
    <footer className="border-t border-line bg-cream-100/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="prose-serif mt-3 max-w-sm text-sm text-ink-muted">
              {t("tagline")}
            </p>
            <div className="mt-8">
              <NewsletterSignup />
            </div>
          </div>

          <div>
            <h3 className="eyebrow text-ink-muted">{t("sections.explore")}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-terracotta">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-ink-muted">{t("sections.about")}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
              {about.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-terracotta">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* B2B / Forward & Deploy */}
        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={FORWARD_DEPLOY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-terracotta"
          >
            {t("poweredBy")}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <p className="text-sm text-ink-muted">
            {t("b2bLine")}{" "}
            <a
              href={FORWARD_DEPLOY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-terracotta hover:text-terracotta-dark"
            >
              {t("b2bCta")}
            </a>
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-1 font-mono text-xs text-ink-muted">
          <p>{t("disclaimer")}</p>
          <p>&copy; 2026 ClaudeInFinance. {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
