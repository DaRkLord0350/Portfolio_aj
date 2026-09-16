export type Capability = {
  id: string;
  icon: "zap" | "server" | "building" | "brain" | "database" | "link";
  title: string;
  description: string;
  tags: string[];
};

export const capabilities: Capability[] = [
  {
    id: "business-automation",
    icon: "zap",
    title: "Business Automation",
    description:
      "Replacing repetitive spreadsheets, manual processes and operational busywork with reliable software.",
    tags: ["Workflow Automation", "Background Jobs", "Scripting"],
  },
  {
    id: "backend-apis",
    icon: "server",
    title: "Backend Systems & APIs",
    description:
      "Production-ready REST APIs, databases, authentication, RBAC and business workflows.",
    tags: ["FastAPI", "Node.js", "REST APIs", "RBAC"],
  },
  {
    id: "saas-platforms",
    icon: "building",
    title: "SaaS & Internal Platforms",
    description:
      "Multi-user applications, dashboards, admin panels, CRM and ERP-style operational systems.",
    tags: ["Next.js", "Multi-Tenant", "PostgreSQL", "Prisma"],
  },
  {
    id: "ai-applications",
    icon: "brain",
    title: "AI-Powered Applications",
    description:
      "LLM-powered workflows, natural-language-to-SQL, document intelligence and AI assistants.",
    tags: ["LangChain", "Gemini", "ChromaDB", "LLM Integration"],
  },
  {
    id: "data-analytics",
    icon: "database",
    title: "Data & Analytics",
    description:
      "Dashboards, reporting pipelines, SQL analysis and business intelligence built on real data.",
    tags: ["SQL", "Pandas", "Data Pipelines", "Dashboards"],
  },
  {
    id: "integrations",
    icon: "link",
    title: "Integrations",
    description:
      "Connecting products to banking, payment, CRM and third-party APIs through secure webhooks.",
    tags: ["Webhooks", "Banking APIs", "REST APIs"],
  },
];
