export type Project = {
  id: string;
  number: string;
  name: string;
  problem: string;
  approach: string;
  built: string[];
  pipeline: string[];
  stack: string[];
  concepts: string[];
  visualization: "nlp-to-sql" | "financial-saas" | "ocr";
};

export const projects: Project[] = [
  {
    id: "nlp-to-sql",
    number: "01",
    name: "Enterprise NLP-to-SQL Platform",
    problem: "How can users query structured business data without manually writing SQL?",
    approach:
      "Built a schema-aware natural-language-to-SQL pipeline that retrieves relevant database context before generating SQL.",
    built: [
      "FastAPI REST backend",
      "Schema-aware retrieval",
      "LangChain-based orchestration",
      "Embeddings & vector search",
      "Gemini prompt engineering",
      "SQL generation",
      "Modular backend architecture",
    ],
    pipeline: ["Natural Language", "Schema Retrieval", "Vector Search", "Gemini / LLM", "SQL Generation", "MySQL"],
    stack: ["FastAPI", "LangChain", "Gemini", "MySQL", "ChromaDB"],
    concepts: ["Schema-Aware Retrieval", "Vector Search", "Prompt Engineering", "LLM Integration", "Modular Architecture"],
    visualization: "nlp-to-sql",
  },
  {
    id: "financial-saas",
    number: "02",
    name: "Enterprise Financial SaaS Platform",
    problem:
      "How do you build a financial operations platform that can handle CRM, invoicing, reconciliation, reporting and controlled access across enterprise workflows?",
    approach:
      "Designed an enterprise financial platform around structured data, secure APIs, role-based access and automated workflows.",
    built: [
      "CRM module",
      "Invoicing",
      "Reconciliation",
      "RBAC",
      "Reporting dashboards",
      "Workflow automation",
      "Financial API integrations",
      "Webhook processing",
      "Background jobs",
    ],
    pipeline: [
      "Users",
      "Next.js / React",
      "REST APIs",
      "Auth / RBAC",
      "Business Services",
      "PostgreSQL",
      "Background Jobs / Webhooks",
      "External Financial APIs",
    ],
    stack: ["Next.js", "React", "PostgreSQL", "Prisma", "AWS"],
    concepts: ["RBAC", "Workflow Automation", "Webhook Processing", "Background Jobs", "API Integration", "Enterprise Data Modeling"],
    visualization: "financial-saas",
  },
  {
    id: "ocr-intelligence",
    number: "03",
    name: "Document Intelligence OCR System",
    problem: "How can unstructured enterprise documents be converted into structured data that downstream systems can actually use?",
    approach:
      "Built an OCR pipeline combining image preprocessing and OCR to extract structured information from enterprise documents.",
    built: [
      "Document processing pipeline",
      "Image preprocessing",
      "OCR extraction",
      "Structured JSON output",
      "Backend-ready data format",
    ],
    pipeline: ["Document", "Image Preprocessing", "OCR", "Data Extraction", "Structured JSON", "Backend / Analytics"],
    stack: ["Python", "OpenCV", "OCR"],
    concepts: ["Image Preprocessing", "OCR Pipelines", "Structured Data Extraction", "Pipeline Design"],
    visualization: "ocr",
  },
];
