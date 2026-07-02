# ClaudeInFinance

Directory of Claude AI agent use cases, skills and prompts for finance jobs
(M&A, private equity, venture capital, markets, management control, audit, risk
and data). Bilingual (French default, English), in the spirit of
claudeskills.fr but specialized for finance.

> Independent project, not affiliated with Anthropic.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/) for internationalization (`/fr`, `/en`)
- [lucide-react](https://lucide.dev/) icons

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000 (redirects to /fr)
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
messages/            fr.json / en.json  (all UI strings, no hardcoded text)
src/
  data/skills.ts     categories + skills, each with fr/en name, summary, prompt
  i18n/              next-intl routing, request config and navigation helpers
  middleware.ts      locale routing middleware
  app/[locale]/
    page.tsx                 landing page
    skills/[slug]/page.tsx   skill detail with copyable prompt
    categories/[slug]/page.tsx  category page
  components/         Header, Footer, Hero, CategoryGrid, FeaturedSkills,
                      SkillExplorer (search + filters), About, ...
```

## Adding a skill

Add an entry to `skills` in `src/data/skills.ts` with a unique `slug`, a
`category` slug, and `name` / `summary` / `prompt` provided in both `fr` and
`en`. It appears automatically in the explorer and its category page.

## Content convention

French content uses simple hyphens (`-`) only; long dashes (`—` / `–`) are
avoided throughout.
