import type { LucideIcon } from "lucide-react";
import {
  Handshake,
  Landmark,
  Rocket,
  LineChart,
  Calculator,
  ClipboardCheck,
  ShieldCheck,
  Cpu,
} from "lucide-react";

/**
 * Localized string helper. Every user facing piece of content is provided in
 * both French (default) and English so the UI can render it per locale.
 */
export type Localized = {
  fr: string;
  en: string;
};

export type Category = {
  slug: string;
  icon: LucideIcon;
  name: Localized;
  description: Localized;
};

export type Provider = "claudeinfinance" | "anthropic";

export type Skill = {
  slug: string;
  category: string; // category slug
  name: Localized;
  summary: Localized;
  tags: string[];
  featured?: boolean;
  /** Copyable prompt (own skills). Absent for plugin/agent based skills. */
  prompt?: Localized;
  /** Who authored the skill. Defaults to "claudeinfinance". */
  provider?: Provider;
  /** For Anthropic entries: the Claude Code plugin/agent to install. */
  plugin?: string;
  /** Slash commands exposed by the skill (mainly Anthropic plugins). */
  commands?: string[];
  /** Link to the source repository for this skill. Falls back per provider. */
  sourceUrl?: string;
};

/** Default source repository, used when a skill has no dedicated sourceUrl. */
export const REPO_URL = "https://github.com/billydahkid/claudeinfinance.com";

/** Official Anthropic finance library (Apache 2.0). */
export const ANTHROPIC_REPO = "https://github.com/anthropics/financial-services";
export const ANTHROPIC_MARKETPLACE = "claude-for-financial-services";

export const categories: Category[] = [
  {
    slug: "ma-corporate-finance",
    icon: Handshake,
    name: { fr: "M&A / Corporate Finance", en: "M&A / Corporate Finance" },
    description: {
      fr: "Modelisation, valorisation et execution d'operations de fusion acquisition.",
      en: "Modeling, valuation and execution of merger and acquisition deals.",
    },
  },
  {
    slug: "private-equity",
    icon: Landmark,
    name: { fr: "Private Equity", en: "Private Equity" },
    description: {
      fr: "Due diligence, LBO et suivi de portefeuille pour l'investissement non cote.",
      en: "Due diligence, LBO and portfolio monitoring for private markets.",
    },
  },
  {
    slug: "venture-capital",
    icon: Rocket,
    name: { fr: "Venture Capital", en: "Venture Capital" },
    description: {
      fr: "Analyse de startups, term sheets et suivi des metriques de croissance.",
      en: "Startup analysis, term sheets and growth metrics tracking.",
    },
  },
  {
    slug: "marches-trading",
    icon: LineChart,
    name: { fr: "Marches / Trading", en: "Markets / Trading" },
    description: {
      fr: "Strategies, analyse de marche et gestion du risque sur les actifs cotes.",
      en: "Strategies, market analysis and risk management on listed assets.",
    },
  },
  {
    slug: "controle-de-gestion",
    icon: Calculator,
    name: { fr: "Controle de gestion", en: "Management Control" },
    description: {
      fr: "Budgets, reporting et pilotage de la performance financiere.",
      en: "Budgets, reporting and financial performance steering.",
    },
  },
  {
    slug: "audit-comptabilite",
    icon: ClipboardCheck,
    name: { fr: "Audit & Comptabilite", en: "Audit & Accounting" },
    description: {
      fr: "Cloture, controle interne et travaux d'audit legal et contractuel.",
      en: "Closing, internal control and statutory and contractual audit work.",
    },
  },
  {
    slug: "risque-conformite",
    icon: ShieldCheck,
    name: { fr: "Risque & Conformite", en: "Risk & Compliance" },
    description: {
      fr: "Cartographie des risques, KYC, LCB-FT et exigences reglementaires.",
      en: "Risk mapping, KYC, AML-CFT and regulatory requirements.",
    },
  },
  {
    slug: "data-automatisation",
    icon: Cpu,
    name: { fr: "Data & Automatisation", en: "Data & Automation" },
    description: {
      fr: "Extraction, nettoyage et automatisation des flux de donnees financieres.",
      en: "Extraction, cleaning and automation of financial data flows.",
    },
  },
];

