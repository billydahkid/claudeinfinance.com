import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";

type Item = { q: string; a: string };

export default function Faq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as Item[];

  return (
    <section className="border-b border-line bg-cream-100/50">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <p className="eyebrow text-terracotta">{t("eyebrow")}</p>
        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-8 divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span className="font-display text-lg font-medium text-ink">
                  {item.q}
                </span>
                <Plus className="h-4 w-4 shrink-0 text-terracotta transition-transform group-open:rotate-45" />
              </summary>
              <p className="prose-serif mt-3 leading-relaxed text-ink-soft">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
