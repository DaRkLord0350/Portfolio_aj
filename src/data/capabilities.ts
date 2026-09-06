export type Capability = {
  id: string;
  icon: "server" | "database" | "shield" | "building" | "brain" | "cloud";
  title: string;
  description: string;
  tags: string[];
};

export const capabilities: Capability[] = [
  {
    id: "api-engineering",
    icon: "server",
    title: "API Engineering",
    description:
      "Designing and shipping REST APIs — 20+ endpoints supporting CRM, invoicing, authentication, reporting and workflow automation.",
    tags: ["FastAPI", "Node.js", "REST APIs", "OpenAPI"],
  },
  {
    id: "database-architecture",
    icon: "database",
    title: "Database Architecture",
    description:
      "Designing normalized schemas, indexing strategies and optimized SQL queries for transactional workloads.",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
  },
  {
    id: "auth",
    icon: "shield",
    title: "Authentication & Authorization",
    description:
      "Implementing JWT authentication, role-based access control and API security across enterprise modules.",
    tags: ["JWT", "RBAC", "API Security"],
  },
  {
    id: "enterprise-systems",
    icon: "building",
    title: "Enterprise Systems",
    description:
      "Building enterprise modules — CRM, invoicing, reconciliation and reporting — with webhook and background-job processing.",
    tags: ["Webhooks", "Background Jobs", "Workflow Automation"],
  },
  {
    id: "ai-data",
    icon: "brain",
    title: "AI / Data Applications",
    description:
      "Building schema-aware retrieval and LLM-driven pipelines using LangChain, embeddings, vector search and Gemini.",
    tags: ["LangChain", "Gemini", "ChromaDB", "Pandas"],
  },
  {
    id: "cloud-devops",
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Shipping with Docker Compose, GitHub Actions and cloud platforms for reliable, repeatable delivery.",
    tags: ["Docker", "GitHub Actions", "AWS", "Vercel"],
  },
];
