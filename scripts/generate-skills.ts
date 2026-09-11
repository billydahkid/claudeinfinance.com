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

// Only scaffold our own skills; Anthropic entries live in their own repo.
const ownSkills = skills.filter(
  (s) => s.provider !== "anthropic" && s.prompt,
);

for (const skill of ownSkills) {
  const dir = join(skillsDir, skill.slug);
  mkdirSync(dir, { recursive: true });

  // The `skills` CLI (and the Claude skill spec) requires `name` plus a flat
  // `description`. It is built from the French summary, with both task names
  // appended so the skill triggers on FR and EN phrasings alike.
  const description =
    `${skill.summary.fr} A utiliser quand l'utilisateur demande: ` +
    `${skill.name.fr} / ${skill.name.en}.`;

  const front = [
    "---",
    `name: ${skill.slug}`,
    `description: ${yaml(description)}`,
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
    description,
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
    const items = ownSkills.filter((s) => s.category === c.slug);
    return [
      `### ${c.name.fr}`,
      "",
      ...items.map((s) => `- [\`${s.slug}\`](./${s.slug}/) - ${s.name.fr}`),
      "",
    ].join("\n");
  }),
].join("\n");

writeFileSync(join(skillsDir, "README.md"), readme);

console.log(`Generated ${ownSkills.length} skills into ${skillsDir}`);
