/**
 * Formations (courses) data model. File-based for now (no backend), mirroring
 * the skills.ts pattern. Designed to be "backend-ready": these shapes map
 * cleanly to future `courses` / `modules` / `lessons` tables (Supabase, Phase 2).
 *
 * IMPORTANT: no course is invented as "available". Everything here ships as
 * "coming-soon" until real content exists (see refonte brief, decisions 3 and 4).
 */

export type Localized = { fr: string; en: string };
export type LocalizedList = { fr: string[]; en: string[] };

export type CourseLevel = "beginner" | "intermediate" | "advanced";
export type CourseStatus = "available" | "coming-soon" | "waitlist";

export type CourseModule = {
  title: Localized;
  lessons: Localized[];
};

export type Course = {
  slug: string;
  title: Localized;
  summary: Localized;
  level: CourseLevel;
  /** Target audience, e.g. ["Analystes M&A", "Etudiants finance"]. */
  audience: LocalizedList;
  status: CourseStatus;
  /** Only set when genuinely known. */
  durationHours?: number;
  /** Only set when a real price exists. */
  price?: { amount: number; currency: string };
  /** Concrete learning outcomes. */
  outcomes: LocalizedList;
  /** Syllabus. May be empty while the course is being written. */
  modules?: CourseModule[];
  /** Third-party tools used (locale-neutral). */
  tools: string[];
  tags: string[];
  featured?: boolean;
};

export const courses: Course[] = [
  {
    slug: "ai-for-finance-fundamentals",
    featured: true,
    title: {
      fr: "AI for Finance Fundamentals",
      en: "AI for Finance Fundamentals",
    },
    summary: {
      fr: "Les fondamentaux de l'IA appliquee a la finance : comprendre les modeles, ecrire de bons prompts et obtenir des resultats fiables et verifiables.",
      en: "The fundamentals of AI applied to finance: understand the models, write good prompts and get reliable, verifiable results.",
    },
    level: "beginner",
    audience: {
      fr: ["Etudiants finance", "Analystes debutants", "Professionnels curieux"],
      en: ["Finance students", "Junior analysts", "Curious professionals"],
    },
    status: "coming-soon",
    outcomes: {
      fr: [
        "Comprendre ce qu'un modele d'IA peut et ne peut pas faire en finance",
        "Ecrire des prompts clairs et structures pour des taches financieres",
        "Mettre en place une validation humaine et un controle qualite",
      ],
      en: [
        "Understand what an AI model can and cannot do in finance",
        "Write clear, structured prompts for financial tasks",
        "Set up human validation and quality control",
      ],
    },
    tools: ["Claude", "ChatGPT", "Excel"],
    tags: ["fondamentaux", "prompting", "finance"],
  },
  {
    slug: "ai-for-investment-banking",
    featured: true,
    title: {
      fr: "AI for Investment Banking",
      en: "AI for Investment Banking",
    },
    summary: {
      fr: "Utiliser l'IA sur les livrables M&A : comps, modeles, CIM, teasers et revue de documents, avec traçabilite et controle.",
      en: "Use AI on M&A deliverables: comps, models, CIMs, teasers and document review, with traceability and control.",
    },
    level: "intermediate",
    audience: {
      fr: ["Analystes M&A", "Associates", "Professionnels corporate finance"],
      en: ["M&A analysts", "Associates", "Corporate finance professionals"],
    },
    status: "coming-soon",
    outcomes: {
      fr: [
        "Accelerer la production de comps et de modeles avec l'IA",
        "Structurer un CIM et un teaser assistes par IA",
        "Auditer et fiabiliser les sorties avant diffusion",
      ],
      en: [
        "Speed up comps and model production with AI",
        "Structure an AI-assisted CIM and teaser",
        "Audit and harden outputs before distribution",
      ],
    },
    tools: ["Claude", "Claude Code", "Excel", "PowerPoint"],
    tags: ["M&A", "modelisation", "documents"],
  },
  {
    slug: "the-forward-deployed-banker",
    featured: true,
    title: {
      fr: "The Forward Deployed Banker",
      en: "The Forward Deployed Banker",
    },
    summary: {
      fr: "Construire ses propres agents et automatisations de workflows financiers : de l'audit du process au deploiement dans les outils du quotidien.",
      en: "Build your own agents and financial workflow automations: from process audit to deployment in everyday tools.",
    },
    level: "advanced",
    audience: {
      fr: ["Professionnels finance orientes tech", "Operations", "Deal teams"],
      en: ["Tech-minded finance professionals", "Operations", "Deal teams"],
    },
    status: "coming-soon",
    outcomes: {
      fr: [
        "Auditer un workflow financier et reperer ce qui est automatisable",
        "Construire un agent et le connecter aux outils metier",
        "Mesurer les gains et garder l'humain dans la boucle",
      ],
      en: [
        "Audit a financial workflow and spot what is automatable",
        "Build an agent and connect it to business tools",
        "Measure the gains and keep a human in the loop",
      ],
    },
    tools: ["Claude Code", "n8n", "Python", "MCP"],
    tags: ["agents", "automatisation", "workflows"],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return courses.filter((c) => c.featured);
}
