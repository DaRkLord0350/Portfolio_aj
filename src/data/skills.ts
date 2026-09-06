export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "C++"],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "Prisma ORM",
      "JWT Authentication",
      "RBAC",
      "API Design",
      "OpenAPI",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: ["Docker", "Docker Compose", "Git", "GitHub", "GitHub Actions", "AWS", "Vercel", "Firebase"],
  },
  {
    id: "ai-data",
    label: "AI & Data",
    items: ["LangChain", "Gemini", "Pandas", "NumPy", "Databricks", "ChromaDB"],
  },
];
