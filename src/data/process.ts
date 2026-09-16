export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the business problem, the workflow and the people using it.",
  },
  {
    number: "02",
    title: "Design",
    description: "Define the architecture, the data model and the product flow.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop the frontend, backend, APIs, integrations and automation.",
  },
  {
    number: "04",
    title: "Ship",
    description: "Deploy, test, monitor and iterate based on real usage.",
  },
];
