export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    label: "Backend",
    items: ["Python", "FastAPI", "Node.js", "REST APIs", "Prisma", "PostgreSQL"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "ai-data",
    label: "AI & Data",
    items: ["SQL", "Pandas", "LangChain", "Gemini", "ChromaDB", "Databricks"],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    items: ["Docker", "Git", "GitHub Actions", "AWS", "Vercel"],
  },
];