export const skills: Skill[] = [
  {
    slug: "modele-dcf",
    category: "ma-corporate-finance",
    featured: true,
    name: {
      fr: "Construire un modele DCF",
      en: "Build a DCF model",
    },
    summary: {
      fr: "Structure un modele de flux de tresorerie actualises avec hypotheses, WACC et valeur terminale.",
      en: "Structures a discounted cash flow model with assumptions, WACC and terminal value.",
    },
    tags: ["DCF", "valorisation", "WACC", "modelisation"],
    prompt: {
      fr: "Tu es analyste M&A senior. Aide moi a construire un modele DCF pour une entreprise. Demande moi d'abord les informations manquantes (secteur, chiffre d'affaires, marges, croissance attendue, taux d'imposition). Ensuite, propose une structure claire : projection des flux de tresorerie disponibles sur 5 ans, calcul du WACC, valeur terminale (methode de Gordon et multiple de sortie), puis actualisation. Explique chaque hypothese et signale les points de vigilance.",
      en: "You are a senior M&A analyst. Help me build a DCF model for a company. First ask me for the missing inputs (sector, revenue, margins, expected growth, tax rate). Then propose a clear structure: five year free cash flow projection, WACC calculation, terminal value (Gordon growth and exit multiple), then discounting. Explain each assumption and flag the key risks.",
    },
  },
  {
    slug: "analyse-comparables",
    category: "ma-corporate-finance",
    name: {
      fr: "Analyse des comparables boursiers",
      en: "Trading comparables analysis",
    },
    summary: {
      fr: "Selectionne un panel de comparables et calcule les multiples de valorisation pertinents.",
      en: "Selects a peer panel and computes the relevant valuation multiples.",
    },
    tags: ["comparables", "multiples", "EV/EBITDA", "benchmark"],
    prompt: {
      fr: "Agis comme un analyste corporate finance. Aide moi a batir une analyse des comparables boursiers pour une societe cible. Guide moi pour selectionner un panel de societes comparables (secteur, taille, geographie), liste les multiples a retenir (EV/EBITDA, EV/CA, P/E), explique comment les normaliser et comment en deduire une fourchette de valorisation. Presente le resultat sous forme de tableau.",
      en: "Act as a corporate finance analyst. Help me build a trading comparables analysis for a target company. Guide me to select a peer panel (sector, size, geography), list the multiples to use (EV/EBITDA, EV/Revenue, P/E), explain how to normalize them and how to derive a valuation range. Present the output as a table.",
    },
  },
  {
    slug: "memo-investissement",
    category: "private-equity",
    featured: true,
    name: {
      fr: "Rediger un memo d'investissement",
      en: "Write an investment memo",
    },
    summary: {
      fr: "Genere la trame d'un investment memo PE avec these, risques et retours attendus.",
      en: "Generates a PE investment memo outline with thesis, risks and expected returns.",
    },
    tags: ["memo", "these", "LBO", "comite"],
    prompt: {
      fr: "Tu es associe dans un fonds de private equity. Aide moi a rediger un memo d'investissement pour le comite. Structure le document ainsi : resume executif, presentation de la cible, these d'investissement, analyse du marche, structure de l'operation (LBO), plan de creation de valeur, principaux risques et mitigants, retours attendus (TRI et multiple). Pose moi les questions necessaires avant de rediger.",
      en: "You are a partner at a private equity fund. Help me write an investment memo for the committee. Structure the document as follows: executive summary, target overview, investment thesis, market analysis, deal structure (LBO), value creation plan, key risks and mitigants, expected returns (IRR and multiple). Ask me the necessary questions before drafting.",
    },
  },
  {
    slug: "checklist-due-diligence",
    category: "private-equity",
    name: {
      fr: "Checklist de due diligence",
      en: "Due diligence checklist",
    },
    summary: {
      fr: "Produit une checklist de due diligence financiere, juridique et operationnelle.",
      en: "Produces a financial, legal and operational due diligence checklist.",
    },
    tags: ["due diligence", "checklist", "acquisition", "risques"],
    prompt: {
      fr: "Agis comme un directeur d'investissement. Genere une checklist de due diligence complete pour l'acquisition d'une PME. Organise la par volet : financier, comptable, juridique, fiscal, social, commercial, operationnel et informatique. Pour chaque volet, liste les documents a demander et les points de controle critiques. Adapte la au secteur que je vais te preciser.",
      en: "Act as an investment director. Generate a complete due diligence checklist for the acquisition of a mid sized company. Organize it by workstream: financial, accounting, legal, tax, HR, commercial, operational and IT. For each workstream, list the documents to request and the critical control points. Adapt it to the sector I will specify.",
    },
  },
  {
    slug: "scoring-startup",
    category: "venture-capital",
    featured: true,
    name: {
      fr: "Scorer une startup",
      en: "Score a startup",
    },
    summary: {
      fr: "Evalue une startup selon equipe, marche, produit, traction et modele economique.",
      en: "Evaluates a startup across team, market, product, traction and business model.",
    },
    tags: ["scoring", "deal flow", "traction", "evaluation"],
    prompt: {
      fr: "Tu es analyste dans un fonds de venture capital. Aide moi a scorer une startup a partir de son pitch. Evalue la sur cinq axes : equipe, taille et dynamique du marche, produit et differenciation, traction et metriques, modele economique. Attribue une note sur 5 par axe avec une justification courte, puis une recommandation (passer, creuser, investir). Demande moi les elements manquants.",
      en: "You are an analyst at a venture capital fund. Help me score a startup from its pitch. Evaluate it on five axes: team, market size and momentum, product and differentiation, traction and metrics, business model. Give a score out of 5 per axis with a short rationale, then a recommendation (pass, dig deeper, invest). Ask me for any missing elements.",
    },
  },
  {
    slug: "analyse-term-sheet",
    category: "venture-capital",
    name: {
      fr: "Analyser une term sheet",
      en: "Analyze a term sheet",
    },
    summary: {
      fr: "Decrypte les clauses cles d'une term sheet et leurs implications pour le fondateur.",
      en: "Breaks down the key clauses of a term sheet and their impact on the founder.",
    },
    tags: ["term sheet", "valorisation", "clauses", "dilution"],
    prompt: {
      fr: "Agis comme un avocat specialise en levee de fonds. Analyse une term sheet que je vais te fournir. Explique en langage clair les clauses principales : valorisation pre et post money, preference de liquidation, anti dilution, vesting, board, droits de veto, pro rata. Pour chaque clause, indique si elle est standard ou agressive et son impact concret pour le fondateur.",
      en: "Act as a lawyer specialized in fundraising. Analyze a term sheet that I will provide. Explain in plain language the main clauses: pre and post money valuation, liquidation preference, anti dilution, vesting, board, veto rights, pro rata. For each clause, state whether it is standard or aggressive and its concrete impact for the founder.",
    },
  },
  {
    slug: "note-marche",
    category: "marches-trading",
    featured: true,
    name: {
      fr: "Rediger une note de marche",
      en: "Write a market note",
    },
    summary: {
      fr: "Synthetise le contexte macro et sectoriel en une note de marche structuree.",
      en: "Synthesizes the macro and sector context into a structured market note.",
    },
    tags: ["macro", "note", "synthese", "marches"],
    prompt: {
      fr: "Tu es strategiste de marche. Aide moi a rediger une note de marche quotidienne a partir des elements que je vais te donner (indices, taux, matieres premieres, actualites). Structure la ainsi : ce qu'il faut retenir en trois points, contexte macro, mouvements par classe d'actifs, catalyseurs a surveiller. Ton professionnel et concis, sans jargon inutile.",
      en: "You are a market strategist. Help me write a daily market note from the elements I will give you (indices, rates, commodities, news). Structure it as follows: three key takeaways, macro context, moves by asset class, catalysts to watch. Professional and concise tone, without unnecessary jargon.",
    },
  },
  {
    slug: "backtest-strategie",
    category: "marches-trading",
    name: {
      fr: "Cadrer un backtest de strategie",
      en: "Frame a strategy backtest",
    },
    summary: {
      fr: "Definit les regles, l'univers et les metriques d'un backtest de strategie systematique.",
      en: "Defines the rules, universe and metrics of a systematic strategy backtest.",
    },
    tags: ["backtest", "strategie", "systematique", "metriques"],
    prompt: {
      fr: "Agis comme un quant. Aide moi a cadrer le backtest d'une strategie de trading. Fais moi preciser l'univers d'actifs, la periode, les regles d'entree et de sortie, la gestion de position et les couts. Propose ensuite les metriques de performance et de risque a calculer (rendement annualise, volatilite, ratio de Sharpe, drawdown maximum) et alerte moi sur les biais frequents (survivance, look ahead, surapprentissage).",
      en: "Act as a quant. Help me frame the backtest of a trading strategy. Have me specify the asset universe, the period, the entry and exit rules, position sizing and costs. Then propose the performance and risk metrics to compute (annualized return, volatility, Sharpe ratio, maximum drawdown) and warn me about common biases (survivorship, look ahead, overfitting).",
    },
  },
  {
    slug: "construction-budget",
    category: "controle-de-gestion",
    featured: true,
    name: {
      fr: "Construire un budget annuel",
      en: "Build an annual budget",
    },
    summary: {
      fr: "Structure un budget annuel par centre de cout avec hypotheses et scenarios.",
      en: "Structures an annual budget by cost center with assumptions and scenarios.",
    },
    tags: ["budget", "previsionnel", "scenarios", "pilotage"],
    prompt: {
      fr: "Tu es controleur de gestion. Aide moi a construire le budget annuel d'une entreprise. Guide moi pour poser les hypotheses de chiffre d'affaires, les charges variables et fixes, les effectifs et les investissements. Organise le budget par centre de cout, propose un scenario central, un scenario prudent et un scenario optimiste, et explique comment suivre les ecarts en cours d'annee.",
      en: "You are a management controller. Help me build the annual budget of a company. Guide me to set the revenue assumptions, variable and fixed costs, headcount and capital expenditure. Organize the budget by cost center, propose a base case, a conservative case and an optimistic case, and explain how to track variances during the year.",
    },
  },
  {
    slug: "analyse-ecarts",
    category: "controle-de-gestion",
    name: {
      fr: "Analyser les ecarts budgetaires",
      en: "Analyze budget variances",
    },
    summary: {
      fr: "Explique les ecarts entre reel et budget par effet prix, volume et mix.",
      en: "Explains actual versus budget variances by price, volume and mix effect.",
    },
    tags: ["ecarts", "reporting", "analyse", "performance"],
    prompt: {
      fr: "Agis comme un controleur de gestion. A partir des chiffres reels et du budget que je vais te fournir, aide moi a analyser les ecarts. Decompose les par effet prix, effet volume et effet mix. Rédige un commentaire clair pour la direction, en distinguant les ecarts favorables et defavorables, et propose des actions correctives concretes.",
      en: "Act as a management controller. From the actual figures and the budget I will provide, help me analyze the variances. Break them down by price effect, volume effect and mix effect. Write a clear commentary for management, distinguishing favorable and unfavorable variances, and propose concrete corrective actions.",
    },
  },
  {
    slug: "revue-comptes",
    category: "audit-comptabilite",
    featured: true,
    name: {
      fr: "Preparer une revue de comptes",
      en: "Prepare an accounts review",
    },
    summary: {
      fr: "Liste les controles cle par cycle pour securiser une cloture comptable.",
      en: "Lists the key controls by cycle to secure an accounting close.",
    },
    tags: ["cloture", "controle", "cycles", "revision"],
    prompt: {
      fr: "Tu es chef de mission audit. Aide moi a preparer la revue des comptes d'une entreprise pour la cloture annuelle. Organise les travaux par cycle (achats, ventes, tresorerie, immobilisations, stocks, paie, capitaux propres). Pour chaque cycle, liste les controles cle, les justificatifs a obtenir et les zones de risque d'anomalie. Termine par une liste de points a valider avec le client.",
      en: "You are an audit manager. Help me prepare the accounts review of a company for the year end close. Organize the work by cycle (purchases, sales, cash, fixed assets, inventory, payroll, equity). For each cycle, list the key controls, the supporting documents to obtain and the areas at risk of misstatement. End with a list of points to validate with the client.",
    },
  },
  {
    slug: "ecriture-comptable",
    category: "audit-comptabilite",
    name: {
      fr: "Expliquer une ecriture comptable",
      en: "Explain an accounting entry",
    },
    summary: {
      fr: "Detaille le schema d'ecriture d'une operation et son traitement comptable.",
      en: "Details the journal entry of a transaction and its accounting treatment.",
    },
    tags: ["ecritures", "debit credit", "traitement", "normes"],
    prompt: {
      fr: "Agis comme un expert comptable. Je vais te decrire une operation. Explique moi le schema d'ecriture comptable a passer : comptes debites, comptes credites, montants et justification. Precise le traitement en normes francaises et signale les differences eventuelles avec les normes IFRS. Sois pedagogue et donne un exemple chiffre.",
      en: "Act as a chartered accountant. I will describe a transaction. Explain the journal entry to record: accounts debited, accounts credited, amounts and rationale. State the treatment under French GAAP and flag any differences with IFRS. Be pedagogical and give a numeric example.",
    },
  },
  {
    slug: "cartographie-risques",
    category: "risque-conformite",
    featured: true,
    name: {
      fr: "Batir une cartographie des risques",
      en: "Build a risk map",
    },
    summary: {
      fr: "Identifie et cote les risques par probabilite et impact avec plan de maitrise.",
      en: "Identifies and rates risks by likelihood and impact with a mitigation plan.",
    },
    tags: ["cartographie", "risques", "controle interne", "cotation"],
    prompt: {
      fr: "Tu es risk manager. Aide moi a batir la cartographie des risques d'une activite financiere. Identifie les principaux risques (marche, credit, liquidite, operationnel, conformite, reputation), cote les par probabilite et impact sur une echelle de 1 a 4, positionne les sur une matrice et propose pour chacun un dispositif de maitrise et un responsable. Presente le resultat sous forme de tableau.",
      en: "You are a risk manager. Help me build the risk map of a financial activity. Identify the main risks (market, credit, liquidity, operational, compliance, reputation), rate them by likelihood and impact on a 1 to 4 scale, position them on a matrix and propose for each a control measure and an owner. Present the output as a table.",
    },
  },
  {
    slug: "procedure-kyc",
    category: "risque-conformite",
    name: {
      fr: "Rediger une procedure KYC",
      en: "Draft a KYC procedure",
    },
    summary: {
      fr: "Formalise les etapes d'entree en relation et de vigilance LCB-FT.",
      en: "Formalizes the onboarding and AML-CFT due diligence steps.",
    },
    tags: ["KYC", "LCB-FT", "conformite", "vigilance"],
    prompt: {
      fr: "Agis comme un responsable conformite. Aide moi a rediger une procedure KYC d'entree en relation client. Detaille les etapes : identification et verification du client, identification du beneficiaire effectif, evaluation du profil de risque, mesures de vigilance adaptees, gel des avoirs et personnes politiquement exposees. Precise les documents a collecter et les cas necessitant une vigilance renforcee.",
      en: "Act as a compliance officer. Help me draft a KYC client onboarding procedure. Detail the steps: customer identification and verification, beneficial owner identification, risk profile assessment, appropriate due diligence measures, asset freezing and politically exposed persons. Specify the documents to collect and the cases requiring enhanced due diligence.",
    },
  },
  {
    slug: "automatisation-reporting",
    category: "data-automatisation",
    featured: true,
    name: {
      fr: "Automatiser un reporting financier",
      en: "Automate a financial report",
    },
    summary: {
      fr: "Concoit un pipeline pour automatiser la production d'un reporting recurrent.",
      en: "Designs a pipeline to automate the production of a recurring report.",
    },
    tags: ["automatisation", "reporting", "pipeline", "Excel"],
    prompt: {
      fr: "Tu es analyste data finance. Aide moi a automatiser un reporting financier mensuel aujourd'hui fait a la main sous Excel. Fais moi decrire les sources de donnees, les transformations et le format de sortie attendu. Propose ensuite une architecture d'automatisation (extraction, nettoyage, calculs, mise en forme), les outils adaptes et un plan de mise en oeuvre par etapes. Signale les points de controle qualite.",
      en: "You are a finance data analyst. Help me automate a monthly financial report currently done by hand in Excel. Have me describe the data sources, the transformations and the expected output format. Then propose an automation architecture (extraction, cleaning, calculations, formatting), the right tools and a step by step implementation plan. Flag the quality control checkpoints.",
    },
  },
  {
    slug: "formule-excel",
    category: "data-automatisation",
    name: {
      fr: "Traduire un besoin en formule Excel",
      en: "Turn a need into an Excel formula",
    },
    summary: {
      fr: "Transforme une demande metier en formule Excel robuste et expliquee.",
      en: "Turns a business request into a robust, explained Excel formula.",
    },
    tags: ["Excel", "formule", "tableur", "productivite"],
    prompt: {
      fr: "Agis comme un expert Excel pour la finance. Je vais te decrire un besoin en langage courant. Propose moi la formule Excel adaptee, explique chaque partie, indique les pieges (references, formats, cellules vides) et donne une variante plus lisible si possible. Si plusieurs approches existent, compare les brievement.",
      en: "Act as an Excel expert for finance. I will describe a need in plain language. Propose the right Excel formula, explain each part, point out the pitfalls (references, formats, empty cells) and give a more readable variant if possible. If several approaches exist, compare them briefly.",
    },
  },

  // ── Officiels Anthropic (anthropics/financial-services, Apache 2.0) ──
  {
    slug: "financial-analysis",
    category: "ma-corporate-finance",
    provider: "anthropic",
    plugin: "financial-analysis",
    sourceUrl: ANTHROPIC_REPO,
    commands: ["/comps", "/dcf", "/lbo", "/3-statement-model", "/debug-model"],
    name: {
      fr: "Financial Analysis (socle)",
      en: "Financial Analysis (core)",
    },
    summary: {
      fr: "Le plugin socle Anthropic : comps, DCF, LBO, three-statement et audit de modeles Excel.",
      en: "Anthropic's core plugin: comps, DCF, LBO, three-statement and Excel model auditing.",
    },
    tags: ["DCF", "LBO", "comps", "three-statement"],
  },
  {
    slug: "investment-banking",
    category: "ma-corporate-finance",
    provider: "anthropic",
    plugin: "investment-banking",
    sourceUrl: ANTHROPIC_REPO,
    commands: [
      "/cim",
      "/teaser",
      "/buyer-list",
      "/merger-model",
      "/process-letter",
      "/deal-tracker",
      "/one-pager",
    ],
    name: {
      fr: "Investment Banking",
      en: "Investment Banking",
    },
    summary: {
      fr: "CIM, teasers, buyer lists, merger models et suivi de deal pour les operations M&A.",
      en: "CIMs, teasers, buyer lists, merger models and deal tracking for M&A processes.",
    },
    tags: ["M&A", "CIM", "merger model", "deal"],
  },
  {
    slug: "pitch-agent",
    category: "ma-corporate-finance",
    provider: "anthropic",
    plugin: "pitch-agent",
    sourceUrl: ANTHROPIC_REPO,
    name: {
      fr: "Pitch Agent",
      en: "Pitch Agent",
    },
    summary: {
      fr: "Genere un pitch deck M&A complet : comps, transactions precedentes et LBO preliminaire.",
      en: "Generates a full M&A pitch deck: comps, precedent transactions and a preliminary LBO.",
    },
    tags: ["pitch", "deck", "M&A", "comps"],
  },
  {
    slug: "private-equity",
    category: "private-equity",
    provider: "anthropic",
    plugin: "private-equity",
    sourceUrl: ANTHROPIC_REPO,
    commands: [
      "/screen-deal",
      "/dd-checklist",
      "/dd-prep",
      "/ic-memo",
      "/returns",
      "/portfolio",
      "/value-creation",
    ],
    name: {
      fr: "Private Equity",
      en: "Private Equity",
    },
    summary: {
      fr: "Sourcing, screening, checklists de diligence, memos IC et monitoring de portefeuille.",
      en: "Sourcing, screening, diligence checklists, IC memos and portfolio monitoring.",
    },
    tags: ["due diligence", "IC memo", "portfolio", "screening"],
  },
  {
    slug: "equity-research",
    category: "marches-trading",
    provider: "anthropic",
    plugin: "equity-research",
    sourceUrl: ANTHROPIC_REPO,
    commands: [
      "/earnings",
      "/earnings-preview",
      "/morning-note",
      "/initiate",
      "/thesis",
      "/catalysts",
      "/sector",
    ],
    name: {
      fr: "Equity Research",
      en: "Equity Research",
    },
    summary: {
      fr: "Reviews de resultats, notes de marche, initiations de couverture et suivi de catalyseurs.",
      en: "Earnings reviews, market notes, coverage initiations and catalyst tracking.",
    },
    tags: ["earnings", "research", "note", "catalysts"],
  },
  {
    slug: "market-researcher",
    category: "venture-capital",
    provider: "anthropic",
    plugin: "market-researcher",
    sourceUrl: ANTHROPIC_REPO,
    name: {
      fr: "Market Researcher",
      en: "Market Researcher",
    },
    summary: {
      fr: "D'un secteur ou d'un theme a un panorama de marche et un paysage concurrentiel.",
      en: "From a sector or theme to an industry overview and competitive landscape.",
    },
    tags: ["market research", "secteur", "concurrence"],
  },
  {
    slug: "gl-reconciler",
    category: "audit-comptabilite",
    provider: "anthropic",
    plugin: "gl-reconciler",
    sourceUrl: ANTHROPIC_REPO,
    name: {
      fr: "GL Reconciler",
      en: "GL Reconciler",
    },
    summary: {
      fr: "Identifie les ecarts du grand livre, remonte a la cause racine et route pour validation.",
      en: "Finds general-ledger breaks, traces the root cause and routes them for sign-off.",
    },
    tags: ["rapprochement", "grand livre", "cloture", "controle"],
  },
  {
    slug: "fund-admin",
    category: "audit-comptabilite",
    provider: "anthropic",
    plugin: "fund-admin",
    sourceUrl: ANTHROPIC_REPO,
    name: {
      fr: "Fund Admin",
      en: "Fund Admin",
    },
    summary: {
      fr: "Administration de fonds : cloture, roll-forwards, commentaires d'ecarts et audit des etats LP.",
      en: "Fund administration: close, roll-forwards, variance commentary and LP statement auditing.",
    },
    tags: ["fund admin", "cloture", "roll-forward", "LP"],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getSkill(slug: string): Skill | undefined {
  return skills.find((s) => s.slug === slug);
}

export function getSkillsByCategory(slug: string): Skill[] {
  return skills.filter((s) => s.category === slug);
}

export function getFeaturedSkills(): Skill[] {
  return skills.filter((s) => s.featured && s.provider !== "anthropic");
}

export function getOfficialSkills(): Skill[] {
  return skills.filter((s) => s.provider === "anthropic");
}

/** Deep link to the skill's source repository. */
export function getSkillSourceUrl(skill: Skill): string {
  if (skill.sourceUrl) return skill.sourceUrl;
  if (skill.provider === "anthropic") return ANTHROPIC_REPO;
  return `${REPO_URL}/tree/main/skills/${skill.slug}`;
}

/** Install command shown in the skill page. Plugin form for Anthropic entries. */
export function getInstallCommand(skill: Skill): string {
  if (skill.provider === "anthropic" && skill.plugin) {
    return `claude plugin install ${skill.plugin}@${ANTHROPIC_MARKETPLACE}`;
  }
  return `npx skills add ${REPO_URL} --skill ${skill.slug}`;
}
