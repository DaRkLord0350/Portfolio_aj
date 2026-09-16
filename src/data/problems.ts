export type ProblemSolved = {
  id: string;
  ask: string;
  solution: string;
};

export const problemsSolved: ProblemSolved[] = [
  {
    id: "spreadsheets",
    ask: "We're doing everything in spreadsheets.",
    solution: "I turn manual workflows into internal software.",
  },
  {
    id: "integrations",
    ask: "Our systems don't talk to each other.",
    solution: "I build APIs and integrations that connect them.",
  },
  {
    id: "mvp",
    ask: "We need an MVP.",
    solution: "I design and ship the backend, frontend and data layer.",
  },
  {
    id: "visibility",
    ask: "Our team needs better visibility.",
    solution: "I turn operational data into dashboards and reporting.",
  },
  {
    id: "ai",
    ask: "We want AI inside our product.",
    solution: "I integrate AI into real business workflows.",
  },
  {
    id: "maintainability",
    ask: "Our existing system has become hard to maintain.",
    solution: "I improve the architecture, APIs, databases and workflows.",
  },
];
