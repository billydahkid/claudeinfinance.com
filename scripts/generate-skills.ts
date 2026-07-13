// One-off scaffold generator: creates skills/<slug>/SKILL.md for every skill in
// src/data/skills.ts, plus a skills.json manifest and a README. Run with:
//   node --experimental-strip-types scripts/generate-skills.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { skills, categories, REPO_URL } from "../src/data/skills.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(root, "skills");

function yaml(s: string): string {
  return JSON.stringify(s);
}

const manifest: Array<Record<string, unknown>> = [];

for (const skill of skills) {
  const dir = join(skillsDir, skill.slug);
  mkdirSync(dir, { recursive: true });

  const front = [
    "---",
    `name: ${skill.slug}`,
    "title:",
    `  fr: ${yaml(skill.name.fr)}`,
    `  en: ${yaml(skill.name.en)}`,
    `category: ${skill.category}`,
    `tags: [${skill.tags.map((t) => yaml(t)).join(", ")}]`,
    "summary:",
    `  fr: ${yaml(skill.summary.fr)}`,
    `  en: ${yaml(skill.summary.en)}`,
    "---",
  ].join("\n");

  const body = [
    `# ${skill.name.en}`,
    "",
    "> Draft skill, to be reworked.",
    "",
    "## Prompt (FR)",
    "",
    skill.prompt.fr,
    "",
    "## Prompt (EN)",
    "",
    skill.prompt.en,
    "",
  ].join("\n");

  writeFileSync(join(dir, "SKILL.md"), `${front}\n\n${body}`);

  manifest.push({
    slug: skill.slug,
    category: skill.category,
    tags: skill.tags,
    title: skill.name,
    summary: skill.summary,
    source: `${REPO_URL}/tree/main/skills/${skill.slug}`,
    install: `npx skills add ${REPO_URL} --skill ${skill.slug}`,
  });
}

writeFileSync(
  join(skillsDir, "skills.json"),
  JSON.stringify(manifest, null, 2) + "\n",
);

const readme = [
  "# Skills",
  "",
  "Catalogue des agents finance de ClaudeInFinance. Un dossier par agent, chacun",
  "avec un `SKILL.md`. Ces skills sont des brouillons, a retravailler.",
  "",
  "## Installation",
  "",
  "```bash",
  `npx skills add ${REPO_URL} --skill <slug>`,
  "```",
  "",
  "## Catalogue",
  "",
  ...categories.map((c) => {
    const items = skills.filter((s) => s.category === c.slug);
    return [
      `### ${c.name.fr}`,
      "",
      ...items.map((s) => `- [\`${s.slug}\`](./${s.slug}/) - ${s.name.fr}`),
      "",
    ].join("\n");
  }),
].join("\n");

writeFileSync(join(skillsDir, "README.md"), readme);

console.log(`Generated ${skills.length} skills into ${skillsDir}`);
