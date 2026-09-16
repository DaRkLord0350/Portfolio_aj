export type Project = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  pipeline: string[];
  stack: string[];
  visualization: "financial-saas" | "commerce-ops" | "nlp-to-sql" | "ocr" | "data-governance" | "business-intelligence";
  links: {
    github?: string;
    demo?: string;
  };
  /** Folder under public/projects/<imageFolder>/ holding this project's screenshots. */
  imageFolder: string;
  imageAlt: string;
  imageNote?: string;
  /** Filename within imageFolder. Defaults to "cover.png" — override for cache-busting a specific project's asset URL. */
  imageFile?: string;
};

/** Path to a project's primary screenshot. Drop the file at public/projects/<imageFolder>/<imageFile ?? "cover.png">. */
export function projectCoverSrc(project: Pick<Project, "imageFolder" | "imageFile">) {
  return `/projects/${project.imageFolder}/${project.imageFile ?? "cover.png"}`;
}

export const projects: Project[] = [
  {
    id: "finrp",
    number: "01",
    name: "FinRP",
    tagline: "Financial Operations Platform for SMBs and Accounting Firms",
    description:
      "A multi-tenant financial platform where a business and its accounting firm share one system — invoicing, compliance and reporting in one place instead of five disconnected tools.",
    capabilities: [
      "Multi-tenant architecture scoped by organization and accounting firm",
      "Role-based portals for customers, accountants, firm admins and platform admins",
      "Invoicing, CRM and ERP-style modules for daily operations",
      "Bank account aggregator integration with webhook-driven sync",
      "Background workflows for reconciliation and compliance tasks",
      "AI advisor built directly into the dashboard",
    ],
    pipeline: [
      "Users",
      "Next.js / React",
      "REST APIs",
      "Auth / RBAC",
      "Business Services",
      "PostgreSQL",
      "Background Jobs",
      "Banking APIs",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Clerk", "Gemini"],
    visualization: "financial-saas",
    links: {
      github: "https://github.com/DaRkLord0350/Finrp-New",
      demo: "https://finrp.org",
    },
    imageFolder: "finrp",
    imageAlt: "FinRP financial operations platform",
  },
  {
    id: "nexus",
    number: "02",
    name: "Nexus",
    tagline: "Commerce Operations Platform with an AI Copilot",
    description:
      "A commerce operations platform covering the full order-to-cash loop — orders, inventory, invoicing and customers on one shared data layer, with an AI copilot built into the dashboard.",
    capabilities: [
      "Orders, inventory, catalog and invoicing on a shared data layer",
      "Role-based access control with full audit logging on every action",
      "AI copilot surfaced directly inside the operations dashboard",
      "Analytics dashboard for day-to-day operational visibility",
      "Barcode / QR generation for inventory and invoice documents",
    ],
    pipeline: ["Users", "Next.js / React", "REST APIs", "Auth / RBAC", "Orders / Inventory", "PostgreSQL", "AI Copilot"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Redis"],
    visualization: "commerce-ops",
    links: {
      github: "https://github.com/DaRkLord0350/Nexus",
    },
    imageFolder: "nexus",
    imageAlt: "Nexus commerce operations platform",
  },
  {
    id: "nlp-to-sql",
    number: "03",
    name: "NLP-to-SQL",
    tagline: "Natural Language Data Assistant",
    description:
      "Ask questions about business data in plain English instead of writing SQL — the system retrieves similar past queries, then grounds a generated query in the real database schema.",
    capabilities: [
      "Semantic few-shot retrieval over past question/query pairs",
      "Gemini-powered SQL generation grounded in real schema",
      "Automatic execution against a live MySQL database",
      "Plain-English explanation of results, not just raw SQL",
    ],
    pipeline: ["Natural Language", "Schema Retrieval", "Vector Search", "Gemini / LLM", "SQL Generation", "MySQL"],
    stack: ["Python", "LangChain", "Gemini", "MySQL", "ChromaDB"],
    visualization: "nlp-to-sql",
    links: {
      github: "https://github.com/DaRkLord0350/NLP-to-SQL",
    },
    imageFolder: "nlp-to-sql",
    imageAlt: "NLP-to-SQL natural language data assistant",
  },
  {
    id: "ocr-bot",
    number: "04",
    name: "OCR-Bot",
    tagline: "Document Intelligence Automation",
    description:
      "Turns a photo of a receipt or invoice into structured, business-ready data — removing manual data entry from document-heavy workflows.",
    capabilities: [
      "Image preprocessing — denoising, binarization and deskewing",
      "Text extraction via OCR",
      "LLM-powered structured field extraction (company, date, address, total)",
      "Structured JSON output ready for downstream systems",
    ],
    pipeline: ["Document", "Image Preprocessing", "OCR", "Data Extraction", "Structured JSON", "Backend / Analytics"],
    stack: ["Python", "OpenCV", "Tesseract OCR", "Gemini"],
    visualization: "ocr",
    links: {
      github: "https://github.com/DaRkLord0350/OCR-Bot",
    },
    imageFolder: "ocr-bot",
    imageAlt: "OCR-Bot document intelligence automation cover",
    imageFile: "ocr-bot-cover-v2.png",
  },
  {
    id: "data-governance",
    number: "05",
    name: "Customer Data Governance Platform",
    tagline: "Enterprise Data Governance & Master Data Management",
    description:
      "Turns messy customer data from multiple systems — CRM, website, ERP, payments — into one trustworthy record, modeled on the MDM practices used at large financial and professional-services firms.",
    capabilities: [
      "Multi-source ingestion pipeline with full audit logging",
      "Rule-driven data quality engine scoring 7 quality dimensions",
      "Configurable cleansing and standardization engine",
      "Metadata catalog with automatic PII classification and lineage",
      "Master Data Management — duplicate detection and golden-record merging",
      "Governance workflow with SLA tracking and generated KPI reports",
    ],
    pipeline: [
      "Multi-Source Data",
      "Ingestion",
      "Profiling",
      "Quality Scoring",
      "Cleansing",
      "MDM / Golden Records",
      "Governance & Reporting",
    ],
    stack: ["Python", "PostgreSQL", "Prisma", "Pandas"],
    visualization: "data-governance",
    links: {
      github: "https://github.com/DaRkLord0350/e-commmerce",
    },
    imageFolder: "e-commerce",
    imageAlt: "Generated data governance dashboard showing quality score, metadata coverage and open issues",
    imageFile: "e-commerce-cover-v2.png",
  },
  {
    id: "bi-dashboard",
    number: "06",
    name: "Discount & Profit Analysis Dashboard",
    tagline: "Business Intelligence Dashboard",
    description:
      "Answers a concrete business question — which discount bands actually protect profit margin — through an interactive dashboard built on real sales data.",
    capabilities: [
      "Sales, profit and units-sold tracking across segment, city and product",
      "Discount-band impact analysis on revenue and margin",
      "Interactive filtering by segment, city, product and discount band",
      "KPI cards and trend visuals driven by DAX measures",
    ],
    pipeline: ["Raw Sales Data", "SQL Transformation", "Power BI Model", "DAX Measures", "Interactive Dashboard"],
    stack: ["Power BI", "DAX", "SQL", "Excel"],
    visualization: "business-intelligence",
    links: {
      github: "https://github.com/DaRkLord0350/Discount-Profit-Analysis-Dashboard",
    },
    imageFolder: "analytics",
    imageAlt: "Sales performance and discount-band profitability Power BI dashboard",
    imageFile: "analytics-cover-v2.png",
  },
];
