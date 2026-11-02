import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

type Project = { title: string; body: string };

export default function LearnByBuilding() {
  const t = useTranslations("learnByBuilding");
  const projects = t.raw("projects") as Project[];

  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div className="max-w-2xl">
            <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
            <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {t("title")}
            </h2>
            <p className="prose-serif mt-3 text-ink-soft">{t("subtitle")}</p>
          </div>
          <Link
            href="/projets"
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-terracotta hover:text-terracotta-dark"
          >
            {t("eyebrow")}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <ol className="mt-9 grid gap-4 sm:grid-cols-3">
          {projects.map((project, i) => (
            <li
              key={project.title}
              className="flex flex-col rounded-card border border-line bg-cream-100/60 p-6"
            >
              <span className="font-mono text-sm text-terracotta">
                0{i + 1}
              </span>
              <h3 className="font-display mt-3 text-lg font-semibold text-ink">
                {project.title}
              </h3>
              <p className="prose-serif mt-2 text-sm leading-relaxed text-ink-soft">
                {project.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
