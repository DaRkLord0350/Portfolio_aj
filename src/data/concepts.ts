export type ConceptGroup = {
  id: string;
  icon: "backend" | "database" | "security" | "system" | "ai" | "devops" | "frontend";
  label: string;
  items: string[];
};

export const engineeringFoundations: ConceptGroup[] = [
  {
    id: "backend",
    icon: "backend",
    label: "Backend Engineering",
    items: [
      "API Design",
      "REST API Architecture",
      "OpenAPI",
      "Modular Architecture",
      "Asynchronous Processing",
      "Background Jobs",
      "Retry Mechanisms",
      "Webhook Processing",
      "Workflow Automation",
    ],
  },
  {
    id: "database",
    icon: "database",
    label: "Database Engineering",
    items: [
      "Database Modeling",
      "Normalization",
      "Indexing",
      "SQL Query Optimization",
      "Relational Databases",
      "Schema Design",
      "Transactional Workloads",
    ],
  },
  {
    id: "security",
    icon: "security",
    label: "Security",
    items: ["Authentication", "Authorization", "JWT", "RBAC", "API Security", "Role-Based Access Control"],
  },
  {
    id: "system-design",
    icon: "system",
    label: "System Design",
    items: [
      "Scalable Backend Services",
      "Service Architecture",
      "API Integration",
      "External API Integration",
      "Event & Webhook Processing",
      "Background Processing",
      "Production Deployment",
    ],
  },
  {
    id: "ai-data",
    icon: "ai",
    label: "AI & Data",
    items: [
      "Natural Language to SQL",
      "Schema-Aware Retrieval",
      "Vector Search",
      "Embeddings",
      "Prompt Engineering",
      "LLM Integration",
      "OCR Pipelines",
      "Structured Data Extraction",
      "Data Analysis",
    ],
  },
  {
    id: "devops",
    icon: "devops",
    label: "DevOps & Delivery",
    items: ["Docker", "Docker Compose", "Git", "GitHub", "GitHub Actions", "AWS", "CI/CD"],
  },
  {
    id: "frontend",
    icon: "frontend",
    label: "Frontend Engineering",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "Consuming REST APIs"],
  },
];
