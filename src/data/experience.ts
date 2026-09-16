export type ResponsibilityGroup = {
  label: string;
  items: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  current: boolean;
  primary: boolean;
  dimensions?: string[];
  groups?: ResponsibilityGroup[];
  responsibilities: string[];
  tags: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Sharelog",
    role: "Full Stack Developer",
    location: "Remote",
    period: "Mar 2026 — Present",
    current: true,
    primary: true,
    groups: [
      {
        label: "Backend Engineering",
        items: ["FastAPI", "Node.js", "REST API architecture", "Enterprise services"],
      },
      {
        label: "Data & Databases",
        items: ["PostgreSQL", "Prisma ORM", "Schema design", "Indexing", "SQL optimization"],
      },
      {
        label: "Security & Integrations",
        items: ["JWT authentication", "RBAC", "API security", "Banking API integrations", "Secure webhooks"],
      },
      {
        label: "Reliability & Delivery",
        items: ["Async processing", "Background jobs", "Retry mechanisms", "GitHub Actions", "Docker Compose"],
      },
    ],
    responsibilities: [
      "Design and ship scalable backend services with FastAPI, Node.js, PostgreSQL and Prisma for real production systems.",
      "Built 20+ REST APIs powering CRM, invoicing, authentication, reporting and workflow automation for the business.",
      "Design normalized schemas, add indexing and optimize SQL queries so transactional workloads stay fast at scale.",
      "Integrate banking APIs through secure webhooks, async processing, background jobs and retry mechanisms.",
      "Implement JWT authentication, RBAC and API security so different teams only see what's relevant to them.",
      "Ship with Git, GitHub Actions and Docker Compose for reliable, repeatable production delivery.",
    ],
    tags: ["FastAPI", "Node.js", "PostgreSQL", "Prisma ORM", "JWT", "RBAC", "Docker Compose", "GitHub Actions"],
  },
  {
    company: "Shopdeck",
    role: "Growth Consultant",
    location: "Bangalore",
    period: "Dec 2025 — Feb 2026",
    current: false,
    primary: false,
    dimensions: ["Data", "Business Analysis", "Product Thinking", "Technical Engineering"],
    responsibilities: [
      "Queried large merchant datasets using SQL to identify revenue optimization opportunities.",
      "Built Excel dashboards and analytical reports supporting product and business decisions.",
      "Automated recurring data analysis workflows and improved operational reporting efficiency.",
      "Collaborated with cross-functional teams to deliver data-driven business insights.",
    ],
    tags: ["SQL", "Excel", "Data Analysis", "Cross-functional Collaboration"],
  },
];
